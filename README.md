# 🍔 Stack Burger Yönetim Sistemi

Stack Burger, müşteri, mutfak personeli ve yönetici için geliştirilmiş dinamik bir restoran yönetim sistemidir. Proje; sipariş oluşturma, sipariş takibi, menü yönetimi, mutfak operasyonu ve raporlama süreçlerini tek bir platformda birleştirerek restoran iş akışını dijital ortama taşımayı amaçlamaktadır.

---

# 📖 Proje Hakkında

Bu proje, restoran işletmelerinde sipariş süreçlerini daha hızlı, düzenli ve yönetilebilir hale getirmek amacıyla geliştirilmiştir.

Sistem; müşterilerin sipariş oluşturmasını, mutfak personelinin siparişleri yönetmesini ve yöneticinin menü ile raporlama işlemlerini tek bir platform üzerinden gerçekleştirmesini sağlar.

Veriler MySQL veritabanında saklanmakta olup PHP ile dinamik olarak yönetilmektedir.

---

# 🚀 Özellikler

## 👤 Müşteri

- Ana sayfa
- Canlı menü görüntüleme
- Sipariş oluşturma
- Sipariş takibi
- Hakkımızda sayfası
- Konum bilgisi
- İletişim formu

---

## 👨‍🍳 Mutfak Paneli

- Gelen siparişleri görüntüleme
- Aktif sipariş yönetimi
- Sipariş durumunu güncelleme
- Bildirim sistemi
- Hazırlanan siparişlerin takibi

---

## 👨‍💼 Yönetici Paneli

- Dashboard
- Menü yönetimi
- Yeni ürün ekleme
- Ürün düzenleme
- Satış raporları
- Günlük ciro takibi
- Gelen mesajları görüntüleme

---

# 💻 Kullanılan Teknolojiler

## Front-End

- HTML5
- CSS3
- JavaScript

## Back-End

- PHP 8

## Veritabanı

- MySQL

## Geliştirme Ortamı

- XAMPP
- phpMyAdmin

---

# 📂 Proje Yapısı

```
StackBurger
│
├── assets/
│
├── api.php
├── db.php
├── schema.sql
├── styles.css
├── app.js
│
├── index.html
├── menu.html
├── order.html
├── order-status.html
├── login.html
│
├── dashboard.html
├── kitchen-dashboard.html
├── kitchen-orders.html
├── kitchen-notifications.html
│
├── manager-dashboard.html
├── manager-menu.html
├── manager-reports.html
├── manager-messages.html
│
├── about.html
├── contact.html
└── location.html
```

---

# 🗄️ Veritabanı

Kullanılan veritabanı:

```
stack_burger
```

Oluşturulan tablolar:

- users
- menu_categories
- menu_items
- orders
- order_items
- contact_messages

---

# ⚙️ Kurulum

## 1. Depoyu Klonlayın

```bash
git clone https://github.com/kullaniciadi/StackBurger.git
```

---

## 2. Projeyi XAMPP içerisine taşıyın

```
xamppfiles/htdocs/
```

klasörüne kopyalayın.

---

## 3. Veritabanını oluşturun

phpMyAdmin üzerinden

```
stack_burger
```

isimli veritabanını oluşturun.

---

## 4. SQL dosyasını içe aktarın

```
schema.sql
```

dosyasını phpMyAdmin üzerinden içe aktarın.

---

## 5. Apache ve MySQL servislerini başlatın

XAMPP üzerinden;

- Apache
- MySQL

servislerini çalıştırın.

---

## 6. Projeyi çalıştırın

```
http://localhost/StackBurger/
```

---

# 👥 Kullanıcı Rolleri

## Müşteri

- Sipariş oluşturabilir.
- Sipariş durumunu takip edebilir.
- Menü görüntüleyebilir.
- İletişim formu gönderebilir.

---

## Mutfak Personeli

- Gelen siparişleri görüntüler.
- Sipariş durumlarını günceller.
- Hazırlık sürecini yönetir.

---

## Yönetici

- Menü yönetimi
- Ürün ekleme
- Ürün düzenleme
- Satış raporları
- Ciro takibi
- Gelen mesajları görüntüleme

---

# 🔄 Sistem İşleyişi

```
Müşteri

↓

Sipariş Oluşturur

↓

MySQL Veritabanı

↓

Mutfak Paneli

↓

Sipariş Hazırlanır

↓

Sipariş Tamamlanır

↓

Müşteri Siparişi Takip Eder

↓

Yönetici Raporlarında Görüntülenir
```

---

# 🎯 Proje Amaçları

- Restoran yönetimini dijitalleştirmek
- Sipariş süreçlerini hızlandırmak
- Menü yönetimini kolaylaştırmak
- Rol tabanlı kullanıcı sistemi oluşturmak
- Veritabanı destekli dinamik bir web uygulaması geliştirmek
- Kullanıcı dostu ve modern bir arayüz sunmak

---

# 📌 Not

Bu proje eğitim ve portföy amaçlı geliştirilmiştir. Gerçek bir restoran yönetim sisteminin temel işleyişini simüle etmekte olup müşteri, mutfak ve yönetici süreçlerini dinamik olarak yönetebilmektedir.

---

# 👩‍💻 Geliştirici

**Simanur Gürsoy**

Bilgisayar / Yazılım Mühendisliği Öğrencisi

GitHub: https://github.com/simawao
