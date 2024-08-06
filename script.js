const hamburger = document.getElementById("hamburger");
const x = document.getElementById("x");
const mobile_navbar = document.getElementById("mobile_navbar");

function showNavBar() {
    hamburger.classList.toggle("hide");
    x.classList.toggle("show");
    mobile_navbar.classList.toggle("show")
}
