import * as eventlistner from "./eventlistner.js";
import * as display from "./display.js";
$(document).ready(function () {
  eventlistner.searchButtonClicked();
  display.displayLatestNewsArticles(0, 5, $(".top-news"));
  display.displayLatestNewsArticles(6, 7, $(".news"), true);
});
