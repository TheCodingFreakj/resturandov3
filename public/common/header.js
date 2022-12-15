(function ($) {
  "use strict";
  let headerMain = document.getElementById("header-main");

  const showHeaderText = ()=>{
    if(window.location.href.indexOf("shop") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>Products Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }

    if(window.location.href.indexOf("blog") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>Blog Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }
    
    if(window.location.href.indexOf("reservations") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>Reservations Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }

    
    if(window.location.href.indexOf("aboutus") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>AboutUs Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }

    
    if(window.location.href.indexOf("gallery") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>Gallery Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }

    
    if(window.location.href.indexOf("404") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>404 Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }

    
    if(window.location.href.indexOf("menu-view") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>Menu View Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }
       
    if(window.location.href.indexOf("shortcodes") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>Short Codes Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }

       
    if(window.location.href.indexOf("single") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>Blog View Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }

       
    if(window.location.href.indexOf("productpages") > -1){
      return ` <!-- Header Section Starts -->

      <div id="showText" class="container z-index-n1 custom-blog-hero-text">
          <h1>Product View Page</h1>
          <p class="custom-paragraph">Potato is a delitious restaurant website template</p>
      </div>

  <!-- Header Section End -->`
    }
  }
  headerMain.innerHTML = `

  <header>
  <!-- Hero Image Starts Here -->
  <div class="container-fluid custom-style">
    <div id=bg-image class="lazy">
      <!-- Nav Section Starts Here -->
      <!-- z-index-n1 bg-opacity-10 position-absolute w-100 p-3 -->
      <div class="nav-bar">
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
                <li class="nav-item">
                  <a class="nav-link ms-5 fs-5 custom-color m" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  ms-5 fs-5 nav-link dropdown-toggle custom-color " role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
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
                  <a class="nav-link ms-5 fs-5 nav-link dropdown-toggle custom-color " id="custom-color-cart" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-cart-shopping"></i><span
                      id="cart-num"></span></a>
                      <ul id="cart-form" class="show-dropdown">
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
      ${showHeaderText()}
    </div>
    <!-- Hero Image Ends Here -->
  </div>


</header>`

})(jQuery);
