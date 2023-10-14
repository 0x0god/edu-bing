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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CodeWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CodeWindow */ \"./components/CodeWindow.js\");\n/* harmony import */ var _public_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/background.png */ \"./public/background.png\");\n/* harmony import */ var _public_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/twitter.png */ \"./public/twitter.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [inputCode, setInputCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [outputCode, setOutputCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [inputLanguage, setInputLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"JavaScript\");\n    const [outputLanguage, setOutputLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Python\");\n    const handleInputLanguageChange = (option)=>{\n        setInputLanguage(option.value);\n        setInputCode(\"\");\n        setOutputCode(\"\");\n    };\n    const handleOutputLanguageChange = (option)=>{\n        setOutputLanguage(option.value);\n        setOutputCode(\"\");\n    };\n    const handleTranslate = async ()=>{\n        const maxCodeLength = 6000;\n        if (inputLanguage === outputLanguage) {\n            alert(\"Please select different languages.\");\n            return;\n        }\n        if (!inputCode) {\n            alert(\"Please enter some code.\");\n            return;\n        }\n        if (inputCode.length > maxCodeLength) {\n            alert(\"Please enter code less than \".concat(maxCodeLength, \" characters. You are currently at \").concat(inputCode.length, \" characters.\"));\n            return;\n        }\n        setLoading(true);\n        setOutputCode(\"\");\n        const controller = new AbortController();\n        const body = {\n            inputLanguage,\n            outputLanguage,\n            inputCode\n        };\n        const response = await fetch(\"/api/translate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            signal: controller.signal,\n            body: JSON.stringify(body)\n        });\n        if (!response.ok) {\n            setLoading(false);\n            alert(\"Something went wrong.\");\n            return;\n        }\n        const data = response.body;\n        if (!data) {\n            setLoading(false);\n            alert(\"Something went wrong.\");\n            return;\n        }\n        const reader = data.getReader();\n        const decoder = new TextDecoder();\n        let done = false;\n        while(!done){\n            const { value , done: doneReading  } = await reader.read();\n            done = doneReading;\n            const chunkValue = decoder.decode(value);\n            setOutputCode((prevCode)=>prevCode + chunkValue);\n        }\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                className: \"fixed left-0 top-0 w-screen h-screen -z-10\",\n                src: _public_background_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Background\"\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-sans text-5xl justify-center text-white font-bold pt-5 \",\n                children: \"EduBing Code Translator\"\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-sans mt-5 text-2xl justify-center text-white mb-10\",\n                children: \"Translate your code to another programming language.\"\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                code: inputCode,\n                setCode: setInputCode,\n                loading: loading,\n                handleLanguageChange: handleInputLanguageChange,\n                language: inputLanguage\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: loading,\n                className: \"bg-[#C53AAE]  border-white p-3 m-2 flex justify-center items-center rounded-lg text-white font-semibold\",\n                onClick: handleTranslate,\n                children: loading ? \"Translating...\" : \"Translate \\uD83D\\uDD01\"\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                code: outputCode,\n                setCode: setOutputCode,\n                loading: loading,\n                handleLanguageChange: handleOutputLanguageChange,\n                language: outputLanguage\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-sans mt-5 pb-5 text-gray-300\",\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"ref-link text-[#e6cee2]\",\n                        href: \"https://github.com/0x0god\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: \"GABRIEL MOGAJI R\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 67\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \" flex font-sans text-white mb-5 p-1 items-center\",\n                href: \"https://twitter.com/intent/tweet?text=\".concat(encodeURIComponent(\"Check out this awesome code translator!\"), \"&url=\").concat(encodeURIComponent(\"https://github.com/0x0god\")),\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        className: \"mr-0.5 justify-center\",\n                        src: _public_twitter_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"Twitter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                        lineNumber: 110,\n                        columnNumber: 280\n                    }, this),\n                    \"Share it on X\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"evHmHEh68enuD4+bzlZVQnM8WZI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTs7Ozs7OzBCQUdyTiw4REFBQ0wsOERBQVVBO2dCQUFDbUQsTUFBTTFDO2dCQUFZMkMsU0FBUzFDO2dCQUFlTCxTQUFTQTtnQkFBU2dELHNCQUFzQm5DO2dCQUE0Qm9DLFVBQVV6Qzs7Ozs7OzBCQUNwSSw4REFBQzZDO2dCQUFFWixXQUFVOztvQkFBb0M7a0NBQVcsOERBQUNhO3dCQUFFYixXQUFVO3dCQUEwQmMsTUFBSzt3QkFBNEJDLFFBQU87d0JBQVNDLEtBQUk7a0NBQXNCOzs7Ozs7Ozs7Ozs7MEJBQzlLLDhEQUFDSDtnQkFBRWIsV0FBVTtnQkFBbURjLE1BQU0seUNBQThHRyxPQUFyRUEsbUJBQW1CLDRDQUEyQyxTQUF1RCxPQUFoREEsbUJBQW1CO2dCQUFnQ0YsUUFBTztnQkFBU0MsS0FBSTs7a0NBQXNCLDhEQUFDM0QsbURBQUtBO3dCQUFDMkMsV0FBVTt3QkFBd0JDLEtBQUs3QywyREFBT0E7d0JBQUU4QyxLQUFJOzs7Ozs7b0JBQVk7Ozs7Ozs7Ozs7Ozs7QUFJOVYsQ0FBQztHQTNHdUI1QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGVXaW5kb3cgZnJvbSAnQC9jb21wb25lbnRzL0NvZGVXaW5kb3cnO1xuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnQC9wdWJsaWMvYmFja2dyb3VuZC5wbmcnO1xuaW1wb3J0IFhfaW1hZ2UgZnJvbSAnQC9wdWJsaWMvdHdpdHRlci5wbmcnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0Q29kZSwgc2V0SW5wdXRDb2RlXSA9IHVzZVN0YXRlKGBgKTtcbiAgY29uc3QgW291dHB1dENvZGUsIHNldE91dHB1dENvZGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaW5wdXRMYW5ndWFnZSwgc2V0SW5wdXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgnSmF2YVNjcmlwdCcpO1xuICBjb25zdCBbb3V0cHV0TGFuZ3VhZ2UsIHNldE91dHB1dExhbmd1YWdlXSA9IHVzZVN0YXRlKCdQeXRob24nKTtcblxuXG4gIGNvbnN0IGhhbmRsZUlucHV0TGFuZ3VhZ2VDaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG4gICAgc2V0SW5wdXRMYW5ndWFnZShvcHRpb24udmFsdWUpXG4gICAgc2V0SW5wdXRDb2RlKCcnKVxuICAgIHNldE91dHB1dENvZGUoJycpXG4gIH1cblxuICBjb25zdCBoYW5kbGVPdXRwdXRMYW5ndWFnZUNoYW5nZSA9IChvcHRpb24pID0+IHtcbiAgICBzZXRPdXRwdXRMYW5ndWFnZShvcHRpb24udmFsdWUpXG4gICAgc2V0T3V0cHV0Q29kZSgnJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVRyYW5zbGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtYXhDb2RlTGVuZ3RoID0gNjAwMDtcblxuICAgIGlmIChpbnB1dExhbmd1YWdlID09PSBvdXRwdXRMYW5ndWFnZSkge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgZGlmZmVyZW50IGxhbmd1YWdlcy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWlucHV0Q29kZSkge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBzb21lIGNvZGUuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlucHV0Q29kZS5sZW5ndGggPiBtYXhDb2RlTGVuZ3RoKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYFBsZWFzZSBlbnRlciBjb2RlIGxlc3MgdGhhbiAke21heENvZGVMZW5ndGh9IGNoYXJhY3RlcnMuIFlvdSBhcmUgY3VycmVudGx5IGF0ICR7aW5wdXRDb2RlLmxlbmd0aH0gY2hhcmFjdGVycy5gLFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldE91dHB1dENvZGUoJycpO1xuXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBpbnB1dExhbmd1YWdlLFxuICAgICAgb3V0cHV0TGFuZ3VhZ2UsXG4gICAgICBpbnB1dENvZGVcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmFuc2xhdGUnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuYm9keTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZGVyID0gZGF0YS5nZXRSZWFkZXIoKTtcbiAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZTogZG9uZVJlYWRpbmcgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICBkb25lID0gZG9uZVJlYWRpbmc7XG4gICAgICBjb25zdCBjaHVua1ZhbHVlID0gZGVjb2Rlci5kZWNvZGUodmFsdWUpO1xuXG4gICAgICBzZXRPdXRwdXRDb2RlKChwcmV2Q29kZSkgPT4gcHJldkNvZGUgKyBjaHVua1ZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2ZpeGVkIGxlZnQtMCB0b3AtMCB3LXNjcmVlbiBoLXNjcmVlbiAtei0xMCcgc3JjPXtiYWNrZ3JvdW5kfSBhbHQ9J0JhY2tncm91bmQnIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdmb250LXNhbnMgdGV4dC01eGwganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgcHQtNSAnPkVkdUJpbmcgQ29kZSBUcmFuc2xhdG9yPC9oMT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNhbnMgbXQtNSB0ZXh0LTJ4bCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIG1iLTEwXCI+VHJhbnNsYXRlIHlvdXIgY29kZSB0byBhbm90aGVyIHByb2dyYW1taW5nIGxhbmd1YWdlLjwvaDI+XG4gICAgICB7LyogaW5wdXQgY29kZSB3aW5kb3cgKi99XG4gICAgICA8Q29kZVdpbmRvdyBjb2RlPXtpbnB1dENvZGV9IHNldENvZGU9e3NldElucHV0Q29kZX0gbG9hZGluZz17bG9hZGluZ30gaGFuZGxlTGFuZ3VhZ2VDaGFuZ2U9e2hhbmRsZUlucHV0TGFuZ3VhZ2VDaGFuZ2V9IGxhbmd1YWdlPXtpbnB1dExhbmd1YWdlfSAvPlxuXG4gICAgICB7LyogdHJhbnNsYXRlIGJ1dHRvbiAqL31cbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2xvYWRpbmd9IGNsYXNzTmFtZT0nYmctWyNDNTNBQUVdICBib3JkZXItd2hpdGUgcC0zIG0tMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCcgb25DbGljaz17aGFuZGxlVHJhbnNsYXRlfT57bG9hZGluZyA/IGBUcmFuc2xhdGluZy4uLmAgOiBgVHJhbnNsYXRlIPCflIFgfTwvYnV0dG9uPlxuXG4gICAgICB7Lyogb3V0cHV0IGNvZGUgd2luZG93ICovfVxuICAgICAgPENvZGVXaW5kb3cgY29kZT17b3V0cHV0Q29kZX0gc2V0Q29kZT17c2V0T3V0cHV0Q29kZX0gbG9hZGluZz17bG9hZGluZ30gaGFuZGxlTGFuZ3VhZ2VDaGFuZ2U9e2hhbmRsZU91dHB1dExhbmd1YWdlQ2hhbmdlfSBsYW5ndWFnZT17b3V0cHV0TGFuZ3VhZ2V9IC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgbXQtNSBwYi01IHRleHQtZ3JheS0zMDBcIj5Qb3dlcmVkIGJ5IDxhIGNsYXNzTmFtZT1cInJlZi1saW5rIHRleHQtWyNlNmNlZTJdXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weDBnb2RcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+R0FCUklFTCBNT0dBSkkgUjwvYT48L3A+XG4gICAgICA8YSBjbGFzc05hbWU9JyBmbGV4IGZvbnQtc2FucyB0ZXh0LXdoaXRlIG1iLTUgcC0xIGl0ZW1zLWNlbnRlcicgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQoJ0NoZWNrIG91dCB0aGlzIGF3ZXNvbWUgY29kZSB0cmFuc2xhdG9yIScpfSZ1cmw9JHtlbmNvZGVVUklDb21wb25lbnQoJ2h0dHBzOi8vZ2l0aHViLmNvbS8weDBnb2QnKX1gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PEltYWdlIGNsYXNzTmFtZT0nbXItMC41IGp1c3RpZnktY2VudGVyJyBzcmM9e1hfaW1hZ2V9IGFsdD1cIlR3aXR0ZXJcIiAvPlNoYXJlIGl0IG9uIFg8L2E+XG4gICAgPC9kaXY+XG5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvZGVXaW5kb3ciLCJiYWNrZ3JvdW5kIiwiWF9pbWFnZSIsIkltYWdlIiwiSG9tZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW5wdXRDb2RlIiwic2V0SW5wdXRDb2RlIiwib3V0cHV0Q29kZSIsInNldE91dHB1dENvZGUiLCJpbnB1dExhbmd1YWdlIiwic2V0SW5wdXRMYW5ndWFnZSIsIm91dHB1dExhbmd1YWdlIiwic2V0T3V0cHV0TGFuZ3VhZ2UiLCJoYW5kbGVJbnB1dExhbmd1YWdlQ2hhbmdlIiwib3B0aW9uIiwidmFsdWUiLCJoYW5kbGVPdXRwdXRMYW5ndWFnZUNoYW5nZSIsImhhbmRsZVRyYW5zbGF0ZSIsIm1heENvZGVMZW5ndGgiLCJhbGVydCIsImxlbmd0aCIsImNvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJib2R5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJzaWduYWwiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwiZG9uZSIsImRvbmVSZWFkaW5nIiwicmVhZCIsImNodW5rVmFsdWUiLCJkZWNvZGUiLCJwcmV2Q29kZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImgxIiwiaDIiLCJjb2RlIiwic2V0Q29kZSIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwibGFuZ3VhZ2UiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJwIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJlbmNvZGVVUklDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});