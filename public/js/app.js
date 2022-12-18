
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
1.Update Cart On Navbar





****************************************************************************************************************/
(function ($) {
    "use strict";
  

/* *************************************************************************************************************
* 1.Update Cart On Navbar
****************************************************************************************************************/
 const upDateCartOnNavbar = ()=>{


    let cartOnNavbar = document.getElementById("tbody-cart");
  
    let sum = 0;
    let sumDecrease = 0;
    let idsNav = [];
    let contentNav = "";
    let contentCartNav = "";
  
    let spanCartCount = document.getElementById("cart-num");
  
    if (
      JSON.parse(localStorage.getItem("addToCart")) !== null &&
      JSON.parse(localStorage.getItem("addToCart")).length !== 0
    ) {
  
  
      spanCartCount.innerHTML = JSON.parse(
        localStorage.getItem("addToCart")
      ).length;
  
      // ******************************** Runs When Add Cart Items **********************************//
      contentNav =
        JSON.parse(localStorage.getItem("addToCart")) !== null ||
        JSON.parse(localStorage.getItem("addToCart")) !== []
          ? JSON.parse(localStorage.getItem("addToCart"))
              .map((item) => {
                let ReplacedAmount = item.price.replace(/\$/g, "");
                idsNav.push(Number(ReplacedAmount));
                return `<tr class="custom-cart-row">
            <th scope="row">
              <img class="cart-img"
                src=${item.image}
                alt="cart-item-image" />
            </th>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td data-itemid="${item.id}" id="close-row-cart" class="close-row-cart" scope="row">X</td>
          </tr>`;
              })
              .join("")
          : `No Food Items In The Cart Yet!`;
      sum = idsNav.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
      contentNav +=
        JSON.parse(localStorage.getItem("addToCart")) !== null ||
        JSON.parse(localStorage.getItem("addToCart")) !== []
          ? ` 
        <td>Total</td>
        <td>$ ${sum}</td>
        <tr class="custom-cart-col">
        <td>
          <div id="checkout"><button id="submit-button" class="glow-on-hover" type="submit">Check Out</button></div>
        </td>
        <td>
        </td>
        </tr>`
          : `No Food Items In The Cart Yet!`;
      cartOnNavbar.innerHTML = contentNav;
  
      //******************* Runs When User Wants To Remove Cart Items From Cart View  ******************//
      $(document).on("click", "td#close-row-cart", function (event) {
     
        var dataId = event.target.getAttribute("data-itemid");
        let itemsInCart = JSON.parse(localStorage.getItem("addToCart"));
        itemsInCart = itemsInCart.filter(function (obj) {
          return obj.id !== dataId.toString();
        });
  
        let updatedItems = itemsInCart.map(({ price }) =>
          Number(price.replace(/\$/g, ""))
        );
        localStorage.setItem("addToCart", JSON.stringify(itemsInCart));
        spanCartCount.innerHTML = JSON.parse(
          localStorage.getItem("addToCart")
        ).length;
        contentCartNav =
          JSON.parse(localStorage.getItem("addToCart")).length !== 0
            ? JSON.parse(localStorage.getItem("addToCart"))
                .map((item) => {
                  return `<tr class="custom-cart-row">
            <th scope="row">
              <img class="cart-img"
                src=${item.image}
                alt="cart-item-image" />
            </th>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td data-itemid="${item.id}" id="close-row-cart" class="close-row-cart" scope="row">X</td>
          </tr>`;
                })
                .join("")
            : `No Food Items In The Cart Yet!`;
  
        sumDecrease = updatedItems.reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);
  
        contentCartNav +=
          JSON.parse(localStorage.getItem("addToCart")).length !== 0
            ? ` 
        <td>Total</td>
        <td>$ ${sumDecrease} </td>
        <tr class="custom-cart-col">
        <td>
          <div id="checkout"><button id="submit-button" class="glow-on-hover" type="submit">Check Out</button></div>
        </td>
        <td></td>
        </tr>`
            : ``;
            cartOnNavbar.innerHTML = contentCartNav;
  
        if(JSON.parse(localStorage.getItem("addToCart")).length === 0){
          contentNav = "No Food Items In The Cart Yet!";
          cartOnNavbar.innerHTML = contentNav;
          spanCartCount.innerHTML = JSON.parse(localStorage.getItem("addToCart")).length;
        }
    
      });
  
  
    } else {
      contentNav = "No Food Items In The Cart Yet!";
      cartOnNavbar.innerHTML = contentNav;
      spanCartCount.innerHTML = "0";
    }
  }
  
  upDateCartOnNavbar()

})(jQuery);
