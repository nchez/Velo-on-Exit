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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ PlayerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nvar __N_SSP = true;\nfunction PlayerPage(param) {\n    var playerData = param.playerData;\n    var _this = this;\n    // const [dates, setDates] = useState([])\n    // const [spots, setSpots] = useState([])\n    console.log(playerData);\n    var positionsArr = [];\n    playerData.forEach(function(element, index) {\n        if (positionsArr.includes(element.position) === false) {\n            positionsArr.push(element.position);\n        }\n    });\n    var playerDates = playerData.map(function(element) {\n        return element.date;\n    });\n    var playerSpots = playerData.map(function(element) {\n        return element.spot;\n    });\n    var options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Chart.js Line Chart\"\n            }\n        }\n    };\n    var chartData = {\n        labels: playerDates,\n        datasets: [\n            {\n                label: 2022,\n                data: playerSpots,\n                borderColor: \"rgb(255, 99, 132)\",\n                backgroundColor: \"rgba(255, 99, 132, 0.5)\"\n            }, \n        ]\n    };\n    var positions = positionsArr.map(function(element, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: element\n        }, \"positions-index-\".concat(index), false, {\n            fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Player Page for: \",\n                    playerData[0].player_name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Position(s) Played\"\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: positions\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                options: options,\n                data: chartData\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n};\n_c = PlayerPage;\nvar _c;\n$RefreshReg$(_c, \"PlayerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXIvW3BsYXllcklkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVNpQjtBQUNxQjtBQUNOO0FBRWhDQyxvREFBZ0IsQ0FDZEMsbURBQWEsRUFDYkMsaURBQVcsRUFDWEMsa0RBQVksRUFDWkMsaURBQVcsRUFDWEMsMkNBQUssRUFDTEMsNkNBQU8sRUFDUEMsNENBQU0sQ0FDUDs7QUFFYyxTQUFTSSxVQUFVLENBQUMsS0FBYyxFQUFFO1FBQWhCLFVBQVksR0FBWixLQUFjLENBQVpDLFVBQVU7O0lBQzdDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUM7SUFDdkIsSUFBTUcsWUFBWSxHQUFHLEVBQUU7SUFDdkJILFVBQVUsQ0FBQ0ksT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO1FBQ3JDLElBQUlILFlBQVksQ0FBQ0ksUUFBUSxDQUFDRixPQUFPLENBQUNHLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNyREwsWUFBWSxDQUFDTSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0csUUFBUSxDQUFDO1NBQ3BDO0tBQ0YsQ0FBQztJQUNGLElBQU1FLFdBQVcsR0FBR1YsVUFBVSxDQUFDVyxHQUFHLENBQUMsU0FBQ04sT0FBTyxFQUFLO1FBQzlDLE9BQU9BLE9BQU8sQ0FBQ08sSUFBSTtLQUNwQixDQUFDO0lBQ0YsSUFBTUMsV0FBVyxHQUFHYixVQUFVLENBQUNXLEdBQUcsQ0FBQyxTQUFDTixPQUFPLEVBQUs7UUFDOUMsT0FBT0EsT0FBTyxDQUFDUyxJQUFJO0tBQ3BCLENBQUM7SUFFRixJQUFNQyxPQUFPLEdBQUc7UUFDZEMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLE9BQU8sRUFBRTtZQUNQQyxNQUFNLEVBQUU7Z0JBQ05WLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0RXLEtBQUssRUFBRTtnQkFDTEMsT0FBTyxFQUFFLElBQUk7Z0JBQ2JDLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7U0FDRjtLQUNGO0lBRUQsSUFBTUMsU0FBUyxHQUFHO1FBQ2hCQyxNQUFNLEVBQUViLFdBQVc7UUFDbkJjLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxLQUFLLEVBQUUsSUFBSTtnQkFDWEMsSUFBSSxFQUFFYixXQUFXO2dCQUNqQmMsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaENDLGVBQWUsRUFBRSx5QkFBeUI7YUFDM0M7U0FDRjtLQUNGO0lBRUQsSUFBTUMsU0FBUyxHQUFHMUIsWUFBWSxDQUFDUSxHQUFHLENBQUMsU0FBQ04sT0FBTyxFQUFFQyxLQUFLLEVBQUs7UUFDckQscUJBQU8sOERBQUN3QixJQUFFO3NCQUFtQ3pCLE9BQU87V0FBcEMsa0JBQWlCLENBQVEsT0FBTkMsS0FBSyxDQUFFOzs7O2lCQUFnQjtLQUMzRCxDQUFDO0lBQ0YscUJBQ0UsOERBQUN5QixLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTs7b0JBQUMsbUJBQWlCO29CQUFDaEMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDaUMsV0FBVzs7Ozs7O29CQUFNOzBCQUNyRCw4REFBQ0MsSUFBRTswQkFBQyxvQkFBa0I7Ozs7O29CQUFLOzBCQUMzQiw4REFBQ0MsSUFBRTswQkFBRU4sU0FBUzs7Ozs7b0JBQU07MEJBQ3BCLDhEQUFDakMsaURBQUk7Z0JBQUNtQixPQUFPLEVBQUVBLE9BQU87Z0JBQUVXLElBQUksRUFBRUosU0FBUzs7Ozs7b0JBQUk7Ozs7OztZQUN2QyxDQUNQO0NBQ0Y7QUFyRHVCdkIsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wbGF5ZXIvW3BsYXllcklkXS5qc3g/MDQ1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgUG9pbnRFbGVtZW50LFxuICBMaW5lRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSAnY2hhcnQuanMnXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmRcbilcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyUGFnZSh7IHBsYXllckRhdGEgfSkge1xuICAvLyBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKVxuICAvLyBjb25zdCBbc3BvdHMsIHNldFNwb3RzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zb2xlLmxvZyhwbGF5ZXJEYXRhKVxuICBjb25zdCBwb3NpdGlvbnNBcnIgPSBbXVxuICBwbGF5ZXJEYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uc0Fyci5pbmNsdWRlcyhlbGVtZW50LnBvc2l0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgIHBvc2l0aW9uc0Fyci5wdXNoKGVsZW1lbnQucG9zaXRpb24pXG4gICAgfVxuICB9KVxuICBjb25zdCBwbGF5ZXJEYXRlcyA9IHBsYXllckRhdGEubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0ZVxuICB9KVxuICBjb25zdCBwbGF5ZXJTcG90cyA9IHBsYXllckRhdGEubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnQuc3BvdFxuICB9KVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIHRleHQ6ICdDaGFydC5qcyBMaW5lIENoYXJ0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGNoYXJ0RGF0YSA9IHtcbiAgICBsYWJlbHM6IHBsYXllckRhdGVzLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAyMDIyLFxuICAgICAgICBkYXRhOiBwbGF5ZXJTcG90cyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjUpJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfVxuXG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Fyci5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIDxsaSBrZXk9e2Bwb3NpdGlvbnMtaW5kZXgtJHtpbmRleH1gfT57ZWxlbWVudH08L2xpPlxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UGxheWVyIFBhZ2UgZm9yOiB7cGxheWVyRGF0YVswXS5wbGF5ZXJfbmFtZX08L2gxPlxuICAgICAgPGgyPlBvc2l0aW9uKHMpIFBsYXllZDwvaDI+XG4gICAgICA8dWw+e3Bvc2l0aW9uc308L3VsPlxuICAgICAgPExpbmUgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17Y2hhcnREYXRhfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBwbGF5ZXJJZCA9IGNvbnRleHQucGFyYW1zLnBsYXllcklkXG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wbGF5ZXIvJHtwbGF5ZXJJZH1gKVxuICBjb25zdCBwbGF5ZXJEYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zb2xlLmxvZyhwbGF5ZXJEYXRhKVxuICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IHByb3BzOiB7IHBsYXllckRhdGEgfSB9XG59XG4iXSwibmFtZXMiOlsiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJMaW5lIiwidXNlU3RhdGUiLCJyZWdpc3RlciIsIlBsYXllclBhZ2UiLCJwbGF5ZXJEYXRhIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uc0FyciIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJpbmNsdWRlcyIsInBvc2l0aW9uIiwicHVzaCIsInBsYXllckRhdGVzIiwibWFwIiwiZGF0ZSIsInBsYXllclNwb3RzIiwic3BvdCIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJjaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb25zIiwibGkiLCJkaXYiLCJoMSIsInBsYXllcl9uYW1lIiwiaDIiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/player/[playerId].jsx\n");

/***/ })

});