import * as utils from "./utils.js";
import * as api from "./api.js";

export function displayLatestNewsArticles(sliceStart, sliceEnd) {
  api.getLatestNewsArticles().then((articles) => {
    const $news = $(".top-news");
    const slicedArticles = articles.slice(sliceStart, sliceEnd);
    if (articles.length > 0) {
      slicedArticles.forEach((article) => {
        const $card = $("<div>").addClass("card w-100");

        const $cardBody = $("<div>").addClass("card-body");
        $card.append($cardBody);
        utils.createElementAndAppendToParent(
          $cardBody,
          "h5",
          article.title,
          "card-title"
        );

        $news.append($card);
      });
    } else {
      utils.createElementAndAppendToParent(
        $news,
        "p",
        "No articles available."
      );
    }
  });
}
