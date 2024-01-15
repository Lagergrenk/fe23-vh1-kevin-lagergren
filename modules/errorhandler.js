import * as utils from "./utils.js";

// Error handler for API calls with codes 400 and 500
export function errorHandler(errrorStatusCode) {
  switch (errrorStatusCode) {
    case 400:
      utils.showPopupModal(
        "Error",
        "The request was unacceptable, often due to a missing or misconfigured parameter."
      );
      break;
    case 500:
      utils.showPopupModal(
        "Error",
        "Something went wrong on our side while you were requesting the data."
      );
      break;
    default:
      utils.showPopupModal(
        "Error",
        "Something went wrong, please try again later."
      );
  }
}
