CREATE DATABASE IF NOT EXISTS stack_burger CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE stack_burger;

DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS contact_messages;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS menu_categories;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role ENUM('manager', 'kitchen') NOT NULL,
  label VARCHAR(100) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  password VARCHAR(120) NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE menu_categories (
  slug VARCHAR(64) PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE menu_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_slug VARCHAR(64) NOT NULL,
  name VARCHAR(160) NOT NULL,
  price INT NOT NULL DEFAULT 0,
  kcal INT NOT NULL DEFAULT 0,
  ingredients TEXT NULL,
  allergens JSON NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_slug) REFERENCES menu_categories(slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  table_name VARCHAR(40) NOT NULL,
  drink_note VARCHAR(180) NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'bekliyor',
  source VARCHAR(40) NOT NULL DEFAULT 'müşteri',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  menu_item_id INT NULL,
  product_name VARCHAR(160) NOT NULL,
  category_slug VARCHAR(64) NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  unit_price INT NOT NULL DEFAULT 0,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(160) NOT NULL,
  email VARCHAR(160) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO users (role, label, email, password) VALUES
('kitchen', 'Mutfak Personeli', 'mutfak@stackburger.local', 'mutfak123'),
('manager', 'Yönetici', 'yonetici@stackburger.local', 'yonetici123');

INSERT INTO menu_categories (slug, name, sort_order) VALUES
('smash_burgerler', 'Smash Burgerler', 1),
('wrapler', 'Wrapler', 2),
('yancilar', 'Yancılar', 3),
('citir_tavuklar', 'Çıtır Tavuklar', 4),
('soslar', 'Soslar', 5),
('menuler', 'Menüler', 6),
('icecekler', 'İçecekler', 7);

INSERT INTO menu_items (category_slug, name, price, kcal, ingredients, allergens, sort_order) VALUES
('smash_burgerler', 'Classic Smash', 550, 780, '2x köfte (160 g), cheddar, turşu, özel sos', JSON_ARRAY('Glüten', 'Süt', 'Yumurta'), 1),
('smash_burgerler', 'Double Cheese Smash', 620, 1050, '3x köfte (240 g), 2x cheddar, karamelize soğan', JSON_ARRAY('Glüten', 'Süt', 'Yumurta'), 2),
('smash_burgerler', 'Trüflü Smash', 680, 820, '2x köfte, cheddar, trüf mayonez', JSON_ARRAY('Glüten', 'Süt', 'Yumurta'), 3),
('smash_burgerler', 'Barbekü Smash', 650, 760, '2x köfte, cheddar, barbekü sos, soğan', JSON_ARRAY('Glüten', 'Süt'), 4),
('wrapler', 'Crispy Chicken Wrap', 420, 560, 'Çıtır tavuk, tortilla, ranch sos', JSON_ARRAY('Glüten', 'Süt'), 1),
('wrapler', 'Biftek Wrap', 480, 640, 'Dana et (120 g), tortilla, özel sos', JSON_ARRAY('Glüten'), 2),
('yancilar', 'Kabuklu Patates Kızartması', 180, 400, 'Kabuklu patates, kaya tuzu', JSON_ARRAY(), 1),
('yancilar', 'Trüflü Patates Kızartması', 260, 550, 'Patates kızartması, trüf yağı, parmesan', JSON_ARRAY('Süt'), 2),
('yancilar', 'Soğan Halkası', 220, 350, 'Çıtır kaplamalı soğan halkaları', JSON_ARRAY('Glüten'), 3),
('citir_tavuklar', 'Çıtır Tavuk Topları', 320, 450, 'Tavuk, özel sos', JSON_ARRAY('Glüten'), 1),
('citir_tavuklar', 'Çıtır Tavuk Kanatları', 400, 650, 'Tavuk, özel sos', JSON_ARRAY('Glüten'), 2),
('citir_tavuklar', 'Buffalo Kanatları', 420, 700, 'Buffalo soslu tavuk kanadı', JSON_ARRAY(), 3),
('soslar', 'Smash Sos (20 g)', 30, 100, 'Mayonez bazlı burger sosu', JSON_ARRAY('Yumurta'), 1),
('soslar', 'Trüflü Mayonez (20 g)', 40, 120, 'Trüf aromalı mayonez', JSON_ARRAY('Yumurta'), 2),
('soslar', 'Barbekü Sos (20 g)', 30, 50, 'İsli barbekü sos', JSON_ARRAY(), 3),
('menuler', 'Klasik Set', 720, 1200, 'Klasik Smash Burger + patates kızartması + içecek', JSON_ARRAY('Glüten', 'Süt', 'Yumurta'), 1),
('menuler', 'Trüflü Set', 890, 1400, 'Trüflü Smash Burger + patates kızartması + içecek', JSON_ARRAY('Glüten', 'Süt'), 2),
('menuler', 'Tavuk Set', 690, 1100, 'Tavuk Burger + patates kızartması + içecek', JSON_ARRAY('Glüten', 'Süt', 'Yumurta'), 3),
('icecekler', 'Limonata', 140, 130, 'Ev yapımı limonata', JSON_ARRAY(), 1),
('icecekler', 'Soğuk Çay', 120, 120, 'Şeftali veya limon aromalı', JSON_ARRAY(), 2),
('icecekler', 'Gazlı İçecekler', 110, 140, 'Kutu içecek seçenekleri', JSON_ARRAY(), 3),
('icecekler', 'Ayran', 90, 90, 'Soğuk ayran', JSON_ARRAY('Süt'), 4);
