const navbarNav = document.querySelector(".navbar-nav");
const linkNav = document.querySelectorAll(".navbar-nav .linkNav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navA = document.querySelectorAll(".navbar-nav a");
const satu = document.querySelector(".satu");
const dua = document.querySelector(".dua");
const tiga = document.querySelector(".tiga");

console.log(navA);

const animationHamburger = () => {
  hamburgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    satu.classList.toggle("lima");
    dua.classList.toggle("seratus");
    tiga.classList.toggle("lima");
    navbarNav.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
      satu.classList.remove("lima");
      dua.classList.remove("seratus");
      tiga.classList.remove("lima");
    }
  });
};
animationHamburger();

// merubah warna bg navlink ketika di hover di ketinggian tertentu
window.onscroll = function () {
  changeFont();
};

// const changeFont = () => {
//   const ketinggian = document.documentElement.scrollTop;
//   for (let i = 0; i < navA.length; i++) {
//     if (ketinggian > 569) {
//       navA[i].addEventListener("mouseover", function () {
//         navA[i].style.color = "#FFF8EA";
//       });
//       navA[i].addEventListener("mouseout", function () {
//         navA[i].style.color = "";
//       });
//     }
//   }
// };
