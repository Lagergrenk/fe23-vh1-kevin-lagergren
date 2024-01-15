import * as utils from "./utils.js";
import * as api from "./api.js";

// Display latest news articles on page load
export function displayLatestNewsArticles() {
  api.getLatestNewsArticles().then((articles) => {
    const slicedArticles = articles.slice(0, 10);
    if (articles.length > 0) {
      slicedArticles.forEach((article) => {
        utils.createNewsCard(
          $(".main-news"),
          article.title,
          article.description,
          article.image,
          article.url
        );
      });
    }
  });
}

// Display loader
export function displayLoader() {
  $(".main-news").append(`
    <div class="loader-container justify-content-center">
      <div class="loader"></div>
    </div>
  `);
}
