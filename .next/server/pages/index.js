/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215ZmF2by8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/YjE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"@fortawesome/free-brands-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);\n_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction Home() {\n    function twoDigit(num) {\n        let ret;\n        if (num < 10) ret = \"0\" + num;\n        else ret = num;\n        return ret;\n    }\n    let today = new Date();\n    let year = today.getFullYear();\n    let month = today.getMonth() + 1;\n    let date = today.getDate();\n    const [hours, setHour] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getHours());\n    const [minutes, setMin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getMinutes());\n    const [seconds, setSec] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getSeconds());\n    //let msg = year + \"年\" + month + \"月\" + date + \"日\" + hours + \"時\" + minutes + \"分\" + seconds + \"秒\";\n    setInterval(()=>{\n        const now = new Date();\n        setHour(now.getHours());\n        setMin(now.getMinutes());\n        setSec(now.getSeconds());\n    }, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"kke-phi\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"サイトもどき\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"hieri.jp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        style: {\n                                            color: \"skyblue\"\n                                        },\n                                        href: \"https://www.lovelive-anime.jp/otonokizaka/member/member02.html\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"絢瀬絵里\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"を推せ！！！！！！！！！！\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: \"南條愛乃さんも推しましょう。約束。\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"RealtimeClockArea\",\n                        suppressHydrationWarning: true,\n                        style: {\n                            textAlign: \"right\"\n                        },\n                        children: [\n                            year,\n                            \"年\",\n                            month,\n                            \"月\",\n                            date,\n                            \"日\",\n                            twoDigit(hours),\n                            \"時\",\n                            twoDigit(minutes),\n                            \"分\",\n                            twoDigit(seconds),\n                            \"秒\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGithub,\n                                width: 18,\n                                height: 18,\n                                transform: \"down-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 9\n                            }, this),\n                            \" Github:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                style: {\n                                    color: \"blue\"\n                                },\n                                href: \"https://Github.com/hieri1021/myfavorite\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"hieri1021/myfaovrite\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 94\n                            }, this),\n                            \" / \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTwitter,\n                                width: 18,\n                                height: 18,\n                                transform: \"down-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 237\n                            }, this),\n                            \" Twitter:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                style: {\n                                    color: \"blue\"\n                                },\n                                href: \"https://twitter.com/yamahi_5028\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"@yamahi_5028\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 324\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\GitHub\\\\myfavorite\\\\pages\\\\index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXZvLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCJcclxuaW1wb3J0IHsgZmFUd2l0dGVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgZnVuY3Rpb24gdHdvRGlnaXQobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCByZXQ7XHJcbiAgICBpZiggbnVtIDwgMTAgKSBcclxuICAgICAgcmV0ID0gXCIwXCIgKyBudW07IFxyXG4gICAgZWxzZSBcclxuICAgICAgcmV0ID0gbnVtOyBcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICBsZXQgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgZGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcclxuICBjb25zdCBbaG91cnMsIHNldEhvdXJdID0gdXNlU3RhdGUodG9kYXkuZ2V0SG91cnMoKSk7XHJcbiAgY29uc3QgW21pbnV0ZXMsIHNldE1pbl0gPSB1c2VTdGF0ZSh0b2RheS5nZXRNaW51dGVzKCkpO1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNdID0gdXNlU3RhdGUodG9kYXkuZ2V0U2Vjb25kcygpKTtcclxuICAvL2xldCBtc2cgPSB5ZWFyICsgXCLlubRcIiArIG1vbnRoICsgXCLmnIhcIiArIGRhdGUgKyBcIuaXpVwiICsgaG91cnMgKyBcIuaZglwiICsgbWludXRlcyArIFwi5YiGXCIgKyBzZWNvbmRzICsgXCLnp5JcIjtcclxuICBcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgc2V0SG91cihub3cuZ2V0SG91cnMoKSk7XHJcbiAgICBzZXRNaW4obm93LmdldE1pbnV0ZXMoKSk7XHJcbiAgICBzZXRTZWMobm93LmdldFNlY29uZHMoKSk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ra2UtcGhpPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwi44K144Kk44OI44KC44Gp44GNXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMT5oaWVyaS5qcDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOiBcInNreWJsdWVcIn19IGhyZWY9XCJodHRwczovL3d3dy5sb3ZlbGl2ZS1hbmltZS5qcC9vdG9ub2tpemFrYS9tZW1iZXIvbWVtYmVyMDIuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj7ntaLngKzntbXph4w8L2E+XHJcbiAgICAgICAgICAgIOOCkuaOqOOBm++8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8gVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoNCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PuWNl+aineaEm+S5g+OBleOCk+OCguaOqOOBl+OBvuOBl+OCh+OBhuOAgue0hOadn+OAgjwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG5cclxuICAgICAgPHAgXHJcbiAgICAgIGlkPVwiUmVhbHRpbWVDbG9ja0FyZWFcIiBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc9e3RydWV9XHJcbiAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3llYXJ95bm0e21vbnRofeaciHtkYXRlfeaXpXt0d29EaWdpdChob3Vycyl95pmCe3R3b0RpZ2l0KG1pbnV0ZXMpfeWIhnt0d29EaWdpdChzZWNvbmRzKX3np5JcclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gd2lkdGg9ezE4fSBoZWlnaHQ9ezE4fSB0cmFuc2Zvcm09XCJkb3duLTFcIiAvPiBHaXRodWI6PGEgc3R5bGU9e3tjb2xvcjogXCJibHVlXCJ9fSBocmVmPVwiaHR0cHM6Ly9HaXRodWIuY29tL2hpZXJpMTAyMS9teWZhdm9yaXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPmhpZXJpMTAyMS9teWZhb3ZyaXRlPC9hPiAvIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyfSB3aWR0aD17MTh9IGhlaWdodD17MTh9IHRyYW5zZm9ybT1cImRvd24tMVwiIC8+IFR3aXR0ZXI6PGEgc3R5bGU9e3tjb2xvcjogXCJibHVlXCJ9fSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS95YW1haGlfNTAyOFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5AeWFtYWhpXzUwMjg8L2E+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXYgPiAgICBcclxuICApXHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsInVzZVN0YXRlIiwiUmVhY3QiLCJGb250QXdlc29tZUljb24iLCJmYUdpdGh1YiIsImZhVHdpdHRlciIsIkhvbWUiLCJ0d29EaWdpdCIsIm51bSIsInJldCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImhvdXJzIiwic2V0SG91ciIsImdldEhvdXJzIiwibWludXRlcyIsInNldE1pbiIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2VjIiwiZ2V0U2Vjb25kcyIsInNldEludGVydmFsIiwibm93IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInN0eWxlIiwidGV4dEFsaWduIiwiYSIsImNvbG9yIiwidGFyZ2V0IiwiaDQiLCJwIiwiaWQiLCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmciLCJociIsImljb24iLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();