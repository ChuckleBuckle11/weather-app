//weather app API key 32cc350ce67f8346a60c40673c36dfff



const searchField = document.querySelector('#city-search');
const searchButton = document.querySelector(`#search-button`);


searchButton.onclick = fetchWeather;


async function fetchWeather(){
    let searchCity = searchField.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
}