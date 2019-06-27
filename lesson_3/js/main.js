$(document).ready(function() {
  let form = $('.form');

  form.on('submit', (e) => {
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
  })
});