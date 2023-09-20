---
layout: post
title: "proses membuat website part 1"
author: albawid
date: 2023-09-10
tags: jekyll website
excerpt: semua proses terkait pembuatan website akan ditulis sebagai post dengan sedetail mungkin, alih-alih biar website tidak kosong hehe
---

# Pendahuluan
Halo para pembaca yang membaca tulisan tidak jelas ini, maaf sebelumnya jika bahasa dan cara penulisan yang kurang benar dikarenakan saya tidak ada pengalaman sebagai *Content-Writer* atau *Copywriter* atau yang lain. Jadi dengan jadinya website ini semoga bisa saya gunakan sebagai bahan belajar tentang menulis artikel. Post dengan judul ini mungkin akan dibagi menjadi beberapa part karena saya ingin menulisnya secara detail. *kalau bisa wkwk*

# Latar Belakang
Saya orangnya sangat suka menggunakan internet sampai di suatu hari saya ingin mempunyai website sendiri tapi masalahnya saya tidak ada background sebagai *Web Developer* apalagi menulis kode program, sehingga saya mencari tutorial membuat website, semua mengintruksikan untuk menggunakan template yang sudah ada tapi tidak ada yang cocok secara tampilan bagi saya, kemudian saya mencari tutorial belajar *Web Development* dan saya menemukan Youtube Channel [Web Programming UNPAS](https://www.youtube.com/@sandhikagalihWPU) yang menurut saya sangat bagus dari segi materi, penyampaian, urutan pembelajaran, latihan serta tips dan trik membuat website. Dari situ saya yang awalnya nol banget tentang Web Development sampai sekarang bisa membuat website, meskipun hanya frontend saja itu pun cuma HTML dan CSS.

# Software
Saya menggunakan **Jekyll** sebagai framework, jika kalian tidak tahu apa itu jekyll, kalian bisa baca di doc [web resmi jekyll](https://jekyllrb.com/docs/). Secara kasar, singkatnya jekyll adalah sebuah **Static Site Generator** atau biasa disebut **SSG** merupakan kerangka atau template *directory* sebuah website, sebagai contoh di jekyll ada folder dengan nama `_posts` maka jika kalian ingin membuat judul post baru kalian harus membuat file tulisan disana.

# Konsep Desain UI
Saya ingin web simpel dan menarik namun unik, yang mempunyai total 4 tab sebagai navigasi:
1. Home
2. post
3. project
4. about 
   
> untuk code tidak akan saya tampilkan secara menyeluruh agar tidak spam karena sangat panjang, sebagai gantinya akan saya cantumkan link menuju code yang ada di [github saya](https://github.com/albawid/albawid.github.io)

## Home Layout
Tampilan *Home* atau *Landing Page* yang menampilkan gambar maskot dan deskripsi author secara singkat di sisi kanan kemudian dibawahnya terdapat 3 post terbaru dan 3 project terbaru dan tombol menuju semua daftar list post dan project

{: .p-gambar .tengah label="Desain Tampilan Home" }
[![Home Layout](/assets/img/post/proses-buat-web-p1/home-layout.png)](/assets/img/post/proses-buat-web-p1/home-layout.png)

## Post Layout
Untuk tampilan list post sama seperti yang ada di "Home" namun ada perbedaan ketika website terbuka di viewport minimal 768px dimana deskripsi post akan di matikan dengan tujuan menghemat viewport

{: .p-gambar .tengah label="Desain Tampilan list Post" }
[![post Layout](/assets/img/post/proses-buat-web-p1/post-layout.png)](/assets/img/post/proses-buat-web-p1/post-layout.png)

## Project Layout
Tampilan list Project sama seperti list post namun ditambahkan gambar dan tag dihilangkan karena menurut saya untuk membahas project atau bahan latihan saya tidak memerlukan tag

{: .p-gambar .tengah label="Desain Tampilan list Project" }
[![project Layout](/assets/img/post/proses-buat-web-p1/project-layout.png)](/assets/img/post/proses-buat-web-p1/project-layout.png)

## About Layout
Sebernarnya di tab *about* ini menggunakan layout project yang di *duplicate* langsung dari layout post sehingga tampilan about ini akan mirip dengan tampilan isi post dengan perbedaan tanggal dan author dimatikan.  

{: .p-gambar .tengah label="Desain Tampilan About" }
[![about Layout](/assets/img/post/proses-buat-web-p1/about-layout.png)](/assets/img/post/proses-buat-web-p1/about-layout.png)

Komponen daftar isi memiliki 3 level:
1. Heading 1, menggunakan simbol lingkaran solid 
   ```html
   <h1>Heading 1</h1>
   ```
   atau jika didalam markdown
   ```markdown
   # Heading 1
   ```
2. Heading 2, menggunakan simbol outline lingkaran
   ```html
   <h2>Heading 2</h2>
   ```
   atau jika didalam markdown
   ```markdown
   ## Heading 2
   ```
3. Heading 3, menggunakan simbol kotak solid
   ```html
   <h3>Heading 3</h3>
   ```
   atau jika didalam markdown
   ```markdown
   ### Heading 3
   ```

untuk hasilnya seperti dibawah ini

{: .p-gambar .tengah label="Tampilan Daftar isi" }
[![daftar isi](/assets/img/post/proses-buat-web-p1/daftar-isi.png)](/assets/img/post/proses-buat-web-p1/daftar-isi.png)

# Kesimpulan
Sangat sederhana bukan?, tapi perlu diketahui pembuatan website ini dari desain tampilan sampai penulisan HTML, CSS dan sedikit Javascript hanya dilakukan oleh 1 orang saja, ya saya sendiri, meskipun saya tidak ada pengalaman sebagai *Web Developer* sebelumnya tapi saya sangat bersyukur bisa membuat website sesuai keinginan saya, ya seperti ini lah tampilan website yang saya inginkan. Untuk part selanjutnya mungkin akan membahas integrasi Jekyll dengan website.