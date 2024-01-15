import * as eventlistner from "./eventlistner.js";
import * as display from "./display.js";

// JQuery ready function for checking if the DOM is loaded
$(document).ready(function () {
  eventlistner.searchButtonClicked();
  eventlistner.navbarButtonClicked(".nav-link");
  display.displayLatestNewsArticles();
});
