import * as eventlistner from "./eventlistner.js";
import * as display from "./display.js";
$(document).ready(function () {
  eventlistner.searchButtonClicked();
  display.displayTop5News();
  display.displayOneNewsArticle();
});
