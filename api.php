<?php
declare(strict_types=1);

session_start();
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/db.php';

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function input_data(): array
{
    $raw = file_get_contents('php://input');
    $data = $raw ? json_decode($raw, true) : [];
    return is_array($data) ? $data : [];
}

function require_role(array $roles): void
{
    $role = $_SESSION['user']['role'] ?? '';
    if (!in_array($role, $roles, true)) {
        json_response(['success' => false, 'message' => 'Bu işlem için giriş gerekli.'], 403);
    }
}

function menu_payload(): array
{
    $categories = db()->query('SELECT slug, name FROM menu_categories ORDER BY sort_order, name')->fetchAll();
    $items = db()->query('SELECT * FROM menu_items WHERE is_active = 1 ORDER BY sort_order, id')->fetchAll();
    $menu = [];
    $labels = [];

    foreach ($categories as $category) {
        $menu[$category['slug']] = [];
        $labels[$category['slug']] = $category['name'];
    }

    foreach ($items as $item) {
        $menu[$item['category_slug']][] = [
            'id' => (string) $item['id'],
            'name' => $item['name'],
            'category' => $item['category_slug'],
            'price' => (int) $item['price'],
            'kcal' => (int) $item['kcal'],
            'ingredients' => $item['ingredients'] ?? '',
            'allergens' => $item['allergens'] ? json_decode($item['allergens'], true) : [],
        ];
    }

    return ['menu' => $menu, 'categoryLabels' => $labels];
}

function order_rows(string $where): array
{
    $orders = db()->query("SELECT * FROM orders {$where} ORDER BY created_at DESC")->fetchAll();
    if (!$orders) return [];

    $ids = array_column($orders, 'id');
    $placeholders = implode(',', array_fill(0, count($ids), '?'));
    $stmt = db()->prepare("SELECT * FROM order_items WHERE order_id IN ({$placeholders}) ORDER BY id");
    $stmt->execute($ids);
    $itemsByOrder = [];

    foreach ($stmt->fetchAll() as $item) {
        $itemsByOrder[(int) $item['order_id']][] = [
            'id' => (string) $item['menu_item_id'],
            'name' => $item['product_name'],
            'category' => $item['category_slug'],
            'price' => (int) $item['unit_price'],
            'quantity' => (int) $item['quantity'],
        ];
    }

    return array_map(static function (array $order) use ($itemsByOrder): array {
        return [
            'id' => (string) $order['id'],
            'tableName' => $order['table_name'],
            'items' => $itemsByOrder[(int) $order['id']] ?? [],
            'drinkNote' => $order['drink_note'] ?? '',
            'status' => $order['status'],
            'timestamp' => date(DATE_ATOM, strtotime($order['created_at'])),
            'completedAt' => $order['completed_at'] ? date(DATE_ATOM, strtotime($order['completed_at'])) : null,
            'source' => $order['source'],
        ];
    }, $orders);
}

function bootstrap(): array
{
    $activeOrders = order_rows("WHERE status IN ('bekliyor', 'hazırlanıyor')");
    $archivedOrders = order_rows("WHERE status = 'tamamlandı'");
    $messages = db()->query('SELECT * FROM contact_messages ORDER BY created_at DESC')->fetchAll();

    return array_merge(['success' => true], menu_payload(), [
        'activeOrders' => $activeOrders,
        'archivedOrders' => $archivedOrders,
        'notifications' => array_map(static fn($order) => [
            'id' => 'notification_' . $order['id'],
            'orderId' => $order['id'],
            'tableName' => $order['tableName'],
            'message' => $order['tableName'] . ' için yeni sipariş mutfağa düştü.',
            'timestamp' => $order['timestamp'],
            'read' => false,
        ], $activeOrders),
        'contactMessages' => array_map(static fn($message) => [
            'id' => (string) $message['id'],
            'name' => $message['name'],
            'email' => $message['email'],
            'message' => $message['message'],
            'timestamp' => date(DATE_ATOM, strtotime($message['created_at'])),
            'status' => 'new',
        ], $messages),
        'currentUser' => $_SESSION['user'] ?? null,
    ]);
}

try {
    $action = $_GET['action'] ?? '';
    $data = input_data();

    if ($action === 'bootstrap') json_response(bootstrap());

    if ($action === 'login') {
        $stmt = db()->prepare('SELECT id, role, label, email FROM users WHERE role = ? AND email = ? AND password = ? AND is_active = 1 LIMIT 1');
        $stmt->execute([$data['role'] ?? '', $data['email'] ?? '', $data['password'] ?? '']);
        $user = $stmt->fetch();
        if (!$user) json_response(['success' => false, 'message' => 'E-posta, şifre veya rol hatalı.'], 401);
        $_SESSION['user'] = ['id' => (string) $user['id'], 'role' => $user['role'], 'label' => $user['label'], 'email' => $user['email']];
        json_response(['success' => true, 'user' => $_SESSION['user']]);
    }

    if ($action === 'logout') {
        $_SESSION = [];
        session_destroy();
        json_response(['success' => true]);
    }

    if ($action === 'save_product') {
        require_role(['manager']);
        $allergens = json_encode($data['allergens'] ?? [], JSON_UNESCAPED_UNICODE);
        if ((int) ($data['id'] ?? 0) > 0) {
            $stmt = db()->prepare('UPDATE menu_items SET name = ?, price = ?, kcal = ?, ingredients = ?, allergens = ? WHERE id = ?');
            $stmt->execute([$data['name'], (int) $data['price'], (int) $data['kcal'], $data['ingredients'] ?? '', $allergens, (int) $data['id']]);
            $id = (string) $data['id'];
        } else {
            $stmt = db()->prepare('INSERT INTO menu_items (category_slug, name, price, kcal, ingredients, allergens, sort_order) VALUES (?, ?, ?, ?, ?, ?, 999)');
            $stmt->execute([$data['category'], $data['name'], (int) $data['price'], (int) $data['kcal'], $data['ingredients'] ?? '', $allergens]);
            $id = (string) db()->lastInsertId();
        }
        json_response(array_merge(['success' => true, 'id' => $id], menu_payload()));
    }

    if ($action === 'delete_product') {
        require_role(['manager']);
        $stmt = db()->prepare('UPDATE menu_items SET is_active = 0 WHERE id = ?');
        $stmt->execute([(int) ($data['id'] ?? 0)]);
        json_response(array_merge(['success' => true], menu_payload()));
    }

    if ($action === 'create_order') {
        $items = $data['items'] ?? [];
        if (!$items) json_response(['success' => false, 'message' => 'Sipariş için ürün gerekli.'], 422);
        $pdo = db();
        $pdo->beginTransaction();
        $stmt = $pdo->prepare('INSERT INTO orders (table_name, drink_note, status, source) VALUES (?, ?, "bekliyor", "müşteri")');
        $stmt->execute([$data['tableName'] ?? 'Masa 1', $data['drinkNote'] ?? '']);
        $orderId = (int) $pdo->lastInsertId();
        $itemStmt = $pdo->prepare('INSERT INTO order_items (order_id, menu_item_id, product_name, category_slug, quantity, unit_price) VALUES (?, ?, ?, ?, ?, ?)');
        foreach ($items as $item) {
            $itemStmt->execute([$orderId, (int) $item['id'], $item['name'], $item['category'], (int) $item['quantity'], (int) $item['price']]);
        }
        $pdo->commit();
        json_response(bootstrap());
    }

    if ($action === 'update_order_status') {
        require_role(['kitchen', 'manager']);
        $status = $data['status'] ?? '';
        if (!in_array($status, ['bekliyor', 'hazırlanıyor', 'tamamlandı'], true)) json_response(['success' => false, 'message' => 'Geçersiz durum.'], 422);
        $completedSql = $status === 'tamamlandı' ? ', completed_at = NOW()' : ', completed_at = NULL';
        $stmt = db()->prepare("UPDATE orders SET status = ? {$completedSql} WHERE id = ?");
        $stmt->execute([$status, (int) $data['id']]);
        json_response(bootstrap());
    }

    if ($action === 'create_contact') {
        $stmt = db()->prepare('INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)');
        $stmt->execute([$data['name'] ?? '', $data['email'] ?? '', $data['message'] ?? '']);
        json_response(bootstrap());
    }

    if ($action === 'clear_contact_messages') {
        require_role(['manager']);
        db()->exec('DELETE FROM contact_messages');
        json_response(bootstrap());
    }

    json_response(['success' => false, 'message' => 'API aksiyonu bulunamadı.'], 404);
} catch (Throwable $error) {
    try {
        if (db()->inTransaction()) db()->rollBack();
    } catch (Throwable $ignored) {
    }
    json_response(['success' => false, 'message' => $error->getMessage()], 500);
}
