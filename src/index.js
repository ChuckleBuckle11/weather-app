//weather app API key 32cc350ce67f8346a60c40673c36dfff

import fetchWeather from "./modules/fetchWeather.js";

const searchButton = document.querySelector(`#search-button`);
const searchBox = document.querySelector(`#search-box`);

// Upon button click, fetches weather data
searchButton.onclick = fetchWeather;

searchBox.addEventListener("keyup", event => {
    if (event.key != "Enter") return;
    searchButton.click();
    event.preventDefault();
    })
