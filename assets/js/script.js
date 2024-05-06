// JavaScript For Sticky Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// JavaScript For Sticky Mobile Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".mobile-navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// JavaScript For Mobile Navbar

const navbarToggler = document.querySelector(".navbar-toggler");
const mobileNav = document.querySelector(".mobile__nav");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("active");
  mobileNav.classList.toggle("active");
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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))