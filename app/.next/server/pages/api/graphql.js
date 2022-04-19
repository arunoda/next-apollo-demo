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
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "casual":
/*!*************************!*\
  !*** external "casual" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("casual");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "(api)/./graphql/index.ts":
/*!**************************!*\
  !*** ./graphql/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": () => (/* reexport safe */ _resolvers__WEBPACK_IMPORTED_MODULE_1__.resolvers),\n/* harmony export */   \"typeDefs\": () => (/* reexport safe */ _typeDefs__WEBPACK_IMPORTED_MODULE_0__.typeDefs)\n/* harmony export */ });\n/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeDefs */ \"(api)/./graphql/typeDefs.ts\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers */ \"(api)/./graphql/resolvers.ts\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ncmFwaHFsL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0M7QUFDRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vZ3JhcGhxbC9pbmRleC50cz8wNzRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHR5cGVEZWZzIH0gZnJvbSAnLi90eXBlRGVmcyc7XG5leHBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICcuL3Jlc29sdmVycyc7Il0sIm5hbWVzIjpbInR5cGVEZWZzIiwicmVzb2x2ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./graphql/index.ts\n");

/***/ }),

/***/ "(api)/./graphql/resolvers.ts":
/*!******************************!*\
  !*** ./graphql/resolvers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": () => (/* binding */ resolvers)\n/* harmony export */ });\nconst resolvers = {\n    Query: {\n        users: (parent, args, context, _)=>{\n            let { offset , limit  } = args;\n            if (offset < 0) {\n                offset = 0;\n            }\n            // const cursor = offset * limit;\n            console.log({\n                message: \"incoming req\",\n                offset,\n                limit\n            });\n            const data = context.mockData.slice(offset, offset + limit);\n            console.log({\n                ...data\n            });\n            return data;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ncmFwaHFsL3Jlc29sdmVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsU0FBUyxHQUFHO0lBQ3ZCQyxLQUFLLEVBQUU7UUFDTEMsS0FBSyxFQUFFLENBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLENBQUMsR0FBa0I7WUFDaEQsSUFBSSxFQUFFQyxNQUFNLEdBQUVDLEtBQUssR0FBRSxHQUFHSixJQUFJO1lBQzVCLElBQUlHLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2RBLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDWjtZQUNELGlDQUFpQztZQUNqQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUM7Z0JBQ1ZDLE9BQU8sRUFBRSxjQUFjO2dCQUN2QkosTUFBTTtnQkFDTkMsS0FBSzthQUNOLENBQUM7WUFDRixNQUFNSSxJQUFJLEdBQUdQLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDQyxLQUFLLENBQUNQLE1BQU0sRUFBRUEsTUFBTSxHQUFHQyxLQUFLLENBQUM7WUFDM0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO2dCQUNWLEdBQUdFLElBQUk7YUFDUixDQUFDO1lBQ0YsT0FBT0EsSUFBSSxDQUFDO1NBQ2I7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2dyYXBocWwvcmVzb2x2ZXJzLnRzP2I5OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVVc2VycyB9IGZyb20gJ0AvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIHVzZXJzOiAocGFyZW50LCBhcmdzLCBjb250ZXh0LCBfKTogQXJyYXk8VXNlcj4gPT4ge1xuICAgICAgbGV0IHsgb2Zmc2V0LCBsaW1pdCB9ID0gYXJncztcbiAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgICB9XG4gICAgICAvLyBjb25zdCBjdXJzb3IgPSBvZmZzZXQgKiBsaW1pdDtcbiAgICAgIGNvbnNvbGUubG9nKHtcbiAgICAgICAgbWVzc2FnZTogJ2luY29taW5nIHJlcScsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgbGltaXQsXG4gICAgICB9KVxuICAgICAgY29uc3QgZGF0YSA9IGNvbnRleHQubW9ja0RhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsaW1pdClcbiAgICAgIGNvbnNvbGUubG9nKHtcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfSlcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gIH0sXG59OyJdLCJuYW1lcyI6WyJyZXNvbHZlcnMiLCJRdWVyeSIsInVzZXJzIiwicGFyZW50IiwiYXJncyIsImNvbnRleHQiLCJfIiwib2Zmc2V0IiwibGltaXQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImRhdGEiLCJtb2NrRGF0YSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./graphql/resolvers.ts\n");

/***/ }),

/***/ "(api)/./graphql/typeDefs.ts":
/*!*****************************!*\
  !*** ./graphql/typeDefs.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n  # Types\n  type Address {\n    building: String\n    street: String\n    city: String\n    region: String\n    country: String\n    postCode: String\n  }\n  type Phone {\n    countryCode: String\n    number: String\n  }\n  type Name {\n    firstName: String \n    lastName: String\n  }\n  type User {\n    id: ID!\n    name: Name\n    phone: Phone\n    address: Address\n    email: String\n  }\n  # Queries\n  type Query {\n    users(offset: Int, limit: Int): [User]\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ncmFwaHFsL3R5cGVEZWZzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUVuQyxNQUFNQyxRQUFRLEdBQUdELG9EQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkI1QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2dyYXBocWwvdHlwZURlZnMudHM/YjEzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLW1pY3JvJztcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAjIFR5cGVzXG4gIHR5cGUgQWRkcmVzcyB7XG4gICAgYnVpbGRpbmc6IFN0cmluZ1xuICAgIHN0cmVldDogU3RyaW5nXG4gICAgY2l0eTogU3RyaW5nXG4gICAgcmVnaW9uOiBTdHJpbmdcbiAgICBjb3VudHJ5OiBTdHJpbmdcbiAgICBwb3N0Q29kZTogU3RyaW5nXG4gIH1cbiAgdHlwZSBQaG9uZSB7XG4gICAgY291bnRyeUNvZGU6IFN0cmluZ1xuICAgIG51bWJlcjogU3RyaW5nXG4gIH1cbiAgdHlwZSBOYW1lIHtcbiAgICBmaXJzdE5hbWU6IFN0cmluZyBcbiAgICBsYXN0TmFtZTogU3RyaW5nXG4gIH1cbiAgdHlwZSBVc2VyIHtcbiAgICBpZDogSUQhXG4gICAgbmFtZTogTmFtZVxuICAgIHBob25lOiBQaG9uZVxuICAgIGFkZHJlc3M6IEFkZHJlc3NcbiAgICBlbWFpbDogU3RyaW5nXG4gIH1cbiAgIyBRdWVyaWVzXG4gIHR5cGUgUXVlcnkge1xuICAgIHVzZXJzKG9mZnNldDogSW50LCBsaW1pdDogSW50KTogW1VzZXJdXG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiZ3FsIiwidHlwZURlZnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./graphql/typeDefs.ts\n");

/***/ }),

/***/ "(api)/./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/graphql */ \"(api)/./graphql/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"(api)/./utils/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_2__]);\n_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    typeDefs: _graphql__WEBPACK_IMPORTED_MODULE_1__.typeDefs,\n    resolvers: _graphql__WEBPACK_IMPORTED_MODULE_1__.resolvers,\n    context: {\n        mockData: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateUsers)(2000)\n    }\n});\nconst startServer = apolloServer.start();\nasync function applyNextHeaders(request, response) {\n    response.setHeader(\"Access-Control-Allow-Credentials\", \"true\");\n    response.setHeader(\"Access-Control-Allow-Origin\", \"https://studio.apollographql.com\");\n    response.setHeader(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n    if (request.method === \"OPTIONS\") {\n        response.end();\n        return false;\n    }\n}\nasync function handler(req, res) {\n    await applyNextHeaders(req, res);\n    await startServer;\n    await apolloServer.createHandler({\n        path: \"/api/graphql\"\n    })(req, res);\n};\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3JhcGhxbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSjtBQUNSO0FBR3ZDLE1BQU1JLFlBQVksR0FBRyxJQUFJSiw2REFBWSxDQUFDO0lBQ3BDQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEcsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRUgscURBQWEsQ0FBQyxJQUFJLENBQUM7S0FDOUI7Q0FDRixDQUFDO0FBQ0YsTUFBTUksV0FBVyxHQUFHSCxZQUFZLENBQUNJLEtBQUssRUFBRTtBQUV4QyxlQUFlQyxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDakRBLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLGtDQUFrQyxFQUFFLE1BQU0sQ0FBQztJQUM5REQsUUFBUSxDQUFDQyxTQUFTLENBQ2hCLDZCQUE2QixFQUM3QixrQ0FBa0MsQ0FDbkM7SUFDREQsUUFBUSxDQUFDQyxTQUFTLENBQ2hCLDhCQUE4QixFQUM5QixnREFBZ0QsQ0FDakQ7SUFDRCxJQUFJRixPQUFPLENBQUNHLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDaENGLFFBQVEsQ0FBQ0csR0FBRyxFQUFFO1FBQ2QsT0FBTyxLQUFLO0tBQ2I7Q0FDRjtBQUVjLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTVIsZ0JBQWdCLENBQUNPLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7SUFDakMsTUFBTVYsV0FBVztJQUNqQixNQUFNSCxZQUFZLENBQUNjLGFBQWEsQ0FBQztRQUMvQkMsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQyxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztDQUNiO0FBRU0sTUFBTUcsTUFBTSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUU7UUFDSEMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vcGFnZXMvYXBpL2dyYXBocWwudHM/ZWExZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLW1pY3JvJztcbmltcG9ydCB7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSBmcm9tICdAL2dyYXBocWwnXG5pbXBvcnQgeyBnZW5lcmF0ZVVzZXJzIH0gZnJvbSAnQC91dGlscydcblxuXG5jb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgdHlwZURlZnMsXG4gIHJlc29sdmVycyxcbiAgY29udGV4dDoge1xuICAgIG1vY2tEYXRhOiBnZW5lcmF0ZVVzZXJzKDIwMDApLFxuICB9XG59KTtcbmNvbnN0IHN0YXJ0U2VydmVyID0gYXBvbGxvU2VydmVyLnN0YXJ0KCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGFwcGx5TmV4dEhlYWRlcnMocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgcmVzcG9uc2Uuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJylcbiAgcmVzcG9uc2Uuc2V0SGVhZGVyKFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLFxuICAgICdodHRwczovL3N0dWRpby5hcG9sbG9ncmFwaHFsLmNvbSdcbiAgKVxuICByZXNwb25zZS5zZXRIZWFkZXIoXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0J1xuICApXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XG4gICAgcmVzcG9uc2UuZW5kKClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGF3YWl0IGFwcGx5TmV4dEhlYWRlcnMocmVxLCByZXMpO1xuICBhd2FpdCBzdGFydFNlcnZlclxuICBhd2FpdCBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcih7XG4gICAgcGF0aDogJy9hcGkvZ3JhcGhxbCcsXG4gIH0pKHJlcSwgcmVzKVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn0iXSwibmFtZXMiOlsiQXBvbGxvU2VydmVyIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJnZW5lcmF0ZVVzZXJzIiwiYXBvbGxvU2VydmVyIiwiY29udGV4dCIsIm1vY2tEYXRhIiwic3RhcnRTZXJ2ZXIiLCJzdGFydCIsImFwcGx5TmV4dEhlYWRlcnMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJzZXRIZWFkZXIiLCJtZXRob2QiLCJlbmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY3JlYXRlSGFuZGxlciIsInBhdGgiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/graphql.ts\n");

/***/ }),

/***/ "(api)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateUsers\": () => (/* binding */ generateUsers)\n/* harmony export */ });\n/* harmony import */ var casual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! casual */ \"casual\");\n/* harmony import */ var casual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(casual__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction generateUsers(amount) {\n    const users = [];\n    for(let i = 0; i < 2000; i++){\n        users.push({\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n            name: {\n                firstName: (casual__WEBPACK_IMPORTED_MODULE_0___default().first_name),\n                lastName: (casual__WEBPACK_IMPORTED_MODULE_0___default().last_name)\n            },\n            phone: {\n                countryCode: (casual__WEBPACK_IMPORTED_MODULE_0___default().country_code),\n                number: (casual__WEBPACK_IMPORTED_MODULE_0___default().phone)\n            },\n            address: {\n                building: (casual__WEBPACK_IMPORTED_MODULE_0___default().building_number),\n                street: (casual__WEBPACK_IMPORTED_MODULE_0___default().street),\n                city: (casual__WEBPACK_IMPORTED_MODULE_0___default().city),\n                region: (casual__WEBPACK_IMPORTED_MODULE_0___default().state),\n                country: (casual__WEBPACK_IMPORTED_MODULE_0___default().country),\n                postCode: casual__WEBPACK_IMPORTED_MODULE_0___default().zip(5)\n            }\n        });\n    }\n    return users;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRCO0FBQ1E7QUFFN0IsU0FBU0csYUFBYSxDQUFDQyxNQUFjLEVBQWU7SUFDekQsTUFBTUMsS0FBSyxHQUFlLEVBQUU7SUFDNUIsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxFQUFFQSxDQUFDLEVBQUUsQ0FBRTtRQUM3QkQsS0FBSyxDQUFDRSxJQUFJLENBQUM7WUFDVEMsRUFBRSxFQUFFTix3Q0FBTSxFQUFFO1lBQ1pPLElBQUksRUFBRTtnQkFDSkMsU0FBUyxFQUFFViwwREFBaUI7Z0JBQzVCWSxRQUFRLEVBQUVaLHlEQUFnQjthQUMzQjtZQUNEYyxLQUFLLEVBQUU7Z0JBQ0xDLFdBQVcsRUFBRWYsNERBQW1CO2dCQUNoQ2lCLE1BQU0sRUFBRWpCLHFEQUFZO2FBQ3JCO1lBQ0RrQixPQUFPLEVBQUU7Z0JBQ1BDLFFBQVEsRUFBRW5CLCtEQUFzQjtnQkFDaENxQixNQUFNLEVBQUVyQixzREFBYTtnQkFDckJzQixJQUFJLEVBQUV0QixvREFBVztnQkFDakJ1QixNQUFNLEVBQUV2QixxREFBWTtnQkFDcEJ5QixPQUFPLEVBQUV6Qix1REFBYztnQkFDdkIwQixRQUFRLEVBQUUxQixpREFBVSxDQUFDLENBQUMsQ0FBQzthQUN4QjtTQUNGLENBQUM7S0FDSDtJQUNELE9BQU9LLEtBQUssQ0FBQztDQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi91dGlscy9pbmRleC50cz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXN1YWwgZnJvbSAnY2FzdWFsJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVc2VycyhhbW91bnQ6IG51bWJlcik6IEFycmF5PFVzZXI+IHtcbiAgY29uc3QgdXNlcnM6QXJyYXk8VXNlcj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDAwOyBpKyspIHtcbiAgICB1c2Vycy5wdXNoKHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgZmlyc3ROYW1lOiBjYXN1YWwuZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGNhc3VhbC5sYXN0X25hbWUsXG4gICAgICB9LFxuICAgICAgcGhvbmU6IHtcbiAgICAgICAgY291bnRyeUNvZGU6IGNhc3VhbC5jb3VudHJ5X2NvZGUsXG4gICAgICAgIG51bWJlcjogY2FzdWFsLnBob25lLFxuICAgICAgfSxcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgYnVpbGRpbmc6IGNhc3VhbC5idWlsZGluZ19udW1iZXIsXG4gICAgICAgIHN0cmVldDogY2FzdWFsLnN0cmVldCxcbiAgICAgICAgY2l0eTogY2FzdWFsLmNpdHksXG4gICAgICAgIHJlZ2lvbjogY2FzdWFsLnN0YXRlLFxuICAgICAgICBjb3VudHJ5OiBjYXN1YWwuY291bnRyeSxcbiAgICAgICAgcG9zdENvZGU6IGNhc3VhbC56aXAoNSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiB1c2Vycztcbn0iXSwibmFtZXMiOlsiY2FzdWFsIiwidjQiLCJ1dWlkdjQiLCJnZW5lcmF0ZVVzZXJzIiwiYW1vdW50IiwidXNlcnMiLCJpIiwicHVzaCIsImlkIiwibmFtZSIsImZpcnN0TmFtZSIsImZpcnN0X25hbWUiLCJsYXN0TmFtZSIsImxhc3RfbmFtZSIsInBob25lIiwiY291bnRyeUNvZGUiLCJjb3VudHJ5X2NvZGUiLCJudW1iZXIiLCJhZGRyZXNzIiwiYnVpbGRpbmciLCJidWlsZGluZ19udW1iZXIiLCJzdHJlZXQiLCJjaXR5IiwicmVnaW9uIiwic3RhdGUiLCJjb3VudHJ5IiwicG9zdENvZGUiLCJ6aXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();