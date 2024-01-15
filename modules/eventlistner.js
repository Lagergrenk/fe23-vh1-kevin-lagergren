import * as utils from "./utils.js";
import * as api from "./api.js";
import * as display from "./display.js";

// Event handler for search button
export function searchButtonClicked(input) {
  $("form").submit(function (event) {
    $(".main-news").empty();
    $(".title").empty().append("Search results for :");
    event.preventDefault();
    display.displayLoader();

    let searchInput = $(".form-control").val();
    api.searchNewsArticles(searchInput).then((articles) => {
      console.log(articles);
      $(".main-news").empty();
      $(".title").empty().append(`Search results for : ${searchInput}`);
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

// Event handler for navbar buttons
export function navbarButtonClicked(clickedButton) {
  $(".nav-link").click(function (e) {
    e.preventDefault();
    let data = $(this).data("type");

    switch (data) {
      case "home":
        window.location.reload();
        break;
      case "about":
        utils.showPopupModal("About", "This is a news website");
        break;
      case "contact":
        utils.showPopupModal("Contact", "Contact us at: simsalabim@foo.fee");
        break;
    }
  });
}
