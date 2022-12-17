$(function () {
  "use strict";
  //get elements
  const container = document.getElementById("display-products");
  const toggleCart = document.getElementById("add-cart");
  const cartContainer = document.getElementById("addCart");
  const emptyCart = document.getElementById("no-cart-items");
  const overlay = document.getElementById("overlay");


  let paramString = window.location.href.split("?")[1];
  let queryString = new URLSearchParams(paramString);

  //default declaration
  let productsAddedFromPage = [];
  let contentCart = null;
  let idsCart = [];
  let sumCart = 0;
  let sumDecreaseCart = 0;
  // Cart Item Model
  class cartAdd {
    constructor(id, price, title, quantity, image) {
      this.id = id;
      this.price = price;
      this.price = price;
      this.title = title;
      this.quantity = quantity;
      this.image = image;
    }
  }

  //Api Call
  const apiResult = [
    {
      id: 1,
      quantity: 33,
      category: "dinner",
      title: "This is Food Item1",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/breakfast-ga99def90b_1280.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 2,
      quantity: 14,
      category: "dinner",
      title: "This is Food Item2",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 3,
      quantity: 133,
      title: "This is Food Item3",
      category: "desserts",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },

    {
      id: 4,
      quantity: 30,
      title: "This is Food Item4",
      category: "breakfast",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/pancakes-g7bc86f486_1280.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 5,
      quantity: 3340,
      title: "This is Food Item5",
      category: "desserts",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/vegetables-ge8fccf0e8_1280.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 6,
      quantity: 60,
      title: "This is Food Item6",
      category: "lunch",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/meal-g97705a369_1280.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 7,
      quantity: 44,
      title: "This is Food Item7",
      category: "breakfast",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 8,
      quantity: 84,
      title: "This is Food Item8",
      category: "breakfast",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/indian-condiments-with-copy-space-view.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 9,
      quantity: 94,
      title: "This is Food Item9",
      category: "lunch",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/high-angle-delicious-pita.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 10,
      quantity: 14,
      title: "This is Food Item10",
      category: "lunch",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image:
        "https://ik.imagekit.io/vi9aepz6c/Resturando/img/cookies-gf43494f23_1280.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
  ];
  if (apiResult.length === 0) {
    container.innerHTML += `<h2>No Product Found</h2>`;
  }

  //*************************** Update Cart On Navbar*********************************** */
  const upDateCartOnNavbar = () => {
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
              <td class="gap">${item.title}</td>
              <td class="gap">${item.price}</td>
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
          <tr class="summary" >
          <td >Total</td>
          <td>$ ${sum}</td>
          </tr>
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
              <td class="gap">${item.title}</td>
              <td class="gap">${item.price}</td>
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
          <tr class="summary" >
          <td >Total</td>
          <td>$ ${sumDecrease}</td>
          </tr>
          <tr class="custom-cart-col">
          <td>
            <div id="checkout"><button id="submit-button" class="glow-on-hover" type="submit">Check Out</button></div>
          </td>
          <td>
          </td>
          </tr>`
            : `No Food Items In The Cart Yet!`;
        cartOnNavbar.innerHTML = contentCartNav;

        if (JSON.parse(localStorage.getItem("addToCart")).length === 0) {
          contentNav = "No Food Items In The Cart Yet!";
          cartOnNavbar.innerHTML = contentNav;
          spanCartCount.innerHTML = JSON.parse(
            localStorage.getItem("addToCart")
          ).length;
        }
      });
    } else {
      contentNav = "No Food Items In The Cart Yet!";
      cartOnNavbar.innerHTML = contentNav;
      spanCartCount.innerHTML = "0";
    }
  };

  upDateCartOnNavbar();

  //******************* Add To Cart Functionality ******************//
  const AddToCart = (product) => {
    if (JSON.parse(localStorage.getItem("addToCart")) === null) {
      localStorage.removeItem("addToCart");
      productsAddedFromPage.length = 0;
      contentCart = null;
      cartContainer.innerHTML = "";
    } else {
      if (JSON.parse(localStorage.getItem("addToCart")).length === 0) {
        localStorage.removeItem("addToCart");
        productsAddedFromPage.length = 0;
        contentCart = null;
        cartContainer.innerHTML = "";
      }
    }

    let newCartItem;

    if (JSON.parse(localStorage.getItem("addToCart")) === null) {
      newCartItem = new cartAdd(
        product.dataId,
        product.dataPrice,
        product.dataTitle,
        product.dataQuantity,
        product.dataImg
      );

      productsAddedFromPage.push(newCartItem);
      localStorage.setItem("addToCart", JSON.stringify(productsAddedFromPage));
      upDateCartOnNavbar();
    } else {
      if (
        JSON.parse(localStorage.getItem("addToCart")).filter(
          (e) => e.id === product.dataId
        ).length === 0
      ) {
        newCartItem = new cartAdd(
          product.dataId,
          product.dataPrice,
          product.dataTitle,
          product.dataQuantity,
          product.dataImg
        );
        productsAddedFromPage.push(newCartItem);
        const array3 = [
          ...productsAddedFromPage,
          ...(JSON.parse(localStorage.getItem("addToCart")) || []),
        ];
        localStorage.setItem("addToCart", JSON.stringify(array3));
        upDateCartOnNavbar();
      } else {
        return;
      }
    }

    if (JSON.parse(localStorage.getItem("addToCart")) !== null) {
      if (productsAddedFromPage.length > 1) {
        productsAddedFromPage = [
          ...new Map(
            JSON.parse(localStorage.getItem("addToCart")).map((item) => [
              item["id"],
              item,
            ])
          ).values(),
        ];

        localStorage.setItem(
          "addToCart",
          JSON.stringify(productsAddedFromPage)
        );
      }
      contentCart =
        JSON.parse(localStorage.getItem("addToCart")) !== null ||
        JSON.parse(localStorage.getItem("addToCart")) !== []
          ? JSON.parse(localStorage.getItem("addToCart"))
              .map((item) => {
                return `
    <tr >
    <td style="width: 2px;" data-idx="${item.id}" id="close-row" class="close-row" scope="row" >X</td>
    <td class="food-title">${item.title}</td>
    <td>${item.price}</td>
    <td >${item.quantity} <i data-idx="${item.id}" id=update-cart class="fa-solid fa-pen-to-square"></i></td> 
    </tr>        
        `;
              })
              .join("")
          : `No Food Items In The Cart Yet!`;

      JSON.parse(localStorage.getItem("addToCart")).map((p) => {
        if (idsCart.filter((e) => e.id === p.id).length === 0) {
          idsCart.push({
            price: p.price,
            id: p.id,
          });
        }
      });

      sumCart = idsCart.reduce((accumulator, value) => {
        return accumulator + Number(value.price.replace(/\$/g, ""));
      }, 0);
      contentCart +=
        JSON.parse(localStorage.getItem("addToCart")) !== null ||
        JSON.parse(localStorage.getItem("addToCart")) !== []
          ? `
        <tr> 
      <td style="width: 2px;" scope="row">Total</td>
      <td>$ ${sumCart}</td>
      <td></td>
      </tr> 
      <div id="checkout"><button id="submit-button" class="glow-on-hover" type="submit">Check Out</button></div>`
          : `No Food Items In The Cart Yet!`;
      cartContainer.innerHTML = contentCart;

      toggleCart.classList.add("slider-class", "custom-index");
      toggleCart.style.display = "block";
      overlay.classList.add("overlay");
      upDateCartOnNavbar();
    }
  };

  //******************* Rendering Fetched Products Dynamically ******************//
  const showNutritionStats = (nutrientStats) => {
    return nutrientStats
      .map((n) => {
        return `
  <tbody>
      <tr>
          <td>${n.Nutrient}</td>
          <td>${n.DV}</td>
          <td>${n.Percentage}</td>
  
      </tr>
  </tbody>
  `;
      })
      .join("");
  };

  const showIngredients = (ingredients) => {
    return ingredients
      .map((n) => {
        return `
      <li class="list-group-item text-left">
      <div class="container text-left">
      <div class="row">
        <div class="col-2">
        <i class="fa-solid fa-list icons-text "></i>
        </div>
        <div class="col-10 text-left" style="text-align: left">
        ${n}
        </div>
        
      </div>
    </div>
    </li>
    `;
      })
      .join("");
  };

  const showDirections = (content) => {
    return content
      .map((n) => {
        return `
        <p class="content">
        <div class="container text-left">
      <div class="row">
        <div class="col-1">
        <i class="fa-solid fa-list-check icons-text"></i>
        </div>
        <div class="col-11 text-left" style="text-align: left">
        ${n}
        </div>
        
      </div>
    </div>
      </p>
    `;
      })
      .join("");
  };

  const configureProductDate = (id) => {
    $(document).on("click", "p#add-to-cart", function () {
      var dataQuantity = $("p#add-to-cart").attr("data-quantity");
      var dataTitle = $("p#add-to-cart").attr("data-title");
      var dataPrice = $("p#add-to-cart").attr("data-price");
      var dataId = $("p#add-to-cart").attr("data-id");
      var dataImg = $("p#add-to-cart").attr("data-image");

      let selectedObject = {
        dataQuantity,
        dataTitle,
        dataPrice,
        dataId,
        dataImg,
      };
      AddToCart(selectedObject);
    });
    // class="d-lg-block d-xl-block p-2
    apiResult.map((product) => {
      if (product.id === id) {
        let content = `<div class="container text-center">
        <div class="row justify-content-md-around ">
        <div class="card-body d-xl-flex flex-sm-column flex-md-column justify-content-xl-end">
                <p class="card-link" id="add-to-cart" data-image=${
                  product.image
                } data-quantity=${Number(product.quantity)} data-id=${Number(
          product.id
        )} data-price=${product.price} data-title=${JSON.stringify(
          product.title
        )}><i class="fa-solid fa-cart-shopping" ></i> Add To Cart</a>
                <p class="card-link"><i class="fa-solid fa-heart"></i>Favorite</a>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <img class="product-image" src=${
                  product.image
                } alt="explore image" />
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div class="product-lists">
                    <h4>Nutrition</h4>
                    <div class="content">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nutrition</th>
                                    <th scope="col">DV</th>
                                    <th scope="col">Percentage</th>
                                </tr>
                            </thead>
                            ${showNutritionStats(product.nutrition)}
                        </table>
                    </div>
                </div>
  
                
            </div>
        </div>
    </div>
    <div class="container text-center">
        <div class="row justify-content-evenly">
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <h4>Description</h4>
                <p class="content">
                    Cras ut viverra eros. Phasellus sollicitudin sapien id luctus
                    tempor. Sed hend rerit inter dum sagittis. Donec nunc lacus,
                    dapibus nec interdum eget, ultrices eget justo. Nam purus lacus,
                    efficitur eget laoreet sed, finibus nec neque. Cras eget enim in
                    diam dapibus sagittis. In massa est, dignissim in libero ac,
                    fringilla ornare mi. Etiam interdum ligula purus.
                </p>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <h4>Ingredients</h4>
                <ul class="list-group">
                    ${showIngredients(product.ingredients)}
                </ul>
    
            </div>
        </div>
    </div>
    <div class="container text-center" style="color=var(--secondary)">
        <div class="row justify-content-evenly">
            <h4>Direction</h4>
            <div class="col-12">
                <div class="d-flex flex-column mb-3 justify-content-start">
                    <div class="p-2">
                        ${showDirections(product.direction)}
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    </div>
    </div>`;

        container.innerHTML += content;
      }
    });
  };
  for (let pair of queryString.entries()) {
    configureProductDate(Number(pair[1]));
  }

  //******************* Runs When User Wants To Cancel Edit Quanity From Cart View  ******************//
  const removeInput = (itemObj) => {
    return `<td >${itemObj.quantity} <i data-idx=${itemObj.id} id=update-cart class="fa-solid fa-pen-to-square"></i></td>`;
  };
  $(document).on("click", "i#remove-quantity", function (event) {
    contentCart =
      JSON.parse(localStorage.getItem("addToCart")) !== null &&
      JSON.parse(localStorage.getItem("addToCart"))
        .map((item) => {
          return (
            `
    <tr >
    <td data-idx="${item.id}" id="close-row" class="close-row" scope="row">X</td>
    <td>${item.title}</td>
    <td>${item.price}</td>
    
    ` +
            removeInput(item) +
            `
    </tr>        
        `
          );
        })
        .join("");
    JSON.parse(localStorage.getItem("addToCart")).map((p) => {
      if (idsCart.filter((e) => e.id === p.id).length === 0) {
        idsCart.push({
          price: p.price,
          id: p.id,
        });
      }
    });

    sumCart = JSON.parse(localStorage.getItem("addToCart")).reduce(
      (accumulator, value) => {
        return accumulator + Number(value.price.replace(/\$/g, ""));
      },
      0
    );
    contentCart +=
      JSON.parse(localStorage.getItem("addToCart")) !== null ||
      JSON.parse(localStorage.getItem("addToCart")) !== []
        ? `
                            <tr> 
                          <td style="width: 2px;" scope="row">Total</td>
                          <td>$ ${sumCart}</td>
                          </tr> 
                          <div id="checkout"><button id="submit-button" class="glow-on-hover" type="submit">Check Out</button></div>`
        : `No Food Items In The Cart Yet!`;
    cartContainer.innerHTML = contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
    overlay.classList.add("overlay");
  });

  //******************* Runs When User Wants To Enter The Edit Quanity From Cart View  ******************//
  const renderInput = (itemObj, itemId, id) => {
    if (itemId === id) {
      return `<td><div class='input-group input-group-sm mb-3'>
        <input type='text' class='form-control' placeholder='Quantity' aria-label='Quantity' id='add-value' aria-describedby='basic-addon1'>
        <div class="d-flex flex-column">
        <i id='add-quantity' data-itemId=${itemId} class='fa-solid fa-check'></i>
        <i data-itemId=${itemId} data-id=${id} id='remove-quantity' class='fa-solid fa-circle-xmark'd></i>
        </div>
        </input>
        </div></td>`;
    } else {
      return `<td >${itemObj.quantity} <i data-idx=${itemObj.id} id=update-cart class="fa-solid fa-pen-to-square"></i></td>`;
    }
  };

  $(document).on("click", "i#update-cart", function (event) {
    var idx = event.target.getAttribute("data-idx");
    contentCart =
      JSON.parse(localStorage.getItem("addToCart")) !== null ||
      JSON.parse(localStorage.getItem("addToCart")) !== []
        ? JSON.parse(localStorage.getItem("addToCart"))
            .map((item) => {
              return (
                `
    <tr >
    <td data-idx="${item.id}" id="close-row" class="close-row" scope="row">X</td>
    <td>${item.title}</td>
    <td>${item.price}</td>
    
    ` +
                renderInput(item, item.id, idx) +
                `
    </tr>        
        `
              );
            })
            .join("")
        : `No Food Items In The Cart Yet!`;
    JSON.parse(localStorage.getItem("addToCart")).map((p) => {
      if (idsCart.filter((e) => e.id === p.id).length === 0) {
        idsCart.push({
          price: p.price,
          id: p.id,
        });
      }
    });

    sumCart = JSON.parse(localStorage.getItem("addToCart")).reduce(
      (accumulator, value) => {
        return accumulator + Number(value.price.replace(/\$/g, ""));
      },
      0
    );
    contentCart +=
      JSON.parse(localStorage.getItem("addToCart")) !== null ||
      JSON.parse(localStorage.getItem("addToCart")) !== []
        ? `
                        <tr> 
                      <td style="width: 2px;" scope="row">Total</td>
                      <td>$ ${sumCart}</td>
                      </tr> 
                      <div id="checkout"><button id="submit-button" class="glow-on-hover" type="submit">Check Out</button></div>`
        : `No Food Items In The Cart Yet!`;
    cartContainer.innerHTML = contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
    overlay.classList.add("overlay");
    upDateCartOnNavbar();
  });

  //******************* Runs When User Escapes The Cart View ******************//
  $(document).on("click", "div#close-cart", function () {
    toggleCart.classList.remove("slider-class", "custom-index");
    overlay.classList.remove("overlay");
    toggleCart.classList.add("slider-remove");
    toggleCart.style.display = "none";
    setTimeout(function () {
      toggleCart.classList.remove("slider-remove");
    }, 1000);
  });

  //******************* Runs When User Wants To To Update Quanity From Items From Cart View  ******************//
  $(document).on("click", "#add-quantity", function (event) {
    const inputQuantity = document.getElementById("add-value"); // get input from the DOM
    const inputQuantityValue = inputQuantity.value;

    var idx = event.target.getAttribute("data-itemId");
    let cartItems = JSON.parse(localStorage.getItem("addToCart"));
    cartItems = cartItems.map(function (obj) {
      if (idx.toString() === obj.id) {
        if (inputQuantityValue !== "") {
          obj.quantity = inputQuantityValue;
          let price = Number(obj.price.replace(/\$/g, "")) * inputQuantityValue;
          obj.price = `$${price}`;
        }
        localStorage.setItem("addToCart", JSON.stringify(cartItems));
      }
    });

    contentCart =
      JSON.parse(localStorage.getItem("addToCart")) !== null ||
      JSON.parse(localStorage.getItem("addToCart")) !== []
        ? JSON.parse(localStorage.getItem("addToCart"))
            .map((item) => {
              return `
<tr >
<td data-idx="${item.id}" id="close-row" class="close-row" scope="row">X</td>
<td class="food-title">${item.title}</td>
<td>${item.price}</td>
<td >${item.quantity} <i data-idx="${item.id}" id=update-cart class="fa-solid fa-pen-to-square"></i></td> 
</tr>        
  `;
            })
            .join("")
        : `No Food Items In The Cart Yett!`;

    sumCart = JSON.parse(localStorage.getItem("addToCart")).reduce(
      (accumulator, value) => {
        return accumulator + Number(value.price.replace(/\$/g, ""));
      },
      0
    );
    contentCart +=
      JSON.parse(localStorage.getItem("addToCart")) !== null ||
      JSON.parse(localStorage.getItem("addToCart")) !== []
        ? `
              <tr>
            <td style="width: 2px;" scope="row">Total</td>
            <td>$ ${sumCart}</td>
            </tr>
            <div id="checkout"><button id="submit-button" class="glow-on-hover" type="submit">Check Out</button></div>`
        : `No Food Items In The Cart Yet!`;
    cartContainer.innerHTML = contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
    overlay.classList.add("overlay");
  });
  //******************* Runs When User Wants To Remove Cart Items From Cart View  ******************//
  $(document).on("click", "td#close-row", function (event) {
    var dataId = event.target.getAttribute("data-idx");
    let itemsInCart = JSON.parse(localStorage.getItem("addToCart"));
    itemsInCart = itemsInCart.filter(function (obj) {
      return obj.id !== dataId.toString();
    });

    localStorage.setItem("addToCart", JSON.stringify(itemsInCart));
    let updatedItems = itemsInCart.map(({ price }) =>
      Number(price.replace(/\$/g, ""))
    );

    if (
      JSON.parse(localStorage.getItem("addToCart")) !== null &&
      JSON.parse(localStorage.getItem("addToCart")).length !== 0
    ) {
      contentCart =
        JSON.parse(localStorage.getItem("addToCart")) !== null ||
        JSON.parse(localStorage.getItem("addToCart")) !== []
          ? JSON.parse(localStorage.getItem("addToCart"))
              .map((item) => {
                return `
                <tr >
                <td data-idx=${item.id} id="close-row" class="close-row" scope="row">X</td>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td >${item.quantity} <i data-idx=${item.id} id=update-cart class="fa-solid fa-pen-to-square"></i></td> 
                </tr>        
        `;
              })
              .join("")
          : `   <tr >No Food Items In The Cart Yetttt!     </tr> `;
      sumDecreaseCart = updatedItems.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      contentCart +=
        JSON.parse(localStorage.getItem("addToCart")).length !== 0
          ? `
                <tr> 
              <td style="width: 2px;" scope="row">Total</td>
              <td>$ ${sumDecreaseCart}</td>
              </tr> 
              <div id="checkout"><button id="submit-button" class="glow-on-hover" type="submit">Check Out</button></div>`
          : `   <tr > No Food Items In The Cart Yetttt! </tr> `;
      cartContainer.innerHTML = contentCart;

      if (JSON.parse(localStorage.getItem("addToCart")).length === 0) {
        contentCart = "No Food Items In The Cart Yet!";
        cartContainer.innerHTML = contentCart;
      }
    } else {
      emptyCart.innerHTML = "No Cart Items";
      cartContainer.innerHTML = null;
    }
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
    upDateCartOnNavbar();
  });

  //******************* Runs When User Hit On Empty Button ON Ui ******************//
  $(document).on("click", "div#empty-cart", function () {
    localStorage.removeItem("addToCart");
    overlay.classList.remove("overlay");
    productsAddedFromPage.length = 0;
    contentCart = null;
    cartContainer.innerHTML = "";
  });
});
