---
layout: post
title: "post paling baru deh"
author: Albawid
date: 2023-08-03
tags: tag1 tag2 tag3
excerpt: ini adalah contoh preview post, ternyata excerpt bisa di tulis sebagai frontmatter
---

# Heading 1

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

## heading 2

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

### Heading 3

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

## Orientasi 2.2
Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

## Orientasi 2.3
Contoh Codeblock dengan 3 tipe situasi:

- Lebih dari 1 line dan lebih panjang dari parent
   
{:file='nama_folder/index.html'}
{% highlight html linenos %}
<div class="content-post">
  <h1 class="judul-post">{{ page.title }}</h1>
  <p class="tanggal">{{ page.date | date: "%-d %B, %Y" }}</p>
  <p class="author tanggal">Ditulis oooooooooooooooooooooooooooooooooleh <a href="/about/">{{ page.author }}</a></p>
</div>
{% endhighlight %}

- Lebih dari 1 line tapi tidak lebih panjang dari parent
   
{:file='nama.json'}
{% highlight json %}
{ 
  "firstName": "Aliffaiz",
  "lastName": "Bayu",
  "age": 19
}
{% endhighlight %}

- 1 line dan lebih panjang dari parent
   
{:file='index.html'}
{% highlight html %}
<p class="author tanggal">Ditulis oooooooooooooooooooooooooooooooooleh <a href="/about/">{{ page.author }}</a></p>
{% endhighlight %}

## Orientasi 2.4
Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

## Tes heading panjangg
Seperti ini hasilnya, mungkin masih terlihat sangat amatiran tapi percayalah semua ini dibangun dari 0 atau yang biasa kalian sebut
*Build From Scratch*

## Dibawah ini tes semua syntax markdown
**Bold teks** ditandai dengan 2 bintang `**Bold teks**`.

blockquote menggunakan **>** kemudian diikuti dengan teks
> ini adalah teks blockquote 1
>
> ini adalah teks blockquote 2

order list diawali dengan angka
1. resep 1
2. resep 2
3. resep 3

order tidak urut diawali dengan **-**
- es teh
- es jeruk
- es dawet

horizontal rule menggunakan 3 garis `---`


link ditulis\
`[teks link](https://linknya.com)`\
[teks link](https://linknya.com)

Code block menggunakan 3 tanda seperti code inline


```html
<div class="content-post">
  <h1 class="judul-post">{{ page.title }}</h1>
  <p class="tanggal">{{ page.date | date: "%-d %B, %Y" }}</p>
  <p class="author tanggal">Ditulis oooooooooooooooooooooooooooooooooleh <a href="/about/">{{ page.author }}</a></p>
</div>
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```bash
$ sudo pacman -S neovim
```

mencoret kalimat ditulis\
`~~The world is flat.~~`\
~~kalimat yg tercoret~~

----------
menyorot kalimat penting\
`==misal ini kalimat penting==`\
==misal ini kalimat penting==

----------

{: .p-gambar label="ini contoh label gambar 1" }
[![tes gambar](https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg)](https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg)

diatas adalah contoh gambar yang sudah menggunakan plugin lightbox

{: .p-gambar .tengah label="ini contoh label gambar 2" }
[![tes lightbox1](/assets/img/project/p1.png)](/assets/img/project/p1.png)

[![tes lightbox1](/assets/img/project/p1.png)](/assets/img/project/p1.png){: .tengah }

{: .p-gambar label="ini contoh label gambar 2" }
[![tes lightbox2](/assets/img/project/p1.png)](/assets/img/project/p1.png)

{: .p-gambar .tengah }
[![tes lightbox3](/assets/img/project/p1.png)](/assets/img/project/p1.png)

[tes yt sebagai link](https://youtu.be/cIaWzyGjC6g?si=4nb7JyOP2zg9kwni)

Tes yt sebagai dengan thumbnail dengan posisi berada ditengah

{: .p-gambar .tengah label="Contoh attachment dari youtube" }
[![tes video](https://img.youtube.com/vi/cIaWzyGjC6g/0.jpg)](https://www.youtube.com/watch?v=cIaWzyGjC6g)

Tes yt sebagai dengan thumbnail dengan posisi berada kiri

{: .p-gambar label="Contoh attachment dari youtube" }
[![tes video](https://img.youtube.com/vi/cIaWzyGjC6g/0.jpg)](https://www.youtube.com/watch?v=cIaWzyGjC6g)

Contoh penulisan menggunakan `.markdown`

{: file='2023-08--3-post-paling-baru-deh.markdown'}
{% highlight markdown linenos %}
...
{: .p-gambar  label="contoh label" }
[![contoh caption](link.com)](link.com)
...
{% endhighlight %}

{: file='bach.bashrc'}
{% highlight bash %}
 $ sudo pacman -S vim
{% endhighlight %}

```bash
 $ sudo pacman -S vim
```
