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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"@fortawesome/fontawesome-svg-core\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"@fortawesome/free-brands-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);\n([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGithub);\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTwitter);\nfunction Home() {\n    function twoDigit(num) {\n        let ret;\n        if (num < 10) ret = \"0\" + num;\n        else ret = num;\n        return ret;\n    }\n    let today = new Date();\n    let year = today.getFullYear();\n    let month = today.getMonth() + 1;\n    let date = today.getDate();\n    const [hours, setHour] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getHours());\n    const [minutes, setMin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getMinutes());\n    const [seconds, setSec] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(today.getSeconds());\n    //let msg = year + \"年\" + month + \"月\" + date + \"日\" + hours + \"時\" + minutes + \"分\" + seconds + \"秒\";\n    setInterval(()=>{\n        const now = new Date();\n        setHour(now.getHours());\n        setMin(now.getMinutes());\n        setSec(now.getSeconds());\n    }, 1000);\n    /*const main = async () => {\r\n    const browser = await puppeteer.launch()\r\n    const page = await browser.newPage()\r\n    await page.goto(\"https://zenn.dev\")\r\n  \r\n    // トップページの記事タイトルを列挙する\r\n    const titles = await page.$$eval('h2', list => list.map(e => e.textContent))\r\n    console.log(titles)\r\n  \r\n    // トップページのスクショを残す\r\n    await page.screenshot({ path: \"C:/typescript/zenntop.png\" });\r\n  \r\n    await browser.close()\r\n  }*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"hieri.jp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"サイトもどき\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/lamune.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"ヒエリのサイト\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        style: {\n                                            color: \"skyblue\"\n                                        },\n                                        href: \"https://www.lovelive-anime.jp/otonokizaka/member/member02.html\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"絢瀬絵里\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"を推せ！！！！！！！！！！\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: \"南條愛乃さんも推しましょう。約束。\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://moe-counter.yude.jp/get/@hieri?theme=asoul\",\n                            alt: \"表示カウンター(count.getloli.com)\",\n                            loading: \"lazy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"RealtimeClockArea\",\n                        suppressHydrationWarning: true,\n                        style: {\n                            textAlign: \"right\"\n                        },\n                        children: [\n                            year,\n                            \"年\",\n                            month,\n                            \"月\",\n                            date,\n                            \"日\",\n                            twoDigit(hours),\n                            \"時\",\n                            twoDigit(minutes),\n                            \"分\",\n                            twoDigit(seconds),\n                            \"秒\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGithub,\n                                width: 18,\n                                height: 18,\n                                transform: \"down-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 9\n                            }, this),\n                            \" Github:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                style: {\n                                    color: \"blue\"\n                                },\n                                href: \"https://Github.com/hieri1021/myfavorite\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"hieri1021/myfaovrite\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 112\n                            }, this),\n                            \" / \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTwitter,\n                                width: 18,\n                                height: 18,\n                                transform: \"down-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 255\n                            }, this),\n                            \" Twitter:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                style: {\n                                    color: \"blue\"\n                                },\n                                href: \"https://twitter.com/yamahi_5028\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"@yamahi_5028\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 360\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\javel\\\\OneDrive\\\\Documents\\\\GitHub\\\\hieri_website\\\\pages\\\\index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBRWtCO0FBQ2Q7QUFDUDtBQUN1QztBQUNXO0FBQ2Q7QUFDQztBQUUvREssMEVBQVcsQ0FBQ0Msd0VBQVFBO0FBQ3BCRCwwRUFBVyxDQUFDRSx5RUFBU0E7QUFFTixTQUFTRSxPQUFPO0lBRTdCLFNBQVNDLFNBQVNDLEdBQVcsRUFBRTtRQUM3QixJQUFJQztRQUNKLElBQUlELE1BQU0sSUFDUkMsTUFBTSxNQUFNRDthQUVaQyxNQUFNRDtRQUNSLE9BQU9DO0lBQ1Q7SUFFQSxJQUFJQyxRQUFRLElBQUlDO0lBQ2hCLElBQUlDLE9BQU9GLE1BQU1HLFdBQVc7SUFDNUIsSUFBSUMsUUFBUUosTUFBTUssUUFBUSxLQUFLO0lBQy9CLElBQUlDLE9BQU9OLE1BQU1PLE9BQU87SUFDeEIsTUFBTSxDQUFDQyxPQUFPQyxRQUFRLEdBQUdwQiwrQ0FBUUEsQ0FBQ1csTUFBTVUsUUFBUTtJQUNoRCxNQUFNLENBQUNDLFNBQVNDLE9BQU8sR0FBR3ZCLCtDQUFRQSxDQUFDVyxNQUFNYSxVQUFVO0lBQ25ELE1BQU0sQ0FBQ0MsU0FBU0MsT0FBTyxHQUFHMUIsK0NBQVFBLENBQUNXLE1BQU1nQixVQUFVO0lBQ25ELGdHQUFnRztJQUVoR0MsWUFBWSxJQUFNO1FBQ2hCLE1BQU1DLE1BQU0sSUFBSWpCO1FBQ2hCUSxRQUFRUyxJQUFJUixRQUFRO1FBQ3BCRSxPQUFPTSxJQUFJTCxVQUFVO1FBQ3JCRSxPQUFPRyxJQUFJRixVQUFVO0lBQ3ZCLEdBQUc7SUFFSDtRQWdCT0ksV0FBV2hDLE9BQU9pQyxTQUFTOzswQkFDOUIsUUFBQ2xDOzs7a0NBQ1E7Ozs7Ozs7d0JBQ0RxQyxHQUFBQSw2REFBSzs2RkFBc0I7Ozs7OztrQ0FDakM7d0JBQU1HLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsUUFBQ0M7O2tDQUNDO2tDQUFJOzs7Ozs7a0NBQ0osUUFBQ1Y7d0JBQUlDOzs7dUZBQ0NXLE1BQU87O2dDQUFvQjs7O3dDQUMxQkEsT0FBTzs7OzsrRkFBMEZJLE9BQU87d0dBQWE7Ozs7Ozs7b0NBQThCOzs7Ozs7OzBDQUd4SixRQUFDQztnQ0FBR0wsT0FBTztvQ0FBQ0MsV0FBVztnQ0FBUTswQ0FBRzs7Ozs7Ozs7Ozs7O2tDQUdwQzt3QkFBS1osV0FBVTtrQ0FDYjs0QkFBS2tCLEtBQUk7NEJBQ05DLEtBQUk7NEJBQ0pDLFNBQVE7Ozs7Ozs7Ozs7O2tDQUdmLFFBQUNDO3dCQUNEQyxJQUFHO3dCQUFvQkM7d0JBQ3ZCWixPQUFPOzRCQUFDQyxXQUFXO3dCQUFPOzs0QkFFdkI5Qjs0QkFBSzs0QkFBRUU7NEJBQU07NEJBQUVFOzRCQUFLOzRCQUFFVCxNQUFBQSw2REFBU1c7NEJBQU87NEJBQUVYLFNBQVNjOzRCQUFTOzRCQUFFZCxTQUFTaUI7Ozs7Ozs7Ozs7Ozs7a0NBSXhFLFFBQUMyQjt3QkFBRVYsT0FBTzs7d0JBQW9COzs7Z0NBQ1hjLE1BQU1wRDs7Z0NBQXVDc0QsRUFBQUEsNkRBQVE7Z0NBQUlDLFdBQVU7Ozs7Ozs0QkFBVzs7Z0NBQVdqQjtvQ0FBUUcsTUFBQUEsNkRBQU87Z0NBQU07Z0NBQUdOLE1BQUs7Z0NBQTBDTyxRQUFPO2dDQUFTUixLQUFJOzBDQUFzQjs7Ozs7OzRCQUF3Qjs7Z0NBQW9Ca0IsTUFBTW5EO2dDQUE2Qm9EO2dDQUFXQyxRQUFRO2dDQUFJQyxXQUFVOzs7Ozs7NEJBQVc7O2dDQUFZakI7b0NBQVFHLE1BQUFBLDZEQUFPO2dDQUFNO2dDQUFHTixNQUFLO2dDQUFrQ08sUUFBTztnQ0FBU1IsS0FBSTswQ0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlmYXZvLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBsaWJyYXJ5LCBJY29uRGVmaW5pdGlvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcclxuaW1wb3J0IHsgZmFHaXRodWIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBmYVR3aXR0ZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgcHVwcGV0ZWVyIGZyb20gXCJwdXBwZXRlZXJcIjtcclxubGlicmFyeS5hZGQoZmFHaXRodWIgYXMgSWNvbkRlZmluaXRpb24pO1xyXG5saWJyYXJ5LmFkZChmYVR3aXR0ZXIgYXMgSWNvbkRlZmluaXRpb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgZnVuY3Rpb24gdHdvRGlnaXQobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCByZXQ7XHJcbiAgICBpZiggbnVtIDwgMTAgKSBcclxuICAgICAgcmV0ID0gXCIwXCIgKyBudW07IFxyXG4gICAgZWxzZSBcclxuICAgICAgcmV0ID0gbnVtOyBcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICBsZXQgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgZGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcclxuICBjb25zdCBbaG91cnMsIHNldEhvdXJdID0gdXNlU3RhdGUodG9kYXkuZ2V0SG91cnMoKSk7XHJcbiAgY29uc3QgW21pbnV0ZXMsIHNldE1pbl0gPSB1c2VTdGF0ZSh0b2RheS5nZXRNaW51dGVzKCkpO1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNdID0gdXNlU3RhdGUodG9kYXkuZ2V0U2Vjb25kcygpKTtcclxuICAvL2xldCBtc2cgPSB5ZWFyICsgXCLlubRcIiArIG1vbnRoICsgXCLmnIhcIiArIGRhdGUgKyBcIuaXpVwiICsgaG91cnMgKyBcIuaZglwiICsgbWludXRlcyArIFwi5YiGXCIgKyBzZWNvbmRzICsgXCLnp5JcIjtcclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIHNldEhvdXIobm93LmdldEhvdXJzKCkpO1xyXG4gICAgc2V0TWluKG5vdy5nZXRNaW51dGVzKCkpO1xyXG4gICAgc2V0U2VjKG5vdy5nZXRTZWNvbmRzKCkpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxuICAvKmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBicm93c2VyID0gYXdhaXQgcHVwcGV0ZWVyLmxhdW5jaCgpXHJcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKClcclxuICAgIGF3YWl0IHBhZ2UuZ290byhcImh0dHBzOi8vemVubi5kZXZcIilcclxuICBcclxuICAgIC8vIOODiOODg+ODl+ODmuODvOOCuOOBruiomOS6i+OCv+OCpOODiOODq+OCkuWIl+aMmeOBmeOCi1xyXG4gICAgY29uc3QgdGl0bGVzID0gYXdhaXQgcGFnZS4kJGV2YWwoJ2gyJywgbGlzdCA9PiBsaXN0Lm1hcChlID0+IGUudGV4dENvbnRlbnQpKVxyXG4gICAgY29uc29sZS5sb2codGl0bGVzKVxyXG4gIFxyXG4gICAgLy8g44OI44OD44OX44Oa44O844K444Gu44K544Kv44K344On44KS5q6L44GZXHJcbiAgICBhd2FpdCBwYWdlLnNjcmVlbnNob3QoeyBwYXRoOiBcIkM6L3R5cGVzY3JpcHQvemVubnRvcC5wbmdcIiB9KTtcclxuICBcclxuICAgIGF3YWl0IGJyb3dzZXIuY2xvc2UoKVxyXG4gIH0qL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+aGllcmkuanA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCLjgrXjgqTjg4jjgoLjganjgY1cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xhbXVuZS5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDE+44OS44Ko44Oq44Gu44K144Kk44OIPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6IFwic2t5Ymx1ZVwifX0gaHJlZj1cImh0dHBzOi8vd3d3LmxvdmVsaXZlLWFuaW1lLmpwL290b25va2l6YWthL21lbWJlci9tZW1iZXIwMi5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPue1oueArOe1temHjDwvYT5cclxuICAgICAgICAgICAg44KS5o6o44Gb77yB77yB77yB77yB77yB77yB77yB77yB77yB77yBXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGg0IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+5Y2X5qKd5oSb5LmD44GV44KT44KC5o6o44GX44G+44GX44KH44GG44CC57SE5p2f44CCPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbW9lLWNvdW50ZXIueXVkZS5qcC9nZXQvQGhpZXJpP3RoZW1lPWFzb3VsXCJcclxuICAgICAgICAgICAgIGFsdD1cIuihqOekuuOCq+OCpuODs+OCv+ODvChjb3VudC5nZXRsb2xpLmNvbSlcIlxyXG4gICAgICAgICAgICAgbG9hZGluZz0nbGF6eScgLz5cclxuICAgICAgICA8L2Rpdj4gICAgICBcclxuXHJcbiAgICAgIDxwIFxyXG4gICAgICBpZD1cIlJlYWx0aW1lQ2xvY2tBcmVhXCIgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nPXt0cnVlfVxyXG4gICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cclxuICAgICAgPlxyXG4gICAgICAgIHt5ZWFyfeW5tHttb250aH3mnIh7ZGF0ZX3ml6V7dHdvRGlnaXQoaG91cnMpfeaZgnt0d29EaWdpdChtaW51dGVzKX3liIZ7dHdvRGlnaXQoc2Vjb25kcyl956eSXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWIgYXMgSWNvbkRlZmluaXRpb259IHdpZHRoPXsxOH0gaGVpZ2h0PXsxOH0gdHJhbnNmb3JtPVwiZG93bi0xXCIgLz4gR2l0aHViOjxhIHN0eWxlPXt7Y29sb3I6IFwiYmx1ZVwifX0gaHJlZj1cImh0dHBzOi8vR2l0aHViLmNvbS9oaWVyaTEwMjEvbXlmYXZvcml0ZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5oaWVyaTEwMjEvbXlmYW92cml0ZTwvYT4gLyA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlciBhcyBJY29uRGVmaW5pdGlvbn0gd2lkdGg9ezE4fSBoZWlnaHQ9ezE4fSB0cmFuc2Zvcm09XCJkb3duLTFcIiAvPiBUd2l0dGVyOjxhIHN0eWxlPXt7Y29sb3I6IFwiYmx1ZVwifX0gaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20veWFtYWhpXzUwMjhcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+QHlhbWFoaV81MDI4PC9hPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2ID4gICAgXHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiRm9udEF3ZXNvbWVJY29uIiwibGlicmFyeSIsImZhR2l0aHViIiwiZmFUd2l0dGVyIiwiYWRkIiwiSG9tZSIsInR3b0RpZ2l0IiwibnVtIiwicmV0IiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwiaG91cnMiLCJzZXRIb3VyIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwic2V0TWluIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWMiLCJnZXRTZWNvbmRzIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJhIiwiY29sb3IiLCJ0YXJnZXQiLCJoNCIsImltZyIsInNyYyIsImFsdCIsImxvYWRpbmciLCJwIiwiaWQiLCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmciLCJociIsImljb24iLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

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