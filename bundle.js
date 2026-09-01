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

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildAboutDiv)\n/* harmony export */ });\nfunction buildAboutDiv() {\r\n\r\n  const contentDiv = document.querySelector(\"#content\");\r\n\r\n\r\n  const title = document.createElement(\"h1\");\r\n  const subtitle = document.createElement(\"p\");\r\n  const subtextContainer = document.createElement(\"div\");\r\n  const subtext = document.createElement(\"p\");\r\n  const subtext2 = document.createElement(\"p\");\r\n  const summary = document.createElement(\"p\");\r\n  const contactInfoDiv = document.createElement(\"div\");\r\n  const contactInfo = document.createElement(\"p\");\r\n  const contactInfo2 = document.createElement(\"p\");\r\n  const contactInfo3 = document.createElement(\"p\");\r\n\r\n  title.setAttribute(\"class\", \"title\");\r\n  subtitle.setAttribute(\"class\", \"subtitle\");\r\n  subtextContainer.setAttribute(\"class\", \"subDiv\");\r\n  subtext.setAttribute(\"class\", \"subtext\");\r\n  subtext2.setAttribute(\"class\", \"subtext2\");\r\n  summary.setAttribute(\"class\", \"summary\");\r\n  contactInfoDiv.setAttribute(\"class\", \"contactInfoDiv\");\r\n  contactInfo.setAttribute(\"class\", \"contactInfo\");\r\n  contactInfo2.setAttribute(\"class\", \"contactInfo\");\r\n  contactInfo3.setAttribute(\"class\", \"contactInfo\");\r\n\r\n  contentDiv.innerHTML = \"\";\r\n\r\n  title.textContent = \"Tacos Everyday\";\r\n  subtitle.textContent = \"Tacos. Tacos. And more tacos!\";\r\n  subtext.textContent =\r\n    \"We believe tacos should be eaten everyday! So we created Tacos Everyday to make sure you can get your taco fix any day of the week!\";\r\n  contactInfo.textContent = \"Reach out to us anytime: 555-555-5555\";\r\n  contactInfo2.textContent = \"Email us at: info@tacoseveryday.com\";\r\n  contactInfo3.textContent =\r\n    \"See us in person at: 123 Taco Street, Taco Town, TX 12345\";\r\n\r\n  contentDiv.appendChild(title);\r\n  contentDiv.appendChild(subtitle);\r\n  contentDiv.appendChild(subtextContainer);\r\n  subtextContainer.appendChild(subtext);\r\n  subtextContainer.appendChild(contactInfoDiv);\r\n  contactInfoDiv.appendChild(contactInfo);\r\n  contactInfoDiv.appendChild(contactInfo2);\r\n  contactInfoDiv.appendChild(contactInfo3);\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildHomeDiv)\n/* harmony export */ });\nfunction buildHomeDiv() {\r\n\r\n  const contentDiv = document.querySelector(\"#content\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  const subtitle = document.createElement(\"p\");\r\n  const subtextContainer = document.createElement(\"div\");\r\n  const subtext = document.createElement(\"p\");\r\n  const subtext2 = document.createElement(\"p\");\r\n  const summary = document.createElement(\"p\");\r\n\r\n  title.setAttribute(\"class\", \"title\");\r\n  subtitle.setAttribute(\"class\", \"subtitle\");\r\n  subtextContainer.setAttribute(\"class\", \"subDiv\");\r\n  subtext.setAttribute(\"class\", \"subtext\");\r\n  subtext2.setAttribute(\"class\", \"subtext2\");\r\n  summary.setAttribute(\"class\", \"summary\");\r\n\r\n  contentDiv.innerHTML = \"\";\r\n\r\n  title.textContent = \"Tacos Everyday\";\r\n  subtitle.textContent = \"Tacos. Tacos. And more tacos!\";\r\n  subtext.textContent = \"All tacos, all the time. Come and get 'em!\";\r\n  subtext2.textContent =\r\n    \"Whatcha craving? Shrimp tacos? Chicken tacos? Pork Tacos? Street Tacos? Regular Tacos? None? Create your own!\";\r\n  summary.textContent =\r\n    \"Here at Tacos Everyday we believe tacos should be eaten everyday! No need to wait for Taco Tuesday any longer! We always use the freshest ingredients and the best meats to make sure your tacos are always delicious!\";\r\n\r\n  contentDiv.appendChild(title);\r\n  contentDiv.appendChild(subtitle);\r\n  contentDiv.appendChild(subtextContainer);\r\n  contentDiv.appendChild(summary);\r\n  subtextContainer.appendChild(subtext);\r\n  subtextContainer.appendChild(subtext2);\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nconst homeBtn = document.querySelector(\".home\");\r\nconst aboutBtn = document.querySelector(\".about\");\r\nconst menuBtn = document.querySelector(\".menu\");\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nhomeBtn.addEventListener(\"click\", () => {\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\naboutBtn.addEventListener(\"click\", () => {\r\n  (0,_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMenuDiv)\n/* harmony export */ });\nfunction buildMenuDiv() {\r\n  const contentDiv = document.querySelector(\"#content\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  const subtitle = document.createElement(\"p\");\r\n  const subtextContainer = document.createElement(\"div\");\r\n  const subtext = document.createElement(\"p\");\r\n  const tacoImg = document.createElement(\"img\");\r\n  tacoImg.src = \"/assets/taco.png\";\r\n  const shrimpImg = document.createElement(\"img\");\r\n  shrimpImg.src = \"/assets/shrimp.png\";\r\n  const chickenImg = document.createElement(\"img\");\r\n  chickenImg.src = \"/assets/chicken.png\";\r\n  const menuContainer = document.createElement(\"div\");\r\n  const menuTitle = document.createElement(\"p\");\r\n  const itemTitle = document.createElement(\"p\");\r\n  const itemTitle2 = document.createElement(\"p\");\r\n  const itemTitle3 = document.createElement(\"p\");\r\n  const itemTitle4 = document.createElement(\"p\");\r\n  const itemTitle5 = document.createElement(\"p\");\r\n  const itemTitle6 = document.createElement(\"p\");\r\n  const itemInfo = document.createElement(\"p\");\r\n  const itemInfo2 = document.createElement(\"p\");\r\n  const itemInfo3 = document.createElement(\"p\");\r\n  const itemInfo4 = document.createElement(\"p\");\r\n  const itemInfo5 = document.createElement(\"p\");\r\n  const itemPrice = document.createElement(\"span\");\r\n  const itemPrice2 = document.createElement(\"span\");\r\n  const itemPrice3 = document.createElement(\"span\");\r\n  const itemPrice4 = document.createElement(\"span\");\r\n  const itemPrice5 = document.createElement(\"span\");\r\n\r\n  title.setAttribute(\"class\", \"title\");\r\n  subtitle.setAttribute(\"class\", \"subtitle\");\r\n  subtextContainer.setAttribute(\"class\", \"subDiv\");\r\n  subtext.setAttribute(\"class\", \"subtext\");\r\n  menuContainer.setAttribute(\"class\", \"menuContainer\");\r\n  menuTitle.setAttribute(\"class\", \"menuTitle\");\r\n  itemTitle.setAttribute(\"class\", \"itemTitle\");\r\n  itemTitle2.setAttribute(\"class\", \"itemTitle2\");\r\n  itemTitle3.setAttribute(\"class\", \"itemTitle4\");\r\n  itemTitle4.setAttribute(\"class\", \"itemTitle5\");\r\n  itemTitle5.setAttribute(\"class\", \"itemTitle6\");\r\n  itemInfo.setAttribute(\"class\", \"itemInfo\");\r\n  itemInfo2.setAttribute(\"class\", \"itemInfo2\");\r\n  itemInfo3.setAttribute(\"class\", \"itemInfo3\");\r\n  itemInfo4.setAttribute(\"class\", \"itemInfo4\");\r\n  itemInfo5.setAttribute(\"class\", \"itemInfo5\");\r\n  itemPrice.setAttribute(\"class\", \"itemPrice\");\r\n  itemPrice2.setAttribute(\"class\", \"itemPrice2\");\r\n  itemPrice3.setAttribute(\"class\", \"itemPrice3\");\r\n  itemPrice4.setAttribute(\"class\", \"itemPrice4\");\r\n  itemPrice5.setAttribute(\"class\", \"itemPrice5\");\r\n  tacoImg.setAttribute(\"class\", \"tacoImg\");\r\n  chickenImg.setAttribute(\"class\", \"chickenImg\");\r\n  shrimpImg.setAttribute(\"class\", \"shrimpImg\");\r\n  contentDiv.innerHTML = \"\";\r\n\r\n  title.textContent = \"Tacos Everyday\";\r\n  subtitle.textContent = \"Tacos. Tacos. And more tacos!\";\r\n  menuTitle.textContent = \"Menu: \";\r\n  itemTitle.textContent = \"Shrimp Tacos\";\r\n  itemTitle2.textContent = \"Chicken Tacos\";\r\n  itemTitle3.textContent = \"Street Tacos\";\r\n  itemTitle4.textContent = \"Regular Tacos\";\r\n  itemTitle5.textContent =\r\n    \"Create Your Own Tacos - think subway, but with tacos!\";\r\n  itemInfo.textContent =\r\n    \"Shrimp tacos are made with fresh shrimp, lettuce, and our special sauce.\";\r\n  itemInfo2.textContent =\r\n    \"Chicken tacos are made with tender chicken, lettuce, and our special sauce.\";\r\n  itemInfo3.textContent =\r\n    \"Street tacos are made with seasoned meat, lettuce, and our special sauce.\";\r\n  itemInfo4.textContent =\r\n    \"Regular tacos are made with our signature blend of meats, lettuce, and our special sauce.\";\r\n  itemInfo5.textContent =\r\n    \"Create your own tacos with our variety of fillings and salsas!\";\r\n  itemPrice.textContent = \"9.99\";\r\n  itemPrice2.textContent = \"9.99\";\r\n  itemPrice3.textContent = \"9.99\";\r\n  itemPrice4.textContent = \"9.99\";\r\n  itemPrice5.textContent = \"9.99\";\r\n\r\n  contentDiv.appendChild(title);\r\n  contentDiv.appendChild(subtitle);\r\n  contentDiv.appendChild(menuContainer);\r\n  menuContainer.appendChild(menuTitle);\r\n  menuContainer.appendChild(itemTitle);\r\n  menuContainer.appendChild(itemInfo);\r\n  menuContainer.appendChild(shrimpImg);\r\n  menuContainer.appendChild(itemPrice);\r\n  menuContainer.appendChild(itemTitle2);\r\n  menuContainer.appendChild(itemInfo2);\r\n  menuContainer.appendChild(chickenImg);\r\n  menuContainer.appendChild(itemPrice2);\r\n  menuContainer.appendChild(itemTitle3);\r\n  menuContainer.appendChild(itemInfo3);\r\n  menuContainer.appendChild(itemPrice3);\r\n  menuContainer.appendChild(itemTitle4);\r\n  menuContainer.appendChild(itemInfo4);\r\n  menuContainer.appendChild(tacoImg);\r\n  menuContainer.appendChild(itemPrice4);\r\n  menuContainer.appendChild(itemTitle5);\r\n  menuContainer.appendChild(itemInfo5);\r\n  menuContainer.appendChild(itemPrice5);\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;