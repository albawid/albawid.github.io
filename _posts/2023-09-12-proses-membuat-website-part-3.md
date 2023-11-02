---
layout: post
title: "proses membuat website part 3"
author: albawid
date: 2023-09-12
tags: Jekyll website
excerpt: Melanjutkan pembahasan mengenai pembuatan website part 3, Bagian Deployment Website.
---

# Pendahuluan
Memasuki tahap akhir yaitu proses meng-online-kan atau bahasa kerennya *Deployment* website yang sudah dibuat agar bisa diakses secara online melalui internet, sebenarnya bisa dengan mudah kita upload semua file web yang menggunakan jekyll tersebut ke *Web Hosting Provider* seperti dibawah ini:
1. Niagahoster
2. Hostinger ID
3. Kinsta
4. Dan lain-lain

# Latar Masalah
Namun jika menggunakan Web hosting provider diatas kita akan merepotkan jika ingin memperbarui website yang sudah online dikarenakan terdapat perubahan pada website secara lokal, maka kita harus membuka web hosting yang digunakan, kemudian upload lagi file yang ingin diperbarui secara manual, oleh karena itu disini saya menggunakan [Github Pages](https://pages.github.com/){:target="_blank"} sebagai web hosting, tetapi akan ada satu masalah lagi yaitu plugin `jekyll-toc` yang digunakan untuk membuat daftar isi secara otomatis pada website kali ini tidak men-support github pages, seperti yang dibilang oleh [toshimaru](https://github.com/toshimaru/jekyll-toc/issues/29){:target="_blank"} selaku developer jekyll-toc.

# Solusi
Disini saya anggap kalian sudah install git dan membuat repository untuk website

## Menggunakan jekyll-deploy-action
Untuk mengakali hal tersebut disini saya akan menggunakan [jekyll-deploy-action](https://github.com/jeffreytse/jekyll-deploy-action/tree/master){:target="_blank"} sebagai alat untuk membantu proses deploy ke Github Pages. 

## Buat Folder dan File
Buka folder website kita kemudian buat folder `.github` dan didalam nya buat lagi folder `workflows`, lalu buat file dengan nama sesuai keinginan kalian tapi disini saya akan menggunakan `build-jekyll.yml` 

## Edit build-jekyll.yml
Buka file `build-jekyll.yml` lalu paste code dibawah kemudian save

{: file='build-jekyll.yml'}
{% highlight yml linenos %}

{% raw %}
name: Build and Deploy to Github Pages # Bisa diganti sesuai keinginan
on:
  push:
    branches:
      - main # branch utama kalian, biasanya master atau main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      # Use GitHub Actions' cache to cache dependencies on servers
      - uses: actions/cache@v3
        with:
          path: vendor/bundle
          key: ${{ runner.os }}-gems-${{ hashFiles('**/Gemfile.lock') }}
          restore-keys: |
            ${{ runner.os }}-gems-
      # Use GitHub Deploy Action to build and deploy to Github
      # For latest version: `jeffreytse/jekyll-deploy-action@master`
      - uses: jeffreytse/jekyll-deploy-action@v0.5.0
        with:
          provider: 'github'         # Default is github
          token: ${{ secrets.GITHUB_TOKEN }} # It's your Personal Access Token(PAT)
          ssh_private_key: ''        # It's your SSH private key (SSH approach)
          repository: ''             # Default is current repository
          branch: 'gh-pages'         # Default is gh-pages for github provider
          jekyll_src: './'           # Default is root directory
          jekyll_cfg: '_config.yml'  # Default is _config.yml
          jekyll_baseurl: ''         # Default is according to _config.yml
          bundler_ver: '>=0'         # Default is latest bundler version
          cname: ''                  # Default is to not use a cname
          actor: ''                  # Default is the GITHUB_ACTOR
          pre_build_commands: ''     # Installing additional dependencies (Arch Linux)

{% endraw %}
{% endhighlight %}

## Buat branch baru
Jika kalian belum mempunyai branch `gh-pages`, kalian bisa membuatnya dengan cara seperti dibawah 

```bash
$ git checkout --orphan gh-pages # untuk membuat dan berpindah ke branch baru
$ git rm -rf . # menghapus semua isi branch baru
$ git commit --allow-empty -m "initial commit"
$ git push origin gh-pages
$ git checkout main # berpindah kembali ke branch main
```

## Deploy ke Github
Memasuki tahap akhir yaitu proses deploy ke github atau bahasa jikda dalam bahasa awam proses upload file website ke github melalui terminal dengan cara seperti dibawah

```bash
$ git add . # untuk menambahkan semua file kedalam "daftar upload"
$ git commit -m "sesuai keinginan" # menulis informasi terhadap file yang ada di "daftar upload"
$ git push origin main # upload semua file yang ada di "daftar upload" ke branch main
```

Kemudian ubah sumber website ke branch gh-pages dengan cara buka repository website **Settings** > **Pages** > Pilih **gh-pages** sebagai sumber.

{: .p-gambar .tengah label="Menggunakan gh-pages sebagai sumber website" }
[![branch-gh-pages](/assets/img/post/proses-buat-web-p3/branch-gh-pages.png)](/assets/img/post/proses-buat-web-p3/branch-gh-pages.png)

# Kesimpulan
Gimana? menggunakan cara diatas jauh lebih mudah bukan, bahkan jika ingin memperbarui website kita hanya perlu push ke branch main saja, dan branch gh-pages akan secara otomatis mengikuti branch main. Untuk cara kerja sendiri `jekyll-deploy-action` akan me-render semua file web jekyll kita kemudian secara otomatis deploy ke branch `gh-pages` sebagai website yang sudah jadi, sehingga branch `main` hanya akan digunakan sebagai sumber dari branch gh-pages.

# Referensi
<https://github.com/toshimaru/jekyll-toc/issues/29>
<https://github.com/jeffreytse/jekyll-deploy-action/tree/master>