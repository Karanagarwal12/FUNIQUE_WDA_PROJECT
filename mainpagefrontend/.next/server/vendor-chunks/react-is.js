"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-is";
exports.ids = ["vendor-chunks/react-is"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * @license React\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \nif (true) {\n    (function() {\n        \"use strict\";\n        // ATTENTION\n        // When adding new symbols to this file,\n        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\n        // The Symbol used to tag the ReactElement-like types.\n        var REACT_ELEMENT_TYPE = Symbol.for(\"react.element\");\n        var REACT_PORTAL_TYPE = Symbol.for(\"react.portal\");\n        var REACT_FRAGMENT_TYPE = Symbol.for(\"react.fragment\");\n        var REACT_STRICT_MODE_TYPE = Symbol.for(\"react.strict_mode\");\n        var REACT_PROFILER_TYPE = Symbol.for(\"react.profiler\");\n        var REACT_PROVIDER_TYPE = Symbol.for(\"react.provider\");\n        var REACT_CONTEXT_TYPE = Symbol.for(\"react.context\");\n        var REACT_SERVER_CONTEXT_TYPE = Symbol.for(\"react.server_context\");\n        var REACT_FORWARD_REF_TYPE = Symbol.for(\"react.forward_ref\");\n        var REACT_SUSPENSE_TYPE = Symbol.for(\"react.suspense\");\n        var REACT_SUSPENSE_LIST_TYPE = Symbol.for(\"react.suspense_list\");\n        var REACT_MEMO_TYPE = Symbol.for(\"react.memo\");\n        var REACT_LAZY_TYPE = Symbol.for(\"react.lazy\");\n        var REACT_OFFSCREEN_TYPE = Symbol.for(\"react.offscreen\");\n        // -----------------------------------------------------------------------------\n        var enableScopeAPI = false; // Experimental Create Event Handle API.\n        var enableCacheElement = false;\n        var enableTransitionTracing = false; // No known bugs, but needs performance testing\n        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber\n        // stuff. Intended to enable React core members to more easily debug scheduling\n        // issues in DEV builds.\n        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.\n        var REACT_MODULE_REFERENCE;\n        {\n            REACT_MODULE_REFERENCE = Symbol.for(\"react.module.reference\");\n        }\n        function isValidElementType(type) {\n            if (typeof type === \"string\" || typeof type === \"function\") {\n                return true;\n            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).\n            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {\n                return true;\n            }\n            if (typeof type === \"object\" && type !== null) {\n                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object\n                // types supported by any Flight configuration anywhere since\n                // we don't know which Flight build this will end up being used\n                // with.\n                type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {\n                    return true;\n                }\n            }\n            return false;\n        }\n        function typeOf(object) {\n            if (typeof object === \"object\" && object !== null) {\n                var $$typeof = object.$$typeof;\n                switch($$typeof){\n                    case REACT_ELEMENT_TYPE:\n                        var type = object.type;\n                        switch(type){\n                            case REACT_FRAGMENT_TYPE:\n                            case REACT_PROFILER_TYPE:\n                            case REACT_STRICT_MODE_TYPE:\n                            case REACT_SUSPENSE_TYPE:\n                            case REACT_SUSPENSE_LIST_TYPE:\n                                return type;\n                            default:\n                                var $$typeofType = type && type.$$typeof;\n                                switch($$typeofType){\n                                    case REACT_SERVER_CONTEXT_TYPE:\n                                    case REACT_CONTEXT_TYPE:\n                                    case REACT_FORWARD_REF_TYPE:\n                                    case REACT_LAZY_TYPE:\n                                    case REACT_MEMO_TYPE:\n                                    case REACT_PROVIDER_TYPE:\n                                        return $$typeofType;\n                                    default:\n                                        return $$typeof;\n                                }\n                        }\n                    case REACT_PORTAL_TYPE:\n                        return $$typeof;\n                }\n            }\n            return undefined;\n        }\n        var ContextConsumer = REACT_CONTEXT_TYPE;\n        var ContextProvider = REACT_PROVIDER_TYPE;\n        var Element = REACT_ELEMENT_TYPE;\n        var ForwardRef = REACT_FORWARD_REF_TYPE;\n        var Fragment = REACT_FRAGMENT_TYPE;\n        var Lazy = REACT_LAZY_TYPE;\n        var Memo = REACT_MEMO_TYPE;\n        var Portal = REACT_PORTAL_TYPE;\n        var Profiler = REACT_PROFILER_TYPE;\n        var StrictMode = REACT_STRICT_MODE_TYPE;\n        var Suspense = REACT_SUSPENSE_TYPE;\n        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;\n        var hasWarnedAboutDeprecatedIsAsyncMode = false;\n        var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated\n        function isAsyncMode(object) {\n            {\n                if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n                    console[\"warn\"](\"The ReactIs.isAsyncMode() alias has been deprecated, \" + \"and will be removed in React 18+.\");\n                }\n            }\n            return false;\n        }\n        function isConcurrentMode(object) {\n            {\n                if (!hasWarnedAboutDeprecatedIsConcurrentMode) {\n                    hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint\n                    console[\"warn\"](\"The ReactIs.isConcurrentMode() alias has been deprecated, \" + \"and will be removed in React 18+.\");\n                }\n            }\n            return false;\n        }\n        function isContextConsumer(object) {\n            return typeOf(object) === REACT_CONTEXT_TYPE;\n        }\n        function isContextProvider(object) {\n            return typeOf(object) === REACT_PROVIDER_TYPE;\n        }\n        function isElement(object) {\n            return typeof object === \"object\" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n        }\n        function isForwardRef(object) {\n            return typeOf(object) === REACT_FORWARD_REF_TYPE;\n        }\n        function isFragment(object) {\n            return typeOf(object) === REACT_FRAGMENT_TYPE;\n        }\n        function isLazy(object) {\n            return typeOf(object) === REACT_LAZY_TYPE;\n        }\n        function isMemo(object) {\n            return typeOf(object) === REACT_MEMO_TYPE;\n        }\n        function isPortal(object) {\n            return typeOf(object) === REACT_PORTAL_TYPE;\n        }\n        function isProfiler(object) {\n            return typeOf(object) === REACT_PROFILER_TYPE;\n        }\n        function isStrictMode(object) {\n            return typeOf(object) === REACT_STRICT_MODE_TYPE;\n        }\n        function isSuspense(object) {\n            return typeOf(object) === REACT_SUSPENSE_TYPE;\n        }\n        function isSuspenseList(object) {\n            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;\n        }\n        exports.ContextConsumer = ContextConsumer;\n        exports.ContextProvider = ContextProvider;\n        exports.Element = Element;\n        exports.ForwardRef = ForwardRef;\n        exports.Fragment = Fragment;\n        exports.Lazy = Lazy;\n        exports.Memo = Memo;\n        exports.Portal = Portal;\n        exports.Profiler = Profiler;\n        exports.StrictMode = StrictMode;\n        exports.Suspense = Suspense;\n        exports.SuspenseList = SuspenseList;\n        exports.isAsyncMode = isAsyncMode;\n        exports.isConcurrentMode = isConcurrentMode;\n        exports.isContextConsumer = isContextConsumer;\n        exports.isContextProvider = isContextProvider;\n        exports.isElement = isElement;\n        exports.isForwardRef = isForwardRef;\n        exports.isFragment = isFragment;\n        exports.isLazy = isLazy;\n        exports.isMemo = isMemo;\n        exports.isPortal = isPortal;\n        exports.isProfiler = isProfiler;\n        exports.isStrictMode = isStrictMode;\n        exports.isSuspense = isSuspense;\n        exports.isSuspenseList = isSuspenseList;\n        exports.isValidElementType = isValidElementType;\n        exports.typeOf = typeOf;\n    })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDLEdBRUQ7QUFFQSxJQUFJQSxJQUFxQyxFQUFFO0lBQ3hDO1FBQ0g7UUFFQSxZQUFZO1FBQ1osd0NBQXdDO1FBQ3hDLGtGQUFrRjtRQUNsRixzREFBc0Q7UUFDdEQsSUFBSUMscUJBQXFCQyxPQUFPQyxHQUFHLENBQUM7UUFDcEMsSUFBSUMsb0JBQW9CRixPQUFPQyxHQUFHLENBQUM7UUFDbkMsSUFBSUUsc0JBQXNCSCxPQUFPQyxHQUFHLENBQUM7UUFDckMsSUFBSUcseUJBQXlCSixPQUFPQyxHQUFHLENBQUM7UUFDeEMsSUFBSUksc0JBQXNCTCxPQUFPQyxHQUFHLENBQUM7UUFDckMsSUFBSUssc0JBQXNCTixPQUFPQyxHQUFHLENBQUM7UUFDckMsSUFBSU0scUJBQXFCUCxPQUFPQyxHQUFHLENBQUM7UUFDcEMsSUFBSU8sNEJBQTRCUixPQUFPQyxHQUFHLENBQUM7UUFDM0MsSUFBSVEseUJBQXlCVCxPQUFPQyxHQUFHLENBQUM7UUFDeEMsSUFBSVMsc0JBQXNCVixPQUFPQyxHQUFHLENBQUM7UUFDckMsSUFBSVUsMkJBQTJCWCxPQUFPQyxHQUFHLENBQUM7UUFDMUMsSUFBSVcsa0JBQWtCWixPQUFPQyxHQUFHLENBQUM7UUFDakMsSUFBSVksa0JBQWtCYixPQUFPQyxHQUFHLENBQUM7UUFDakMsSUFBSWEsdUJBQXVCZCxPQUFPQyxHQUFHLENBQUM7UUFFdEMsZ0ZBQWdGO1FBRWhGLElBQUljLGlCQUFpQixPQUFPLHdDQUF3QztRQUNwRSxJQUFJQyxxQkFBcUI7UUFDekIsSUFBSUMsMEJBQTBCLE9BQU8sK0NBQStDO1FBRXBGLElBQUlDLHFCQUFxQixPQUFPLHNEQUFzRDtRQUN0RiwrRUFBK0U7UUFDL0Usd0JBQXdCO1FBRXhCLElBQUlDLHFCQUFxQixPQUFPLDZDQUE2QztRQUU3RSxJQUFJQztRQUVKO1lB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UUFDdkJTLGtCQUFrQixHQUFHUjtRQUNyQlEsY0FBYyxHQUFHUDtRQUNqQk8sY0FBYyxHQUFHTjtRQUNqQk0sZ0JBQWdCLEdBQUdMO1FBQ25CSyxrQkFBa0IsR0FBR0o7UUFDckJJLG9CQUFvQixHQUFHSDtRQUN2Qkcsa0JBQWtCLEdBQUdGO1FBQ3JCRSxzQkFBc0IsR0FBR0Q7UUFDekJDLDBCQUEwQixHQUFHckM7UUFDN0JxQyxjQUFjLEdBQUdoQztJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWlucGFnZWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcz80OTZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnNlcnZlcl9jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIFN1c3BlbnNlTGlzdCA9IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlTGlzdChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5TdXNwZW5zZUxpc3QgPSBTdXNwZW5zZUxpc3Q7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNTdXNwZW5zZUxpc3QgPSBpc1N1c3BlbnNlTGlzdDtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iXSwibmFtZXMiOlsicHJvY2VzcyIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlN5bWJvbCIsImZvciIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsIlJFQUNUX09GRlNDUkVFTl9UWVBFIiwiZW5hYmxlU2NvcGVBUEkiLCJlbmFibGVDYWNoZUVsZW1lbnQiLCJlbmFibGVUcmFuc2l0aW9uVHJhY2luZyIsImVuYWJsZUxlZ2FjeUhpZGRlbiIsImVuYWJsZURlYnVnVHJhY2luZyIsIlJFQUNUX01PRFVMRV9SRUZFUkVOQ0UiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJ0eXBlIiwiJCR0eXBlb2YiLCJnZXRNb2R1bGVJZCIsInVuZGVmaW5lZCIsInR5cGVPZiIsIm9iamVjdCIsIiQkdHlwZW9mVHlwZSIsIkNvbnRleHRDb25zdW1lciIsIkNvbnRleHRQcm92aWRlciIsIkVsZW1lbnQiLCJGb3J3YXJkUmVmIiwiRnJhZ21lbnQiLCJMYXp5IiwiTWVtbyIsIlBvcnRhbCIsIlByb2ZpbGVyIiwiU3RyaWN0TW9kZSIsIlN1c3BlbnNlIiwiU3VzcGVuc2VMaXN0IiwiaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUiLCJoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlIiwiaXNBc3luY01vZGUiLCJjb25zb2xlIiwiaXNDb25jdXJyZW50TW9kZSIsImlzQ29udGV4dENvbnN1bWVyIiwiaXNDb250ZXh0UHJvdmlkZXIiLCJpc0VsZW1lbnQiLCJpc0ZvcndhcmRSZWYiLCJpc0ZyYWdtZW50IiwiaXNMYXp5IiwiaXNNZW1vIiwiaXNQb3J0YWwiLCJpc1Byb2ZpbGVyIiwiaXNTdHJpY3RNb2RlIiwiaXNTdXNwZW5zZSIsImlzU3VzcGVuc2VMaXN0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-is/cjs/react-is.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"(ssr)/./node_modules/react-is/cjs/react-is.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxLQUF5QixFQUFjLEVBRTFDLE1BQU07SUFDTEMsc0lBQXlCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbnBhZ2Vmcm9udGVuZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcz9iMzEzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-is/index.js\n");

/***/ })

};
;