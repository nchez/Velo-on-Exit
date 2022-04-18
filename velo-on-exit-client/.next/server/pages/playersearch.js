"use strict";
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
exports.id = "pages/playersearch";
exports.ids = ["pages/playersearch"];
exports.modules = {

/***/ "./pages/playersearch.jsx":
/*!********************************!*\
  !*** ./pages/playersearch.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayerSearch),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction PlayerSearch({ players  }) {\n    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleChange = (e)=>{\n        setSearch(e.target.value);\n    };\n    //   const formatPlayers = players.map((element) => {\n    //     element.replace('-', ' ')\n    //   })\n    const formatPlayers = players.players.map((element)=>{\n        return [\n            element.name.replace(\"-\", \" \"),\n            element.mlb_id\n        ];\n    });\n    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(formatPlayers);\n    //   let results = (\n    //     <ul>\n    //       {formatPlayers.map((element) => {\n    //         return <li>{element}</li>\n    //       })}\n    //     </ul>\n    //   )\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setResults(formatPlayers.filter((element)=>{\n            return element[0].includes(search.toLowerCase());\n        }));\n    }, [\n        search\n    ]);\n    const searchResults = results.map((element, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                underline: \"hover\",\n                href: `/player/${element[1]}`,\n                children: element[0]\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/playersearch.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, `index-${index}`, false, {\n            fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/playersearch.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Search For Players\"\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/playersearch.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"filled-basic\",\n                label: \"Search For Player\",\n                variant: \"filled\",\n                value: search,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/playersearch.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: search != \"\" ? searchResults : null\n            }, void 0, false, {\n                fileName: \"/Users/nathanchesmar/Documents/General_Assembly/unit4/Velo-on-Exit/velo-on-exit-client/pages/playersearch.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nasync function getServerSideProps(context) {\n    // Fetch data from external API\n    const res = await fetch(`http://localhost:3001/playersearch`);\n    const players = await res.json();\n    // Pass data to the page via props\n    return {\n        props: {\n            players\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXJzZWFyY2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQztBQUNKO0FBQ047QUFFdEIsU0FBU0ksWUFBWSxDQUFDLEVBQUVDLE9BQU8sR0FBRSxFQUFFO0lBQ2hELE1BQU0sRUFMUixHQUtTQyxNQUFNLEdBTGYsR0FLaUJDLFNBQVMsTUFBSU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTU8sWUFBWSxHQUFHLENBQUNDLENBQUMsR0FBSztRQUMxQkYsU0FBUyxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0tBQzFCO0lBQ0QscURBQXFEO0lBQ3JELGdDQUFnQztJQUNoQyxPQUFPO0lBQ1AsTUFBTUMsYUFBYSxHQUFHUCxPQUFPLENBQUNBLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDLENBQUNDLE9BQU8sR0FBSztRQUNyRCxPQUFPO1lBQUNBLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUFFRixPQUFPLENBQUNHLE1BQU07U0FBQztLQUN4RCxDQUFDO0lBQ0YsTUFBTSxFQWZSLEdBZVNDLE9BQU8sR0FmaEIsR0Fla0JDLFVBQVUsTUFBSWxCLCtDQUFRLENBQUNXLGFBQWEsQ0FBQztJQUNyRCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFlBQVk7SUFDWixNQUFNO0lBQ05WLGdEQUFTLENBQUMsSUFBTTtRQUNkaUIsVUFBVSxDQUNSUCxhQUFhLENBQUNRLE1BQU0sQ0FBQyxDQUFDTixPQUFPLEdBQUs7WUFDaEMsT0FBT0EsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTyxRQUFRLENBQUNmLE1BQU0sQ0FBQ2dCLFdBQVcsRUFBRSxDQUFDO1NBQ2pELENBQUMsQ0FDSDtLQUNGLEVBQUU7UUFBQ2hCLE1BQU07S0FBQyxDQUFDO0lBQ1osTUFBTWlCLGFBQWEsR0FBR0wsT0FBTyxDQUFDTCxHQUFHLENBQUMsQ0FBQ0MsT0FBTyxFQUFFVSxLQUFLLEdBQUs7UUFDcEQscUJBQ0UsOERBQUNDLElBQUU7c0JBQ0QsNEVBQUN0QiwyREFBSTtnQkFBQ3VCLFNBQVMsRUFBQyxPQUFPO2dCQUFDQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUViLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzBCQUNsREEsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7b0JBQ047V0FIQSxDQUFDLE1BQU0sRUFBRVUsS0FBSyxDQUFDLENBQUM7Ozs7Z0JBSXBCLENBQ047S0FDRixDQUFDO0lBRUYscUJBQ0U7OzBCQUNFLDhEQUFDSSxJQUFFOzBCQUFDLG9CQUFrQjs7Ozs7b0JBQUs7MEJBQzNCLDhEQUFDNUIsZ0VBQVM7Z0JBQ1I2QixFQUFFLEVBQUMsY0FBYztnQkFDakJDLEtBQUssRUFBQyxtQkFBbUI7Z0JBQ3pCQyxPQUFPLEVBQUMsUUFBUTtnQkFDaEJwQixLQUFLLEVBQUVMLE1BQU07Z0JBQ2IwQixRQUFRLEVBQUV4QixZQUFZOzs7OztvQkFDdEI7MEJBQ0YsOERBQUN5QixJQUFFOzBCQUFFM0IsTUFBTSxJQUFJLEVBQUUsR0FBR2lCLGFBQWEsR0FBRyxJQUFJOzs7OztvQkFBTTs7b0JBQzdDLENBQ0o7Q0FDRjtBQUVNLGVBQWVXLGtCQUFrQixDQUFDQyxPQUFPLEVBQUU7SUFDaEQsK0JBQStCO0lBQy9CLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzdELE1BQU1oQyxPQUFPLEdBQUcsTUFBTStCLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQ2hDLGtDQUFrQztJQUNsQyxPQUFPO1FBQUVDLEtBQUssRUFBRTtZQUFFbEMsT0FBTztTQUFFO0tBQUU7Q0FDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWxvLW9uLWV4aXQtY2xpZW50Ly4vcGFnZXMvcGxheWVyc2VhcmNoLmpzeD83NTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllclNlYXJjaCh7IHBsYXllcnMgfSkge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIC8vICAgY29uc3QgZm9ybWF0UGxheWVycyA9IHBsYXllcnMubWFwKChlbGVtZW50KSA9PiB7XG4gIC8vICAgICBlbGVtZW50LnJlcGxhY2UoJy0nLCAnICcpXG4gIC8vICAgfSlcbiAgY29uc3QgZm9ybWF0UGxheWVycyA9IHBsYXllcnMucGxheWVycy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gW2VsZW1lbnQubmFtZS5yZXBsYWNlKCctJywgJyAnKSwgZWxlbWVudC5tbGJfaWRdXG4gIH0pXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKGZvcm1hdFBsYXllcnMpXG4gIC8vICAgbGV0IHJlc3VsdHMgPSAoXG4gIC8vICAgICA8dWw+XG4gIC8vICAgICAgIHtmb3JtYXRQbGF5ZXJzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAvLyAgICAgICAgIHJldHVybiA8bGk+e2VsZW1lbnR9PC9saT5cbiAgLy8gICAgICAgfSl9XG4gIC8vICAgICA8L3VsPlxuICAvLyAgIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRSZXN1bHRzKFxuICAgICAgZm9ybWF0UGxheWVycy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbMF0uaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgICB9KVxuICAgIClcbiAgfSwgW3NlYXJjaF0pXG4gIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSByZXN1bHRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17YGluZGV4LSR7aW5kZXh9YH0+XG4gICAgICAgIDxMaW5rIHVuZGVybGluZT1cImhvdmVyXCIgaHJlZj17YC9wbGF5ZXIvJHtlbGVtZW50WzFdfWB9PlxuICAgICAgICAgIHtlbGVtZW50WzBdfVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+U2VhcmNoIEZvciBQbGF5ZXJzPC9oMT5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgaWQ9XCJmaWxsZWQtYmFzaWNcIlxuICAgICAgICBsYWJlbD1cIlNlYXJjaCBGb3IgUGxheWVyXCJcbiAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPHVsPntzZWFyY2ggIT0gJycgPyBzZWFyY2hSZXN1bHRzIDogbnVsbH08L3VsPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcGxheWVyc2VhcmNoYClcbiAgY29uc3QgcGxheWVycyA9IGF3YWl0IHJlcy5qc29uKClcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczogeyBwbGF5ZXJzIH0gfVxufVxuIl0sIm5hbWVzIjpbIlRleHRGaWVsZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlBsYXllclNlYXJjaCIsInBsYXllcnMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtYXRQbGF5ZXJzIiwibWFwIiwiZWxlbWVudCIsIm5hbWUiLCJyZXBsYWNlIiwibWxiX2lkIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIiwic2VhcmNoUmVzdWx0cyIsImluZGV4IiwibGkiLCJ1bmRlcmxpbmUiLCJocmVmIiwiaDEiLCJpZCIsImxhYmVsIiwidmFyaWFudCIsIm9uQ2hhbmdlIiwidWwiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/playersearch.jsx\n");

/***/ }),

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/playersearch.jsx"));
module.exports = __webpack_exports__;

})();