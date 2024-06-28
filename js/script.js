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
  $(".open-search-btn").click(function () {
    $(".search-section").slideToggle(300);
    $("body").toggleClass("padding-search");
    $(this).toggleClass("active");
  });
  //fixed nav3
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
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

  ///////// ** fields-slider** /////////
  var specialsO = new Swiper(".fields-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    navigation: {
      nextEl: ".fields-section .swiper-btn-next",
      prevEl: ".fields-section .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.8,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2.8,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2.8,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3.8,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// ** blog-slider** /////////
  var specials1 = new Swiper(".blog-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    navigation: {
      nextEl: ".blog-section .swiper-btn-next",
      prevEl: ".blog-section .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.8,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2.8,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2.8,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3.8,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  lazyLoad();
});
function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  };

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });
  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image);
  });
}

function preloadImage(img) {
  img.src = img.getAttribute("data-src");
  img.onload = function () {
    img.parentElement.classList.remove("loading-img");
    img.parentElement.classList.add("loaded-img");
    img.parentElement.parentElement.classList.add("lazy-head-img");
  };
}
