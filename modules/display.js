import * as utils from "./utils.js";
import * as api from "./api.js";

//TODO: fix links to articles

export function displayLatestNewsArticles(
  sliceStart,
  sliceEnd,
  $parent,
  image
) {
  api.getLatestNewsArticles().then((articles) => {
    const slicedArticles = articles.slice(sliceStart, sliceEnd);
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
