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

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postSaga; }\n/* harmony export */ });\n/* harmony import */ var D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _marked = /*#__PURE__*/D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(addComment),\n    _marked2 = /*#__PURE__*/D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(addPost),\n    _marked3 = /*#__PURE__*/D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(removePost),\n    _marked4 = /*#__PURE__*/D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchRemovePost),\n    _marked5 = /*#__PURE__*/D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchAddPost),\n    _marked6 = /*#__PURE__*/D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(postSaga);\n\n\n\n\n\n\nfunction addCommentAPI(data) {\n  return axios.post(\"/api/post/\".concat(data.postId, \"/comment\"), data);\n}\n\nfunction addComment(action) {\n  return D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function addComment$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          console.log(\"addComent action : \", action.data);\n          _context.prev = 1;\n          // const result = yield call(addCommentAPI, action.data);\n          console.log(\"saga comment action.data : \", action.data);\n          _context.next = 5;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);\n\n        case 5:\n          _context.next = 7;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_SUCCESS,\n            data: action.data\n          });\n\n        case 7:\n          _context.next = 14;\n          break;\n\n        case 9:\n          _context.prev = 9;\n          _context.t0 = _context[\"catch\"](1);\n          console.log(\"댓글 에러 : \", _context.t0);\n          _context.next = 14;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_FAILURE,\n            data: _context.t0.response.data\n          });\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[1, 9]]);\n}\n\nfunction addPostAPI(data) {\n  return axios.post('/api/post', data);\n}\n\nfunction addPost(action) {\n  var id;\n  return D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function addPost$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);\n\n        case 3:\n          id = shortid__WEBPACK_IMPORTED_MODULE_3___default().generate();\n          console.log(\"saga action.data : \", action.data);\n          _context2.next = 7;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_SUCCESS,\n            data: {\n              id: id,\n              content: action.data.text // 입력폼에 입력한 데이터가 여기까지 넘어옴\n\n            }\n          });\n\n        case 7:\n          _context2.next = 9;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.ADD_POST_TO_ME,\n            data: id\n          });\n\n        case 9:\n          _context2.next = 16;\n          break;\n\n        case 11:\n          _context2.prev = 11;\n          _context2.t0 = _context2[\"catch\"](0);\n          console.error(_context2.t0);\n          _context2.next = 16;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_FAILURE,\n            data: _context2.t0.response.data\n          });\n\n        case 16:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 11]]);\n}\n\nfunction removePostAPI(data) {\n  return axios[\"delete\"]('/api/post', data);\n}\n\nfunction removePost(action) {\n  return D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function removePost$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          console.log(\"삭제할 id : \", action.data);\n          _context3.prev = 1;\n          _context3.next = 4;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);\n\n        case 4:\n          _context3.next = 6;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_SUCCESS,\n            data: action.data\n          });\n\n        case 6:\n          _context3.next = 8;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.REMOVE_POST_OF_ME,\n            data: action.data\n          });\n\n        case 8:\n          _context3.next = 15;\n          break;\n\n        case 10:\n          _context3.prev = 10;\n          _context3.t0 = _context3[\"catch\"](1);\n          console.error(_context3.t0);\n          _context3.next = 15;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_FAILURE,\n            data: _context3.t0.response.data\n          });\n\n        case 15:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, null, [[1, 10]]);\n}\n\nfunction watchRemovePost() {\n  return D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchRemovePost$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_REQUEST, removePost);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction watchAddPost() {\n  return D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchAddPost$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST, addPost);\n\n        case 2:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5);\n}\n\nfunction postSaga() {\n  return D_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function postSaga$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchRemovePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchAddPost)]);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zYWdhcy9wb3N0LmpzPzk4YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBkZWxheSwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUyxcclxuXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRDb21lbnQgYWN0aW9uIDogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYWdhIGNvbW1lbnQgYWN0aW9uLmRhdGEgOiBcIiAsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi64yT6riAIOyXkOufrCA6IFwiLCBlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYWdhIGFjdGlvbi5kYXRhIDogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLnRleHQsIC8vIOyeheugpe2PvOyXkCDsnoXroKXtlZwg642w7J207YSw6rCAIOyXrOq4sOq5jOyngCDrhJjslrTsmLRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSgnL2FwaS9wb3N0JywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCLsgq3soJztlaAgaWQgOiBcIiwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG5cclxuICAgIF0pO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiYWRkQ29tbWVudCIsImFkZFBvc3QiLCJyZW1vdmVQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRQb3N0IiwicG9zdFNhZ2EiLCJhbGwiLCJmb3JrIiwidGFrZUxhdGVzdCIsImRlbGF5IiwicHV0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwic2hvcnRJZCIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJhZGRDb21tZW50QVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsInBvc3RJZCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwiaWQiLCJnZW5lcmF0ZSIsImNvbnRlbnQiLCJ0ZXh0IiwiZXJyb3IiLCJyZW1vdmVQb3N0QVBJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ })

});