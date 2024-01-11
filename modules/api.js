const API_KEY = "ffefe1630a964061a4d4deee6c55f71a";

const API_URL = "https://newsapi.org/v2";

export function getEveryNewsFromInputTopic(topic) {
  try {
    return fetch(`${API_URL}/everything?q=${topic}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => data.articles);
  } catch (err) {
    console.log(err);
  }
}

export function getTopHeadlinesFromCountry(country) {
  try {
    return fetch(
      `${API_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.articles);
  } catch (err) {
    console.log(err);
  }
}
