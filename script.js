const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  navbarNav.classList.toggle("active");
  hamburger.classList.toggle("close-hamburger");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
