"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player/[playerId]",{

/***/ "./pages/player/[playerId].jsx":
/*!*************************************!*\
  !*** ./pages/player/[playerId].jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ PlayerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nvar __N_SSP = true;\nfunction PlayerPage(param) {\n    var playerData = param.playerData;\n    var _this = this;\n    // const [dates, setDates] = useState([])\n    // const [spots, setSpots] = useState([])\n    console.log(_typeof(new Date(playerData[0].date)));\n    var positionsArr = [];\n    playerData.forEach(function(element, index) {\n        if (positionsArr.includes(element.position) === false) {\n            positionsArr.push(element.position);\n        }\n    });\n    var playerDates = playerData.map(function(element) {\n        return element.date;\n    });\n    var playerSpots = playerData.map(function(element) {\n        return element.spot;\n    });\n    var options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Chart.js Line Chart\"\n            }\n        }\n    };\n    var chartData = {\n        labels: playerDates,\n        datasets: [\n            {\n                label: 2022,\n                data: playerSpots,\n                borderColor: \"rgb(255, 99, 132)\",\n                backgroundColor: \"rgba(255, 99, 132, 0.5)\"\n            }, \n        ]\n    };\n    var positions = positionsArr.map(function(element, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: element\n        }, \"positions-index-\".concat(index), false, {\n            fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Player Page for: \",\n                    playerData[0].player_name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Position(s) Played\"\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: positions\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                options: options,\n                data: chartData\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n};\n_c = PlayerPage;\nvar _c;\n$RefreshReg$(_c, \"PlayerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXIvW3BsYXllcklkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFTaUI7QUFDcUI7QUFDTjtBQUVoQ0Msb0RBQWdCLENBQ2RDLG1EQUFhLEVBQ2JDLGlEQUFXLEVBQ1hDLGtEQUFZLEVBQ1pDLGlEQUFXLEVBQ1hDLDJDQUFLLEVBQ0xDLDZDQUFPLEVBQ1BDLDRDQUFNLENBQ1A7O0FBRWMsU0FBU0ksVUFBVSxDQUFDLEtBQWMsRUFBRTtRQUFoQixVQUFZLEdBQVosS0FBYyxDQUFaQyxVQUFVOztJQUM3Qyx5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFtQyxDQUE1QixJQUFJQyxJQUFJLENBQUNILFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLEVBQUM7SUFDaEQsSUFBTUMsWUFBWSxHQUFHLEVBQUU7SUFDdkJMLFVBQVUsQ0FBQ00sT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO1FBQ3JDLElBQUlILFlBQVksQ0FBQ0ksUUFBUSxDQUFDRixPQUFPLENBQUNHLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNyREwsWUFBWSxDQUFDTSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0csUUFBUSxDQUFDO1NBQ3BDO0tBQ0YsQ0FBQztJQUNGLElBQU1FLFdBQVcsR0FBR1osVUFBVSxDQUFDYSxHQUFHLENBQUMsU0FBQ04sT0FBTyxFQUFLO1FBQzlDLE9BQU9BLE9BQU8sQ0FBQ0gsSUFBSTtLQUNwQixDQUFDO0lBQ0YsSUFBTVUsV0FBVyxHQUFHZCxVQUFVLENBQUNhLEdBQUcsQ0FBQyxTQUFDTixPQUFPLEVBQUs7UUFDOUMsT0FBT0EsT0FBTyxDQUFDUSxJQUFJO0tBQ3BCLENBQUM7SUFFRixJQUFNQyxPQUFPLEdBQUc7UUFDZEMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLE9BQU8sRUFBRTtZQUNQQyxNQUFNLEVBQUU7Z0JBQ05ULFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0RVLEtBQUssRUFBRTtnQkFDTEMsT0FBTyxFQUFFLElBQUk7Z0JBQ2JDLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7U0FDRjtLQUNGO0lBRUQsSUFBTUMsU0FBUyxHQUFHO1FBQ2hCQyxNQUFNLEVBQUVaLFdBQVc7UUFDbkJhLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxLQUFLLEVBQUUsSUFBSTtnQkFDWEMsSUFBSSxFQUFFYixXQUFXO2dCQUNqQmMsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaENDLGVBQWUsRUFBRSx5QkFBeUI7YUFDM0M7U0FDRjtLQUNGO0lBRUQsSUFBTUMsU0FBUyxHQUFHekIsWUFBWSxDQUFDUSxHQUFHLENBQUMsU0FBQ04sT0FBTyxFQUFFQyxLQUFLLEVBQUs7UUFDckQscUJBQU8sOERBQUN1QixJQUFFO3NCQUFtQ3hCLE9BQU87V0FBcEMsa0JBQWlCLENBQVEsT0FBTkMsS0FBSyxDQUFFOzs7O2lCQUFnQjtLQUMzRCxDQUFDO0lBQ0YscUJBQ0UsOERBQUN3QixLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTs7b0JBQUMsbUJBQWlCO29CQUFDakMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDa0MsV0FBVzs7Ozs7O29CQUFNOzBCQUNyRCw4REFBQ0MsSUFBRTswQkFBQyxvQkFBa0I7Ozs7O29CQUFLOzBCQUMzQiw4REFBQ0MsSUFBRTswQkFBRU4sU0FBUzs7Ozs7b0JBQU07MEJBQ3BCLDhEQUFDbEMsaURBQUk7Z0JBQUNvQixPQUFPLEVBQUVBLE9BQU87Z0JBQUVXLElBQUksRUFBRUosU0FBUzs7Ozs7b0JBQUk7Ozs7OztZQUN2QyxDQUNQO0NBQ0Y7QUFyRHVCeEIsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wbGF5ZXIvW3BsYXllcklkXS5qc3g/MDQ1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgUG9pbnRFbGVtZW50LFxuICBMaW5lRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSAnY2hhcnQuanMnXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmRcbilcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyUGFnZSh7IHBsYXllckRhdGEgfSkge1xuICAvLyBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKVxuICAvLyBjb25zdCBbc3BvdHMsIHNldFNwb3RzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zb2xlLmxvZyh0eXBlb2YgbmV3IERhdGUocGxheWVyRGF0YVswXS5kYXRlKSlcbiAgY29uc3QgcG9zaXRpb25zQXJyID0gW11cbiAgcGxheWVyRGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGlmIChwb3NpdGlvbnNBcnIuaW5jbHVkZXMoZWxlbWVudC5wb3NpdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICBwb3NpdGlvbnNBcnIucHVzaChlbGVtZW50LnBvc2l0aW9uKVxuICAgIH1cbiAgfSlcbiAgY29uc3QgcGxheWVyRGF0ZXMgPSBwbGF5ZXJEYXRhLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGVcbiAgfSlcbiAgY29uc3QgcGxheWVyU3BvdHMgPSBwbGF5ZXJEYXRhLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LnNwb3RcbiAgfSlcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgcGx1Z2luczoge1xuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB0ZXh0OiAnQ2hhcnQuanMgTGluZSBDaGFydCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBjaGFydERhdGEgPSB7XG4gICAgbGFiZWxzOiBwbGF5ZXJEYXRlcyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogMjAyMixcbiAgICAgICAgZGF0YTogcGxheWVyU3BvdHMsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMC41KScsXG4gICAgICB9LFxuICAgIF0sXG4gIH1cblxuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNBcnIubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHJldHVybiA8bGkga2V5PXtgcG9zaXRpb25zLWluZGV4LSR7aW5kZXh9YH0+e2VsZW1lbnR9PC9saT5cbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlBsYXllciBQYWdlIGZvcjoge3BsYXllckRhdGFbMF0ucGxheWVyX25hbWV9PC9oMT5cbiAgICAgIDxoMj5Qb3NpdGlvbihzKSBQbGF5ZWQ8L2gyPlxuICAgICAgPHVsPntwb3NpdGlvbnN9PC91bD5cbiAgICAgIDxMaW5lIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2NoYXJ0RGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcGxheWVySWQgPSBjb250ZXh0LnBhcmFtcy5wbGF5ZXJJZFxuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcGxheWVyLyR7cGxheWVySWR9YClcbiAgY29uc3QgcGxheWVyRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczogeyBwbGF5ZXJEYXRhIH0gfVxufVxuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiTGluZSIsInVzZVN0YXRlIiwicmVnaXN0ZXIiLCJQbGF5ZXJQYWdlIiwicGxheWVyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZGF0ZSIsInBvc2l0aW9uc0FyciIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJpbmNsdWRlcyIsInBvc2l0aW9uIiwicHVzaCIsInBsYXllckRhdGVzIiwibWFwIiwicGxheWVyU3BvdHMiLCJzcG90Iiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImNoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbnMiLCJsaSIsImRpdiIsImgxIiwicGxheWVyX25hbWUiLCJoMiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/player/[playerId].jsx\n");

/***/ })

});