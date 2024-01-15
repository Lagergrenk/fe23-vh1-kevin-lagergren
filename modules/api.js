import { errorHandler } from "./errorhandler.js";
const API_KEY = "UDOfVknw_3UTddVdav9LljOYMRCtaS1LsTDS-1ZWYxxMFfEE";
const API_URL = "https://api.currentsapi.services";

// API call to search for news articles
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

// API call to get latest news articles
export function getLatestNewsArticles() {
  try {
    return fetch(`${API_URL}/v1/latest-news?language=en&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => data.news);
  } catch (err) {
    errorHandler(err.status);
  }
}
