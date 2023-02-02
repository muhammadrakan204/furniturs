const navbarNav = document.querySelector(".navbar-nav");
const linkNav = document.querySelectorAll(".navbar-nav .linkNav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const satu = document.querySelector(".satu");
const dua = document.querySelector(".dua");
const tiga = document.querySelector(".tiga");

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

const changeFont = () => {
  const ketinggian = document.documentElement.scrollTop;
  for (let i = 0; i < linkNav.length; i++) {
    if (ketinggian > 569) {
      linkNav[i].addEventListener("mouseover", function () {
        linkNav[i].style.backgroundColor = "#FFF8EA";
      });
      linkNav[i].addEventListener("mouseout", function () {
        linkNav[i].style.backgroundColor = "";
      });
    } else {
      linkNav[i].addEventListener("mouseover", function () {
        linkNav[i].style.backgroundColor = "#B1C387";
      });
    }
  }
};
