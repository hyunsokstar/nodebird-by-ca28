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

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"LOG_IN_REQUEST\": function() { return /* binding */ LOG_IN_REQUEST; },\n/* harmony export */   \"LOG_IN_SUCCESS\": function() { return /* binding */ LOG_IN_SUCCESS; },\n/* harmony export */   \"LOG_IN_FAILURE\": function() { return /* binding */ LOG_IN_FAILURE; },\n/* harmony export */   \"LOG_OUT_REQUEST\": function() { return /* binding */ LOG_OUT_REQUEST; },\n/* harmony export */   \"LOG_OUT_SUCCESS\": function() { return /* binding */ LOG_OUT_SUCCESS; },\n/* harmony export */   \"LOG_OUT_FAILURE\": function() { return /* binding */ LOG_OUT_FAILURE; },\n/* harmony export */   \"ADD_POST_TO_ME\": function() { return /* binding */ ADD_POST_TO_ME; },\n/* harmony export */   \"REMOVE_POST_OF_ME\": function() { return /* binding */ REMOVE_POST_OF_ME; }\n/* harmony export */ });\n/* harmony import */ var D_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var D_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  // isLoggedIn: false,\n  // signUpData: {},\n  // loginData: {},\n  me: null,\n  logInLoading: false,\n  // 로그인 시도중\n  logInDone: false,\n  logInError: null,\n  logOutLoading: false,\n  // 로그아웃 시도중\n  logOutDone: false,\n  logOutError: null\n}; // export const loginAction = (data) => {\n//     return {\n//         type: \"LOG_IN\",\n//         data,\n//     };\n// };\n// export const logoutAction = () => {\n//     return {\n//         type: \"LOG_OUT\",\n//     };\n// };\n\nvar LOG_IN_REQUEST = 'LOG_IN_REQUEST';\nvar LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nvar LOG_IN_FAILURE = 'LOG_IN_FAILURE';\nvar LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nvar LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nvar LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';\nvar ADD_POST_TO_ME = 'ADD_POST_TO_ME';\nvar REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'; // const reducer = (state = initialState, action) => {\n//     switch (action.type) {\n//         case \"LOG_IN\":\n//             return {\n//                 ...state,\n//                 isLoggedIn: true,\n//                 me: action.data,\n//             };\n//         case \"LOG_OUT\":\n//             return {\n//                 ...state,\n//                 isLoggedIn: false,\n//             };\n//         default:\n//             return state;\n//     }\n// };\n\nvar dummyUser = function dummyUser(data) {\n  return _objectSpread(_objectSpread({}, data), {}, {\n    nickname: '제로초',\n    id: 1,\n    Posts: [{\n      id: 1\n    }],\n    Followings: [{\n      nickname: '부기초'\n    }, {\n      nickname: 'Chanho Lee'\n    }, {\n      nickname: 'neue zeal'\n    }],\n    Followers: [{\n      nickname: '부기초'\n    }, {\n      nickname: 'Chanho Lee'\n    }, {\n      nickname: 'neue zeal'\n    }]\n  });\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case LOG_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: true,\n        logInError: null,\n        logInDone: false\n      });\n\n    case LOG_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: false,\n        logInDone: true,\n        me: dummyUser(action.data)\n      });\n\n    case LOG_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: false,\n        logInError: action.data\n      });\n\n    case LOG_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: true,\n        logouterror: null,\n        logOutDone: false\n      });\n\n    case LOG_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: false,\n        logOutDone: true,\n        me: null\n      });\n\n    case LOG_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: false,\n        logouterror: action.error\n      });\n\n    case ADD_POST_TO_ME:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        me: _objectSpread(_objectSpread({}, state.me), {}, {\n          Posts: [{\n            id: action.data\n          }].concat((0,D_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.me.Posts))\n        })\n      });\n\n    case REMOVE_POST_OF_ME:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        me: _objectSpread(_objectSpread({}, state.me), {}, {\n          Posts: state.me.Posts.filter(function (v) {\n            return v.id !== action.data;\n          })\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNPWSxLQURQO0FBRUluQixRQUFBQSxhQUFhLEVBQUUsS0FGbkI7QUFHSUMsUUFBQUEsVUFBVSxFQUFFLElBSGhCO0FBSUlMLFFBQUFBLEVBQUUsRUFBRTtBQUpSOztBQU1KLFNBQUtZLGVBQUw7QUFDSSw2Q0FDT1csS0FEUDtBQUVJbkIsUUFBQUEsYUFBYSxFQUFFLEtBRm5CO0FBR0lzQixRQUFBQSxXQUFXLEVBQUVGLE1BQU0sQ0FBQ0c7QUFIeEI7O0FBTUosU0FBS2QsY0FBTDtBQUNJLDZDQUNPVSxLQURQO0FBRUl2QixRQUFBQSxFQUFFLGtDQUNLdUIsS0FBSyxDQUFDdkIsRUFEWDtBQUVFbUIsVUFBQUEsS0FBSyxHQUFHO0FBQUVELFlBQUFBLEVBQUUsRUFBRU0sTUFBTSxDQUFDUjtBQUFiLFdBQUgsOEhBQTJCTyxLQUFLLENBQUN2QixFQUFOLENBQVNtQixLQUFwQztBQUZQO0FBRk47O0FBUUEsU0FBS0wsaUJBQUw7QUFDSSw2Q0FDS1MsS0FETDtBQUVFdkIsUUFBQUEsRUFBRSxrQ0FDR3VCLEtBQUssQ0FBQ3ZCLEVBRFQ7QUFFQW1CLFVBQUFBLEtBQUssRUFBRUksS0FBSyxDQUFDdkIsRUFBTixDQUFTbUIsS0FBVCxDQUFlUyxNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDWCxFQUFGLEtBQVNNLE1BQU0sQ0FBQ1IsSUFBdkI7QUFBQSxXQUF0QjtBQUZQO0FBRko7O0FBUVI7QUFDSSxhQUFPTyxLQUFQO0FBN0RSO0FBK0RILENBaEVEOztBQWtFQSwrREFBZUQsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLmpzPzBkZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAvLyBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIC8vIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgLy8gbG9naW5EYXRhOiB7fSxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiBcIkxPR19JTlwiLFxyXG4vLyAgICAgICAgIGRhdGEsXHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogXCJMT0dfT1VUXCIsXHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgICAgIGNhc2UgXCJMT0dfSU5cIjpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcclxuXHJcbi8vICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgY2FzZSBcIkxPR19PVVRcIjpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ+u2gOq4sOy0iCcgfSwgeyBuaWNrbmFtZTogJ0NoYW5obyBMZWUnIH0sIHsgbmlja25hbWU6ICduZXVlIHplYWwnIH1dLFxyXG4gICAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogJ+u2gOq4sOy0iCcgfSwgeyBuaWNrbmFtZTogJ0NoYW5obyBMZWUnIH0sIHsgbmlja25hbWU6ICduZXVlIHplYWwnIH1dLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2dvdXRlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ291dGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJsb2dvdXRlcnJvciIsImVycm9yIiwiZmlsdGVyIiwidiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

});