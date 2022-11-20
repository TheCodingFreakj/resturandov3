//https://www.youtube.com/watch?v=VRqB2XGZ9IA
//https://codepen.io/hesguru/pen/BaybqXv
// https://codepen.io/hesguru/pen/BaybqXv -->
//https://dev.to/madsstoumann/star-rating-using-a-single-input-i0l -->
// https://stackoverflow.com/questions/22607150/getting-the-url-parameters-inside-the-html-page
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

  //Lazy Load The Images
  document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
      });
    } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");

      function lazyload() {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function (img) {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
            }
          });
          if (lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  });

  //Smooth Scroll

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  var loader = document.getElementById("pre-loader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });
})(jQuery);
