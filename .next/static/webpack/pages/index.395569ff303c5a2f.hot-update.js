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

/***/ "./components/PhotoSlider/photoSlider.js":
/*!***********************************************!*\
  !*** ./components/PhotoSlider/photoSlider.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.js */ \"./components/PhotoSlider/style.js\");\n/* harmony import */ var react_scroll_percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-percentage */ \"./node_modules/react-scroll-percentage/react-scroll-percentage.esm.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _useWindowSize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useWindowSize.js */ \"./components/useWindowSize.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n// import HeroVideo from \"../../video/kraciVideo.mp4\";\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NextArrow(props) {\n    var className = props.className, style = props.style, onClick = props.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapLoaderNext\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"arrow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineArrowLeft, {\n                    size: 25\n                }, void 0, false, {\n                    fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loaderPrev\",\n                onClick: onClick\n            }, void 0, false, {\n                fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = NextArrow;\nfunction PrevArrow(props) {\n    var className = props.className, style = props.style, onClick = props.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapLoaderPrev\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"arrow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineArrowRight, {\n                    size: 25\n                }, void 0, false, {\n                    fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loaderNext\",\n                onClick: onClick\n            }, void 0, false, {\n                fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PrevArrow;\nvar PhotoSlider = function() {\n    _s();\n    var settings = {\n        className: \"photoSlider\",\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextArrow, {}, void 0, false, {\n            fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n            lineNumber: 40,\n            columnNumber: 16\n        }, _this),\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PrevArrow, {}, void 0, false, {\n            fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n            lineNumber: 41,\n            columnNumber: 16\n        }, _this),\n        dots: true,\n        infinite: true,\n        autoplay: true,\n        speed: 2000,\n        autoplaySpeed: 6000,\n        slidesToShow: 1,\n        slidesToScroll: 1\n    };\n    var size = (0,_useWindowSize_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    var ref = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView)({\n        /* Optional options */ threshold: 0.1,\n        // trigger inView function only once\n        triggerOnce: true\n    }), ref1 = ref.ref, inView = ref.inView;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_js__WEBPACK_IMPORTED_MODULE_1__.HeroWrap, {\n        id: \"boatData\",\n        ref: ref1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, settings, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_js__WEBPACK_IMPORTED_MODULE_1__.WrapPhoto, {}, void 0, false, {\n                    fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_js__WEBPACK_IMPORTED_MODULE_1__.WrapPhoto2, {}, void 0, false, {\n                    fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }), void 0, true, {\n            fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_s(PhotoSlider, \"8a2wGV68zm6wNvppQuE8Ts68f8Q=\", false, function() {\n    return [\n        _useWindowSize_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView\n    ];\n});\n_c2 = PhotoSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoSlider);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NextArrow\");\n$RefreshReg$(_c1, \"PrevArrow\");\n$RefreshReg$(_c2, \"PhotoSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bob3RvU2xpZGVyL3Bob3RvU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDN0Qsc0RBQXNEO0FBRVE7QUFDTjtBQUNSO0FBQ2Y7QUFDRjtBQUNTO0FBQ007QUFDTztBQUNEOztBQUNwRCxTQUFTVSxTQUFTLENBQUNDLEtBQUssRUFBRTtJQUN4QixJQUFRQyxTQUFTLEdBQXFCRCxLQUFLLENBQW5DQyxTQUFTLEVBQUVDLEtBQUssR0FBY0YsS0FBSyxDQUF4QkUsS0FBSyxFQUFFQyxPQUFPLEdBQUtILEtBQUssQ0FBakJHLE9BQU87SUFDakMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0gsU0FBUyxFQUFDLGdCQUFnQjs7MEJBQzdCLDhEQUFDRyxLQUFHO2dCQUFDSCxTQUFTLEVBQUMsT0FBTzswQkFDcEIsNEVBQUNILDhEQUFrQjtvQkFBQ08sSUFBSSxFQUFFLEVBQUU7Ozs7O3dCQUFJOzs7OztvQkFDNUI7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNILFNBQVMsRUFBQyxZQUFZO2dCQUFDRSxPQUFPLEVBQUVBLE9BQU87Ozs7O29CQUFROzs7Ozs7WUFDaEQsQ0FDTjtDQUNIO0FBVlFKLEtBQUFBLFNBQVM7QUFZbEIsU0FBU08sU0FBUyxDQUFDTixLQUFLLEVBQUU7SUFDeEIsSUFBUUMsU0FBUyxHQUFxQkQsS0FBSyxDQUFuQ0MsU0FBUyxFQUFFQyxLQUFLLEdBQWNGLEtBQUssQ0FBeEJFLEtBQUssRUFBRUMsT0FBTyxHQUFLSCxLQUFLLENBQWpCRyxPQUFPO0lBQ2pDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNILFNBQVMsRUFBQyxnQkFBZ0I7OzBCQUM3Qiw4REFBQ0csS0FBRztnQkFBQ0gsU0FBUyxFQUFDLE9BQU87MEJBQ3BCLDRFQUFDSiwrREFBbUI7b0JBQUNRLElBQUksRUFBRSxFQUFFOzs7Ozt3QkFBSTs7Ozs7b0JBQzdCOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDSCxTQUFTLEVBQUMsWUFBWTtnQkFBQ0UsT0FBTyxFQUFFQSxPQUFPOzs7OztvQkFBUTs7Ozs7O1lBQ2hELENBQ047Q0FDSDtBQVZRRyxNQUFBQSxTQUFTO0FBWWxCLElBQU1DLFdBQVcsR0FBRyxXQUFNOztJQUN4QixJQUFNQyxRQUFRLEdBQUc7UUFDZlAsU0FBUyxFQUFFLGFBQWE7UUFDeEJRLFNBQVMsZ0JBQUUsOERBQUNWLFNBQVM7Ozs7aUJBQUc7UUFDeEJXLFNBQVMsZ0JBQUUsOERBQUNKLFNBQVM7Ozs7aUJBQUc7UUFDeEJLLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLEtBQUssRUFBRSxJQUFJO1FBQ1hDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxZQUFZLEVBQUUsQ0FBQztRQUNmQyxjQUFjLEVBQUUsQ0FBQztLQUNsQjtJQUNELElBQU1aLElBQUksR0FBR1gsNkRBQWEsRUFBRTtJQUM1QixJQUF3QkQsR0FLdEIsR0FMc0JBLHNFQUFTLENBQUM7UUFDaEMsc0JBQXNCLENBQ3RCeUIsU0FBUyxFQUFFLEdBQUc7UUFDZCxvQ0FBb0M7UUFDcENDLFdBQVcsRUFBRSxJQUFJO0tBQ2xCLENBQUMsRUFMTUMsSUFBRyxHQUFhM0IsR0FLdEIsQ0FMTTJCLEdBQUcsRUFBRUMsTUFBTSxHQUFLNUIsR0FLdEIsQ0FMVzRCLE1BQU07SUFPbkIscUJBQ0UsOERBQUNoQywrQ0FBUTtRQUFDaUMsRUFBRSxFQUFDLFVBQVU7UUFBQ0YsR0FBRyxFQUFFQSxJQUFHO2tCQUM5Qiw0RUFBQ3pCLG1EQUFNLG9CQUFLYSxRQUFROzs4QkFDbEIsOERBQUNsQixnREFBUzs7Ozt5QkFBYTs4QkFDdkIsOERBQUNDLGlEQUFVOzs7O3lCQUFjOzs7Ozs7aUJBQ2xCOzs7OzthQUNBLENBQ1g7Q0FDSDtHQTdCS2dCLFdBQVc7O1FBYUZiLHlEQUFhO1FBQ0ZELGtFQUFTOzs7QUFkN0JjLE1BQUFBLFdBQVc7QUErQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b1NsaWRlci9waG90b1NsaWRlci5qcz9jMTUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm9XcmFwLCBXcmFwUGhvdG8sIFdyYXBQaG90bzIgfSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuLy8gaW1wb3J0IEhlcm9WaWRlbyBmcm9tIFwiLi4vLi4vdmlkZW8va3JhY2lWaWRlby5tcDRcIjtcblxuaW1wb3J0IHsgdXNlU2Nyb2xsUGVyY2VudGFnZSB9IGZyb20gXCJyZWFjdC1zY3JvbGwtcGVyY2VudGFnZVwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3VzZVdpbmRvd1NpemUuanNcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd1JpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd0xlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmZ1bmN0aW9uIE5leHRBcnJvdyhwcm9wcykge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcExvYWRlck5leHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj5cbiAgICAgICAgPEFpT3V0bGluZUFycm93TGVmdCBzaXplPXsyNX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJQcmV2XCIgb25DbGljaz17b25DbGlja30+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcExvYWRlclByZXZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj5cbiAgICAgICAgPEFpT3V0bGluZUFycm93UmlnaHQgc2l6ZT17MjV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyTmV4dFwiIG9uQ2xpY2s9e29uQ2xpY2t9PjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBQaG90b1NsaWRlciA9ICgpID0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBob3RvU2xpZGVyXCIsXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPixcbiAgICBkb3RzOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIHNwZWVkOiAyMDAwLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDYwMDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICB9O1xuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIC8qIE9wdGlvbmFsIG9wdGlvbnMgKi9cbiAgICB0aHJlc2hvbGQ6IDAuMSxcbiAgICAvLyB0cmlnZ2VyIGluVmlldyBmdW5jdGlvbiBvbmx5IG9uY2VcbiAgICB0cmlnZ2VyT25jZTogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SGVyb1dyYXAgaWQ9XCJib2F0RGF0YVwiIHJlZj17cmVmfT5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgPFdyYXBQaG90bz48L1dyYXBQaG90bz5cbiAgICAgICAgPFdyYXBQaG90bzI+PC9XcmFwUGhvdG8yPlxuICAgICAgPC9TbGlkZXI+XG4gICAgPC9IZXJvV3JhcD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvU2xpZGVyO1xuIl0sIm5hbWVzIjpbIkhlcm9XcmFwIiwiV3JhcFBob3RvIiwiV3JhcFBob3RvMiIsInVzZVNjcm9sbFBlcmNlbnRhZ2UiLCJ1c2VJblZpZXciLCJ1c2VXaW5kb3dTaXplIiwiU2xpZGVyIiwiSW1hZ2UiLCJBaU91dGxpbmVBcnJvd1JpZ2h0IiwiQWlPdXRsaW5lQXJyb3dMZWZ0IiwiTmV4dEFycm93IiwicHJvcHMiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uQ2xpY2siLCJkaXYiLCJzaXplIiwiUHJldkFycm93IiwiUGhvdG9TbGlkZXIiLCJzZXR0aW5ncyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImRvdHMiLCJpbmZpbml0ZSIsImF1dG9wbGF5Iiwic3BlZWQiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsInJlZiIsImluVmlldyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PhotoSlider/photoSlider.js\n");

/***/ })

});