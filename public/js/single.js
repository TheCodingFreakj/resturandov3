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
                                    <div id="bg-images-blog-${id}" class="bg-images-blog"><img src=${blog.imageSlider[0]} alt="single-blog-image"/></div>
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
            <div class="col-4"><i class="fa-solid fa-table-list"></i></div>
            <div class="col-6"> ${cat.cat}</div>
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
        console.log(blogs);
        recentBlogs = ` <span class="d-block p-2 ">
          <div class="container ">
              <div class="d-flex flex-row ">
                  <div class="col-lg-7 ">
                      <img loading="lazy" class="sidebar-image" src=${blogs.imageSlider[0]} />
                  </div>
                  <div class="col-lg-5 offset-md-4">
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
  