const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

const links = document.querySelectorAll("#navbar a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});