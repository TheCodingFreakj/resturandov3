//https://www.youtube.com/watch?v=VRqB2XGZ9IA
// Menu Section
(function ($) {
  "use strict";

  var $filters = $(".filter [data-filter]"),
    $boxes = $(".boxes [data-category]");
  $filters.on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    $filters.removeClass("active");
    $this.addClass("active");

    var $selectedFilter = $this.attr("data-filter");
    console.log($selectedFilter);

    if ($selectedFilter === "all") {
      $boxes.addClass("is-animated").fadeIn(450);
    } else {
      var $el = $('[data-category = "' + $selectedFilter + '"]')
        .addClass("is-animated")
        .fadeIn(450);
      console.log("[data-category", $el);
      if ($el.length == 0) {
        $(".boxes:nth-child(1)").after(
          '<p class="no-records">Currently We Are Not Delivering This Item! Check Later</p>'
        );
      } else {
        $(".no-records").remove();
      }

      $($boxes).not($el).hide();
    }
  });
})(jQuery);


