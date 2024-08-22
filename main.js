/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _reviews_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews-load */ \"./src/reviews-load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-load */ \"./src/menu-load.js\");\n\n\n\n\nconst navbar = document.querySelector(\".navbar\");\nconst content = document.querySelector(\"#content\");\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nnavbar.addEventListener(\"click\", function (e) {\n  const source = e.target;\n  if (source != this) {\n    const id = source.id;\n    removeChildren(content);\n    switch (id) {\n      case \"home\":\n        (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        break;\n      case \"menu\":\n        (0,_menu_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        break;\n      case \"reviews\":\n        (0,_reviews_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        break;\n    }\n  }\n});\n\nconst removeChildren = (node) => {\n  while (node.hasChildNodes()) node.removeChild(node.firstChild);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUNEO0FBQ047O0FBRW5DO0FBQ0E7QUFDQSxzREFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBZTtBQUN2QjtBQUNBO0FBQ0EsUUFBUSxzREFBUTtBQUNoQjtBQUNBO0FBQ0EsUUFBUSx5REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgTG9hZFJldmlld3MgZnJvbSBcIi4vcmV2aWV3cy1sb2FkXCI7XG5pbXBvcnQgTG9hZE1lbnUgZnJvbSBcIi4vbWVudS1sb2FkXCI7XG5cbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbkluaXRpYWxQYWdlTG9hZCgpO1xubmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBzb3VyY2UgPSBlLnRhcmdldDtcbiAgaWYgKHNvdXJjZSAhPSB0aGlzKSB7XG4gICAgY29uc3QgaWQgPSBzb3VyY2UuaWQ7XG4gICAgcmVtb3ZlQ2hpbGRyZW4oY29udGVudCk7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgSW5pdGlhbFBhZ2VMb2FkKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgTG9hZE1lbnUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmV2aWV3c1wiOlxuICAgICAgICBMb2FkUmV2aWV3cygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCByZW1vdmVDaGlsZHJlbiA9IChub2RlKSA9PiB7XG4gIHdoaWxlIChub2RlLmhhc0NoaWxkTm9kZXMoKSkgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoadMenu)\n/* harmony export */ });\nfunction LoadMenu() {\n  const content = document.querySelector(\"#content\");\n\n  const name = document.createElement(\"h1\");\n  name.textContent = \"ERROR!!\";\n  const text = document.createElement(\"p\");\n  text.textContent = `ERROR!`;\n  content.appendChild(name);\n  content.appendChild(text);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtbG9hZC5qcz85OTg5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBcIkVSUk9SISFcIjtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gYEVSUk9SIWA7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu-load.js\n");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpeg */ \"./src/restaurant.jpeg\");\n\n\nfunction InitialPageLoad() {\n  const content = document.querySelector(\"#content\");\n  const image = document.createElement(\"img\");\n  image.src = _restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  const heading = document.createElement(\"h1\");\n  heading.textContent = `Opulent Bites & Play`;\n  const text = document.createElement(\"p\");\n  text.textContent = `This exclusive family-friendly restaurant caters to the world's elite,\n        offering a luxurious dining experience where billionaires can indulge in\n        gourmet cuisine while their children enjoy a private, state-of-the-art\n        play area. The restaurant features a menu crafted by Michelin-starred\n        chefs, with dishes made from the finest ingredients sourced globally.\n        The interior is a blend of elegance and whimsy, with custom-made\n        furniture and interactive art installations that captivate both adults\n        and kids. With impeccable service, personalized menus for children, and\n        discreet security, Opulent Bites & Play ensures an unforgettable\n        experience for the whole family.`;\n  content.appendChild(heading);\n  content.appendChild(text);\n  content.appendChild(image);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEOztBQUVqQztBQUNmO0FBQ0E7QUFDQSxjQUFjLDZDQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzP2JlY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlc3RhdXJhbnRJbWFnZSBmcm9tIFwiLi9yZXN0YXVyYW50LmpwZWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5pdGlhbFBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IHJlc3RhdXJhbnRJbWFnZTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IGBPcHVsZW50IEJpdGVzICYgUGxheWA7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IGBUaGlzIGV4Y2x1c2l2ZSBmYW1pbHktZnJpZW5kbHkgcmVzdGF1cmFudCBjYXRlcnMgdG8gdGhlIHdvcmxkJ3MgZWxpdGUsXG4gICAgICAgIG9mZmVyaW5nIGEgbHV4dXJpb3VzIGRpbmluZyBleHBlcmllbmNlIHdoZXJlIGJpbGxpb25haXJlcyBjYW4gaW5kdWxnZSBpblxuICAgICAgICBnb3VybWV0IGN1aXNpbmUgd2hpbGUgdGhlaXIgY2hpbGRyZW4gZW5qb3kgYSBwcml2YXRlLCBzdGF0ZS1vZi10aGUtYXJ0XG4gICAgICAgIHBsYXkgYXJlYS4gVGhlIHJlc3RhdXJhbnQgZmVhdHVyZXMgYSBtZW51IGNyYWZ0ZWQgYnkgTWljaGVsaW4tc3RhcnJlZFxuICAgICAgICBjaGVmcywgd2l0aCBkaXNoZXMgbWFkZSBmcm9tIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMgc291cmNlZCBnbG9iYWxseS5cbiAgICAgICAgVGhlIGludGVyaW9yIGlzIGEgYmxlbmQgb2YgZWxlZ2FuY2UgYW5kIHdoaW1zeSwgd2l0aCBjdXN0b20tbWFkZVxuICAgICAgICBmdXJuaXR1cmUgYW5kIGludGVyYWN0aXZlIGFydCBpbnN0YWxsYXRpb25zIHRoYXQgY2FwdGl2YXRlIGJvdGggYWR1bHRzXG4gICAgICAgIGFuZCBraWRzLiBXaXRoIGltcGVjY2FibGUgc2VydmljZSwgcGVyc29uYWxpemVkIG1lbnVzIGZvciBjaGlsZHJlbiwgYW5kXG4gICAgICAgIGRpc2NyZWV0IHNlY3VyaXR5LCBPcHVsZW50IEJpdGVzICYgUGxheSBlbnN1cmVzIGFuIHVuZm9yZ2V0dGFibGVcbiAgICAgICAgZXhwZXJpZW5jZSBmb3IgdGhlIHdob2xlIGZhbWlseS5gO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/page-load.js\n");

/***/ }),

/***/ "./src/reviews-load.js":
/*!*****************************!*\
  !*** ./src/reviews-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoadReviews)\n/* harmony export */ });\n/* harmony import */ var _happy_customer1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./happy-customer1.jpeg */ \"./src/happy-customer1.jpeg\");\n\nfunction LoadReviews() {\n  const content = document.querySelector(\"#content\");\n  const image = document.createElement(\"img\");\n  image.src = _happy_customer1_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  const name = document.createElement(\"h1\");\n  name.textContent = \"Donald J. Trump\";\n  const reviewBody = document.createElement(\"p\");\n  reviewBody.textContent = `Let me tell you, folks, Opulent Bites & Play is truly a tremendous place. Absolutely fantastic. I took my grandkids there, and believe me, they loved it. The play area? Incredible—better than anything you've ever seen. It's luxurious, it's safe, and it’s filled with the best toys. And the food? Top-notch, folks. They’ve got the finest steaks, cooked perfectly—just the way I like them. The chefs there, probably the best in the world, know what they’re doing.\n\nAnd the service, let me tell you, is unbelievable. They treat you like royalty, which, frankly, we deserve. The restaurant is beautiful, very classy, and everyone is saying it’s the best place to take your family. If you want to treat your kids to something special, and I mean really special, Opulent Bites & Play is the place to be. It's a winner, folks. A big, big winner.`;\n  content.appendChild(name);\n  content.appendChild(reviewBody);\n  content.appendChild(image);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmV2aWV3cy1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1EO0FBQ3BDO0FBQ2Y7QUFDQTtBQUNBLGNBQWMsa0RBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXZpZXdzLWxvYWQuanM/ZjAxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2VDdXN0b21lciBmcm9tIFwiLi9oYXBweS1jdXN0b21lcjEuanBlZ1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZFJldmlld3MoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2Uuc3JjID0gaW1hZ2VDdXN0b21lcjtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IFwiRG9uYWxkIEouIFRydW1wXCI7XG4gIGNvbnN0IHJldmlld0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmV2aWV3Qm9keS50ZXh0Q29udGVudCA9IGBMZXQgbWUgdGVsbCB5b3UsIGZvbGtzLCBPcHVsZW50IEJpdGVzICYgUGxheSBpcyB0cnVseSBhIHRyZW1lbmRvdXMgcGxhY2UuIEFic29sdXRlbHkgZmFudGFzdGljLiBJIHRvb2sgbXkgZ3JhbmRraWRzIHRoZXJlLCBhbmQgYmVsaWV2ZSBtZSwgdGhleSBsb3ZlZCBpdC4gVGhlIHBsYXkgYXJlYT8gSW5jcmVkaWJsZeKAlGJldHRlciB0aGFuIGFueXRoaW5nIHlvdSd2ZSBldmVyIHNlZW4uIEl0J3MgbHV4dXJpb3VzLCBpdCdzIHNhZmUsIGFuZCBpdOKAmXMgZmlsbGVkIHdpdGggdGhlIGJlc3QgdG95cy4gQW5kIHRoZSBmb29kPyBUb3Atbm90Y2gsIGZvbGtzLiBUaGV54oCZdmUgZ290IHRoZSBmaW5lc3Qgc3RlYWtzLCBjb29rZWQgcGVyZmVjdGx54oCUanVzdCB0aGUgd2F5IEkgbGlrZSB0aGVtLiBUaGUgY2hlZnMgdGhlcmUsIHByb2JhYmx5IHRoZSBiZXN0IGluIHRoZSB3b3JsZCwga25vdyB3aGF0IHRoZXnigJlyZSBkb2luZy5cblxuQW5kIHRoZSBzZXJ2aWNlLCBsZXQgbWUgdGVsbCB5b3UsIGlzIHVuYmVsaWV2YWJsZS4gVGhleSB0cmVhdCB5b3UgbGlrZSByb3lhbHR5LCB3aGljaCwgZnJhbmtseSwgd2UgZGVzZXJ2ZS4gVGhlIHJlc3RhdXJhbnQgaXMgYmVhdXRpZnVsLCB2ZXJ5IGNsYXNzeSwgYW5kIGV2ZXJ5b25lIGlzIHNheWluZyBpdOKAmXMgdGhlIGJlc3QgcGxhY2UgdG8gdGFrZSB5b3VyIGZhbWlseS4gSWYgeW91IHdhbnQgdG8gdHJlYXQgeW91ciBraWRzIHRvIHNvbWV0aGluZyBzcGVjaWFsLCBhbmQgSSBtZWFuIHJlYWxseSBzcGVjaWFsLCBPcHVsZW50IEJpdGVzICYgUGxheSBpcyB0aGUgcGxhY2UgdG8gYmUuIEl0J3MgYSB3aW5uZXIsIGZvbGtzLiBBIGJpZywgYmlnIHdpbm5lci5gO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHJldmlld0JvZHkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reviews-load.js\n");

/***/ }),

/***/ "./src/happy-customer1.jpeg":
/*!**********************************!*\
  !*** ./src/happy-customer1.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1beedbe9bc5ac4334482.jpeg";

/***/ }),

/***/ "./src/restaurant.jpeg":
/*!*****************************!*\
  !*** ./src/restaurant.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0c57ed970f85408c043.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;