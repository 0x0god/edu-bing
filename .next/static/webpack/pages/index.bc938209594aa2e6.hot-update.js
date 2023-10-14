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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CodeWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CodeWindow */ \"./components/CodeWindow.js\");\n/* harmony import */ var _public_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/background.png */ \"./public/background.png\");\n/* harmony import */ var _public_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/twitter.png */ \"./public/twitter.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [inputCode, setInputCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [outputCode, setOutputCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [inputLanguage, setInputLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"JavaScript\");\n    const [outputLanguage, setOutputLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Python\");\n    const handleInputLanguageChange = (option)=>{\n        setInputLanguage(option.value);\n        setInputCode(\"\");\n        setOutputCode(\"\");\n    };\n    const handleOutputLanguageChange = (option)=>{\n        setOutputLanguage(option.value);\n        setOutputCode(\"\");\n    };\n    const handleTranslate = async ()=>{\n        const maxCodeLength = 6000;\n        if (inputLanguage === outputLanguage) {\n            alert(\"Please select different languages.\");\n            return;\n        }\n        if (!inputCode) {\n            alert(\"Please enter some code.\");\n            return;\n        }\n        if (inputCode.length > maxCodeLength) {\n            alert(\"Please enter code less than \".concat(maxCodeLength, \" characters. You are currently at \").concat(inputCode.length, \" characters.\"));\n            return;\n        }\n        setLoading(true);\n        setOutputCode(\"\");\n        const controller = new AbortController();\n        const body = {\n            inputLanguage,\n            outputLanguage,\n            inputCode\n        };\n        const response = await fetch(\"/api/translate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            signal: controller.signal,\n            body: JSON.stringify(body)\n        });\n        if (!response.ok) {\n            setLoading(false);\n            alert(\"Something went wrong.\");\n            return;\n        }\n        const data = response.body;\n        if (!data) {\n            setLoading(false);\n            alert(\"Something went wrong.\");\n            return;\n        }\n        const reader = data.getReader();\n        const decoder = new TextDecoder();\n        let done = false;\n        while(!done){\n            const { value , done: doneReading  } = await reader.read();\n            done = doneReading;\n            const chunkValue = decoder.decode(value);\n            setOutputCode((prevCode)=>prevCode + chunkValue);\n        }\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                className: \"fixed left-0 top-0 w-screen h-screen -z-10\",\n                src: _public_background_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Background\"\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-sans text-5xl justify-center text-white font-bold pt-5 \",\n                children: \"EduBing Code Translator\"\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-sans mt-5 text-2xl justify-center text-white mb-10\",\n                children: \"Translate your code to another programming language.\"\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                code: inputCode,\n                setCode: setInputCode,\n                loading: loading,\n                handleLanguageChange: handleInputLanguageChange,\n                language: inputLanguage\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: loading,\n                className: \"bg-[#C53AAE]  border-white p-3 m-2 flex justify-center items-center rounded-lg text-white font-semibold\",\n                onClick: handleTranslate,\n                children: loading ? \"Translating...\" : \"Translate \\uD83D\\uDD01\"\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                code: outputCode,\n                setCode: setOutputCode,\n                loading: loading,\n                handleLanguageChange: handleOutputLanguageChange,\n                language: outputLanguage\n            }, void 0, false, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-sans mt-5 pb-5\",\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"ref-link text-[#C53AAE]\",\n                        href: \"http://metaschool.so/\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: \"metaschool \\uD83D\\uDD2E\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 53\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \" flex font-sans mb-5 p-1 items-center\",\n                href: \"https://twitter.com/intent/tweet?text=\".concat(encodeURIComponent(\"Check out this awesome code translator!\"), \"&url=\").concat(encodeURIComponent(\"https://me\")),\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        className: \"mr-0.5 justify-center\",\n                        src: _public_twitter_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"Twitter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                        lineNumber: 110,\n                        columnNumber: 254\n                    }, this),\n                    \"Share it on Twitter\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0x0god/Documents/icode/devpost/edu-bing/pages/index.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"evHmHEh68enuD4+bzlZVQnM8WZI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7Ozs7OzswQkFHck4sOERBQUNMLDhEQUFVQTtnQkFBQ21ELE1BQU0xQztnQkFBWTJDLFNBQVMxQztnQkFBZUwsU0FBU0E7Z0JBQVNnRCxzQkFBc0JuQztnQkFBNEJvQyxVQUFVekM7Ozs7OzswQkFDcEksOERBQUM2QztnQkFBRVosV0FBVTs7b0JBQXNCO2tDQUFXLDhEQUFDYTt3QkFBRWIsV0FBVTt3QkFBMEJjLE1BQUs7d0JBQXdCQyxRQUFPO3dCQUFTQyxLQUFJO2tDQUFzQjs7Ozs7Ozs7Ozs7OzBCQUM1Siw4REFBQ0g7Z0JBQUViLFdBQVU7Z0JBQXdDYyxNQUFNLHlDQUE4R0csT0FBckVBLG1CQUFtQiw0Q0FBMkMsU0FBd0MsT0FBakNBLG1CQUFtQjtnQkFBaUJGLFFBQU87Z0JBQVNDLEtBQUk7O2tDQUFzQiw4REFBQzNELG1EQUFLQTt3QkFBQzJDLFdBQVU7d0JBQXdCQyxLQUFLN0MsMkRBQWFBO3dCQUFFOEMsS0FBSTs7Ozs7O29CQUFZOzs7Ozs7Ozs7Ozs7O0FBSTFVLENBQUM7R0EzR3VCNUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2RlV2luZG93IGZyb20gJ0AvY29tcG9uZW50cy9Db2RlV2luZG93JztcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJ0AvcHVibGljL2JhY2tncm91bmQucG5nJztcbmltcG9ydCB0d2l0dGVyX2ltYWdlIGZyb20gJ0AvcHVibGljL3R3aXR0ZXIucG5nJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dENvZGUsIHNldElucHV0Q29kZV0gPSB1c2VTdGF0ZShgYCk7XG4gIGNvbnN0IFtvdXRwdXRDb2RlLCBzZXRPdXRwdXRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lucHV0TGFuZ3VhZ2UsIHNldElucHV0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoJ0phdmFTY3JpcHQnKTtcbiAgY29uc3QgW291dHB1dExhbmd1YWdlLCBzZXRPdXRwdXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgnUHl0aG9uJyk7XG5cblxuICBjb25zdCBoYW5kbGVJbnB1dExhbmd1YWdlQ2hhbmdlID0gKG9wdGlvbikgPT4ge1xuICAgIHNldElucHV0TGFuZ3VhZ2Uob3B0aW9uLnZhbHVlKVxuICAgIHNldElucHV0Q29kZSgnJylcbiAgICBzZXRPdXRwdXRDb2RlKCcnKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlT3V0cHV0TGFuZ3VhZ2VDaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG4gICAgc2V0T3V0cHV0TGFuZ3VhZ2Uob3B0aW9uLnZhbHVlKVxuICAgIHNldE91dHB1dENvZGUoJycpXG4gIH1cblxuICBjb25zdCBoYW5kbGVUcmFuc2xhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWF4Q29kZUxlbmd0aCA9IDYwMDA7XG5cbiAgICBpZiAoaW5wdXRMYW5ndWFnZSA9PT0gb3V0cHV0TGFuZ3VhZ2UpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGRpZmZlcmVudCBsYW5ndWFnZXMuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFpbnB1dENvZGUpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgc29tZSBjb2RlLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbnB1dENvZGUubGVuZ3RoID4gbWF4Q29kZUxlbmd0aCkge1xuICAgICAgYWxlcnQoXG4gICAgICAgIGBQbGVhc2UgZW50ZXIgY29kZSBsZXNzIHRoYW4gJHttYXhDb2RlTGVuZ3RofSBjaGFyYWN0ZXJzLiBZb3UgYXJlIGN1cnJlbnRseSBhdCAke2lucHV0Q29kZS5sZW5ndGh9IGNoYXJhY3RlcnMuYCxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRPdXRwdXRDb2RlKCcnKTtcblxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgaW5wdXRMYW5ndWFnZSxcbiAgICAgIG91dHB1dExhbmd1YWdlLFxuICAgICAgaW5wdXRDb2RlXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdHJhbnNsYXRlJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmJvZHk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRlciA9IGRhdGEuZ2V0UmVhZGVyKCk7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBkb25lID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmU6IGRvbmVSZWFkaW5nIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgZG9uZSA9IGRvbmVSZWFkaW5nO1xuICAgICAgY29uc3QgY2h1bmtWYWx1ZSA9IGRlY29kZXIuZGVjb2RlKHZhbHVlKTtcblxuICAgICAgc2V0T3V0cHV0Q29kZSgocHJldkNvZGUpID0+IHByZXZDb2RlICsgY2h1bmtWYWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdmaXhlZCBsZWZ0LTAgdG9wLTAgdy1zY3JlZW4gaC1zY3JlZW4gLXotMTAnIHNyYz17YmFja2dyb3VuZH0gYWx0PSdCYWNrZ3JvdW5kJyAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1zYW5zIHRleHQtNXhsIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkIHB0LTUgJz5FZHVCaW5nIENvZGUgVHJhbnNsYXRvcjwvaDE+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zYW5zIG10LTUgdGV4dC0yeGwganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBtYi0xMFwiPlRyYW5zbGF0ZSB5b3VyIGNvZGUgdG8gYW5vdGhlciBwcm9ncmFtbWluZyBsYW5ndWFnZS48L2gyPlxuICAgICAgey8qIGlucHV0IGNvZGUgd2luZG93ICovfVxuICAgICAgPENvZGVXaW5kb3cgY29kZT17aW5wdXRDb2RlfSBzZXRDb2RlPXtzZXRJbnB1dENvZGV9IGxvYWRpbmc9e2xvYWRpbmd9IGhhbmRsZUxhbmd1YWdlQ2hhbmdlPXtoYW5kbGVJbnB1dExhbmd1YWdlQ2hhbmdlfSBsYW5ndWFnZT17aW5wdXRMYW5ndWFnZX0gLz5cblxuICAgICAgey8qIHRyYW5zbGF0ZSBidXR0b24gKi99XG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtsb2FkaW5nfSBjbGFzc05hbWU9J2JnLVsjQzUzQUFFXSAgYm9yZGVyLXdoaXRlIHAtMyBtLTIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQnIG9uQ2xpY2s9e2hhbmRsZVRyYW5zbGF0ZX0+e2xvYWRpbmcgPyBgVHJhbnNsYXRpbmcuLi5gIDogYFRyYW5zbGF0ZSDwn5SBYH08L2J1dHRvbj5cblxuICAgICAgey8qIG91dHB1dCBjb2RlIHdpbmRvdyAqL31cbiAgICAgIDxDb2RlV2luZG93IGNvZGU9e291dHB1dENvZGV9IHNldENvZGU9e3NldE91dHB1dENvZGV9IGxvYWRpbmc9e2xvYWRpbmd9IGhhbmRsZUxhbmd1YWdlQ2hhbmdlPXtoYW5kbGVPdXRwdXRMYW5ndWFnZUNoYW5nZX0gbGFuZ3VhZ2U9e291dHB1dExhbmd1YWdlfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIG10LTUgcGItNVwiPlBvd2VyZWQgYnkgPGEgY2xhc3NOYW1lPVwicmVmLWxpbmsgdGV4dC1bI0M1M0FBRV1cIiBocmVmPVwiaHR0cDovL21ldGFzY2hvb2wuc28vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPm1ldGFzY2hvb2wg8J+UrjwvYT48L3A+XG4gICAgICA8YSBjbGFzc05hbWU9JyBmbGV4IGZvbnQtc2FucyBtYi01IHAtMSBpdGVtcy1jZW50ZXInIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KCdDaGVjayBvdXQgdGhpcyBhd2Vzb21lIGNvZGUgdHJhbnNsYXRvciEnKX0mdXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KCdodHRwczovL21lJyl9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPjxJbWFnZSBjbGFzc05hbWU9J21yLTAuNSBqdXN0aWZ5LWNlbnRlcicgc3JjPXt0d2l0dGVyX2ltYWdlfSBhbHQ9XCJUd2l0dGVyXCIgLz5TaGFyZSBpdCBvbiBUd2l0dGVyPC9hPlxuICAgIDwvZGl2PlxuXG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb2RlV2luZG93IiwiYmFja2dyb3VuZCIsInR3aXR0ZXJfaW1hZ2UiLCJJbWFnZSIsIkhvbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlucHV0Q29kZSIsInNldElucHV0Q29kZSIsIm91dHB1dENvZGUiLCJzZXRPdXRwdXRDb2RlIiwiaW5wdXRMYW5ndWFnZSIsInNldElucHV0TGFuZ3VhZ2UiLCJvdXRwdXRMYW5ndWFnZSIsInNldE91dHB1dExhbmd1YWdlIiwiaGFuZGxlSW5wdXRMYW5ndWFnZUNoYW5nZSIsIm9wdGlvbiIsInZhbHVlIiwiaGFuZGxlT3V0cHV0TGFuZ3VhZ2VDaGFuZ2UiLCJoYW5kbGVUcmFuc2xhdGUiLCJtYXhDb2RlTGVuZ3RoIiwiYWxlcnQiLCJsZW5ndGgiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwic2lnbmFsIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZGF0YSIsInJlYWRlciIsImdldFJlYWRlciIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsImRvbmUiLCJkb25lUmVhZGluZyIsInJlYWQiLCJjaHVua1ZhbHVlIiwiZGVjb2RlIiwicHJldkNvZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoMSIsImgyIiwiY29kZSIsInNldENvZGUiLCJoYW5kbGVMYW5ndWFnZUNoYW5nZSIsImxhbmd1YWdlIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwicCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});