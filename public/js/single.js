(function ($) {
    "use strict";
  
    //Declarations
    let targetContainer = document.getElementById("content-container");
    let targetCatContainer = document.getElementById("categories-container");
    let targetPostsContainer = document.getElementById("recentposts-container");
    let content = "";
    let recentBlogs = "";
    let paramString = window.location.href.split("?")[1];
    let queryString = new URLSearchParams(paramString);
  
    const categories = [
      { id: 1, cat: "catgory1" },
      { id: 2, cat: "catgory2" },
      { id: 3, cat: "catgory3" },
    ];
    const apiResult = [
      {
        id: 1,
        title: "title1",
        categories: ["catgory1", "catgory2", "catgory3"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "./img/indian-condiments-with-copy-space-view.jpg",
          "./img/feature-image.jpg",
          "./img/indian-condiments-with-copy-space-view.jpg",
          "./img/feature-image.jpg",
        ],
        date_publish: "11/5/2022",
        date_update: "11/18/2022",
      },
      {
        id: 2,
        title: "title2",
        categories: ["catgory1", "catgory2"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "./img/indian-condiments-with-copy-space-view.jpg",
          "./img/feature-image.jpg",
          "./img/indian-condiments-with-copy-space-view.jpg",
          "./img/feature-image.jpg",
        ],
        date_publish: "11/20/2022",
        date_update: "11/20/2022",
      },
  
      {
        id: 3,
        title: "title3",
        categories: ["catgory2", "catgory3"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "./img/indian-condiments-with-copy-space-view.jpg",
          "./img/feature-image.jpg",
          "./img/indian-condiments-with-copy-space-view.jpg",
          "./img/feature-image.jpg",
        ],
        date_publish: "10/25/2022",
        date_update: "10/25/2022",
      },
  
      {
        id: 4,
        title: "title4",
        categories: ["catgory1", "catgory2", "catgory3"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "./img/indian-condiments-with-copy-space-view.jpg",
          "./img/header-image.jpg",
          "./img/indian-condiments-with-copy-space-view.jpg",
          "./img/header-image.jpg",
        ],
        date_publish: "11/25/2022",
        date_update: "11/25/2022",
      },
      {
        id: 5,
        title: "This is Title-Five",
        categories: ["catgory1", "catgory2", "catgory3"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/high-angle-delicious-pita.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/feature-image.jpg",
        ],
        date_publish: "12/2/2022",
        date_update: "12/2/2022",
      },
      {
        id: 6,
        title: "This is Title-Six",
        categories: ["catgory1", "catgory2"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/high-angle-delicious-pita.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/feature-image.jpg",
        ],
        date_publish: "12/2/2022",
        date_update: "12/2/2022",
      },
  
      {
        id: 7,
        title: "This is Title-Seven",
        categories: ["catgory2", "catgory3"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/high-angle-delicious-pita.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/onions-g167385904_1280.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/breakfast-ga99def90b_1280.jpg",
        ],
        date_publish: "12/2/2022",
        date_update: "12/2/2022",
      },
  
      {
        id: 8,
        title: "This is Title-Eight",
        categories: ["catgory1", "catgory2", "catgory3"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/pancakes-g7bc86f486_1280.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/raspberries-g1c95018cf_1280.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/meal-g97705a369_1280.jpg",
        ],
        date_publish: "12/2/2022",
        date_update: "12/14/2022",
      },
  
      {
        id: 9,
        title: "This is Title-One",
        categories: ["catgory1", "catgory2", "catgory3"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/high-angle-delicious-pita.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/feature-image.jpg",
        ],
        date_publish: "11/5/2022",
        date_update: "11/18/2022",
      },
      {
        id: 10,
        title: "This is Title-One",
        categories: ["catgory1", "catgory2", "catgory3"],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
        imageSlider: [
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/high-angle-delicious-pita.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
          "https://ik.imagekit.io/vi9aepz6c/Resturando/img/feature-image.jpg",
        ],
        date_publish: "11/5/2022",
        date_update: "12/14/2022",
      },
    ];

    const configureBlog = (id)=>{
        apiResult.map((blog) => {
            if (blog.id === id) {
                content = ` <div class="card">
                <div class="card-body">
                    <div class="slider-container-blog">
                        <div class="my-slider-blog">
                            <div class="slider-item-blog">
                                <div class="blog-container">
                                    <div id="bg-images-blog-${id}" class="bg-images-blog"><img id="imgId" src=${blog.imageSlider[0]} alt="single-blog-image"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                    <h2 class="h1">${blog.title}</h2>
                        <p class="card-text">${blog.content}</p>
                    </div>
                </div>
                </div> 
                `;
                
                    targetContainer.innerHTML += content;
            }
    
         
           
          });
    }
   
    
      for (let pair of queryString.entries()) {
        configureBlog(Number(pair[1]));
      }
    ////Displaying The Catgories
    categories.map((cat) => {
      content = `<div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-sm-6 col-md-6"><i class="fa-solid fa-table-list"></i></div>
            <div class="col-xl-6 col-lg-6 col-sm-6 col-md-6 "> ${cat.cat}</div>
          </div>
        </div>
        `;
      targetCatContainer.innerHTML += content;
    });
  
    //Displaying Recent Posts
  
    const formatDate = (today) => {
      var newdate =
        today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
      return newdate;
    };
  
    var today = new Date();
    let previousDate = new Date(today.setMonth(today.getMonth() - 1));
    let todayFormatted = formatDate(new Date());
    let previousFormatted = formatDate(previousDate);
  
    let start = "";
    let date = "";
    let end = "";
  
    apiResult
      .sort(function (a, b) {
        return b.id - a.id;
      })
      .map((blogs) => {
        date = new Date(blogs.date_update);
        start = new Date(previousFormatted);
        end = new Date(todayFormatted);
        if (date > start && date < end) {
          recentBlogs = ` <span class="p-2 custom-options">
          <div class="custom-container">
              <div class="d-lg-flex d-xl-flex d-md-flex d-sm-flex flex-lg-row flex-xl-row flex-sm-column flex-md-column">
                  <div class="col-lg-7 col-xl-7 col-md-7 col-sm-12">
                      <img loading="lazy" class="sidebar-image" src=${blogs.imageSlider[0]} alt="sidebar-image" />
                  </div>
                  <div class="col-md-12 col-sm-12 offset-md-2">
                      <p class="text-start custom-title">${blogs.title}</p>
                      <p class="text-start custom-dates">${blogs.date_update}</p>
                  </div>
              </div>
  
          </div>
      </span>
        `;
  
        if(targetContainer !== null) targetPostsContainer.innerHTML += recentBlogs;
          $(`.custom-options`).hide().slice(0, 4).show();
        }
      });
    //*************************** Update Cart On Navbar*********************************** */
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
  