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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    function twoDigit(num) {\n        let ret;\n        if (num < 10) ret = \"0\" + num;\n        else ret = num;\n        return ret;\n    }\n    let today = new Date();\n    let year = today.getFullYear();\n    let month = today.getMonth() + 1;\n    let date = today.getDate();\n    const [hours, setHour] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getHours());\n    const [minutes, setMin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getMinutes());\n    const [seconds, setSec] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getSeconds());\n    //let msg = year + \"年\" + month + \"月\" + date + \"日\" + hours + \"時\" + minutes + \"分\" + seconds + \"秒\";\n    setInterval(()=>{\n        const now = new Date();\n        setHour(now.getHours());\n        setMin(now.getMinutes());\n        setSec(now.getSeconds());\n    }, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"kke-phi\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"サイトもどき\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"hieri.jp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        style: {\n                                            color: \"skyblue\"\n                                        },\n                                        href: \"https://www.lovelive-anime.jp/otonokizaka/member/member02.html\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"絢瀬絵里\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"を推せ！！！！！！！！！！\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: \"南條愛乃さんも推しましょう。約束。\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"RealtimeClockArea\",\n                        suppressHydrationWarning: true,\n                        style: {\n                            textAlign: \"right\"\n                        },\n                        children: [\n                            year,\n                            \"年\",\n                            month,\n                            \"月\",\n                            date,\n                            \"日\",\n                            twoDigit(hours),\n                            \"時\",\n                            twoDigit(minutes),\n                            \"分\",\n                            twoDigit(seconds),\n                            \"秒\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGithub,\n                                width: 18,\n                                height: 18,\n                                transform: \"down-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 9\n                            }, this),\n                            \" Github:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                style: {\n                                    color: \"blue\"\n                                },\n                                href: \"https://Github.com/hieri1021/myfavorite\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"hieri1021/myfaovrite\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 94\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTwitter,\n                                width: 18,\n                                height: 18,\n                                transform: \"down-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, this),\n                            \" Twitter:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                style: {\n                                    color: \"blue\"\n                                },\n                                href: \"https://twitter.com/yamahi_5028\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"@yamahi_5028\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 96\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2oVDubZtxUNIJvFHIwkiYfIk8fE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhR2l0aHViIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIlxyXG5pbXBvcnQgeyBmYVR3aXR0ZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBmdW5jdGlvbiB0d29EaWdpdChudW06IG51bWJlcikge1xyXG4gICAgbGV0IHJldDtcclxuICAgIGlmKCBudW0gPCAxMCApIFxyXG4gICAgICByZXQgPSBcIjBcIiArIG51bTsgXHJcbiAgICBlbHNlIFxyXG4gICAgICByZXQgPSBudW07IFxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG4gIGxldCBkYXRlID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gIGNvbnN0IFtob3Vycywgc2V0SG91cl0gPSB1c2VTdGF0ZSh0b2RheS5nZXRIb3VycygpKTtcclxuICBjb25zdCBbbWludXRlcywgc2V0TWluXSA9IHVzZVN0YXRlKHRvZGF5LmdldE1pbnV0ZXMoKSk7XHJcbiAgY29uc3QgW3NlY29uZHMsIHNldFNlY10gPSB1c2VTdGF0ZSh0b2RheS5nZXRTZWNvbmRzKCkpO1xyXG4gIC8vbGV0IG1zZyA9IHllYXIgKyBcIuW5tFwiICsgbW9udGggKyBcIuaciFwiICsgZGF0ZSArIFwi5pelXCIgKyBob3VycyArIFwi5pmCXCIgKyBtaW51dGVzICsgXCLliIZcIiArIHNlY29uZHMgKyBcIuenklwiO1xyXG4gIFxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBzZXRIb3VyKG5vdy5nZXRIb3VycygpKTtcclxuICAgIHNldE1pbihub3cuZ2V0TWludXRlcygpKTtcclxuICAgIHNldFNlYyhub3cuZ2V0U2Vjb25kcygpKTtcclxuICB9LCAxMDAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPmtrZS1waGk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCLjgrXjgqTjg4jjgoLjganjgY1cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxPmhpZXJpLmpwPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6IFwic2t5Ymx1ZVwifX0gaHJlZj1cImh0dHBzOi8vd3d3LmxvdmVsaXZlLWFuaW1lLmpwL290b25va2l6YWthL21lbWJlci9tZW1iZXIwMi5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPue1oueArOe1temHjDwvYT5cclxuICAgICAgICAgICAg44KS5o6o44Gb77yB77yB77yB77yB77yB77yB77yB77yB77yB77yBXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGg0IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+5Y2X5qKd5oSb5LmD44GV44KT44KC5o6o44GX44G+44GX44KH44GG44CC57SE5p2f44CCPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcblxyXG4gICAgICA8cCBcclxuICAgICAgaWQ9XCJSZWFsdGltZUNsb2NrQXJlYVwiIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz17dHJ1ZX1cclxuICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XHJcbiAgICAgID5cclxuICAgICAgICB7eWVhcn3lubR7bW9udGh95pyIe2RhdGV95pele3R3b0RpZ2l0KGhvdXJzKX3mmYJ7dHdvRGlnaXQobWludXRlcyl95YiGe3R3b0RpZ2l0KHNlY29uZHMpfeenklxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSB3aWR0aD17MTh9IGhlaWdodD17MTh9IHRyYW5zZm9ybT1cImRvd24tMVwiIC8+IEdpdGh1Yjo8YSBzdHlsZT17e2NvbG9yOiBcImJsdWVcIn19IGhyZWY9XCJodHRwczovL0dpdGh1Yi5jb20vaGllcmkxMDIxL215ZmF2b3JpdGVcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+aGllcmkxMDIxL215ZmFvdnJpdGU8L2E+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVR3aXR0ZXJ9IHdpZHRoPXsxOH0gaGVpZ2h0PXsxOH0gdHJhbnNmb3JtPVwiZG93bi0xXCIgLz4gVHdpdHRlcjo8YSBzdHlsZT17e2NvbG9yOiBcImJsdWVcIn19IGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3lhbWFoaV81MDI4XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkB5YW1haGlfNTAyODwvYT5cclxuICAgICAgPC9wPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2RpdiA+XHJcbiAgICBcclxuICApXHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsInVzZVN0YXRlIiwiUmVhY3QiLCJGb250QXdlc29tZUljb24iLCJmYUdpdGh1YiIsImZhVHdpdHRlciIsIkhvbWUiLCJ0d29EaWdpdCIsIm51bSIsInJldCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImhvdXJzIiwic2V0SG91ciIsImdldEhvdXJzIiwibWludXRlcyIsInNldE1pbiIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2VjIiwiZ2V0U2Vjb25kcyIsInNldEludGVydmFsIiwibm93IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInN0eWxlIiwidGV4dEFsaWduIiwiYSIsImNvbG9yIiwidGFyZ2V0IiwiaDQiLCJwIiwiaWQiLCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmciLCJociIsImljb24iLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});