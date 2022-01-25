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

/***/ "./lib/apollo-client.ts":
/*!******************************!*\
  !*** ./lib/apollo-client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ \"./lib/constant.ts\");\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: _constant__WEBPACK_IMPORTED_MODULE_2__.uri,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n        typePolicies: {\n            Query: {\n                fields: {\n                    UsersList: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__.offsetLimitPagination)()\n                }\n            }\n        }\n    })\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvLWNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEQ7QUFDSTtBQUNoQztBQUVoQyxLQUFLLENBQUNJLE1BQU0sR0FBRyxHQUFHLENBQUNKLHdEQUFZLENBQUMsQ0FBQztJQUM3QkcsR0FBRztJQUNIRSxLQUFLLEVBQUUsR0FBRyxDQUFDSix5REFBYSxDQUFDLENBQUM7UUFDdEJLLFlBQVksRUFBRSxDQUFDO1lBQ2JDLEtBQUssRUFBRSxDQUFDO2dCQUNOQyxNQUFNLEVBQUUsQ0FBQztvQkFDTEMsU0FBUyxFQUFFUCwrRUFBcUI7Z0JBQ3BDLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDUCxDQUFDO0FBRUQsaUVBQWVFLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vbGliL2Fwb2xsby1jbGllbnQudHM/Yjk1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IG9mZnNldExpbWl0UGFnaW5hdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcbmltcG9ydCB7IHVyaSB9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgIFVzZXJzTGlzdDogb2Zmc2V0TGltaXRQYWdpbmF0aW9uKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIm9mZnNldExpbWl0UGFnaW5hdGlvbiIsInVyaSIsImNsaWVudCIsImNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJVc2Vyc0xpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apollo-client.ts\n");

/***/ }),

/***/ "./lib/constant.ts":
/*!*************************!*\
  !*** ./lib/constant.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QUERY\": () => (/* binding */ QUERY),\n/* harmony export */   \"uri\": () => (/* binding */ uri),\n/* harmony export */   \"errMessage\": () => (/* binding */ errMessage),\n/* harmony export */   \"userMocks\": () => (/* binding */ userMocks)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery UsersList($count: Int, $page: Int) {\n    UsersList(count: $count, page: $page) {\n      users {\n        image\n        address\n        phoneNumber\n        email\n        name\n      }\n      hasNextPage\n    }\n  }\n`;\nconst uri = \"http://localhost:5000/graphql\";\nconst errMessage = 'Something went wrong, Please try again !!';\nconst userMocks = [\n    {\n        request: {\n            query: QUERY,\n            variables: {\n                count: 2000\n            },\n            fetchPolicy: \"cache-and-network\",\n            skip: true\n        },\n        result: {\n            data: {\n                UsersList: {\n                    users: [\n                        {\n                            name: \"Donna Gorczany\",\n                            email: \"Jarred_Moore@gmail.com\",\n                            phoneNumber: \"(534) 545-3185\",\n                            address: \"833 Dalton Square\",\n                            image: \"https://cdn.fakercloud.com/avatars/bboy1895_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Mrs. Mark Ferry\",\n                            \"email\": \"Edd_Wunsch@gmail.com\",\n                            phoneNumber: \"(420) 875-9125 x719\",\n                            address: \"49533 Morar Spring\",\n                            image: \"https://cdn.fakercloud.com/avatars/kerem_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Sheryl Wilderman\",\n                            email: \"Orrin.Schumm@gmail.com\",\n                            phoneNumber: \"249-996-2334 x8403\",\n                            address: \"157 Favian Oval\",\n                            image: \"https://cdn.fakercloud.com/avatars/algunsanabria_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Heidi Wiza\",\n                            email: \"Vallie_Gusikowski44@gmail.com\",\n                            phoneNumber: \"(228) 529-7503 x9804\",\n                            address: \"780 Kiehn Trafficway\",\n                            image: \"https://cdn.fakercloud.com/avatars/giuliusa_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Mr. Melody Crona\",\n                            email: \"Kylie.Wolff@hotmail.com\",\n                            phoneNumber: \"708.349.5665 x3156\",\n                            address: \"9539 Javonte Alley\",\n                            image: \"https://cdn.fakercloud.com/avatars/_victa_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Donna Gorczany\",\n                            email: \"Jarred_Moore@gmail.com\",\n                            phoneNumber: \"(534) 545-3185\",\n                            address: \"833 Dalton Square\",\n                            image: \"https://cdn.fakercloud.com/avatars/bboy1895_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Mrs. Mark Ferry\",\n                            \"email\": \"Edd_Wunsch@gmail.com\",\n                            phoneNumber: \"(420) 875-9125 x719\",\n                            address: \"49533 Morar Spring\",\n                            image: \"https://cdn.fakercloud.com/avatars/kerem_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Sheryl Wilderman\",\n                            email: \"Orrin.Schumm@gmail.com\",\n                            phoneNumber: \"249-996-2334 x8403\",\n                            address: \"157 Favian Oval\",\n                            image: \"https://cdn.fakercloud.com/avatars/algunsanabria_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Heidi Wiza\",\n                            email: \"Vallie_Gusikowski44@gmail.com\",\n                            phoneNumber: \"(228) 529-7503 x9804\",\n                            address: \"780 Kiehn Trafficway\",\n                            image: \"https://cdn.fakercloud.com/avatars/giuliusa_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Mr. Melody Crona\",\n                            email: \"Kylie.Wolff@hotmail.com\",\n                            phoneNumber: \"708.349.5665 x3156\",\n                            address: \"9539 Javonte Alley\",\n                            image: \"https://cdn.fakercloud.com/avatars/_victa_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Donna Gorczany\",\n                            email: \"Jarred_Moore@gmail.com\",\n                            phoneNumber: \"(534) 545-3185\",\n                            address: \"833 Dalton Square\",\n                            image: \"https://cdn.fakercloud.com/avatars/bboy1895_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Mrs. Mark Ferry\",\n                            \"email\": \"Edd_Wunsch@gmail.com\",\n                            phoneNumber: \"(420) 875-9125 x719\",\n                            address: \"49533 Morar Spring\",\n                            image: \"https://cdn.fakercloud.com/avatars/kerem_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Sheryl Wilderman\",\n                            email: \"Orrin.Schumm@gmail.com\",\n                            phoneNumber: \"249-996-2334 x8403\",\n                            address: \"157 Favian Oval\",\n                            image: \"https://cdn.fakercloud.com/avatars/algunsanabria_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Heidi Wiza\",\n                            email: \"Vallie_Gusikowski44@gmail.com\",\n                            phoneNumber: \"(228) 529-7503 x9804\",\n                            address: \"780 Kiehn Trafficway\",\n                            image: \"https://cdn.fakercloud.com/avatars/giuliusa_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Mr. Melody Crona\",\n                            email: \"Kylie.Wolff@hotmail.com\",\n                            phoneNumber: \"708.349.5665 x3156\",\n                            address: \"9539 Javonte Alley\",\n                            image: \"https://cdn.fakercloud.com/avatars/_victa_128.jpg\",\n                            __typename: \"User\"\n                        }\n                    ],\n                    hasNextPage: false\n                }\n            }\n        }\n    },\n    {\n        request: {\n            query: QUERY,\n            variables: {\n                count: 10,\n                page: 1\n            }\n        },\n        result: {\n            data: {\n                UsersList: {\n                    users: [\n                        {\n                            name: \"Donna Gorczany\",\n                            email: \"Jarred_Moore@gmail.com\",\n                            phoneNumber: \"(534) 545-3185\",\n                            address: \"833 Dalton Square\",\n                            image: \"https://cdn.fakercloud.com/avatars/bboy1895_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Mrs. Mark Ferry\",\n                            \"email\": \"Edd_Wunsch@gmail.com\",\n                            phoneNumber: \"(420) 875-9125 x719\",\n                            address: \"49533 Morar Spring\",\n                            image: \"https://cdn.fakercloud.com/avatars/kerem_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Sheryl Wilderman\",\n                            email: \"Orrin.Schumm@gmail.com\",\n                            phoneNumber: \"249-996-2334 x8403\",\n                            address: \"157 Favian Oval\",\n                            image: \"https://cdn.fakercloud.com/avatars/algunsanabria_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Heidi Wiza\",\n                            email: \"Vallie_Gusikowski44@gmail.com\",\n                            phoneNumber: \"(228) 529-7503 x9804\",\n                            address: \"780 Kiehn Trafficway\",\n                            image: \"https://cdn.fakercloud.com/avatars/giuliusa_128.jpg\",\n                            __typename: \"User\"\n                        },\n                        {\n                            name: \"Mr. Melody Crona\",\n                            email: \"Kylie.Wolff@hotmail.com\",\n                            phoneNumber: \"708.349.5665 x3156\",\n                            address: \"9539 Javonte Alley\",\n                            image: \"https://cdn.fakercloud.com/avatars/_victa_128.jpg\",\n                            __typename: \"User\"\n                        }\n                    ],\n                    hasNextPage: true\n                }\n            }\n        }\n    }, \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9DO0FBRTdCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYXpCO0FBRU8sS0FBSyxDQUFDRSxHQUFHLEdBQUcsQ0FBK0I7QUFDM0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBMkM7QUFDOUQsS0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBQztJQUN0QixDQUFDO1FBQ0NDLE9BQU8sRUFBRSxDQUFDO1lBQ1JDLEtBQUssRUFBRUwsS0FBSztZQUNaTSxTQUFTLEVBQUUsQ0FBQztnQkFDUkMsS0FBSyxFQUFFLElBQUk7WUFDZixDQUFDO1lBQ0RDLFdBQVcsRUFBRSxDQUFtQjtZQUNoQ0MsSUFBSSxFQUFFLElBQUk7UUFDWixDQUFDO1FBQ0RDLE1BQU0sRUFBRSxDQUFDO1lBQ1BDLElBQUksRUFBRSxDQUFDO2dCQUNIQyxTQUFTLEVBQUUsQ0FBQztvQkFDUkMsS0FBSyxFQUFFLENBQUM7d0JBQ1IsQ0FBQzs0QkFDR0MsSUFBSSxFQUFDLENBQWdCOzRCQUNyQkMsS0FBSyxFQUFDLENBQXdCOzRCQUM5QkMsV0FBVyxFQUFDLENBQWdCOzRCQUM1QkMsT0FBTyxFQUFDLENBQW1COzRCQUMzQkMsS0FBSyxFQUFDLENBQXFEOzRCQUMzREMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUMsQ0FBQzs0QkFDQ0wsSUFBSSxFQUFDLENBQWlCOzRCQUFDLENBQU8sUUFBQyxDQUFzQjs0QkFDckRFLFdBQVcsRUFBQyxDQUFxQjs0QkFDakNDLE9BQU8sRUFBQyxDQUFvQjs0QkFDNUJDLEtBQUssRUFBQyxDQUFrRDs0QkFDeERDLFVBQVUsRUFBQyxDQUFNO3dCQUNyQixDQUFDO3dCQUFDLENBQUM7NEJBQ0NMLElBQUksRUFBQyxDQUFrQjs0QkFDdkJDLEtBQUssRUFBQyxDQUF3Qjs0QkFDOUJDLFdBQVcsRUFBQyxDQUFvQjs0QkFDaENDLE9BQU8sRUFBQyxDQUFpQjs0QkFDekJDLEtBQUssRUFBQyxDQUEwRDs0QkFDaEVDLFVBQVUsRUFBQyxDQUFNO3dCQUNyQixDQUFDO3dCQUFDLENBQUM7NEJBQ0NMLElBQUksRUFBQyxDQUFZOzRCQUNqQkMsS0FBSyxFQUFDLENBQStCOzRCQUNyQ0MsV0FBVyxFQUFDLENBQXNCOzRCQUNsQ0MsT0FBTyxFQUFDLENBQXNCOzRCQUM5QkMsS0FBSyxFQUFDLENBQXFEOzRCQUMzREMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUMsQ0FBQzs0QkFDQ0wsSUFBSSxFQUFDLENBQWtCOzRCQUN2QkMsS0FBSyxFQUFDLENBQXlCOzRCQUMvQkMsV0FBVyxFQUFDLENBQW9COzRCQUNoQ0MsT0FBTyxFQUFDLENBQW9COzRCQUM1QkMsS0FBSyxFQUFDLENBQW1EOzRCQUN6REMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUUsQ0FBQzs0QkFDQUwsSUFBSSxFQUFDLENBQWdCOzRCQUNyQkMsS0FBSyxFQUFDLENBQXdCOzRCQUM5QkMsV0FBVyxFQUFDLENBQWdCOzRCQUM1QkMsT0FBTyxFQUFDLENBQW1COzRCQUMzQkMsS0FBSyxFQUFDLENBQXFEOzRCQUMzREMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUMsQ0FBQzs0QkFDQ0wsSUFBSSxFQUFDLENBQWlCOzRCQUFDLENBQU8sUUFBQyxDQUFzQjs0QkFDckRFLFdBQVcsRUFBQyxDQUFxQjs0QkFDakNDLE9BQU8sRUFBQyxDQUFvQjs0QkFDNUJDLEtBQUssRUFBQyxDQUFrRDs0QkFDeERDLFVBQVUsRUFBQyxDQUFNO3dCQUNyQixDQUFDO3dCQUFDLENBQUM7NEJBQ0NMLElBQUksRUFBQyxDQUFrQjs0QkFDdkJDLEtBQUssRUFBQyxDQUF3Qjs0QkFDOUJDLFdBQVcsRUFBQyxDQUFvQjs0QkFDaENDLE9BQU8sRUFBQyxDQUFpQjs0QkFDekJDLEtBQUssRUFBQyxDQUEwRDs0QkFDaEVDLFVBQVUsRUFBQyxDQUFNO3dCQUNyQixDQUFDO3dCQUFDLENBQUM7NEJBQ0NMLElBQUksRUFBQyxDQUFZOzRCQUNqQkMsS0FBSyxFQUFDLENBQStCOzRCQUNyQ0MsV0FBVyxFQUFDLENBQXNCOzRCQUNsQ0MsT0FBTyxFQUFDLENBQXNCOzRCQUM5QkMsS0FBSyxFQUFDLENBQXFEOzRCQUMzREMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUMsQ0FBQzs0QkFDQ0wsSUFBSSxFQUFDLENBQWtCOzRCQUN2QkMsS0FBSyxFQUFDLENBQXlCOzRCQUMvQkMsV0FBVyxFQUFDLENBQW9COzRCQUNoQ0MsT0FBTyxFQUFDLENBQW9COzRCQUM1QkMsS0FBSyxFQUFDLENBQW1EOzRCQUN6REMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUUsQ0FBQzs0QkFDQUwsSUFBSSxFQUFDLENBQWdCOzRCQUNyQkMsS0FBSyxFQUFDLENBQXdCOzRCQUM5QkMsV0FBVyxFQUFDLENBQWdCOzRCQUM1QkMsT0FBTyxFQUFDLENBQW1COzRCQUMzQkMsS0FBSyxFQUFDLENBQXFEOzRCQUMzREMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUMsQ0FBQzs0QkFDQ0wsSUFBSSxFQUFDLENBQWlCOzRCQUFDLENBQU8sUUFBQyxDQUFzQjs0QkFDckRFLFdBQVcsRUFBQyxDQUFxQjs0QkFDakNDLE9BQU8sRUFBQyxDQUFvQjs0QkFDNUJDLEtBQUssRUFBQyxDQUFrRDs0QkFDeERDLFVBQVUsRUFBQyxDQUFNO3dCQUNyQixDQUFDO3dCQUFDLENBQUM7NEJBQ0NMLElBQUksRUFBQyxDQUFrQjs0QkFDdkJDLEtBQUssRUFBQyxDQUF3Qjs0QkFDOUJDLFdBQVcsRUFBQyxDQUFvQjs0QkFDaENDLE9BQU8sRUFBQyxDQUFpQjs0QkFDekJDLEtBQUssRUFBQyxDQUEwRDs0QkFDaEVDLFVBQVUsRUFBQyxDQUFNO3dCQUNyQixDQUFDO3dCQUFDLENBQUM7NEJBQ0NMLElBQUksRUFBQyxDQUFZOzRCQUNqQkMsS0FBSyxFQUFDLENBQStCOzRCQUNyQ0MsV0FBVyxFQUFDLENBQXNCOzRCQUNsQ0MsT0FBTyxFQUFDLENBQXNCOzRCQUM5QkMsS0FBSyxFQUFDLENBQXFEOzRCQUMzREMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUMsQ0FBQzs0QkFDQ0wsSUFBSSxFQUFDLENBQWtCOzRCQUN2QkMsS0FBSyxFQUFDLENBQXlCOzRCQUMvQkMsV0FBVyxFQUFDLENBQW9COzRCQUNoQ0MsT0FBTyxFQUFDLENBQW9COzRCQUM1QkMsS0FBSyxFQUFDLENBQW1EOzRCQUN6REMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7b0JBQ0wsQ0FBQztvQkFDREMsV0FBVyxFQUFFLEtBQUs7Z0JBQ3JCLENBQUM7WUFDRixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDRCxDQUFDO1FBQ09oQixPQUFPLEVBQUUsQ0FBQztZQUNSQyxLQUFLLEVBQUVMLEtBQUs7WUFDWk0sU0FBUyxFQUFFLENBQUM7Z0JBQ1JDLEtBQUssRUFBRSxFQUFFO2dCQUNUYyxJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUM7UUFDSCxDQUFDO1FBQ0RYLE1BQU0sRUFBRSxDQUFDO1lBQ1BDLElBQUksRUFBRSxDQUFDO2dCQUNIQyxTQUFTLEVBQUUsQ0FBQztvQkFDUkMsS0FBSyxFQUFFLENBQUM7d0JBQ1IsQ0FBQzs0QkFDR0MsSUFBSSxFQUFDLENBQWdCOzRCQUNyQkMsS0FBSyxFQUFDLENBQXdCOzRCQUM5QkMsV0FBVyxFQUFDLENBQWdCOzRCQUM1QkMsT0FBTyxFQUFDLENBQW1COzRCQUMzQkMsS0FBSyxFQUFDLENBQXFEOzRCQUMzREMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUMsQ0FBQzs0QkFDQ0wsSUFBSSxFQUFDLENBQWlCOzRCQUFDLENBQU8sUUFBQyxDQUFzQjs0QkFDckRFLFdBQVcsRUFBQyxDQUFxQjs0QkFDakNDLE9BQU8sRUFBQyxDQUFvQjs0QkFDNUJDLEtBQUssRUFBQyxDQUFrRDs0QkFDeERDLFVBQVUsRUFBQyxDQUFNO3dCQUNyQixDQUFDO3dCQUFDLENBQUM7NEJBQ0NMLElBQUksRUFBQyxDQUFrQjs0QkFDdkJDLEtBQUssRUFBQyxDQUF3Qjs0QkFDOUJDLFdBQVcsRUFBQyxDQUFvQjs0QkFDaENDLE9BQU8sRUFBQyxDQUFpQjs0QkFDekJDLEtBQUssRUFBQyxDQUEwRDs0QkFDaEVDLFVBQVUsRUFBQyxDQUFNO3dCQUNyQixDQUFDO3dCQUFDLENBQUM7NEJBQ0NMLElBQUksRUFBQyxDQUFZOzRCQUNqQkMsS0FBSyxFQUFDLENBQStCOzRCQUNyQ0MsV0FBVyxFQUFDLENBQXNCOzRCQUNsQ0MsT0FBTyxFQUFDLENBQXNCOzRCQUM5QkMsS0FBSyxFQUFDLENBQXFEOzRCQUMzREMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7d0JBQUMsQ0FBQzs0QkFDQ0wsSUFBSSxFQUFDLENBQWtCOzRCQUN2QkMsS0FBSyxFQUFDLENBQXlCOzRCQUMvQkMsV0FBVyxFQUFDLENBQW9COzRCQUNoQ0MsT0FBTyxFQUFDLENBQW9COzRCQUM1QkMsS0FBSyxFQUFDLENBQW1EOzRCQUN6REMsVUFBVSxFQUFDLENBQU07d0JBQ3JCLENBQUM7b0JBQUEsQ0FBQztvQkFDRkMsV0FBVyxFQUFFLElBQUk7Z0JBQ3JCLENBQUM7WUFDRixDQUFDO1FBQ0osQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9saWIvY29uc3RhbnQudHM/OTJhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFFVRVJZID0gZ3FsYFxucXVlcnkgVXNlcnNMaXN0KCRjb3VudDogSW50LCAkcGFnZTogSW50KSB7XG4gICAgVXNlcnNMaXN0KGNvdW50OiAkY291bnQsIHBhZ2U6ICRwYWdlKSB7XG4gICAgICB1c2VycyB7XG4gICAgICAgIGltYWdlXG4gICAgICAgIGFkZHJlc3NcbiAgICAgICAgcGhvbmVOdW1iZXJcbiAgICAgICAgZW1haWxcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgICAgaGFzTmV4dFBhZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ncmFwaHFsXCI7XG5leHBvcnQgY29uc3QgZXJyTWVzc2FnZSA9ICdTb21ldGhpbmcgd2VudCB3cm9uZywgUGxlYXNlIHRyeSBhZ2FpbiAhISc7XG5leHBvcnQgY29uc3QgdXNlck1vY2tzID0gW1xuICAgIHtcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgcXVlcnk6IFFVRVJZLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIGNvdW50OiAyMDAwXG4gICAgICAgIH0sXG4gICAgICAgIGZldGNoUG9saWN5OiBcImNhY2hlLWFuZC1uZXR3b3JrXCIsXG4gICAgICAgIHNraXA6IHRydWVcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgVXNlcnNMaXN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XCJEb25uYSBHb3JjemFueVwiLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDpcIkphcnJlZF9Nb29yZUBnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6XCIoNTM0KSA1NDUtMzE4NVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOlwiODMzIERhbHRvbiBTcXVhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6XCJodHRwczovL2Nkbi5mYWtlcmNsb3VkLmNvbS9hdmF0YXJzL2Jib3kxODk1XzEyOC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZTpcIlVzZXJcIlxuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICBuYW1lOlwiTXJzLiBNYXJrIEZlcnJ5XCIsXCJlbWFpbFwiOlwiRWRkX1d1bnNjaEBnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6XCIoNDIwKSA4NzUtOTEyNSB4NzE5XCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6XCI0OTUzMyBNb3JhciBTcHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6XCJodHRwczovL2Nkbi5mYWtlcmNsb3VkLmNvbS9hdmF0YXJzL2tlcmVtXzEyOC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZTpcIlVzZXJcIlxuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICBuYW1lOlwiU2hlcnlsIFdpbGRlcm1hblwiLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDpcIk9ycmluLlNjaHVtbUBnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6XCIyNDktOTk2LTIzMzQgeDg0MDNcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczpcIjE1NyBGYXZpYW4gT3ZhbFwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vY2RuLmZha2VyY2xvdWQuY29tL2F2YXRhcnMvYWxndW5zYW5hYnJpYV8xMjguanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkhlaWRpIFdpemFcIixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6XCJWYWxsaWVfR3VzaWtvd3NraTQ0QGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjpcIigyMjgpIDUyOS03NTAzIHg5ODA0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6XCI3ODAgS2llaG4gVHJhZmZpY3dheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vY2RuLmZha2VyY2xvdWQuY29tL2F2YXRhcnMvZ2l1bGl1c2FfMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOlwiVXNlclwiXG4gICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XCJNci4gTWVsb2R5IENyb25hXCIsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOlwiS3lsaWUuV29sZmZAaG90bWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6XCI3MDguMzQ5LjU2NjUgeDMxNTZcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczpcIjk1MzkgSmF2b250ZSBBbGxleVwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vY2RuLmZha2VyY2xvdWQuY29tL2F2YXRhcnMvX3ZpY3RhXzEyOC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZTpcIlVzZXJcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkRvbm5hIEdvcmN6YW55XCIsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOlwiSmFycmVkX01vb3JlQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjpcIig1MzQpIDU0NS0zMTg1XCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6XCI4MzMgRGFsdG9uIFNxdWFyZVwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vY2RuLmZha2VyY2xvdWQuY29tL2F2YXRhcnMvYmJveTE4OTVfMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOlwiVXNlclwiXG4gICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XCJNcnMuIE1hcmsgRmVycnlcIixcImVtYWlsXCI6XCJFZGRfV3Vuc2NoQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjpcIig0MjApIDg3NS05MTI1IHg3MTlcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczpcIjQ5NTMzIE1vcmFyIFNwcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vY2RuLmZha2VyY2xvdWQuY29tL2F2YXRhcnMva2VyZW1fMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOlwiVXNlclwiXG4gICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XCJTaGVyeWwgV2lsZGVybWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOlwiT3JyaW4uU2NodW1tQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjpcIjI0OS05OTYtMjMzNCB4ODQwM1wiLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOlwiMTU3IEZhdmlhbiBPdmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOlwiaHR0cHM6Ly9jZG4uZmFrZXJjbG91ZC5jb20vYXZhdGFycy9hbGd1bnNhbmFicmlhXzEyOC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZTpcIlVzZXJcIlxuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICBuYW1lOlwiSGVpZGkgV2l6YVwiLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDpcIlZhbGxpZV9HdXNpa293c2tpNDRAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiKDIyOCkgNTI5LTc1MDMgeDk4MDRcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczpcIjc4MCBLaWVobiBUcmFmZmljd2F5XCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOlwiaHR0cHM6Ly9jZG4uZmFrZXJjbG91ZC5jb20vYXZhdGFycy9naXVsaXVzYV8xMjguanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTpcIk1yLiBNZWxvZHkgQ3JvbmFcIixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6XCJLeWxpZS5Xb2xmZkBob3RtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjpcIjcwOC4zNDkuNTY2NSB4MzE1NlwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOlwiOTUzOSBKYXZvbnRlIEFsbGV5XCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOlwiaHR0cHM6Ly9jZG4uZmFrZXJjbG91ZC5jb20vYXZhdGFycy9fdmljdGFfMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOlwiVXNlclwiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOlwiRG9ubmEgR29yY3phbnlcIixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6XCJKYXJyZWRfTW9vcmVAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiKDUzNCkgNTQ1LTMxODVcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczpcIjgzMyBEYWx0b24gU3F1YXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOlwiaHR0cHM6Ly9jZG4uZmFrZXJjbG91ZC5jb20vYXZhdGFycy9iYm95MTg5NV8xMjguanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTpcIk1ycy4gTWFyayBGZXJyeVwiLFwiZW1haWxcIjpcIkVkZF9XdW5zY2hAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiKDQyMCkgODc1LTkxMjUgeDcxOVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOlwiNDk1MzMgTW9yYXIgU3ByaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOlwiaHR0cHM6Ly9jZG4uZmFrZXJjbG91ZC5jb20vYXZhdGFycy9rZXJlbV8xMjguanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTpcIlNoZXJ5bCBXaWxkZXJtYW5cIixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6XCJPcnJpbi5TY2h1bW1AZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiMjQ5LTk5Ni0yMzM0IHg4NDAzXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6XCIxNTcgRmF2aWFuIE92YWxcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6XCJodHRwczovL2Nkbi5mYWtlcmNsb3VkLmNvbS9hdmF0YXJzL2FsZ3Vuc2FuYWJyaWFfMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOlwiVXNlclwiXG4gICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XCJIZWlkaSBXaXphXCIsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOlwiVmFsbGllX0d1c2lrb3dza2k0NEBnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6XCIoMjI4KSA1MjktNzUwMyB4OTgwNFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOlwiNzgwIEtpZWhuIFRyYWZmaWN3YXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6XCJodHRwczovL2Nkbi5mYWtlcmNsb3VkLmNvbS9hdmF0YXJzL2dpdWxpdXNhXzEyOC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZTpcIlVzZXJcIlxuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICBuYW1lOlwiTXIuIE1lbG9keSBDcm9uYVwiLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDpcIkt5bGllLldvbGZmQGhvdG1haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiNzA4LjM0OS41NjY1IHgzMTU2XCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6XCI5NTM5IEphdm9udGUgQWxsZXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6XCJodHRwczovL2Nkbi5mYWtlcmNsb3VkLmNvbS9hdmF0YXJzL192aWN0YV8xMjguanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IGZhbHNlXG4gICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59LFxue1xuICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgcXVlcnk6IFFVRVJZLFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICBjb3VudDogMTAsXG4gICAgICAgICAgICAgIHBhZ2U6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VsdDoge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgVXNlcnNMaXN0OiB7XG4gICAgICAgICAgICAgICAgICB1c2VyczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJEb25uYSBHb3JjemFueVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOlwiSmFycmVkX01vb3JlQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiKDUzNCkgNTQ1LTMxODVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOlwiODMzIERhbHRvbiBTcXVhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vY2RuLmZha2VyY2xvdWQuY29tL2F2YXRhcnMvYmJveTE4OTVfMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJNcnMuIE1hcmsgRmVycnlcIixcImVtYWlsXCI6XCJFZGRfV3Vuc2NoQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiKDQyMCkgODc1LTkxMjUgeDcxOVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6XCI0OTUzMyBNb3JhciBTcHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vY2RuLmZha2VyY2xvdWQuY29tL2F2YXRhcnMva2VyZW1fMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJTaGVyeWwgV2lsZGVybWFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6XCJPcnJpbi5TY2h1bW1AZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6XCIyNDktOTk2LTIzMzQgeDg0MDNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOlwiMTU3IEZhdmlhbiBPdmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6XCJodHRwczovL2Nkbi5mYWtlcmNsb3VkLmNvbS9hdmF0YXJzL2FsZ3Vuc2FuYWJyaWFfMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJIZWlkaSBXaXphXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6XCJWYWxsaWVfR3VzaWtvd3NraTQ0QGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiKDIyOCkgNTI5LTc1MDMgeDk4MDRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOlwiNzgwIEtpZWhuIFRyYWZmaWN3YXlcIixcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vY2RuLmZha2VyY2xvdWQuY29tL2F2YXRhcnMvZ2l1bGl1c2FfMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJNci4gTWVsb2R5IENyb25hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6XCJLeWxpZS5Xb2xmZkBob3RtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOlwiNzA4LjM0OS41NjY1IHgzMTU2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczpcIjk1MzkgSmF2b250ZSBBbGxleVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlOlwiaHR0cHM6Ly9jZG4uZmFrZXJjbG91ZC5jb20vYXZhdGFycy9fdmljdGFfMTI4LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6XCJVc2VyXCJcbiAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9LFxuICBdO1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gIH1cblxuICBpbnRlcmZhY2UgSVVzZXJSZXNwb25zZSB7XG4gICAgICB1c2VyczogQXJyYXk8SVVzZXI+O1xuICAgICAgaGFzTmV4dFBhZ2U6IGJvb2xlYW47XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIElVc2Vyc0xpc3Qge1xuICAgIFVzZXJzTGlzdD86IElVc2VyUmVzcG9uc2U7XG4gIH1cbiJdLCJuYW1lcyI6WyJncWwiLCJRVUVSWSIsInVyaSIsImVyck1lc3NhZ2UiLCJ1c2VyTW9ja3MiLCJyZXF1ZXN0IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJjb3VudCIsImZldGNoUG9saWN5Iiwic2tpcCIsInJlc3VsdCIsImRhdGEiLCJVc2Vyc0xpc3QiLCJ1c2VycyIsIm5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiYWRkcmVzcyIsImltYWdlIiwiX190eXBlbmFtZSIsImhhc05leHRQYWdlIiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/constant.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apollo-client */ \"./lib/apollo-client.ts\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _lib_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/khushbooshaw/Documents/next-apollo-demo-master (1)/client/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/khushbooshaw/Documents/next-apollo-demo-master (1)/client/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0M7QUFDTjtBQUNuQjtBQUV0QixLQUFLLENBQUNFLEtBQUssSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsR0FBSyxDQUFDO0lBQ25ELE1BQU0sNkVBQ0hKLDBEQUFjO1FBQUNDLE1BQU0sRUFBRUEsMERBQU07OEZBQzNCRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFSCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2xpYi9hcG9sbG8tY2xpZW50XCI7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJjbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
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

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

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