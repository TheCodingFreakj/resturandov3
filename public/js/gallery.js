(function ($) {
  "use strict";
  const container = document.getElementById("gallery");
  //Api Call
  const apiResultImages = [
    {
      foodiId: 1,
      group: [
        {
          fid: 1,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/high-angle-delicious-pita.jpg",
          imageDesc: "This is Title One",
        },
        {
          fid: 2,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/flat-lay-delicious-food-plate__1_.jpg",
          imageDesc: "This is Title One",
        },
        {
          fid: 3,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
          imageDesc: "This is Title One",
        },
      ],
    },
    {
      foodiId: 2,
      group: [
        {
          fid: 1,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/pancakes-g7bc86f486_1280.jpg",
          imageDesc: "This is Title One",
        },
        {
          fid: 2,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/raspberries-g1c95018cf_1280.jpg",
          imageDesc: "This is Title One",
        },
        {
          fid: 3,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/meal-g97705a369_1280.jpg",
          imageDesc: "This is Title One",
        },
      ],
    },

    {
      foodiId: 3,
      group: [
        {
          fid: 4,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/breakfast-ga99def90b_1280.jpg",
          imageDesc: "This is Title One",
        },
        {
          fid: 5,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/onions-g167385904_1280.jpg",
          imageDesc: "This is Title One",
        },
        {
          fid: 6,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/close-up-hands-holding-indian-food-bowl.jpg",
          imageDesc: "This is Title One",
        },
      ],
    },

    {
      foodiId: 4,
      group: [
        {
          fid: 7,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/indian-condiments-with-copy-space-view.jpg",
          imageDesc: "This is Title One",
        },
        {
          fid: 8,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/cookies-gf43494f23_1280.jpg",
          imageDesc: "This is Title One",
        },
        {
          fid: 9,
          imageSrc: "https://ik.imagekit.io/vi9aepz6c/Resturando/img/vegetables-ge8fccf0e8_1280.jpg",
          imageDesc: "This is Title One",
        },
      ],
    },
  ];

  const apiResult = [
    {
      id: 1,
      quantity: 33,
      title: "This is Title-One",
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
      title: "This is Title-Two",
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
      title: "This is Title-Three",
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
      title: "This is Title-four",
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
      title: "This is Title-Five",
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
      title: "This is Title-Six",
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
      title: "This is Title-Seven",
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
      title: "This is Title-Eight",
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
      title: "This is Title-Ten",
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
      title: "This is Title-Ten",
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
  const loadFoodPage = (loadPage) => {
    return apiResult
      .map((food) => {
        if (food.id === loadPage) {
          return food.id;
        }
      })
      .join("");
  };
  const showgalleryImage = (group) => {
    return group
      .map((n) => {
        return `
          <a href= "productpages.html?id=${loadFoodPage(
            n.fid
          )}" target="_blank" class="gallery__link">
                    <figure class="gallery__thumb">
                        <img id="imageClicked" src=${n.imageSrc} alt=${
          n.imageDesc
        } class="gallery__image">
                    <figcaption class="gallery__caption">${
                          n.imageDesc
                        }</figcaption>
                    </figure>
                </a>
      `;
      })
      .join("");
  };

  const configureImages = () => {
    apiResultImages.forEach((result) => {
      // Construct card content
      const content = `
      <div class="gallery__column sliced-content">
      ${showgalleryImage(result.group)}
     </div>
      `;

      // Append newyly created card element to the container
      container.innerHTML += content;
    });
  };
  configureImages();

  
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
