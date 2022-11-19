// Testimonial Section
(function ($) {
  "use strict";

  const slider = tns({
    container: ".my-slider",
    loop: true,
    items: 1,
    slideBy: "page",
    nav: false,
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#customize-controls",
    responsive: {
      640: {
        items: 1,
      },

      768: {
        items: 1,
      },
    },
  });
})(jQuery);
