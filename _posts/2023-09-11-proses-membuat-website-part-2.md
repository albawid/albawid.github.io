---
layout: post
title: "proses membuat website part 2"
author: albawid
date: 2023-09-11
tags: Jekyll website
excerpt: Melanjutkan pembahasan mengenai pembuatan website part 2, Bagian integrasi Jekyll dengan HTML.
---

# Pendahuluan
Melanjutkan part sebelumnya mengenai pembahasan proses pembuatan website, pada tahap ini memasuki integrasi jekyll dengan file website. Sama seperti di part 1 kali ini saya hanya menuliskan code yang penting saja dan tidak akan mencantumkan code secara keseluruhan agar post tetap enak untuk dibaca.

# Instalasi Jekyll
Karena Jekyll merupakan [RubyGem](https://jekyllrb.com/docs/ruby-101/#gems) maka dari itu jekyll bisa diinstall hampir di semua sistem operasi asalkan sudah menginstall beberapa aplikasi yang dibutuhkan jekyll dibawah ini.

## Aplikasi yang dibutuhkan
- [Ruby](https://www.ruby-lang.org/en/downloads/) versi **2.5.0** atau lebih baru, gunakan perintah `ruby -v` untuk memastikan versi ruby.
- [RubyGem](https://rubygems.org/pages/download) cek versi gem `gem -v` pastikan menggunakan versi terbaru.
- [GCC](https://gcc.gnu.org/install/) dan [Make](https://www.gnu.org/software/make/) gunakan `gcc -v`, `g++ -v` dan `make -v` pastikan versi paling baru.
  
## Langkah - Langkah Install Jekyll
Karena saya menggunakan windows maka saya hanya akan menulis instalasi jekyll di windows, untuk sistem operasi lainnya akan saya cantumkan [link menuju artikel resmi](https://jekyllrb.com/docs/installation/).

### Install Jekyll via RubyInstaller
Cara yang paling simpel dan sangat saya rekomendasikan adalah menggunakan [RubyInstaller](https://rubyinstaller.org/).  
Pastikan menggunakan **RubyInstaller** versi **2.4** keatas agar tidak ada masalah ketika menggunakan jekyll.
1. [Download](https://rubyinstaller.org/downloads/) **RubyInstaller versi Ruby+Devkit**. pastikan gunakan opsi bawaan ketika proses instalasi.
2. Jalankan file `ridk install` kemudian install seperti aplikasi pada umumnya, dan di akhir tahap instalasi pastikan memilih opsi `MSYS2 and MINGW development tool chain`.
3. Buka CMD kemudian install jekyll dan bundler menggunakan *package manager ruby* yang sudah kita install sebelumnya yaitu `gem` dengan perintah `gem install jekyll bundler`.
4. cek versi jekyll yang sudah terinstall `jekyll -v`

> Ketika mengecek versi jika kalian mengalami error **Jekyll has not been installed properly**, reboot device kemudian jalankan ulang, jika masih error pastikan terhubung internet kemudian coba reinstall RubyInstaller dan ulangi mulai step 2

### Install Jekyll via Bash Windows
Jika kalian menggunakan windows 10 versi 1607 keatas, bisa menggunakan opsi lain yaitu menggunakan bash di terminal atau cmd windows

> Pastikan kalian sudah mengaktifkan **[Windows Subsytem for Linux](https://msdn.microsoft.com/en-us/commandline/wsl/about)**.

Pastikan repository ter-update, karena subsystem linux menggunakan ubuntu maka untuk update semua reposity gunakan perintah ini

```bash
sudo apt-get update -y && sudo apt-get upgrade -y
```

selanjutnya install ruby dari repository [BrightBox](https://www.brightbox.com/docs/ruby/ubuntu/), karena brightbox merupakan salah satu repository yang selalu *up-to-date* ruby ke versi terbaru.

```bash
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.5 ruby2.5-dev build-essential dh-autoreconf
```

kemudian update ruby gem dan install jekyll 

```bash
gem update && gem install jekyll bundler
```

untuk mengecek versi jekyll gunakan `jekyll -v`

# Menggunakan Jekyll
Setelah semuanya terinstall selanjutnya kita sudah bisa membuat website secara otomatis menggunakan jekyll, contoh disini saya mau membuat folder website-jekyll dengan nama `BlogPribadi`

```bash
jekyll new BlogPribadi
```
kemudian masuk kedalam folder `BlogPribadi` yang sudah di buat

```bash
cd BlogPribadi
```

bisa diketahui bahwa didalam folder `BlogPribadi` sudah terdapat template website bawaan

```
BlogPribadi/
    |-- 404.html
    |-- Gemfile
    |-- Gemfile.lock
    |-- _config.yml
    |-- _posts
    |   |-- 2023-09-13-welcome-to-jekyll.markdown
    |-- about.markdown
    |-- index.markdown
```
mari kita bedah satu-satu:
1. **404.html**, seperti namanya file ini hanya akan dibaca jekyll ketika link yang kita tuju tidak menemukan hasil apapun.
2. **Gemfile**, merupakan file untuk kita menulis plugin-plugin yang kita butuhkan di dalam jekyll, plugin bawaan kurang lebih begini jika masih belum ditambah plugin baru
   ```ruby
   ... 
   gem "jekyll", "~> 4.3.2"
   # This is the default theme for new Jekyll sites. You may change this to anything you like.
   gem "minima", "~> 2.5"
   # If you want to use GitHub Pages, remove the "gem "jekyll"" above and
   # uncomment the line below. To upgrade, run `bundle update github-pages`.
   # gem "github-pages", group: :jekyll_plugins
   # If you have any plugins, put them here!
   group :jekyll_plugins do
     gem "jekyll-feed", "~> 0.12"
   end
   # Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
   # and associated library.
   platforms :mingw, :x64_mingw, :mswin, :jruby do
     gem "tzinfo", ">= 1", "< 3"
     gem "tzinfo-data"
   end
   # Performance-booster for watching directories on Windows
   gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
   # Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
   # do not have a Java counterpart.
   gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
   ...
   ``` 
3. **_config.yml**, file utama dan terpenting untuk kita mengatur semua komponen didalam folder jekyll value bawaan seperti dibawah
   ```yaml
   ... 
   title: Your awesome title
   email: your-email@example.com
   description: >- # this means to ignore newlines until "baseurl:"
     Write an awesome description for your new site here. You can edit this
     line in _config.yml. It will appear in your document head meta (for
     Google search results) and in your feed.xml site description.
   baseurl: "" # the subpath of your site, e.g. /blog
   url: "" # the base hostname & protocol for your site, e.g. http://example.com
   twitter_username: jekyllrb
   github_username:  jekyll

   # Build settings
   theme: minima
   plugins:
     - jekyll-feed
   ...
   ```
4. **_posts**, seperti namanya folder ini tempat menulis judul post baru
   > perahtikan cara penulisan judul dan tanggal post, agar nantinya judul post terbaru bisa dibaca oleh jekyll 
5. **about.markdown**, sama seperti namanya juga, file about ini bisa berisi alasan pembuatan website, bahkan siapa si pembuat website atau yang lainnya
6. **index.markdown**, file ini yang nantinya akan dibaca jekyll pertama kali, dan akan menjadi *homepage* atau *landing page* 

> untuk `about.markdown` dan `index-markdown` kenapa ditulis dengan format `.markdown` bukan `.html`? karena jekll menggunakan engine **kramdown** yang nantinya file berekstensi `.markdown` akan dirender kedalam format `.html` dengan tujuan untuk mempermudah dalam penulisan.

dan sebenanya template tersebut bisa kita jalankan secara lokal

```bash
bundle exec jekyll serve
```
atau jika kalian ingin menjalankan secara lokal dan bisa diakses dengan device lain 

```bash
bundle exec jekyll serve --host 0.0.0.0
```
perintah `serve` akan menjalankan website secara lokal di <http://localhost:4000/>   
\
Untuk tampilan tema bawaan jekyll seperti dibawah ini

{: .p-gambar .tengah label="Tampilan tema bawaan Jekyll" }
[![serve-command](/assets/img/post/proses-buat-web-p2/serve-command.png)](/assets/img/post/proses-buat-web-p2/serve-command.png)

Sangat sederhana bukan?, tapi bisa dibuat lebih keren lagi seperti pembahasan kita selanjutnya, simak saja *hwhw*

# Integrasi Jekyll dan website
Meskipun tertulis 'integrasi' tapi yang kita lakukan sebenarnya hanyalah menulis kode dan memasukannya kedalam folder jekyll dengan benar, agar konsep desain website bisa dibaca dan dijalankan oleh jekyll, tapi sebelum itu saya akan menganggap kalian sudah paham HTML, CSS dan  beberapa istilah didalam jekyll seperti liquid, frontmatter dan lain-lain, jika belum bisa kalian [menuju web resmi jekyll](https://jekyllrb.com/docs/step-by-step/02-liquid/).

## Buat beberapa folder dan file
Seperti yang ada diatas, bahwa template bawaan jekyll sangatlah sederhana, namun kita bisa menambahkan beberapa folder yang sebenanya sudah ada di jekyll namun tidak dibuatkan secara otomatis.  
Pertama buat folder baru didalam folder `BlogPribadi` dengan nama: 
1. **_data**
   folder `_data` akan digunakan untuk menyimpan data dalam format `.yaml`, bisa berisi data `anggota.yaml`, `organisasi.yaml`, `bar-navigasi.yaml` dan lain-lain, yang nantinya akan dipanggil menggunakan liquid. 
2. **_includes**
   folder `_includes` digunakan untuk menyimpan file modularisasi HTML, umumnya folder ini berisi file html yang nanti nya juga akan dipanggil menggunakan liquid.
3. **assets**
   folder ini berisi asset yang dibutuhkan oleh website biasanya terdapat 3 folder utama:
   - **css**, untuk mennyimpan file styling 
   - **img**, untuk mennyimpan gambar, banner dan lainnya
   - **js**, untuk mennyimpan javascript

Kedua buat beberapa file dengan nama:
1. **post.html**, untuk tampilan daftar semua post yang ada
2. **project.html**, untuk tampilan daftar project yang sudah dibuat
3. **tag.html** (*opsional*), untul tampilan semua daftar tag yang dipakai, umumnya digunakan sebagai filter, tapi disini saya memakai plugin `jekyll-instant-search` jadi untuk mem-filter tag tinggal ketik di kolom pencarian  

## Edit _config.yml sesuai kebutuhan
Seperti yang sudah ditulis diatas fungsi `_config.yml` untuk menyimpan semua konfigurasi yang ada di jekyll dan jika ingin memanggil value yang ada di `_config.yml` bisa menggunakan liquid `{% raw %}{{ site.value }}{% endraw %}`.

Edit terlebih dahulu data yang akan dipanggil:

{: file='_config.yml'}
{% highlight yaml %}
...
title: Blog Pribadi
email: nama@email.com
...
{% endhighlight %}

Kemudian tulis liquid `{% raw %}{{ site.value }}{% endraw %}` kedalam HTML:

{: file='index.html'}
{% highlight html %}
<html lang="id">
    <head>
        <title>{% raw %}{{ site.value }}{% endraw %}</title>
    </head>
    <body></body>
</html>
{% endhighlight %}

