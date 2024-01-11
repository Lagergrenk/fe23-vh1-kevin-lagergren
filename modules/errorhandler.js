import * as utils from "./utils.js";

export function errorHandler(errrorStatusCode) {
  switch (errrorStatusCode) {
    case 400:
      utils.createPopup(
        "Error",
        "The request was unacceptable, often due to a missing or misconfigured parameter."
      );
      break;
    case 500:
      utils.createPopup(
        "Error",
        "Something went wrong on our side while you were requesting the data."
      );
      break;
    default:
      utils.createPopup(
        "Error",
        "Something went wrong, please try again later."
      );
  }
}
