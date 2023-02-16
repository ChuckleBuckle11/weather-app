
function createTodayWeather(weatherData){
    const todayWeather = document.createElement('div');
    todayWeather.id = "today-weather";

    // Creates the weather header and appends the city name
    const weatherHeader = document.createElement('div');
    weatherHeader.classList.add('weather-header');
    todayWeather.appendChild(weatherHeader); //appends the Weather Header to main content

    const cityNameText = document.createElement('div'); //Creates name of the city and appends to #today-weather
    cityNameText.id = 'city-name-text';
    cityNameText.textContent = `${weatherData.name}`
    todayWeather.appendChild(cityNameText)

    // Image
    const imageContainer = document.createElement(`div`);
    imageContainer.classList.add(`image-container`);
    imageContainer.appendChild(createImage(weatherData));
    todayWeather.appendChild(imageContainer);

    return todayWeather;
}


function createImage(weatherData){
    const weatherImage = document.createElement('img');
    weatherImage.src = ``;
    weatherImage.src = `./dist/img/${getweatherImageCode(weatherData)}.png`;
    return weatherImage;
}

function getweatherImageCode(weatherData){
    // please refer to the below link for weather conditions and icons
    // https://openweathermap.org/weather-conditions
    const currentWeather = weatherData.weather[0].main;
    switch (currentWeather){
        case "Clouds": return "cloud";
        case "Clear": return "sun";
        case "Snow": return "snow";
        case "Rain": return "thunderstorm";
        case "Drizzle": return "rain";
        case "Thunderstorm": return "thunderstorm-bolt";
    }

}


export default createTodayWeather