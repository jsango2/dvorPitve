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

/***/ "./components/Navigation/styles.js":
/*!*****************************************!*\
  !*** ./components/Navigation/styles.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CloseIcon\": function() { return /* binding */ CloseIcon; },\n/* harmony export */   \"Hamburger\": function() { return /* binding */ Hamburger; },\n/* harmony export */   \"Line\": function() { return /* binding */ Line; },\n/* harmony export */   \"LineX1\": function() { return /* binding */ LineX1; },\n/* harmony export */   \"LineX2\": function() { return /* binding */ LineX2; },\n/* harmony export */   \"LinkWrap\": function() { return /* binding */ LinkWrap; },\n/* harmony export */   \"LogoWrap\": function() { return /* binding */ LogoWrap; },\n/* harmony export */   \"NavbarWrap\": function() { return /* binding */ NavbarWrap; },\n/* harmony export */   \"SingleLink\": function() { return /* binding */ SingleLink; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  z-index: 20;\\n  width: 100%;\\n\\n  height: 96px;\\n  display: flex;\\n  align-items: center;\\n  top: 0;\\n  right: 90px;\\n  margin-left: auto;\\n  @media screen and (max-width: 1050px) {\\n    width: 100vw;\\n    padding-right: 40px;\\n    height: 0;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: relative;\\n  width: 170px;\\n  min-width: 170px;\\n  height: 170px;\\n  z-index: 20;\\n  cursor: pointer;\\n  background-color: #303145;\\n  left: 300px;\\n  top: 30px;\\n  color: white;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  transition: all 2s ease-in-out;\\n  transform: \",\n        \";\\n  -webkit-box-shadow: 0px 0px 29px -2px #000000;\\n  box-shadow: 0px 0px 9px -2px #000000;\\n  @media screen and (max-width: 1051px) {\\n    top: 80px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-left: auto;\\n  position: relative;\\n  width: 490px;\\n  min-width: 490px;\\n  /* height: 40px; */\\n  display: flex;\\n  justify-content: space-between;\\n\\n  @media screen and (max-width: 1051px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  z-index: 4;\\n  right: 40px;\\n  height: 18px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  cursor: pointer;\\n  top: 37px;\\n  @media screen and (min-width: 1050px) {\\n    display: none;\\n  }\\n  @media screen and (max-width: 400px) {\\n    right: 25px;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  z-index: 4;\\n  top: 52px;\\n  right: 40px;\\n  height: 12px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  cursor: pointer;\\n  @media screen and (min-width: 1000px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: relative;\\n  height: 3px;\\n  width: 23px;\\n  background-color: #32bde3;\\n  transform: rotate(45deg);\\n  @media screen and (max-width: 1000px) {\\n    /* display: none; */\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: relative;\\n  height: 3px;\\n  width: 23px;\\n  background-color: #32bde3;\\n  transform: rotate(315deg) translate(6px, -7px);\\n  @media screen and (max-width: 1000px) {\\n    /* display: none; */\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  height: 3px;\\n  width: 23px;\\n  background-color: white;\\n  @media screen and (max-width: 1000px) {\\n    /* display: none; */\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        '\\n  position: relative;\\n  margin: 0 10px;\\n  /* text-transform: uppercase; */\\n  text-decoration: none;\\n  color: #aea8b2;\\n  margin: 0 0;\\n  cursor: pointer;\\n  a {\\n    /* text-transform: uppercase; */\\n    text-decoration: none;\\n    color: white;\\n    margin: 0 0;\\n    cursor: pointer;\\n    font-family: \"Civane-NorMed\";\\n  }\\n  a:hover {\\n    color: #a55c3d;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    /* order: 1;\\n    margin-bottom: 1rem; */\\n  }\\n'\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\nvar NavbarWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar LogoWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1(), function(props) {\n    return props.inView ? \"translate(0%,0%)\" : \"translate(0,-100%)\";\n});\nvar LinkWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\nvar LineX1 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5());\nvar LineX2 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject6());\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject7());\nvar SingleLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject8());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsSUFBTUMsVUFBVSxHQUFHRCw2REFBVSxtQkFnQm5DLENBQUM7QUFDSyxJQUFNRyxRQUFRLEdBQUdILDZEQUFVLHFCQWVuQixTQUFDSSxLQUFLO1dBQ2pCQSxLQUFLLENBQUNDLE1BQU0sR0FBSSxrQkFBZ0IsR0FBSyxvQkFBa0I7Q0FBQyxDQU0zRCxDQUFDO0FBRUssSUFBTUMsUUFBUSxHQUFHTiw2REFBVSxvQkFZakMsQ0FBQztBQUNLLElBQU1PLFNBQVMsR0FBR1AsNkRBQVUsb0JBZ0JsQyxDQUFDO0FBQ0ssSUFBTVEsU0FBUyxHQUFHUiw2REFBVSxvQkFhbEMsQ0FBQztBQUNLLElBQU1TLE1BQU0sR0FBR1QsNkRBQVUsb0JBUy9CLENBQUM7QUFDSyxJQUFNVSxNQUFNLEdBQUdWLDZEQUFVLG9CQVMvQixDQUFDO0FBQ0ssSUFBTVcsSUFBSSxHQUFHWCw2REFBVSxvQkFPN0IsQ0FBQztBQUNLLElBQU1ZLFVBQVUsR0FBR1osNkRBQVUsb0JBd0JuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9zdHlsZXMuanM/Njg2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgTmF2YmFyV3JhcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGhlaWdodDogOTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICByaWdodDogOTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIGhlaWdodDogMDtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBMb2dvV3JhcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE3MHB4O1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICB6LWluZGV4OiAyMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMTQ1O1xuICBsZWZ0OiAzMDBweDtcbiAgdG9wOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaW5WaWV3ID8gYHRyYW5zbGF0ZSgwJSwwJSlgIDogYHRyYW5zbGF0ZSgwLC0xMDAlKWB9O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjlweCAtMnB4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0ycHggIzAwMDAwMDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MXB4KSB7XG4gICAgdG9wOiA4MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua1dyYXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDkwcHg7XG4gIG1pbi13aWR0aDogNDkwcHg7XG4gIC8qIGhlaWdodDogNDBweDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTFweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgSGFtYnVyZ2VyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0O1xuICByaWdodDogNDBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAzN3B4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgcmlnaHQ6IDI1cHg7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQ2xvc2VJY29uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0O1xuICB0b3A6IDUycHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IExpbmVYMSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJiZGUzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTGluZVgyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDIzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMmJkZTM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZykgdHJhbnNsYXRlKDZweCwgLTdweCk7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMjNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIH1cbmA7XG5leHBvcnQgY29uc3QgU2luZ2xlTGluayA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNhZWE4YjI7XG4gIG1hcmdpbjogMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGEge1xuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2l2YW5lLU5vck1lZFwiO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjYTU1YzNkO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAvKiBvcmRlcjogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIk5hdmJhcldyYXAiLCJkaXYiLCJMb2dvV3JhcCIsInByb3BzIiwiaW5WaWV3IiwiTGlua1dyYXAiLCJIYW1idXJnZXIiLCJDbG9zZUljb24iLCJMaW5lWDEiLCJMaW5lWDIiLCJMaW5lIiwiU2luZ2xlTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation/styles.js\n");

/***/ })

});