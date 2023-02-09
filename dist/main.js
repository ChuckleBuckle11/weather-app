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

/***/ "./src/modules/fetchWeather.js":
/*!*************************************!*\
  !*** ./src/modules/fetchWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst searchField = document.querySelector('#search-box');\nconst content = document.querySelector(`#content`);\n\nasync function fetchWeather() {\n    try {\n        //if search bar is empty, return and trigger invalid\n        if (searchField.validity.valueMissing) {\n            searchField.setCustomValidity(\"Please enter a valid input.\")\n            return\n        }\n\n        // Gets City value in search bar\n        let searchCity = searchField.value;\n        let unit = \"metric\"; // display units in json, metric/imperial/kelvin\n        \n        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=32cc350ce67f8346a60c40673c36dfff&units=${unit}`, { mode: 'cors' });\n        \n        if (!response.ok){ //throws an error if city does not exist\n            alert(\"Please enter a valid city.\")\n            throw new Error(response.statusText);\n        }\n\n        const weatherData = await response.json();\n\n        updateDisplay(weatherData);\n        return weatherData;\n    }\n    catch(error){\n        console.log(error)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);\n\nfunction updateDisplay(weatherData){\n    console.log(weatherData)\n    console.log(weatherData.name)\n    \n    const mainText = createTextElement(content, `${weatherData.name}`, 'main-text')\n} \n\n\nfunction createTextElement(parentNode, text, id){\n    const textElement = document.createElement(`div`);\n    textElement.textContent = text;\n    textElement.id = id;\n\n    parentNode.appendChild(textElement);\n    return textElement;\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/fetchWeather.js?");

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