$(document).ready(function() {
  $('.header__slider').slick({
    dots: true,
    dotsClass: 'header__slider-dots',
    prevArrow: '<button class="header__slider-arrow header__slider-arrow_left"></button>',
    nextArrow: '<button class="header__slider-arrow header__slider-arrow_right"></button>',
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $('.posts__slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="posts__slider-arrow posts__slider-arrow_right"></button>',
    nextArrow: '<button class="posts__slider-arrow posts__slider-arrow_left"></button>',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1245,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  let btn = $(".projects__btn");

  btn.on("click", e => {
    btn.removeClass("projects__btn_active");
    $(this).addClass("projects__btn_active");

    e.preventDefault();
  });

  // video-bg
  let video = $(".video__src"),
      button = $(".video__icon");

  button.on("click", ()=> {
    video[0].play();
    button.addClass("video__icon_hidden");
  });

  $('.header__open').on("click", () => {
    $('.header__list').addClass('header__animation');
  })
  $('.header__close, .overlay').on("click", () => {
    $('.header__list').removeClass('header__animation');
  })

  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    $('.header__list').removeClass('header__animation');
    return false;
  });
})