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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.js */ \"./components/PhotoSlider/style.js\");\n/* harmony import */ var react_scroll_percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-percentage */ \"./node_modules/react-scroll-percentage/react-scroll-percentage.esm.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _useWindowSize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useWindowSize.js */ \"./components/useWindowSize.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n// import HeroVideo from \"../../video/kraciVideo.mp4\";\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NextArrow(props) {\n    var className = props.className, style = props.style, onClick = props.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapLoaderNext\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"arrow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineArrowLeft, {\n                    size: 25\n                }, void 0, false, {\n                    fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loaderPrev\",\n                onClick: onClick\n            }, void 0, false, {\n                fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = NextArrow;\nfunction PrevArrow(props) {\n    var className = props.className, style = props.style, onClick = props.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapLoaderPrev\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"arrow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineArrowRight, {\n                    size: 25\n                }, void 0, false, {\n                    fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loaderNext\",\n                onClick: onClick\n            }, void 0, false, {\n                fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PrevArrow;\nvar PhotoSlider = function() {\n    _s();\n    var settings = {\n        // arrows: true,\n        // dots: true,\n        // infinite: true,\n        // lazyLoad: true,\n        // fade: true,\n        // speed: 2000,\n        // autoplaySpeed: 2000,\n        // autoplay: true,\n        // slidesToShow: 1,\n        // slidesToScroll: 1,\n        className: \"photoSlider\",\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextArrow, {}, void 0, false, {\n            fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n            lineNumber: 50,\n            columnNumber: 16\n        }, _this),\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PrevArrow, {}, void 0, false, {\n            fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n            lineNumber: 51,\n            columnNumber: 16\n        }, _this),\n        dots: true,\n        infinite: true,\n        speed: 1500,\n        slidesToShow: 1,\n        slidesToScroll: 1\n    };\n    var size = (0,_useWindowSize_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    var ref = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView)({\n        /* Optional options */ threshold: 0.1,\n        // trigger inView function only once\n        triggerOnce: true\n    }), ref1 = ref.ref, inView = ref.inView;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_js__WEBPACK_IMPORTED_MODULE_1__.HeroWrap, {\n        id: \"boatData\",\n        ref: ref1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, settings, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_js__WEBPACK_IMPORTED_MODULE_1__.WrapPhoto, {}, void 0, false, {\n                    fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_js__WEBPACK_IMPORTED_MODULE_1__.WrapPhoto2, {}, void 0, false, {\n                    fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }), void 0, true, {\n            fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/juricasango/Documents/DEVELOPER/dvor pitve/ WEBSITE Pitve/components/PhotoSlider/photoSlider.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this);\n};\n_s(PhotoSlider, \"8a2wGV68zm6wNvppQuE8Ts68f8Q=\", false, function() {\n    return [\n        _useWindowSize_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView\n    ];\n});\n_c2 = PhotoSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoSlider);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NextArrow\");\n$RefreshReg$(_c1, \"PrevArrow\");\n$RefreshReg$(_c2, \"PhotoSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bob3RvU2xpZGVyL3Bob3RvU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDN0Qsc0RBQXNEO0FBRVE7QUFDTjtBQUNSO0FBQ2Y7QUFDRjtBQUNTO0FBQ007QUFDTztBQUNEOztBQUNwRCxTQUFTVSxTQUFTLENBQUNDLEtBQUssRUFBRTtJQUN4QixJQUFRQyxTQUFTLEdBQXFCRCxLQUFLLENBQW5DQyxTQUFTLEVBQUVDLEtBQUssR0FBY0YsS0FBSyxDQUF4QkUsS0FBSyxFQUFFQyxPQUFPLEdBQUtILEtBQUssQ0FBakJHLE9BQU87SUFDakMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0gsU0FBUyxFQUFDLGdCQUFnQjs7MEJBQzdCLDhEQUFDRyxLQUFHO2dCQUFDSCxTQUFTLEVBQUMsT0FBTzswQkFDcEIsNEVBQUNILDhEQUFrQjtvQkFBQ08sSUFBSSxFQUFFLEVBQUU7Ozs7O3dCQUFJOzs7OztvQkFDNUI7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNILFNBQVMsRUFBQyxZQUFZO2dCQUFDRSxPQUFPLEVBQUVBLE9BQU87Ozs7O29CQUFROzs7Ozs7WUFDaEQsQ0FDTjtDQUNIO0FBVlFKLEtBQUFBLFNBQVM7QUFZbEIsU0FBU08sU0FBUyxDQUFDTixLQUFLLEVBQUU7SUFDeEIsSUFBUUMsU0FBUyxHQUFxQkQsS0FBSyxDQUFuQ0MsU0FBUyxFQUFFQyxLQUFLLEdBQWNGLEtBQUssQ0FBeEJFLEtBQUssRUFBRUMsT0FBTyxHQUFLSCxLQUFLLENBQWpCRyxPQUFPO0lBQ2pDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNILFNBQVMsRUFBQyxnQkFBZ0I7OzBCQUM3Qiw4REFBQ0csS0FBRztnQkFBQ0gsU0FBUyxFQUFDLE9BQU87MEJBQ3BCLDRFQUFDSiwrREFBbUI7b0JBQUNRLElBQUksRUFBRSxFQUFFOzs7Ozt3QkFBSTs7Ozs7b0JBQzdCOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDSCxTQUFTLEVBQUMsWUFBWTtnQkFBQ0UsT0FBTyxFQUFFQSxPQUFPOzs7OztvQkFBUTs7Ozs7O1lBQ2hELENBQ047Q0FDSDtBQVZRRyxNQUFBQSxTQUFTO0FBWWxCLElBQU1DLFdBQVcsR0FBRyxXQUFNOztJQUN4QixJQUFNQyxRQUFRLEdBQUc7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckJQLFNBQVMsRUFBRSxhQUFhO1FBQ3hCUSxTQUFTLGdCQUFFLDhEQUFDVixTQUFTOzs7O2lCQUFHO1FBQ3hCVyxTQUFTLGdCQUFFLDhEQUFDSixTQUFTOzs7O2lCQUFHO1FBQ3hCSyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxZQUFZLEVBQUUsQ0FBQztRQUNmQyxjQUFjLEVBQUUsQ0FBQztLQUNsQjtJQUNELElBQU1WLElBQUksR0FBR1gsNkRBQWEsRUFBRTtJQUM1QixJQUF3QkQsR0FLdEIsR0FMc0JBLHNFQUFTLENBQUM7UUFDaEMsc0JBQXNCLENBQ3RCdUIsU0FBUyxFQUFFLEdBQUc7UUFDZCxvQ0FBb0M7UUFDcENDLFdBQVcsRUFBRSxJQUFJO0tBQ2xCLENBQUMsRUFMTUMsSUFBRyxHQUFhekIsR0FLdEIsQ0FMTXlCLEdBQUcsRUFBRUMsTUFBTSxHQUFLMUIsR0FLdEIsQ0FMVzBCLE1BQU07SUFPbkIscUJBQ0UsOERBQUM5QiwrQ0FBUTtRQUFDK0IsRUFBRSxFQUFDLFVBQVU7UUFBQ0YsR0FBRyxFQUFFQSxJQUFHO2tCQUM5Qiw0RUFBQ3ZCLG1EQUFNLG9CQUFLYSxRQUFROzs4QkFDbEIsOERBQUNsQixnREFBUzs7Ozt5QkFBYTs4QkFDdkIsOERBQUNDLGlEQUFVOzs7O3lCQUFjOzs7Ozs7aUJBQ2xCOzs7OzthQUNBLENBQ1g7Q0FDSDtHQXJDS2dCLFdBQVc7O1FBcUJGYix5REFBYTtRQUNGRCxrRUFBUzs7O0FBdEI3QmMsTUFBQUEsV0FBVztBQXVDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bob3RvU2xpZGVyL3Bob3RvU2xpZGVyLmpzP2MxNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVyb1dyYXAsIFdyYXBQaG90bywgV3JhcFBob3RvMiB9IGZyb20gXCIuL3N0eWxlLmpzXCI7XG4vLyBpbXBvcnQgSGVyb1ZpZGVvIGZyb20gXCIuLi8uLi92aWRlby9rcmFjaVZpZGVvLm1wNFwiO1xuXG5pbXBvcnQgeyB1c2VTY3JvbGxQZXJjZW50YWdlIH0gZnJvbSBcInJlYWN0LXNjcm9sbC1wZXJjZW50YWdlXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXNlV2luZG93U2l6ZS5qc1wiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCB7IEFpT3V0bGluZUFycm93UmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IEFpT3V0bGluZUFycm93TGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuZnVuY3Rpb24gTmV4dEFycm93KHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwTG9hZGVyTmV4dFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPlxuICAgICAgICA8QWlPdXRsaW5lQXJyb3dMZWZ0IHNpemU9ezI1fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclByZXZcIiBvbkNsaWNrPXtvbkNsaWNrfT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwTG9hZGVyUHJldlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPlxuICAgICAgICA8QWlPdXRsaW5lQXJyb3dSaWdodCBzaXplPXsyNX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJOZXh0XCIgb25DbGljaz17b25DbGlja30+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFBob3RvU2xpZGVyID0gKCkgPT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAvLyBhcnJvd3M6IHRydWUsXG4gICAgLy8gZG90czogdHJ1ZSxcbiAgICAvLyBpbmZpbml0ZTogdHJ1ZSxcbiAgICAvLyBsYXp5TG9hZDogdHJ1ZSxcbiAgICAvLyBmYWRlOiB0cnVlLFxuICAgIC8vIHNwZWVkOiAyMDAwLFxuICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgLy8gYXV0b3BsYXk6IHRydWUsXG4gICAgLy8gc2xpZGVzVG9TaG93OiAxLFxuICAgIC8vIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGNsYXNzTmFtZTogXCJwaG90b1NsaWRlclwiLFxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz4sXG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogMTUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIH07XG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldyh7XG4gICAgLyogT3B0aW9uYWwgb3B0aW9ucyAqL1xuICAgIHRocmVzaG9sZDogMC4xLFxuICAgIC8vIHRyaWdnZXIgaW5WaWV3IGZ1bmN0aW9uIG9ubHkgb25jZVxuICAgIHRyaWdnZXJPbmNlOiB0cnVlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxIZXJvV3JhcCBpZD1cImJvYXREYXRhXCIgcmVmPXtyZWZ9PlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICA8V3JhcFBob3RvPjwvV3JhcFBob3RvPlxuICAgICAgICA8V3JhcFBob3RvMj48L1dyYXBQaG90bzI+XG4gICAgICA8L1NsaWRlcj5cbiAgICA8L0hlcm9XcmFwPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9TbGlkZXI7XG4iXSwibmFtZXMiOlsiSGVyb1dyYXAiLCJXcmFwUGhvdG8iLCJXcmFwUGhvdG8yIiwidXNlU2Nyb2xsUGVyY2VudGFnZSIsInVzZUluVmlldyIsInVzZVdpbmRvd1NpemUiLCJTbGlkZXIiLCJJbWFnZSIsIkFpT3V0bGluZUFycm93UmlnaHQiLCJBaU91dGxpbmVBcnJvd0xlZnQiLCJOZXh0QXJyb3ciLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwib25DbGljayIsImRpdiIsInNpemUiLCJQcmV2QXJyb3ciLCJQaG90b1NsaWRlciIsInNldHRpbmdzIiwibmV4dEFycm93IiwicHJldkFycm93IiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInRocmVzaG9sZCIsInRyaWdnZXJPbmNlIiwicmVmIiwiaW5WaWV3IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PhotoSlider/photoSlider.js\n");

/***/ })

});