// JavaScript For Sticky Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Menu Active Class OnClick

$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// JavaScript For Sticky Mobile Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".mobile-navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// JavaScript For Mobile Navbar

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".mobile__nav ul li a");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    document.querySelector(".mobile__nav").classList.toggle("active");
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      document.querySelector(".mobile__nav").classList.remove("active");
      navbarToggler.classList.add("active");
    });
  });
});

// Landscapes Slider

$(".landscapes__slider").owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Tooltips Config

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
