import * as eventlistner from "./eventlistner.js";
import * as display from "./display.js";
$(document).ready(function () {
  eventlistner.searchButtonClicked();
  eventlistner.navbarButtonClicked(".nav-link");
  display.displayLatestNewsArticles();
});
