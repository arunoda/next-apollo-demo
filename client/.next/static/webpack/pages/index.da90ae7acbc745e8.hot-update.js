"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skeleton/Skeleton */ \"./components/Skeleton/Skeleton.tsx\");\n/* harmony import */ var _components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserCard/UserCard */ \"./components/UserCard/UserCard.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorboundary */ \"./pages/errorboundary.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nquery AllUsers{\\n  user{\\n   name\\n   address\\n   email\\n   phone\\n }\\n}\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: flex;\\nflex-direction:column;\\njustify-content: center;\\nalign-items: center;\\nmargin-top: 3rem;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: grid;\\ngrid-template-rows: auto;\\ngrid-row-gap: 15px;\\nwidth: 60%;\\n\\n@media screen and (max-width:680px){\\n  margin:auto;\\n  display: grid;\\n  grid-template-columns: repeat(1, 100%);\\n  width: 80%;\\n  font-size: var(--font-size-p-small);\\n}\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ALL_USERS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject());\nconst Home = ()=>{\n    _s();\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(ALL_USERS);\n    console.log(data);\n    // const showTheFirstTwent = data.slice(0,20);\n    const loadMoreData = ()=>{};\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_errorboundary__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Users App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MainWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Grid, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nconst MainWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main(_templateObject1());\n_c1 = MainWrapper;\nconst Grid = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = Grid;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"MainWrapper\");\n$RefreshReg$(_c2, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ1I7QUFDb0I7QUFDWTtBQUNOO0FBQ1I7QUFDSDtBQUUzQyxNQUFNUSxZQUFZRixtREFBR0E7QUFXckIsTUFBTUcsT0FBTyxJQUFNOztJQUNqQixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR1Asd0RBQVFBLENBQUNHO0lBRTFDSyxRQUFRQyxHQUFHLENBQUNGO0lBRVosOENBQThDO0lBRTlDLE1BQU1HLGVBQWUsSUFBTSxDQUUzQjtJQUVBLElBQUlMLFNBQVMscUJBQU8sOERBQUNQLHFFQUFjQTs7Ozs7SUFDbkMsSUFBSVEsT0FBTyxxQkFBTyw4REFBQ0osc0RBQWFBOzs7OztJQUVoQyxxQkFDRSw4REFBQ1M7OzBCQUNDLDhEQUFDZixrREFBSUE7O2tDQUNILDhEQUFDZ0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQzs7a0NBQ0MsOERBQUNDOzswQ0FDQyw4REFBQ3JCLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNBLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNBLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNBLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNBLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNBLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNELHFFQUFjQTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDRCxpRUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7R0FwQ01POztRQUM2Qkosb0RBQVFBOzs7S0FEckNJO0FBc0NOLCtEQUFlQSxJQUFJQSxFQUFBO0FBRW5CLE1BQU1lLGNBQWN4Qiw0REFBVztNQUF6QndCO0FBUU4sTUFBTUMsT0FBT3pCLDJEQUFVO01BQWpCeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcbmltcG9ydCBTa2VsZXRvbkxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NrZWxldG9uL1NrZWxldG9uJ1xuaW1wb3J0IFVzZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckNhcmQvVXNlckNhcmQnXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgRXJyb3Jib3VuZGFyeSBmcm9tICcuL2Vycm9yYm91bmRhcnknXG5cbmNvbnN0IEFMTF9VU0VSUyA9IGdxbGBcbnF1ZXJ5IEFsbFVzZXJze1xuICB1c2Vye1xuICAgbmFtZVxuICAgYWRkcmVzc1xuICAgZW1haWxcbiAgIHBob25lXG4gfVxufVxuYFxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShBTExfVVNFUlMpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIC8vIGNvbnN0IHNob3dUaGVGaXJzdFR3ZW50ID0gZGF0YS5zbGljZSgwLDIwKTtcblxuICBjb25zdCBsb2FkTW9yZURhdGEgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPFNrZWxldG9uTG9hZGVyIC8+XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvcmJvdW5kYXJ5IC8+XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Vc2VycyBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPE1haW5XcmFwcGVyPlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICA8U2tlbGV0b25Mb2FkZXIgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8QnV0dG9uIC8+XG4gICAgICA8L01haW5XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgTWFpbldyYXBwZXIgPSBzdHlsZWQubWFpbmBcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5tYXJnaW4tdG9wOiAzcmVtO1xuYDtcblxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuZ3JpZC1yb3ctZ2FwOiAxNXB4O1xud2lkdGg6IDYwJTtcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2ODBweCl7XG4gIG1hcmdpbjphdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxMDAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcC1zbWFsbCk7XG59XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIkhlYWQiLCJCdXR0b24iLCJTa2VsZXRvbkxvYWRlciIsIlVzZXJDYXJkIiwidXNlUXVlcnkiLCJncWwiLCJFcnJvcmJvdW5kYXJ5IiwiQUxMX1VTRVJTIiwiSG9tZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibG9hZE1vcmVEYXRhIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIk1haW5XcmFwcGVyIiwiR3JpZCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});