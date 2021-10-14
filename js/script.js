// 메뉴 스크롤
$(function () {
  $(window).scroll(function (evt) {
    var y = $(this).scrollTop();
    if (y > 120) {
      $(".header").addClass("gnbBg");
      $(".gnb>li>a,.liveReservation>a>i").addClass("gnbColor");
    } else {
      $(".header").removeClass("gnbBg");
      $(".gnb>li>a,.liveReservation>a>i").removeClass("gnbColor");
    }
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
