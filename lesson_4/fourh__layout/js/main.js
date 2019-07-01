$(document).ready(function() {
  $('.header__slider').slick({
    dots: true,
    dotsClass: 'header__slider-dots',
    prevArrow: '<button class="header__slider-arrow header__slider-arrow_left"></button>',
    nextArrow: '<button class="header__slider-arrow header__slider-arrow_right"></button>',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.posts__slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="posts__slider-arrow posts__slider-arrow_left"></button>',
    nextArrow: '<button class="posts__slider-arrow posts__slider-arrow_right"></button>',
    speed: 500
  });
})