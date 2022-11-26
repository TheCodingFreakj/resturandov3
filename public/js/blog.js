(function ($) {
  "use strict";

  //Declarations
  let targetContainer = document.getElementById("outer-container");
  let targetCatContainer = document.getElementById("categories-container");
  let targetPostsContainer = document.getElementById("recentposts-container");
  let content = "";
  var imgArray = new Array();
  let imageholders = "";
  let element = ""

  let slideIndex = 1;
  let recentBlogs = "";

  const categories = [
    { id: 1, cat: "catgory1" },
    { id: 2, cat: "catgory2" },
    { id: 3, cat: "catgory3" },
  ];
  const apiResult = [
    {
      id: 1,
      title: "This is Title-One",
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
      title: "This is Title-Two",
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
      title: "This is Title-Three",
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
      title: "This is Title-Four",
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
  ];
  function ellipsify(str) {
    if (str.length > 100) {
      return str.substring(0, 100) + "...";
    } else {
      return str;
    }
  }

  apiResult.forEach((result, idx) => {

    content = ` <div class="card">
<div class="card-body">
    <div class="slider-container-blog">
        <div class="my-slider-blog">
            <div class="slider-item-blog">
                <div class="blog-container">
                    <div id="bg-images-blog-${idx}" class="bg-images-blog"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body">
    <h2 class="h1">${result.title}</h2>
        <p class="card-text">${ellipsify(result.content)}</p>
    </div>
    <div class="card-body">
    <a href="single.html?id=${
      result.id
    }" class="custom-links"> 
    <h5 class="card-title btn-styling" >Read more</h5>
    </a>
      
    </div>
</div>
</div> 
`;

    targetContainer.innerHTML += content;
    imageholders = document.getElementsByClassName("bg-images-blog");

    const blog = apiResult[idx];
    for (let indeximg = 0; indeximg < blog.imageSlider.length; indeximg++) {
      imgArray[indeximg] = new Image();
      imgArray[indeximg].src = blog.imageSlider[indeximg];
      imgArray[indeximg].className = "imageSlides lazy";
      imgArray[indeximg].id = `${indeximg}`;
    }
    // console.log(element);
    for (let index = 0; index < Array.from(imageholders).length + 1; index++) {
      element = Array.from(imageholders)[index];
      if (element !== undefined) {
        imgArray.forEach((eleeement) => {
          element.append(eleeement);
        });
      }

    }
  });

  const myTimeout = setInterval(myTimer, 2000);

  function myTimer() {
    showSlides((slideIndex += 1));
  }

  if (Array.from(imageholders).length === apiResult) {
    clearInterval(myTimeout);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("bg-images-blog");

    Array.from(slides).forEach((element, index) => {
      element.childNodes.forEach((images, index) => {
        images.style.height = "420px";
        images.style.width = "100%";
        if (n > element.childNodes.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = element.childNodes.length;
        }
        for (i = 0; i < element.childNodes.length; i++) {
          element.childNodes[i].style.display = "none";
        }

        element.getElementsByClassName("imageSlides")[
          slideIndex - 1
        ].style.display = "block";
      });
    });
  }

  ////Displaying The Catgories
  categories.map((cat) => {
    content = `<div class="container">
        <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12"><i class="fa-solid fa-table-list"></i></div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12"> ${cat.cat}</div>
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
  apiResult.map((blogs) => {
    //let dateUpdatedFormatted = formatDate(dates.date_update);
    date = new Date(blogs.date_update);
    start = new Date(previousFormatted);
    end = new Date(todayFormatted);
    if (date > start && date < end) {
      recentBlogs = ` <span class="p-2 ">
        <div class="custom-container">
            <div class="d-lg-flex d-xl-flex d-md-flex d-sm-flex flex-lg-row flex-xl-row flex-sm-column flex-md-column">
                <div class="col-lg-7 col-xl-7 col-md-12 col-sm-12">
                    <img loading="lazy" class="sidebar-image" src=${blogs.imageSlider[0]} />
                </div>
                <div class="col-md-12 col-sm-12 offset-md-2">
                    <p class="text-start custom-title">${blogs.title}</p>
                    <p class="text-start custom-dates">${blogs.date_update}</p>
                </div>
            </div>

        </div>
    </span>
      `;
      targetPostsContainer.innerHTML += recentBlogs;
    }
  });


})(jQuery);
