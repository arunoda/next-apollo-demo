"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_users_tsx",{

/***/ "./pages/users.tsx":
/*!*************************!*\
  !*** ./pages/users.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserCard/UserCard */ \"./components/UserCard/UserCard.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skeleton/Skeleton */ \"./components/Skeleton/Skeleton.tsx\");\n/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorboundary */ \"./pages/errorboundary.tsx\");\n/* harmony import */ var _queries_getUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries/getUsers */ \"./queries/getUsers.ts\");\n/* harmony import */ var _components_NoUser_NoUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NoUser/NoUser */ \"./components/NoUser/NoUser.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: grid;\\ngrid-template-rows: auto;\\ngrid-row-gap: 15px;\\nwidth: 60%;\\n\\n@media screen and (max-width:680px){\\n  margin:auto;\\n  display: grid;\\n  grid-template-columns: repeat(1, 100%);\\n  width: 80%;\\n  font-size: var(--font-size-p-small);\\n}\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Users = ()=>{\n    var _data_users;\n    _s();\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(_queries_getUsers__WEBPACK_IMPORTED_MODULE_7__.ALL_USERS);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);\n    const numberPerPage = 20;\n    const loadMoreUsers = ()=>{\n        const nextPage = page + numberPerPage;\n        setPage(nextPage);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n            lineNumber: 23,\n            columnNumber: 16\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_errorboundary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n            lineNumber: 26,\n            columnNumber: 16\n        }, undefined);\n    }\n    if (!data.users) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NoUser_NoUser__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n            lineNumber: 29,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Grid, {\n                \"data-testid\": \"user-grid\",\n                children: data === null || data === void 0 ? void 0 : (_data_users = data.users) === null || _data_users === void 0 ? void 0 : _data_users.slice(0, 10).map((user, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        user: user\n                    }, i, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>loadMoreUsers()\n            }, void 0, false, {\n                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Users, \"y3gogN3DpUS06DccxTe7RgRunaw=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery\n    ];\n});\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nconst Grid = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c1 = Grid;\nvar _c, _c1;\n$RefreshReg$(_c, \"Users\");\n$RefreshReg$(_c1, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDWTtBQUNNO0FBQ2I7QUFDbUI7QUFDakI7QUFDSTtBQUNDO0FBQ2hCO0FBRWhDLE1BQU1TLFFBQVEsSUFBTTtRQXlCQUM7O0lBeEJoQixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFRixLQUFJLEVBQUUsR0FBR1AseURBQVFBLENBQUNHLHdEQUFTQTtJQUNuRCxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQVM7SUFDekMsTUFBTU8sZ0JBQWdCO0lBR3RCLE1BQU1DLGdCQUFnQixJQUFJO1FBQ3RCLE1BQU1DLFdBQVdKLE9BQU9FO1FBQ3hCRCxRQUFRRztJQUNaO0lBRUEsSUFBSU4sU0FBUTtRQUNSLHFCQUFPLDhEQUFDUCxxRUFBY0E7Ozs7O0lBQzFCLENBQUM7SUFDRCxJQUFJUSxPQUFNO1FBQ04scUJBQU8sOERBQUNQLHNEQUFhQTs7Ozs7SUFDekIsQ0FBQztJQUNELElBQUcsQ0FBQ0ssS0FBS1EsS0FBSyxFQUFFO1FBQ1oscUJBQU8sOERBQUNYLGlFQUFNQTs7Ozs7SUFDbEIsQ0FBQztJQUVELHFCQUNJOzswQkFDSSw4REFBQ1k7Z0JBQUtDLGVBQVk7MEJBRVZWLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsS0FBTVEsS0FBSyxjQUFYUix5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYVcsTUFBTSxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDQyxNQUFXQyxrQkFDdEMsOERBQUN0QixxRUFBUUE7d0JBQVNxQixNQUFNQTt1QkFBVEM7Ozs7a0NBQ2pCOzs7Ozs7MEJBR1YsOERBQUN2QixpRUFBTUE7Z0JBQUN3QixTQUFTLElBQUlUOzs7Ozs7OztBQUlqQztHQWxDTVA7O1FBQytCTixxREFBUUE7OztLQUR2Q007QUFvQ04sK0RBQWVBLEtBQUtBLEVBQUE7QUFFcEIsTUFBTVUsT0FBT25CLDJEQUFVO01BQWpCbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMudHN4PzhjYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcbmltcG9ydCBVc2VyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJDYXJkL1VzZXJDYXJkJ1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBTa2VsZXRvbkxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NrZWxldG9uL1NrZWxldG9uJ1xuaW1wb3J0IEVycm9yYm91bmRhcnkgZnJvbSAnLi9lcnJvcmJvdW5kYXJ5J1xuaW1wb3J0IHsgQUxMX1VTRVJTIH0gZnJvbSAnLi4vcXVlcmllcy9nZXRVc2VycydcbmltcG9ydCBOb1VzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ob1VzZXIvTm9Vc2VyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVXNlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoQUxMX1VTRVJTKTtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIGNvbnN0IG51bWJlclBlclBhZ2UgPSAyMDtcblxuXG4gICAgY29uc3QgbG9hZE1vcmVVc2VycyA9ICgpPT57XG4gICAgICAgIGNvbnN0IG5leHRQYWdlID0gcGFnZSArIG51bWJlclBlclBhZ2VcbiAgICAgICAgc2V0UGFnZShuZXh0UGFnZSk7XG4gICAgfVxuXG4gICAgaWYgKGxvYWRpbmcpe1xuICAgICAgICByZXR1cm4gPFNrZWxldG9uTG9hZGVyIC8+XG4gICAgfSBcbiAgICBpZiAoZXJyb3Ipe1xuICAgICAgICByZXR1cm4gPEVycm9yYm91bmRhcnkgLz5cbiAgICB9IFxuICAgIGlmKCFkYXRhLnVzZXJzKSB7XG4gICAgICAgIHJldHVybiA8Tm9Vc2VyLz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEdyaWQgZGF0YS10ZXN0aWQ9XCJ1c2VyLWdyaWRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE/LnVzZXJzPy5zbGljZSgwLCAxMCkubWFwKCh1c2VyOiBhbnksIGkpPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlckNhcmQga2V5PXtpfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PmxvYWRNb3JlVXNlcnMoKX0gLz5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzXG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbmdyaWQtcm93LWdhcDogMTVweDtcbndpZHRoOiA2MCU7XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjgwcHgpe1xuICBtYXJnaW46YXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTAwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXAtc21hbGwpO1xufVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJCdXR0b24iLCJVc2VyQ2FyZCIsInVzZVF1ZXJ5IiwiU2tlbGV0b25Mb2FkZXIiLCJFcnJvcmJvdW5kYXJ5IiwiQUxMX1VTRVJTIiwiTm9Vc2VyIiwidXNlU3RhdGUiLCJVc2VycyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwic2V0UGFnZSIsIm51bWJlclBlclBhZ2UiLCJsb2FkTW9yZVVzZXJzIiwibmV4dFBhZ2UiLCJ1c2VycyIsIkdyaWQiLCJkYXRhLXRlc3RpZCIsInNsaWNlIiwibWFwIiwidXNlciIsImkiLCJvbkNsaWNrIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.tsx\n"));

/***/ })

});