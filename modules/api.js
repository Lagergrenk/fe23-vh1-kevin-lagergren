const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "6bf3830638ae1aa75a73e977b06e120e";

export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
