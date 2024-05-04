// JavaScript For Sticky Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Landscapes Slider

$(".landscapes__slider").owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
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
