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
  let btn = $(".portfolio__link");

  btn.on("click", function(e) {
    btn.removeClass("portfolio__link_active");
    $(this).addClass("portfolio__link_active");

    e.preventDefault();
  });
});
