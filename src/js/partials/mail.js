// Отправка заявки
$(document).ready(function () {
    $("#form").submit(function () {
        // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
        if (document.form.name.value == "" || document.form.phone.value == "") {
            valid = false;
            console.log(error);
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "php/main.php",
            data: $(this).serialize(),
        }).done(function () {
            $("#modal_thanks").addClass("show");
            setTimeout(function () {
                $("#modal_thanks")
                    .find(".modal__dialog--thanks")
                    .css({ transform: "scale(1)", opacity: "1" });
            }, 100);
            $("body").addClass("no-scroll");
            $(this).find("input").val("");
            $("#form").trigger("reset");
        });
        return false;
    });
});

// Закрыть попап «спасибо»
// $(".js-close-thank-you").click(function () {
//     // по клику на крестик
//     $(".js-overlay-thank-you").fadeOut();
// });

// $(document).mouseup(function (e) {
//     // по клику вне попапа
//     var popup = $(".popup");
//     if (e.target != popup[0] && popup.has(e.target).length === 0) {
//         $(".js-overlay-thank-you").fadeOut();
//     }
// });

// Маска ввода номера телефона (плагин maskedinput)
$(function ($) {
    $('[name="phone"]').mask("+38(999) 999-99-99");
});
