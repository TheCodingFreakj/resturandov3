(function ($) {
  "use strict";
  $("#datepicker")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
    })
    .datepicker("update", new Date());

  $("#datetime").timepicker({
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });

  $("#my-form").on("submit", function (e) {
    e.preventDefault(); //prevent default form submition
    var email = $("#my-form").find('input[name="email"]').val();
    var name = $("#my-form").find('input[name="name"]').val();
    var phone = $("#my-form").find('input[name="phone"]').val();
    var guests = $("#my-form").find('input[name="guests"]').val();
    var time = $("#my-form").find('input[name="time"]').val();
    var date = $("#my-form").find('input[name="date"]').val();
    var FormData = {
      email,
      name,
      phone,
      guests,
      time,
      date,
    };

    console.log(FormData);

    $.ajax({
      url: "https://resturando.herokuapp.com/api/reservations",
      type: "POST",
      data: FormData,
      success: function (data) {
        console.log(data);
      },
    });
  });
})(jQuery);
