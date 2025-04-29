const button = document.querySelector("#hamburger");
const nav = document.querySelector("nav");
button.addEventListener("click", () => {
  nav.classList.toggle("active");
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 30,
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
});
