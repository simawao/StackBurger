# 🍔 Stack Burger Yönetim Sistemi

Stack Burger, müşteri, mutfak personeli ve yönetici rollerini tek bir platformda buluşturan dinamik bir restoran yönetim sistemi projesidir.

Proje; sipariş oluşturma, sipariş takibi, mutfak yönetimi, menü yönetimi, raporlama ve iletişim süreçlerini dijital ortama taşıyarak restoran operasyonlarını daha verimli hale getirmeyi amaçlamaktadır.

---

# 📖 Proje Hakkında

Stack Burger, restoran işletmelerinde sipariş süreçlerini dijitalleştirmek amacıyla geliştirilmiş tam kapsamlı bir web uygulamasıdır.

Sistem üç farklı kullanıcı rolünden oluşmaktadır:

- 👤 Müşteri
- 👨‍🍳 Mutfak Personeli
- 👨‍💼 Yönetici

Her kullanıcı yalnızca kendi yetkilerine ait ekranlara erişebilir.

Veriler MySQL veritabanında saklanmakta olup PHP ile dinamik olarak yönetilmektedir.

---

# ✨ Özellikler

## 👤 Müşteri

- Ana sayfa
- Canlı menü görüntüleme
- Sipariş oluşturma
- Sipariş durumu takibi
- Hakkımızda sayfası
- Konum sayfası
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
- Gelen müşteri mesajlarını görüntüleme

---

# 🛠 Kullanılan Teknolojiler

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
├── app.js
├── styles.css
│
├── index.html
├── menu.html
├── order.html
├── order-status.html
├── login.html
├── about.html
├── contact.html
├── location.html
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
└── README.md
```

---

# 🗄️ Veritabanı

Proje aşağıdaki MySQL veritabanını kullanmaktadır.

```
stack_burger
```

Tablolar:

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
git clone https://github.com/simawao/StackBurger.git
```

veya projeyi ZIP olarak indiriniz.

---

## 2. XAMPP Kurulumu

Bilgisayarınıza XAMPP kurunuz.

Ardından aşağıdaki servisleri çalıştırınız.

- Apache
- MySQL

---

## 3. Projeyi htdocs Klasörüne Taşıyın

### Windows

```
C:\xampp\htdocs\StackBurger
```

### macOS

```
/Applications/XAMPP/xamppfiles/htdocs/StackBurger
```

---

## 4. phpMyAdmin'i Açın

Tarayıcıdan;

```
http://localhost/phpmyadmin
```

adresine gidiniz.

---

## 5. Veritabanını Oluşturun

Yeni bir veritabanı oluşturunuz.

Veritabanı adı:

```
stack_burger
```

Karşılaştırma (Collation):

```
utf8mb4_general_ci
```

---

## 6. SQL Dosyasını İçe Aktarın

Yeni oluşturduğunuz **stack_burger** veritabanını seçiniz.

Üst menüden;

```
İçe Aktar (Import)
```

sekmesine tıklayınız.

Proje içerisindeki

```
schema.sql
```

dosyasını seçerek içe aktarınız.

---

## 7. Veritabanı Bağlantısını Kontrol Edin

`db.php` dosyasındaki bağlantı bilgileri aşağıdaki şekilde olmalıdır.

```
Host      : localhost
Database  : stack_burger
Username  : root
Password  :
Charset   : utf8mb4
```

Şifre kullanıyorsanız kendi MySQL şifrenizi giriniz.

---

## 8. Projeyi Çalıştırın

Tarayıcıdan aşağıdaki adresi açınız.

```
http://localhost/StackBurger/
```

---

# 👥 Kullanıcı Rolleri

## 👤 Müşteri

- Menü görüntüleyebilir
- Sipariş oluşturabilir
- Sipariş durumunu takip edebilir
- İletişim formu gönderebilir

---

## 👨‍🍳 Mutfak Personeli

- Gelen siparişleri görüntüler
- Sipariş durumlarını günceller
- Aktif siparişleri yönetir
- Bildirimleri takip eder

---

## 👨‍💼 Yönetici

- Dashboard görüntüler
- Menü yönetimini yapar
- Yeni ürün ekler
- Ürün düzenler
- Satış raporlarını görüntüler
- Günlük ciroyu takip eder
- Gelen müşteri mesajlarını yönetir

---

# 🔄 Sistem Akışı

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

Müşteri Sipariş Durumunu Görür

↓

Yönetici Paneli

↓

Raporlar ve İstatistikler
```

---

# 🎯 Proje Amaçları

- Restoran yönetimini dijital ortama taşımak
- Sipariş süreçlerini hızlandırmak
- Menü yönetimini kolaylaştırmak
- Rol tabanlı kullanıcı sistemi geliştirmek
- Veritabanı destekli dinamik web uygulaması oluşturmak
- Kullanıcı dostu modern bir arayüz sunmak

---

# 📌 Not

Bu proje eğitim ve portföy amacıyla geliştirilmiştir.

Projede PHP ve MySQL kullanılarak dinamik bir restoran yönetim sistemi geliştirilmiş olup müşteri, mutfak ve yönetici süreçleri gerçek iş akışına uygun şekilde tasarlanmıştır.

---

# 👩‍💻 Geliştirici

**Sima Gürsoy**

Yazılım Mühendisliği Öğrencisi

GitHub: https://github.com/simawao
