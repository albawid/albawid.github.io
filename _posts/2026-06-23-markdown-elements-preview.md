---
layout: post
title: "Preview Semua Elemen Markdown"
author: Albawid
date: 2026-06-23
tags: markdown tutorial
excerpt: Post ini berisi contoh semua elemen markdown yang didukung oleh blog ini, termasuk heading, list, table, code block, blockquote, dan lain-lain.
---

Post ini dibuat sebagai **referensi visual** untuk semua elemen markdown yang digunakan di blog ini. Cocok untuk cek apakah styling-nya sudah benar atau belum.

# Heading 1 - Judul Utama

## Heading 2 - Sub Judul

### Heading 3 - Section

#### Heading 4 - Sub Section

##### Heading 5 - Minor Section

###### Heading 6 - Smallest Heading

---

# Paragraf & Text Formatting

Ini adalah paragraf biasa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Paragraf kedua dengan **teks tebal**, *teks miring*, dan ***teks tebal sekaligus miring***. Ada juga ~~teks yang dicoret~~ dan `inline code` untuk menulis kode di dalam paragraf.

Kombinasi: **bold dengan *italic* di dalamnya** dan juga *italic dengan **bold** di dalamnya*.

---

# Blockquote

> Ini adalah blockquote sederhana. Biasanya digunakan untuk kutipan atau catatan penting.

> Blockquote bisa juga **multi-paragraph**.
>
> Seperti ini paragraf keduanya dengan penjelasan lebih lanjut mengenai topik yang sedang dibahas.

> **Tips:** Blockquote bisa dikombinasikan dengan formatting lain seperti **bold**, *italic*, dan `inline code`.

> ### Blockquote dengan Heading
>
> Blockquote juga bisa berisi heading, list, dan bahkan code block:
>
> ```
> contoh code di dalam blockquote
> ```

---

# List

## Unordered List

- Item pertama
- Item kedua
- Item ketiga dengan **teks tebal**
- Item keempat dengan `inline code`

## Unordered List - Nested

- Item utama
  - Sub item level 2
  - Sub item level 2
    - Sub item level 3
    - Sub item level 3
      - Sub item level 4
- Item utama kedua
  - Sub item dengan **formatting**
  - Sub item dengan [link](#)

## Ordered List

1. Langkah pertama
2. Langkah kedua
3. Langkah ketiga
4. Langkah keempat

## Ordered List - Nested

1. Step utama
   1. Sub step A
   2. Sub step B
      1. Sub-sub step i
      2. Sub-sub step ii
2. Step utama kedua
   1. Sub step C

## Mixed List

1. Ordered item
   - Unsub sub item
   - Unsub sub item kedua
2. Ordered item kedua
   1. Ordered sub item
   2. Ordered sub item kedua

---

# Link

## Inline Link

Kunjungi [GitHub](https://github.com) untuk informasi lebih lanjut.

## Link dengan Title

Kunjungi [GitHub](https://github.com "GitHub Homepage") untuk repositori open-source.

## Reference Link

Ini adalah contoh [reference link][ref1] dan juga [reference link kedua][ref2].

[ref1]: https://github.com
[ref2]: https://developer.mozilla.org

## Auto Link

Kunjungi https://github.com/albawid untuk melihat profil GitHub.

---

# Image

## Image Biasa

![Contoh Alt Text](https://via.placeholder.com/600x300/1a1a2e/e94560?text=Preview+Image)

## Image dengan Link

[![Alt Text](https://via.placeholder.com/600x300/16213e/0f3460?text=Click+Me)](https://github.com)

---

# Table

## Table Sederhana

| Nama | Umur | Kota |
|------|------|------|
| Andi | 25 | Jakarta |
| Budi | 30 | Surabaya |
| Citra | 22 | Bandung |

## Table dengan Alignment

| Kiri | Tengah | Kanan |
|:-----|:------:|------:|
| Left | Center | Right |
| Align | Align | Align |
| Text | Text | Text |

## Table Kompleks

| Fitur | Deskripsi | Status | Prioritas |
|:------|:----------|:------:|:---------:|
| **Dark Mode** | Toggle tema gelap/terang | ✅ Aktif | Tinggi |
| **Syntax Highlighting** | Pewarnaan kode otomatis | ✅ Aktif | Tinggi |
| **Responsive** | Tampilan menyesuaikan layar | ✅ Aktif | Sedang |
| **Search** | Pencarian konten blog | 🔄 Progress | Rendah |
| **RSS Feed** | Feed untuk pembaca | ❌ Belum | Rendah |

---

# Code

## Inline Code

Gunakan `console.log()` untuk debug di JavaScript, atau `print()` untuk Python. Untuk styling gunakan property `background-color` pada CSS.

## Code Block - Python

```python
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    sequence = [0, 1]
    for i in range(2, n):
        next_val = sequence[i-1] + sequence[i-2]
        sequence.append(next_val)
    
    return sequence

# Contoh penggunaan
result = fibonacci(10)
print(f"Fibonacci(10): {result}")
# Output: Fibonacci(10): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## Code Block - JavaScript

```javascript
// Class untuk mengelola data mahasiswa
class Mahasiswa {
    constructor(nama, nim, jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.nilai = [];
    }

    tambahNilai(nilai) {
        this.nilai.push(nilai);
    }

    hitungRataRata() {
        if (this.nilai.length === 0) return 0;
        const total = this.nilai.reduce((sum, n) => sum + n, 0);
        return total / this.nilai.length;
    }

    getStatus() {
        const rata = this.hitungRataRata();
        return rata >= 70 ? "Lulus" : "Tidak Lulus";
    }

    toString() {
        return `${this.nama} (${this.nim}) - ${this.jurusan} | Rata-rata: ${this.hitungRataRata().toFixed(2)} | ${this.getStatus()}`;
    }
}

// Contoh penggunaan
const mhs1 = new Mahasiswa("Andi", "12345", "Teknik Informatika");
mhs1.tambahNilai(85);
mhs1.tambahNilai(90);
mhs1.tambahNilai(78);
console.log(mhs1.toString());
```

## Code Block - HTML/CSS

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Halaman</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            padding: 2rem;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 1rem;
            border-bottom: 2px solid #3498db;
            padding-bottom: 0.5rem;
        }
        .card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World</h1>
        <p>Ini adalah contoh halaman HTML sederhana.</p>
        <div class="card">
            <h2>Card Component</h2>
            <p>Dengan gradient background dan border radius.</p>
        </div>
    </div>
</body>
</html>
```

## Code Block - Shell/Bash

```bash
#!/bin/bash

# Script untuk backup otomatis
BACKUP_DIR="/backup/$(date +%Y%m%d)"
SOURCE_DIR="/var/www/html"
LOG_FILE="/var/log/backup.log"

echo "[$(date)] Starting backup..." >> "$LOG_FILE"

# Buat direktori backup jika belum ada
mkdir -p "$BACKUP_DIR"

# Backup dengan rsync
rsync -avz --delete "$SOURCE_DIR/" "$BACKUP_DIR/" >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    echo "[$(date)] Backup successful: $BACKUP_DIR" >> "$LOG_FILE"
    # Hapus backup lama (>30 hari)
    find /backup -type d -mtime +30 -exec rm -rf {} +
else
    echo "[$(date)] Backup FAILED!" >> "$LOG_FILE"
    exit 1
fi
```

## Code Block - YAML (Config Panjang)

```yaml
# Konfigurasi lengkap untuk deployment aplikasi
# File: docker-compose.production.yml

version: '3.8'

services:
  # Frontend Application
  frontend:
    image: node:18-alpine
    container_name: app-frontend
    working_dir: /app
    volumes:
      - ./frontend:/app
      - frontend_node_modules:/app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - REACT_APP_API_URL=https://api.example.com/v1
      - REACT_APP_WS_URL=wss://ws.example.com
      - REACT_APP_AUTH_DOMAIN=auth.example.com
      - REACT_APP_AUTH_CLIENT_ID=client_id_xxxxx
      - REACT_APP_SENTRY_DSN=https://xxx@sentry.io/xxx
      - REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X
    command: npm run build && npm run start
    depends_on:
      - backend
    networks:
      - app-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Backend API
  backend:
    image: python:3.11-slim
    container_name: app-backend
    working_dir: /app
    volumes:
      - ./backend:/app
      - backend_venv:/app/venv
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:password@postgres:5432/appdb
      - REDIS_URL=redis://redis:6379/0
      - SECRET_KEY=your-super-secret-key-here-change-this
      - JWT_ALGORITHM=HS256
      - JWT_EXPIRATION=3600
      - CORS_ORIGINS=https://example.com,https://www.example.com
      - SMTP_HOST=smtp.gmail.com
      - SMTP_PORT=587
      - SMTP_USER=noreply@example.com
      - SMTP_PASSWORD=app-specific-password
      - AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
      - AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
      - AWS_STORAGE_BUCKET_NAME=app-production-assets
      - AWS_S3_REGION=ap-southeast-1
      - LOG_LEVEL=INFO
      - SENTRY_DSN=https://xxx@sentry.io/xxx
    command: >
      sh -c "pip install -r requirements.txt &&
             python manage.py migrate &&
             python manage.py collectstatic --noinput &&
             gunicorn config.wsgi:application --bind 0.0.0.0:8000 --workers 4 --timeout 120"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - app-network
    restart: unless-stopped

  # PostgreSQL Database
  postgres:
    image: postgres:15-alpine
    container_name: app-postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./scripts/init-db.sql:/docker-entrypoint-initdb.d/init.sql
    environment:
      - POSTGRES_DB=appdb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    ports:
      - "5432:5432"
    networks:
      - app-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d appdb"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis Cache
  redis:
    image: redis:7-alpine
    container_name: app-redis
    command: redis-server --appendonly yes --requirepass redispassword
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    networks:
      - app-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "--no-auth-warning", "-a", "redispassword", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    container_name: app-nginx
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - ./nginx/logs:/var/log/nginx
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - frontend
      - backend
    networks:
      - app-network
    restart: unless-stopped

volumes:
  frontend_node_modules:
  backend_venv:
  postgres_data:
  redis_data:

networks:
  app-network:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
```

## Code Block - JSON (Data Panjang)

```json
{
  "apiVersion": "2.0",
  "metadata": {
    "generatedAt": "2026-06-23T10:30:00.000Z",
    "provider": "Albawid Blog API",
    "version": "1.4.2"
  },
  "data": {
    "posts": [
      {
        "id": "post-001",
        "title": "Mengenal Hermes Agent",
        "slug": "mengenal-hermes-agent",
        "author": {
          "id": "user-001",
          "name": "Albawid",
          "email": "albawid@example.com",
          "avatar": "https://example.com/avatars/albawid.png",
          "social": {
            "github": "https://github.com/albawid",
            "twitter": "https://twitter.com/albawid",
            "linkedin": "https://linkedin.com/in/albawid"
          }
        },
        "categories": ["AI", "Technology", "Tutorial"],
        "tags": ["hermes", "ai-agent", "open-source", "automation"],
        "publishedAt": "2026-06-03T08:00:00.000Z",
        "updatedAt": "2026-06-03T15:30:00.000Z",
        "readingTime": 12,
        "wordCount": 2847,
        "excerpt": "Pengalaman menggunakan Hermes Agent, AI agent framework open-source dari Nous Research.",
        "featuredImage": {
          "url": "https://example.com/images/hermes-agent-cover.jpg",
          "alt": "Hermes Agent Preview",
          "width": 1200,
          "height": 630
        },
        "stats": {
          "views": 1547,
          "likes": 89,
          "shares": 34,
          "comments": 12
        },
        "seo": {
          "metaTitle": "Mengenal Hermes Agent - AI Agent Framework Open Source",
          "metaDescription": "Pelajari Hermes Agent, AI agent framework open-source yang bisa ngoding, manage server, dan punya ingatan permanen.",
          "canonicalUrl": "https://albawid.github.io/mengenal-hermes-agent",
          "ogImage": "https://example.com/images/hermes-agent-og.jpg"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 47,
      "itemsPerPage": 10,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

---

# Horizontal Rule

Tiga cara membuat horizontal rule:

---

***

___

---

# Footnote

Ini adalah kalimat dengan footnote[^1] dan juga footnote kedua[^2].

[^1]: Ini adalah isi dari footnote pertama.
[^2]: Ini adalah isi dari footnote kedua dengan penjelasan lebih panjang.

---

# Task List

- [x] Membuat post preview markdown
- [x] Menambahkan heading semua level
- [x] Menambahkan contoh code block
- [ ] Menambahkan contoh image gallery
- [ ] Menambahkan contoh embed video
- [ ] Testing di berbagai browser

---

# Definition List

Istilah Pertama
: Definisi untuk istilah pertama. Bisa multi-paragraph kalau perlu.

: Definisi kedua untuk istilah yang sama.

Istilah Kedua
: Definisi untuk istilah kedua dengan **formatting** dan `inline code`.

Istilah Ketiga
: Definisi untuk istilah ketiga.

---

# Escaped Characters

Tampilkan karakter spesial dengan backslash:

\*Tidak jadi italic\*

\**Tidak jadi bold**\

\[Tidak jadi link\](url)

\`Tidak jadi inline code\`

\# Tidak jadi heading

---

# Colored Text (HTML)

Teks ini berisi <span style="color: #e94560;">teks berwarna merah</span>, <span style="color: #0f3460;">teks berwarna biru</span>, dan <span style="color: #16c79a;">teks berwarna hijau</span> menggunakan inline HTML.

---

# Summary/Details (HTML)

<details>
<summary>Klik untuk membuka detail</summary>

Ini adalah konten tersembunyi yang bisa di-expand. Berguna untuk:

1. Menyembunyikan konten panjang
2. FAQ section
3. Spoiler content
4. Tutorial step-by-step

```python
# Code di dalam details juga bisa
print("Hello from hidden content!")
```

</details>

---

# Keyboard Keys (HTML)

Tekan <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> untuk hard refresh browser.

Shortcut lain:
- <kbd>Ctrl</kbd> + <kbd>C</kbd> - Copy
- <kbd>Ctrl</kbd> + <kbd>V</kbd> - Paste
- <kbd>Alt</kbd> + <kbd>Tab</kbd> - Switch window
- <kbd>Win</kbd> + <kbd>L</kbd> - Lock screen

---

# Abbreviation (HTML)

Gunakan <abbr title="HyperText Markup Language">HTML</abbr> dan <abbr title="Cascading Style Sheets">CSS</abbr> untuk membuat website. Jangan lupa <abbr title="JavaScript">JS</abbr> untuk interaktivitas.

---

# Akhiran

Post ini dibuat sebagai referensi untuk mengecek styling semua elemen markdown di blog ini. Jika ada elemen yang tampilannya kurang sesuai, bisa langsung diperbaiki di file CSS.

Terima kasih sudah membaca! 🎉
