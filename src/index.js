//weather app API key 32cc350ce67f8346a60c40673c36dfff

import fetchWeather from "./modules/fetchWeather.js";



const searchButton = document.querySelector(`#search-button`);


searchButton.onclick = fetchWeather;


