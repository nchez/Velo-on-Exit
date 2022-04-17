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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ PlayerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nvar __N_SSP = true;\nfunction PlayerPage(param) {\n    var playerData = param.playerData;\n    var _this = this;\n    // const [dates, setDates] = useState([])\n    // const [spots, setSpots] = useState([])\n    var positionsArr = [];\n    playerData.lineup.forEach(function(element, index) {\n        if (positionsArr.includes(element.position) === false) {\n            positionsArr.push(element.position);\n        }\n    });\n    var playerDates = playerData.lineup.map(function(element) {\n        return new Date(element.date).toLocaleDateString();\n    });\n    var playerSpots = playerData.lineup.map(function(element) {\n        return element.spot;\n    });\n    var exitVelos = playerData.statcast.map(function(element) {\n        return element.exit_velo;\n    });\n    var exitVeloDates = playerData.statcast.map(function(element) {\n        return element.game_date;\n    });\n    console.log(playerData.statcast);\n    var options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Chart.js Line Chart\"\n            }\n        }\n    };\n    var chartData = {\n        labels: playerDates,\n        datasets: [\n            {\n                label: 2022,\n                data: playerSpots,\n                borderColor: \"rgb(255, 99, 132)\",\n                backgroundColor: \"rgba(255, 99, 132, 0.5)\",\n                yAxisID: \"y1\"\n            }, \n        ]\n    };\n    var chartDataVelo = {\n        labels: exitVeloDates,\n        datasets: [\n            {\n                label: 2022,\n                data: exitVelos,\n                borderColor: \"rgb(255, 99, 132)\",\n                backgroundColor: \"rgba(255, 99, 132, 0.5)\",\n                yAxisID: \"y1\"\n            }, \n        ]\n    };\n    var positions = positionsArr.map(function(element, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: element\n        }, \"positions-index-\".concat(index), false, {\n            fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n            lineNumber: 92,\n            columnNumber: 12\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Player Page for: \",\n                    playerData.lineup[0].player_name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Position(s) Played\"\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: positions\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                options: options,\n                data: chartData\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                options: options,\n                data: chartDataVelo\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n};\n_c = PlayerPage;\nvar _c;\n$RefreshReg$(_c, \"PlayerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXIvW3BsYXllcklkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVNpQjtBQUNxQjtBQUNOO0FBRWhDQyxvREFBZ0IsQ0FDZEMsbURBQWEsRUFDYkMsaURBQVcsRUFDWEMsa0RBQVksRUFDWkMsaURBQVcsRUFDWEMsMkNBQUssRUFDTEMsNkNBQU8sRUFDUEMsNENBQU0sQ0FDUDs7QUFFYyxTQUFTSSxVQUFVLENBQUMsS0FBYyxFQUFFO1FBQWhCLFVBQVksR0FBWixLQUFjLENBQVpDLFVBQVU7O0lBQzdDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsSUFBTUMsWUFBWSxHQUFHLEVBQUU7SUFDdkJELFVBQVUsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUs7UUFDNUMsSUFBSUosWUFBWSxDQUFDSyxRQUFRLENBQUNGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3JETixZQUFZLENBQUNPLElBQUksQ0FBQ0osT0FBTyxDQUFDRyxRQUFRLENBQUM7U0FDcEM7S0FDRixDQUFDO0lBQ0YsSUFBTUUsV0FBVyxHQUFHVCxVQUFVLENBQUNFLE1BQU0sQ0FBQ1EsR0FBRyxDQUFDLFNBQUNOLE9BQU8sRUFBSztRQUNyRCxPQUFPLElBQUlPLElBQUksQ0FBQ1AsT0FBTyxDQUFDUSxJQUFJLENBQUMsQ0FBQ0Msa0JBQWtCLEVBQUU7S0FDbkQsQ0FBQztJQUNGLElBQU1DLFdBQVcsR0FBR2QsVUFBVSxDQUFDRSxNQUFNLENBQUNRLEdBQUcsQ0FBQyxTQUFDTixPQUFPLEVBQUs7UUFDckQsT0FBT0EsT0FBTyxDQUFDVyxJQUFJO0tBQ3BCLENBQUM7SUFDRixJQUFNQyxTQUFTLEdBQUdoQixVQUFVLENBQUNpQixRQUFRLENBQUNQLEdBQUcsQ0FBQyxTQUFDTixPQUFPLEVBQUs7UUFDckQsT0FBT0EsT0FBTyxDQUFDYyxTQUFTO0tBQ3pCLENBQUM7SUFDRixJQUFNQyxhQUFhLEdBQUduQixVQUFVLENBQUNpQixRQUFRLENBQUNQLEdBQUcsQ0FBQyxTQUFDTixPQUFPLEVBQUs7UUFDekQsT0FBT0EsT0FBTyxDQUFDZ0IsU0FBUztLQUN6QixDQUFDO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdEIsVUFBVSxDQUFDaUIsUUFBUSxDQUFDO0lBRWhDLElBQU1NLE9BQU8sR0FBRztRQUNkQyxVQUFVLEVBQUUsSUFBSTtRQUNoQkMsT0FBTyxFQUFFO1lBQ1BDLE1BQU0sRUFBRTtnQkFDTm5CLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0RvQixLQUFLLEVBQUU7Z0JBQ0xDLE9BQU8sRUFBRSxJQUFJO2dCQUNiQyxJQUFJLEVBQUUscUJBQXFCO2FBQzVCO1NBQ0Y7S0FPRjtJQUVELElBQU1DLFNBQVMsR0FBRztRQUNoQkMsTUFBTSxFQUFFdEIsV0FBVztRQUNuQnVCLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxLQUFLLEVBQUUsSUFBSTtnQkFDWEMsSUFBSSxFQUFFcEIsV0FBVztnQkFDakJxQixXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQ0MsZUFBZSxFQUFFLHlCQUF5QjtnQkFDMUNDLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRjtLQUNGO0lBQ0QsSUFBTUMsYUFBYSxHQUFHO1FBQ3BCUCxNQUFNLEVBQUVaLGFBQWE7UUFDckJhLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxLQUFLLEVBQUUsSUFBSTtnQkFDWEMsSUFBSSxFQUFFbEIsU0FBUztnQkFDZm1CLFdBQVcsRUFBRSxtQkFBbUI7Z0JBQ2hDQyxlQUFlLEVBQUUseUJBQXlCO2dCQUMxQ0MsT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNGO0tBQ0Y7SUFFRCxJQUFNRSxTQUFTLEdBQUd0QyxZQUFZLENBQUNTLEdBQUcsQ0FBQyxTQUFDTixPQUFPLEVBQUVDLEtBQUssRUFBSztRQUNyRCxxQkFBTyw4REFBQ21DLElBQUU7c0JBQW1DcEMsT0FBTztXQUFwQyxrQkFBaUIsQ0FBUSxPQUFOQyxLQUFLLENBQUU7Ozs7aUJBQWdCO0tBQzNELENBQUM7SUFDRixxQkFDRSw4REFBQ29DLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOztvQkFBQyxtQkFBaUI7b0JBQUMxQyxVQUFVLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3lDLFdBQVc7Ozs7OztvQkFBTTswQkFDNUQsOERBQUNDLElBQUU7MEJBQUMsb0JBQWtCOzs7OztvQkFBSzswQkFDM0IsOERBQUNDLElBQUU7MEJBQUVOLFNBQVM7Ozs7O29CQUFNOzBCQUNwQiw4REFBQzNDLGlEQUFJO2dCQUFDMkIsT0FBTyxFQUFFQSxPQUFPO2dCQUFFVyxJQUFJLEVBQUVKLFNBQVM7Ozs7O29CQUFJOzBCQUMzQyw4REFBQ2xDLGlEQUFJO2dCQUFDMkIsT0FBTyxFQUFFQSxPQUFPO2dCQUFFVyxJQUFJLEVBQUVJLGFBQWE7Ozs7O29CQUFJOzs7Ozs7WUFDM0MsQ0FDUDtDQUNGO0FBL0V1QnZDLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheWVyL1twbGF5ZXJJZF0uanN4PzA0NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmQsXG59IGZyb20gJ2NoYXJ0LmpzJ1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIExpbmVFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllclBhZ2UoeyBwbGF5ZXJEYXRhIH0pIHtcbiAgLy8gY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSlcbiAgLy8gY29uc3QgW3Nwb3RzLCBzZXRTcG90c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgcG9zaXRpb25zQXJyID0gW11cbiAgcGxheWVyRGF0YS5saW5ldXAuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAocG9zaXRpb25zQXJyLmluY2x1ZGVzKGVsZW1lbnQucG9zaXRpb24pID09PSBmYWxzZSkge1xuICAgICAgcG9zaXRpb25zQXJyLnB1c2goZWxlbWVudC5wb3NpdGlvbilcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHBsYXllckRhdGVzID0gcGxheWVyRGF0YS5saW5ldXAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGVsZW1lbnQuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgfSlcbiAgY29uc3QgcGxheWVyU3BvdHMgPSBwbGF5ZXJEYXRhLmxpbmV1cC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gZWxlbWVudC5zcG90XG4gIH0pXG4gIGNvbnN0IGV4aXRWZWxvcyA9IHBsYXllckRhdGEuc3RhdGNhc3QubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZXhpdF92ZWxvXG4gIH0pXG4gIGNvbnN0IGV4aXRWZWxvRGF0ZXMgPSBwbGF5ZXJEYXRhLnN0YXRjYXN0Lm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LmdhbWVfZGF0ZVxuICB9KVxuICBjb25zb2xlLmxvZyhwbGF5ZXJEYXRhLnN0YXRjYXN0KVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIHRleHQ6ICdDaGFydC5qcyBMaW5lIENoYXJ0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyByZXZlcnNlIHkxIGF4aXMgdGlja3Mgc28geS1heGlzIGlzIDEgYXQgdGhlIHRvcCBvZiB0aGUgZ3JhcGhcbiAgICAvLyBzY2FsZXM6IHtcbiAgICAvLyAgIHkxOiB7XG4gICAgLy8gICAgIHJldmVyc2U6IHRydWUsXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH1cblxuICBjb25zdCBjaGFydERhdGEgPSB7XG4gICAgbGFiZWxzOiBwbGF5ZXJEYXRlcyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogMjAyMixcbiAgICAgICAgZGF0YTogcGxheWVyU3BvdHMsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMC41KScsXG4gICAgICAgIHlBeGlzSUQ6ICd5MScsXG4gICAgICB9LFxuICAgIF0sXG4gIH1cbiAgY29uc3QgY2hhcnREYXRhVmVsbyA9IHtcbiAgICBsYWJlbHM6IGV4aXRWZWxvRGF0ZXMsXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IDIwMjIsXG4gICAgICAgIGRhdGE6IGV4aXRWZWxvcyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjUpJyxcbiAgICAgICAgeUF4aXNJRDogJ3kxJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfVxuXG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Fyci5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIDxsaSBrZXk9e2Bwb3NpdGlvbnMtaW5kZXgtJHtpbmRleH1gfT57ZWxlbWVudH08L2xpPlxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UGxheWVyIFBhZ2UgZm9yOiB7cGxheWVyRGF0YS5saW5ldXBbMF0ucGxheWVyX25hbWV9PC9oMT5cbiAgICAgIDxoMj5Qb3NpdGlvbihzKSBQbGF5ZWQ8L2gyPlxuICAgICAgPHVsPntwb3NpdGlvbnN9PC91bD5cbiAgICAgIDxMaW5lIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2NoYXJ0RGF0YX0gLz5cbiAgICAgIDxMaW5lIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2NoYXJ0RGF0YVZlbG99IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHBsYXllcklkID0gY29udGV4dC5wYXJhbXMucGxheWVySWRcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3BsYXllci8ke3BsYXllcklkfWApXG4gIGNvbnN0IHBsYXllckRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcGxheWVyRGF0YSB9IH1cbn1cbiJdLCJuYW1lcyI6WyJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkxpbmUiLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyIiwiUGxheWVyUGFnZSIsInBsYXllckRhdGEiLCJwb3NpdGlvbnNBcnIiLCJsaW5ldXAiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiaW5jbHVkZXMiLCJwb3NpdGlvbiIsInB1c2giLCJwbGF5ZXJEYXRlcyIsIm1hcCIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicGxheWVyU3BvdHMiLCJzcG90IiwiZXhpdFZlbG9zIiwic3RhdGNhc3QiLCJleGl0X3ZlbG8iLCJleGl0VmVsb0RhdGVzIiwiZ2FtZV9kYXRlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJjaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwieUF4aXNJRCIsImNoYXJ0RGF0YVZlbG8iLCJwb3NpdGlvbnMiLCJsaSIsImRpdiIsImgxIiwicGxheWVyX25hbWUiLCJoMiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/player/[playerId].jsx\n");

/***/ })

});