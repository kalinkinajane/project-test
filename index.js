new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slideToClickedSlide: true,
  loop: true,
});
