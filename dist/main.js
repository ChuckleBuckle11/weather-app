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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchWeather.js */ \"./src/modules/fetchWeather.js\");\n//weather app API key 32cc350ce67f8346a60c40673c36dfff\n\n\n\n\nconst searchButton = document.querySelector(`#search-button`);\nconst searchBox = document.querySelector(`#search-box`);\n\nsearchButton.onclick = _modules_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nsearchBox.addEventListener(\"keyup\", event => {\n    if (event.key != \"Enter\") return;\n    searchButton.click();\n    event.preventDefault();\n    })\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayController":
/*!***************************************!*\
  !*** ./src/modules/displayController ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// This controls any display changes\nconst content = document.querySelector(`#main-weather-content`);\nconst DATES = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\" ,\"September\", \"October\" ,\"November\",\"December\"]\n\nfunction updateDisplay(weatherData){\n    console.log(weatherData) //to remove\n    content.textContent = \"\"; //flushes #main-weather-content\n\n    // Creates the weather header and appends the city name\n    const weatherHeader = document.createElement('div');\n    weatherHeader.classList.add('weather-header');\n    content.appendChild(weatherHeader); //appends the Weather Header to main content\n    const cityNameText = createTextElement(weatherHeader, `${weatherData.name}`, 'city-name-text');\n  \n    // Time container\n    const timeContainer = document.createElement('div');\n    timeContainer.classList.add('time-container');\n    timeContainer.appendChild(createDate(weatherData));\n    timeContainer.appendChild(createTime(weatherData));\n    weatherHeader.appendChild(timeContainer);\n    \n    // Image\n    const imageContainer = document.createElement(`div`);\n    imageContainer.classList.add(`image-container`);\n    imageContainer.appendChild(createImage(weatherData));\n    content.appendChild(imageContainer);\n\n    const weatherInfo = document.createElement('div');\n    weatherInfo.classList.add('weather-info');\n    content.appendChild(weatherInfo);\n    weatherInfo.appendChild(createTemp(weatherData));\n    weatherInfo.appendChild(createWeather(weatherData));\n    weatherInfo.appendChild(createWind(weatherData));\n} \n\n\nfunction createTime(weatherData){\n    \n    let currentTime = new Date(weatherData.dt*1000);\n    let currentMonth = currentTime.getMonth();\n    let currentDate = currentTime.getDate();\n    let timeHour = currentTime.getHours();\n    let timeMinute = currentTime.getMinutes();\n\n    const timeText = document.createElement(`div`);\n    timeText.textContent = `${DATES[currentMonth-1]} ${currentDate}, ${timeHour}:${timeMinute.toString().padStart(2,0)}`;\n    timeText.id = `time-text`;\n    return timeText;\n}\n\nfunction createDate(weatherData){\n    const dateText = document.createElement(`div`);\n    dateText.textContent = `Updated as of:`;//`${currentTime.getDate()}/${currentTime.getUTCMonth()}`;\n    dateText.id = `date-text`;\n    return dateText;\n}\n\nfunction createImage(weatherData){\n    const weatherImage = document.createElement('img');\n    weatherImage.src = `./img/${getweatherImageCode(weatherData)}.png`;\n    return weatherImage;\n\n}\n\nfunction createTemp(weatherData){\n    const temp = createTextElement(content, `Min: ${weatherData.main.temp_min}\\u00B0C | Max ${weatherData.main.temp_max} \\u00B0C`, `temp-text`);\n    return temp;\n}\n\nfunction createWeather(weatherData){\n    const weather = createTextElement(content, `Weather: ${weatherData.weather[0].main}`,'weather-text');\n    return weather;\n}\n\nfunction createWind(weatherData){\n    const wind = createTextElement(content, `Wind speed: ${weatherData.wind.speed} m/s`,'wind-text');\n    return wind;\n}\n\n\n\nfunction createTextElement(parentNode, text, id){\n    const textElement = document.createElement(`div`);\n    textElement.textContent = text;\n    textElement.id = id;\n\n    parentNode.appendChild(textElement);\n    return textElement;\n}\n\nfunction getweatherImageCode(weatherData){\n    // please refer to the below link for weather conditions and icons\n    // https://openweathermap.org/weather-conditions\n    const currentWeather = weatherData.weather[0].main;\n    switch (currentWeather){\n        case \"Clouds\": return \"cloud\";\n        case \"Clear\": return \"sun\";\n        case \"Snow\": return \"snow\";\n        case \"Rain\": return \"thunderstorm\";\n        case \"Drizzle\": return \"rain\";\n        case \"Thunderstorm\": return \"thunderstorm-bolt\";\n    }\n\n}\n\n\n// function getweatherImageCode(weatherData){\n//     // please refer to the below link for weather conditions and icons\n//     // https://openweathermap.org/weather-conditions\n//     const currentWeather = weatherData.weather[0].main;\n//     switch (currentWeather){\n//         case \"Clouds\": return \"10d\";\n//         case \"Clear\": return \"01d\";\n//         case \"Snow\": return \"13d\";\n//         case \"Rain\": return \"09d\";\n//         case \"Drizzle\": return \"10d\";\n//         case \"Thunderstorm\": return \"11d\";\n//     }\n\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDisplay);\n\n//# sourceURL=webpack://weather-app/./src/modules/displayController?");

/***/ }),

/***/ "./src/modules/fetchWeather.js":
/*!*************************************!*\
  !*** ./src/modules/fetchWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/modules/displayController\");\n\n\nconst searchField = document.querySelector('#search-box');\nconst content = document.querySelector(`#content`);\nconst loadingScreen = document.createElement('p');\nloadingScreen.id = \"loading-screen\";\nconst mainWeatherContent = document.querySelector(\"#main-weather-content\");\nasync function fetchWeather() {\n    try {\n        //if search bar is empty, return and trigger invalid\n        if (searchField.validity.valueMissing) {\n            searchField.setCustomValidity(\"Please enter a valid input.\")\n            return\n        }\n\n        // Gets City value in search bar\n        let searchCity = searchField.value;\n        let unit = \"metric\"; // display units in json, metric/imperial/kelvin\n        mainWeatherContent.textContent = \"\"\n        displayLoading();\n        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, { mode: 'cors' });\n        \n        if (!response.ok){ //throws an error if city does not exist\n            alert(\"Please enter a valid city.\")\n            throw new Error(response.statusText);\n        }\n\n        const weatherData = await response.json();\n        // hideLoading();\n        (0,_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData);\n        return weatherData;\n    }\n    catch(error){\n        console.log(error)\n    }\n}\n\nfunction displayLoading(){\n    \n    mainWeatherContent.appendChild(loadingScreen);\n    loadingScreen.classList.add(\"display\");\n    // to Stop loading after some time\n    // setTimeout(()=>{\n    //     hideLoading();\n    // },5000);\n}\n\nfunction hideLoading(){\n    loadingScreen.classList.remove(\"display\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/fetchWeather.js?");

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