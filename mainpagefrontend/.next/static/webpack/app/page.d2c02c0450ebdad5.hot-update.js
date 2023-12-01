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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Interests; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts */ \"(app-pages-browser)/./app/components/Posts.js\");\n/* harmony import */ var _styles_interests_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/interests.css */ \"(app-pages-browser)/./app/styles/interests.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Interests(param) {\n    let { data } = param;\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [interests, setInterests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"j2348fj30rer\",\n            title: \"Foot Ball\"\n        },\n        {\n            id: \"j2348fj30rer\",\n            title: \"Volleyball\"\n        },\n        {\n            id: \"j2348fj30rer\",\n            title: \"Web Dev\"\n        },\n        {\n            id: \"j2348fj30rer\",\n            title: \"Music\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Filter posts when data.interest changes\n        const filteredPosts = data.posts.filter((post)=>post.tags.some((tag)=>tag.includes(data.interest)));\n        setPosts(filteredPosts);\n    }, [\n        data.interest,\n        data.posts\n    ]);\n    console.log(data.interest);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"interestInfo\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header\",\n                children: interests.map((interest, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: (e)=>{\n                            data.setInterest(e.target.innerHTML);\n                            setPosts(posts.filter((post)=>post.tags.some((tag)=>tag.includes(data.interest))));\n                            console.log(posts);\n                        },\n                        className: data.interest == interest.title && \"interest select\" || \"interest\",\n                        children: interest.title\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                        lineNumber: 38,\n                        columnNumber: 47\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            posts[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: {\n                    posts\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\Interests.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Interests, \"D/XC7gWCz/tJYrs185dsp0ZDrgU=\");\n_c = Interests;\nvar _c;\n$RefreshReg$(_c, \"Interests\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ludGVyZXN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNoQjtBQUNLO0FBRWpCLFNBQVNHLFVBQVUsS0FBTTtRQUFOLEVBQUNDLElBQUksRUFBQyxHQUFOOztJQUM5QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7UUFDdkM7WUFDSVMsSUFBSTtZQUNKQyxPQUFPO1FBQ1g7UUFDQTtZQUNJRCxJQUFJO1lBQ0pDLE9BQU87UUFDWDtRQUNBO1lBQ0lELElBQUk7WUFDSkMsT0FBTztRQUNYO1FBQ0E7WUFDSUQsSUFBSTtZQUNKQyxPQUFPO1FBQ1g7S0FHSDtJQUNEVCxnREFBU0EsQ0FBQztRQUNOLDBDQUEwQztRQUMxQyxNQUFNVSxnQkFBZ0JQLEtBQUtDLEtBQUssQ0FBQ08sTUFBTSxDQUFDQyxDQUFBQSxPQUN0Q0EsS0FBS0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLFFBQVEsQ0FBQ2IsS0FBS2MsUUFBUTtRQUVsRFosU0FBU0s7SUFDWCxHQUFHO1FBQUNQLEtBQUtjLFFBQVE7UUFBRWQsS0FBS0MsS0FBSztLQUFDO0lBQ2hDYyxRQUFRQyxHQUFHLENBQUNoQixLQUFLYyxRQUFRO0lBQ3pCLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZmLFVBQVVnQixHQUFHLENBQUMsQ0FBQ0wsVUFBU00sa0JBQUssOERBQUNDO3dCQUFLQyxTQUFTLENBQUNDOzRCQUMxQ3ZCLEtBQUt3QixXQUFXLENBQUNELEVBQUVFLE1BQU0sQ0FBQ0MsU0FBUzs0QkFDbkN4QixTQUFTRCxNQUFNTyxNQUFNLENBQUMsQ0FBQ0MsT0FBT0EsS0FBS0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLFFBQVEsQ0FBQ2IsS0FBS2MsUUFBUTs0QkFDOUVDLFFBQVFDLEdBQUcsQ0FBQ2Y7d0JBQ1o7d0JBQVdpQixXQUFXbEIsS0FBS2MsUUFBUSxJQUFFQSxTQUFTUixLQUFLLElBQU0scUJBQXFCO2tDQUFhUSxTQUFTUixLQUFLO3VCQUFqR2M7Ozs7Ozs7Ozs7WUFFZm5CLEtBQUssQ0FBQyxFQUFFLGtCQUNMLDhEQUFDSCw4Q0FBS0E7Z0JBQUNFLE1BQU07b0JBQUVDO2dCQUFNOzs7Ozs7Ozs7Ozs7QUFJckM7R0E1Q3dCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9JbnRlcmVzdHMuanM/YmZhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFBvc3RzIGZyb20gXCIuL1Bvc3RzXCJcclxuaW1wb3J0ICcuLi9zdHlsZXMvaW50ZXJlc3RzLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVyZXN0cyh7ZGF0YX0pIHtcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ludGVyZXN0cywgc2V0SW50ZXJlc3RzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcImoyMzQ4ZmozMHJlclwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJGb290IEJhbGxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiajIzNDhmajMwcmVyXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlZvbGxleWJhbGxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiajIzNDhmajMwcmVyXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIldlYiBEZXZcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiajIzNDhmajMwcmVyXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk11c2ljXCIsXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICBdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRmlsdGVyIHBvc3RzIHdoZW4gZGF0YS5pbnRlcmVzdCBjaGFuZ2VzXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IGRhdGEucG9zdHMuZmlsdGVyKHBvc3QgPT5cclxuICAgICAgICAgIHBvc3QudGFncy5zb21lKHRhZyA9PiB0YWcuaW5jbHVkZXMoZGF0YS5pbnRlcmVzdCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRQb3N0cyhmaWx0ZXJlZFBvc3RzKTtcclxuICAgICAgfSwgW2RhdGEuaW50ZXJlc3QsIGRhdGEucG9zdHNdKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuaW50ZXJlc3QpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyZXN0SW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAge2ludGVyZXN0cy5tYXAoKGludGVyZXN0LGkpID0+PHNwYW4gb25DbGljaz17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zZXRJbnRlcmVzdChlLnRhcmdldC5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKHBvc3RzLmZpbHRlcigocG9zdCk9PnBvc3QudGFncy5zb21lKHRhZyA9PiB0YWcuaW5jbHVkZXMoZGF0YS5pbnRlcmVzdCkpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19IGtleT17aX0gY2xhc3NOYW1lPXtkYXRhLmludGVyZXN0PT1pbnRlcmVzdC50aXRsZSAmJiAoYGludGVyZXN0IHNlbGVjdGApIHx8IFwiaW50ZXJlc3RcIn0+e2ludGVyZXN0LnRpdGxlfTwvc3Bhbj4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Bvc3RzWzBdICYmIFxyXG4gICAgICAgICAgICAgICAgPFBvc3RzIGRhdGE9e3sgcG9zdHMgfX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdHMiLCJJbnRlcmVzdHMiLCJkYXRhIiwicG9zdHMiLCJzZXRQb3N0cyIsImludGVyZXN0cyIsInNldEludGVyZXN0cyIsImlkIiwidGl0bGUiLCJmaWx0ZXJlZFBvc3RzIiwiZmlsdGVyIiwicG9zdCIsInRhZ3MiLCJzb21lIiwidGFnIiwiaW5jbHVkZXMiLCJpbnRlcmVzdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpIiwic3BhbiIsIm9uQ2xpY2siLCJlIiwic2V0SW50ZXJlc3QiLCJ0YXJnZXQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Interests.js\n"));

/***/ })

});