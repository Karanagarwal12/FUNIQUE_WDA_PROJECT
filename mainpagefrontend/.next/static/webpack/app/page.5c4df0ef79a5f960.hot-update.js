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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Interests; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts */ \"(app-pages-browser)/./app/components/Posts.js\");\n/* harmony import */ var _styles_interests_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/interests.css */ \"(app-pages-browser)/./app/styles/interests.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Interests(param) {\n    let { data } = param;\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [interests, setInterests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.interests);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const filteredPosts = data.posts.filter((post)=>post.tags.some((tag)=>tag.includes(data.interest)));\n        setPosts(filteredPosts);\n    }, []);\n    const handler = (e)=>{\n        data.setInterest(e.target.innerHTML);\n        setPosts(data.posts.filter((post)=>post.tags.some((tag)=>tag.includes(e.target.innerHTML))));\n        console.log(posts);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"interestInfo\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header\",\n                children: interests.map((interest, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: handler,\n                        className: data.interest == interest && \"interest select\" || \"interest\",\n                        children: interest\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                        lineNumber: 24,\n                        columnNumber: 49\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            posts[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: {\n                    posts\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Interests, \"m+cOm2jE+2IBVbNocjL5B5SMUuk=\");\n_c = Interests;\nvar _c;\n$RefreshReg$(_c, \"Interests\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ludGVyZXN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNoQjtBQUNLO0FBRWpCLFNBQVNHLFVBQVUsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUM5QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUNJLEtBQUtHLFNBQVM7SUFDekROLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsZ0JBQWdCTCxLQUFLQyxLQUFLLENBQUNLLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FDcENBLEtBQUtDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxRQUFRLENBQUNYLEtBQUtZLFFBQVE7UUFFcERWLFNBQVNHO0lBQ2IsR0FBRyxFQUFFO0lBRUwsTUFBTVEsVUFBVSxDQUFDQztRQUNiZCxLQUFLZSxXQUFXLENBQUNELEVBQUVFLE1BQU0sQ0FBQ0MsU0FBUztRQUNuQ2YsU0FBU0YsS0FBS0MsS0FBSyxDQUFDSyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLFFBQVEsQ0FBQ0csRUFBRUUsTUFBTSxDQUFDQyxTQUFTO1FBQzFGQyxRQUFRQyxHQUFHLENBQUNsQjtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWbEIsVUFBVW1CLEdBQUcsQ0FBQyxDQUFDVixVQUFVVyxrQkFBTSw4REFBQ0M7d0JBQUtDLFNBQVNaO3dCQUFpQlEsV0FBV3JCLEtBQUtZLFFBQVEsSUFBSUEsWUFBYyxxQkFBcUI7a0NBQWFBO3VCQUEvRVc7Ozs7Ozs7Ozs7WUFFaEV0QixLQUFLLENBQUMsRUFBRSxrQkFDTCw4REFBQ0gsOENBQUtBO2dCQUFDRSxNQUFNO29CQUFDQztnQkFBSzs7Ozs7Ozs7Ozs7O0FBSW5DO0dBMUJ3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSW50ZXJlc3RzLmpzP2JmYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0c1wiXHJcbmltcG9ydCAnLi4vc3R5bGVzL2ludGVyZXN0cy5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlcmVzdHMoeyBkYXRhIH0pIHtcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ludGVyZXN0cywgc2V0SW50ZXJlc3RzXSA9IHVzZVN0YXRlKGRhdGEuaW50ZXJlc3RzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IGRhdGEucG9zdHMuZmlsdGVyKHBvc3QgPT5cclxuICAgICAgICAgICAgcG9zdC50YWdzLnNvbWUodGFnID0+IHRhZy5pbmNsdWRlcyhkYXRhLmludGVyZXN0KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFBvc3RzKGZpbHRlcmVkUG9zdHMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGRhdGEuc2V0SW50ZXJlc3QoZS50YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICBzZXRQb3N0cyhkYXRhLnBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC50YWdzLnNvbWUodGFnID0+IHRhZy5pbmNsdWRlcyhlLnRhcmdldC5pbm5lckhUTUwpKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3RzKSAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyZXN0SW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAge2ludGVyZXN0cy5tYXAoKGludGVyZXN0LCBpKSA9PiA8c3BhbiBvbkNsaWNrPXtoYW5kbGVyfSBrZXk9e2l9IGNsYXNzTmFtZT17ZGF0YS5pbnRlcmVzdCA9PSBpbnRlcmVzdCAmJiAoYGludGVyZXN0IHNlbGVjdGApIHx8IFwiaW50ZXJlc3RcIn0+e2ludGVyZXN0fTwvc3Bhbj4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Bvc3RzWzBdICYmXHJcbiAgICAgICAgICAgICAgICA8UG9zdHMgZGF0YT17e3Bvc3RzfX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdHMiLCJJbnRlcmVzdHMiLCJkYXRhIiwicG9zdHMiLCJzZXRQb3N0cyIsImludGVyZXN0cyIsInNldEludGVyZXN0cyIsImZpbHRlcmVkUG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwidGFncyIsInNvbWUiLCJ0YWciLCJpbmNsdWRlcyIsImludGVyZXN0IiwiaGFuZGxlciIsImUiLCJzZXRJbnRlcmVzdCIsInRhcmdldCIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpIiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Interests.js\n"));

/***/ })

});