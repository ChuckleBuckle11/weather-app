import updateDisplay from "./displayController.js";

const searchField = document.querySelector('#search-box');


const mainWeatherContent = document.querySelector("#main-weather-content");


async function fetchWeather() {
        //if search bar is empty, return and trigger invalid
        if (searchField.validity.valueMissing) {
            searchField.setCustomValidity("Please enter a valid input.")
            return
        }

        // Gets City value in search bar
        let searchCity = searchField.value;
        let unit = "metric"; // display units in json, metric/imperial/kelvin
        mainWeatherContent.textContent = ""
        displayLoading();
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, { mode: 'cors' });
        
        if (!response.ok){ //throws an error if city does not exist
            alert("Please enter a valid city.")
            throw new Error(response.statusText);
        }

        let forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, { mode: 'cors' });
        
        if (!forecastResponse.ok){ //throws an error if city does not exist
            alert("Please enter a valid city.")
            throw new Error(response.statusText);
        }

        removeLoading();
        const weatherData = await response.json();
        const forecastData = await forecastResponse.json();

        updateDisplay(weatherData, forecastData);
        return weatherData;
}

function displayLoading(){
    const loadingScreenContainer = document.createElement('div');
    loadingScreenContainer.id = "loading-screen-container";

    const loadingScreen = document.createElement('p');
    loadingScreen.id = "loading-screen";
    loadingScreenContainer.appendChild(loadingScreen);

    mainWeatherContent.classList.remove("active");
    mainWeatherContent.classList.add("loading");

    mainWeatherContent.appendChild(loadingScreenContainer);
    loadingScreen.classList.add("display");

}

function removeLoading(){
    const loadingScreen = document.querySelector('#loading-screen');
    loadingScreen.classList.remove("display");

    mainWeatherContent.classList.remove("loading");
    mainWeatherContent.classList.add("active");
    
}


export default fetchWeather;

