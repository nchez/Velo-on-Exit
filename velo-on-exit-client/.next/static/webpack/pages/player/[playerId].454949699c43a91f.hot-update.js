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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ PlayerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nvar __N_SSP = true;\nfunction PlayerPage(param) {\n    var playerData = param.playerData;\n    var _this = this;\n    // const [dates, setDates] = useState([])\n    // const [spots, setSpots] = useState([])\n    var positionsArr = [];\n    playerData.forEach(function(element, index) {\n        if (positionsArr.includes(element.position) === false) {\n            positionsArr.push(element.position);\n        }\n    });\n    var playerDates = playerData.map(function(element) {\n        return new Date(element.date).toLocaleDateString();\n    });\n    var playerSpots = playerData.map(function(element) {\n        return element.spot;\n    });\n    var options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Chart.js Line Chart\"\n            }\n        }\n    };\n    var chartData = {\n        labels: playerDates,\n        datasets: [\n            {\n                label: 2022,\n                data: playerSpots,\n                borderColor: \"rgb(255, 99, 132)\",\n                backgroundColor: \"rgba(255, 99, 132, 0.5)\"\n            }, \n        ]\n    };\n    var positions = positionsArr.map(function(element, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: element\n        }, \"positions-index-\".concat(index), false, {\n            fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n            lineNumber: 66,\n            columnNumber: 12\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Player Page for: \",\n                    playerData[0].player_name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Position(s) Played\"\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: positions\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                options: options,\n                data: chartData\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n};\n_c = PlayerPage;\nvar _c;\n$RefreshReg$(_c, \"PlayerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXIvW3BsYXllcklkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVNpQjtBQUNxQjtBQUNOO0FBRWhDQyxvREFBZ0IsQ0FDZEMsbURBQWEsRUFDYkMsaURBQVcsRUFDWEMsa0RBQVksRUFDWkMsaURBQVcsRUFDWEMsMkNBQUssRUFDTEMsNkNBQU8sRUFDUEMsNENBQU0sQ0FDUDs7QUFFYyxTQUFTSSxVQUFVLENBQUMsS0FBYyxFQUFFO1FBQWhCLFVBQVksR0FBWixLQUFjLENBQVpDLFVBQVU7O0lBQzdDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsSUFBTUMsWUFBWSxHQUFHLEVBQUU7SUFDdkJELFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO1FBQ3JDLElBQUlILFlBQVksQ0FBQ0ksUUFBUSxDQUFDRixPQUFPLENBQUNHLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNyREwsWUFBWSxDQUFDTSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0csUUFBUSxDQUFDO1NBQ3BDO0tBQ0YsQ0FBQztJQUNGLElBQU1FLFdBQVcsR0FBR1IsVUFBVSxDQUFDUyxHQUFHLENBQUMsU0FBQ04sT0FBTyxFQUFLO1FBQzlDLE9BQU8sSUFBSU8sSUFBSSxDQUFDUCxPQUFPLENBQUNRLElBQUksQ0FBQyxDQUFDQyxrQkFBa0IsRUFBRTtLQUNuRCxDQUFDO0lBQ0YsSUFBTUMsV0FBVyxHQUFHYixVQUFVLENBQUNTLEdBQUcsQ0FBQyxTQUFDTixPQUFPLEVBQUs7UUFDOUMsT0FBT0EsT0FBTyxDQUFDVyxJQUFJO0tBQ3BCLENBQUM7SUFFRixJQUFNQyxPQUFPLEdBQUc7UUFDZEMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLE9BQU8sRUFBRTtZQUNQQyxNQUFNLEVBQUU7Z0JBQ05aLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0RhLEtBQUssRUFBRTtnQkFDTEMsT0FBTyxFQUFFLElBQUk7Z0JBQ2JDLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7U0FDRjtLQUNGO0lBRUQsSUFBTUMsU0FBUyxHQUFHO1FBQ2hCQyxNQUFNLEVBQUVmLFdBQVc7UUFDbkJnQixRQUFRLEVBQUU7WUFDUjtnQkFDRUMsS0FBSyxFQUFFLElBQUk7Z0JBQ1hDLElBQUksRUFBRWIsV0FBVztnQkFDakJjLFdBQVcsRUFBRSxtQkFBbUI7Z0JBQ2hDQyxlQUFlLEVBQUUseUJBQXlCO2FBQzNDO1NBQ0Y7S0FDRjtJQUVELElBQU1DLFNBQVMsR0FBRzVCLFlBQVksQ0FBQ1EsR0FBRyxDQUFDLFNBQUNOLE9BQU8sRUFBRUMsS0FBSyxFQUFLO1FBQ3JELHFCQUFPLDhEQUFDMEIsSUFBRTtzQkFBbUMzQixPQUFPO1dBQXBDLGtCQUFpQixDQUFRLE9BQU5DLEtBQUssQ0FBRTs7OztpQkFBZ0I7S0FDM0QsQ0FBQztJQUNGLHFCQUNFLDhEQUFDMkIsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7O29CQUFDLG1CQUFpQjtvQkFBQ2hDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ2lDLFdBQVc7Ozs7OztvQkFBTTswQkFDckQsOERBQUNDLElBQUU7MEJBQUMsb0JBQWtCOzs7OztvQkFBSzswQkFDM0IsOERBQUNDLElBQUU7MEJBQUVOLFNBQVM7Ozs7O29CQUFNOzBCQUNwQiw4REFBQ2pDLGlEQUFJO2dCQUFDbUIsT0FBTyxFQUFFQSxPQUFPO2dCQUFFVyxJQUFJLEVBQUVKLFNBQVM7Ozs7O29CQUFJOzs7Ozs7WUFDdkMsQ0FDUDtDQUNGO0FBcER1QnZCLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheWVyL1twbGF5ZXJJZF0uanN4PzA0NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmQsXG59IGZyb20gJ2NoYXJ0LmpzJ1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIExpbmVFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllclBhZ2UoeyBwbGF5ZXJEYXRhIH0pIHtcbiAgLy8gY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSlcbiAgLy8gY29uc3QgW3Nwb3RzLCBzZXRTcG90c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgcG9zaXRpb25zQXJyID0gW11cbiAgcGxheWVyRGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGlmIChwb3NpdGlvbnNBcnIuaW5jbHVkZXMoZWxlbWVudC5wb3NpdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICBwb3NpdGlvbnNBcnIucHVzaChlbGVtZW50LnBvc2l0aW9uKVxuICAgIH1cbiAgfSlcbiAgY29uc3QgcGxheWVyRGF0ZXMgPSBwbGF5ZXJEYXRhLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShlbGVtZW50LmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gIH0pXG4gIGNvbnN0IHBsYXllclNwb3RzID0gcGxheWVyRGF0YS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gZWxlbWVudC5zcG90XG4gIH0pXG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgdGV4dDogJ0NoYXJ0LmpzIExpbmUgQ2hhcnQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgY2hhcnREYXRhID0ge1xuICAgIGxhYmVsczogcGxheWVyRGF0ZXMsXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IDIwMjIsXG4gICAgICAgIGRhdGE6IHBsYXllclNwb3RzLFxuICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNSknLFxuICAgICAgfSxcbiAgICBdLFxuICB9XG5cbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zQXJyLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gPGxpIGtleT17YHBvc2l0aW9ucy1pbmRleC0ke2luZGV4fWB9PntlbGVtZW50fTwvbGk+XG4gIH0pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5QbGF5ZXIgUGFnZSBmb3I6IHtwbGF5ZXJEYXRhWzBdLnBsYXllcl9uYW1lfTwvaDE+XG4gICAgICA8aDI+UG9zaXRpb24ocykgUGxheWVkPC9oMj5cbiAgICAgIDx1bD57cG9zaXRpb25zfTwvdWw+XG4gICAgICA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtjaGFydERhdGF9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHBsYXllcklkID0gY29udGV4dC5wYXJhbXMucGxheWVySWRcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3BsYXllci8ke3BsYXllcklkfWApXG4gIGNvbnN0IHBsYXllckRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcGxheWVyRGF0YSB9IH1cbn1cbiJdLCJuYW1lcyI6WyJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkxpbmUiLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyIiwiUGxheWVyUGFnZSIsInBsYXllckRhdGEiLCJwb3NpdGlvbnNBcnIiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiaW5jbHVkZXMiLCJwb3NpdGlvbiIsInB1c2giLCJwbGF5ZXJEYXRlcyIsIm1hcCIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicGxheWVyU3BvdHMiLCJzcG90Iiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImNoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbnMiLCJsaSIsImRpdiIsImgxIiwicGxheWVyX25hbWUiLCJoMiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/player/[playerId].jsx\n");

/***/ })

});