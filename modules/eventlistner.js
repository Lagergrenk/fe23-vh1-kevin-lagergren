import * as utils from "./utils.js";
import * as api from "./api.js";
import * as display from "./display.js";

export function searchButtonClicked(input) {
  $("form").submit(function (event) {
    $(".main-news").empty();
    event.preventDefault();
    display.displayLoader();

    let searchInput = $(".form-control").val();
    console.log(searchInput);
    api.searchNewsArticles(searchInput).then((articles) => {
      console.log(articles);
      $(".main-news").empty();
      articles.forEach((article) => {
        utils.createNewsCard(
          $(".main-news"),
          article.title,
          article.description,
          article.image,
          article.url
        );
      });
    });
  });
}

export function navbarButtonClicked(clickedButton) {
  $(".nav-link").click(function (e) {
    e.preventDefault();
    let data = $(this).data("type");

    switch (data) {
      case "home":
        console.log("home");
        break;
      case "about":
        utils.createPopup("About", "This is a news website");
        console.log("about");
        break;
      case "contact":
        utils.createPopup("Contact", "Contact us at: simsalabim@foo.fee");
        break;
    }
  });
}
