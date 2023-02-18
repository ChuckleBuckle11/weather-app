import { createImage, getAMPM } from "./todayWeather";

function createForecast(weatherForecastData){
    const forecast = document.createElement('div');
    forecast.id = "weather-forecast";

    let dts = []; // quickly formates the time data in the list
    weatherForecastData.list.forEach((e) => {
        dts.push(e.dt);
        e.dt = new Date(e.dt*1000);
    })

    createForecastInfo(forecast, weatherForecastData);
    return forecast;
}
function createForecastInfo(parentNode, weatherForecastData){
    console.log(weatherForecastData)
    const NUMBER_OF_FORECASTS = 40;
    
    for (let i = 0; i < NUMBER_OF_FORECASTS; i++){
        const forecastInfo = document.createElement('div');
        forecastInfo.id = `forecast-${i}`;
        forecastInfo.classList.add('forecast-info');

        const forecastData = weatherForecastData.list[i];

        const day = document.createElement('div');
        day.id = `forecast-${i}`-day;
        day.classList.add('forecast-day')
        day.textContent = getDateFormat(forecastData.dt);

        const time = document.createElement('div');
        time.id = `forecast-${i}`-time;
        time.classList.add('forecast-time')
        time.textContent = getTimeFormat(forecastData.dt);

        const image = createImage(forecastData);

        const temp = document.createElement('div');
        temp.id = `forecast-${i}-temp`;
        temp.classList = "forecast-temp"
        temp.textContent = `${Math.round(forecastData.main.feels_like)} \u00B0C`;

        
        forecastInfo.appendChild(day);
        forecastInfo.appendChild(time);
        forecastInfo.appendChild(image);
        forecastInfo.appendChild(temp);
        
        parentNode.appendChild(forecastInfo);
    }

    return;
}

function getDateFormat(currentTime){
    console.log(currentTime.getDay());
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = DAYS[currentTime.getDay()];
    let date = currentTime.getDate();
    let month = currentTime.getMonth()+1;

    return `${day} ${date}/${month}`;
}
function getTimeFormat(currentTime){
    let hour = currentTime.getHours().toString().padStart(2,'0');
    if (hour > 12){
        hour = hour-12; // forces 12-hour format
    }
    let AMPM = getAMPM(hour);
    let string = `${hour} ${AMPM}`

    return string;
}


export default createForecast