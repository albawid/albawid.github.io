function fungsi() {
    // var btn = document.querySelector("#btn-dark")
    var logo = document.querySelector(".dark-light")
    var body = document.querySelector("body")
    var img = document.querySelector(".img")

    if (body.classList.contains("dark-mode")) {
        // mengubah simbol lightmode
        body.classList.remove("dark-mode");
        logo.classList.remove("fa-moon");
        logo.classList.add("fa-sun");
        img.src = "/assets/img/maskot/tohru300x300.png"
    } else {
        // mengubah simbol n-mode
        body.classList.add("dark-mode");
        logo.classList.remove("fa-sun");
        logo.classList.add("fa-moon");
        img.src = "/assets/img/maskot/hehe300x300.png"
    }
}