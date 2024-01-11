import * as utils from "./utils.js";
import * as api from "./api.js";

export function displayTop5News() {
  const $topNews = $(".top-news");
  api.getTopHeadlinesFromCountry("us").then((articles) => {
    articles.slice(1, 6).forEach((article) => {
      utils.createElementAndAppendToParent($topNews, "li", article.title);
    });
  });
}

export function displayOneNewsArticle() {
  const $news = $(".news");

  api
    .getTopHeadlinesFromCountry("us")
    .then((articles) => {
      if (articles.length > 0) {
        const firstArticle =
          articles[Math.floor(Math.random() * articles.length)];
        const $card = $("<div>").addClass("card w-100");
        if (firstArticle.urlToImage) {
          utils.createElementAndAppendToParent(
            $card,
            "img",
            firstArticle.urlToImage,
            "card-img-top"
          );
        }

        const $cardBody = $("<div>").addClass("card-body");
        $card.append($cardBody);
        utils.createElementAndAppendToParent(
          $cardBody,
          "h5",
          firstArticle.title,
          "card-title"
        );
        utils.createElementAndAppendToParent(
          $cardBody,
          "p",
          firstArticle.description,
          "card-text"
        );
        utils.createElementAndAppendToParent(
          $cardBody,
          "a",
          "Read more",
          "btn btn-primary"
        );

        $news.append($card);
      } else {
        utils.createElementAndAppendToParent(
          $news,
          "p",
          "No articles available."
        );
      }
    })
    .catch((err) => {
      console.error("Error fetching articles:", err);
      utils.createElementAndAppendToParent(
        $news,
        "p",
        "Failed to load articles."
      );
    });
}
