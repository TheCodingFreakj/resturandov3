/***************************************************************************************************************

Template Name: Resturando - Resturant Website
Template URL: [demo url]
Description: This is semi dynamic resturant website made with bootstrap 5.2, html and css
Author: Programming Chunks
Author URL: https://themeforest.net/user/resturando
Version: 1.0

****************************************************************************************************************

JS INDEX

******************************
1.Tiny Slider Configuration


****************************************************************************************************************/

(function ($) {
  "use strict";

  /* *************************************************************************************************************
   * 1.Tiny Slider Configuration
   ****************************************************************************************************************/
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
