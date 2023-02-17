import updateDisplay from "./displayController.js";

const searchField = document.querySelector('#search-box');
const loadingScreen = document.createElement('p');
loadingScreen.id = "loading-screen";
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

        const weatherData = await response.json();
        hideLoading();
        updateDisplay(weatherData);
        return weatherData;


}

function displayLoading(){
    
    mainWeatherContent.appendChild(loadingScreen);
    loadingScreen.classList.add("display");
    // to Stop loading after some time
    // setTimeout(()=>{
    //     hideLoading();
    // },5000);
}

function hideLoading(){
    loadingScreen.classList.remove("display");
}

export default fetchWeather;

