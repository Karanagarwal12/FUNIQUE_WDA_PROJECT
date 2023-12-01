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

/***/ "(app-pages-browser)/./app/components/Interests.js":
/*!*************************************!*\
  !*** ./app/components/Interests.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Interests; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts */ \"(app-pages-browser)/./app/components/Posts.js\");\n/* harmony import */ var _styles_interests_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/interests.css */ \"(app-pages-browser)/./app/styles/interests.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Interests(param) {\n    let { data } = param;\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [interests, setInterests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"j2348fj30rer\",\n            title: \"Foot Ball\"\n        },\n        {\n            id: \"j2348fj30rer\",\n            title: \"Volleyball\"\n        },\n        {\n            id: \"j2348fj30rer\",\n            title: \"Web Dev\"\n        },\n        {\n            id: \"j2348fj30rer\",\n            title: \"Music\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Filter posts when data.interest changes\n        const filteredPosts = data.posts.filter((post)=>post.tags.some((tag)=>tag.includes(data.interest)));\n        setPosts(filteredPosts);\n    }, [\n        data.interest,\n        data.posts\n    ]);\n    console.log(data.interest);\n    // setPosts(posts.filter((post)=>post.tags.some(tag => tag.includes(data.interest))));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"interestInfo\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header\",\n                children: interests.map((interest, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: (e)=>{\n                            data.setInterest(e.target.innerHTML);\n                            setPosts(posts.filter((post)=>post.tags.some((tag)=>tag.includes(data.interest))));\n                            console.log(posts);\n                        },\n                        className: data.interest == interest.title && \"interest select\" || \"interest\",\n                        children: interest.title\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                        lineNumber: 39,\n                        columnNumber: 47\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            posts[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: {\n                    posts\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Interests, \"D/XC7gWCz/tJYrs185dsp0ZDrgU=\");\n_c = Interests;\nvar _c;\n$RefreshReg$(_c, \"Interests\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ludGVyZXN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNoQjtBQUNLO0FBRWpCLFNBQVNHLFVBQVUsS0FBTTtRQUFOLEVBQUNDLElBQUksRUFBQyxHQUFOOztJQUM5QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7UUFDdkM7WUFDSVMsSUFBSTtZQUNKQyxPQUFPO1FBQ1g7UUFDQTtZQUNJRCxJQUFJO1lBQ0pDLE9BQU87UUFDWDtRQUNBO1lBQ0lELElBQUk7WUFDSkMsT0FBTztRQUNYO1FBQ0E7WUFDSUQsSUFBSTtZQUNKQyxPQUFPO1FBQ1g7S0FHSDtJQUNEVCxnREFBU0EsQ0FBQztRQUNOLDBDQUEwQztRQUMxQyxNQUFNVSxnQkFBZ0JQLEtBQUtDLEtBQUssQ0FBQ08sTUFBTSxDQUFDQyxDQUFBQSxPQUN0Q0EsS0FBS0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLFFBQVEsQ0FBQ2IsS0FBS2MsUUFBUTtRQUVsRFosU0FBU0s7SUFDWCxHQUFHO1FBQUNQLEtBQUtjLFFBQVE7UUFBRWQsS0FBS0MsS0FBSztLQUFDO0lBQ2hDYyxRQUFRQyxHQUFHLENBQUNoQixLQUFLYyxRQUFRO0lBQ3pCLHNGQUFzRjtJQUN0RixxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWZixVQUFVZ0IsR0FBRyxDQUFDLENBQUNMLFVBQVNNLGtCQUFLLDhEQUFDQzt3QkFBS0MsU0FBUyxDQUFDQzs0QkFDMUN2QixLQUFLd0IsV0FBVyxDQUFDRCxFQUFFRSxNQUFNLENBQUNDLFNBQVM7NEJBQ25DeEIsU0FBU0QsTUFBTU8sTUFBTSxDQUFDLENBQUNDLE9BQU9BLEtBQUtDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxRQUFRLENBQUNiLEtBQUtjLFFBQVE7NEJBQzlFQyxRQUFRQyxHQUFHLENBQUNmO3dCQUNaO3dCQUFXaUIsV0FBV2xCLEtBQUtjLFFBQVEsSUFBRUEsU0FBU1IsS0FBSyxJQUFNLHFCQUFxQjtrQ0FBYVEsU0FBU1IsS0FBSzt1QkFBakdjOzs7Ozs7Ozs7O1lBRWZuQixLQUFLLENBQUMsRUFBRSxrQkFDTCw4REFBQ0gsOENBQUtBO2dCQUFDRSxNQUFNO29CQUFFQztnQkFBTTs7Ozs7Ozs7Ozs7O0FBSXJDO0dBN0N3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSW50ZXJlc3RzLmpzP2JmYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0c1wiXHJcbmltcG9ydCAnLi4vc3R5bGVzL2ludGVyZXN0cy5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlcmVzdHMoe2RhdGF9KSB7XHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpbnRlcmVzdHMsIHNldEludGVyZXN0c10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJqMjM0OGZqMzByZXJcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRm9vdCBCYWxsXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcImoyMzQ4ZmozMHJlclwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJWb2xsZXliYWxsXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcImoyMzQ4ZmozMHJlclwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJXZWIgRGV2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcImoyMzQ4ZmozMHJlclwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJNdXNpY1wiLFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIEZpbHRlciBwb3N0cyB3aGVuIGRhdGEuaW50ZXJlc3QgY2hhbmdlc1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUG9zdHMgPSBkYXRhLnBvc3RzLmZpbHRlcihwb3N0ID0+XHJcbiAgICAgICAgICBwb3N0LnRhZ3Muc29tZSh0YWcgPT4gdGFnLmluY2x1ZGVzKGRhdGEuaW50ZXJlc3QpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0UG9zdHMoZmlsdGVyZWRQb3N0cyk7XHJcbiAgICAgIH0sIFtkYXRhLmludGVyZXN0LCBkYXRhLnBvc3RzXSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmludGVyZXN0KTtcclxuICAgIC8vIHNldFBvc3RzKHBvc3RzLmZpbHRlcigocG9zdCk9PnBvc3QudGFncy5zb21lKHRhZyA9PiB0YWcuaW5jbHVkZXMoZGF0YS5pbnRlcmVzdCkpKSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJlc3RJbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7aW50ZXJlc3RzLm1hcCgoaW50ZXJlc3QsaSkgPT48c3BhbiBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNldEludGVyZXN0KGUudGFyZ2V0LmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHMocG9zdHMuZmlsdGVyKChwb3N0KT0+cG9zdC50YWdzLnNvbWUodGFnID0+IHRhZy5pbmNsdWRlcyhkYXRhLmludGVyZXN0KSkpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0ga2V5PXtpfSBjbGFzc05hbWU9e2RhdGEuaW50ZXJlc3Q9PWludGVyZXN0LnRpdGxlICYmIChgaW50ZXJlc3Qgc2VsZWN0YCkgfHwgXCJpbnRlcmVzdFwifT57aW50ZXJlc3QudGl0bGV9PC9zcGFuPil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cG9zdHNbMF0gJiYgXHJcbiAgICAgICAgICAgICAgICA8UG9zdHMgZGF0YT17eyBwb3N0cyB9fSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQb3N0cyIsIkludGVyZXN0cyIsImRhdGEiLCJwb3N0cyIsInNldFBvc3RzIiwiaW50ZXJlc3RzIiwic2V0SW50ZXJlc3RzIiwiaWQiLCJ0aXRsZSIsImZpbHRlcmVkUG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwidGFncyIsInNvbWUiLCJ0YWciLCJpbmNsdWRlcyIsImludGVyZXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImkiLCJzcGFuIiwib25DbGljayIsImUiLCJzZXRJbnRlcmVzdCIsInRhcmdldCIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Interests.js\n"));

/***/ })

});