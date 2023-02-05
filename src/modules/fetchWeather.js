async function fetchWeather(){
    // Gets City value in search bar
    const searchField = document.querySelector('#city-search');
    let searchCity = searchField.value;
    let unit = "metric"; // display units in json, metric/imperial/kelvin
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
}

export default fetchWeather;