// var swiper = new swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   effect: "fade",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// 스크롤 높이에 따른
$(window).scroll(function (evt) {
  var y = $(this).scrollTop();
  if (y > 120) {
    $(".header").removeClass("gnbBg");
  } else {
    $(".header").addClass("gnbBg");
  }
});
