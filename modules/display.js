import * as utils from "./utils.js";
import * as api from "./api.js";

export function displayTop5News() {
  const $topNews = $(".top-news");
  api.getTopHeadlinesFromCountry("us").then((articles) => {
    articles.slice(1, 6).forEach((article) => {
      utils.createElementAndAppendToParent($(".top-news"), "li", article.title);
    });
  });
}
