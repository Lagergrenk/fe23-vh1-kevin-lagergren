import * as utils from "./utils.js";
import * as api from "./api.js";

//TODO: fix links to articles

export function displayLatestNewsArticles() {
  api.getLatestNewsArticles().then((articles) => {
    const slicedArticles = articles.slice(0, 5);
    if (articles.length > 0) {
      console.log(slicedArticles);
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

export function displayLoader() {
  $(".main-news").append(`
    <div class="loader-container justify-content-center">
      <div class="loader"></div>
    </div>
  `);
}
