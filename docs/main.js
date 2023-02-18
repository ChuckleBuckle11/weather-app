/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchWeather.js */ \"./src/modules/fetchWeather.js\");\n//weather app API key 32cc350ce67f8346a60c40673c36dfff\n\n\n\nconst searchButton = document.querySelector(`#search-button`);\nconst searchBox = document.querySelector(`#search-box`);\n\n// Upon button click, fetches weather data\nsearchButton.onclick = _modules_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nsearchBox.addEventListener(\"keyup\", event => {\n    if (event.key != \"Enter\") return;\n    searchButton.click();\n    event.preventDefault();\n    })\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayWeather */ \"./src/modules/todayWeather.js\");\n/* harmony import */ var _weather_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-info */ \"./src/modules/weather-info\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast */ \"./src/modules/forecast.js\");\n\n\n\n\n// This controls any display changes\nconst mainWeatherContent = document.querySelector(`#main-weather-content`);\nconst DATES = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\" ,\"September\", \"October\" ,\"November\",\"December\"]\n\nfunction updateDisplay(weatherData, forecastData){\n    \n    console.log(weatherData) //to remove\n    flushMain(); //flushes #main-weather-content\n    showMain();\n\n    mainWeatherContent.appendChild((0,_todayWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData));\n    mainWeatherContent.appendChild((0,_forecast__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(forecastData));\n    mainWeatherContent.appendChild((0,_weather_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData));\n\n    const forecast = document.querySelector(`#weather-forecast`)\n\n    // Flickity options\n    var flkty = new Flickity( forecast, {\n        // options\n        cellAlign: 'center',\n        contain: true,\n        autoPlay:true,\n        draggable: true,\n        groupCells:5,\n      });\n\n} \n\nfunction showMain(){\n    mainWeatherContent.classList.add(\"active\");\n}\nfunction flushMain(){\n    mainWeatherContent.textContent = \"\";\n}\n\n\n\n\n// function getweatherImageCode(weatherData){\n//     // please refer to the below link for weather conditions and icons\n//     // https://openweathermap.org/weather-conditions\n//     const currentWeather = weatherData.weather[0].main;\n//     switch (currentWeather){\n//         case \"Clouds\": return \"10d\";\n//         case \"Clear\": return \"01d\";\n//         case \"Snow\": return \"13d\";\n//         case \"Rain\": return \"09d\";\n//         case \"Drizzle\": return \"10d\";\n//         case \"Thunderstorm\": return \"11d\";\n//     }\n\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDisplay);\n\n//# sourceURL=webpack://weather-app/./src/modules/displayController.js?");

/***/ }),

/***/ "./src/modules/fetchWeather.js":
/*!*************************************!*\
  !*** ./src/modules/fetchWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ \"./src/modules/displayController.js\");\n\n\nconst searchField = document.querySelector('#search-box');\n\n\nconst mainWeatherContent = document.querySelector(\"#main-weather-content\");\n\n\nasync function fetchWeather() {\n        //if search bar is empty, return and trigger invalid\n        if (searchField.validity.valueMissing) {\n            searchField.setCustomValidity(\"Please enter a valid input.\")\n            return\n        }\n\n        // Gets City value in search bar\n        let searchCity = searchField.value;\n        let unit = \"metric\"; // display units in json, metric/imperial/kelvin\n        mainWeatherContent.textContent = \"\"\n        displayLoading();\n        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, { mode: 'cors' });\n        \n        if (!response.ok){ //throws an error if city does not exist\n            alert(\"Please enter a valid city.\")\n            throw new Error(response.statusText);\n        }\n\n        let forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, { mode: 'cors' });\n        \n        if (!forecastResponse.ok){ //throws an error if city does not exist\n            alert(\"Please enter a valid city.\")\n            throw new Error(response.statusText);\n        }\n\n        removeLoading();\n        const weatherData = await response.json();\n        const forecastData = await forecastResponse.json();\n\n        (0,_displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData, forecastData);\n\n        return weatherData;\n}\n\nfunction displayLoading(){\n    const loadingScreenContainer = document.createElement('div');\n    loadingScreenContainer.id = \"loading-screen-container\";\n\n    const loadingScreen = document.createElement('p');\n    loadingScreen.id = \"loading-screen\";\n    loadingScreenContainer.appendChild(loadingScreen);\n\n    mainWeatherContent.classList.remove(\"active\");\n    mainWeatherContent.classList.add(\"loading\");\n\n    mainWeatherContent.appendChild(loadingScreenContainer);\n    loadingScreen.classList.add(\"display\");\n\n}\n\nfunction removeLoading(){\n    const loadingScreen = document.querySelector('#loading-screen');\n    loadingScreen.classList.remove(\"display\");\n\n    mainWeatherContent.classList.remove(\"loading\");\n    mainWeatherContent.classList.add(\"active\");\n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/fetchWeather.js?");

/***/ }),

/***/ "./src/modules/forecast.js":
/*!*********************************!*\
  !*** ./src/modules/forecast.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayWeather */ \"./src/modules/todayWeather.js\");\n\n\nfunction createForecast(weatherForecastData){\n    const forecast = document.createElement('div');\n    forecast.id = \"weather-forecast\";\n\n    let dts = []; // quickly formates the time data in the list\n    weatherForecastData.list.forEach((e) => {\n        dts.push(e.dt);\n        e.dt = new Date(e.dt*1000);\n    })\n\n    createForecastInfo(forecast, weatherForecastData);\n    return forecast;\n}\nfunction createForecastInfo(parentNode, weatherForecastData){\n    console.log(weatherForecastData)\n    const NUMBER_OF_FORECASTS = 40;\n    \n    for (let i = 0; i < NUMBER_OF_FORECASTS; i++){\n        const forecastInfo = document.createElement('div');\n        forecastInfo.id = `forecast-${i}`;\n        forecastInfo.classList.add('forecast-info');\n\n        const forecastData = weatherForecastData.list[i];\n\n        const day = document.createElement('div');\n        day.id = `forecast-${i}`-day;\n        day.classList.add('forecast-day')\n        day.textContent = getDateFormat(forecastData.dt);\n\n        const time = document.createElement('div');\n        time.id = `forecast-${i}`-time;\n        time.classList.add('forecast-time')\n        time.textContent = getTimeFormat(forecastData.dt);\n\n        const image = (0,_todayWeather__WEBPACK_IMPORTED_MODULE_0__.createImage)(forecastData);\n\n        const temp = document.createElement('div');\n        temp.id = `forecast-${i}-temp`;\n        temp.classList = \"forecast-temp\"\n        temp.textContent = `${Math.round(forecastData.main.feels_like)} \\u00B0C`;\n\n        \n        forecastInfo.appendChild(day);\n        forecastInfo.appendChild(time);\n        forecastInfo.appendChild(image);\n        forecastInfo.appendChild(temp);\n        \n        parentNode.appendChild(forecastInfo);\n    }\n\n    return;\n}\n\nfunction getDateFormat(currentTime){\n    console.log(currentTime.getDay());\n    const DAYS = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n    let day = DAYS[currentTime.getDay()];\n    let date = currentTime.getDate();\n    let month = currentTime.getMonth()+1;\n\n    return `${day} ${date}/${month}`;\n}\nfunction getTimeFormat(currentTime){\n    let hour = currentTime.getHours().toString().padStart(2,'0');\n    if (hour > 12){\n        hour = hour-12; // forces 12-hour format\n    }\n    let AMPM = (0,_todayWeather__WEBPACK_IMPORTED_MODULE_0__.getAMPM)(hour);\n    let string = `${hour} ${AMPM}`\n\n    return string;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForecast);\n\n//# sourceURL=webpack://weather-app/./src/modules/forecast.js?");

/***/ }),

/***/ "./src/modules/todayWeather.js":
/*!*************************************!*\
  !*** ./src/modules/todayWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createImage\": () => (/* binding */ createImage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getAMPM\": () => (/* binding */ getAMPM),\n/* harmony export */   \"getweatherImageCode\": () => (/* binding */ getweatherImageCode)\n/* harmony export */ });\n\nfunction createTodayWeather(weatherData){\n    const todayWeather = document.createElement('div');\n    todayWeather.id = \"today-weather\";\n\n    \n    \n    todayWeather.appendChild(createImageContainer(weatherData)); //creates Image container\n    todayWeather.appendChild(createCityName(weatherData)) // creates City Name\n    todayWeather.appendChild(createTemperature(weatherData)); // creates teperature container\n    todayWeather.appendChild(createWeatherDesc(weatherData)); //creates the weather description\n    todayWeather.appendChild(createDataTime(weatherData)); // creates the weather data time\n    return todayWeather;\n}\n\nfunction createCityName(weatherData){\n    const cityName = document.createElement('div'); //Creates name of the city and appends to #today-weather\n    cityName.id = 'city-name-text';\n    cityName.textContent = `${weatherData.name.toUpperCase()}`\n    \n    return cityName;\n}\nfunction createImageContainer(weatherData){\n    // Image\n    const imageContainer = document.createElement(`div`);\n    imageContainer.classList.add(`image-container`);\n    imageContainer.appendChild(createImage(weatherData));\n    return imageContainer;\n}\n\nfunction createImage(weatherData){\n    const weatherImage = document.createElement('img');\n    weatherImage.src = ``;\n    weatherImage.src = `./img/${getweatherImageCode(weatherData)}.png`;\n    return weatherImage;\n}\n\nfunction createTemperature(weatherData){\n    const temp = document.createElement('div');\n    temp.id = `today-temperature`;\n    temp.textContent = `${Math.round(weatherData.main[\"feels_like\"])} \\u00B0C`;\n    return temp;\n    \n}\n\nfunction createWeatherDesc(weatherData){\n    const weatherDesc = document.createElement('div');\n    weatherDesc.id = `today-weather-desc`;\n    weatherDesc.textContent = `${weatherData.weather[0].description}`;\n    return weatherDesc;\n}\n\nfunction createDataTime(weatherData){\n    const dataTime = document.createElement('div');\n    dataTime.id = `today-data-time`;\n    dataTime.textContent = formatDate(weatherData.dt);\n    return dataTime; \n}\n\nfunction formatDate(unixDate){\n    const DAYS = [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\", \"Sunday\"];\n    const MONTHS = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\n    let currentTime = new Date(unixDate*1000);\n    let today = currentTime.getDay();\n    let date = currentTime.getDate();\n    let suffix = getSuffix(date);\n    let month = currentTime.getMonth();\n    let year = currentTime.getFullYear();\n    let hour = currentTime.getHours().toString().padStart(2,'0');\n    let minute = currentTime.getMinutes().toString().padStart(2,'0');\n    let AMPM = getAMPM(hour);\n    let string =  `${DAYS[today-1]} ${date}${suffix} ${MONTHS[month]} ${year} ${hour}:${minute} ${AMPM}`\n \n    return string;\n}\n\nfunction getSuffix(date){\n    let strdate = date.toString();\n    if (strdate.endsWith(\"1\")) {\n        return \"st\";\n    }\n    if (strdate.endsWith(\"2\")) {\n        return \"nd\";\n    }\n    if (strdate.endsWith(\"3\")) {\n        return \"rd\";\n    }\n    return \"th\";\n}\n\nfunction getAMPM(hour){\n    return (hour >= 12) ? \"PM\" : \"AM\";\n}\nfunction getweatherImageCode(weatherData){\n    // please refer to the below link for weather conditions and icons\n    // https://openweathermap.org/weather-conditions\n    const currentWeather = weatherData.weather[0].main;\n    switch (currentWeather){\n        case \"Clouds\": return \"cloud\";\n        case \"Clear\": return \"sun\";\n        case \"Snow\": return \"snow\";\n        case \"Rain\": return \"thunderstorm\";\n        case \"Drizzle\": return \"rain\";\n        case \"Thunderstorm\": return \"thunderstorm-bolt\";\n    }\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodayWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/todayWeather.js?");

/***/ }),

/***/ "./src/modules/weather-info":
/*!**********************************!*\
  !*** ./src/modules/weather-info ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayWeather */ \"./src/modules/todayWeather.js\");\n\n\nfunction createWeatherInfo(weatherData){\n    const weatherInfoContainer = document.createElement('div');\n    weatherInfoContainer.id= 'weather-info';\n\n    weatherInfoContainer.appendChild(createHeader()); // appends header\n\n    //Row 1\n    weatherInfoContainer.appendChild(createTemperature(weatherData));\n    weatherInfoContainer.appendChild(createHumidity(weatherData));\n    weatherInfoContainer.appendChild(createAtm(weatherData));\n    weatherInfoContainer.appendChild(createWindSpeed(weatherData));\n\n    //Row 2\n    weatherInfoContainer.appendChild(createWindDirection(weatherData));\n    weatherInfoContainer.appendChild(createSunrise(weatherData));\n    weatherInfoContainer.appendChild(createSunset(weatherData));\n    weatherInfoContainer.appendChild(createCloudiness(weatherData));\n    return weatherInfoContainer;\n}\n\nfunction createHeader(){\n    const header = document.createElement('div');\n    header.id = 'weather-info-header';\n    header.textContent = \"Today's Weather Details\".toUpperCase();\n    return header\n}\n\nfunction createTemperature(weatherData){ //Creates temperature div\n    const minTemp = weatherData.main.temp_min;\n    const maxTemp = weatherData.main.temp_max;\n\n    const title = \"Min | Max Temperature\";\n    const subtitle = `${minTemp} \\u00B0C  |  ${maxTemp} \\u00B0C`;\n    const id = \"temperature\";\n    const container = createInfo(title,subtitle,id);\n    return container;\n}\n\nfunction createHumidity(weatherData){ //Creates Humidity div\n    const humidity = weatherData.main.humidity;\n\n    const title = \"Humidity\";\n    const subtitle = `${humidity} %`;\n    const id = \"humidity\";\n    const container = createInfo(title,subtitle,id);\n    return container;\n}\n\nfunction createAtm(weatherData){ //Creates Humidity div\n    const atm = weatherData.main.pressure/10; //converts hPA to kPA\n\n    const title = \"Atmospheric Pressure\";\n    const subtitle = `${atm} kPa`;\n    const id = \"atm-pressure\";\n    const container = createInfo(title,subtitle,id);\n    return container;\n}\n\nfunction createWindSpeed(weatherData){ //Creates Humidity div\n    const windSpeed = weatherData.wind.speed; //in m/s\n\n    const title = \"Wind Speed\";\n    const subtitle = `${windSpeed} m/s`;\n    const id = \"wind-speed\";\n    const container = createInfo(title,subtitle,id);\n    return container;\n}\n\nfunction createWindDirection(weatherData){ //Creates wind direction div\n    const windDirection = degToCompass(weatherData.wind.deg); //in compass direction\n\n    const title = \"Wind Direction\";\n    const subtitle = `${windDirection}`;\n    const id = \"wind-direction\";\n    const container = createInfo(title,subtitle,id);\n    return container;\n}\n\nfunction createSunrise(weatherData){ //Creates sunrise div\n    const sunriseTime = new Date(weatherData.sys.sunrise * 1000); \n    const sunriseTimeHour = (sunriseTime.getHours()).toString().padStart(2,'0');\n    const sunriseTimeMinute = sunriseTime.getMinutes().toString().padStart(2,'0');\n    const sunriseAMPM = (0,_todayWeather__WEBPACK_IMPORTED_MODULE_0__.getAMPM)(sunriseTimeHour);\n\n\n    const title = \"Sunrise\";\n    const subtitle = `${sunriseTimeHour}:${sunriseTimeMinute} ${sunriseAMPM}`;\n    const id = \"sunrise\";\n    const container = createInfo(title,subtitle,id);\n    return container;\n}\n\nfunction createSunset(weatherData){ //Creates sunset div\n    const sunsetTime = new Date(weatherData.sys.sunset * 1000);\n    const sunsetTimeHour = (Math.abs(sunsetTime.getHours())).toString().padStart(2,'0');\n    const sunsetTimeMinute = sunsetTime.getMinutes().toString().padStart(2,'0');\n    const sunsetAMPM = (0,_todayWeather__WEBPACK_IMPORTED_MODULE_0__.getAMPM)(sunsetTimeHour);\n\n\n    const title = \"Sunset\";\n    const subtitle = `${sunsetTimeHour}:${sunsetTimeMinute} ${sunsetAMPM}`;\n    const id = \"sunset\";\n    const container = createInfo(title,subtitle,id);\n    return container;\n}\nfunction createCloudiness(weatherData){ //Creates Humidity div\n   const cloudiness = weatherData.clouds.all; //in %\n\n\n    const title = \"Cloudiness\";\n    const subtitle = `${cloudiness} %`;\n    const id = \"cloudiness\";\n    const container = createInfo(title,subtitle,id);\n    return container;\n}\n\nfunction createInfo(title, subtitle, id){\n    const info = document.createElement('div');\n    info.id = `weather-info-${id}`;\n    info.classList.add(\"weather-info-info\")\n\n    const img_container = document.createElement('div');\n    img_container.classList.add('weather-info-img-container');\n\n    const info_img = document.createElement('img');\n    info_img.id = `${info.id}-img`;\n    info_img.classList.add(\"weather-info-img\");\n    info_img.src = `img/${id}.png`; // GET SOURCE\n    \n    img_container.appendChild(info_img)\n\n    const titleText = document.createElement('div');\n    titleText.id = `weather-info-${id}-title`;\n    titleText.classList.add(`weather-info-title`);\n    titleText.textContent = title.toUpperCase();\n\n    const subtitleText = document.createElement('div');\n    subtitleText.id = `weather-info-${id}-subtitle`;\n    subtitleText.classList.add(`weather-info-subtitle`);\n    subtitleText.textContent = subtitle;\n\n    info.appendChild(img_container);\n    info.appendChild(titleText);\n    info.appendChild(subtitleText);\n\n    return info;\n}\n\n\n\nfunction createTextElement(text, id){\n    const textElement = document.createElement(`div`);\n    textElement.textContent = text;\n    textElement.id = id;\n    return textElement;\n}\n\nfunction degToCompass(num) {\n    // https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words\n    var val = Math.floor((num / 22.5) + 0.5);\n    var arr = [\"N\", \"NNE\", \"NE\", \"ENE\", \"E\", \"ESE\", \"SE\", \"SSE\", \"S\", \"SSW\", \"SW\", \"WSW\", \"W\", \"WNW\", \"NW\", \"NNW\"];\n    return arr[(val % 16)];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherInfo);\n\n//# sourceURL=webpack://weather-app/./src/modules/weather-info?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;