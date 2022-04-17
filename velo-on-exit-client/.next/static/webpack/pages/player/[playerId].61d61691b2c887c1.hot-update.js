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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ PlayerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nvar __N_SSP = true;\nfunction PlayerPage(param) {\n    var playerData = param.playerData;\n    var _this = this;\n    // const [dates, setDates] = useState([])\n    // const [spots, setSpots] = useState([])\n    console.log(playerData);\n    var positionsArr = [];\n    // playerData.forEach((element, index) => {\n    //   if (positionsArr.includes(element.position) === false) {\n    //     positionsArr.push(element.position)\n    //   }\n    // })\n    var playerDates = playerData.map(function(element) {\n        return element.date;\n    });\n    var playerSpots = playerData.map(function(element) {\n        return element.spot;\n    });\n    var options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Chart.js Line Chart\"\n            }\n        }\n    };\n    var chartData = {\n        labels: playerDates,\n        datasets: [\n            {\n                label: 2022,\n                data: playerSpots,\n                borderColor: \"rgb(255, 99, 132)\",\n                backgroundColor: \"rgba(255, 99, 132, 0.5)\"\n            }, \n        ]\n    };\n    var positions = positionsArr.map(function(element, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: element\n        }, \"positions-index-\".concat(index), false, {\n            fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Player Page for: \",\n                    playerData[0].player_name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Position(s) Played\"\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: positions\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                options: options,\n                data: chartData\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n};\n_c = PlayerPage;\nvar _c;\n$RefreshReg$(_c, \"PlayerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXIvW3BsYXllcklkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVNpQjtBQUNxQjtBQUNOO0FBRWhDQyxvREFBZ0IsQ0FDZEMsbURBQWEsRUFDYkMsaURBQVcsRUFDWEMsa0RBQVksRUFDWkMsaURBQVcsRUFDWEMsMkNBQUssRUFDTEMsNkNBQU8sRUFDUEMsNENBQU0sQ0FDUDs7QUFFYyxTQUFTSSxVQUFVLENBQUMsS0FBYyxFQUFFO1FBQWhCLFVBQVksR0FBWixLQUFjLENBQVpDLFVBQVU7O0lBQzdDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUM7SUFDdkIsSUFBTUcsWUFBWSxHQUFHLEVBQUU7SUFDdkIsMkNBQTJDO0lBQzNDLDZEQUE2RDtJQUM3RCwwQ0FBMEM7SUFDMUMsTUFBTTtJQUNOLEtBQUs7SUFDTCxJQUFNQyxXQUFXLEdBQUdKLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBSztRQUM5QyxPQUFPQSxPQUFPLENBQUNDLElBQUk7S0FDcEIsQ0FBQztJQUNGLElBQU1DLFdBQVcsR0FBR1IsVUFBVSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1FBQzlDLE9BQU9BLE9BQU8sQ0FBQ0csSUFBSTtLQUNwQixDQUFDO0lBRUYsSUFBTUMsT0FBTyxHQUFHO1FBQ2RDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxPQUFPLEVBQUU7WUFDUEMsTUFBTSxFQUFFO2dCQUNOQyxRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEQyxLQUFLLEVBQUU7Z0JBQ0xDLE9BQU8sRUFBRSxJQUFJO2dCQUNiQyxJQUFJLEVBQUUscUJBQXFCO2FBQzVCO1NBQ0Y7S0FDRjtJQUVELElBQU1DLFNBQVMsR0FBRztRQUNoQkMsTUFBTSxFQUFFZixXQUFXO1FBQ25CZ0IsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0VDLEtBQUssRUFBRSxJQUFJO2dCQUNYQyxJQUFJLEVBQUVkLFdBQVc7Z0JBQ2pCZSxXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQ0MsZUFBZSxFQUFFLHlCQUF5QjthQUMzQztTQUNGO0tBQ0Y7SUFFRCxJQUFNQyxTQUFTLEdBQUd0QixZQUFZLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVvQixLQUFLLEVBQUs7UUFDckQscUJBQU8sOERBQUNDLElBQUU7c0JBQW1DckIsT0FBTztXQUFwQyxrQkFBaUIsQ0FBUSxPQUFOb0IsS0FBSyxDQUFFOzs7O2lCQUFnQjtLQUMzRCxDQUFDO0lBQ0YscUJBQ0UsOERBQUNFLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOztvQkFBQyxtQkFBaUI7b0JBQUM3QixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM4QixXQUFXOzs7Ozs7b0JBQU07MEJBQ3JELDhEQUFDQyxJQUFFOzBCQUFDLG9CQUFrQjs7Ozs7b0JBQUs7MEJBQzNCLDhEQUFDQyxJQUFFOzBCQUFFUCxTQUFTOzs7OztvQkFBTTswQkFDcEIsOERBQUM3QixpREFBSTtnQkFBQ2MsT0FBTyxFQUFFQSxPQUFPO2dCQUFFWSxJQUFJLEVBQUVKLFNBQVM7Ozs7O29CQUFJOzs7Ozs7WUFDdkMsQ0FDUDtDQUNGO0FBckR1Qm5CLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheWVyL1twbGF5ZXJJZF0uanN4PzA0NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmQsXG59IGZyb20gJ2NoYXJ0LmpzJ1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIExpbmVFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllclBhZ2UoeyBwbGF5ZXJEYXRhIH0pIHtcbiAgLy8gY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSlcbiAgLy8gY29uc3QgW3Nwb3RzLCBzZXRTcG90c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc29sZS5sb2cocGxheWVyRGF0YSlcbiAgY29uc3QgcG9zaXRpb25zQXJyID0gW11cbiAgLy8gcGxheWVyRGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAvLyAgIGlmIChwb3NpdGlvbnNBcnIuaW5jbHVkZXMoZWxlbWVudC5wb3NpdGlvbikgPT09IGZhbHNlKSB7XG4gIC8vICAgICBwb3NpdGlvbnNBcnIucHVzaChlbGVtZW50LnBvc2l0aW9uKVxuICAvLyAgIH1cbiAgLy8gfSlcbiAgY29uc3QgcGxheWVyRGF0ZXMgPSBwbGF5ZXJEYXRhLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGVcbiAgfSlcbiAgY29uc3QgcGxheWVyU3BvdHMgPSBwbGF5ZXJEYXRhLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LnNwb3RcbiAgfSlcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgcGx1Z2luczoge1xuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB0ZXh0OiAnQ2hhcnQuanMgTGluZSBDaGFydCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBjaGFydERhdGEgPSB7XG4gICAgbGFiZWxzOiBwbGF5ZXJEYXRlcyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogMjAyMixcbiAgICAgICAgZGF0YTogcGxheWVyU3BvdHMsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMC41KScsXG4gICAgICB9LFxuICAgIF0sXG4gIH1cblxuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNBcnIubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHJldHVybiA8bGkga2V5PXtgcG9zaXRpb25zLWluZGV4LSR7aW5kZXh9YH0+e2VsZW1lbnR9PC9saT5cbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlBsYXllciBQYWdlIGZvcjoge3BsYXllckRhdGFbMF0ucGxheWVyX25hbWV9PC9oMT5cbiAgICAgIDxoMj5Qb3NpdGlvbihzKSBQbGF5ZWQ8L2gyPlxuICAgICAgPHVsPntwb3NpdGlvbnN9PC91bD5cbiAgICAgIDxMaW5lIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2NoYXJ0RGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcGxheWVySWQgPSBjb250ZXh0LnBhcmFtcy5wbGF5ZXJJZFxuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcGxheWVyLyR7cGxheWVySWR9YClcbiAgY29uc3QgcGxheWVyRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc29sZS5sb2cocGxheWVyRGF0YSlcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczogeyBwbGF5ZXJEYXRhIH0gfVxufVxuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiTGluZSIsInVzZVN0YXRlIiwicmVnaXN0ZXIiLCJQbGF5ZXJQYWdlIiwicGxheWVyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbnNBcnIiLCJwbGF5ZXJEYXRlcyIsIm1hcCIsImVsZW1lbnQiLCJkYXRlIiwicGxheWVyU3BvdHMiLCJzcG90Iiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiY2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9ucyIsImluZGV4IiwibGkiLCJkaXYiLCJoMSIsInBsYXllcl9uYW1lIiwiaDIiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/player/[playerId].jsx\n");

/***/ })

});