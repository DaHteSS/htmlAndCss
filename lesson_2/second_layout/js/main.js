$(document).ready(function() {
  $('.header__open').on("click", () => {
    $('.header__list').css('display', 'block');
  })
  $('.header__close').on("click", () => {
    $('.header__list').css('display', 'none');
  })
})