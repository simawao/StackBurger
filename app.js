const STORAGE_KEYS = {
  tables: "stackBurger.tables",
  activeOrders: "stackBurger.activeOrders",
  archivedOrders: "stackBurger.archivedOrders",
  dailyReport: "stackBurger.dailyReport",
  menu: "stackBurger.menu",
  currentUser: "stackBurger.currentUser",
  notifications: "stackBurger.notifications",
  contactMessages: "stackBurger.contactMessages",
  dataVersion: "stackBurger.dataVersion",
  menuVersion: "stackBurger.menuVersion"
};

const CURRENT_DATA_VERSION = "clean-revenue-from-completed-orders-v1";
const CURRENT_MENU_VERSION = "stack-pdf-menu-v1";
const BACKEND_ENABLED = ["http:", "https:"].includes(window.location.protocol);
const API_URL = "api.php";

const TABLES = ["Masa 1", "Masa 2", "Masa 3", "Masa 4"];

const DEMO_ACCOUNTS = [
  { id: "kitchen-demo", role: "kitchen", label: "Mutfak Demo", email: "mutfak@stackburger.local", password: "mutfak123", startView: "kitchen" },
  { id: "manager-demo", role: "manager", label: "Yönetici Demo", email: "yonetici@stackburger.local", password: "yonetici123", startView: "manager" }
];

const ROLE_LABELS = {
  kitchen: "Mutfak",
  manager: "Yönetici"
};

const VIEW_ROLES = {
  kitchen: "kitchen",
  manager: "manager"
};

const ROLE_VIEWS = {
  kitchen: "kitchen",
  manager: "manager"
};

const ROLE_HOME_PAGES = {
  kitchen: "kitchen-dashboard.html",
  manager: "manager-dashboard.html"
};

const DEFAULT_MENU = {
  smash_burgerler: [
    { id: "smash_1", name: "Classic Smash", price: 550, kcal: 780, ingredients: "2x köfte (160 g), cheddar, turşu, özel sos", allergens: ["Glüten", "Süt", "Yumurta"] },
    { id: "smash_2", name: "Double Cheese Smash", price: 620, kcal: 1050, ingredients: "3x köfte (240 g), 2x cheddar, karamelize soğan", allergens: ["Glüten", "Süt", "Yumurta"] },
    { id: "smash_3", name: "Trüflü Smash", price: 680, kcal: 820, ingredients: "2x köfte, cheddar, trüf mayonez", allergens: ["Glüten", "Süt", "Yumurta"] },
    { id: "smash_4", name: "Barbekü Smash", price: 650, kcal: 760, ingredients: "2x köfte, cheddar, barbekü sos, soğan", allergens: ["Glüten", "Süt"] }
  ],
  wrapler: [
    { id: "wrap_1", name: "Crispy Chicken Wrap", price: 420, kcal: 560, ingredients: "Çıtır tavuk, tortilla, ranch sos", allergens: ["Glüten", "Süt"] },
    { id: "wrap_2", name: "Biftek Wrap", price: 480, kcal: 640, ingredients: "Dana et (120 g), tortilla, özel sos", allergens: ["Glüten"] }
  ],
  yancilar: [
    { id: "side_1", name: "Kabuklu Patates Kızartması", price: 180, kcal: 400, ingredients: "Kabuklu patates, kaya tuzu", allergens: [] },
    { id: "side_2", name: "Trüflü Patates Kızartması", price: 260, kcal: 550, ingredients: "Patates kızartması, trüf yağı, parmesan", allergens: ["Süt"] },
    { id: "side_3", name: "Soğan Halkası", price: 220, kcal: 350, ingredients: "Çıtır kaplamalı soğan halkaları", allergens: ["Glüten"] }
  ],
  citir_tavuklar: [
    { id: "chicken_1", name: "Çıtır Tavuk Topları", price: 320, kcal: 450, ingredients: "Tavuk, özel sos", allergens: ["Glüten"] },
    { id: "chicken_2", name: "Çıtır Tavuk Kanatları", price: 400, kcal: 650, ingredients: "Tavuk, özel sos", allergens: ["Glüten"] },
    { id: "chicken_3", name: "Buffalo Kanatları", price: 420, kcal: 700, ingredients: "Buffalo soslu tavuk kanadı", allergens: [] }
  ],
  soslar: [
    { id: "sauce_1", name: "Smash Sos (20 g)", price: 30, kcal: 100, ingredients: "Mayonez bazlı burger sosu", allergens: ["Yumurta"] },
    { id: "sauce_2", name: "Trüflü Mayonez (20 g)", price: 40, kcal: 120, ingredients: "Trüf aromalı mayonez", allergens: ["Yumurta"] },
    { id: "sauce_3", name: "Barbekü Sos (20 g)", price: 30, kcal: 50, ingredients: "İsli barbekü sos", allergens: [] }
  ],
  menuler: [
    { id: "combo_1", name: "Klasik Set", price: 720, kcal: 1200, ingredients: "Klasik Smash Burger + patates kızartması + içecek", allergens: ["Glüten", "Süt", "Yumurta"] },
    { id: "combo_2", name: "Trüflü Set", price: 890, kcal: 1400, ingredients: "Trüflü Smash Burger + patates kızartması + içecek", allergens: ["Glüten", "Süt"] },
    { id: "combo_3", name: "Tavuk Set", price: 690, kcal: 1100, ingredients: "Tavuk Burger + patates kızartması + içecek", allergens: ["Glüten", "Süt", "Yumurta"] }
  ],
  icecekler: [
    { id: "drink_1", name: "Limonata", price: 140, kcal: 130, ingredients: "Ev yapımı limonata", allergens: [] },
    { id: "drink_2", name: "Soğuk Çay", price: 120, kcal: 120, ingredients: "Şeftali veya limon aromalı", allergens: [] },
    { id: "drink_3", name: "Gazlı İçecekler", price: 110, kcal: 140, ingredients: "Kutu içecek seçenekleri", allergens: [] },
    { id: "drink_4", name: "Ayran", price: 90, kcal: 90, ingredients: "Soğuk ayran", allergens: ["Süt"] }
  ]
};

const CATEGORY_LABELS = {
  smash_burgerler: "Smash Burgerler",
  wrapler: "Wrapler",
  yancilar: "Yancılar",
  citir_tavuklar: "Çıtır Tavuklar",
  soslar: "Soslar",
  menuler: "Menüler",
  icecekler: "İçecekler"
};

let menuIndex = {};

cleanupLegacyDemoOperations();
cleanupStoredMenuVersion();
let state = loadState();
let activeTable = TABLES[0];
let activeCategory = Object.keys(state.menu)[0];
let selectedEditorCategory = activeCategory;
let selectedEditorProductId = state.menu[selectedEditorCategory]?.[0]?.id || "";
let customerActiveCategory = activeCategory;
let customerCart = [];
let toastTimer;
let backendBootstrapped = false;
rebuildMenuIndex();

async function apiRequest(action, data = {}, options = {}) {
  const method = options.method || "POST";
  const response = await fetch(`${API_URL}?action=${encodeURIComponent(action)}`, {
    method,
    headers: method === "GET" ? {} : { "Content-Type": "application/json" },
    body: method === "GET" ? undefined : JSON.stringify(data),
    credentials: "same-origin"
  });
  const payload = await response.json();
  if (!response.ok || payload.success === false) {
    throw new Error(payload.message || "Sunucu işlemi tamamlanamadı.");
  }
  return payload;
}

function applyServerPayload(payload) {
  if (!payload) return;
  if (payload.categoryLabels) Object.assign(CATEGORY_LABELS, payload.categoryLabels);
  if (payload.menu) state.menu = payload.menu;
  if (payload.activeOrders) state.activeOrders = payload.activeOrders;
  if (payload.archivedOrders) state.archivedOrders = payload.archivedOrders;
  if (payload.notifications) state.notifications = payload.notifications;
  if (payload.contactMessages) state.contactMessages = payload.contactMessages;
  if (Object.prototype.hasOwnProperty.call(payload, "currentUser")) state.currentUser = payload.currentUser;
  rebuildMenuIndex();
  ensureActiveCategory();
  ensureEditorSelection();
  render();
}

async function syncFromBackend() {
  if (!BACKEND_ENABLED) return;
  try {
    const payload = await apiRequest("bootstrap", {}, { method: "GET" });
    backendBootstrapped = true;
    applyServerPayload(payload);
  } catch (error) {
    backendBootstrapped = true;
    console.warn(error);
  }
}

const formatCurrency = (value) => new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0
}).format(value);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function ensureActiveCategory() {
  const categories = Object.keys(state.menu);
  if (!categories.includes(activeCategory)) {
    activeCategory = categories[0];
  }
}

function ensureEditorSelection() {
  const categories = Object.keys(state.menu);
  if (!categories.includes(selectedEditorCategory)) {
    selectedEditorCategory = activeCategory || categories[0];
  }

  const products = state.menu[selectedEditorCategory] || [];
  if (!products.some((item) => item.id === selectedEditorProductId)) {
    selectedEditorProductId = products[0]?.id || "";
  }
}

function canAccess(view) {
  const requiredRole = VIEW_ROLES[view];
  return !requiredRole || state.currentUser?.role === requiredRole;
}

function roleHomePage(role = state.currentUser?.role) {
  return ROLE_HOME_PAGES[role] || "login.html";
}

function switchView(view) {
  if (!canAccess(view)) {
    const requiredRole = ROLE_LABELS[VIEW_ROLES[view]] || "ilgili rol";
    showToast(`${requiredRole} ekranı için demo hesabıyla giriş yapın.`);
    window.location.href = "login.html";
    return;
  }

  document.querySelectorAll(".role-button").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  document.querySelectorAll("[data-panel-view]").forEach((button) => button.classList.toggle("is-active", button.dataset.panelView === view));
  document.querySelectorAll(".view").forEach((section) => section.classList.toggle("is-visible", section.id === `${view}-view`));
  document.body.dataset.activePanel = view;
}

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function loadSessionJson(key, fallback) {
  try {
    return JSON.parse(sessionStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function cleanupLegacyDemoOperations() {
  if (localStorage.getItem(STORAGE_KEYS.dataVersion) === CURRENT_DATA_VERSION) return;

  localStorage.removeItem(STORAGE_KEYS.tables);
  localStorage.removeItem(STORAGE_KEYS.activeOrders);
  localStorage.removeItem(STORAGE_KEYS.archivedOrders);
  localStorage.removeItem(STORAGE_KEYS.dailyReport);
  localStorage.removeItem(STORAGE_KEYS.notifications);
  localStorage.setItem(STORAGE_KEYS.dataVersion, CURRENT_DATA_VERSION);
}

function cleanupStoredMenuVersion() {
  if (localStorage.getItem(STORAGE_KEYS.menuVersion) === CURRENT_MENU_VERSION) return;

  localStorage.removeItem(STORAGE_KEYS.menu);
  localStorage.setItem(STORAGE_KEYS.menuVersion, CURRENT_MENU_VERSION);
}

function loadMenu() {
  const savedMenu = loadJson(STORAGE_KEYS.menu, null);
  return savedMenu || cloneData(DEFAULT_MENU);
}

function rebuildMenuIndex() {
  menuIndex = Object.entries(state.menu).reduce((acc, [category, items]) => {
    items.forEach((item) => {
      acc[item.id] = { ...item, category };
    });
    return acc;
  }, {});
}

function defaultTables() {
  return TABLES.reduce((acc, table) => {
    acc[table] = { draft: [], unpaidOrderIds: [] };
    return acc;
  }, {});
}

function loadState() {
  const nextState = {
    tables: { ...defaultTables(), ...loadJson(STORAGE_KEYS.tables, {}) },
    activeOrders: loadJson(STORAGE_KEYS.activeOrders, []),
    archivedOrders: loadJson(STORAGE_KEYS.archivedOrders, []),
    dailyReport: loadJson(STORAGE_KEYS.dailyReport, { payments: [], productSales: {} }),
    menu: loadMenu(),
    currentUser: loadSessionJson(STORAGE_KEYS.currentUser, null),
    notifications: loadJson(STORAGE_KEYS.notifications, []),
    contactMessages: loadJson(STORAGE_KEYS.contactMessages, [])
  };
  return nextState;
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.tables, JSON.stringify(state.tables));
  localStorage.setItem(STORAGE_KEYS.activeOrders, JSON.stringify(state.activeOrders));
  localStorage.setItem(STORAGE_KEYS.archivedOrders, JSON.stringify(state.archivedOrders));
  localStorage.setItem(STORAGE_KEYS.dailyReport, JSON.stringify(state.dailyReport));
  localStorage.setItem(STORAGE_KEYS.menu, JSON.stringify(state.menu));
  if (state.currentUser) {
    sessionStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(state.currentUser));
  } else {
    sessionStorage.removeItem(STORAGE_KEYS.currentUser);
  }
  localStorage.setItem(STORAGE_KEYS.notifications, JSON.stringify(state.notifications));
  localStorage.setItem(STORAGE_KEYS.contactMessages, JSON.stringify(state.contactMessages));
}

function syncFromStorage() {
  if (BACKEND_ENABLED) {
    syncFromBackend();
    return;
  }

  const knownOrderIds = new Set(state.activeOrders.map((order) => order.id));
  state = loadState();
  rebuildMenuIndex();
  const incomingOrders = state.activeOrders.filter((order) => !knownOrderIds.has(order.id));
  if (incomingOrders.length && state.currentUser?.role === "kitchen") {
    showToast(`${incomingOrders.length} yeni sipariş mutfağa düştü.`);
  }
  ensureActiveCategory();
  ensureEditorSelection();
  render();
}

function getTable(tableName = activeTable) {
  if (!state.tables[tableName]) {
    state.tables[tableName] = { draft: [], unpaidOrderIds: [] };
  }
  return state.tables[tableName];
}

function getOrderById(orderId) {
  return state.activeOrders.find((order) => order.id === orderId)
    || state.archivedOrders.find((order) => order.id === orderId);
}

function orderTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function orderDate(order) {
  return new Date(order.completedAt || order.timestamp || Date.now());
}

function isToday(date) {
  const today = new Date();
  return date.getFullYear() === today.getFullYear()
    && date.getMonth() === today.getMonth()
    && date.getDate() === today.getDate();
}

function completedOrdersToday() {
  return state.archivedOrders.filter((order) => isToday(orderDate(order)));
}

function completedOrderRevenue(orders = completedOrdersToday()) {
  return orders.reduce((sum, order) => sum + orderTotal(order.items || []), 0);
}

function completedProductSales(orders = completedOrdersToday()) {
  return orders.flatMap((order) => order.items || []).reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = {
        id: item.id,
        name: item.name,
        category: item.category,
        quantity: 0,
        revenue: 0
      };
    }
    acc[item.id].quantity += item.quantity;
    acc[item.id].revenue += item.price * item.quantity;
    return acc;
  }, {});
}

function activeNotifications() {
  const activeOrderIds = new Set(state.activeOrders.map((order) => order.id));
  return state.notifications.filter((notification) => activeOrderIds.has(notification.orderId));
}

function tableSentItems(tableName) {
  return getTable(tableName).unpaidOrderIds.flatMap((orderId) => {
    const order = getOrderById(orderId);
    return order ? order.items : [];
  });
}

function tableTotal(tableName) {
  const table = getTable(tableName);
  return orderTotal(table.draft) + orderTotal(tableSentItems(tableName));
}

function categoryLabel(category) {
  return CATEGORY_LABELS[category] || category;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

async function loginDemoAccount(accountId) {
  const account = DEMO_ACCOUNTS.find((demoAccount) => demoAccount.id === accountId);
  if (!account) return;

  if (BACKEND_ENABLED) {
    try {
      const payload = await apiRequest("login", { role: account.role, email: account.email, password: account.password });
      state.currentUser = payload.user;
      saveState();
      render();
      window.location.href = roleHomePage(payload.user.role);
      showToast(`${payload.user.label} ile giriş yapıldı.`);
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  state.currentUser = {
    id: account.id,
    role: account.role,
    label: account.label,
    loggedInAt: new Date().toISOString()
  };
  saveState();
  render();
  window.location.href = roleHomePage(account.role);
  showToast(`${account.label} ile giriş yapıldı.`);
}

async function loginFromForm() {
  const role = document.querySelector("#staff-role")?.value;
  const email = document.querySelector("#staff-email")?.value.trim();
  const password = document.querySelector("#staff-password")?.value.trim();

  if (!email || !password) {
    showToast("E-posta ve şifre alanlarını doldurun.");
    return;
  }

  if (BACKEND_ENABLED) {
    try {
      const payload = await apiRequest("login", { role, email, password });
      state.currentUser = payload.user;
      saveState();
      render();
      window.location.href = roleHomePage(payload.user.role);
      showToast(`${payload.user.label} ile giriş yapıldı.`);
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  const account = DEMO_ACCOUNTS.find((demoAccount) => demoAccount.role === role);
  if (!account) {
    showToast("Kullanıcı türü seçilemedi.");
    return;
  }

  if (password !== account.password) {
    showToast("Demo şifre bu rol için doğru değil.");
    return;
  }

  loginDemoAccount(account.id);
}

async function logoutDemoAccount() {
  if (BACKEND_ENABLED) {
    try {
      await apiRequest("logout");
    } catch (error) {
      console.warn(error);
    }
  }

  state.currentUser = null;
  saveState();
  window.location.href = "login.html";
  showToast("Oturum kapatıldı.");
}

function createOrderNotification(order) {
  state.notifications.unshift({
    id: `notification_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    orderId: order.id,
    tableName: order.tableName,
    message: `${order.tableName} için yeni sipariş mutfağa düştü.`,
    timestamp: order.timestamp,
    read: false
  });
  state.notifications = state.notifications.slice(0, 30);
}

function clearNotifications() {
  state.notifications = [];
  saveState();
  render();
  showToast("Bildirimler temizlendi. Aktif siparişler mutfakta kalır.");
}

async function submitContactMessage() {
  const nameInput = document.querySelector("#contact-name");
  const emailInput = document.querySelector("#contact-email");
  const messageInput = document.querySelector("#contact-message");
  if (!nameInput || !emailInput || !messageInput) return;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    showToast("Ad, e-posta ve mesaj alanlarını doldurun.");
    return;
  }

  if (BACKEND_ENABLED) {
    try {
      const payload = await apiRequest("create_contact", { name, email, message });
      document.querySelector("#contact-form")?.reset();
      applyServerPayload(payload);
      showToast("Mesajınız yönetici paneline gönderildi.");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  state.contactMessages.unshift({
    id: `contact_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
    status: "new"
  });
  state.contactMessages = state.contactMessages.slice(0, 50);
  saveState();
  document.querySelector("#contact-form")?.reset();
  showToast("Mesajınız yönetici paneline gönderildi.");
}

async function clearContactMessages() {
  if (BACKEND_ENABLED) {
    try {
      const payload = await apiRequest("clear_contact_messages");
      applyServerPayload(payload);
      showToast("İletişim mesajları temizlendi.");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  state.contactMessages = [];
  saveState();
  render();
  showToast("İletişim mesajları temizlendi.");
}

function getSelectedEditorItem() {
  return (state.menu[selectedEditorCategory] || []).find((item) => item.id === selectedEditorProductId);
}

function readEditorForm() {
  const nameInput = document.querySelector("#editor-name");
  const priceInput = document.querySelector("#editor-price");
  const kcalInput = document.querySelector("#editor-kcal");
  const ingredientsInput = document.querySelector("#editor-ingredients");
  const allergensInput = document.querySelector("#editor-allergens");
  if (!nameInput || !priceInput || !kcalInput || !ingredientsInput || !allergensInput) return null;

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const kcal = Number(kcalInput.value);
  const ingredients = ingredientsInput.value.trim();
  const allergens = allergensInput.value
    .split(",")
    .map((allergen) => allergen.trim())
    .filter(Boolean);

  if (!name || Number.isNaN(price) || Number.isNaN(kcal)) {
    showToast("Ürün adı, fiyat ve kalori alanlarını doldurun.");
    return null;
  }

  return { name, price, kcal, ingredients, allergens };
}

function readNewProductForm() {
  const categoryInput = document.querySelector("#new-product-category");
  const nameInput = document.querySelector("#new-product-name");
  const priceInput = document.querySelector("#new-product-price");
  const kcalInput = document.querySelector("#new-product-kcal");
  const ingredientsInput = document.querySelector("#new-product-ingredients");
  const allergensInput = document.querySelector("#new-product-allergens");
  if (!categoryInput || !nameInput || !priceInput || !kcalInput || !ingredientsInput || !allergensInput) return null;

  const category = categoryInput.value;
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const kcal = Number(kcalInput.value);
  const ingredients = ingredientsInput.value.trim();
  const allergens = allergensInput.value
    .split(",")
    .map((allergen) => allergen.trim())
    .filter(Boolean);

  if (!category || !name || Number.isNaN(price) || Number.isNaN(kcal)) {
    showToast("Yeni ürün için kategori, ad, fiyat ve kalori alanlarını doldurun.");
    return null;
  }

  return { category, name, price, kcal, ingredients, allergens };
}

async function updateMenuItem() {
  if (state.currentUser?.role !== "manager") {
    showToast("Menü güncellemek için yönetici hesabıyla giriş yapın.");
    return;
  }

  const formData = readEditorForm();
  const item = getSelectedEditorItem();
  if (!formData || !item) return;

  if (BACKEND_ENABLED) {
    try {
      const payload = await apiRequest("save_product", { id: item.id, category: selectedEditorCategory, ...formData });
      applyServerPayload(payload);
      showToast(`${formData.name} güncellendi.`);
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  Object.assign(item, formData);
  saveState();
  rebuildMenuIndex();
  render();
  showToast(`${item.name} güncellendi.`);
}

async function addMenuProduct() {
  if (state.currentUser?.role !== "manager") {
    showToast("Yeni ürün eklemek için yönetici hesabıyla giriş yapın.");
    return;
  }

  const formData = readNewProductForm();
  if (!formData) return;

  if (BACKEND_ENABLED) {
    try {
      const payload = await apiRequest("save_product", { id: 0, ...formData });
      selectedEditorCategory = formData.category;
      selectedEditorProductId = payload.id;
      document.querySelector("#new-product-form")?.reset();
      applyServerPayload(payload);
      showToast(`${formData.name} menüye eklendi.`);
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  const { category, ...productData } = formData;
  const categoryItems = state.menu[category] || [];
  const newItem = {
    id: `custom_${Date.now()}`,
    isCustom: true,
    ...productData
  };
  categoryItems.push(newItem);
  state.menu[category] = categoryItems;
  selectedEditorCategory = category;
  selectedEditorProductId = newItem.id;
  saveState();
  rebuildMenuIndex();
  document.querySelector("#new-product-form")?.reset();
  render();
  showToast(`${newItem.name} menüye eklendi.`);
}

async function deleteMenuProduct(itemId) {
  if (state.currentUser?.role !== "manager") {
    showToast("Ürün silmek için yönetici hesabıyla giriş yapın.");
    return;
  }

  if (BACKEND_ENABLED) {
    const item = Object.values(state.menu).flat().find((product) => String(product.id) === String(itemId));
    try {
      const payload = await apiRequest("delete_product", { id: itemId });
      applyServerPayload(payload);
      showToast(`${item?.name || "Ürün"} menüden kaldırıldı.`);
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  let deletedItem = null;
  Object.keys(state.menu).forEach((category) => {
    const items = state.menu[category] || [];
    const item = items.find((product) => product.id === itemId);
    if (item) {
      deletedItem = item;
      state.menu[category] = items.filter((product) => product.id !== itemId);
    }
  });

  const item = deletedItem;
  if (!item) return;

  ensureEditorSelection();
  saveState();
  rebuildMenuIndex();
  render();
  showToast(`${item.name} menüden kaldırıldı.`);
}

function addMenuItem(itemId) {
  const item = menuIndex[itemId];
  if (!item) return;
  const draft = getTable().draft;
  const existing = draft.find((draftItem) => draftItem.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    draft.push({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      quantity: 1
    });
  }
  saveState();
  render();
}

function addCustomerItem(itemId) {
  const item = menuIndex[itemId];
  if (!item) return;

  const existing = customerCart.find((cartItem) => cartItem.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    customerCart.push({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      quantity: 1
    });
  }

  renderCustomerOrder();
}

function changeCustomerQuantity(itemId, delta) {
  const item = customerCart.find((cartItem) => cartItem.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    customerCart = customerCart.filter((cartItem) => cartItem.id !== itemId);
  }

  renderCustomerOrder();
}

async function submitCustomerOrder() {
  if (!customerCart.length) {
    showToast("Siparişe ürün ekleyin.");
    return;
  }

  const tableName = document.querySelector("#customer-table")?.value || TABLES[0];
  const drinkNoteElement = document.querySelector("#customer-drink-note");
  const drinkNote = drinkNoteElement?.value.trim() || "";

  const order = {
    id: `order_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    tableName,
    items: customerCart.map((item) => ({ ...item })),
    drinkNote,
    status: "bekliyor",
    timestamp: new Date().toISOString(),
    source: "müşteri"
  };

  if (BACKEND_ENABLED) {
    try {
      const payload = await apiRequest("create_order", order);
      customerCart = [];
      if (drinkNoteElement) drinkNoteElement.value = "";
      applyServerPayload(payload);
      showToast(`${tableName} siparişi mutfağa gönderildi.`);
      window.location.href = `order-status.html?table=${encodeURIComponent(tableName)}`;
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  state.activeOrders.push(order);
  createOrderNotification(order);
  customerCart = [];
  if (drinkNoteElement) drinkNoteElement.value = "";
  saveState();
  render();
  showToast(`${tableName} siparişi mutfağa gönderildi.`);
  window.location.href = `order-status.html?table=${encodeURIComponent(tableName)}`;
}

function changeDraftQuantity(itemId, delta) {
  const draft = getTable().draft;
  const item = draft.find((draftItem) => draftItem.id === itemId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    getTable().draft = draft.filter((draftItem) => draftItem.id !== itemId);
  }
  saveState();
  render();
}

function sendToKitchen() {
  const table = getTable();
  if (!table.draft.length) {
    showToast("Mutfağa gönderilecek yeni ürün yok.");
    return;
  }

  const order = {
    id: `order_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    tableName: activeTable,
    items: table.draft,
    status: "bekliyor",
    timestamp: new Date().toISOString()
  };

  state.activeOrders.push(order);
  createOrderNotification(order);
  table.unpaidOrderIds.push(order.id);
  table.draft = [];
  saveState();
  render();
  showToast(`${activeTable} siparişi mutfağa gönderildi.`);
}

async function updateKitchenStatus(orderId) {
  const order = state.activeOrders.find((activeOrder) => activeOrder.id === orderId);
  if (!order) return;

  if (BACKEND_ENABLED) {
    const nextStatus = order.status === "bekliyor" ? "hazırlanıyor" : "tamamlandı";
    try {
      const payload = await apiRequest("update_order_status", { id: orderId, status: nextStatus });
      applyServerPayload(payload);
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  if (order.status === "bekliyor") {
    order.status = "hazırlanıyor";
  } else {
    order.status = "tamamlandı";
    order.completedAt = new Date().toISOString();
    state.activeOrders = state.activeOrders.filter((activeOrder) => activeOrder.id !== orderId);
    state.archivedOrders.push(order);
  }

  saveState();
  render();
}

function closeTable() {
  const table = getTable();
  const items = [...table.draft, ...tableSentItems(activeTable)];
  if (!items.length) {
    showToast("Bu masada kapatılacak adisyon yok.");
    return;
  }

  const total = orderTotal(items);
  const payment = {
    id: `payment_${Date.now()}`,
    tableName: activeTable,
    total,
    items,
    paidAt: new Date().toISOString()
  };

  state.dailyReport.payments.push(payment);
  items.forEach((item) => {
    if (!state.dailyReport.productSales[item.id]) {
      state.dailyReport.productSales[item.id] = {
        id: item.id,
        name: item.name,
        category: item.category,
        quantity: 0,
        revenue: 0
      };
    }
    state.dailyReport.productSales[item.id].quantity += item.quantity;
    state.dailyReport.productSales[item.id].revenue += item.price * item.quantity;
  });

  table.draft = [];
  table.unpaidOrderIds = [];
  saveState();
  render();
  showToast(`${activeTable} adisyonu ${formatCurrency(total)} olarak kapatıldı.`);
}

function resetDemoData() {
  localStorage.removeItem(STORAGE_KEYS.tables);
  localStorage.removeItem(STORAGE_KEYS.activeOrders);
  localStorage.removeItem(STORAGE_KEYS.archivedOrders);
  localStorage.removeItem(STORAGE_KEYS.dailyReport);
  localStorage.removeItem(STORAGE_KEYS.menu);
  localStorage.removeItem(STORAGE_KEYS.notifications);
  localStorage.setItem(STORAGE_KEYS.dataVersion, CURRENT_DATA_VERSION);
  localStorage.setItem(STORAGE_KEYS.menuVersion, CURRENT_MENU_VERSION);
  state = loadState();
  rebuildMenuIndex();
  ensureActiveCategory();
  ensureEditorSelection();
  render();
  showToast("Demo verileri sıfırlandı.");
}

function renderTables() {
  const tableList = document.querySelector("#table-list");
  const activeTableLabel = document.querySelector("#active-table-label");
  if (!tableList || !activeTableLabel) return;
  tableList.innerHTML = TABLES.map((tableName) => {
    const total = tableTotal(tableName);
    const activeOrders = getTable(tableName).unpaidOrderIds.length;
    return `
      <button class="table-button ${tableName === activeTable ? "is-active" : ""}" data-table="${tableName}">
        ${tableName}
        <span class="table-meta">${formatCurrency(total)} · ${activeOrders} mutfak fişi</span>
      </button>
    `;
  }).join("");
  activeTableLabel.textContent = activeTable;
}

function renderCategories() {
  const categoryTabs = document.querySelector("#category-tabs");
  if (!categoryTabs) return;
  categoryTabs.innerHTML = Object.keys(state.menu).map((category) => `
    <button class="category-button ${category === activeCategory ? "is-active" : ""}" data-category="${category}">
      ${escapeHtml(categoryLabel(category))}
    </button>
  `).join("");
}

function renderMenu() {
  const menuGrid = document.querySelector("#menu-grid");
  if (!menuGrid) return;
  const items = state.menu[activeCategory] || [];
  if (!items.length) {
    menuGrid.innerHTML = `<div class="empty-state">Bu kategoride ürün yok.</div>`;
    return;
  }

  menuGrid.innerHTML = items.map((item) => `
    <button class="menu-card" data-item="${item.id}">
      <div class="menu-meta">
        <span>${formatCurrency(item.price)}</span>
        <span>${item.kcal} kcal</span>
      </div>
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.ingredients || "Detay bilgisi yok")}</p>
      <span class="allergens">${item.allergens?.length ? `Alerjen: ${escapeHtml(item.allergens.join(", "))}` : "Alerjen belirtilmemiş"}</span>
    </button>
  `).join("");
}

function renderHomeMenu() {
  const homeMenu = document.querySelector("#home-menu-preview");
  if (!homeMenu) return;

  homeMenu.innerHTML = Object.entries(state.menu).map(([category, items]) => `
    <section class="home-menu-category">
      <h3>${escapeHtml(categoryLabel(category))}</h3>
      <div class="home-menu-items">
        ${items.map((item) => `
          <article class="home-menu-item">
            <div>
              <strong>${escapeHtml(item.name)}</strong>
              <p>${escapeHtml(item.ingredients || "Detay bilgisi yok")}</p>
              <span>Alerjen: ${item.allergens?.length ? escapeHtml(item.allergens.join(", ")) : "-"}</span>
            </div>
            <div class="home-price">
              <b>${item.price}₺</b>
              <span>${item.kcal} kcal</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderCustomerOrder() {
  const categoryTabs = document.querySelector("#customer-category-tabs");
  const menuGrid = document.querySelector("#customer-menu-grid");
  const cartList = document.querySelector("#customer-cart-list");
  const cartCount = document.querySelector("#customer-cart-count");
  const cartTotal = document.querySelector("#customer-cart-total");
  if (!categoryTabs || !menuGrid || !cartList || !cartCount || !cartTotal) return;

  if (!Object.keys(state.menu).includes(customerActiveCategory)) {
    customerActiveCategory = Object.keys(state.menu)[0];
  }

  categoryTabs.innerHTML = Object.keys(state.menu).map((category) => `
    <button class="category-button ${category === customerActiveCategory ? "is-active" : ""}" data-customer-category="${category}">
      ${escapeHtml(categoryLabel(category))}
    </button>
  `).join("");

  menuGrid.innerHTML = (state.menu[customerActiveCategory] || []).map((item) => `
    <button class="menu-card" data-customer-item="${item.id}">
      <div class="menu-meta">
        <span>${formatCurrency(item.price)}</span>
        <span>${item.kcal} kcal</span>
      </div>
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.ingredients || "Detay bilgisi yok")}</p>
      <span class="allergens">${item.allergens?.length ? `Alerjen: ${escapeHtml(item.allergens.join(", "))}` : "Alerjen belirtilmemiş"}</span>
    </button>
  `).join("");

  if (!customerCart.length) {
    cartList.innerHTML = `<div class="empty-state">Henüz ürün yok</div>`;
  } else {
    cartList.innerHTML = customerCart.map((item) => `
      <div class="check-row">
        <div>
          <strong>${escapeHtml(item.name)}</strong>
          <div class="qty-controls">
            <button data-customer-qty="${item.id}" data-delta="-1" aria-label="${escapeHtml(item.name)} azalt">−</button>
            <span>${item.quantity} adet</span>
            <button data-customer-qty="${item.id}" data-delta="1" aria-label="${escapeHtml(item.name)} artır">+</button>
          </div>
        </div>
        <span>${formatCurrency(item.price * item.quantity)}</span>
      </div>
    `).join("");
  }

  cartCount.textContent = `${customerCart.reduce((sum, item) => sum + item.quantity, 0)} ürün`;
  cartTotal.textContent = formatCurrency(orderTotal(customerCart));
}

function statusLabel(status) {
  if (status === "hazırlanıyor") return "Siparişiniz hazırlanıyor";
  if (status === "tamamlandı") return "Siparişiniz hazır";
  return "Siparişiniz alındı";
}

function renderOrderStatus() {
  const tableSelect = document.querySelector("#status-table");
  const statusList = document.querySelector("#order-status-list");
  const historyList = document.querySelector("#order-history-list");
  const historyButton = document.querySelector("#toggle-history-button");
  const tableLabel = document.querySelector("#status-table-label");
  if (!tableSelect || !statusList || !tableLabel) return;

  const tableFromUrl = new URLSearchParams(window.location.search).get("table");
  const selectedTable = tableSelect.value || tableFromUrl || TABLES[0];

  tableSelect.innerHTML = TABLES.map((tableName) => `
    <option value="${escapeHtml(tableName)}" ${tableName === selectedTable ? "selected" : ""}>${escapeHtml(tableName)}</option>
  `).join("");
  tableLabel.textContent = selectedTable;

  const activeOrders = state.activeOrders
    .filter((order) => order.tableName === selectedTable)
    .map((order) => ({ ...order, displayStatus: order.status }));
  const completedOrders = state.archivedOrders
    .filter((order) => order.tableName === selectedTable)
    .map((order) => ({ ...order, displayStatus: "tamamlandı" }));
  const now = Date.now();
  const recentCompletedOrders = completedOrders.filter((order) => now - orderDate(order).getTime() < 60000);
  const historyOrders = completedOrders.filter((order) => now - orderDate(order).getTime() >= 60000);
  const orders = [...activeOrders, ...recentCompletedOrders]
    .sort((a, b) => orderDate(b) - orderDate(a))
    .slice(0, 6);

  if (!orders.length) {
    statusList.innerHTML = `<div class="empty-state">Bu masa için aktif sipariş yok.</div>`;
  } else {
    statusList.innerHTML = orders.map(renderStatusCard).join("");
  }

  if (!historyList) return;
  const isHistoryOpen = !historyList.hidden;
  if (historyButton) {
    historyButton.textContent = isHistoryOpen ? "Geçmiş Siparişleri Gizle" : "Geçmiş Siparişleri Göster";
    historyButton.setAttribute("aria-expanded", String(isHistoryOpen));
  }
  const visibleHistory = historyOrders
    .sort((a, b) => orderDate(b) - orderDate(a))
    .slice(0, 8);
  historyList.innerHTML = visibleHistory.length
    ? visibleHistory.map(renderStatusCard).join("")
    : `<div class="empty-state">Geçmiş sipariş yok.</div>`;
}

function renderStatusCard(order) {
  return `
    <article class="status-card status-${escapeHtml(order.displayStatus)}">
      <div class="status-card-head">
        <div>
          <strong>${escapeHtml(statusLabel(order.displayStatus))}</strong>
          <span>${escapeHtml(order.tableName)} · ${new Date(order.timestamp).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
        <b>${formatCurrency(orderTotal(order.items || []))}</b>
      </div>
      <ul>
        ${(order.items || []).map((item) => `<li>${item.quantity}x ${escapeHtml(item.name)}</li>`).join("")}
      </ul>
      ${order.drinkNote ? `<p class="order-note"><strong>İçecek notu:</strong> ${escapeHtml(order.drinkNote)}</p>` : ""}
    </article>
  `;
}

function renderDemoAccounts() {
  const accountGrid = document.querySelector("#demo-account-grid");
  const sessionLabel = document.querySelector("#session-label");
  if (!accountGrid) return;

  if (sessionLabel) {
    sessionLabel.textContent = state.currentUser
      ? `${state.currentUser.label} · ${ROLE_LABELS[state.currentUser.role]}`
      : "Oturum açık değil";
  }

  accountGrid.innerHTML = DEMO_ACCOUNTS.map((account) => `
    <button class="demo-login-button ${state.currentUser?.id === account.id ? "is-active" : ""}" data-login="${account.id}">
      ${escapeHtml(account.label)}
    </button>
  `).join("") + (state.currentUser ? `
    <button class="demo-login-button" data-logout>Çıkış Yap</button>
  ` : "");
}

function renderDashboard() {
  const session = document.querySelector("#dashboard-session");
  const cards = document.querySelectorAll("[data-dashboard-role]");
  if (!session && !cards.length) return;

  if (!state.currentUser) {
    if (session) session.textContent = "Oturum açık değil. Mutfak veya yönetici girişi yapın.";
    cards.forEach((card) => {
      card.classList.add("is-disabled");
      card.setAttribute("href", "login.html");
    });
    return;
  }

  if (session) {
    session.textContent = `${state.currentUser.label} · ${ROLE_LABELS[state.currentUser.role]}`;
  }

  cards.forEach((card) => {
    const allowed = card.dataset.dashboardRole === state.currentUser.role || state.currentUser.role === "manager";
    card.hidden = !allowed;
    card.classList.toggle("is-disabled", !allowed);
    if (!allowed) {
      card.setAttribute("href", "login.html");
    }
  });
}

function renderPanelShell() {
  const panelShell = document.querySelector(".panel-shell");
  if (!panelShell) return;

  if (BACKEND_ENABLED && !backendBootstrapped && !state.currentUser) {
    return;
  }

  if (!state.currentUser) {
    window.location.href = "login.html";
    return;
  }

  const requiredRole = panelShell.dataset.requiredRole;
  if (requiredRole && state.currentUser.role !== requiredRole) {
    window.location.href = roleHomePage(state.currentUser.role);
    return;
  }

  const sessionText = `${state.currentUser.label} · ${ROLE_LABELS[state.currentUser.role]}`;
  document.querySelectorAll("[data-panel-session]").forEach((element) => {
    element.textContent = sessionText;
  });

  document.querySelectorAll("[data-panel-role]").forEach((element) => {
    const allowed = element.dataset.panelRole === state.currentUser.role;
    element.hidden = !allowed;
  });

  const dashboardEyebrow = document.querySelector("#dashboard-eyebrow");
  const dashboardTitle = document.querySelector("#dashboard-title");
  const dashboardCopy = document.querySelector("#dashboard-copy");
  const quickActionsTitle = document.querySelector("#quick-actions-title");

  if (dashboardEyebrow) dashboardEyebrow.textContent = `${ROLE_LABELS[state.currentUser.role]} Dashboard`;
  if (dashboardTitle) dashboardTitle.textContent = state.currentUser.role === "kitchen" ? "Mutfak Paneli" : "Yönetici Paneli";
  if (dashboardCopy) {
    dashboardCopy.textContent = state.currentUser.role === "kitchen"
      ? "Bu alanda sadece mutfak siparişleri, bildirimleri ve tamamlanan fiş bilgileri görünür."
      : "Bu alanda sadece yönetici raporları, ciro özeti ve menü yönetimi bilgileri görünür.";
  }
  if (quickActionsTitle) {
    quickActionsTitle.textContent = state.currentUser.role === "kitchen" ? "Mutfak İşlemleri" : "Yönetici İşlemleri";
  }

  const activeOrdersElement = document.querySelector("#dashboard-active-orders");
  const unreadOrdersElement = document.querySelector("#dashboard-unread-orders");
  const revenueElement = document.querySelector("#dashboard-revenue");
  const kitchenArchiveElement = document.querySelector("#dashboard-kitchen-archive");
  const managerArchiveElement = document.querySelector("#dashboard-manager-archive");
  const menuCountElement = document.querySelector("#dashboard-menu-count");
  const dailyRevenue = completedOrderRevenue();
  const menuItemCount = Object.values(state.menu).reduce((sum, items) => sum + items.length, 0);

  if (activeOrdersElement) activeOrdersElement.textContent = state.activeOrders.length;
  if (unreadOrdersElement) unreadOrdersElement.textContent = activeNotifications().length;
  if (revenueElement) revenueElement.textContent = formatCurrency(dailyRevenue);
  if (kitchenArchiveElement) kitchenArchiveElement.textContent = state.archivedOrders.length;
  if (managerArchiveElement) managerArchiveElement.textContent = state.archivedOrders.length;
  if (menuCountElement) menuCountElement.textContent = menuItemCount;
}

function renderNewProductForm() {
  const categorySelect = document.querySelector("#new-product-category");
  if (!categorySelect) return;

  const previousValue = categorySelect.value || selectedEditorCategory;
  categorySelect.innerHTML = Object.keys(state.menu).map((category) => `
    <option value="${escapeHtml(category)}" ${category === previousValue ? "selected" : ""}>${escapeHtml(categoryLabel(category))}</option>
  `).join("");
}

function renderNotifications() {
  const notificationList = document.querySelector("#notification-list");
  if (!notificationList) return;
  const notifications = activeNotifications();

  if (!notifications.length) {
    notificationList.innerHTML = `<div class="empty-state">Gösterilecek yeni sipariş bildirimi yok.</div>`;
    return;
  }

  notificationList.innerHTML = notifications.slice(0, 8).map((notification) => `
    <article class="notification-item is-new">
      <div>
        <strong>${escapeHtml(notification.message)}</strong>
        <span>${new Date(notification.timestamp).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}</span>
      </div>
      <span>Yeni</span>
    </article>
  `).join("");
}

function renderContactMessages() {
  const messageList = document.querySelector("#contact-message-list");
  if (!messageList) return;

  if (!state.contactMessages.length) {
    messageList.innerHTML = `<div class="empty-state">Henüz iletişim mesajı yok.</div>`;
    return;
  }

  messageList.innerHTML = state.contactMessages.map((message) => `
    <article class="message-card">
      <div>
        <strong>${escapeHtml(message.name)}</strong>
        <span>${escapeHtml(message.email)} · ${new Date(message.timestamp).toLocaleString("tr-TR", { dateStyle: "short", timeStyle: "short" })}</span>
      </div>
      <p>${escapeHtml(message.message)}</p>
    </article>
  `).join("");
}

function renderCheckList(selector, items, editable) {
  const element = document.querySelector(selector);
  if (!element) return;
  if (!items.length) {
    element.innerHTML = `<div class="empty-state">Henüz ürün yok</div>`;
    return;
  }

  element.innerHTML = items.map((item) => `
    <div class="check-row">
      <div>
        <strong>${item.name}</strong>
        ${editable ? `
          <div class="qty-controls">
            <button data-qty="${item.id}" data-delta="-1" aria-label="${item.name} azalt">−</button>
            <span>${item.quantity} adet</span>
            <button data-qty="${item.id}" data-delta="1" aria-label="${item.name} artır">+</button>
          </div>
        ` : `<span>${item.quantity} adet</span>`}
      </div>
      <span>${formatCurrency(item.price * item.quantity)}</span>
    </div>
  `).join("");
}

function renderCheck() {
  const tableTotalElement = document.querySelector("#table-total");
  const draftTotalElement = document.querySelector("#draft-total");
  const checkCountElement = document.querySelector("#check-count");
  if (!tableTotalElement || !draftTotalElement || !checkCountElement) return;
  const table = getTable();
  const sentItems = tableSentItems(activeTable);
  renderCheckList("#draft-list", table.draft, true);
  renderCheckList("#sent-list", sentItems, false);
  tableTotalElement.textContent = formatCurrency(tableTotal(activeTable));
  draftTotalElement.textContent = formatCurrency(orderTotal(table.draft));
  checkCountElement.textContent = `${table.draft.reduce((sum, item) => sum + item.quantity, 0)} yeni ürün`;
}

function renderKitchen() {
  const board = document.querySelector("#ticket-board");
  const kitchenCountElement = document.querySelector("#kitchen-count");
  const pendingCountElement = document.querySelector("#kitchen-pending-count");
  const preparingCountElement = document.querySelector("#kitchen-preparing-count");
  const unreadCountElement = document.querySelector("#kitchen-unread-count");
  if (!board && !kitchenCountElement && !pendingCountElement && !preparingCountElement && !unreadCountElement) return;

  const unreadCount = activeNotifications().length;
  const pendingCount = state.activeOrders.filter((order) => order.status === "bekliyor").length;
  const preparingCount = state.activeOrders.filter((order) => order.status === "hazırlanıyor").length;
  if (kitchenCountElement) kitchenCountElement.textContent = `${state.activeOrders.length} fiş · ${unreadCount} yeni bildirim`;
  if (pendingCountElement) pendingCountElement.textContent = pendingCount;
  if (preparingCountElement) preparingCountElement.textContent = preparingCount;
  if (unreadCountElement) unreadCountElement.textContent = unreadCount;
  if (!board) return;

  if (!state.activeOrders.length) {
    board.innerHTML = `<div class="empty-state">Mutfak kuyruğunda bekleyen sipariş yok.</div>`;
    return;
  }

  board.innerHTML = state.activeOrders.map((order) => {
    const isPreparing = order.status === "hazırlanıyor";
    const actionLabel = isPreparing ? "Tamamla" : "Hazırla";
    return `
      <article class="ticket ${isPreparing ? "is-preparing" : ""}">
        <div class="ticket-header">
          <div>
            <h3>${order.tableName}</h3>
            <span>${new Date(order.timestamp).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}</span>
          </div>
          <span class="ticket-status">${order.status}</span>
        </div>
        <ul>
          ${order.items.map((item) => `<li>${item.quantity}x ${item.name}</li>`).join("")}
        </ul>
        ${order.drinkNote ? `<p class="ticket-note"><strong>İçecek notu:</strong> ${escapeHtml(order.drinkNote)}</p>` : ""}
        <button class="ticket-action" data-order="${order.id}">${actionLabel}</button>
      </article>
    `;
  }).join("");
}

function renderMenuEditor() {
  const categorySelect = document.querySelector("#editor-category");
  const productSelect = document.querySelector("#editor-product");
  const managedProducts = document.querySelector("#managed-products");
  if (!categorySelect || !productSelect || !managedProducts) return;

  ensureEditorSelection();

  categorySelect.innerHTML = Object.keys(state.menu).map((category) => `
    <option value="${escapeHtml(category)}" ${category === selectedEditorCategory ? "selected" : ""}>${escapeHtml(categoryLabel(category))}</option>
  `).join("");

  const categoryItems = state.menu[selectedEditorCategory] || [];
  productSelect.innerHTML = categoryItems.length
    ? categoryItems.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === selectedEditorProductId ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")
    : `<option value="">Bu kategoride ürün yok</option>`;

  const selectedItem = getSelectedEditorItem();
  document.querySelector("#editor-name").value = selectedItem?.name || "";
  document.querySelector("#editor-price").value = selectedItem?.price ?? "";
  document.querySelector("#editor-kcal").value = selectedItem?.kcal ?? "";
  document.querySelector("#editor-ingredients").value = selectedItem?.ingredients || "";
  document.querySelector("#editor-allergens").value = selectedItem?.allergens?.join(", ") || "";

  const managerOnlyElements = document.querySelectorAll("#menu-editor-form input, #menu-editor-form textarea, #menu-editor-form select, #menu-editor-form button, .managed-products button");
  managerOnlyElements.forEach((element) => {
    element.disabled = state.currentUser?.role !== "manager";
  });

  if (!categoryItems.length) {
    managedProducts.innerHTML = `<div class="empty-state">Bu kategoride yönetilecek ürün yok.</div>`;
    return;
  }

  managedProducts.innerHTML = categoryItems.map((item) => `
    <article class="managed-product">
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <span>${formatCurrency(item.price)} · ${item.kcal} kcal · ${escapeHtml(categoryLabel(selectedEditorCategory))}</span>
      </div>
      <div class="managed-actions">
        <button class="ghost-button" data-edit-product="${escapeHtml(item.id)}">Düzenle</button>
        <button class="danger-button" data-delete-product="${escapeHtml(item.id)}">Sil</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".managed-products button").forEach((button) => {
    button.disabled = state.currentUser?.role !== "manager";
  });
}

function renderManager() {
  const dailyRevenueElement = document.querySelector("#daily-revenue");
  const paidOrderCountElement = document.querySelector("#paid-order-count");
  const topCategoryElement = document.querySelector("#top-category");
  const topCategoryRevenueElement = document.querySelector("#top-category-revenue");
  const archiveCountElement = document.querySelector("#archive-count");
  const reportUpdatedElement = document.querySelector("#report-updated");
  const salesTable = document.querySelector("#sales-table");
  if (!dailyRevenueElement && !paidOrderCountElement && !topCategoryElement && !topCategoryRevenueElement && !archiveCountElement && !reportUpdatedElement && !salesTable) {
    renderMenuEditor();
    return;
  }

  const completedOrders = completedOrdersToday();
  const productSales = Object.values(completedProductSales(completedOrders));
  const dailyRevenue = completedOrderRevenue(completedOrders);
  const categorySales = productSales.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.revenue;
    return acc;
  }, {});
  const topCategory = Object.entries(categorySales).sort((a, b) => b[1] - a[1])[0];

  if (dailyRevenueElement) dailyRevenueElement.textContent = formatCurrency(dailyRevenue);
  if (paidOrderCountElement) paidOrderCountElement.textContent = `${completedOrders.length} tamamlanan sipariş`;
  if (topCategoryElement) topCategoryElement.textContent = topCategory ? categoryLabel(topCategory[0]) : "Henüz yok";
  if (topCategoryRevenueElement) topCategoryRevenueElement.textContent = topCategory ? formatCurrency(topCategory[1]) : formatCurrency(0);
  if (archiveCountElement) archiveCountElement.textContent = state.archivedOrders.length;
  if (reportUpdatedElement) reportUpdatedElement.textContent = new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });

  if (!productSales.length) {
    if (salesTable) salesTable.innerHTML = `<tr><td colspan="4">Tahsilat yapıldığında satış analitiği burada görünecek.</td></tr>`;
    renderMenuEditor();
    return;
  }

  if (salesTable) {
    salesTable.innerHTML = productSales
      .sort((a, b) => b.revenue - a.revenue)
      .map((item) => `
        <tr>
          <td>${item.name}</td>
          <td>${categoryLabel(item.category)}</td>
          <td>${item.quantity}</td>
          <td>${formatCurrency(item.revenue)}</td>
        </tr>
      `).join("");
  }

  renderMenuEditor();
}

function render() {
  ensureActiveCategory();
  ensureEditorSelection();
  renderDemoAccounts();
  renderDashboard();
  renderPanelShell();
  renderHomeMenu();
  renderCustomerOrder();
  renderOrderStatus();
  renderTables();
  renderCategories();
  renderMenu();
  renderNotifications();
  renderContactMessages();
  renderCheck();
  renderKitchen();
  renderManager();
  renderNewProductForm();
}

document.addEventListener("click", (event) => {
  const loginButton = event.target.closest("[data-login]");
  if (loginButton) {
    loginDemoAccount(loginButton.dataset.login);
    return;
  }

  const logoutButton = event.target.closest("[data-logout]");
  if (logoutButton) {
    logoutDemoAccount();
    return;
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    switchView(viewButton.dataset.view);
    const targetId = viewButton.dataset.scrollTarget;
    if (targetId) {
      document.querySelector(`#${targetId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  const tableButton = event.target.closest("[data-table]");
  if (tableButton) {
    activeTable = tableButton.dataset.table;
    render();
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    render();
    return;
  }

  const customerCategoryButton = event.target.closest("[data-customer-category]");
  if (customerCategoryButton) {
    customerActiveCategory = customerCategoryButton.dataset.customerCategory;
    renderCustomerOrder();
    return;
  }

  const menuCard = event.target.closest("[data-item]");
  if (menuCard) {
    addMenuItem(menuCard.dataset.item);
    return;
  }

  const customerMenuCard = event.target.closest("[data-customer-item]");
  if (customerMenuCard) {
    addCustomerItem(customerMenuCard.dataset.customerItem);
    return;
  }

  const quantityButton = event.target.closest("[data-qty]");
  if (quantityButton) {
    changeDraftQuantity(quantityButton.dataset.qty, Number(quantityButton.dataset.delta));
    return;
  }

  const customerQuantityButton = event.target.closest("[data-customer-qty]");
  if (customerQuantityButton) {
    changeCustomerQuantity(customerQuantityButton.dataset.customerQty, Number(customerQuantityButton.dataset.delta));
    return;
  }

  const historyToggleButton = event.target.closest("#toggle-history-button");
  if (historyToggleButton) {
    const historyList = document.querySelector("#order-history-list");
    if (historyList) {
      historyList.hidden = !historyList.hidden;
      renderOrderStatus();
    }
    return;
  }

  const ticketAction = event.target.closest("[data-order]");
  if (ticketAction) {
    updateKitchenStatus(ticketAction.dataset.order);
    return;
  }

  const editProductButton = event.target.closest("[data-edit-product]");
  if (editProductButton) {
    selectedEditorProductId = editProductButton.dataset.editProduct;
    renderMenuEditor();
    return;
  }

  const deleteProductButton = event.target.closest("[data-delete-product]");
  if (deleteProductButton) {
    deleteMenuProduct(deleteProductButton.dataset.deleteProduct);
  }
});

document.querySelector("#send-kitchen-button")?.addEventListener("click", sendToKitchen);
document.querySelector("#customer-submit-order")?.addEventListener("click", submitCustomerOrder);
document.querySelector("#close-table-button")?.addEventListener("click", closeTable);
document.querySelector("#reset-demo-button")?.addEventListener("click", resetDemoData);
document.querySelector("#clear-notifications-button")?.addEventListener("click", clearNotifications);
document.querySelector("#clear-contact-messages-button")?.addEventListener("click", clearContactMessages);
document.querySelector("#menu-editor-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  updateMenuItem();
});
document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitContactMessage();
});
document.querySelector("#new-product-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  addMenuProduct();
});
document.querySelector("#staff-login-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  loginFromForm();
});
document.querySelector("#editor-category")?.addEventListener("change", (event) => {
  selectedEditorCategory = event.target.value;
  selectedEditorProductId = state.menu[selectedEditorCategory]?.[0]?.id || "";
  renderMenuEditor();
});
document.querySelector("#editor-product")?.addEventListener("change", (event) => {
  selectedEditorProductId = event.target.value;
  renderMenuEditor();
});
document.querySelector("#status-table")?.addEventListener("change", (event) => {
  const tableName = event.target.value;
  const nextUrl = `${window.location.pathname}?table=${encodeURIComponent(tableName)}`;
  window.history.replaceState({}, "", nextUrl);
  renderOrderStatus();
});
window.addEventListener("storage", syncFromStorage);
if (BACKEND_ENABLED) {
  setInterval(syncFromBackend, 2500);
} else if (document.querySelector("#order-status-list")) {
  setInterval(syncFromStorage, 2500);
}
if (!BACKEND_ENABLED && document.querySelector("#home-menu-preview")) {
  setInterval(syncFromStorage, 1200);
}

render();
if (BACKEND_ENABLED) {
  syncFromBackend();
}

if (document.body.dataset.redirectRoleHome === "true" && state.currentUser) {
  window.location.href = roleHomePage(state.currentUser.role);
}

const hasOperationViews = Boolean(document.querySelector("#kitchen-view"));
const hashTarget = window.location.hash.replace("#", "");
const hashElement = hashTarget ? document.getElementById(hashTarget) : null;
const hashView = hashElement?.closest(".view")?.id.replace("-view", "");
let initialView = hashView || hashTarget || ROLE_VIEWS[state.currentUser?.role] || "kitchen";
if (!document.querySelector(`#${initialView}-view`)) {
  initialView = ROLE_VIEWS[state.currentUser?.role] || "kitchen";
}
if (!canAccess(initialView)) {
  initialView = ROLE_VIEWS[state.currentUser?.role] || "kitchen";
}
if (hasOperationViews) {
  switchView(initialView);
  if (hashElement && canAccess(initialView)) {
    setTimeout(() => hashElement.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }
}
