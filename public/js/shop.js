$(function () {
  "use strict";
  //get elements
  const container = document.getElementById("display-products");
  const toggleCart = document.getElementById("add-cart");
  const cartContainer = document.getElementById("add");
  //Declarations
  let contentCart = null;
  let productsAdded = [];

  // Cart Item Model
  class cartAdd {
    constructor(id, price, title, quantity) {
      this.id = id;
      this.price = price;
      this.price = price;
      this.title = title;
      this.quantity = quantity;
    }
  }
  const data = {
    currentRating: 0,
    ratings: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  };
  let ids = [];
  setTimeout(() => {
    let content = document.getElementsByTagName("ul");
    let clone = "";
    for (let i = 0; i < content.length; i++) {
      if (content[i].classList.contains("list-group")) {
        var li = document.createElement("li");
        li.classList.add("add-list");

        data.ratings.map((item) => {
          const a = document.createElement("a");
          li.appendChild(a);
          a.innerHTML = "&starf;";
          a.id = item.id;
          content[i].appendChild(li);
          const lis = content[i].getElementsByClassName("add-list");
          const listItems = lis[0].querySelectorAll("a");

          listItems.forEach((element, idx) => {
            a.addEventListener("click", (e) => {
              const currentId = Number(e.target.id);

              ids.push(Number(element.getAttribute("id")));

              const toFindDuplicates = (arry) =>
                arry.filter((item, index) => arry.indexOf(item) !== index);
              const duplicateElementa = toFindDuplicates(ids);

              if (duplicateElementa.length > 1) {
                lis[0].childNodes.forEach((data) => {
                  data.classList.remove("active");
                });
                duplicateElementa.forEach((data) => {
                  if (listItems[data - 1] !== undefined) {
                    console.log(Number(listItems[data - 1].getAttribute("id")));
                    console.log(duplicateElementa);
                    listItems[data - 1].classList.add("active");
                  }
                });
              }

              if (ids.includes(Number(listItems[idx].getAttribute("id")))) {
                listItems[idx].classList.add("active");
              }
            });
          });
        });
      }
    }
  }, 2000);

  //Api Call
  const apiResult = [
    {
      id: 1,
      quantity: 33,
      title: "title1",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/breakfast-ga99def90b_1280.jpg",
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
      title: "title2",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
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
      title: "title3",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
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
      title: "title6",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/pancakes-g7bc86f486_1280.jpg",
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
      title: "title5",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/vegetables-ge8fccf0e8_1280.jpg",
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
      title: "title144",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/meal-g97705a369_1280.jpg",
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
      title: "title7",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
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
      title: "title8",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/indian-condiments-with-copy-space-view.jpg",
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
      title: "title9",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/high-angle-delicious-pita.jpg",
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
      title: "title10",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/cookies-gf43494f23_1280.jpg",
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

  //No Data From Api Call
  if (apiResult.length === 0) {
    container.innerHTML += `<h2>No Product Found</h2>`;
  }

  //******************* Add To Cart Functionality ******************//
  const AddToCart = (product) => {
    if (JSON.parse(localStorage.getItem("addToCart")) === null) {
      localStorage.removeItem("addToCart");
      productsAdded.length = 0;
      contentCart = null;
      cartContainer.innerHTML = "";
    } else {
      if (JSON.parse(localStorage.getItem("addToCart")).length === 0) {
        localStorage.removeItem("addToCart");
        productsAdded.length = 0;
        contentCart = null;
        cartContainer.innerHTML = "";
      }
    }
    let newCartItem = new cartAdd(
      product.dataId,
      product.dataPrice,
      product.dataTitle,
      product.dataQuantity
    );
    productsAdded.push(newCartItem);
    const array3 = [
      ...productsAdded,
      ...JSON.parse(localStorage.getItem("addToCart")) || [],
    ];
    localStorage.setItem("addToCart", JSON.stringify(array3));
    // if (JSON.parse(localStorage.getItem("addToCart")) !== null) {
    if (productsAdded.length > 1) {
      productsAdded = [
        ...new Map(
          JSON.parse(localStorage.getItem("addToCart")).map((item) => [
            item["id"],
            item,
          ])
        ).values(),
      ];

      localStorage.setItem("addToCart", JSON.stringify(productsAdded));
    }

    console.log(JSON.parse(localStorage.getItem("addToCart")));
    contentCart =
      JSON.parse(localStorage.getItem("addToCart")) !== null &&
      JSON.parse(localStorage.getItem("addToCart"))
        .map((item) => {
          return `
      <tr >
      <th data-idx="${item.id}" id="close-row" class="close-row" scope="row">X</th>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td >${item.quantity} <i data-idx="${item.id}" id=update-cart class="fa-solid fa-pen-to-square"></i></td> 
      </tr>        
          `;
        })
        .join("");
    cartContainer.innerHTML = contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
  };

  //******************* Rendering Fetched Products Dynamically ******************//
  const configureProducts = () => {
    $(document).on("click", "p#add-to-cart", function (event) {
      var dataQuantity = event.target.getAttribute("data-quantity");
      var dataTitle = event.target.getAttribute("data-title");
      var dataPrice = event.target.getAttribute("data-price");
      var dataId = event.target.getAttribute("data-id");
      let selectedObject = {
        dataQuantity,
        dataTitle,
        dataPrice,
        dataId,
      };

      AddToCart(selectedObject);
    });

    apiResult.forEach((result, idx) => {
      // Construct card content
      const content = `
        <div  class="col-xl-4 col-md-6 col-sm-12 custom-gap ">
            <div id="food-card" class="card" style="width: 18rem; margin: 0  auto">
                <img src=${
                  result.image
                } class="card-img-top" alt="feature-image">
                <div class="card-body">
                    <a href="productpages.html?id=${
                      result.id
                    }" class="custom-links"> 
                    <h5 class="card-title" >${result.title}</h5>
                    </a>
                </div>
                <ul data-group="target-stars" class="list-group list-group-flush">

                    <li class="list-group-item">${result.price}</li>
                </ul>
                <div class="card-body d-xl-flex justify-content-xl-around">
                    <p class="card-link"  id="add-to-cart" data-quantity=${Number(
                      result.quantity
                    )} data-id=${Number(result.id)} data-price=${
        result.price
      } data-title=${
        result.title
      }" ><i class="fa-solid fa-cart-shopping"></i> Add To Cart</a>
                    <p class="card-link"><i class="fa-solid fa-heart"></i>Favorite</a>
                </div>
            </div>
        </div>
      `;

      // Append newyly created card element to the container
      container.innerHTML += content;
    });
  };
  configureProducts();
  //Ratings

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
    <th data-idx="${item.id}" id="close-row" class="close-row" scope="row">X</th>
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
    cartContainer.innerHTML = contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
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
      JSON.parse(localStorage.getItem("addToCart")) !== null &&
      JSON.parse(localStorage.getItem("addToCart"))
        .map((item) => {
          return (
            `
    <tr >
    <th data-idx="${item.id}" id="close-row" class="close-row" scope="row">X</th>
    <td>${item.title}</td>
    <td>${item.price}</td>
    
    ` +
            renderInput(item, item.id, idx) +
            `
    </tr>        
        `
          );
        })
        .join("");
    cartContainer.innerHTML = contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
  });

  //******************* Runs When User Escapes The Cart View ******************//
  $(document).on("click", "div#close-cart", function () {
    toggleCart.classList.remove("slider-class", "custom-index");
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
    console.log(idx);
    let cartItems = JSON.parse(localStorage.getItem("addToCart"));
    cartItems = cartItems.map(function (obj) {
      if (idx.toString() === obj.id) {
        if (inputQuantityValue !== "") {
          obj.quantity = inputQuantityValue;
        }
        localStorage.setItem("addToCart", JSON.stringify(cartItems));
      }
    });
    contentCart =
      JSON.parse(localStorage.getItem("addToCart")) !== null &&
      JSON.parse(localStorage.getItem("addToCart"))
        .map((item) => {
          console.log(item);
          return `
<tr >
<th data-idx="${item.id}" id="close-row" class="close-row" scope="row">X</th>
<td>${item.title}</td>
<td>${item.price}</td>
<td >${item.quantity} <i data-idx="${item.id}" id=update-cart class="fa-solid fa-pen-to-square"></i></td> 
</tr>        
    `;
        })
        .join("");
    cartContainer.innerHTML = contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
  });

  //******************* Runs When User Wants To Remove Cart Items From Cart View  ******************//
  $(document).on("click", "th#close-row", function (event) {
    var dataId = event.target.getAttribute("data-idx");
    let itemsInCart = JSON.parse(localStorage.getItem("addToCart"));
    itemsInCart = itemsInCart.filter(function (obj) {
      return obj.id !== dataId.toString();
    });
    localStorage.setItem("addToCart", JSON.stringify(itemsInCart));

    contentCart =
      JSON.parse(localStorage.getItem("addToCart")) !== null &&
      JSON.parse(localStorage.getItem("addToCart"))
        .map((item) => {
          return `
    <tr >
    <th data-idx="${item.id}" id="close-row" class="close-row" scope="row">X</th>
    <td>${item.title}</td>
    <td>${item.price}</td>
    <td >${item.quantity} <i data-idx="${item.id}" id=update-cart class="fa-solid fa-pen-to-square"></i></td> 
    </tr>        
        `;
        })
        .join("");

    cartContainer.innerHTML = contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
  });

  //******************* Runs When User Hit On Empty Button ON Ui ******************//

  $(document).on("click", "div#empty-cart", function () {
    localStorage.removeItem("addToCart");
    productsAdded.length = 0;
    contentCart = null;
    cartContainer.innerHTML = "";
  });
});
