var swiper = new Swiper(".slide_wrap", {
 loop : true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination : 버튼 
  pagination: {
    el: ".swiper-pagination",
    type : "fraction",
  },
  navigation: {
    nextEl: ".slide_next",
    prevEl: ".slide_prev",
  },
});