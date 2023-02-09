import updateDisplay from "./displayController";

const searchField = document.querySelector('#search-box');
const content = document.querySelector(`#content`);

async function fetchWeather() {
    try {
        //if search bar is empty, return and trigger invalid
        if (searchField.validity.valueMissing) {
            searchField.setCustomValidity("Please enter a valid input.")
            return
        }

        // Gets City value in search bar
        let searchCity = searchField.value;
        let unit = "metric"; // display units in json, metric/imperial/kelvin
        
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, { mode: 'cors' });
        
        if (!response.ok){ //throws an error if city does not exist
            alert("Please enter a valid city.")
            throw new Error(response.statusText);
        }

        const weatherData = await response.json();
        updateDisplay(weatherData);
        return weatherData;
    }
    catch(error){
        console.log(error)
    }
}

export default fetchWeather;

