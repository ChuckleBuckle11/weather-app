
function createTodayWeather(weatherData){
    const todayWeather = document.createElement('div');
    todayWeather.id = "today-weather";

    
    
    todayWeather.appendChild(createImageContainer(weatherData)); //creates Image container
    todayWeather.appendChild(createCityName(weatherData)) // creates City Name
    todayWeather.appendChild(createTemperature(weatherData)); // creates teperature container
    todayWeather.appendChild(createWeatherDesc(weatherData)); //creates the weather description
    todayWeather.appendChild(createDataTime(weatherData)); // creates the weather data time
    return todayWeather;
}

function createCityName(weatherData){
    const cityName = document.createElement('div'); //Creates name of the city and appends to #today-weather
    cityName.id = 'city-name-text';
    cityName.textContent = `${weatherData.name}`
    
    return cityName;
}
function createImageContainer(weatherData){
    // Image
    const imageContainer = document.createElement(`div`);
    imageContainer.classList.add(`image-container`);
    imageContainer.appendChild(createImage(weatherData));
    return imageContainer;
}

function createImage(weatherData){
    const weatherImage = document.createElement('img');
    weatherImage.src = ``;
    weatherImage.src = `/dist/img/${getweatherImageCode(weatherData)}.png`;
    return weatherImage;
}

function createTemperature(weatherData){
    const temp = document.createElement('div');
    temp.id = `today-temperature`;
    temp.textContent = `${Math.round(weatherData.main["feels_like"])} \u00B0C`;
    return temp;
    
}

function createWeatherDesc(weatherData){
    const weatherDesc = document.createElement('div');
    weatherDesc.id = `today-weather-desc`;
    weatherDesc.textContent = `${weatherData.weather[0].description}`;
    return weatherDesc;
}

function createDataTime(weatherData){
    const dataTime = document.createElement('div');
    dataTime.id = `today-data-time`;
    dataTime.textContent = formatDate(weatherData.dt);
    return dataTime; 
}

function formatDate(unixDate){
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let currentTime = new Date(unixDate*1000);
    let today = currentTime.getDay();
    let date = currentTime.getDate();
    let suffix = getSuffix(date);
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();
    let hour = currentTime.getHours().toString().padStart(2,'0');
    let minute = currentTime.getMinutes().toString().padStart(2,'0');
    let AMPM = getAMPM(hour);
    let string =  `${DAYS[today-1]} ${date}${suffix} ${MONTHS[month]} ${year} ${hour}:${minute} ${AMPM}`
 
    return string;
}

function getSuffix(date){
    let strdate = date.toString();
    if (strdate.endsWith("1")) {
        return "st";
    }
    if (strdate.endsWith("2")) {
        return "nd";
    }
    if (strdate.endsWith("3")) {
        return "rd";
    }
    return "th";
}

function getAMPM(hour){
    return (hour >= 12) ? "PM" : "AM";
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
export {getAMPM};