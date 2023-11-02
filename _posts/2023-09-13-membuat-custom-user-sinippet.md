---
layout: post
title: "membuat custom user snipet vscode"
author: albawid
date: 2023-09-13
tags: vscode tips trik
excerpt: kesusahan mengetik tulisan yang sama namun berbeda berulang kali, maka membuat kustom snippet merupakan sebuah solusi
---

# Pendahuluan
Halo para pembaca (*kalo ada haha*), yang berkarir sebagai *Developer* pasti tidak asing dengan code editor, ada banyak code editor yang populer salah satu nya adalah buatan Microsoft yaitu [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"} atau biasanya disebut **VSCode**, fitur yang ditawarkan sangatlah banyak mulai dari fitur dasar dan wajib ada hampir di semua code editor adalah integerasi git, kebebasan memasang ekstensi, dan yang paling penting adalah kebebasan membuat kustom user [snippet code](https://en.wikipedia.org/wiki/Snippet_(programming)){:target="_blank"}.

# Latar Masalah
Semua Code Editor pasti mempunyai fitur dimana jika kita mengetikkan huruf maka akan muncul beberapa pilihan kata atau saran, itu adalah apa yang disebut **snippet**, snippet tidak terbatas pada kata atau kalimat, namun juga template script.  
\
Tapi ada keadaan dimana suatu snippet tidak bekerja sesuai apa yang kita inginkan atau bahkan tidak ada snippet yang tersedia untuk project yang kita kerjakan. Oleh karena itu untuk kasus kali ini saya akan mencoba membuat kustom snippet code untuk [frontmatter](https://jekyllrb.com/docs/front-matter/){:target="_blank"} file markdown yang ada di dalam jekyll, karena sebelumnya cukup kerepotan karena selalu menulis frontmatter dengan 8 baris yang berbeda di setiap post.

# Persiapan
Buka VSCode kemudian klik Icon **Setting** > **User Snippets** lalu akan ada 3 pilihan 
1. **New Global Snippet File** jika kalian ingin custom snippet berlaku untuk semua format file. 
2. **New Snipper File For project** jika kalian ingin custom snippet hanya berlaku untuk project kalian saat ini.
3. Yang terakhir hanya untuk format file tertentu maka kalian bisa buat nama **format-file** dan diakhiri **.json** contoh
   1. markdown.json
   2. python.json
   3. javascript.json

Jika sudah maka akan terbuka tab kosong baru yang nantinya akan diisi kustom snippet, untuk sekarang biarkan seperti itu dan jangan ditutup.

# Tutorial
Buka <https://snippet-generator.app/> kemudian ada beberapa kolom yang harus diisi:
1. **Description**, deskripsi tentang snippet yang kalian buat
2. **Tab trigger**, kata kunci untuk memunculkan snippet yang telah kalian buat
3. **Your snippet**, tempat membuat kustom snippet 

Snippet yang ingin saya buat kurang lebih seperti berikut
```json
---
layout: $1
title: "$2"
author: $3
date: $4-$5-$6
tags: $7
excerpt: $8
---
```

> Perlu diketahui tanda "$" merupakan **Placeholder** yaitu untuk memudahkan kita berpindah baris hanya menggunakan tombol `tab` tanpa menggunakan kursor.

Setelah itu Pilih VSCode di sebelah kanan dan copy script kemudian paste ke tab kosong yang tadi sudah kita buat lalu save file tersebut.

{: file='markdown.json'}
{% highlight json linenos %}
"Post Frontmatter": {
  "prefix": "frontmatter",
  "body": [
    "---",
    "layout: $1",
    "title: \"$2\"",
    "author: $3",
    "date: $4-$5-$6",
    "tags: $7",
    "excerpt: $8",
    "---"
  ],
  "description": "Post Frontmatter"
}
{% endhighlight %}

# Hasil Akhir
Setelah semua selesai sekarang coba ketik kata kunci yang sudah dibuat tadi untuk memunculkan kustom snippet maka jika tidak ada kendalam akan tampil seperti berikut

{: .p-gambar .tengah label="Hasil akhir pembuatan kustom snippet" }
[![snippet.gif](/assets/img/post/membuat-kustom-snippet/snippet.gif)](/assets/img/post/membuat-kustom-snippet/snippet.gif)

# Kesimpulan
seperti itulah cara membuat kustom snippet code, sangat mudah jika menggunakan tool online dengan begini kita bisa membuat snippet apapun itu, tidak terbatas pada script tapi juga bisa digunakan untuk kamus jika kalian pernah menggunakan fitur pustaka yang ada di keyboard virtual kalian di handphone.  