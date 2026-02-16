
const axios = require("axios");

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";


function getWeatherData(city, callback) {
  axios
    .get(BASE_URL, {
      params: {
        appid: API_KEY,
        q: city,
        units: "metric",
        lang: "fr",
      },
    })
    .then((response) => callback(null, response.data))
    .catch((error) => callback(error, null));
}


getWeatherData("Sousse", (err, data) => {
  if (err) {
    console.log("Erreur :", err.message);
    return;
  }

  console.log("Ville :", data.name);
  console.log("Description :", data.weather[0].description);
  console.log("Température :", data.main.temp, "°C");
  console.log("Humidité :", data.main.humidity, "%");
});
