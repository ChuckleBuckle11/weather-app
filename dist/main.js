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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchWeather.js */ \"./src/modules/fetchWeather.js\");\n//weather app API key 32cc350ce67f8346a60c40673c36dfff\n\n\n\n\nconst searchButton = document.querySelector(`#search-button`);\nconst searchBox = document.querySelector(`#search-box`);\n\n// Upon button click, fetches weather data\nsearchButton.onclick = _modules_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nsearchBox.addEventListener(\"keyup\", event => {\n    if (event.key != \"Enter\") return;\n    searchButton.click();\n    event.preventDefault();\n    })\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayWeather */ \"./src/modules/todayWeather.js\");\n/* harmony import */ var _weather_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-info */ \"./src/modules/weather-info\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast */ \"./src/modules/forecast.js\");\n\n\n\n\n// This controls any display changes\nconst mainWeatherContent = document.querySelector(`#main-weather-content`);\nconst DATES = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\" ,\"September\", \"October\" ,\"November\",\"December\"]\n\nfunction updateDisplay(weatherData){\n    \n    console.log(weatherData) //to remove\n    flushMain(); //flushes #main-weather-content\n    showMain();\n\n    mainWeatherContent.appendChild((0,_todayWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData));\n    mainWeatherContent.appendChild((0,_forecast__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(weatherData));\n    mainWeatherContent.appendChild((0,_weather_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData));\n\n} \n\nfunction showMain(){\n    mainWeatherContent.classList.add(\"active\");\n}\nfunction flushMain(){\n    mainWeatherContent.textContent = \"\";\n}\n\n\n\n\n// function getweatherImageCode(weatherData){\n//     // please refer to the below link for weather conditions and icons\n//     // https://openweathermap.org/weather-conditions\n//     const currentWeather = weatherData.weather[0].main;\n//     switch (currentWeather){\n//         case \"Clouds\": return \"10d\";\n//         case \"Clear\": return \"01d\";\n//         case \"Snow\": return \"13d\";\n//         case \"Rain\": return \"09d\";\n//         case \"Drizzle\": return \"10d\";\n//         case \"Thunderstorm\": return \"11d\";\n//     }\n\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDisplay);\n\n//# sourceURL=webpack://weather-app/./src/modules/displayController.js?");

/***/ }),

/***/ "./src/modules/fetchWeather.js":
/*!*************************************!*\
  !*** ./src/modules/fetchWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ \"./src/modules/displayController.js\");\n\n\nconst searchField = document.querySelector('#search-box');\nconst loadingScreen = document.createElement('p');\nloadingScreen.id = \"loading-screen\";\nconst mainWeatherContent = document.querySelector(\"#main-weather-content\");\n\n\nasync function fetchWeather() {\n        //if search bar is empty, return and trigger invalid\n        if (searchField.validity.valueMissing) {\n            searchField.setCustomValidity(\"Please enter a valid input.\")\n            return\n        }\n\n        // Gets City value in search bar\n        let searchCity = searchField.value;\n        let unit = \"metric\"; // display units in json, metric/imperial/kelvin\n        mainWeatherContent.textContent = \"\"\n        displayLoading();\n        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, { mode: 'cors' });\n        \n        if (!response.ok){ //throws an error if city does not exist\n            alert(\"Please enter a valid city.\")\n            throw new Error(response.statusText);\n        }\n\n        const weatherData = await response.json();\n        hideLoading();\n        (0,_displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData);\n        return weatherData;\n\n\n}\n\nfunction displayLoading(){\n    \n    mainWeatherContent.appendChild(loadingScreen);\n    loadingScreen.classList.add(\"display\");\n    // to Stop loading after some time\n    // setTimeout(()=>{\n    //     hideLoading();\n    // },5000);\n}\n\nfunction hideLoading(){\n    loadingScreen.classList.remove(\"display\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/fetchWeather.js?");

/***/ }),

/***/ "./src/modules/forecast.js":
/*!*********************************!*\
  !*** ./src/modules/forecast.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createForecast(weatherForecastData){\n    const forecast = document.createElement('div');\n    forecast.id = \"weather-forecast\"\n\n\n    return forecast;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForecast);\n\n//# sourceURL=webpack://weather-app/./src/modules/forecast.js?");

/***/ }),

/***/ "./src/modules/todayWeather.js":
/*!*************************************!*\
  !*** ./src/modules/todayWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createTodayWeather(weatherData){\n    const todayWeather = document.createElement('div');\n    todayWeather.id = \"today-weather\";\n\n    \n    \n    todayWeather.appendChild(createImageContainer(weatherData)); //creates Image container\n    todayWeather.appendChild(createCityName(weatherData)) // creates City Name\n    todayWeather.appendChild(createTemperature(weatherData)); // creates teperature container\n    todayWeather.appendChild(createWeatherDesc(weatherData)); //creates the weather description\n    todayWeather.appendChild(createDataTime(weatherData)); // creates the weather data time\n    return todayWeather;\n}\n\nfunction createCityName(weatherData){\n    const cityName = document.createElement('div'); //Creates name of the city and appends to #today-weather\n    cityName.id = 'city-name-text';\n    cityName.textContent = `${weatherData.name}`\n    \n    return cityName;\n}\nfunction createImageContainer(weatherData){\n    // Image\n    const imageContainer = document.createElement(`div`);\n    imageContainer.classList.add(`image-container`);\n    imageContainer.appendChild(createImage(weatherData));\n    return imageContainer;\n}\n\nfunction createImage(weatherData){\n    const weatherImage = document.createElement('img');\n    weatherImage.src = ``;\n    weatherImage.src = `/dist/img/${getweatherImageCode(weatherData)}.png`;\n    return weatherImage;\n}\n\nfunction createTemperature(weatherData){\n    const temp = document.createElement('div');\n    temp.id = `today-temperature`;\n    temp.textContent = `${weatherData.main[\"feels_like\"]} \\u00B0C`;\n    return temp;\n    \n}\n\nfunction createWeatherDesc(weatherData){\n    const weatherDesc = document.createElement('div');\n    weatherDesc.id = `today-weather-desc`;\n    weatherDesc.textContent = `${weatherData.weather[0].main}`;\n    return weatherDesc;\n}\n\nfunction createDataTime(weatherData){\n    const dataTime = document.createElement('div');\n    dataTime.id = `today-data-time`;\n    dataTime.textContent = formatDate(weatherData.dt);\n    return dataTime; \n}\n\nfunction formatDate(unixDate){\n    const DAYS = [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\", \"Sunday\"];\n    const MONTHS = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\n    let currentTime = new Date(unixDate*1000);\n    let today = currentTime.getDay();\n    let date = currentTime.getDate();\n    let suffix = getSuffix(date);\n    let month = currentTime.getMonth();\n    let year = currentTime.getFullYear();\n    let hour = currentTime.getHours();\n    let minute = currentTime.getMinutes();\n    let AMPM = getAMPM(hour);\n    let string =  `${DAYS[today-1]} ${date}${suffix} ${MONTHS[month]} ${year} ${hour}:${minute} ${AMPM}`\n \n    console.log(currentTime);\n    return string;\n}\n\nfunction getSuffix(date){\n    let strdate = date.toString();\n    if (strdate.endsWith(\"1\")) {\n        return \"st\";\n    }\n    if (strdate.endsWith(\"2\")) {\n        return \"nd\";\n    }\n    if (strdate.endsWith(\"3\")) {\n        return \"rd\";\n    }\n    return \"th\";\n}\n\nfunction getAMPM(hour){\n    return (hour >= 12) ? \"PM\" : \"AM\";\n}\nfunction getweatherImageCode(weatherData){\n    // please refer to the below link for weather conditions and icons\n    // https://openweathermap.org/weather-conditions\n    const currentWeather = weatherData.weather[0].main;\n    switch (currentWeather){\n        case \"Clouds\": return \"cloud\";\n        case \"Clear\": return \"sun\";\n        case \"Snow\": return \"snow\";\n        case \"Rain\": return \"thunderstorm\";\n        case \"Drizzle\": return \"rain\";\n        case \"Thunderstorm\": return \"thunderstorm-bolt\";\n    }\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodayWeather);\n\n//# sourceURL=webpack://weather-app/./src/modules/todayWeather.js?");

/***/ }),

/***/ "./src/modules/weather-info":
/*!**********************************!*\
  !*** ./src/modules/weather-info ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createWeatherInfo(weatherData){\n    const weatherInfoContainer = document.createElement('div');\n    weatherInfoContainer.classList.add('weather-info');\n    const temp = createTextElement(`Min: ${weatherData.main.temp_min}\\u00B0C | Max ${weatherData.main.temp_max} \\u00B0C`, `temp-text`);\n    const weather = createTextElement(`Weather: ${weatherData.weather[0].main}`,'weather-text');\n    const windSpeed = createTextElement(`Wind speed: ${weatherData.wind.speed} m/s`,'wind-text');\n\n\n    weatherInfoContainer.appendChild(temp);\n    weatherInfoContainer.appendChild(weather);\n    weatherInfoContainer.appendChild(windSpeed);\n    return weatherInfoContainer;\n}\n\n\nfunction createTextElement(text, id){\n    const textElement = document.createElement(`div`);\n    textElement.textContent = text;\n    textElement.id = id;\n    return textElement;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherInfo);\n\n//# sourceURL=webpack://weather-app/./src/modules/weather-info?");

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