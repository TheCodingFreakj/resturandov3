(function ($) {
  "use strict";
  let headerMain = document.getElementById("header-main");
  headerMain.innerHTML = `

<header>
  <!-- Hero Image Starts Here -->
  <div class="container-fluid">
    <div id="bg-image-shop" class="lazy">
      <!-- Nav Section Starts Here -->
      <div class="z-index-n1 bg-opacity-10 position-absolute w-100 p-3">
        <nav class="navbar navbar-expand-lg bg-light custom-background">
          <div class="container-fluid">
            <a class="navbar-brand w-10 p-3" href="#">
              <img class="w-80" src="https://ik.imagekit.io/vi9aepz6c/Resturando/img/logolight.png" height="32"
                alt="company-logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav mx-auto custom-navbar">
                <li class="nav-item active">
                  <a class="nav-link ms-5 fs-5 custom-color m" href="./index.html">Home <span
                      class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ms-5 fs-5 nav-link dropdown-toggle
                      custom-color " role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                  <ul class="show-dropdown">
                    <li>
                      <a class="dropdown-item custom-item-style" href="./aboutus.html">About Us</a>
                    </li>
                    <li>
                      <a class="dropdown-item custom-item-style" href="./gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a class="dropdown-item custom-item-style" href="./404.html">404Page</a>
                    </li>

                    <li>
                      <a class="dropdown-item custom-item-style" href="./menu-view.html">Menu Views</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider custom-item-style" />
                    </li>
                    <li>
                      <a class="dropdown-item custom-item-style" href="./shortcodes.html">Short Codes</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link ms-5 fs-5 custom-color" href="./reservations.html">Reservations</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ms-5 fs-5 custom-color" href="./blog.html">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ms-5 fs-5 custom-color" href="./shop.html">Shop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ms-5 fs-5 nav-link dropdown-toggle custom-color " role="button"
                    data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-cart-shopping"></i><span
                      id="cart-num"></span></a>
                  <ul id="cart-form" class="show-dropdown ">
                    <div class="header-cart">
                      <h4>Shopping Cart</h4>
                    </div>
                    <table class="table-cart">
                      <tbody id="tbody-cart" style="color: #ffff">
                      </tbody>
                    </table>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <!-- Nav Section Ends Here -->
    </div>
    <!-- Hero Image Ends Here -->
  </div>

</header>`

})(jQuery);
