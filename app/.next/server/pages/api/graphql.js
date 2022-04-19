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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": () => (/* binding */ resolvers)\n/* harmony export */ });\nconst resolvers = {\n    Query: {\n        users: (parent, args, context, _)=>{\n            let { offset , limit  } = args;\n            if (offset < 1) {\n                offset = 1;\n            }\n            const cursor = offset * limit;\n            const data = context.mockData.slice(cursor, cursor + limit);\n            return data;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ncmFwaHFsL3Jlc29sdmVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR08sTUFBTUEsU0FBUyxHQUFHO0lBQ3ZCQyxLQUFLLEVBQUU7UUFDTEMsS0FBSyxFQUFFLENBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLENBQUMsR0FBa0I7WUFDaEQsSUFBSSxFQUFFQyxNQUFNLEdBQUVDLEtBQUssR0FBRSxHQUFHSixJQUFJO1lBQzVCLElBQUlHLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2RBLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDWjtZQUNELE1BQU1FLE1BQU0sR0FBR0YsTUFBTSxHQUFHQyxLQUFLO1lBQzdCLE1BQU1FLElBQUksR0FBR0wsT0FBTyxDQUFDTSxRQUFRLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxFQUFFQSxNQUFNLEdBQUdELEtBQUssQ0FBQztZQUMzRCxPQUFPRSxJQUFJLENBQUM7U0FDYjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vZ3JhcGhxbC9yZXNvbHZlcnMudHM/Yjk5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5lcmF0ZVVzZXJzIH0gZnJvbSAnQC91dGlscyc7XG5cblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICB1c2VyczogKHBhcmVudCwgYXJncywgY29udGV4dCwgXyk6IEFycmF5PFVzZXI+ID0+IHtcbiAgICAgIGxldCB7IG9mZnNldCwgbGltaXQgfSA9IGFyZ3M7XG4gICAgICBpZiAob2Zmc2V0IDwgMSkge1xuICAgICAgICBvZmZzZXQgPSAxO1xuICAgICAgfVxuICAgICAgY29uc3QgY3Vyc29yID0gb2Zmc2V0ICogbGltaXQ7XG4gICAgICBjb25zdCBkYXRhID0gY29udGV4dC5tb2NrRGF0YS5zbGljZShjdXJzb3IsIGN1cnNvciArIGxpbWl0KTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gIH0sXG59OyJdLCJuYW1lcyI6WyJyZXNvbHZlcnMiLCJRdWVyeSIsInVzZXJzIiwicGFyZW50IiwiYXJncyIsImNvbnRleHQiLCJfIiwib2Zmc2V0IiwibGltaXQiLCJjdXJzb3IiLCJkYXRhIiwibW9ja0RhdGEiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./graphql/resolvers.ts\n");

/***/ }),

/***/ "(api)/./graphql/typeDefs.ts":
/*!*****************************!*\
  !*** ./graphql/typeDefs.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n  # Types\n  type Address {\n    building: String\n    street: String\n    state: String\n    isoCountry: String\n    postCode: String\n  }\n  type Phone {\n    countryCode: String\n    number: String\n  }\n  type Name {\n    firstName: String \n    lastName: String\n  }\n  type User {\n    id: ID!\n    name: Name\n    phone: Phone\n    address: Address\n    email: String\n  }\n  # Queries\n  type Query {\n    users(offset: Int, limit: Int): [User]\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ncmFwaHFsL3R5cGVEZWZzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUVuQyxNQUFNQyxRQUFRLEdBQUdELG9EQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QjVCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vZ3JhcGhxbC90eXBlRGVmcy50cz9iMTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nO1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gICMgVHlwZXNcbiAgdHlwZSBBZGRyZXNzIHtcbiAgICBidWlsZGluZzogU3RyaW5nXG4gICAgc3RyZWV0OiBTdHJpbmdcbiAgICBzdGF0ZTogU3RyaW5nXG4gICAgaXNvQ291bnRyeTogU3RyaW5nXG4gICAgcG9zdENvZGU6IFN0cmluZ1xuICB9XG4gIHR5cGUgUGhvbmUge1xuICAgIGNvdW50cnlDb2RlOiBTdHJpbmdcbiAgICBudW1iZXI6IFN0cmluZ1xuICB9XG4gIHR5cGUgTmFtZSB7XG4gICAgZmlyc3ROYW1lOiBTdHJpbmcgXG4gICAgbGFzdE5hbWU6IFN0cmluZ1xuICB9XG4gIHR5cGUgVXNlciB7XG4gICAgaWQ6IElEIVxuICAgIG5hbWU6IE5hbWVcbiAgICBwaG9uZTogUGhvbmVcbiAgICBhZGRyZXNzOiBBZGRyZXNzXG4gICAgZW1haWw6IFN0cmluZ1xuICB9XG4gICMgUXVlcmllc1xuICB0eXBlIFF1ZXJ5IHtcbiAgICB1c2VycyhvZmZzZXQ6IEludCwgbGltaXQ6IEludCk6IFtVc2VyXVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbImdxbCIsInR5cGVEZWZzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./graphql/typeDefs.ts\n");

/***/ }),

/***/ "(api)/./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/graphql */ \"(api)/./graphql/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"(api)/./utils/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_2__]);\n_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// const cors = Cors();\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    typeDefs: _graphql__WEBPACK_IMPORTED_MODULE_1__.typeDefs,\n    resolvers: _graphql__WEBPACK_IMPORTED_MODULE_1__.resolvers,\n    context: {\n        mockData: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateUsers)(2000)\n    }\n});\nconst startServer = apolloServer.start();\nasync function applyNextHeaders(request, response) {\n    response.setHeader(\"Access-Control-Allow-Credentials\", \"true\");\n    response.setHeader(\"Access-Control-Allow-Origin\", \"https://studio.apollographql.com\");\n    response.setHeader(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n    if (request.method === \"OPTIONS\") {\n        response.end();\n        return false;\n    }\n}\nasync function handler(req, res) {\n    await applyNextHeaders(req, res);\n    await startServer;\n    await apolloServer.createHandler({\n        path: \"/api/graphql\"\n    })(req, res);\n};\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3JhcGhxbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFSjtBQUNSO0FBR3ZDLHVCQUF1QjtBQUN2QixNQUFNSSxZQUFZLEdBQUcsSUFBSUosNkRBQVksQ0FBQztJQUNwQ0MsUUFBUTtJQUNSQyxTQUFTO0lBQ1RHLE9BQU8sRUFBRTtRQUNQQyxRQUFRLEVBQUVILHFEQUFhLENBQUMsSUFBSSxDQUFDO0tBQzlCO0NBQ0YsQ0FBQztBQUNGLE1BQU1JLFdBQVcsR0FBR0gsWUFBWSxDQUFDSSxLQUFLLEVBQUU7QUFFeEMsZUFBZUMsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ2pEQSxRQUFRLENBQUNDLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRSxNQUFNLENBQUM7SUFDOURELFFBQVEsQ0FBQ0MsU0FBUyxDQUNoQiw2QkFBNkIsRUFDN0Isa0NBQWtDLENBQ25DO0lBQ0RELFFBQVEsQ0FBQ0MsU0FBUyxDQUNoQiw4QkFBOEIsRUFDOUIsZ0RBQWdELENBQ2pEO0lBQ0QsSUFBSUYsT0FBTyxDQUFDRyxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ2hDRixRQUFRLENBQUNHLEdBQUcsRUFBRTtRQUNkLE9BQU8sS0FBSztLQUNiO0NBQ0Y7QUFFYyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1SLGdCQUFnQixDQUFDTyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLE1BQU1WLFdBQVc7SUFDakIsTUFBTUgsWUFBWSxDQUFDYyxhQUFhLENBQUM7UUFDL0JDLElBQUksRUFBRSxjQUFjO0tBQ3JCLENBQUMsQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHLENBQUM7Q0FDYjtBQUVNLE1BQU1HLE1BQU0sR0FBRztJQUNwQkMsR0FBRyxFQUFFO1FBQ0hDLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL3BhZ2VzL2FwaS9ncmFwaHFsLnRzP2VhMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1taWNybyc7XG5pbXBvcnQgQ29ycyBmcm9tICdtaWNyby1jb3JzJztcbmltcG9ydCB7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSBmcm9tICdAL2dyYXBocWwnXG5pbXBvcnQgeyBnZW5lcmF0ZVVzZXJzIH0gZnJvbSAnQC91dGlscydcblxuXG4vLyBjb25zdCBjb3JzID0gQ29ycygpO1xuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIHR5cGVEZWZzLFxuICByZXNvbHZlcnMsXG4gIGNvbnRleHQ6IHtcbiAgICBtb2NrRGF0YTogZ2VuZXJhdGVVc2VycygyMDAwKSxcbiAgfVxufSk7XG5jb25zdCBzdGFydFNlcnZlciA9IGFwb2xsb1NlcnZlci5zdGFydCgpO1xuXG5hc3luYyBmdW5jdGlvbiBhcHBseU5leHRIZWFkZXJzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHJlc3BvbnNlLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpXG4gIHJlc3BvbnNlLnNldEhlYWRlcihcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyxcbiAgICAnaHR0cHM6Ly9zdHVkaW8uYXBvbGxvZ3JhcGhxbC5jb20nXG4gIClcbiAgcmVzcG9uc2Uuc2V0SGVhZGVyKFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCdcbiAgKVxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgIHJlc3BvbnNlLmVuZCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBhd2FpdCBhcHBseU5leHRIZWFkZXJzKHJlcSwgcmVzKTtcbiAgYXdhaXQgc3RhcnRTZXJ2ZXJcbiAgYXdhaXQgYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoe1xuICAgIHBhdGg6ICcvYXBpL2dyYXBocWwnLFxuICB9KShyZXEsIHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59Il0sIm5hbWVzIjpbIkFwb2xsb1NlcnZlciIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiZ2VuZXJhdGVVc2VycyIsImFwb2xsb1NlcnZlciIsImNvbnRleHQiLCJtb2NrRGF0YSIsInN0YXJ0U2VydmVyIiwic3RhcnQiLCJhcHBseU5leHRIZWFkZXJzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwic2V0SGVhZGVyIiwibWV0aG9kIiwiZW5kIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/graphql.ts\n");

/***/ }),

/***/ "(api)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateUsers\": () => (/* binding */ generateUsers)\n/* harmony export */ });\n/* harmony import */ var casual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! casual */ \"casual\");\n/* harmony import */ var casual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(casual__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction generateUsers(amount) {\n    const users = [];\n    for(let i = 0; i < 2000; i++){\n        users.push({\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n            name: {\n                firstName: (casual__WEBPACK_IMPORTED_MODULE_0___default().first_name),\n                lastName: (casual__WEBPACK_IMPORTED_MODULE_0___default().last_name)\n            }\n        });\n    }\n    return users;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRCO0FBQ1E7QUFFN0IsU0FBU0csYUFBYSxDQUFDQyxNQUFjLEVBQWU7SUFDekQsTUFBTUMsS0FBSyxHQUFlLEVBQUU7SUFDNUIsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxFQUFFQSxDQUFDLEVBQUUsQ0FBRTtRQUM3QkQsS0FBSyxDQUFDRSxJQUFJLENBQUM7WUFDVEMsRUFBRSxFQUFFTix3Q0FBTSxFQUFFO1lBQ1pPLElBQUksRUFBRTtnQkFDSkMsU0FBUyxFQUFFViwwREFBaUI7Z0JBQzVCWSxRQUFRLEVBQUVaLHlEQUFnQjthQUMzQjtTQUNGLENBQUM7S0FDSDtJQUNELE9BQU9LLEtBQUssQ0FBQztDQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi91dGlscy9pbmRleC50cz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXN1YWwgZnJvbSAnY2FzdWFsJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVc2VycyhhbW91bnQ6IG51bWJlcik6IEFycmF5PFVzZXI+IHtcbiAgY29uc3QgdXNlcnM6QXJyYXk8VXNlcj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDAwOyBpKyspIHtcbiAgICB1c2Vycy5wdXNoKHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgZmlyc3ROYW1lOiBjYXN1YWwuZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGNhc3VhbC5sYXN0X25hbWUsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gdXNlcnM7XG59Il0sIm5hbWVzIjpbImNhc3VhbCIsInY0IiwidXVpZHY0IiwiZ2VuZXJhdGVVc2VycyIsImFtb3VudCIsInVzZXJzIiwiaSIsInB1c2giLCJpZCIsIm5hbWUiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdE5hbWUiLCJsYXN0X25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/index.ts\n");

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