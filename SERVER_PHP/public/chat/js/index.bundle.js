/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../BUILDER/SCSS/chat.scss":
/*!*********************************!*\
  !*** ../BUILDER/SCSS/chat.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../SPA/node_modules/css-loader!../../SPA/node_modules/sass-loader/dist/cjs.js??ref--7-2!./chat.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!../BUILDER/SCSS/chat.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../SPA/node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!../BUILDER/SCSS/chat.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js??ref--7-2!../BUILDER/SCSS/chat.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../SPA/node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Regular\";\n  src: url(\"/font/KozGoPro/KozGoPro-Regular.otf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Bold\";\n  src: url(\"/font/KozGoPro/KozGoPro-Bold.otf\");\n}\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.AppComponent {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 15px;\n}\n\n.component-register {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  padding: 5px;\n}\n.component-register:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-register .left__register {\n  float: left;\n  width: 40%;\n  padding: 10px;\n}\n.component-register .right__register {\n  float: right;\n  width: 60%;\n  padding: 10px;\n}\n.component-register .conpany {\n  line-height: 1;\n  font-size: 18px;\n}\n.component-register .register-address {\n  background: #f2f2f2 none repeat scroll 0 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  display: block;\n  margin: 10px 0;\n  padding: 10px 10px;\n  position: relative;\n}\n.component-register .register-address h6 {\n  font-weight: 100;\n  font-size: 15px;\n}\n.component-register .intro-chat-register {\n  font-size: 18px;\n  color: #f44336;\n}\n.component-register .form-input {\n  padding-top: 10px;\n}\n.component-register .form-input label {\n  font-size: 15px;\n  color: #212529;\n  display: block;\n  padding-bottom: 10px;\n}\n.component-register .form-input input {\n  display: block;\n  width: 100%;\n  padding: 8px 15px;\n  font-size: 16px;\n  border-radius: 0;\n  border: 1px solid #6c757d;\n  outline: none;\n}\n.component-register .form-input input:focus {\n  color: #0d47a1;\n  border: 1px solid #0d47a1;\n}\n.component-register .form-input i {\n  font-style: normal;\n  color: #dc3545;\n}\n.component-register .btn-send-mail-contact {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 2px solid #3f51b5;\n}\n.component-register .btn-send-mail-contact:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #3f51b5;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.component-register .btn-send-mail-contact:focus, .component-register .btn-send-mail-contact.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.component-register .btn-send-mail-contact:disabled, .component-register .btn-send-mail-contact.disabled, fieldset:disabled .component-register .btn-send-mail-contact {\n  pointer-events: none;\n  opacity: 0.65;\n}", ""]);

// exports


/***/ }),

/***/ "./src/action/type.js":
/*!****************************!*\
  !*** ./src/action/type.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TYPE = {
  SOCCKET: {
    SET_SOCKET_IO: "SET_SOCKET_IO"
  },
  USER: {
    SETTER_USER: "SETTER_USER"
  },
  CONFIG: {
    SETTER_CONFIG: "SETTER_CONFIG"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TYPE);

/***/ }),

/***/ "./src/component/App.jsx":
/*!*******************************!*\
  !*** ./src/component/App.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Register_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Register.jsx */ "./src/component/Register.jsx");
/* harmony import */ var _Chat_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chat.jsx */ "./src/component/Chat.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    _classCallCheck(this, App);

    return _super.call(this, props);
  }

  _createClass(App, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("componentDidUpdate");
    }
  }, {
    key: "render",
    value: function render() {
      console.log("draw app");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "AppComponent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/chat/register",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/chat/:slug",
        component: _Chat_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    client: state.client
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(App));

/***/ }),

/***/ "./src/component/Chat.jsx":
/*!********************************!*\
  !*** ./src/component/Chat.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Chat = /*#__PURE__*/function (_Component) {
  _inherits(Chat, _Component);

  var _super = _createSuper(Chat);

  function Chat() {
    _classCallCheck(this, Chat);

    return _super.apply(this, arguments);
  }

  _createClass(Chat, [{
    key: "render",
    value: function render() {
      if (!this.props.auth) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: "/chat/register"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-chat"
      }, "trang chat");
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Chat));

/***/ }),

/***/ "./src/component/Register.jsx":
/*!************************************!*\
  !*** ./src/component/Register.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register() {
    _classCallCheck(this, Register);

    return _super.apply(this, arguments);
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-register"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left__register"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "conpany"
      }, this.props.config.company_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "register-address"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-account-group-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.config.company_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-update"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", this.props.config.tax_code_date, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-home-map-marker"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, [this.props.config.company_address_street, this.props.config.company_address_locality, this.props.config.company_address_region, this.props.config.company_address_country].join())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-cellphone-nfc"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u65E5\u672C\u306E\u96FB\u8A71\uFF1A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "tel:" + this.props.config.phone_one
      }, this.props.config.phone_one))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-card-account-mail-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:" + this.props.config.company_mail
      }, this.props.config.company_mail)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "intro-chat-register"
      }, "\u3042\u306A\u305F\u306F\u79C1\u305F\u3061\u306E\u30C1\u30E3\u30C3\u30C8\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210\u3057\u3001\u7BA1\u7406\u8005\u304B\u3089\u30A4\u30F3\u30BB\u30F3\u30C6\u30A3\u30D6\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/chat"
      }, "\u30C1\u30E3\u30C3\u30C8\u30DA\u30FC\u30B8\u306B\u884C\u304F"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right__register"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-danger"
      }, "c\xF3 l\u1ED7i"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " \u3042\u306A\u305F\u306E\u30D5\u30EB\u30CD\u30FC\u30E0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\u2735")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "name",
        type: "text"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " \u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\u2735")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "email",
        type: "text"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " \u96FB\u8A71\u756A\u53F7 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\u2735")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "mobile",
        type: "text"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn-send-mail-contact"
      }, "\u30E1\u30FC\u30EB\u7BA1\u7406\u8005\u306B\u9001\u4FE1")));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    config: state.config
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Register));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js */ "./node_modules/core-js/index.js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es/symbol */ "./node_modules/core-js/es/symbol/index.js");
/* harmony import */ var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es/object */ "./node_modules/core-js/es/object/index.js");
/* harmony import */ var core_js_es_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es/function */ "./node_modules/core-js/es/function/index.js");
/* harmony import */ var core_js_es_function__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es_function__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es/parse-int */ "./node_modules/core-js/es/parse-int.js");
/* harmony import */ var core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es/parse-float */ "./node_modules/core-js/es/parse-float.js");
/* harmony import */ var core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es/number */ "./node_modules/core-js/es/number/index.js");
/* harmony import */ var core_js_es_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es_number__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es/math */ "./node_modules/core-js/es/math/index.js");
/* harmony import */ var core_js_es_math__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es_math__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es/string */ "./node_modules/core-js/es/string/index.js");
/* harmony import */ var core_js_es_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es/date */ "./node_modules/core-js/es/date/index.js");
/* harmony import */ var core_js_es_date__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es_date__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es/array */ "./node_modules/core-js/es/array/index.js");
/* harmony import */ var core_js_es_array__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es/regexp */ "./node_modules/core-js/es/regexp/index.js");
/* harmony import */ var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es_regexp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es/map */ "./node_modules/core-js/es/map/index.js");
/* harmony import */ var core_js_es_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es_map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es_weak_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es/weak-map */ "./node_modules/core-js/es/weak-map/index.js");
/* harmony import */ var core_js_es_weak_map__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es_weak_map__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es_set__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es/set */ "./node_modules/core-js/es/set/index.js");
/* harmony import */ var core_js_es_set__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es_set__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var raf_polyfill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raf/polyfill */ "./node_modules/raf/polyfill.js");
/* harmony import */ var raf_polyfill__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(raf_polyfill__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reducer */ "./src/reducer/index.js");
/* harmony import */ var _BUILDER_SCSS_chat_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../BUILDER/SCSS/chat.scss */ "../BUILDER/SCSS/chat.scss");
/* harmony import */ var _BUILDER_SCSS_chat_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_BUILDER_SCSS_chat_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _component_App_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/App.jsx */ "./src/component/App.jsx");
/* polyfills.js */
// import 'babel-polyfill'
// import 'react-app-polyfill/ie11'
 ///for ie9 
// import 'core-js/es6/map';
// import 'core-js/es6/set';

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
















 /// for webpack import







var store = Object(redux__WEBPACK_IMPORTED_MODULE_18__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_20__["default"]);
store.subscribe(function () {
  console.log('có thay đổi trong Redux!!');
  console.log(store.getState());
}); /// my component


var wrapper = document.getElementById("ROOT");

if (typeof Storage !== 'undefined' && wrapper) {
  react_dom__WEBPACK_IMPORTED_MODULE_17___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_19__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_component_App_jsx__WEBPACK_IMPORTED_MODULE_22__["default"], null)), wrapper);
} else {
  alert("このブラウザでは、アプリケーションは正常に動作しません。 アップグレードしてください");
}

/***/ }),

/***/ "./src/reducer/auth.js":
/*!*****************************!*\
  !*** ./src/reducer/auth.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
var user = null;

if (typeof Storage !== 'undefined') {
  user = JSON.parse(localStorage.getItem('user'));
}


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : user;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].USER.SETTER_USER:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducer/config.js":
/*!*******************************!*\
  !*** ./src/reducer/config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
if (typeof CONFIG_APP == 'undefined') {
  var _CONFIG_APP = null;
}


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CONFIG_APP;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CONFIG.SETTER_CONFIG:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducer/index.js":
/*!******************************!*\
  !*** ./src/reducer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ "./src/reducer/socket.js");
/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.js */ "./src/reducer/auth.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.js */ "./src/reducer/config.js");
 ///thêm các reducer funtion cần được combine vào đây



 //// khởi tạo 1 biến biểu diễn REDUCER ALL 

var Reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  socket: _socket_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _auth_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  config: _config_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Reducer);

/***/ }),

/***/ "./src/reducer/socket.js":
/*!*******************************!*\
  !*** ./src/reducer/socket.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocketReducer; });
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");

function SocketReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].SOCCKET.SET_SOCKET_IO:
      return action.payload;

    default:
      return state;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JVSUxERVIvU0NTUy9jaGF0LnNjc3M/NWNmMSIsIndlYnBhY2s6Ly8vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9SZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL3NvY2tldC5qcyJdLCJuYW1lcyI6WyJUWVBFIiwiU09DQ0tFVCIsIlNFVF9TT0NLRVRfSU8iLCJVU0VSIiwiU0VUVEVSX1VTRVIiLCJDT05GSUciLCJTRVRURVJfQ09ORklHIiwiQXBwIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiQ2hhdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpZW50IiwiY29ubmVjdCIsImF1dGgiLCJSZWdpc3RlciIsImNvbmZpZyIsImNvbXBhbnlfbmFtZSIsInRheF9jb2RlX2RhdGUiLCJjb21wYW55X2FkZHJlc3Nfc3RyZWV0IiwiY29tcGFueV9hZGRyZXNzX2xvY2FsaXR5IiwiY29tcGFueV9hZGRyZXNzX3JlZ2lvbiIsImNvbXBhbnlfYWRkcmVzc19jb3VudHJ5Iiwiam9pbiIsInBob25lX29uZSIsImNvbXBhbnlfbWFpbCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJSZWR1Y2VyIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsImFsZXJ0IiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIkNPTkZJR19BUFAiLCJjb21iaW5lUmVkdWNlcnMiLCJzb2NrZXQiLCJTb2NrZXRSZWR1Y2VyIiwiQXV0aCIsIkNvbmZpZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVB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Q0FBQ0UsT0FBZDs7QUFDSjtBQUNJLGFBQU9sQyxLQUFQO0FBSlI7QUFNSCxDIiwiZmlsZSI6ImpzL2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0yIS4vY2hhdC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTIhLi9jaGF0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMiEuL2NoYXQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL1NQQS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS296R29Qcm8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvS296R29Qcm8vS296R29Qcm8tUmVndWxhci5vdGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIktvekdvUHJvLUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0tvekdvUHJvL0tvekdvUHJvLUJvbGQub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uQXBwQ29tcG9uZW50IHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uY29tcG9uZW50LXJlZ2lzdGVyIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAubGVmdF9fcmVnaXN0ZXIge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogNDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAucmlnaHRfX3JlZ2lzdGVyIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5jb25wYW55IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5yZWdpc3Rlci1hZGRyZXNzIHtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5yZWdpc3Rlci1hZGRyZXNzIGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmludHJvLWNoYXQtcmVnaXN0ZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICNmNDQzMzY7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBpbnB1dDpmb2N1cyB7XFxuICBjb2xvcjogIzBkNDdhMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgaSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBjb2xvcjogI2RjMzU0NTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbSAwLjZyZW07XFxuICBmb250LXNpemU6IDAuODFyZW07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luOiAwLjM3NXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzNmNTFiNTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBjb2xvci1sZXZlbCgjM2Y1MWI1LCAtOCk7XFxuICBjb2xvcjogIzNmNTFiNTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Q6Zm9jdXMsIC5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdC5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdDpkaXNhYmxlZCwgLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0LmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAuY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Qge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJjb25zdCBUWVBFID0gIHtcclxuICBcclxuICBTT0NDS0VUIDoge1xyXG4gICAgU0VUX1NPQ0tFVF9JTzogXCJTRVRfU09DS0VUX0lPXCJcclxuICB9LFxyXG4gIFVTRVI6IHtcclxuICAgIFNFVFRFUl9VU0VSOiBcIlNFVFRFUl9VU0VSXCJcclxuICB9LFxyXG4gIENPTkZJRzoge1xyXG4gICAgU0VUVEVSX0NPTkZJRyA6IFwiU0VUVEVSX0NPTkZJR1wiXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRZUEU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcblxyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vUmVnaXN0ZXIuanN4XCJcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0LmpzeCdcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudERpZFVwZGF0ZVwiKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhdyBhcHBcIilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcENvbXBvbmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2hhdC9yZWdpc3RlclwiIHJlbmRlcj17KCkgPT4gPFJlZ2lzdGVyIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2NoYXQvOnNsdWcnIGNvbXBvbmVudD17IENoYXQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xpZW50ICA6IHN0YXRlLmNsaWVudFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QgKG1hcFN0YXRlVG9Qcm9wcykoQXBwKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKCAhdGhpcy5wcm9wcy5hdXRoICl7XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvY2hhdC9yZWdpc3RlclwiIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWNoYXRcIj5cclxuICAgICAgICAgICAgICAgIHRyYW5nIGNoYXRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgOiBzdGF0ZS5hdXRoXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoYXQpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9fcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29ucGFueVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLWFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tYWNjb3VudC1ncm91cC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X25hbWUgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tdXBkYXRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHsgdGhpcy5wcm9wcy5jb25maWcudGF4X2NvZGVfZGF0ZSB9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8taG9tZS1tYXAtbWFya2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3Nfc3RyZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfYWRkcmVzc19sb2NhbGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3NfcmVnaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfYWRkcmVzc19jb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCkgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2VsbHBob25lLW5mY1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXpeacrOOBrumbu+ipse+8mlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBcInRlbDpcIiArIHRoaXMucHJvcHMuY29uZmlnLnBob25lX29uZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY29uZmlnLnBob25lX29uZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jYXJkLWFjY291bnQtbWFpbC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IFwibWFpbHRvOlwiICsgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9tYWlsIH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbWFpbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbnRyby1jaGF0LXJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOOBguOBquOBn+OBr+engeOBn+OBoeOBruODgeODo+ODg+ODiOOCouOCq+OCpuODs+ODiOOCkuS9nOaIkOOBl+OAgeeuoeeQhuiAheOBi+OCieOCpOODs+OCu+ODs+ODhuOCo+ODluOCkuWPl+OBkeWPluOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NoYXRcIiA+44OB44Oj44OD44OI44Oa44O844K444Gr6KGM44GPPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfX3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY8OzIGzhu5dpXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4g44GC44Gq44Gf44Gu44OV44Or44ON44O844OgIDxpPuKctTwvaT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDjg6Hjg7zjg6vjgqLjg4njg6zjgrkgPGk+4py1PC9pPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDpm7voqbHnlarlj7cgPGk+4py1PC9pPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibW9iaWxlXCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2VuZC1tYWlsLWNvbnRhY3RcIj7jg6Hjg7zjg6vnrqHnkIbogIXjgavpgIHkv6E8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgOiBzdGF0ZS5hdXRoLFxyXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSZWdpc3RlcikiLCIvKiBwb2x5ZmlsbHMuanMgKi9cclxuLy8gaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcclxuLy8gaW1wb3J0ICdyZWFjdC1hcHAtcG9seWZpbGwvaWUxMSdcclxuaW1wb3J0ICdjb3JlLWpzJ1xyXG4vLy9mb3IgaWU5IFxyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuLyoqIElFOSwgSUUxMCBhbmQgSUUxMSByZXF1aXJlcyBhbGwgb2YgdGhlIGZvbGxvd2luZyBwb2x5ZmlsbHMuICoqL1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvc3ltYm9sJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL29iamVjdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9mdW5jdGlvbic7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9wYXJzZS1pbnQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvcGFyc2UtZmxvYXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvbnVtYmVyJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL21hdGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvc3RyaW5nJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL2RhdGUnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvYXJyYXknO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvcmVnZXhwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL21hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy93ZWFrLW1hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvYXJyYXknO1xyXG5cclxuaW1wb3J0ICdyYWYvcG9seWZpbGwnO1xyXG4vLy8gZm9yIHdlYnBhY2sgaW1wb3J0XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUmVkdWNlciBmcm9tICcuL3JlZHVjZXInXHJcblxyXG5pbXBvcnQgJy4vLi4vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcydcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoUmVkdWNlcik7XHJcbnN0b3JlLnN1YnNjcmliZShmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2PDsyB0aGF5IMSR4buVaSB0cm9uZyBSZWR1eCEhJylcclxuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpO1xyXG59KTtcclxuXHJcbi8vLyBteSBjb21wb25lbnRcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudC9BcHAuanN4J1xyXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJST09UXCIpO1xyXG5cclxuaWYgKHR5cGVvZiAoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnICYmIHdyYXBwZXIpIHtcclxuICAgIFxyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICwgd3JhcHBlcilcclxufWVsc2V7XHJcbiAgICBhbGVydChcIuOBk+OBruODluODqeOCpuOCtuOBp+OBr+OAgeOCouODl+ODquOCseODvOOCt+ODp+ODs+OBr+ato+W4uOOBq+WLleS9nOOBl+OBvuOBm+OCk+OAgiDjgqLjg4Pjg5fjgrDjg6zjg7zjg4njgZfjgabjgY/jgaDjgZXjgYRcIilcclxufVxyXG5cclxuIiwidmFyIHVzZXIgPSBudWxsXHJcbmlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG59XHJcblxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gdXNlciwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLlVTRVIuU0VUVEVSX1VTRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5pZiAodHlwZW9mIENPTkZJR19BUFAgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnN0IENPTkZJR19BUFAgPSBudWxsXHJcbn1cclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBDT05GSUdfQVBQLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuQ09ORklHLlNFVFRFUl9DT05GSUc6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vL3Row6ptIGPDoWMgcmVkdWNlciBmdW50aW9uIGPhuqduIMSRxrDhu6NjIGNvbWJpbmUgdsOgbyDEkcOieVxyXG5pbXBvcnQgU29ja2V0UmVkdWNlciBmcm9tIFwiLi9zb2NrZXQuanNcIlxyXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi9hdXRoLmpzXCJcclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9jb25maWcuanNcIlxyXG4vLy8vIGto4bufaSB04bqhbyAxIGJp4bq/biBiaeG7g3UgZGnhu4VuIFJFRFVDRVIgQUxMIFxyXG5jb25zdCBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIFxyXG4gICAgc29ja2V0OiBTb2NrZXRSZWR1Y2VyLFxyXG4gICAgYXV0aCAgOiBBdXRoLFxyXG4gICAgY29uZmlnOiBDb25maWcsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSZWR1Y2VyOyIsImltcG9ydCBUWVBFIGZyb20gJy4uL2FjdGlvbi90eXBlLmpzJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ja2V0UmVkdWNlcihzdGF0ZSA9IG51bGwgLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuU09DQ0tFVC5TRVRfU09DS0VUX0lPOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9