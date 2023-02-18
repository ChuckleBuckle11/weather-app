import createTodayWeather from "./todayWeather";
import createWeatherInfo from "./weather-info";
import createForecast from "./forecast";

// This controls any display changes
const mainWeatherContent = document.querySelector(`#main-weather-content`);
const DATES = ["January", "February", "March", "April", "May", "June", "July", "August" ,"September", "October" ,"November","December"]

function updateDisplay(weatherData, forecastData){
    
    console.log(weatherData) //to remove
    flushMain(); //flushes #main-weather-content
    showMain();

    mainWeatherContent.appendChild(createTodayWeather(weatherData));
    mainWeatherContent.appendChild(createForecast(forecastData));
    mainWeatherContent.appendChild(createWeatherInfo(weatherData));

    const forecast = document.querySelector(`#weather-forecast`)
    console.log(forecast);

    // Flickity options
    var flkty = new Flickity( forecast, {
        // options
        cellAlign: 'center',
        contain: true,
        autoPlay:true,
        draggable: true,
        groupCells:5,
      });

} 

function showMain(){
    mainWeatherContent.classList.add("active");
}
function flushMain(){
    mainWeatherContent.textContent = "";
}




// function getweatherImageCode(weatherData){
//     // please refer to the below link for weather conditions and icons
//     // https://openweathermap.org/weather-conditions
//     const currentWeather = weatherData.weather[0].main;
//     switch (currentWeather){
//         case "Clouds": return "10d";
//         case "Clear": return "01d";
//         case "Snow": return "13d";
//         case "Rain": return "09d";
//         case "Drizzle": return "10d";
//         case "Thunderstorm": return "11d";
//     }

// }
export default updateDisplay;