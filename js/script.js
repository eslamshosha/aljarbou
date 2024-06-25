let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }

  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
  });
  $(".nav-head .close-menu").click(function () {
    $(".navgition").removeClass("reset-left");
    $("body").removeClass("overflow");
  });
  //fixed nav3
  $stickyVision = $(".second-vision");
  $stickySecondLogo = $(".second-logo");
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
      $stickySecondLogo.addClass("active");
      $stickyVision.addClass("active");
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
      $stickySecondLogo.removeClass("active");
      $stickyVision.removeClass("active");
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
      $stickySecondLogo.removeClass("active");
      $stickyVision.removeClass("active");
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  const selectExists =
    document.getElementsByClassName("select_input").length > 0;
  if (selectExists) {
    const $select2 = $(".select_input");
    $select2.select2();
  }

  ///////// ** championship-slider** /////////
  var specialsO = new Swiper(".championship-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".championship-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".championship-slider .swiper-btn-next",
      prevEl: ".championship-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  ///////// ** offer** /////////
  var specials = new Swiper(".offer-slider .swiper", {
    loop: true,
    autoplay: true,
    autoHeight: true,
    slidesPerView: 1,
    pagination: {
      el: ".offer-slider .swiper-pagination",
      clickable: true,
    },
  });
  ///////// **category-section** /////////
  var categorySlider = new Swiper(".category-section .swiper", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".category-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".category-slider .swiper-btn-next",
      prevEl: ".category-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
  });
});
