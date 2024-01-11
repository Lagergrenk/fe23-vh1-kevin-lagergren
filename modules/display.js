import * as utils from "./utils.js";
import * as api from "./api.js";

export function displayLatestNewsArticles(
  sliceStart,
  sliceEnd,
  $parent,
  image
) {
  api.getLatestNewsArticles().then((articles) => {
    const slicedArticles = articles.slice(sliceStart, sliceEnd);
    if (articles.length > 0) {
      slicedArticles.forEach((article) => {
        const $card = $("<div>").addClass("card w-100 small-card");
        if (image) {
          utils.createElementAndAppendToParent(
            $card,
            "img",
            article.image,
            "card-img-top"
          );
        }

        const $cardBody = $("<div>").addClass("card-body");
        $card.append($cardBody);
        utils.createElementAndAppendToParent(
          $cardBody,
          "h5",
          article.title,
          "card-title"
        );

        $parent.append($card);
      });
    } else {
      utils.createElementAndAppendToParent(
        $parent,
        "p",
        "No articles available."
      );
    }
  });
}
