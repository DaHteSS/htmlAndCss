$(document).ready(function() {
  // отправка сообщений с сайта
  let form = $(".form");

  form.on("submit", e => {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(`#callback`).serialize(),
      success: function() {
        Swal.fire("Отлично!", "Письмо успешно отправлено!", "success");
        $(".form")[0].reset();
      },
      error: function() {
        Swal.fire({
          type: "error",
          title: "Произошла ошибка",
          text: "Письмо не отправлено. Попробуйте позже."
        });
      }
    });
    e.preventDefault();
  });

  // смена кнопки в блоке portfolio
  let btn = $(".portfolio__link"),
      site = $(".slider__content"),
      site_data_1 = $(".slider__content[data-done='1']"),
      site_data_2 = $(".slider__content[data-done='2']");

      function fadeIn(site) {
        site.css("display", "block");
      }
      function fadeOut(site) {
        site.css("display", "none");
      }

  btn.on("click", function(e) {
    btn.removeClass("portfolio__link_active");
    $(this).addClass("portfolio__link_active");

    if($(this).attr("data-index") == 1) {
      fadeOut(site);
      fadeIn(site_data_1);
    } else if($(this).attr("data-index") == 2) {
      fadeOut(site);
      fadeIn(site_data_2);
    } else {
      fadeIn(site);
    }

    e.preventDefault();
  });

  // sort


});
