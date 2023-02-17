import { createImage } from "./todayWeather";

function createForecast(weatherForecastData){
    const forecast = document.createElement('div');
    forecast.id = "weather-forecast";


    let dts = [];
    weatherForecastData.list.forEach((e) => {
        dts.push(e.dt);
        e.dt = new Date(e.dt*1000);
    })
    console.log(weatherForecastData)
    console.log(dts);

    createForecastInfo(forecast, weatherForecastData);


    return forecast;
}
function createForecastInfo(parentNode, weatherForecastData){
    const NUMBER_OF_FORECASTS = 5;
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const forecast = document.querySelector('#weather-forecast')

    for (let i = 0; i < NUMBER_OF_FORECASTS; i++){
        const forecastInfo = document.createElement('div');
        forecastInfo.id = `forecast-${i}`;
        forecastInfo.classList.add('forecast-info');

        const forecastData = weatherForecastData.list[0+8*i];

        const day = document.createElement('div');
        day.id = `forecast-${i}`-day;
        day.classList.add('forecast-day')
        day.textContent = DAYS[forecastData.dt.getDay()];
        console.log([forecastData.dt.getDay()]);

        const image = createImage(forecastData);


        const maxTemp = document.createElement('div');
        maxTemp.id = `forecast-${i}-max-temp`;
        maxTemp.classList = "forecast-max-temp"
        maxTemp.textContent = `${Math.round(forecastData.main.temp_max)} \u00B0C`;

        const minTemp = document.createElement('div');
        minTemp.id = `forecast-${i}-min-temp`;
        minTemp.classList = "forecast-min-temp"
        minTemp.textContent = `${Math.round(forecastData.main.temp_min)} \u00B0C`;

        
        forecastInfo.appendChild(day);
        forecastInfo.appendChild(image);
        forecastInfo.appendChild(minTemp);
        forecastInfo.appendChild(maxTemp);
        
        parentNode.appendChild(forecastInfo)
    }
}
export default createForecast