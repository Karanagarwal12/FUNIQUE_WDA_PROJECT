"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/components/LoginForm.js":
/*!*************************************!*\
  !*** ./app/components/LoginForm.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Visibility */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Visibility.js\");\n/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/VisibilityOff */ \"(app-pages-browser)/./node_modules/@mui/icons-material/VisibilityOff.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction LoginForm() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let visible = false;\n    function textUp(event) {\n        event.target.labels[0].style.top = \"12px\";\n        event.target.labels[0].style.fontSize = \"0.8rem\";\n        event.target.labels[0].style.opacity = 1;\n    }\n    function textCheck(event) {\n        if (event.target.value == \"\") {\n            event.target.labels[0].style.top = \"40px\";\n            event.target.labels[0].style.fontSize = \"1rem\";\n            event.target.labels[0].style.opacity = 0.4;\n        }\n    }\n    function toggleView(event) {\n        if (!visible) {\n            event.target.parentElement.previousElementSibling.type = \"text\";\n            event.target.style.left = \"-25px\";\n            visible = true;\n        } else {\n            event.target.parentElement.previousElementSibling.type = \"password\";\n            event.target.style.left = \"0px\";\n            visible = false;\n        }\n    }\n    function submitHandler(e) {\n        // if(!(e.target.form[0].value==\"\"|| e.target.form[1].value == \"\")) {\n        router.push(\"/\");\n    // }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loginBox\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"form\",\n                method: \"post\",\n                action: \"#\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"username\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onFocus: textUp,\n                                onBlur: textCheck,\n                                className: \"input\",\n                                type: \"text\",\n                                id: \"username\",\n                                name: \"username\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"password\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"password\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onFocus: textUp,\n                                onBlur: textCheck,\n                                className: \"input\",\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"icon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"iconBox\",\n                                    onClick: toggleView,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"visible\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"notvisible\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onClick: submitHandler,\n                        children: \"Log In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Karan\\\\Documents\\\\GitHub\\\\FUNIQUE_WDA_PROJECT\\\\mainpagefrontend\\\\app\\\\components\\\\LoginForm.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0RDtBQUNNO0FBQ3RCO0FBRTdCLFNBQVNHOztJQUNwQixNQUFNQyxTQUFTRiwwREFBU0E7SUFDeEIsSUFBSUcsVUFBVTtJQUNkLFNBQVNDLE9BQU9DLEtBQUs7UUFDakJBLE1BQU1DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLEdBQUc7UUFDbkNKLE1BQU1DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDRSxRQUFRLEdBQUc7UUFDeENMLE1BQU1DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDRyxPQUFPLEdBQUc7SUFDM0M7SUFDQSxTQUFTQyxVQUFVUCxLQUFLO1FBQ3BCLElBQUlBLE1BQU1DLE1BQU0sQ0FBQ08sS0FBSyxJQUFJLElBQUk7WUFDMUJSLE1BQU1DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLEdBQUc7WUFDbkNKLE1BQU1DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDRSxRQUFRLEdBQUc7WUFDeENMLE1BQU1DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDRyxPQUFPLEdBQUc7UUFDM0M7SUFDSjtJQUNBLFNBQVNHLFdBQVdULEtBQUs7UUFDckIsSUFBSSxDQUFDRixTQUFTO1lBQ1ZFLE1BQU1DLE1BQU0sQ0FBQ1MsYUFBYSxDQUFDQyxzQkFBc0IsQ0FBQ0MsSUFBSSxHQUFHO1lBQ3pEWixNQUFNQyxNQUFNLENBQUNFLEtBQUssQ0FBQ1UsSUFBSSxHQUFHO1lBQzFCZixVQUFVO1FBQ2QsT0FDSztZQUNERSxNQUFNQyxNQUFNLENBQUNTLGFBQWEsQ0FBQ0Msc0JBQXNCLENBQUNDLElBQUksR0FBRztZQUN6RFosTUFBTUMsTUFBTSxDQUFDRSxLQUFLLENBQUNVLElBQUksR0FBRztZQUMxQmYsVUFBVTtRQUNkO0lBQ0o7SUFDQSxTQUFTZ0IsY0FBY0MsQ0FBQztRQUNwQixxRUFBcUU7UUFDakVsQixPQUFPbUIsSUFBSSxDQUFDO0lBQ2hCLElBQUk7SUFDUjtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtGLFdBQVU7Z0JBQU9HLFFBQU87Z0JBQU9DLFFBQU87O2tDQUN4Qyw4REFBQ0w7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBTUMsS0FBSTswQ0FBVzs7Ozs7OzBDQUN0Qiw4REFBQ0M7Z0NBQU1DLFNBQVMzQjtnQ0FBUTRCLFFBQVFwQjtnQ0FBV1csV0FBVTtnQ0FBUU4sTUFBSztnQ0FBT2dCLElBQUc7Z0NBQVdDLE1BQUs7Z0NBQVdDLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFbkgsOERBQUNiO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0s7Z0NBQU1DLEtBQUk7MENBQVc7Ozs7OzswQ0FDdEIsOERBQUNDO2dDQUFNQyxTQUFTM0I7Z0NBQVE0QixRQUFRcEI7Z0NBQVdXLFdBQVU7Z0NBQVFOLE1BQUs7Z0NBQVdnQixJQUFHO2dDQUFXQyxNQUFLO2dDQUFXQyxRQUFROzs7Ozs7MENBQ25ILDhEQUFDYjtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0Q7b0NBQUlDLFdBQVU7b0NBQVVhLFNBQVN0Qjs7c0RBQzlCLDhEQUFDaEIsc0VBQWNBOzRDQUFDeUIsV0FBVTs7Ozs7O3NEQUMxQiw4REFBQ3hCLHlFQUFpQkE7NENBQUN3QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJekMsOERBQUNjO3dCQUFPcEIsTUFBSzt3QkFBU21CLFNBQVNqQjtrQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlEO0dBdER3QmxCOztRQUNMRCxzREFBU0E7OztLQURKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MmNkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IFZpc2liaWxpdHlPZmZJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eU9mZic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGxldCB2aXNpYmxlID0gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiB0ZXh0VXAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC50YXJnZXQubGFiZWxzWzBdLnN0eWxlLnRvcCA9IFwiMTJweFwiO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5sYWJlbHNbMF0uc3R5bGUuZm9udFNpemUgPSBcIjAuOHJlbVwiO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5sYWJlbHNbMF0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0ZXh0Q2hlY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmxhYmVsc1swXS5zdHlsZS50b3AgPSBcIjQwcHhcIjtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmxhYmVsc1swXS5zdHlsZS5mb250U2l6ZSA9IFwiMXJlbVwiO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQubGFiZWxzWzBdLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVmlldyhldmVudCkge1xyXG4gICAgICAgIGlmICghdmlzaWJsZSkge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmxlZnQgPSBcIi0yNXB4XCI7XHJcbiAgICAgICAgICAgIHZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGUpIHtcclxuICAgICAgICAvLyBpZighKGUudGFyZ2V0LmZvcm1bMF0udmFsdWU9PVwiXCJ8fCBlLnRhcmdldC5mb3JtWzFdLnZhbHVlID09IFwiXCIpKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luQm94XCI+XHJcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBtZXRob2Q9J3Bvc3QnIGFjdGlvbj0nIyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0ZXh0VXB9IG9uQmx1cj17dGV4dENoZWNrfSBjbGFzc05hbWU9J2lucHV0JyB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0ZXh0VXB9IG9uQmx1cj17dGV4dENoZWNrfSBjbGFzc05hbWU9J2lucHV0JyB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uQm94JyBvbkNsaWNrPXt0b2dnbGVWaWV3fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gY2xhc3NOYW1lPSd2aXNpYmxlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlPZmZJY29uIGNsYXNzTmFtZT0nbm90dmlzaWJsZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9PkxvZyBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJWaXNpYmlsaXR5SWNvbiIsIlZpc2liaWxpdHlPZmZJY29uIiwidXNlUm91dGVyIiwiTG9naW5Gb3JtIiwicm91dGVyIiwidmlzaWJsZSIsInRleHRVcCIsImV2ZW50IiwidGFyZ2V0IiwibGFiZWxzIiwic3R5bGUiLCJ0b3AiLCJmb250U2l6ZSIsIm9wYWNpdHkiLCJ0ZXh0Q2hlY2siLCJ2YWx1ZSIsInRvZ2dsZVZpZXciLCJwYXJlbnRFbGVtZW50IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInR5cGUiLCJsZWZ0Iiwic3VibWl0SGFuZGxlciIsImUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwibWV0aG9kIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJpZCIsIm5hbWUiLCJyZXF1aXJlZCIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/LoginForm.js\n"));

/***/ })

});