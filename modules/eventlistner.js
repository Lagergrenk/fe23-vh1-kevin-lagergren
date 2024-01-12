import * as utils from "./utils.js";

export function searchButtonClicked(input) {
  $("form").submit(function (event) {
    event.preventDefault();
    let searchInput = $("#searchInput").val();
    console.log(searchInput);
  });
}

export function navbarButtonClicked(clickedButton) {
  $(".nav-link").click(function (e) {
    e.preventDefault();
    let data = $(this).data("type");

    switch (data) {
      case "home":
        console.log("home");
        break;
      case "about":
        utils.createPopup("About", "This is a news website");
        console.log("about");
        break;
      case "contact":
        utils.createPopup("Contact", "Contact us at: simsalabim@foo.fee");
        break;
    }
  });
}
