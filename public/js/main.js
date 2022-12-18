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
1.Menu Style One
2.Menu Style Two
3.Lazy Load Images
4.Smooth Scroll
5.Loader Configuration
6.Include Html Snippets
7.Tabs Configuration
8.Accordions Configuration
9.Load More Configuration


****************************************************************************************************************/
(function ($) {
  "use strict";

  /* *************************************************************************************************************
   * 1.Menu Style One
   ****************************************************************************************************************/

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

  /* *************************************************************************************************************
   * 2.Menu Style Two
   ****************************************************************************************************************/

  var $filtersv2 = $(".filter-menu2 [data-fill]"),
    $boxesv2 = $(".custom-flex [data-cat]");
  $filtersv2.on("click", function (e) {
    e.preventDefault();
    var $thisv2 = $(this);

    $filtersv2.removeClass("active");
    $thisv2.addClass("active");

    var $selectedFilterv2 = $thisv2.attr("data-fill");

    if ($selectedFilterv2 === "all") {
      $boxesv2.addClass("is-animated").fadeIn(450);
    } else {
      var $elv2 = $('[data-cat = "' + $selectedFilterv2 + '"]')
        .addClass("is-animated")
        .fadeIn(450);

      if ($elv2.length == 0) {
        $(".custom-flex:nth-child(1)").after(
          '<p class="no-records">Currently We Are Not Delivering This Item! Check Later</p>'
        );
      } else {
        $(".no-records").remove();
      }

      $($boxesv2).not($elv2).hide();
    }
  });

  /* *************************************************************************************************************
   * 3.Lazy Load Images
   ****************************************************************************************************************/
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

  /* *************************************************************************************************************
   * 4.Smooth Scroll
   ****************************************************************************************************************/
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });

  /* *************************************************************************************************************
   * 5.Loader Configuration
   ****************************************************************************************************************/

  var loader = document.getElementById("pre-loader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });

  /* *************************************************************************************************************
   * 6.Include Html Snippets
   ****************************************************************************************************************/
  includeHTML();
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "<h1>Page not found.</h1>";
            }
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  /* *************************************************************************************************************
   * 7.Tabs Configuration
   ****************************************************************************************************************/
  const tabs = document.querySelectorAll("[data-tab-value]");
  const tabInfos = document.querySelectorAll("[data-tab-info]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabValue);

      tabInfos.forEach((tabInfo) => {
        tabInfo.classList.remove("active");
      });
      target.classList.add("active");
    });
  });


  
  /* *************************************************************************************************************
   * 8.Accordions Configuration
   ****************************************************************************************************************/

  const accordionBtns = document.querySelectorAll(".accordion");

  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");

      let content = this.nextElementSibling;
      console.log(content);

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(content.style.maxHeight);
      }
    };
  });

  /* *************************************************************************************************************
   * 9.Load More Configuration
   ****************************************************************************************************************/
  var work = document.querySelector("#outer-container");

  if (work !== null) {
    var items = Array.from(work.querySelectorAll(".sliced-content"));
    var loadMore = document.getElementById("loadMore");
    let maxItems = 3;
    let loadItems = 3;
    let hiddenClass = "hiddenStyle";

    items.forEach(function (item, index) {
      if (index > maxItems - 1) {
        item.classList.add(hiddenClass);
      }
    });

    loadMore.addEventListener("click", function () {
      [].forEach.call(
        document.querySelectorAll("." + hiddenClass),
        function (item, index) {
          if (index < loadItems) {
            item.classList.remove(hiddenClass);
          }

          if (document.querySelectorAll("." + hiddenClass).length === 0) {
            loadMore.style.display = "none";
          }
        }
      );
    });
  }
})(jQuery);
