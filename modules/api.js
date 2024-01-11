import { errorHandler } from "./errorhandler.js";

const API_KEY = "UDOfVknw_3UTddVdav9LljOYMRCtaS1LsTDS-1ZWYxxMFfEE";

const API_URL = "https://api.currentsapi.services";

export function searchNewsArticles(searchInput) {
  try {
    return fetch(
      `${API_URL}/v1/search?keywords=${searchInput}&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.news);
  } catch (err) {
    errorHandler(err.status);
  }
}

export function getLatestNewsArticles() {
  try {
    //language=eng is optional, but it will filter out articles that are not in English
    return fetch(`${API_URL}/v1/latest-news?language=en&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => data.news);
  } catch (err) {
    errorHandler(err.status);
  }
}
