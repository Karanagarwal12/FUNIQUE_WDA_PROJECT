"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Sidebar.js":
/*!***********************************!*\
  !*** ./app/components/Sidebar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Sidebar(param) {\n    let { data } = param;\n    _s();\n    const [topInterests, setTopInterests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Foot Ball\",\n            id: \"2326rg87y6r5897j\"\n        },\n        {\n            name: \"Volleyball\",\n            id: \"2326rg87y6r5897j\"\n        },\n        {\n            name: \"Web Dev\",\n            id: \"2326rg87y6r5897j\"\n        },\n        {\n            name: \"Music\",\n            id: \"2326rg87y6r5897j\"\n        }\n    ]);\n    function handler(e) {\n        data.setInterest(e.target.innerHTML);\n        data.setHeroCenter(\"interest\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sideBar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"intrests\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Interests\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: topInterests.map((interest)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handler,\n                                children: interest.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                                lineNumber: 32,\n                                columnNumber: 53\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"others\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Community\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Explore\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Achievements\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Sidebar.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Sidebar, \"abRmdkhdLf6QwXKZhIkBuVcTfFo=\");\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NpZGViYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBR2pCLFNBQVNDLFFBQVEsS0FBTTtRQUFOLEVBQUNDLElBQUksRUFBQyxHQUFOOztJQUM1QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQztRQUM3QztZQUNJSyxNQUFNO1lBQ05DLElBQUk7UUFDUjtRQUNBO1lBQ0lELE1BQU07WUFDTkMsSUFBSTtRQUNSO1FBQ0E7WUFDSUQsTUFBTTtZQUNOQyxJQUFJO1FBQ1I7UUFDQTtZQUNJRCxNQUFNO1lBQ05DLElBQUk7UUFDUjtLQUNIO0lBQ0QsU0FBU0MsUUFBUUMsQ0FBQztRQUNkTixLQUFLTyxXQUFXLENBQUNELEVBQUVFLE1BQU0sQ0FBQ0MsU0FBUztRQUNuQ1QsS0FBS1UsYUFBYSxDQUFDO0lBQ3ZCO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUNJYixhQUFhYyxHQUFHLENBQUMsQ0FBQ0MseUJBQWEsOERBQUNDO2dDQUFHQyxTQUFTYjswQ0FBVVcsU0FBU2IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzVFLDhEQUFDUTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEI7R0F2Q3dCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TaWRlYmFyLmpzPzJjMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoe2RhdGF9KSB7XHJcbiAgICBjb25zdCBbdG9wSW50ZXJlc3RzLCBzZXRUb3BJbnRlcmVzdHNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJGb290IEJhbGxcIixcclxuICAgICAgICAgICAgaWQ6IFwiMjMyNnJnODd5NnI1ODk3alwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVm9sbGV5YmFsbFwiLFxyXG4gICAgICAgICAgICBpZDogXCIyMzI2cmc4N3k2cjU4OTdqXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJXZWIgRGV2XCIsXHJcbiAgICAgICAgICAgIGlkOiBcIjIzMjZyZzg3eTZyNTg5N2pcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIk11c2ljXCIsXHJcbiAgICAgICAgICAgIGlkOiBcIjIzMjZyZzg3eTZyNTg5N2pcIlxyXG4gICAgICAgIH1cclxuICAgIF0pXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKGUpe1xyXG4gICAgICAgIGRhdGEuc2V0SW50ZXJlc3QoZS50YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICBkYXRhLnNldEhlcm9DZW50ZXIoXCJpbnRlcmVzdFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlQmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cmVzdHNcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5JbnRlcmVzdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BJbnRlcmVzdHMubWFwKChpbnRlcmVzdCkgPT4gPGxpIG9uQ2xpY2s9e2hhbmRsZXJ9PntpbnRlcmVzdC5uYW1lfTwvbGk+KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkNvbW11bml0eTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDE+RXhwbG9yZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDE+QWNoaWV2ZW1lbnRzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMT5BYm91dDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2lkZWJhciIsImRhdGEiLCJ0b3BJbnRlcmVzdHMiLCJzZXRUb3BJbnRlcmVzdHMiLCJuYW1lIiwiaWQiLCJoYW5kbGVyIiwiZSIsInNldEludGVyZXN0IiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwic2V0SGVyb0NlbnRlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJtYXAiLCJpbnRlcmVzdCIsImxpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Sidebar.js\n"));

/***/ })

});