---
layout: post
title: "Pengenalan markdown dan contoh penggunaan"
author: albawid
date: 2023-09-20
tags: markdown tips trik
excerpt: berkenalan dengan markdown, cara penulisan baru untuk mempermudah pembuatan content web statik  
---

# Pendahuluan 
Apa itu Markdown? Markdown adalah bahasa markup ringan yang dapat digunakan untuk menambahkan elemen pemformatan ke dokumen teks biasa. Dibuat oleh [John Gruber](https://daringfireball.net/projects/markdown/){:target="_blank"} pada tahun 2004, Markdown sekarang menjadi salah satu bahasa markup paling populer di dunia.

# Kenapa Harus Markdown?
Kalian mungkin bertanya-tanya mengapa kebanyakan orang menggunakan Markdown dan bukan [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG){:target="_blank"}. Berikut ini mungkin alasan yang paling populer:

1. Markdown dapat digunakan untuk segala hal. Orang-orang menggunakannya untuk membuat website, dokumen, catatan, buku, presentasi, email, dan dokumentasi teknis atau biasa dikenal *Doc Files*.
2. Markdown dapat digunakan di situs seperti Reddit, GitHub, Disqus, dan sekarang Facebook juga sudah support Markdown, dan masih banyak aplikasi desktop dan berbasis web yang mendukungnya.

# Mencoba Markdown
Cara yang paling mudah dan gratis mencoba markdown adalah dengan menggunakan tool online yang sudah disediakan [Dilinger](https://dillinger.io/){:target="_blank"}.  
**Dilinger** merupakan salah satu markdown editor terbaik dan gratis, tanpa perlu download, cukup buka di PC atau Handphone dan mulai mengetik disisi kiri, dan hasil yang sudah di-render akan berada disisi kanan.

{: .p-gambar .tengah label="Dilinger" }
[![Dilinger](/assets/img/post/pengenalan-markdown/dillinger.png)](/assets/img/post/pengenalan-markdown/dillinger.png)

# Cara Kerja Markdown
**Dillinger** membuat menulis di Markdown menjadi lebih mudah karena menyembunyikan hal-hal yang terjadi di balik layar, tetapi ada baiknya jika kita mencoba mengeksplor bagaimana cara kerja markdown secara umum.  
\
Ketika kalian menulis di Markdown, teks disimpan dalam file [plaintext](https://id.wikipedia.org/wiki/Teks_biasa){:target="_blank"} yang menggunakan format `.md` atau `.markdown`. Terus bagaimana file berformat Markdown dikonversi menjadi HTML atau dokumen yang siap cetak?  
\
Jawaban singkatnya adalah kalian membutuhkan aplikasi Markdown editor yang mampu memproses file Markdown. Ada banyak aplikasi yang tersedia, mulai dari script sederhana sampai aplikasi desktop yang mirip seperti Microsoft Word. Terlepas dari perbedaan visualnya, semua aplikasi mempunyai cara kerja yang sama. Seperti Dillinger, semuanya mengonversi teks berformat Markdown ke HTML sehingga dapat ditampilkan di browser web.  
\
Aplikasi Markdown editor menggunakan sesuatu yang disebut prosesor Markdown untuk mengambil teks berformat Markdown dan me-render-nya ke format HTML. Pada saat itu, dokumen kalian dapat ditampilkan di browser web atau digabungkan dengan stylesheet dan dicetak. Untuk gambaran cara kerja markdwon kurang lebih seperti dibawah ini 

> Sebernarnya aplikasi Markdown Editor dan prosesor Markdown adalah dua komponen yang terpisah. Tapi untuk kemudahan, saya menggabungkannya menjadi satu elemen ("Markdown App") pada gambar di bawah ini.

{: .p-gambar .tengah label="Cara Kerja Markdown" }
[![markdown-flowchart](/assets/img/post/pengenalan-markdown/markdown-flowchart.png)](/assets/img/post/pengenalan-markdown/markdown-flowchart.png)

Dari sudut pandang kalian, mungkin prosesnya terlihat sedikit ribet, tergantung pada aplikasi yang kalian gunakan. Sebagai contoh, Dillinger pada dasarnya menggabungkan langkah 1 sampai 3 ke dalam satu tampilan, yang hanya kalian lakukan adalah mengetik di panel kiri dan output yang dirender secara ajaib muncul di panel kanan.

# Contoh Penggunaan Markdown 
Seperti yang sudah disinggung diatas, Markdown adalah cara yang cepat dan mudah untuk membuat catatan, membuat konten untuk situs web, dan menghasilkan dokumen yang siap cetak. Tidak perlu waktu lama untuk mempelajari sintaks Markdown, dan setelah kalian tahu cara menggunakannya, kalian dapat menulis menggunakan Markdown di mana saja. Kebanyakan orang menggunakan Markdown untuk membuat konten untuk web, tetapi Markdown juga bagus untuk memformat segala sesuatu mulai dari pesan email hingga daftar belanjaan.  
\
Sebagai contoh penggunaan Markdown pada Jekyll yang saya gunakan saat ini, jika kalian ingin membuat daftar isi seberti dibawah ini

{: .p-gambar .tengah label="Contoh membuat Daftar Isi" }
[![daftar isi](/assets/img/post/pengenalan-markdown/daftar-isi.png)](/assets/img/post/pengenalan-markdown/daftar-isi.png)

Jika menggunakan HTML untuk mencapai hal tersebut, maka kalian harus mengetik code dibawah ini secara manual (*abaikan garis border dan lingkaran, karena itu masuk kedalam pseudo class*)

```html
<h2>Daftar Isi</h2>
<ul>
    <li>Pendahuluan</li>
    <li>Kenapa Harus Markdown?</li>
    <li>Mencoba Markdown</li>
    <li>Cara Kerja Markdown</li>
    <li>Contoh Penggunaan Markdown</li>
    <li>Referensi</li>
</ul>
```

Dan jika dibandingkan dengan menggunakan markdown untuk mencapai hal yang sama

```markdown
## Daftar Isi
1. Pendahuluan
2. Kenapa Harus Markdown?
3. Mencoba Markdown
4. Cara Kerja Markdown
5. Contoh Penggunaan Markdown
6. Referensi
```

# Kesimpulan
Bisa kalian lihat perbedaan yang sangat signifikan antara menulis menggunakan markdown dan menggunakan html, bahkan jika kalian menggunakan markdown tidak perlu tau ilmu penulisan html, seperti yang sudah dikutip diatas markdown bisa di render ke dalam html menggunakan markdown app atau markdown editor.

# Referensi
<https://daringfireball.net/projects/markdown/>  
<https://en.wikipedia.org/wiki/Markdown>  
<https://www.markdownguide.org/getting-started>