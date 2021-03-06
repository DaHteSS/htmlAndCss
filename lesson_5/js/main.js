$(document).ready(function() {
  $('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    $('.header__list').removeClass('header__animation');
    return false;
  });
  $('.header__open').on("click", () => {
    $('.header__list').addClass('header__animation');
  });
  $('.header__close').on("click", () => {
    $('.header__list').removeClass('header__animation');
  });
});