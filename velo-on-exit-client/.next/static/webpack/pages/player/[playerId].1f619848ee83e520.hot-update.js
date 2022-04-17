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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ PlayerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nvar __N_SSP = true;\nfunction PlayerPage(param) {\n    var playerData = param.playerData;\n    var _this = this;\n    // const [dates, setDates] = useState([])\n    // const [spots, setSpots] = useState([])\n    var positionsArr = [];\n    playerData.lineup.forEach(function(element, index) {\n        if (positionsArr.includes(element.position) === false) {\n            positionsArr.push(element.position);\n        }\n    });\n    var playerDates = playerData.lineup.map(function(element) {\n        return new Date(element.date).toLocaleDateString();\n    });\n    var playerSpots = playerData.lineup.map(function(element) {\n        return element.spot;\n    });\n    console.log(playerDates);\n    var options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Chart.js Line Chart\"\n            }\n        },\n        // reverse y1 axis ticks so y-axis is 1 at the top of the graph\n        scales: {\n            y1: {\n                reverse: true\n            }\n        }\n    };\n    var chartData = {\n        labels: playerDates,\n        datasets: [\n            {\n                label: 2022,\n                data: playerSpots,\n                borderColor: \"rgb(255, 99, 132)\",\n                backgroundColor: \"rgba(255, 99, 132, 0.5)\",\n                yAxisID: \"y1\"\n            }, \n        ]\n    };\n    var positions = positionsArr.map(function(element, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: element\n        }, \"positions-index-\".concat(index), false, {\n            fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n            lineNumber: 74,\n            columnNumber: 12\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Player Page for: \",\n                    playerData.lineup[0].player_name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Position(s) Played\"\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: positions\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                options: options,\n                data: chartData\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/player/[playerId].jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n};\n_c = PlayerPage;\nvar _c;\n$RefreshReg$(_c, \"PlayerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9wbGF5ZXIvW3BsYXllcklkXS5qc3g/MDQ1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgUG9pbnRFbGVtZW50LFxuICBMaW5lRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSAnY2hhcnQuanMnXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmRcbilcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyUGFnZSh7IHBsYXllckRhdGEgfSkge1xuICAvLyBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKVxuICAvLyBjb25zdCBbc3BvdHMsIHNldFNwb3RzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBwb3NpdGlvbnNBcnIgPSBbXVxuICBwbGF5ZXJEYXRhLmxpbmV1cC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGlmIChwb3NpdGlvbnNBcnIuaW5jbHVkZXMoZWxlbWVudC5wb3NpdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICBwb3NpdGlvbnNBcnIucHVzaChlbGVtZW50LnBvc2l0aW9uKVxuICAgIH1cbiAgfSlcbiAgY29uc3QgcGxheWVyRGF0ZXMgPSBwbGF5ZXJEYXRhLmxpbmV1cC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoZWxlbWVudC5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuICB9KVxuICBjb25zdCBwbGF5ZXJTcG90cyA9IHBsYXllckRhdGEubGluZXVwLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LnNwb3RcbiAgfSlcbiAgY29uc29sZS5sb2cocGxheWVyRGF0ZXMpXG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgdGV4dDogJ0NoYXJ0LmpzIExpbmUgQ2hhcnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIHJldmVyc2UgeTEgYXhpcyB0aWNrcyBzbyB5LWF4aXMgaXMgMSBhdCB0aGUgdG9wIG9mIHRoZSBncmFwaFxuICAgIHNjYWxlczoge1xuICAgICAgeTE6IHtcbiAgICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGNoYXJ0RGF0YSA9IHtcbiAgICBsYWJlbHM6IHBsYXllckRhdGVzLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAyMDIyLFxuICAgICAgICBkYXRhOiBwbGF5ZXJTcG90cyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjUpJyxcbiAgICAgICAgeUF4aXNJRDogJ3kxJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfVxuXG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Fyci5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIDxsaSBrZXk9e2Bwb3NpdGlvbnMtaW5kZXgtJHtpbmRleH1gfT57ZWxlbWVudH08L2xpPlxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UGxheWVyIFBhZ2UgZm9yOiB7cGxheWVyRGF0YS5saW5ldXBbMF0ucGxheWVyX25hbWV9PC9oMT5cbiAgICAgIDxoMj5Qb3NpdGlvbihzKSBQbGF5ZWQ8L2gyPlxuICAgICAgPHVsPntwb3NpdGlvbnN9PC91bD5cbiAgICAgIDxMaW5lIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2NoYXJ0RGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcGxheWVySWQgPSBjb250ZXh0LnBhcmFtcy5wbGF5ZXJJZFxuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcGxheWVyLyR7cGxheWVySWR9YClcbiAgY29uc3QgcGxheWVyRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc29sZS5sb2cocGxheWVyRGF0YSlcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczogeyBwbGF5ZXJEYXRhIH0gfVxufVxuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiTGluZSIsInVzZVN0YXRlIiwicmVnaXN0ZXIiLCJQbGF5ZXJQYWdlIiwicGxheWVyRGF0YSIsInBvc2l0aW9uc0FyciIsImxpbmV1cCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJpbmNsdWRlcyIsInBvc2l0aW9uIiwicHVzaCIsInBsYXllckRhdGVzIiwibWFwIiwiRGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwbGF5ZXJTcG90cyIsInNwb3QiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInNjYWxlcyIsInkxIiwicmV2ZXJzZSIsImNoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ5QXhpc0lEIiwicG9zaXRpb25zIiwibGkiLCJkaXYiLCJoMSIsInBsYXllcl9uYW1lIiwiaDIiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/player/[playerId].jsx\n");

/***/ })

});