"use strict";
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

/***/ "./graphql/client.ts":
/*!***************************!*\
  !*** ./graphql/client.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"/api/graphql\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n        typePolicies: {\n            Query: {\n                fields: {\n                    users: {\n                        // Don't cache separate results based on\n                        // any of this field's arguments.\n                        keyArgs: false,\n                        // Concatenate the incoming list items with\n                        // the existing list items.\n                        merge (existing = [], incoming) {\n                            return [\n                                ...existing,\n                                ...incoming\n                            ];\n                        }\n                    }\n                }\n            }\n        }\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFFdEQsTUFBTUUsTUFBTSxHQUFHLElBQUlGLHdEQUFZLENBQUM7SUFDckNHLEdBQUcsRUFBRSxjQUFjO0lBQ25CQyxLQUFLLEVBQUUsSUFBSUgseURBQWEsQ0FBQztRQUN2QkksWUFBWSxFQUFFO1lBQ1pDLEtBQUssRUFBRTtnQkFDTEMsTUFBTSxFQUFFO29CQUNOQyxLQUFLLEVBQUU7d0JBQ0wsd0NBQXdDO3dCQUN4QyxpQ0FBaUM7d0JBQ2pDQyxPQUFPLEVBQUUsS0FBSzt3QkFFZCwyQ0FBMkM7d0JBQzNDLDJCQUEyQjt3QkFDM0JDLEtBQUssRUFBQ0MsUUFBUSxHQUFHLEVBQUUsRUFBRUMsUUFBUSxFQUFFOzRCQUM3QixPQUFPO21DQUFJRCxRQUFRO21DQUFLQyxRQUFROzZCQUFDLENBQUM7eUJBQ25DO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2dyYXBocWwvY2xpZW50LnRzP2IwNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiBcIi9hcGkvZ3JhcGhxbFwiLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgUXVlcnk6IHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgdXNlcnM6IHtcbiAgICAgICAgICAgIC8vIERvbid0IGNhY2hlIHNlcGFyYXRlIHJlc3VsdHMgYmFzZWQgb25cbiAgICAgICAgICAgIC8vIGFueSBvZiB0aGlzIGZpZWxkJ3MgYXJndW1lbnRzLlxuICAgICAgICAgICAga2V5QXJnczogZmFsc2UsXG4gIFxuICAgICAgICAgICAgLy8gQ29uY2F0ZW5hdGUgdGhlIGluY29taW5nIGxpc3QgaXRlbXMgd2l0aFxuICAgICAgICAgICAgLy8gdGhlIGV4aXN0aW5nIGxpc3QgaXRlbXMuXG4gICAgICAgICAgICBtZXJnZShleGlzdGluZyA9IFtdLCBpbmNvbWluZykge1xuICAgICAgICAgICAgICByZXR1cm4gWy4uLmV4aXN0aW5nLCAuLi5pbmNvbWluZ107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksXG59KTtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsInVzZXJzIiwia2V5QXJncyIsIm1lcmdlIiwiZXhpc3RpbmciLCJpbmNvbWluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./graphql/client.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ \"grommet\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/client */ \"./graphql/client.ts\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: _graphql_client__WEBPACK_IMPORTED_MODULE_3__.client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_1__.Grommet, {\n            theme: grommet__WEBPACK_IMPORTED_MODULE_1__.grommet,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/jermaineb/Desktop/publicis/tech-test/app/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jermaineb/Desktop/publicis/tech-test/app/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jermaineb/Desktop/publicis/tech-test/app/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBQ0s7QUFDTjtBQUcxQyxTQUFTSSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0osMERBQWM7UUFBQ0MsTUFBTSxFQUFFQSxtREFBTTtrQkFDNUIsNEVBQUNGLDRDQUFPO1lBQUNNLEtBQUssRUFBRVAsNENBQU87c0JBQ3JCLDRFQUFDSyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDcEI7Ozs7O1lBQ0ssQ0FDakI7Q0FDSDtBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JvbW1ldCwgR3JvbW1ldCB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCJAL2dyYXBocWwvY2xpZW50XCI7XG5cblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8R3JvbW1ldCB0aGVtZT17Z3JvbW1ldH0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvR3JvbW1ldD5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbImdyb21tZXQiLCJHcm9tbWV0IiwiQXBvbGxvUHJvdmlkZXIiLCJjbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "grommet":
/*!**************************!*\
  !*** external "grommet" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("grommet");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

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