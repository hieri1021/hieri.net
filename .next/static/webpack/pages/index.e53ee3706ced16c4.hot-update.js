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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    function twoDigit(num) {\n        let ret;\n        if (num < 10) ret = \"0\" + num;\n        else ret = num;\n        return ret;\n    }\n    let today = new Date();\n    let year = today.getFullYear();\n    let month = today.getMonth() + 1;\n    let date = today.getDate();\n    const [hours, setHour] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getHours());\n    const [minutes, setMin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getMinutes());\n    const [seconds, setSec] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getSeconds());\n    //let msg = year + \"年\" + month + \"月\" + date + \"日\" + hours + \"時\" + minutes + \"分\" + seconds + \"秒\";\n    setInterval(()=>{\n        const now = new Date();\n        setHour(now.getHours());\n        setMin(now.getMinutes());\n        setSec(now.getSeconds());\n    }, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"kke-phi\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"サイトもどき\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"hieri.jp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        style: {\n                                            color: \"skyblue\"\n                                        },\n                                        href: \"https://www.lovelive-anime.jp/otonokizaka/member/member02.html\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"絢瀬絵里\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"を推せ！！！！！！！！！！\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: \"南條愛乃さんも推しましょう。約束。\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"RealtimeClockArea\",\n                        suppressHydrationWarning: true,\n                        style: {\n                            textAlign: \"right\"\n                        },\n                        children: [\n                            year,\n                            \"年\",\n                            month,\n                            \"月\",\n                            date,\n                            \"日\",\n                            twoDigit(hours),\n                            \"時\",\n                            twoDigit(minutes),\n                            \"分\",\n                            twoDigit(seconds),\n                            \"秒\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGithub,\n                                width: 18,\n                                height: 18,\n                                transform: \"down-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 9\n                            }, this),\n                            \" Github:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                style: {\n                                    color: \"blue\"\n                                },\n                                href: \"https://Github.com/hieri1021/myfavorite\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"hieri1021/myfaovrite\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 94\n                            }, this),\n                            \"/\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTwitter,\n                                width: 18,\n                                height: 18,\n                                transform: \"down-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, this),\n                            \" Twitter:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                style: {\n                                    color: \"blue\"\n                                },\n                                href: \"https://twitter.com/yamahi_5028\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"@yamahi_5028\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 96\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2oVDubZtxUNIJvFHIwkiYfIk8fE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCJcclxuaW1wb3J0IHsgZmFUd2l0dGVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgZnVuY3Rpb24gdHdvRGlnaXQobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCByZXQ7XHJcbiAgICBpZiggbnVtIDwgMTAgKSBcclxuICAgICAgcmV0ID0gXCIwXCIgKyBudW07IFxyXG4gICAgZWxzZSBcclxuICAgICAgcmV0ID0gbnVtOyBcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICBsZXQgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgZGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcclxuICBjb25zdCBbaG91cnMsIHNldEhvdXJdID0gdXNlU3RhdGUodG9kYXkuZ2V0SG91cnMoKSk7XHJcbiAgY29uc3QgW21pbnV0ZXMsIHNldE1pbl0gPSB1c2VTdGF0ZSh0b2RheS5nZXRNaW51dGVzKCkpO1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNdID0gdXNlU3RhdGUodG9kYXkuZ2V0U2Vjb25kcygpKTtcclxuICAvL2xldCBtc2cgPSB5ZWFyICsgXCLlubRcIiArIG1vbnRoICsgXCLmnIhcIiArIGRhdGUgKyBcIuaXpVwiICsgaG91cnMgKyBcIuaZglwiICsgbWludXRlcyArIFwi5YiGXCIgKyBzZWNvbmRzICsgXCLnp5JcIjtcclxuICBcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgc2V0SG91cihub3cuZ2V0SG91cnMoKSk7XHJcbiAgICBzZXRNaW4obm93LmdldE1pbnV0ZXMoKSk7XHJcbiAgICBzZXRTZWMobm93LmdldFNlY29uZHMoKSk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ra2UtcGhpPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwi44K144Kk44OI44KC44Gp44GNXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMT5oaWVyaS5qcDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOiBcInNreWJsdWVcIn19IGhyZWY9XCJodHRwczovL3d3dy5sb3ZlbGl2ZS1hbmltZS5qcC9vdG9ub2tpemFrYS9tZW1iZXIvbWVtYmVyMDIuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj7ntaLngKzntbXph4w8L2E+XHJcbiAgICAgICAgICAgIOOCkuaOqOOBm++8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8gVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoNCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PuWNl+aineaEm+S5g+OBleOCk+OCguaOqOOBl+OBvuOBl+OCh+OBhuOAgue0hOadn+OAgjwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG5cclxuICAgICAgPHAgXHJcbiAgICAgIGlkPVwiUmVhbHRpbWVDbG9ja0FyZWFcIiBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc9e3RydWV9XHJcbiAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3llYXJ95bm0e21vbnRofeaciHtkYXRlfeaXpXt0d29EaWdpdChob3Vycyl95pmCe3R3b0RpZ2l0KG1pbnV0ZXMpfeWIhnt0d29EaWdpdChzZWNvbmRzKX3np5JcclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gd2lkdGg9ezE4fSBoZWlnaHQ9ezE4fSB0cmFuc2Zvcm09XCJkb3duLTFcIiAvPiBHaXRodWI6PGEgc3R5bGU9e3tjb2xvcjogXCJibHVlXCJ9fSBocmVmPVwiaHR0cHM6Ly9HaXRodWIuY29tL2hpZXJpMTAyMS9teWZhdm9yaXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPmhpZXJpMTAyMS9teWZhb3ZyaXRlPC9hPlxyXG4gICAgICAgIC9cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gd2lkdGg9ezE4fSBoZWlnaHQ9ezE4fSB0cmFuc2Zvcm09XCJkb3duLTFcIiAvPiBUd2l0dGVyOjxhIHN0eWxlPXt7Y29sb3I6IFwiYmx1ZVwifX0gaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20veWFtYWhpXzUwMjhcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+QHlhbWFoaV81MDI4PC9hPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2ID5cclxuICAgIFxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJSZWFjdCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhR2l0aHViIiwiZmFUd2l0dGVyIiwiSG9tZSIsInR3b0RpZ2l0IiwibnVtIiwicmV0IiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwiaG91cnMiLCJzZXRIb3VyIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwic2V0TWluIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWMiLCJnZXRTZWNvbmRzIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJhIiwiY29sb3IiLCJ0YXJnZXQiLCJoNCIsInAiLCJpZCIsInN1cHByZXNzSHlkcmF0aW9uV2FybmluZyIsImhyIiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});