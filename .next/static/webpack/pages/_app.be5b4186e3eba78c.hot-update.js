"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Footer/FooterStyle.js":
/*!******************************************!*\
  !*** ./components/Footer/FooterStyle.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Copyright\": function() { return /* binding */ Copyright; },\n/* harmony export */   \"FooterSec\": function() { return /* binding */ FooterSec; },\n/* harmony export */   \"FooterTop\": function() { return /* binding */ FooterTop; },\n/* harmony export */   \"LinkLi\": function() { return /* binding */ LinkLi; },\n/* harmony export */   \"Linkd\": function() { return /* binding */ Linkd; },\n/* harmony export */   \"Links\": function() { return /* binding */ Links; },\n/* harmony export */   \"Message\": function() { return /* binding */ Message; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar FooterSec = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].footer.withConfig({\n  displayName: \"FooterStyle__FooterSec\",\n  componentId: \"sc-1lv5d50-0\"\n})([\"background:#0b0b0f;padding:50px 100px;position:relative;z-index:1;@media screen and (max-width:768px){padding:50px 40px 10px;}hr{border-color:#858383;border-width:1px;margin-bottom:60px;opacity:.4;}\"]);\nvar FooterTop = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"FooterStyle__FooterTop\",\n  componentId: \"sc-1lv5d50-1\"\n})([\"font-size:15px;font-weight:500;@media screen and (max-width:570px){font-size:14px;}\"]);\nvar Message = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"FooterStyle__Message\",\n  componentId: \"sc-1lv5d50-2\"\n})([\"text-transform:uppercase;letter-spacing:.2em;margin-bottom:15px;\"]);\nvar Links = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"FooterStyle__Links\",\n  componentId: \"sc-1lv5d50-3\"\n})([\"color:#868f97;display:flex;@media screen and (max-width:425px){flex-direction:column;}\"]);\nvar Linkd = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"FooterStyle__Linkd\",\n  componentId: \"sc-1lv5d50-4\"\n})([\"p{margin-bottom:20px;}a{position:relative;text-decoration:none;color:inherit;}:first-of-type{margin-right:15em;}a::after{color:#fff;position:absolute;overflow:hidden;content:attr(data-text);background-color:transparent;width:0;left:0;right:0;box-sizing:border-box;-webkit-transition:width .2s linear;transition:width .2s linear;}a:hover::after{width:100%;}\"]);\nvar LinkLi = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"FooterStyle__LinkLi\",\n  componentId: \"sc-1lv5d50-5\"\n})([\"a{position:relative;text-decoration:none;color:inherit;}button{color:#fff;background:transparent;border:none;}a::after{color:#fff;position:absolute;overflow:hidden;content:attr(data-text);background-color:transparent;width:0;left:0;right:0;box-sizing:border-box;-webkit-transition:width .2s linear;transition:width .2s linear;}a:hover::after{width:100%;}\"]);\nvar Copyright = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"FooterStyle__Copyright\",\n  componentId: \"sc-1lv5d50-6\"\n})([\"color:#868f97;padding:140px 0 0;text-align:right;font-size:16px;@media screen and (max-width:570px){text-align:left;font-size:14px;padding:100px 0 40px;}\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUMsU0FBUyxHQUFHRCwyRUFBSDtFQUFBO0VBQUE7QUFBQSw4TUFBZjtBQWtCQSxJQUFNRyxTQUFTLEdBQUdILHdFQUFIO0VBQUE7RUFBQTtBQUFBLDJGQUFmO0FBUUEsSUFBTUssT0FBTyxHQUFHTCx3RUFBSDtFQUFBO0VBQUE7QUFBQSx3RUFBYjtBQUtBLElBQU1NLEtBQUssR0FBR04sd0VBQUg7RUFBQTtFQUFBO0FBQUEsOEZBQVg7QUFTQSxJQUFNTyxLQUFLLEdBQUdQLHdFQUFIO0VBQUE7RUFBQTtBQUFBLDRXQUFYO0FBa0NBLElBQU1RLE1BQU0sR0FBR1Isd0VBQUg7RUFBQTtFQUFBO0FBQUEsMFdBQVo7QUFnQ0EsSUFBTVMsU0FBUyxHQUFHVCx3RUFBSDtFQUFBO0VBQUE7QUFBQSxpS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJTdHlsZS5qcz82ZTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cblxuZXhwb3J0IGNvbnN0IEZvb3RlclNlYyA9IHN0eWxlZC5mb290ZXJgXG4gICAgYmFja2dyb3VuZDogIzBiMGIwZjtcbiAgICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDQwcHggMTBweDtcbiAgICB9XG5cbiAgICBocntcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODU4MzgzO1xuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyVG9wID0gc3R5bGVkLmRpdmBcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbmBcbmV4cG9ydCBjb25zdCBNZXNzYWdlID0gc3R5bGVkLmRpdmBcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5gXG5leHBvcnQgY29uc3QgTGlua3MgPSBzdHlsZWQuZGl2YFxuICAgIGNvbG9yOiAjODY4Zjk3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCl7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlua2QgPSBzdHlsZWQuZGl2YFxuXG4gICAgcHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBhe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIDpmaXJzdC1vZi10eXBle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1ZW07XG4gICAgfVxuXG4gICAgYTo6YWZ0ZXJ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuMnMgbGluZWFyO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMnMgbGluZWFyO1xuICAgIH1cblxuICAgIGE6aG92ZXI6OmFmdGVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rTGkgPSBzdHlsZWQuZGl2YFxuICAgIGF7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICBidXR0b257XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIGE6OmFmdGVye1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggLjJzIGxpbmVhcjtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjJzIGxpbmVhcjtcbiAgICB9XG5cbiAgICBhOmhvdmVyOjphZnRlcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29weXJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogIzg2OGY5NztcbiAgICBwYWRkaW5nOiAxNDBweCAwIDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgNDBweDtcbn1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiRm9vdGVyU2VjIiwiZm9vdGVyIiwiRm9vdGVyVG9wIiwiZGl2IiwiTWVzc2FnZSIsIkxpbmtzIiwiTGlua2QiLCJMaW5rTGkiLCJDb3B5cmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer/FooterStyle.js\n"));

/***/ })

});