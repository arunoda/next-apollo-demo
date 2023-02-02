/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/ApolloRequestClient.tsx":
/*!*************************************!*\
  !*** ./lib/ApolloRequestClient.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GRAPHQL_ENDPOINT = \"https://faker-graphql.now.sh/graphql\";\nconst ApolloRequestClientProvider = ({ children  })=>{\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        uri: GRAPHQL_ENDPOINT,\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: client,\n        children: [\n            \" \",\n            children,\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/lib/ApolloRequestClient.tsx\",\n        lineNumber: 11,\n        columnNumber: 8\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApolloRequestClientProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvQXBvbGxvUmVxdWVzdENsaWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkU7QUFDNUI7QUFFakQsTUFBTUksbUJBQW1CO0FBRXpCLE1BQU1DLDhCQUErRCxDQUFDLEVBQUNDLFNBQVEsRUFBQyxHQUFHO0lBQ2pGLE1BQU1DLFNBQVMsSUFBSVAsd0RBQVlBLENBQUM7UUFDOUJRLEtBQUtKO1FBQ0xLLE9BQU8sSUFBSVAseURBQWFBO0lBQzVCO0lBQ0EscUJBQU8sOERBQUNELDBEQUFjQTtRQUFDTSxRQUFRQTs7WUFBUTtZQUFFRDtZQUFTOzs7Ozs7O0FBQ2xEO0FBSUEsaUVBQWVELDJCQUEyQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vbGliL0Fwb2xsb1JlcXVlc3RDbGllbnQudHN4PzRlNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9Qcm92aWRlciwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEdSQVBIUUxfRU5EUE9JTlQgPSBcImh0dHBzOi8vZmFrZXItZ3JhcGhxbC5ub3cuc2gvZ3JhcGhxbFwiXG5cbmNvbnN0IEFwb2xsb1JlcXVlc3RDbGllbnRQcm92aWRlcjogUmVhY3QuRkM8UHJvcHNXaXRoQ2hpbGRyZW48e30+PiA9ICh7Y2hpbGRyZW59KT0+e1xuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6IEdSQVBIUUxfRU5EUE9JTlQsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcbnJldHVybiA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PiB7Y2hpbGRyZW59IDwvQXBvbGxvUHJvdmlkZXI+XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBBcG9sbG9SZXF1ZXN0Q2xpZW50UHJvdmlkZXI7Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkFwb2xsb1Byb3ZpZGVyIiwiSW5NZW1vcnlDYWNoZSIsIlJlYWN0IiwiR1JBUEhRTF9FTkRQT0lOVCIsIkFwb2xsb1JlcXVlc3RDbGllbnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/ApolloRequestClient.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_ApolloRequestClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/ApolloRequestClient */ \"./lib/ApolloRequestClient.tsx\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ \"./pages/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/variables.scss */ \"./pages/styles/variables.scss\");\n/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_ApolloRequestClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0U7QUFDekM7QUFDSztBQUVoQyxTQUFTQyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDckMscUJBQU8sOERBQUNILGdFQUEyQkE7a0JBQy9CLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwb2xsb1JlcXVlc3RDbGllbnRQcm92aWRlciBmcm9tICcuLi9saWIvQXBvbGxvUmVxdWVzdENsaWVudCdcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy92YXJpYWJsZXMuc2NzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIDxBcG9sbG9SZXF1ZXN0Q2xpZW50UHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Fwb2xsb1JlcXVlc3RDbGllbnRQcm92aWRlcj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiQXBvbGxvUmVxdWVzdENsaWVudFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/styles/main.scss":
/*!********************************!*\
  !*** ./pages/styles/main.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./pages/styles/variables.scss":
/*!*************************************!*\
  !*** ./pages/styles/variables.scss ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();