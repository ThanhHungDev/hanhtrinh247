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

var api = __webpack_require__(/*! ../../SPA/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../SPA/node_modules/css-loader/dist/cjs.js!../../SPA/node_modules/sass-loader/dist/cjs.js??ref--7-2!./chat.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!../BUILDER/SCSS/chat.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!../BUILDER/SCSS/chat.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--7-2!../BUILDER/SCSS/chat.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../SPA/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Regular\";\n  src: url(\"/font/KozGoPro/KozGoPro-Regular.otf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Bold\";\n  src: url(\"/font/KozGoPro/KozGoPro-Bold.otf\");\n}\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.AppComponent {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 15px;\n  text-align: left;\n}\n\n.btn-google-login {\n  display: inline-block;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.6rem 1.5rem 0.4rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: color-level(#3f51b5, -8);\n  color: color-level(#3f51b5, -8);\n  border: 2px solid #3f51b5;\n}\n.btn-google-login:hover {\n  background-color: #3f51b5;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn-google-login:focus, .btn-google-login.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn-google-login:disabled, .btn-google-login.disabled, fieldset:disabled .btn-google-login {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n.my-facebook-button-class {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 2px solid #3f51b5;\n}\n.my-facebook-button-class:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #3f51b5;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.my-facebook-button-class:focus, .my-facebook-button-class.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.my-facebook-button-class:disabled, .my-facebook-button-class.disabled, fieldset:disabled .my-facebook-button-class {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.my-facebook-button-class i.fa.fa-facebook {\n  margin-right: 5px;\n  font-size: 18px;\n}\n\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.btn-logout {\n  background-color: #e9ecef;\n  padding: 5px 10px;\n  font-size: 11px;\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid #adb5bd;\n  position: absolute;\n  right: 10px;\n  top: 40%;\n  cursor: pointer;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.component-sidebar-chat {\n  float: left;\n  width: 30%;\n  box-sizing: border-box;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: 50%;\n  border: 2px double #9175ca;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 60px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 10px;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.component-list-message .wrapper-list-message {\n  padding: 15px;\n  height: 400px;\n  overflow-y: scroll;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 60px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}\n.component-user-chat-sidebar {\n  position: relative;\n}\n.component-user-chat-sidebar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  bottom: 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.component-user-chat-sidebar .user-chat {\n  position: relative;\n  padding: 15px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #c7c6c6;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}\n.component-head-info {\n  position: relative;\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 10px;\n  color: #28a745;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat .chat-group {\n  width: 100%;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  background: -moz-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -webkit-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -o-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -ms-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n}\n.component-message-chat .chat-group .avatar {\n  max-width: 40px;\n  max-height: 40px;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content {\n  padding-left: 50px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  background: transparent !important;\n  font-size: 40px;\n  padding: 0 2px;\n  line-height: 1;\n}\n.component-message-chat .chat-group .message-content .text {\n  padding: 10px;\n  border-radius: 15px;\n  word-break: break-all;\n  background: -moz-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -webkit-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -o-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -ms-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}\n\n.component-list-emoji {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  padding: 10px;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  background-color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.component-list-emoji.first-show {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-list-emoji.show {\n  visibility: unset;\n  height: unset;\n  bottom: 100%;\n  left: 20px;\n  right: 20px;\n  opacity: 1;\n}\n\n.component-emoji {\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  color: #0d47a1;\n}\n\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  position: relative;\n  padding: 5px 80px 0 50px;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #e9ecef;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n  -ms-overflow-style: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 10px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: inline-block;\n  z-index: 1;\n  right: 45px;\n}\n.component-input-send-chat .hero-icon.react {\n  z-index: 1;\n  display: inline-block;\n  right: 10px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"󰅗\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}\n\n.component-register {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  padding: 5px;\n}\n.component-register:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-register .left__register {\n  float: left;\n  width: 40%;\n  padding: 10px;\n}\n.component-register .right__register {\n  float: right;\n  width: 60%;\n  padding: 10px;\n}\n@media (max-width: 768px) {\n  .component-register .left__register, .component-register .right__register {\n    float: none;\n    width: 100%;\n  }\n}\n.component-register .conpany {\n  line-height: 1;\n  font-size: 18px;\n}\n.component-register .register-address {\n  background: #f2f2f2 none repeat scroll 0 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  display: block;\n  margin: 10px 0;\n  padding: 10px 10px;\n  position: relative;\n}\n.component-register .register-address h6 {\n  font-weight: 100;\n  font-size: 15px;\n}\n.component-register .intro-chat-register {\n  font-size: 18px;\n  color: #f44336;\n}\n.component-register .form-input {\n  padding-top: 10px;\n}\n.component-register .form-input label {\n  font-size: 15px;\n  color: #212529;\n  display: block;\n  padding-bottom: 10px;\n}\n.component-register .form-input input {\n  display: block;\n  width: 100%;\n  padding: 8px 15px;\n  font-size: 16px;\n  border-radius: 0;\n  border: 1px solid #6c757d;\n  outline: none;\n}\n.component-register .form-input input:focus {\n  color: #0d47a1;\n  border: 1px solid #0d47a1;\n}\n.component-register .form-input i {\n  font-style: normal;\n  color: #dc3545;\n}\n.component-register .btn-send-mail-contact {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 2px solid #3f51b5;\n}\n.component-register .btn-send-mail-contact:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #3f51b5;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.component-register .btn-send-mail-contact:focus, .component-register .btn-send-mail-contact.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.component-register .btn-send-mail-contact:disabled, .component-register .btn-send-mail-contact.disabled, fieldset:disabled .component-register .btn-send-mail-contact {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(\"/font/IconFont/webfont.eot?v=1.4.57\");\n  src: url(\"/font/IconFont/webfont.eot?#iefix&v=1.4.57\") format(\"embedded-opentype\"), url(\"/font/IconFont/webfont.woff2?v=1.4.57\") format(\"woff2\"), url(\"/font/IconFont/webfont.woff?v=1.4.57\") format(\"woff\"), url(\"/font/IconFont/webfont.ttf?v=1.4.57\") format(\"truetype\"), url(\"/font/IconFont/webfont.svg?v=1.4.57\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-box-outline::before {\n  content: \"\\F0007\";\n}\ni.hero-icon.hero-account-edit-outline::before {\n  content: \"\\F0FFB\";\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-calendar::before {\n  content: \"\\F00ED\";\n}\ni.hero-icon.hero-calendar-month-outline::before {\n  content: \"\\F0E18\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-clock-check-outline::before {\n  content: \"\\F0FA9\";\n}\ni.hero-icon.hero-close::before {\n  content: \"\\F0156\";\n}\ni.hero-icon.hero-close-box-outline::before {\n  content: \"\\F0158\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-delete-variant::before {\n  content: \"\\F01B3\";\n}\ni.hero-icon.hero-email-check-outline::before {\n  content: \"\\F0AB2\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-eye-outline::before {\n  content: \"\\F06D0\";\n}\ni.hero-icon.hero-file-document-edit-outline::before {\n  content: \"\\F0DC9\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-format-page-break::before {\n  content: \"\\F06D7\";\n}\ni.hero-icon.hero-google::before {\n  content: \"\\F02AD\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-import-outline::before {\n  content: \"\\F0F9C\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-layers-search-outline::before {\n  content: \"\\F1207\";\n}\ni.hero-icon.hero-lock-outline::before {\n  content: \"\\F0341\";\n}\ni.hero-icon.hero-magnify-scan::before {\n  content: \"\\F1276\";\n}\ni.hero-icon.hero-menu-down::before {\n  content: \"\\F035D\";\n}\ni.hero-icon.hero-menu-down-outline::before {\n  content: \"\\F06B6\";\n}\ni.hero-icon.hero-message-bulleted::before {\n  content: \"\\F06A2\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-monitor-dashboard::before {\n  content: \"\\F0A07\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-scatter-plot-outline::before {\n  content: \"\\F0ECA\";\n}\ni.hero-icon.hero-segment::before {\n  content: \"\\F0ECB\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-snowflake-variant::before {\n  content: \"\\F0F2A\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-table-star::before {\n  content: \"\\F13CB\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-tag::before {\n  content: \"\\F04F9\";\n}\ni.hero-icon.hero-tag-heart::before {\n  content: \"\\F068B\";\n}\ni.hero-icon.hero-tag-heart-outline::before {\n  content: \"\\F0BCF\";\n}\ni.hero-icon.hero-tag-multiple-outline::before {\n  content: \"\\F12F7\";\n}\ni.hero-icon.hero-tag-text-outline::before {\n  content: \"\\F04FD\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-theme-light-dark::before {\n  content: \"\\F050E\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/action/index.js":
/*!*****************************!*\
  !*** ./src/action/index.js ***!
  \*****************************/
/*! exports provided: setterSocket, setterAuth, setterConvertation, setterMessage, changeActiveConvertation, addMessage, addMessageSendToMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterSocket", function() { return setterSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterAuth", function() { return setterAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterConvertation", function() { return setterConvertation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterMessage", function() { return setterMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeActiveConvertation", function() { return changeActiveConvertation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessageSendToMe", function() { return addMessageSendToMe; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./src/action/type.js");

function setterSocket(socket) {
  console.log(socket, " set socket ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].SOCCKET.SETTER,
    payload: socket
  };
}
function setterAuth(auth) {
  console.log(auth, " set auth ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH.SETTER,
    payload: auth
  };
}
function setterConvertation(conv) {
  console.log(conv, " set conv ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CONVERTATION.SETTER,
    payload: conv
  };
}
function setterMessage(mess) {
  console.log(mess, " set mess ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].MESSAGE.SETTER,
    payload: mess
  };
}
function changeActiveConvertation(id) {
  console.log(id, "changeActiveConvertation ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CONVERTATION.CHANGE,
    payload: id
  };
}
function addMessage(message) {
  console.log(message, " addMessage ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].MESSAGE.ADD_MESSAGE,
    payload: message
  };
}
function addMessageSendToMe(message) {
  console.log(message, " addMessageSendToMe ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_MESSAGE_SEND_TO_ME,
    payload: message
  };
}

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
    SETTER: "SOCCKET_SETTER"
  },
  AUTH: {
    SETTER: "AUTH_SETTER"
  },
  CONVERTATION: {
    SETTER: "CONVERTATION_SETTER",
    CHANGE: "CONVERTATION_CHANGE"
  },
  MESSAGE: {
    SETTER: "MESSAGE_SETTER",
    ADD_MESSAGE: "MESSAGE_ADD"
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
    key: "render",
    value: function render() {
      console.log("draw app");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "Application",
        className: "AppComponent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/chat",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/chat/register",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/chat/:slug",
        render: function render(_ref) {
          var match = _ref.match;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            match: match
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/admin/chat",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/admin/chat/register",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/admin/chat/:slug",
        render: function render(_ref2) {
          var match = _ref2.match;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            match: match
          });
        }
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
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/service.js */ "./src/library/service.js");
/* harmony import */ var _Sidebar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar.jsx */ "./src/component/Sidebar.jsx");
/* harmony import */ var _ListMessage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListMessage.jsx */ "./src/component/ListMessage.jsx");
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



 /// soccket 

 //// define




var Chat = /*#__PURE__*/function (_Component) {
  _inherits(Chat, _Component);

  var _super = _createSuper(Chat);

  function Chat() {
    _classCallCheck(this, Chat);

    return _super.apply(this, arguments);
  }

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.auth) {
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_3__["fetchAPIChannels"])(this.props.auth, this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.auth) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: "/chat/register"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-page-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListMessage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    config: state.config
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Chat));

/***/ }),

/***/ "./src/component/Convertation.jsx":
/*!****************************************!*\
  !*** ./src/component/Convertation.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Convertation = /*#__PURE__*/function (_Component) {
  _inherits(Convertation, _Component);

  var _super = _createSuper(Convertation);

  function Convertation() {
    var _this;

    _classCallCheck(this, Convertation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "changeActiveUser", function (id) {
      _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["changeActiveConvertation"])(id));

      document.getElementById("Application").classList.add('convertation-change');
    });

    return _this;
  }

  _createClass(Convertation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var conv = this.props.conv;
      var classActiveMessage = conv.isActive && 'active-message';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-user-chat-sidebar",
        onClick: function onClick() {
          return _this2.changeActiveUser(conv._id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classActiveMessage + " active user-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: conv.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, conv.name))));
    }
  }]);

  return Convertation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    convertations: state.convertation
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Convertation));

/***/ }),

/***/ "./src/component/Emoji.jsx":
/*!*********************************!*\
  !*** ./src/component/Emoji.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Emoji = /*#__PURE__*/function (_Component) {
  _inherits(Emoji, _Component);

  var _super = _createSuper(Emoji);

  function Emoji() {
    var _this;

    _classCallCheck(this, Emoji);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "addIconInputChat", function (event) {
      var input = document.getElementById("js-input-chat");

      if (input) {
        var content = input.value; /// add icon 

        content = content + _this.props.symbol;
        input.value = content;
      }
    });

    return _this;
  }

  _createClass(Emoji, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "component-emoji",
        onClick: this.addIconInputChat
      }, this.props.symbol);
    }
  }]);

  return Emoji;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Emoji);

/***/ }),

/***/ "./src/component/InputSend.jsx":
/*!*************************************!*\
  !*** ./src/component/InputSend.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ListEmoji_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListEmoji.jsx */ "./src/component/ListEmoji.jsx");
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/service.js */ "./src/library/service.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var InputSend = /*#__PURE__*/function (_Component) {
  _inherits(InputSend, _Component);

  var _super = _createSuper(InputSend);

  function InputSend(props) {
    var _this;

    _classCallCheck(this, InputSend);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "showListEmoji", function (event) {
      var emojis = document.getElementById("js-emojis");

      if (emojis) {
        emojis.classList.add("show-temp");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendMessageReactSubmit", function () {
      var _this$props = _this.props,
          convertations = _this$props.convertations,
          auth = _this$props.auth,
          convActive = convertations.find(function (convertations) {
        return convertations.isActive;
      });
      var objMess = {
        message: " 💝 ",
        style: "EMOJI",
        token: _this.props.auth.token,
        user: auth._id,
        channel_id: convActive._id,
        component: _assertThisInitialized(_this)
      };
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_3__["send"])(objMess);
    });

    _defineProperty(_assertThisInitialized(_this), "btnSendMessage", function () {
      var input = document.getElementById("js-input-chat");
      if (!input) return false;
      var _this$props2 = _this.props,
          convertations = _this$props2.convertations,
          auth = _this$props2.auth,
          convActive = convertations.find(function (convertations) {
        return convertations.isActive;
      });
      var objMess = {
        message: input.value,
        style: "",
        token: _this.props.auth.token,
        user: auth._id,
        channel_id: convActive._id,
        component: _assertThisInitialized(_this)
      };
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_3__["send"])(objMess);
      input.value = '';
      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendMessageDown", function (event) {
      var input = document.getElementById("js-input-chat");
      if (!input) return false;

      if (event.keyCode == 13 && !event.shiftKey) {
        var _this$props3 = _this.props,
            convertations = _this$props3.convertations,
            auth = _this$props3.auth,
            convActive = convertations.find(function (convertations) {
          return convertations.isActive;
        });
        var objMess = {
          message: event.target.value,
          style: "",
          token: _this.props.auth.token,
          user: auth._id,
          channel_id: convActive._id,
          component: _assertThisInitialized(_this)
        };
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_3__["send"])(objMess);
        input.value = '';

        _this.setState({
          sendChat: true
        });

        return false;
      } /// space character replace emoji


      if (event.keyCode == 32) {
        var content = input.value; /// get word last

        var words = content.trim().split(" ");
        var wordLastest = words[words.length - 1]; //// check have sysbol 

        var emojisCall = CONFIG_EMOJIS.filter(function (item) {
          return item.sign == wordLastest;
        });

        if (emojisCall.length) {
          /// add icon 
          var lastIndex = content.trim().lastIndexOf(" ");
          input.value = content.substring(0, lastIndex) + " " + emojisCall[0].symbol;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendMessageUp", function () {
      if (_this.state.sendChat) {
        _this.setState({
          sendChat: false
        });

        document.getElementById("js-input-chat").value = "";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendChatClick", function () {
      //// send class is write message
      document.getElementById("js-is-write-message").classList.add("follow-conversation");
    });

    _this.state = {
      sendChat: false
    };
    return _this;
  }

  _createClass(InputSend, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.onclick = function (event) {
        if (event.target) {
          if (event.target.classList.contains('component-emoji')) {
            return;
          }
        }

        var emojis = document.getElementById("js-emojis");

        if (emojis) {
          emojis.classList.remove("show");
          setTimeout(function () {
            if (emojis.classList.contains("show-temp")) {
              emojis.classList.remove("show-temp");
              emojis.classList.add("show");
            }
          }, 100);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var convertations = this.props.convertations,
          convActive = convertations.find(function (convertations) {
        return convertations.isActive;
      });

      if (!convActive) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-is-write-message",
        className: "component-input-send-chat "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-sticker-emoji emoticon",
        onClick: this.showListEmoji
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        id: "js-input-chat",
        onKeyDown: this.handleSendMessageDown,
        onKeyUp: this.handleSendMessageUp,
        onClick: this.handleSendChatClick,
        placeholder: "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u66F8\u304F..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-send-outline send",
        onClick: this.btnSendMessage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-heart-multiple-outline react",
        onClick: this.handleSendMessageReactSubmit
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListEmoji_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return InputSend;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    convertations: state.convertation,
    socket: state.socket
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(InputSend));

/***/ }),

/***/ "./src/component/LeftInforAuth.jsx":
/*!*****************************************!*\
  !*** ./src/component/LeftInforAuth.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MyLoginFacebook_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLoginFacebook.jsx */ "./src/component/MyLoginFacebook.jsx");
/* harmony import */ var _MyLoginGoogle_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyLoginGoogle.jsx */ "./src/component/MyLoginGoogle.jsx");
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






var LeftInforAuth = /*#__PURE__*/function (_Component) {
  _inherits(LeftInforAuth, _Component);

  var _super = _createSuper(LeftInforAuth);

  function LeftInforAuth() {
    _classCallCheck(this, LeftInforAuth);

    return _super.apply(this, arguments);
  }

  _createClass(LeftInforAuth, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, "\u30C1\u30E3\u30C3\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306E\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4E0A\u8A18\u306E\u60C5\u5831\u306E\u4FDD\u8B77\u306B\u52AA\u3081\u3066\u3044\u307E\u3059"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyLoginFacebook_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyLoginGoogle_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
    }
  }]);

  return LeftInforAuth;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    config: state.config
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(LeftInforAuth));

/***/ }),

/***/ "./src/component/ListEmoji.jsx":
/*!*************************************!*\
  !*** ./src/component/ListEmoji.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Emoji_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.jsx */ "./src/component/Emoji.jsx");
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




var ListEmoji = /*#__PURE__*/function (_Component) {
  _inherits(ListEmoji, _Component);

  var _super = _createSuper(ListEmoji);

  function ListEmoji(props) {
    _classCallCheck(this, ListEmoji);

    return _super.call(this, props);
  }

  _createClass(ListEmoji, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-emojis",
        className: "component-list-emoji"
      }, CONFIG_EMOJIS.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Emoji_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: item.sign,
          symbol: item.symbol,
          sign: item.sign
        });
      }));
    }
  }]);

  return ListEmoji;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListEmoji);

/***/ }),

/***/ "./src/component/ListMessage.jsx":
/*!***************************************!*\
  !*** ./src/component/ListMessage.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ListMessageHeader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListMessageHeader.jsx */ "./src/component/ListMessageHeader.jsx");
/* harmony import */ var _Message_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.jsx */ "./src/component/Message.jsx");
/* harmony import */ var _InputSend_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputSend.jsx */ "./src/component/InputSend.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
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






 // import MessageChatTyping from "./MessageChatTyping.jsx"

var ListMessage = /*#__PURE__*/function (_Component) {
  _inherits(ListMessage, _Component);

  var _super = _createSuper(ListMessage);

  function ListMessage() {
    _classCallCheck(this, ListMessage);

    return _super.apply(this, arguments);
  }

  _createClass(ListMessage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var domScroll = document.getElementById("js-scroll-to-bottom");
      var domWriter = document.getElementById("js-is-write-message");

      if (document.getElementById("Application").classList.contains('convertation-change')) {
        document.getElementById("Application").classList.remove('convertation-change');
        var domScroll = document.getElementById("js-scroll-to-bottom");
        var domWriter = document.getElementById("js-is-write-message");
        domScroll.scrollTop = domScroll.scrollHeight;
      } else if (domScroll && domWriter && domWriter.classList.contains('follow-conversation')) {
        domScroll.scrollTop = domScroll.scrollHeight;
      }

      if (domScroll) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(domScroll).on('scroll', function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).innerHeight() >= jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].scrollHeight) {
            document.getElementById("js-is-write-message").classList.add("follow-conversation");
          } else {
            document.getElementById("js-is-write-message").classList.remove("follow-conversation");
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          auth = _this$props.auth,
          convertations = _this$props.convertations;
      var convertationActive = convertations.find(function (convertations) {
        return convertations.isActive;
      });
      var messages = [];

      if (convertationActive) {
        messages = this.props.messages.find(function (mess) {
          return mess._id == convertationActive._id;
        });

        if (messages) {
          messages = messages.message_data;
        }

        if (!messages.length) {
          var contentMess = "口座情報： \n " + "Eメール：" + auth.email + "  \n " + "名前：" + auth.name + "  \n " + "モバイル：" + auth.mobile + "  \n " + "こんにちは、どうなされました？";
          messages = [{
            content: contentMess,
            createdAt: "2020-07-29T06:51:54.963Z",
            read: true,
            style: "",
            user: "ADMIN",
            _id: "ADMIN"
          }];
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-lst-messages",
        className: "component-list-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListMessageHeader_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-list-message",
        id: "js-scroll-to-bottom"
      }, messages && messages.map(function (message, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: "message-chat" + key,
          message: message
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputSend_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return ListMessage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    convertations: state.convertation,
    messages: state.message,
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ListMessage));

/***/ }),

/***/ "./src/component/ListMessageHeader.jsx":
/*!*********************************************!*\
  !*** ./src/component/ListMessageHeader.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var HeadInfo = /*#__PURE__*/function (_Component) {
  _inherits(HeadInfo, _Component);

  var _super = _createSuper(HeadInfo);

  function HeadInfo() {
    var _this;

    _classCallCheck(this, HeadInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "btnLogout", function () {
      localStorage.setItem('auth', null);

      _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["setterAuth"])(null));

      return false;
    });

    return _this;
  }

  _createClass(HeadInfo, [{
    key: "render",
    value: function render() {
      console.log("render lại head list message");
      var _this$props = this.props,
          auth = _this$props.auth,
          convertations = _this$props.convertations;
      var convertationActive = convertations.find(function (convertation) {
        return convertation.isActive;
      });

      if (!convertationActive) {
        return null;
      }

      var timeOnline = '口座情報： ' + auth.email + " - " + auth.mobile + " でログイン";

      if (auth.type != "local") {
        timeOnline = '口座情報： ' + auth.email + " - " + auth.type + " でログイン";
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-head-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-active-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar active-online"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: convertationActive.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, convertationActive.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: (convertationActive.isOnline ? "active-now" : '') + " time-online"
      }, timeOnline))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn-logout",
        onClick: this.btnLogout
      }, "\u30ED\u30B0\u30A2\u30A6\u30C8"));
    }
  }]);

  return HeadInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    convertations: state.convertation,
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(HeadInfo));

/***/ }),

/***/ "./src/component/Message.jsx":
/*!***********************************!*\
  !*** ./src/component/Message.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
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





var Message = /*#__PURE__*/function (_Component) {
  _inherits(Message, _Component);

  var _super = _createSuper(Message);

  function Message() {
    _classCallCheck(this, Message);

    return _super.apply(this, arguments);
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          convertations = _this$props.convertations,
          auth = _this$props.auth,
          convActive = convertations.find(function (convertations) {
        return convertations.isActive;
      }),
          classTypeMessage = message.user != auth._id ? 'float-left' : 'float-right by-me';

      if (!convActive) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-message-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classTypeMessage + " chat-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: convActive.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: message.style + " text"
      }, message.content.split('\n').map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: index
        }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
      })))));
    }
  }]);

  return Message;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    convertations: state.convertation,
    config: state.config
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Message));

/***/ }),

/***/ "./src/component/MyLoginFacebook.jsx":
/*!*******************************************!*\
  !*** ./src/component/MyLoginFacebook.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MyLoginFacebook = /*#__PURE__*/function (_Component) {
  _inherits(MyLoginFacebook, _Component);

  var _super = _createSuper(MyLoginFacebook);

  function MyLoginFacebook() {
    var _this;

    _classCallCheck(this, MyLoginFacebook);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentClicked", function () {});

    _defineProperty(_assertThisInitialized(_this), "responseFacebook", function (response) {
      var authen = {
        accessToken: response.accessToken,
        userID: response.userID,
        name: response.name,
        email: response.email,
        avatar: response.picture.data.url,
        type: "facebook",
        mobile: "1234567890"
      };

      _this.registerLoginChat(authen);
    });

    _defineProperty(_assertThisInitialized(_this), "registerLoginChat", function (authen) {
      var action = _this.props.config.url_realtime + "/api/register-chat";
      fetch(action, {
        method: "POST",
        dataType: "JSON",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(authen)
      }).then(function (resp) {
        if (!resp.ok) {
          return resp.json().then(function (data) {
            throw {
              message: data.message,
              status: resp.status,
              error: data.errors
            };
          });
        }

        return resp.json();
      }).then(function (response) {
        if (response.data) {
          _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__["setterAuth"])(_objectSpread({}, response.data)));
        }
      })["catch"](function (error) {
        console.log("fetch err: " + error.message, error);
      });
    });

    return _this;
  }

  _createClass(MyLoginFacebook, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_facebook_login__WEBPACK_IMPORTED_MODULE_1___default.a, {
        appId: "618579045460962",
        autoLoad: false,
        fields: "name,email,picture",
        cssClass: "my-facebook-button-class",
        icon: "fa-facebook",
        textButton: "Facebook\u3067\u30ED\u30B0\u30A4\u30F3",
        onClick: this.componentClicked,
        callback: this.responseFacebook
      });
    }
  }]);

  return MyLoginFacebook;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    config: state.config
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(MyLoginFacebook));

/***/ }),

/***/ "./src/component/MyLoginGoogle.jsx":
/*!*****************************************!*\
  !*** ./src/component/MyLoginGoogle.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MyLoginGoogle = /*#__PURE__*/function (_Component) {
  _inherits(MyLoginGoogle, _Component);

  var _super = _createSuper(MyLoginGoogle);

  function MyLoginGoogle(props) {
    var _this;

    _classCallCheck(this, MyLoginGoogle);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "componentClicked", function () {});

    _defineProperty(_assertThisInitialized(_this), "responseGoogleError", function (response) {
      console.log(response, "lỗi responseGoogleError");
      console.log(response, "responseGoogleError");
    });

    _defineProperty(_assertThisInitialized(_this), "responseGoogle", function (response) {
      console.log(response, "đúng responseGoogle");
      var authen = {
        accessToken: response.accessToken,
        userID: response.profileObj.googleId,
        name: response.profileObj.name,
        email: response.profileObj.email,
        avatar: response.profileObj.imageUrl,
        type: "google",
        mobile: "1234567890"
      };

      _this.registerLoginChat(authen);
    });

    _defineProperty(_assertThisInitialized(_this), "registerLoginChat", function (authen) {
      var action = _this.props.config.url_realtime + "/api/register-chat";
      fetch(action, {
        method: "POST",
        dataType: "JSON",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(authen)
      }).then(function (resp) {
        if (!resp.ok) {
          return resp.json().then(function (data) {
            throw {
              message: data.message,
              status: resp.status,
              error: data.errors
            };
          });
        }

        return resp.json();
      }).then(function (response) {
        if (response.data) {
          _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__["setterAuth"])(_objectSpread({}, response.data)));
        }
      })["catch"](function (error) {
        console.log("fetch err: " + error.message, error);
      });
    });

    return _this;
  }

  _createClass(MyLoginGoogle, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_1___default.a, {
        clientId: "187185206926-smqoej8k4aj9k3sdkq46bogdf4eojvn6.apps.googleusercontent.com",
        render: function render(renderProps) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: renderProps.onClick,
            className: "btn-google-login"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "hero-icon hero-google"
          }), "Google\u3067\u30ED\u30B0\u30A4\u30F3");
        } // buttonText=""
        ,
        icon: "fa-google",
        cssClass: "my-google-button-class",
        onSuccess: this.responseGoogle,
        onFailure: this.responseGoogleError,
        cookiePolicy: 'single_host_origin'
      });
    }
  }]);

  return MyLoginGoogle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    config: state.config
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(MyLoginGoogle));

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _LeftInforAuth_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LeftInforAuth.jsx */ "./src/component/LeftInforAuth.jsx");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "invalidLoginChat", function () {
      if (!_this.name.value) {
        return {
          errorField: 'email',
          message: "name buộc phải nhập"
        };
      }

      if (!_this.email.value) {
        return {
          errorField: 'email',
          message: "email buộc phải nhập"
        };
      }

      if (!_this.mobile.value) {
        return {
          errorField: 'email',
          message: "mobile buộc phải nhập"
        };
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "LoginChat", function (e) {
      var email = _this.email.value,
          name = _this.name.value,
          mobile = _this.mobile.value,
          validator = _this.invalidLoginChat();

      if (validator) {
        _this.setState({
          alert: validator.message,
          progress: false
        });

        return false;
      }

      _this.setState({
        alert: false,
        progress: true
      }, function () {
        var action = _this.props.config.url_realtime + "/api/register-chat";
        fetch(action, {
          method: "POST",
          dataType: "JSON",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            name: name,
            mobile: mobile
          })
        }).then(function (resp) {
          if (!resp.ok) {
            return resp.json().then(function (data) {
              throw {
                message: data.message,
                status: resp.status,
                error: data.errors
              };
            });
          }

          return resp.json();
        }).then(function (response) {
          _this.setState({
            alert: false,
            progress: false
          }, function () {
            if (response.data) {
              this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_4__["setterAuth"])(_objectSpread({}, response.data)));
            }
          });
        })["catch"](function (error) {
          _this.setState({
            alert: error.message,
            progress: false
          });
        });
      });

      e.preventDefault();
    });

    _this.state = {
      alert: false,
      progress: false
    };
    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.auth) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: "/chat/consulting-web-design"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-register"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LeftInforAuth_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right__register"
      }, this.state.alert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-danger"
      }, this.state.alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " \u3042\u306A\u305F\u306E\u30D5\u30EB\u30CD\u30FC\u30E0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\u2735")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "name",
        type: "text",
        ref: function ref(input) {
          return _this2.name = input;
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " \u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\u2735")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "email",
        type: "text",
        ref: function ref(input) {
          return _this2.email = input;
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " \u96FB\u8A71\u756A\u53F7 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\u2735")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "mobile",
        type: "text",
        ref: function ref(input) {
          return _this2.mobile = input;
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn-send-mail-contact",
        onClick: this.LoginChat
      }, " \u30E1\u30FC\u30EB\u7BA1\u7406\u8005\u306B\u9001\u4FE1"), this.state.progress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress progress-success"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-loadding"
      }))));
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

/***/ "./src/component/Sidebar.jsx":
/*!***********************************!*\
  !*** ./src/component/Sidebar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _SidebarLstConvertation_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarLstConvertation.jsx */ "./src/component/SidebarLstConvertation.jsx");
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





var Sidebar = /*#__PURE__*/function (_Component) {
  _inherits(Sidebar, _Component);

  var _super = _createSuper(Sidebar);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _super.apply(this, arguments);
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      ////set height component
      var sidebar = document.getElementById("js-sidebar-chat"),
          message = document.getElementById("js-lst-messages");

      if (sidebar && message) {
        sidebar.style.height = message.clientHeight + "px";
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("render sidebar");
      var auth = this.props.auth;
      auth.avatar = '/upload/images/avatar.jpg';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-sidebar-chat",
        className: "component-sidebar-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "myinfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar active-online"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: auth.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, auth.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list-user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarLstConvertation_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    config: state.config
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Sidebar));

/***/ }),

/***/ "./src/component/SidebarLstConvertation.jsx":
/*!**************************************************!*\
  !*** ./src/component/SidebarLstConvertation.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Convertation_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Convertation.jsx */ "./src/component/Convertation.jsx");
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





var SidebarLstConvertation = /*#__PURE__*/function (_Component) {
  _inherits(SidebarLstConvertation, _Component);

  var _super = _createSuper(SidebarLstConvertation);

  function SidebarLstConvertation() {
    _classCallCheck(this, SidebarLstConvertation);

    return _super.apply(this, arguments);
  }

  _createClass(SidebarLstConvertation, [{
    key: "render",
    value: function render() {
      var convertations = this.props.convertations;
      console.log("render convertation");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-list-user"
      }, convertations && convertations.map(function (convertation) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Convertation_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: convertation._id,
          conv: convertation
        });
      }));
    }
  }]);

  return SidebarLstConvertation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    convertations: state.convertation
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SidebarLstConvertation));

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

/***/ "./src/library/service.js":
/*!********************************!*\
  !*** ./src/library/service.js ***!
  \********************************/
/*! exports provided: socketInitialConnect, joinRoomInit, fetchAPIChannels, send */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketInitialConnect", function() { return socketInitialConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinRoomInit", function() { return joinRoomInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAPIChannels", function() { return fetchAPIChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony import */ var _socket_listenner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket_listenner */ "./src/library/socket_listenner.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CONFIG = CONFIG_APP,
    EVENT = CONFIG_EVENT;
var socket = null;
function socketInitialConnect(socketIOClient, instanceApp) {
  console.log(CONFIG.url_realtime);
  socket = socketIOClient(CONFIG.url_realtime);
  var ApplicationDom = document.getElementById("Application");
  socket.on('connect', function () {
    ApplicationDom && ApplicationDom.classList.remove("connect-socket-error"); //// set config

    Object(_socket_listenner__WEBPACK_IMPORTED_MODULE_0__["socketListenner"])(socket, instanceApp);
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterSocket"])(socket)); /// joinRoomInit

    joinRoomInit(instanceApp.props.auth);
  });
  socket.on('disconnect', function () {
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterSocket"])(null));
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error");
    window.location.href = CONFIG.asset;
  });
  socket.on('connect_error', function () {
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error");
    window.location.href = CONFIG.asset;
  });
}
function joinRoomInit(auth) {
  socket.emit(EVENT.JOIN_CHANNEL, auth);
}
function fetchAPIChannels(option, component) {
  var match = component.props.match,
      slug = null,
      convertationIdActive = null;

  if (match) {
    slug = match.params.slug;
  }

  var action = component.props.config.url_realtime + "/api/channels?";

  if (option._id) {
    action += "&id=" + option._id;
  }

  if (option.email) {
    action += "&email=" + option.email;
  }

  if (option.mobile) {
    action += "&mobile=" + option.mobile;
  }

  console.log(action);
  fetch(action, {
    method: "GET",
    dataType: "JSON",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (resp) {
    if (!resp.ok) {
      return resp.json().then(function (data) {
        throw {
          message: data.message,
          status: resp.status,
          error: data.errors
        };
      });
    }

    return resp.json();
  }).then(function (response) {
    if (response.data) {
      var convertations = [],
          messages = [];

      if (response.data.channels) {
        response.data.channels.map(function (conv) {
          var convertation = _objectSpread(_objectSpread({}, conv.user[0]), {}, {
            user_id: component.props.auth._id,
            _id: conv._id
          });

          if (slug && convertation.slug == slug) {
            convertationIdActive = convertation._id;
          }

          var message = {
            _id: conv._id,
            message_data: conv.message || []
          };
          convertations.push(convertation);
          messages.push(message);
        });
        component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterConvertation"])(convertations));
        component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterMessage"])(messages));
        convertationIdActive && component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["changeActiveConvertation"])(convertationIdActive));
        socketInitialConnect(socket_io_client__WEBPACK_IMPORTED_MODULE_2___default.a, component);
      }

      if (response.data.token) {
        var auth = component.props.auth;
        auth.token = response.data.token;
        component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterAuth"])(auth));
      }
    }
  })["catch"](function (error) {
    localStorage.setItem('auth', null);
    component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterAuth"])(null));
  });
}
function send(message) {
  var _message = message,
      message = _message.message,
      style = _message.style,
      token = _message.token,
      user = _message.user,
      channel_id = _message.channel_id,
      component = _message.component;
  message = message.replace(/(\n\s*?\n)\s*\n/, '$1');
  socket.emit(EVENT.SEND_MESSAGE, {
    message: message,
    style: style,
    token: token,
    user: user,
    channel_id: channel_id
  });
  component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["addMessage"])({
    _id: channel_id,
    message_data: {
      type: true,
      read: true,
      content: message,
      style: style,
      token: token,
      user: user
    }
  }));
}

/***/ }),

/***/ "./src/library/socket_listenner.js":
/*!*****************************************!*\
  !*** ./src/library/socket_listenner.js ***!
  \*****************************************/
/*! exports provided: socketListenner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketListenner", function() { return socketListenner; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
var EVENT = CONFIG_EVENT;

function socketListenner(socket, instanceApp) {
  socket.on(EVENT.RESPONSE_MESSAGE, function (message) {
    console.log("đã vào " + EVENT.RESPONSE_MESSAGE, message);
    var auth = instanceApp.props.auth;

    if (message.token != auth.token) {
      message.message_data._id = auth._id;
      instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_0__["addMessage"])(message));
    }
  });
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
var auth = null;

if (typeof Storage !== 'undefined') {
  auth = JSON.parse(localStorage.getItem('auth'));
}


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : auth;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH.SETTER:
      localStorage.setItem('auth', JSON.stringify(action.payload));
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

/***/ "./src/reducer/convertation.js":
/*!*************************************!*\
  !*** ./src/reducer/convertation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CONVERTATION.SETTER:
      return action.payload;

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CONVERTATION.CHANGE:
      return state.map(function (item) {
        if (item._id === action.payload) {
          return _objectSpread(_objectSpread({}, item), {}, {
            isActive: true
          });
        }

        return _objectSpread(_objectSpread({}, item), {}, {
          isActive: false
        });
      });

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
/* harmony import */ var _convertation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./convertation.js */ "./src/reducer/convertation.js");
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.js */ "./src/reducer/message.js");
 ///thêm các reducer funtion cần được combine vào đây





 //// khởi tạo 1 biến biểu diễn REDUCER ALL 

var Reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  socket: _socket_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _auth_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  config: _config_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  convertation: _convertation_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  message: _message_js__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Reducer);

/***/ }),

/***/ "./src/reducer/message.js":
/*!********************************!*\
  !*** ./src/reducer/message.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var messages = [];

if (typeof Storage !== 'undefined') {
  var DataStringMessages = localStorage.getItem('messages');

  if (DataStringMessages) {
    messages = JSON.parse(DataStringMessages);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : messages;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    switch (action.type) {
      case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].MESSAGE.SETTER:
        return action.payload;

      case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].MESSAGE.ADD_MESSAGE:
        var messages = state.map(function (message) {
          if (message._id === action.payload._id) {
            return _objectSpread(_objectSpread({}, message), {}, {
              message_data: [].concat(_toConsumableArray(message.message_data), [action.payload.message_data])
            });
          }

          return message;
        });
        return messages;

      default:
        return state;
    }
  }();
});

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
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].SOCCKET.SETTER:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JVSUxERVIvU0NTUy9jaGF0LnNjc3M/NjFkZCIsIndlYnBhY2s6Ly8vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NvbnZlcnRhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FbW9qaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9JbnB1dFNlbmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGVmdEluZm9yQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9MaXN0RW1vamkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2VIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9NeUxvZ2luRmFjZWJvb2suanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTXlMb2dpbkdvb2dsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9SZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9TaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5L3NvY2tldF9saXN0ZW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvY29udmVydGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvc29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsic2V0dGVyU29ja2V0Iiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJUWVBFIiwiU09DQ0tFVCIsIlNFVFRFUiIsInBheWxvYWQiLCJzZXR0ZXJBdXRoIiwiYXV0aCIsIkFVVEgiLCJzZXR0ZXJDb252ZXJ0YXRpb24iLCJjb252IiwiQ09OVkVSVEFUSU9OIiwic2V0dGVyTWVzc2FnZSIsIm1lc3MiLCJNRVNTQUdFIiwiY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIiwiaWQiLCJDSEFOR0UiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsIkFERF9NRVNTQUdFIiwiYWRkTWVzc2FnZVNlbmRUb01lIiwiQ0hBTk5FTCIsIkFERF9NRVNTQUdFX1NFTkRfVE9fTUUiLCJDT05GSUciLCJTRVRURVJfQ09ORklHIiwiQXBwIiwicHJvcHMiLCJtYXRjaCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpZW50IiwiY29ubmVjdCIsIkNoYXQiLCJmZXRjaEFQSUNoYW5uZWxzIiwiY29uZmlnIiwiQ29udmVydGF0aW9uIiwiZGlzcGF0Y2giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwiaXNBY3RpdmUiLCJjaGFuZ2VBY3RpdmVVc2VyIiwiX2lkIiwiYXZhdGFyIiwibmFtZSIsImNvbnZlcnRhdGlvbnMiLCJjb252ZXJ0YXRpb24iLCJFbW9qaSIsImV2ZW50IiwiaW5wdXQiLCJjb250ZW50IiwidmFsdWUiLCJzeW1ib2wiLCJhZGRJY29uSW5wdXRDaGF0IiwiSW5wdXRTZW5kIiwiZW1vamlzIiwiY29udkFjdGl2ZSIsImZpbmQiLCJvYmpNZXNzIiwic3R5bGUiLCJ0b2tlbiIsInVzZXIiLCJjaGFubmVsX2lkIiwiY29tcG9uZW50Iiwic2VuZCIsImtleUNvZGUiLCJzaGlmdEtleSIsInRhcmdldCIsInNldFN0YXRlIiwic2VuZENoYXQiLCJ3b3JkcyIsInRyaW0iLCJzcGxpdCIsIndvcmRMYXN0ZXN0IiwibGVuZ3RoIiwiZW1vamlzQ2FsbCIsIkNPTkZJR19FTU9KSVMiLCJmaWx0ZXIiLCJpdGVtIiwic2lnbiIsImxhc3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwid2luZG93Iiwib25jbGljayIsImNvbnRhaW5zIiwicmVtb3ZlIiwic2V0VGltZW91dCIsInNob3dMaXN0RW1vamkiLCJoYW5kbGVTZW5kTWVzc2FnZURvd24iLCJoYW5kbGVTZW5kTWVzc2FnZVVwIiwiaGFuZGxlU2VuZENoYXRDbGljayIsImJ0blNlbmRNZXNzYWdlIiwiaGFuZGxlU2VuZE1lc3NhZ2VSZWFjdFN1Ym1pdCIsIkxlZnRJbmZvckF1dGgiLCJjb21wYW55X25hbWUiLCJ0YXhfY29kZV9kYXRlIiwiY29tcGFueV9hZGRyZXNzX3N0cmVldCIsImNvbXBhbnlfYWRkcmVzc19sb2NhbGl0eSIsImNvbXBhbnlfYWRkcmVzc19yZWdpb24iLCJjb21wYW55X2FkZHJlc3NfY291bnRyeSIsImpvaW4iLCJwaG9uZV9vbmUiLCJjb21wYW55X21haWwiLCJMaXN0RW1vamkiLCJtYXAiLCJMaXN0TWVzc2FnZSIsImRvbVNjcm9sbCIsImRvbVdyaXRlciIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIiQiLCJvbiIsImlubmVySGVpZ2h0IiwiY29udmVydGF0aW9uQWN0aXZlIiwibWVzc2FnZXMiLCJtZXNzYWdlX2RhdGEiLCJjb250ZW50TWVzcyIsImVtYWlsIiwibW9iaWxlIiwiY3JlYXRlZEF0IiwicmVhZCIsImtleSIsIkhlYWRJbmZvIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRpbWVPbmxpbmUiLCJpc09ubGluZSIsImJ0bkxvZ291dCIsIk1lc3NhZ2UiLCJjbGFzc1R5cGVNZXNzYWdlIiwiaW5kZXgiLCJNeUxvZ2luRmFjZWJvb2siLCJyZXNwb25zZSIsImF1dGhlbiIsImFjY2Vzc1Rva2VuIiwidXNlcklEIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJyZWdpc3RlckxvZ2luQ2hhdCIsImFjdGlvbiIsInVybF9yZWFsdGltZSIsImZldGNoIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcCIsIm9rIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiZXJyb3JzIiwiY29tcG9uZW50Q2xpY2tlZCIsInJlc3BvbnNlRmFjZWJvb2siLCJNeUxvZ2luR29vZ2xlIiwicHJvZmlsZU9iaiIsImdvb2dsZUlkIiwiaW1hZ2VVcmwiLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlR29vZ2xlRXJyb3IiLCJSZWdpc3RlciIsImVycm9yRmllbGQiLCJlIiwidmFsaWRhdG9yIiwiaW52YWxpZExvZ2luQ2hhdCIsImFsZXJ0IiwicHJvZ3Jlc3MiLCJwcmV2ZW50RGVmYXVsdCIsIkxvZ2luQ2hhdCIsIlNpZGViYXIiLCJzaWRlYmFyIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiU2lkZWJhckxzdENvbnZlcnRhdGlvbiIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJSZWR1Y2VyIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJ3cmFwcGVyIiwiU3RvcmFnZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiQ09ORklHX0FQUCIsIkVWRU5UIiwiQ09ORklHX0VWRU5UIiwic29ja2V0SW5pdGlhbENvbm5lY3QiLCJzb2NrZXRJT0NsaWVudCIsImluc3RhbmNlQXBwIiwiQXBwbGljYXRpb25Eb20iLCJzb2NrZXRMaXN0ZW5uZXIiLCJqb2luUm9vbUluaXQiLCJsb2NhdGlvbiIsImhyZWYiLCJhc3NldCIsImVtaXQiLCJKT0lOX0NIQU5ORUwiLCJvcHRpb24iLCJzbHVnIiwiY29udmVydGF0aW9uSWRBY3RpdmUiLCJwYXJhbXMiLCJjaGFubmVscyIsInVzZXJfaWQiLCJwdXNoIiwicmVwbGFjZSIsIlNFTkRfTUVTU0FHRSIsIlJFU1BPTlNFX01FU1NBR0UiLCJwYXJzZSIsImdldEl0ZW0iLCJjb21iaW5lUmVkdWNlcnMiLCJTb2NrZXRSZWR1Y2VyIiwiQXV0aCIsIkNvbmZpZyIsIkRhdGFTdHJpbmdNZXNzYWdlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7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R0FBTixDQUFXLFVBQUExRixPQUFPLEVBQUk7QUFDakMsY0FBR0EsT0FBTyxDQUFDMkIsR0FBUixLQUFnQm1HLE1BQU0sQ0FBQzVJLE9BQVAsQ0FBZXlDLEdBQWxDLEVBQXVDO0FBQ25DLG1EQUFZM0IsT0FBWjtBQUFxQnFHLDBCQUFZLCtCQUFPckcsT0FBTyxDQUFDcUcsWUFBZixJQUE2QnlCLE1BQU0sQ0FBQzVJLE9BQVAsQ0FBZW1ILFlBQTVDO0FBQWpDO0FBQ0g7O0FBQ0QsaUJBQU9yRyxPQUFQO0FBQ0gsU0FMYyxDQUFmO0FBTUEsZUFBT29HLFFBQVA7O0FBQ0o7QUFDSSxlQUFPeEYsS0FBUDtBQWRSO0FBZ0JILEdBakJjO0FBQUEsQzs7Ozs7Ozs7Ozs7O0FDWmY7QUFBQTtBQUFBO0FBQUE7QUFDZSxTQUFTOEwsYUFBVCxHQUE4QztBQUFBLE1BQXZCOUwsS0FBdUIsdUVBQWYsSUFBZTtBQUFBLE1BQVJrSCxNQUFROztBQUN6RCxVQUFRQSxNQUFNLENBQUNoSixJQUFmO0FBQ0ksU0FBS0MsdURBQUksQ0FBQ0MsT0FBTCxDQUFhQyxNQUFsQjtBQUNJLGFBQU82SSxNQUFNLENBQUM1SSxPQUFkOztBQUNKO0FBQ0ksYUFBTzBCLEtBQVA7QUFKUjtBQU1ILEM7Ozs7Ozs7Ozs7O0FDUkQsZSIsImZpbGUiOiJqcy9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0yIS4vY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL1NQQS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3pHb1Byby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9Lb3pHb1Byby9Lb3pHb1Byby1SZWd1bGFyLm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS296R29Qcm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvS296R29Qcm8vS296R29Qcm8tQm9sZC5vdGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5BcHBDb21wb25lbnQge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uYnRuLWdvb2dsZS1sb2dpbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjZyZW0gMS41cmVtIDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMC44MXJlbTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW46IDAuMzc1cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1sZXZlbCgjM2Y1MWI1LCAtOCk7XFxuICBjb2xvcjogY29sb3ItbGV2ZWwoIzNmNTFiNSwgLTgpO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzNmNTFiNTtcXG59XFxuLmJ0bi1nb29nbGUtbG9naW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGNvbG9yLWxldmVsKCMzZjUxYjUsIC04KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5idG4tZ29vZ2xlLWxvZ2luOmZvY3VzLCAuYnRuLWdvb2dsZS1sb2dpbi5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5idG4tZ29vZ2xlLWxvZ2luOmRpc2FibGVkLCAuYnRuLWdvb2dsZS1sb2dpbi5kaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLmJ0bi1nb29nbGUtbG9naW4ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cXG5cXG4ubXktZmFjZWJvb2stYnV0dG9uLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbSAwLjZyZW07XFxuICBmb250LXNpemU6IDAuODFyZW07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luOiAwLjM3NXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzNmNTFiNTtcXG59XFxuLm15LWZhY2Vib29rLWJ1dHRvbi1jbGFzczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgY29sb3ItbGV2ZWwoIzNmNTFiNSwgLTgpO1xcbiAgY29sb3I6ICMzZjUxYjU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLm15LWZhY2Vib29rLWJ1dHRvbi1jbGFzczpmb2N1cywgLm15LWZhY2Vib29rLWJ1dHRvbi1jbGFzcy5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5teS1mYWNlYm9vay1idXR0b24tY2xhc3M6ZGlzYWJsZWQsIC5teS1mYWNlYm9vay1idXR0b24tY2xhc3MuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5teS1mYWNlYm9vay1idXR0b24tY2xhc3Mge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cXG4ubXktZmFjZWJvb2stYnV0dG9uLWNsYXNzIGkuZmEuZmEtZmFjZWJvb2sge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5iZy1jaGF0LXRlbWFsYXRlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5idG4tbG9nb3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZGI1YmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ud3JhcHBlci1wYWdlLWNoYXQge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLndyYXBwZXItcGFnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAjRjVGNUY1O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tb3otc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW8tc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW8tc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1zLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubXlpbmZvIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFweDtcXG4gIGxlZnQ6IDFweDtcXG4gIHJpZ2h0OiAxcHg7XFxuICBib3R0b206IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjOTE3NWNhO1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhci5hY3RpdmUtb25saW5lIHtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjMDBjODUxO1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5uYW1lIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtYXgtd2lkdGg6IDI3Y2g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgfVxcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gICAgbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIC5teWluZm8ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbiAgLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgfVxcbiAgLm15aW5mbyAuYXZhdGFyIC5uYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tb3otc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tb3otc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW8tc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1zLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG4udGljb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDE3cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICB3aWR0aDogNnB4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgxKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTUwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgyKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgzKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNDUwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDQwMG1zO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICAyOCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIH1cXG4gIDQ0JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgfVxcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzZjNjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZSAuc3RhdGUtYXZhdGFyIHtcXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZSAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDU7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA3cHggN3B4IDdweCA1NXB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLmxhc3QtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIH1cXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogN3B4IDdweCA3cHggNTVweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAudGltZS1vbmxpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzI4YTc0NTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lLmFjdGl2ZS1ub3cge1xcbiAgY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAuYXZhdGFyIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIHtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLkVNT0pJIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwYWRkaW5nOiAwIDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50ZXh0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dC5FTU9KSSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnRleHQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50eXBpbmctdGV4dCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5jb21wb25lbnQtbGlzdC1lbW9qaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICByaWdodDogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5maXJzdC1zaG93IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5zaG93IHtcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcbiAgaGVpZ2h0OiB1bnNldDtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIGxlZnQ6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb21wb25lbnQtZW1vamkge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA4MHB4IDAgNTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0N2ExO1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgPiBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDExO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgY29sb3I6ICMwZDZlZmQ7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5oZXJvLWljb24uZW1vdGljb24ge1xcbiAgbGVmdDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5zZW5kIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDE7XFxuICByaWdodDogNDVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5yZWFjdCB7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlIHtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgY29udGVudDogXFxcIvOwhZdcXFwiO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTpob3ZlciBpbWcge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTpob3ZlcjphZnRlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgaW1nIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLmNvbXBvbmVudC1yZWdpc3RlciB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmxlZnRfX3JlZ2lzdGVyIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLnJpZ2h0X19yZWdpc3RlciB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXJlZ2lzdGVyIC5sZWZ0X19yZWdpc3RlciwgLmNvbXBvbmVudC1yZWdpc3RlciAucmlnaHRfX3JlZ2lzdGVyIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5jb25wYW55IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5yZWdpc3Rlci1hZGRyZXNzIHtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5yZWdpc3Rlci1hZGRyZXNzIGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmludHJvLWNoYXQtcmVnaXN0ZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICNmNDQzMzY7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBpbnB1dDpmb2N1cyB7XFxuICBjb2xvcjogIzBkNDdhMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgaSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBjb2xvcjogI2RjMzU0NTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbSAwLjZyZW07XFxuICBmb250LXNpemU6IDAuODFyZW07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luOiAwLjM3NXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzNmNTFiNTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBjb2xvci1sZXZlbCgjM2Y1MWI1LCAtOCk7XFxuICBjb2xvcjogIzNmNTFiNTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Q6Zm9jdXMsIC5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdC5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdDpkaXNhYmxlZCwgLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0LmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAuY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Qge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5lb3Q/dj0xLjQuNTdcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9JY29uRm9udC93ZWJmb250LmVvdD8jaWVmaXgmdj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC53b2ZmMj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIvZm9udC9JY29uRm9udC93ZWJmb250LndvZmY/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFxcXCIvZm9udC9JY29uRm9udC93ZWJmb250LnR0Zj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFxcXCIvZm9udC9JY29uRm9udC93ZWJmb250LnN2Zz92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5pLmhlcm8taWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuaS5oZXJvLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDA3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LWVkaXQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGRkJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtZ3JvdXAtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCNThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtdGllLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMENBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1haXJwb3J0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg0QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXJyb3ctdXAtYm9sZC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MzlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWF1dG8tZml4OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA2OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYmFsbG90LXJlY291bnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDM0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhbGVuZGFyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDBFRFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FsZW5kYXItbW9udGgtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcmQtYWNjb3VudC1tYWlsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTk4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYXJ0LXBsdXM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTEyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTFDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtbmZjOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VydGlmaWNhdGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExODhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb2NrLWNoZWNrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkE5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG9zZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNTZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb3NlLWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE1OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY3JlYXRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjc0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1kZWxldGUtdmFyaWFudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQjNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtYWlsLWNoZWNrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUIyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbWFpbC1lZGl0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUU0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1leWUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RDBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZpbGUtZG9jdW1lbnQtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMERDOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybS1zZWxlY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDAxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtYXQtbGlzdC10ZXh0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI2RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybWF0LXBhZ2UtYnJlYWs6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkQ3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1nb29nbGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkFEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1nb29nbGUtYWRzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGFuZC1va2F5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNTdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhvbWUtaW1wb3J0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjlDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1ob21lLW1hcC1tYXJrZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1odW1hbi1tYWxlLWNoaWxkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM4Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGFwdG9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMyMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGF5ZXJzLXNlYXJjaC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbG9jay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM0MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWFnbmlmeS1zY2FuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI3NlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVudS1kb3duOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM1RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVudS1kb3duLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkI2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLWJ1bGxldGVkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZBMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS1jb2ctb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNzJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtdGV4dC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM2QVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW9uaXRvci1kYXNoYm9hcmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTA3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbmV3c3BhcGVyLXZhcmlhbnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMDRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXBsdXMtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MDVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXJlc3BvbnNpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDVFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zY2F0dGVyLXBsb3Qtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQ0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlZ21lbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUNCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWxlY3Rpb24tc2VhcmNoOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VuZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE2NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc25vd2ZsYWtlLXZhcmlhbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjJBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zdGFyLWJveC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc3RpY2tlci1lbW9qaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3ODVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhYmxlLXN0YXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0NCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWJsZXQtaXBhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RjlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhZy1oZWFydDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OEJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhZy1oZWFydC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEJDRlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkY3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWctdGV4dC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGRFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGVsZXZpc2lvbi1jbGVhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRoZW1lLWxpZ2h0LWRhcms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTBFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby11cGRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkIwXFxcIjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBUWVBFIGZyb20gXCIuL3R5cGVcIlxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlclNvY2tldChzb2NrZXQpe1xuICAgIGNvbnNvbGUubG9nKHNvY2tldCAsIFwiIHNldCBzb2NrZXQgXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6IFRZUEUuU09DQ0tFVC5TRVRURVIsXG4gICAgICAgIHBheWxvYWQgOiBzb2NrZXRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyQXV0aCggYXV0aCApe1xuICAgIGNvbnNvbGUubG9nKGF1dGggLCBcIiBzZXQgYXV0aCBcIilcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlIDogVFlQRS5BVVRILlNFVFRFUixcbiAgICAgICAgcGF5bG9hZCA6IGF1dGhcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyQ29udmVydGF0aW9uKCBjb252ICl7XG4gICAgY29uc29sZS5sb2coY29udiAsIFwiIHNldCBjb252IFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLkNPTlZFUlRBVElPTi5TRVRURVIsXG4gICAgICAgIHBheWxvYWQgOiBjb252XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlck1lc3NhZ2UoIG1lc3MgKXtcbiAgICBjb25zb2xlLmxvZyhtZXNzICwgXCIgc2V0IG1lc3MgXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6IFRZUEUuTUVTU0FHRS5TRVRURVIsXG4gICAgICAgIHBheWxvYWQgOiBtZXNzXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uKCBpZCApe1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGlkICwgXCJjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24gXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6IFRZUEUuQ09OVkVSVEFUSU9OLkNIQU5HRSxcbiAgICAgICAgcGF5bG9hZCA6IGlkXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lc3NhZ2UoIG1lc3NhZ2UgKXtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlICwgXCIgYWRkTWVzc2FnZSBcIilcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlIDogVFlQRS5NRVNTQUdFLkFERF9NRVNTQUdFLFxuICAgICAgICBwYXlsb2FkIDogbWVzc2FnZVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lc3NhZ2VTZW5kVG9NZSggbWVzc2FnZSApe1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UgLCBcIiBhZGRNZXNzYWdlU2VuZFRvTWUgXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5BRERfTUVTU0FHRV9TRU5EX1RPX01FLFxuICAgICAgICBwYXlsb2FkIDogbWVzc2FnZVxuICAgIH1cbn0iLCJjb25zdCBUWVBFID0gIHtcbiAgXG4gIFNPQ0NLRVQgOiB7XG4gICAgU0VUVEVSOiBcIlNPQ0NLRVRfU0VUVEVSXCJcbiAgfSxcbiAgQVVUSDoge1xuICAgIFNFVFRFUjogXCJBVVRIX1NFVFRFUlwiXG4gIH0sXG4gIENPTlZFUlRBVElPTjoge1xuICAgIFNFVFRFUjogXCJDT05WRVJUQVRJT05fU0VUVEVSXCIsXG4gICAgQ0hBTkdFOiBcIkNPTlZFUlRBVElPTl9DSEFOR0VcIlxuICB9LFxuICBNRVNTQUdFOiB7XG4gICAgU0VUVEVSOiBcIk1FU1NBR0VfU0VUVEVSXCIsXG4gICAgQUREX01FU1NBR0U6IFwiTUVTU0FHRV9BRERcIlxuICB9LFxuICBDT05GSUc6IHtcbiAgICBTRVRURVJfQ09ORklHIDogXCJTRVRURVJfQ09ORklHXCJcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVFlQRTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cblxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL1JlZ2lzdGVyLmpzeFwiXG5pbXBvcnQgQ2hhdCBmcm9tICcuL0NoYXQuanN4J1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhdyBhcHBcIilcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJBcHBsaWNhdGlvblwiIGNsYXNzTmFtZT1cIkFwcENvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2hhdFwiIHJlbmRlcj17KCkgPT4gPENoYXQgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jaGF0L3JlZ2lzdGVyXCIgcmVuZGVyPXsoKSA9PiA8UmVnaXN0ZXIgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2NoYXQvOnNsdWcnIHJlbmRlcj17KHsgbWF0Y2ggfSkgPT4gPENoYXQgbWF0Y2g9e21hdGNofSAvPiB9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FkbWluL2NoYXRcIiByZW5kZXI9eygpID0+IDxDaGF0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYWRtaW4vY2hhdC9yZWdpc3RlclwiIHJlbmRlcj17KCkgPT4gPFJlZ2lzdGVyIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hZG1pbi9jaGF0LzpzbHVnJyByZW5kZXI9eyh7IG1hdGNoIH0pID0+IDxDaGF0IG1hdGNoPXttYXRjaH0gLz4gfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnQgIDogc3RhdGUuY2xpZW50XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCAobWFwU3RhdGVUb1Byb3BzKShBcHApOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8vIHNvY2NrZXQgXG5cbmltcG9ydCB7IGZldGNoQVBJQ2hhbm5lbHMgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcblxuXG4vLy8vIGRlZmluZVxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhci5qc3hcIlxuaW1wb3J0IExpc3RNZXNzYWdlIGZyb20gXCIuL0xpc3RNZXNzYWdlLmpzeFwiXG5cbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5hdXRoICl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZldGNoQVBJQ2hhbm5lbHModGhpcy5wcm9wcy5hdXRoLCB0aGlzKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiggIXRoaXMucHJvcHMuYXV0aCApe1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9jaGF0L3JlZ2lzdGVyXCIgLz5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtY2hhdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1wYWdlLWNoYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RNZXNzYWdlIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoYXQpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0IHsgY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIH0gZnJvbSBcIi4uL2FjdGlvblwiXG5cbmNsYXNzIENvbnZlcnRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjaGFuZ2VBY3RpdmVVc2VyID0gKGlkKSA9PiB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24oaWQpKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLmNsYXNzTGlzdC5hZGQoJ2NvbnZlcnRhdGlvbi1jaGFuZ2UnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHsgY29udiB9ID0gdGhpcy5wcm9wc1xuICAgICAgICB2YXIgY2xhc3NBY3RpdmVNZXNzYWdlID0gY29udi5pc0FjdGl2ZSAmJiAnYWN0aXZlLW1lc3NhZ2UnXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyXCIgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VBY3RpdmVVc2VyKGNvbnYuX2lkKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc0FjdGl2ZU1lc3NhZ2UgKyBcIiBhY3RpdmUgdXNlci1jaGF0XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnYuYXZhdGFyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57Y29udi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29udmVydGF0aW9uKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcblxuY2xhc3MgRW1vamkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGFkZEljb25JbnB1dENoYXQgPSBldmVudCA9PiB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpXG4gICAgaWYoaW5wdXQpe1xuICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgIC8vLyBhZGQgaWNvbiBcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ICsgdGhpcy5wcm9wcy5zeW1ib2xcbiAgICAgIGlucHV0LnZhbHVlID0gY29udGVudFxuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpIGNsYXNzTmFtZT1cImNvbXBvbmVudC1lbW9qaVwiIG9uQ2xpY2s9e3RoaXMuYWRkSWNvbklucHV0Q2hhdH0+e3RoaXMucHJvcHMuc3ltYm9sfTwvaT5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBFbW9qaSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaXN0RW1vamkgZnJvbSBcIi4vTGlzdEVtb2ppLmpzeFwiO1xuaW1wb3J0IHsgc2VuZCB9IGZyb20gXCIuLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXG5cbmNsYXNzIElucHV0U2VuZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2VuZENoYXQ6IGZhbHNlIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tcG9uZW50LWVtb2ppJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbW9qaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWVtb2ppc1wiKVxuICAgICAgICAgICAgaWYgKGVtb2ppcykge1xuICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVtb2ppcy5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LXRlbXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy10ZW1wXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LmFkZChcInNob3dcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMaXN0RW1vamkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpXG4gICAgICAgIGlmIChlbW9qaXMpIHtcbiAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QuYWRkKFwic2hvdy10ZW1wXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTZW5kTWVzc2FnZVJlYWN0U3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXG5cbiAgICAgICAgdmFyIG9iak1lc3MgPSB7IFxuICAgICAgICAgICAgbWVzc2FnZTogXCIg8J+SnSBcIiwgXG4gICAgICAgICAgICBzdHlsZTogXCJFTU9KSVwiLCBcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnByb3BzLmF1dGgudG9rZW4sXG4gICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcbiAgICAgICAgICAgIGNoYW5uZWxfaWQ6IGNvbnZBY3RpdmUuX2lkLFxuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICB9XG5cbiAgICAgICAgc2VuZChvYmpNZXNzKVxuICAgIH1cblxuICAgIGJ0blNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXG5cbiAgICAgICAgdmFyIG9iak1lc3MgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBpbnB1dC52YWx1ZSwgXG4gICAgICAgICAgICBzdHlsZTogXCJcIiwgXG4gICAgICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy5hdXRoLnRva2VuLFxuICAgICAgICAgICAgdXNlcjogYXV0aC5faWQsXG4gICAgICAgICAgICBjaGFubmVsX2lkOiBjb252QWN0aXZlLl9pZCxcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbmQob2JqTWVzcylcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cblxuICAgIGhhbmRsZVNlbmRNZXNzYWdlRG93biA9IChldmVudCkgPT4ge1xuXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKVxuICAgICAgICBpZiAoIWlucHV0KSByZXR1cm4gZmFsc2VcbiAgICAgICAgXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzICYmICFldmVudC5zaGlmdEtleSkge1xuXG4gICAgICAgICAgICB2YXIgeyBjb252ZXJ0YXRpb25zLCBhdXRoIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXG5cbiAgICAgICAgICAgIHZhciBvYmpNZXNzID0geyBcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBldmVudC50YXJnZXQudmFsdWUsIFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcIlwiLCBcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy5hdXRoLnRva2VuLFxuICAgICAgICAgICAgICAgIHVzZXI6IGF1dGguX2lkLFxuICAgICAgICAgICAgICAgIGNoYW5uZWxfaWQ6IGNvbnZBY3RpdmUuX2lkLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VuZChvYmpNZXNzKVxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRDaGF0OiB0cnVlIH0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8vIHNwYWNlIGNoYXJhY3RlciByZXBsYWNlIGVtb2ppXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGlucHV0LnZhbHVlXG4gICAgICAgICAgICAvLy8gZ2V0IHdvcmQgbGFzdFxuICAgICAgICAgICAgdmFyIHdvcmRzID0gY29udGVudC50cmltKCkuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICB2YXIgd29yZExhc3Rlc3QgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgLy8vLyBjaGVjayBoYXZlIHN5c2JvbCBcbiAgICAgICAgICAgIHZhciBlbW9qaXNDYWxsID0gQ09ORklHX0VNT0pJUy5maWx0ZXIoaXRlbSA9PiBpdGVtLnNpZ24gPT0gd29yZExhc3Rlc3QpXG4gICAgICAgICAgICBpZihlbW9qaXNDYWxsLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgLy8vIGFkZCBpY29uIFxuICAgICAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBjb250ZW50LnRyaW0oKS5sYXN0SW5kZXhPZihcIiBcIilcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkgKyBcIiBcIiArIGVtb2ppc0NhbGxbMF0uc3ltYm9sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlU2VuZE1lc3NhZ2VVcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VuZENoYXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kQ2hhdDogZmFsc2UgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVNlbmRDaGF0Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vLy8gc2VuZCBjbGFzcyBpcyB3cml0ZSBtZXNzYWdlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaXMtd3JpdGUtbWVzc2FnZVwiKS5jbGFzc0xpc3QuYWRkKFwiZm9sbG93LWNvbnZlcnNhdGlvblwiKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgeyBjb252ZXJ0YXRpb25zIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXG4gICAgICAgICAgICBpZiggIWNvbnZBY3RpdmUgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWlzLXdyaXRlLW1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IFwiPlxuICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLXN0aWNrZXItZW1vamkgZW1vdGljb25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dMaXN0RW1vaml9XG4gICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJqcy1pbnB1dC1jaGF0XCJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZVNlbmRNZXNzYWdlRG93bn1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZVVwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbmRDaGF0Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44Oh44OD44K744O844K444KS5pu444GPLi4uXCJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zZW5kLW91dGxpbmUgc2VuZFwiIG9uQ2xpY2s9e3RoaXMuYnRuU2VuZE1lc3NhZ2V9PjwvaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1oZWFydC1tdWx0aXBsZS1vdXRsaW5lIHJlYWN0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZVJlYWN0U3VibWl0fT48L2k+XG4gICAgICAgICAgICAgICAgPExpc3RFbW9qaSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aCAgICAgICAgIDogc3RhdGUuYXV0aCxcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUuY29udmVydGF0aW9uLFxuICAgICAgICBzb2NrZXQgICAgICAgOiBzdGF0ZS5zb2NrZXRcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5wdXRTZW5kKTtcbiIsIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBNeUxvZ2luRmFjZWJvb2sgZnJvbSAnLi9NeUxvZ2luRmFjZWJvb2suanN4J1xuaW1wb3J0IE15TG9naW5Hb29nbGUgZnJvbSBcIi4vTXlMb2dpbkdvb2dsZS5qc3hcIlxuXG5jbGFzcyBMZWZ0SW5mb3JBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X19yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb25wYW55XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X25hbWV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLWFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tYWNjb3VudC1ncm91cC1vdXRsaW5lXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLXVwZGF0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7dGhpcy5wcm9wcy5jb25maWcudGF4X2NvZGVfZGF0ZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1ob21lLW1hcC1tYXJrZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3Nfc3RyZWV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3NfbG9jYWxpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfYWRkcmVzc19yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfYWRkcmVzc19jb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jZWxscGhvbmUtbmZjXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pel5pys44Gu6Zu76Kmx77yaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1widGVsOlwiICsgdGhpcy5wcm9wcy5jb25maWcucGhvbmVfb25lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29uZmlnLnBob25lX29uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNhcmQtYWNjb3VudC1tYWlsLW91dGxpbmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIm1haWx0bzpcIiArIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbWFpbH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9tYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW50cm8tY2hhdC1yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICDjg4Hjg6Pjg4Pjg4jjgpLoqK3lrprjgZnjgovjgZ/jgoHjga7mg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIIg5LiK6KiY44Gu5oOF5aCx44Gu5L+d6K2344Gr5Yqq44KB44Gm44GE44G+44GZXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNeUxvZ2luRmFjZWJvb2svPlxuICAgICAgICAgICAgICAgICAgICA8TXlMb2dpbkdvb2dsZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlZnRJbmZvckF1dGgpXG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEVtb2ppIGZyb20gXCIuL0Vtb2ppLmpzeFwiXG5cbmNsYXNzIExpc3RFbW9qaSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImpzLWVtb2ppc1wiIGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LWVtb2ppXCI+XG4gICAgICAgIHsgQ09ORklHX0VNT0pJUy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8RW1vamkga2V5PXtpdGVtLnNpZ259IHN5bWJvbD17aXRlbS5zeW1ib2x9IHNpZ249e2l0ZW0uc2lnbn0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RFbW9qaVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBMaXN0TWVzc2FnZUhlYWRlciBmcm9tIFwiLi9MaXN0TWVzc2FnZUhlYWRlci5qc3hcIlxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZS5qc3hcIlxuaW1wb3J0IElucHV0U2VuZCBmcm9tIFwiLi9JbnB1dFNlbmQuanN4XCJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxuLy8gaW1wb3J0IE1lc3NhZ2VDaGF0VHlwaW5nIGZyb20gXCIuL01lc3NhZ2VDaGF0VHlwaW5nLmpzeFwiXG5cbmNsYXNzIExpc3RNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblxuICAgICAgICB2YXIgZG9tU2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1zY3JvbGwtdG8tYm90dG9tXCIpXG4gICAgICAgIHZhciBkb21Xcml0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIilcblxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLmNsYXNzTGlzdC5jb250YWlucygnY29udmVydGF0aW9uLWNoYW5nZScpKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIikuY2xhc3NMaXN0LnJlbW92ZSgnY29udmVydGF0aW9uLWNoYW5nZScpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBkb21TY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNjcm9sbC10by1ib3R0b21cIilcbiAgICAgICAgICAgIHZhciBkb21Xcml0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIilcbiAgICAgICAgICAgIGRvbVNjcm9sbC5zY3JvbGxUb3AgPSBkb21TY3JvbGwuc2Nyb2xsSGVpZ2h0XG4gICAgICAgIH1lbHNlIGlmKFxuICAgICAgICAgICAgZG9tU2Nyb2xsICYmIFxuICAgICAgICAgICAgZG9tV3JpdGVyICYmIFxuICAgICAgICAgICAgZG9tV3JpdGVyLmNsYXNzTGlzdC5jb250YWlucygnZm9sbG93LWNvbnZlcnNhdGlvbicpKXtcbiAgICAgICAgICAgICAgICBkb21TY3JvbGwuc2Nyb2xsVG9wID0gZG9tU2Nyb2xsLnNjcm9sbEhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmKGRvbVNjcm9sbCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoZG9tU2Nyb2xsKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSArIFxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmlubmVySGVpZ2h0KCkgPj0gIFxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpWzBdLnNjcm9sbEhlaWdodCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaXMtd3JpdGUtbWVzc2FnZVwiKS5jbGFzc0xpc3QuYWRkKFwiZm9sbG93LWNvbnZlcnNhdGlvblwiKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImZvbGxvdy1jb252ZXJzYXRpb25cIilcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBcbiAgICAgICAgdmFyIHsgYXV0aCwgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgICAgICB2YXIgY29udmVydGF0aW9uQWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSlcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gW11cbiAgICAgICAgaWYoIGNvbnZlcnRhdGlvbkFjdGl2ZSApe1xuICAgICAgICAgICAgbWVzc2FnZXMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzLmZpbmQoIG1lc3MgPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3MuX2lkID09IGNvbnZlcnRhdGlvbkFjdGl2ZS5faWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiggbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLm1lc3NhZ2VfZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoICFtZXNzYWdlcy5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudE1lc3MgPSBcIuWPo+W6p+aDheWgse+8miBcXG4gXCIgK1xuICAgICAgICAgICAgICAgIFwiReODoeODvOODq++8mlwiICsgYXV0aC5lbWFpbCArIFwiICBcXG4gXCIgK1xuICAgICAgICAgICAgICAgIFwi5ZCN5YmN77yaXCIgKyBhdXRoLm5hbWUgKyBcIiAgXFxuIFwiICtcbiAgICAgICAgICAgICAgICBcIuODouODkOOCpOODq++8mlwiICsgYXV0aC5tb2JpbGUgKyBcIiAgXFxuIFwiICtcbiAgICAgICAgICAgICAgICBcIuOBk+OCk+OBq+OBoeOBr+OAgeOBqeOBhuOBquOBleOCjOOBvuOBl+OBn++8n1wiXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBbIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50TWVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogXCIyMDIwLTA3LTI5VDA2OjUxOjU0Ljk2M1pcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IFwiQURNSU5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogXCJBRE1JTlwiLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1sc3QtbWVzc2FnZXNcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgPExpc3RNZXNzYWdlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWxpc3QtbWVzc2FnZVwiIGlkPVwianMtc2Nyb2xsLXRvLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMgJiYgbWVzc2FnZXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKG1lc3NhZ2UsIGtleSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJtZXNzYWdlLWNoYXRcIiArIGtleSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7LyogPE1lc3NhZ2VDaGF0VHlwaW5nLz4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPElucHV0U2VuZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUuY29udmVydGF0aW9uLFxuICAgICAgICBtZXNzYWdlcyAgICAgOiBzdGF0ZS5tZXNzYWdlLFxuICAgICAgICBhdXRoICAgICAgICAgOiBzdGF0ZS5hdXRoXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExpc3RNZXNzYWdlKVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IHNldHRlckF1dGggfSBmcm9tIFwiLi4vYWN0aW9uXCJcblxuY2xhc3MgSGVhZEluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgYnRuTG9nb3V0ID0gKCkgPT4ge1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgbnVsbClcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKG51bGwpKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGzhuqFpIGhlYWQgbGlzdCBtZXNzYWdlXCIpXG4gICAgICAgIHZhciB7IGF1dGgsIGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgdmFyIGNvbnZlcnRhdGlvbkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb24gPT4gY29udmVydGF0aW9uLmlzQWN0aXZlKVxuXG4gICAgICAgIGlmICghY29udmVydGF0aW9uQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRpbWVPbmxpbmUgPSAn5Y+j5bqn5oOF5aCx77yaICcgKyBhdXRoLmVtYWlsICsgXCIgLSBcIiArIGF1dGgubW9iaWxlICsgXCIg44Gn44Ot44Kw44Kk44OzXCJcbiAgICAgICAgaWYoIGF1dGgudHlwZSAhPSBcImxvY2FsXCIgKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGltZU9ubGluZSA9ICflj6Pluqfmg4XloLHvvJogJyArIGF1dGguZW1haWwgKyBcIiAtIFwiICsgYXV0aC50eXBlICsgXCIg44Gn44Ot44Kw44Kk44OzXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1oZWFkLWluZm9cIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hY3RpdmUtY2hhdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udmVydGF0aW9uQWN0aXZlLmF2YXRhcn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbnZlcnRhdGlvbkFjdGl2ZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KGNvbnZlcnRhdGlvbkFjdGl2ZS5pc09ubGluZSA/IFwiYWN0aXZlLW5vd1wiIDogJycpICsgXCIgdGltZS1vbmxpbmVcIn0+e3RpbWVPbmxpbmV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tbG9nb3V0XCIgb25DbGljaz17dGhpcy5idG5Mb2dvdXR9PuODreOCsOOCouOCpuODiDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb24sXG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZEluZm8pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgeyBtZXNzYWdlLCBjb252ZXJ0YXRpb25zLCBhdXRoIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICBjb252QWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSksXG4gICAgICAgIGNsYXNzVHlwZU1lc3NhZ2UgPSBtZXNzYWdlLnVzZXIgIT0gYXV0aC5faWQgPyAnZmxvYXQtbGVmdCcgOiAnZmxvYXQtcmlnaHQgYnktbWUnXG4gICAgICAgIGlmICghY29udkFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LW1lc3NhZ2UtY2hhdFwiID5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1R5cGVNZXNzYWdlICsgXCIgY2hhdC1ncm91cFwifT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb252QWN0aXZlLmF2YXRhcn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWVzc2FnZS5zdHlsZSArIFwiIHRleHRcIn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJ1xcbicpLm1hcCggKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aCxcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUuY29udmVydGF0aW9uLFxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNZXNzYWdlKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCB7IHNldHRlckF1dGggfSBmcm9tIFwiLi4vYWN0aW9uXCJcblxuY2xhc3MgTXlMb2dpbkZhY2Vib29rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudENsaWNrZWQgPSAoKSA9PiB7IH1cbiAgICByZXNwb25zZUZhY2Vib29rID0gcmVzcG9uc2UgPT4ge1xuICAgICAgICBcbiAgICAgICAgdmFyIGF1dGhlbiA9IHtcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiByZXNwb25zZS5hY2Nlc3NUb2tlbiwgXG4gICAgICAgICAgICB1c2VySUQ6IHJlc3BvbnNlLnVzZXJJRCxcbiAgICAgICAgICAgIG5hbWU6IHJlc3BvbnNlLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogcmVzcG9uc2UuZW1haWwsXG4gICAgICAgICAgICBhdmF0YXI6IHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmwsXG4gICAgICAgICAgICB0eXBlOiBcImZhY2Vib29rXCIsXG4gICAgICAgICAgICBtb2JpbGU6IFwiMTIzNDU2Nzg5MFwiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWdpc3RlckxvZ2luQ2hhdCggYXV0aGVuIClcbiAgICAgICAgXG4gICAgfVxuICAgIHJlZ2lzdGVyTG9naW5DaGF0ID0gYXV0aGVuID0+IHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMucHJvcHMuY29uZmlnLnVybF9yZWFsdGltZSArIFwiL2FwaS9yZWdpc3Rlci1jaGF0XCJcbiAgICAgICAgZmV0Y2goYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGF1dGhlbilcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZSwgc3RhdHVzOiByZXNwLnN0YXR1cywgZXJyb3I6IGRhdGEuZXJyb3JzIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCByZXNwb25zZS5kYXRhICl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKHsgLi4ucmVzcG9uc2UuZGF0YSB9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBlcnI6IFwiICsgZXJyb3IubWVzc2FnZSwgZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGYWNlYm9va0xvZ2luXG4gICAgICAgICAgICAgICAgYXBwSWQ9XCI2MTg1NzkwNDU0NjA5NjJcIlxuICAgICAgICAgICAgICAgIGF1dG9Mb2FkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIGNzc0NsYXNzPVwibXktZmFjZWJvb2stYnV0dG9uLWNsYXNzXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiZmEtZmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgIHRleHRCdXR0b249XCJGYWNlYm9va+OBp+ODreOCsOOCpOODs1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb21wb25lbnRDbGlja2VkfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrPXt0aGlzLnJlc3BvbnNlRmFjZWJvb2t9IC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGggIDogc3RhdGUuYXV0aCxcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTXlMb2dpbkZhY2Vib29rKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0IHsgc2V0dGVyQXV0aCB9IGZyb20gXCIuLi9hY3Rpb25cIlxuXG5jbGFzcyBNeUxvZ2luR29vZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50Q2xpY2tlZCA9ICgpID0+IHsgfVxuICAgIFxuICAgIHJlc3BvbnNlR29vZ2xlRXJyb3IgPSByZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBcImzhu5dpIHJlc3BvbnNlR29vZ2xlRXJyb3JcIilcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBcInJlc3BvbnNlR29vZ2xlRXJyb3JcIilcbiAgICB9XG4gICAgcmVzcG9uc2VHb29nbGUgPSByZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBcIsSRw7puZyByZXNwb25zZUdvb2dsZVwiKVxuICAgICAgICBcbiAgICAgICAgdmFyIGF1dGhlbiA9IHtcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiByZXNwb25zZS5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIHVzZXJJRDogcmVzcG9uc2UucHJvZmlsZU9iai5nb29nbGVJZCxcbiAgICAgICAgICAgIG5hbWU6IHJlc3BvbnNlLnByb2ZpbGVPYmoubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiByZXNwb25zZS5wcm9maWxlT2JqLmVtYWlsLFxuICAgICAgICAgICAgYXZhdGFyOiByZXNwb25zZS5wcm9maWxlT2JqLmltYWdlVXJsLFxuICAgICAgICAgICAgdHlwZTogXCJnb29nbGVcIixcbiAgICAgICAgICAgIG1vYmlsZTogXCIxMjM0NTY3ODkwXCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyTG9naW5DaGF0KCBhdXRoZW4gKVxuICAgIH1cblxuICAgIHJlZ2lzdGVyTG9naW5DaGF0ID0gYXV0aGVuID0+IHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMucHJvcHMuY29uZmlnLnVybF9yZWFsdGltZSArIFwiL2FwaS9yZWdpc3Rlci1jaGF0XCJcbiAgICAgICAgZmV0Y2goYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGF1dGhlbilcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZSwgc3RhdHVzOiByZXNwLnN0YXR1cywgZXJyb3I6IGRhdGEuZXJyb3JzIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpIFxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQXV0aCh7IC4uLnJlc3BvbnNlLmRhdGEgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZXJyOiBcIiArIGVycm9yLm1lc3NhZ2UsIGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIxODcxODUyMDY5MjYtc21xb2VqOGs0YWo5azNzZGtxNDZib2dkZjRlb2p2bjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgICAgICAgICAgICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9IGNsYXNzTmFtZT1cImJ0bi1nb29nbGUtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWdvb2dsZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZeOBp+ODreOCsOOCpOODs1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8vIGJ1dHRvblRleHQ9XCJcIlxuICAgICAgICAgICAgICAgIGljb249XCJmYS1nb29nbGVcIlxuICAgICAgICAgICAgICAgIGNzc0NsYXNzPVwibXktZ29vZ2xlLWJ1dHRvbi1jbGFzc1wiXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXt0aGlzLnJlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5yZXNwb25zZUdvb2dsZUVycm9yfVxuICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XG4gICAgICAgICAgICAgICAgPjwvR29vZ2xlTG9naW4+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aCAgOiBzdGF0ZS5hdXRoLFxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNeUxvZ2luR29vZ2xlKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcblxuaW1wb3J0IExlZnRJbmZvckF1dGggZnJvbSBcIi4vTGVmdEluZm9yQXV0aC5qc3hcIlxuaW1wb3J0IHsgc2V0dGVyQXV0aCB9IGZyb20gXCIuLi9hY3Rpb25cIlxuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGFsZXJ0IDogZmFsc2UgLCBwcm9ncmVzcyA6IGZhbHNlIH1cbiAgICB9XG4gICAgXG4gICAgaW52YWxpZExvZ2luQ2hhdCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmKCF0aGlzLm5hbWUudmFsdWUpe1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3JGaWVsZDogJ2VtYWlsJywgbWVzc2FnZTogXCJuYW1lIGJ14buZYyBwaOG6o2kgbmjhuq1wXCIgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmVtYWlsLnZhbHVlKXtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yRmllbGQ6ICdlbWFpbCcsIG1lc3NhZ2U6IFwiZW1haWwgYnXhu5ljIHBo4bqjaSBuaOG6rXBcIiB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMubW9iaWxlLnZhbHVlKXtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yRmllbGQ6ICdlbWFpbCcsIG1lc3NhZ2U6IFwibW9iaWxlIGJ14buZYyBwaOG6o2kgbmjhuq1wXCIgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIExvZ2luQ2hhdCA9IGUgPT4ge1xuICAgICAgICB2YXIgZW1haWwgID0gdGhpcy5lbWFpbC52YWx1ZSxcbiAgICAgICAgICAgIG5hbWUgICA9IHRoaXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgIG1vYmlsZSA9IHRoaXMubW9iaWxlLnZhbHVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yID0gdGhpcy5pbnZhbGlkTG9naW5DaGF0KClcbiAgICAgICAgaWYoIHZhbGlkYXRvciApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0IDogdmFsaWRhdG9yLm1lc3NhZ2UgLCBwcm9ncmVzcyA6IGZhbHNlIH0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsZXJ0IDogZmFsc2UgLCBwcm9ncmVzcyA6IHRydWV9LCAoKT0+e1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMucHJvcHMuY29uZmlnLnVybF9yZWFsdGltZSArIFwiL2FwaS9yZWdpc3Rlci1jaGF0XCJcbiAgICAgICAgICAgIGZldGNoKGFjdGlvbiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCAsIG5hbWUgLCBtb2JpbGUgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZSwgc3RhdHVzOiByZXNwLnN0YXR1cywgZXJyb3I6IGRhdGEuZXJyb3JzIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0IDogZmFsc2UgLCBwcm9ncmVzcyA6IGZhbHNlIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCByZXNwb25zZS5kYXRhICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldHRlckF1dGgoeyAuLi4gcmVzcG9uc2UuZGF0YSB9KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0IDogZXJyb3IubWVzc2FnZSAsIHByb2dyZXNzIDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoIHRoaXMucHJvcHMuYXV0aCApe1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9jaGF0L2NvbnN1bHRpbmctd2ViLWRlc2lnblwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXJlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPExlZnRJbmZvckF1dGggLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X19yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYWxlcnQgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57IHRoaXMuc3RhdGUuYWxlcnQgfTwvZGl2PiB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDjgYLjgarjgZ/jga7jg5Xjg6vjg43jg7zjg6AgPGk+4py1PC9pPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHJlZj17KGlucHV0KSA9PiB0aGlzLm5hbWUgPSBpbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDjg6Hjg7zjg6vjgqLjg4njg6zjgrkgPGk+4py1PC9pPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5lbWFpbCA9IGlucHV0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4g6Zu76Kmx55Wq5Y+3IDxpPuKctTwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtb2JpbGVcIiB0eXBlPVwidGV4dFwiIHJlZj17KGlucHV0KSA9PiB0aGlzLm1vYmlsZSA9IGlucHV0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zZW5kLW1haWwtY29udGFjdFwiIG9uQ2xpY2s9eyB0aGlzLkxvZ2luQ2hhdCB9PiDjg6Hjg7zjg6vnrqHnkIbogIXjgavpgIHkv6E8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9ncmVzcyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgcHJvZ3Jlc3Mtc3VjY2Vzc1wiPjxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtbG9hZGRpbmdcIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGggIDogc3RhdGUuYXV0aCxcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmVnaXN0ZXIpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0IFNpZGViYXJMc3RDb252ZXJ0YXRpb24gZnJvbSBcIi4vU2lkZWJhckxzdENvbnZlcnRhdGlvbi5qc3hcIlxuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIC8vLy9zZXQgaGVpZ2h0IGNvbXBvbmVudFxuICAgICAgICB2YXIgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2lkZWJhci1jaGF0XCIpLFxuICAgICAgICBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1sc3QtbWVzc2FnZXNcIilcbiAgICAgICAgaWYoc2lkZWJhciAmJiBtZXNzYWdlKXtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUuaGVpZ2h0ID0gbWVzc2FnZS5jbGllbnRIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBzaWRlYmFyXCIpXG4gICAgICAgIHZhciB7IGF1dGggfSA9IHRoaXMucHJvcHNcbiAgICAgICAgYXV0aC5hdmF0YXIgPSAnL3VwbG9hZC9pbWFnZXMvYXZhdGFyLmpwZydcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLXNpZGViYXItY2hhdFwiIGNsYXNzTmFtZT1cImNvbXBvbmVudC1zaWRlYmFyLWNoYXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15aW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXIgYWN0aXZlLW9ubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdXRoLmF2YXRhcn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnthdXRoLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhckxzdENvbnZlcnRhdGlvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNpZGViYXIpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0IENvbnZlcnRhdGlvbiBmcm9tIFwiLi9Db252ZXJ0YXRpb24uanN4XCJcblxuY2xhc3MgU2lkZWJhckxzdENvbnZlcnRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGNvbnZlcnRhdGlvblwiKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LXVzZXJcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbnMgJiYgY29udmVydGF0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0YXRpb24gPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udmVydGF0aW9uIGtleT17Y29udmVydGF0aW9uLl9pZH0gY29udj17Y29udmVydGF0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNpZGViYXJMc3RDb252ZXJ0YXRpb24pXG4iLCIvKiBwb2x5ZmlsbHMuanMgKi9cbi8vIGltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG4vLyBpbXBvcnQgJ3JlYWN0LWFwcC1wb2x5ZmlsbC9pZTExJ1xuaW1wb3J0ICdjb3JlLWpzJ1xuLy8vZm9yIGllOSBcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc2V0Jztcbi8qKiBJRTksIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgYWxsIG9mIHRoZSBmb2xsb3dpbmcgcG9seWZpbGxzLiAqKi9cbmltcG9ydCAnY29yZS1qcy9lcy9zeW1ib2wnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL29iamVjdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvZnVuY3Rpb24nO1xuaW1wb3J0ICdjb3JlLWpzL2VzL3BhcnNlLWludCc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvcGFyc2UtZmxvYXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL251bWJlcic7XG5pbXBvcnQgJ2NvcmUtanMvZXMvbWF0aCc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvc3RyaW5nJztcbmltcG9ydCAnY29yZS1qcy9lcy9kYXRlJztcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvcmVnZXhwJztcbmltcG9ydCAnY29yZS1qcy9lcy9tYXAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL3dlYWstbWFwJztcbmltcG9ydCAnY29yZS1qcy9lcy9zZXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL2FycmF5JztcblxuaW1wb3J0ICdyYWYvcG9seWZpbGwnO1xuLy8vIGZvciB3ZWJwYWNrIGltcG9ydFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5cbmltcG9ydCAnLi8uLi8uLi9CVUlMREVSL1NDU1MvY2hhdC5zY3NzJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFJlZHVjZXIpO1xuc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ2PDsyB0aGF5IMSR4buVaSB0cm9uZyBSZWR1eCEhJylcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xuXG4vLy8gbXkgY29tcG9uZW50XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50L0FwcC5qc3gnXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJST09UXCIpO1xuXG5pZiAodHlwZW9mIChTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgd3JhcHBlcikge1xuICAgIFxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgLCB3cmFwcGVyKVxufWVsc2V7XG4gICAgYWxlcnQoXCLjgZPjga7jg5bjg6njgqbjgrbjgafjga/jgIHjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjga/mraPluLjjgavli5XkvZzjgZfjgb7jgZvjgpPjgIIg44Ki44OD44OX44Kw44Os44O844OJ44GX44Gm44GP44Gg44GV44GEXCIpXG59XG5cbiIsImltcG9ydCB7IHNvY2tldExpc3Rlbm5lciB9IGZyb20gXCIuL3NvY2tldF9saXN0ZW5uZXJcIlxuaW1wb3J0IHsgc2V0dGVyU29ja2V0LCBzZXR0ZXJDb252ZXJ0YXRpb24sIHNldHRlck1lc3NhZ2UsIHNldHRlckF1dGgsIGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25cIlxuaW1wb3J0IHsgYWRkTWVzc2FnZSB9IGZyb20gXCIuLi9hY3Rpb25cIlxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcblxuY29uc3QgQ09ORklHID0gQ09ORklHX0FQUCxcbkVWRU5UID0gQ09ORklHX0VWRU5UXG52YXIgc29ja2V0ID0gbnVsbFxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzb2NrZXRJbml0aWFsQ29ubmVjdChzb2NrZXRJT0NsaWVudCwgaW5zdGFuY2VBcHApIHtcbiAgICBjb25zb2xlLmxvZyhDT05GSUcudXJsX3JlYWx0aW1lKVxuICAgIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KENPTkZJRy51cmxfcmVhbHRpbWUpXG4gICAgdmFyIEFwcGxpY2F0aW9uRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKVxuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBBcHBsaWNhdGlvbkRvbSAmJiBBcHBsaWNhdGlvbkRvbS5jbGFzc0xpc3QucmVtb3ZlKFwiY29ubmVjdC1zb2NrZXQtZXJyb3JcIilcbiAgICAgICAgLy8vLyBzZXQgY29uZmlnXG4gICAgICAgIHNvY2tldExpc3Rlbm5lcihzb2NrZXQsIGluc3RhbmNlQXBwKVxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQoc29ja2V0KSlcbiAgICAgICAgLy8vIGpvaW5Sb29tSW5pdFxuICAgICAgICBqb2luUm9vbUluaXQoaW5zdGFuY2VBcHAucHJvcHMuYXV0aClcbiAgICB9KTtcbiAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKHNldHRlclNvY2tldChudWxsKSlcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQ09ORklHLmFzc2V0XG4gICAgfSk7XG4gICAgc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBBcHBsaWNhdGlvbkRvbSAmJiBBcHBsaWNhdGlvbkRvbS5jbGFzc0xpc3QuYWRkKFwiY29ubmVjdC1zb2NrZXQtZXJyb3JcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBDT05GSUcuYXNzZXRcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5Sb29tSW5pdChhdXRoKXtcblxuICAgIHNvY2tldC5lbWl0KEVWRU5ULkpPSU5fQ0hBTk5FTCwgYXV0aClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBUElDaGFubmVscyggb3B0aW9uLCBjb21wb25lbnQgKXtcblxuICAgIHZhciB7IG1hdGNoIH0gPSBjb21wb25lbnQucHJvcHMsXG4gICAgc2x1ZyA9IG51bGwsIFxuICAgIGNvbnZlcnRhdGlvbklkQWN0aXZlID0gbnVsbFxuICAgIGlmKCBtYXRjaCApe1xuICAgICAgICBzbHVnID0gbWF0Y2gucGFyYW1zLnNsdWdcbiAgICB9XG5cbiAgICB2YXIgYWN0aW9uID0gY29tcG9uZW50LnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvY2hhbm5lbHM/XCJcbiAgICBpZiggb3B0aW9uLl9pZCApe1xuICAgICAgICBhY3Rpb24gKz0gXCImaWQ9XCIgKyBvcHRpb24uX2lkXG4gICAgfVxuICAgIGlmKCBvcHRpb24uZW1haWwgKXtcbiAgICAgICAgYWN0aW9uICs9IFwiJmVtYWlsPVwiICsgb3B0aW9uLmVtYWlsXG4gICAgfVxuICAgIGlmKCBvcHRpb24ubW9iaWxlICl7XG4gICAgICAgIGFjdGlvbiArPSBcIiZtb2JpbGU9XCIgKyBvcHRpb24ubW9iaWxlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFjdGlvbilcbiAgICBmZXRjaChhY3Rpb24sIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3AgPT4geyBcbiAgICAgICAgXG4gICAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZSwgc3RhdHVzOiByZXNwLnN0YXR1cywgZXJyb3I6IGRhdGEuZXJyb3JzIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpIFxuICAgIH0pXG4gICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmKCByZXNwb25zZS5kYXRhICl7XG4gICAgICAgICAgICB2YXIgY29udmVydGF0aW9ucyA9IFtdLFxuICAgICAgICAgICAgbWVzc2FnZXMgPSBbXVxuXG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YS5jaGFubmVscyApe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2hhbm5lbHMubWFwKGNvbnYgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnZlcnRhdGlvbiA9IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb252LnVzZXJbMF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogY29tcG9uZW50LnByb3BzLmF1dGguX2lkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogY29udi5faWQgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoIHNsdWcgJiYgY29udmVydGF0aW9uLnNsdWcgPT0gc2x1Zyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0YXRpb25JZEFjdGl2ZSA9IGNvbnZlcnRhdGlvbi5faWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGNvbnYuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9kYXRhOiBjb252Lm1lc3NhZ2UgfHwgW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0YXRpb25zLnB1c2goY29udmVydGF0aW9uKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb21wb25lbnQucHJvcHMuZGlzcGF0Y2goc2V0dGVyQ29udmVydGF0aW9uKCBjb252ZXJ0YXRpb25zICkpXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlck1lc3NhZ2UoIG1lc3NhZ2VzICkpXG4gICAgICAgICAgICAgICAgY29udmVydGF0aW9uSWRBY3RpdmUgJiYgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbihjb252ZXJ0YXRpb25JZEFjdGl2ZSkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc29ja2V0SW5pdGlhbENvbm5lY3Qoc29ja2V0SU9DbGllbnQsIGNvbXBvbmVudCApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YS50b2tlbiApe1xuICAgICAgICAgICAgICAgIHZhciBhdXRoID0gY29tcG9uZW50LnByb3BzLmF1dGhcbiAgICAgICAgICAgICAgICBhdXRoLnRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKCBhdXRoICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIG51bGwpXG4gICAgICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKCBudWxsICkpXG4gICAgfSlcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kKCBtZXNzYWdlICl7XG4gICAgdmFyIHsgbWVzc2FnZSwgc3R5bGUsIHRva2VuLCB1c2VyLCBjaGFubmVsX2lkLCBjb21wb25lbnQgfSA9IG1lc3NhZ2VcbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC8oXFxuXFxzKj9cXG4pXFxzKlxcbi8sICckMScpXG4gICAgXG4gICAgc29ja2V0LmVtaXQoRVZFTlQuU0VORF9NRVNTQUdFLCB7IG1lc3NhZ2UsIHN0eWxlLCB0b2tlbiwgdXNlciwgY2hhbm5lbF9pZCB9KVxuICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgYWRkTWVzc2FnZShcbiAgICAgICAgICAgIHsgX2lkOiBjaGFubmVsX2lkLCBtZXNzYWdlX2RhdGE6e3R5cGU6IHRydWUsIHJlYWQ6IHRydWUsIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCB0b2tlbiwgdXNlcn19XG4gICAgICAgIClcbiAgICApXG59IiwidmFyIEVWRU5UID0gQ09ORklHX0VWRU5UXG5pbXBvcnQgeyBhZGRNZXNzYWdlIH0gZnJvbSBcIi4uL2FjdGlvblwiXG5leHBvcnQgZnVuY3Rpb24gc29ja2V0TGlzdGVubmVyKCBzb2NrZXQsIGluc3RhbmNlQXBwICl7XG5cbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfTUVTU0FHRSwgbWVzc2FnZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwixJHDoyB2w6BvIFwiICsgRVZFTlQuUkVTUE9OU0VfTUVTU0FHRSwgbWVzc2FnZSlcbiAgICAgICAgXG4gICAgICAgIHZhciBhdXRoID0gaW5zdGFuY2VBcHAucHJvcHMuYXV0aFxuICAgICAgICBpZiggbWVzc2FnZS50b2tlbiAhPSBhdXRoLnRva2VuICl7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VfZGF0YS5faWQgPSBhdXRoLl9pZFxuICAgICAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goIGFkZE1lc3NhZ2UoIG1lc3NhZ2UgKSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG59IiwidmFyIGF1dGggPSBudWxsXG5pZiAodHlwZW9mKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJykge1xuICAgIGF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpXG59XG5cbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gYXV0aCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFRZUEUuQVVUSC5TRVRURVI6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKSlcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCJcbmlmICh0eXBlb2YgQ09ORklHX0FQUCA9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IENPTkZJR19BUFAgPSBudWxsXG59XG5cbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gQ09ORklHX0FQUCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFRZUEUuQ09ORklHLlNFVFRFUl9DT05GSUc6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNhc2UgVFlQRS5DT05WRVJUQVRJT04uU0VUVEVSOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIFxuICAgICAgICBjYXNlIFRZUEUuQ09OVkVSVEFUSU9OLkNIQU5HRTogXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZihpdGVtLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmUgOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmUgOiBmYWxzZSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuLy8vdGjDqm0gY8OhYyByZWR1Y2VyIGZ1bnRpb24gY+G6p24gxJHGsOG7o2MgY29tYmluZSB2w6BvIMSRw6J5XG5pbXBvcnQgU29ja2V0UmVkdWNlciBmcm9tIFwiLi9zb2NrZXQuanNcIlxuaW1wb3J0IEF1dGggZnJvbSBcIi4vYXV0aC5qc1wiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL2NvbmZpZy5qc1wiXG5pbXBvcnQgQ29udmVydGF0aW9uIGZyb20gXCIuL2NvbnZlcnRhdGlvbi5qc1wiXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9tZXNzYWdlLmpzXCJcbi8vLy8ga2jhu59pIHThuqFvIDEgYmnhur9uIGJp4buDdSBkaeG7hW4gUkVEVUNFUiBBTEwgXG5jb25zdCBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBcbiAgICBzb2NrZXQgICAgICA6IFNvY2tldFJlZHVjZXIsXG4gICAgYXV0aCAgICAgICAgOiBBdXRoLFxuICAgIGNvbmZpZyAgICAgIDogQ29uZmlnLFxuICAgIGNvbnZlcnRhdGlvbjogQ29udmVydGF0aW9uLFxuICAgIG1lc3NhZ2UgICAgIDogTWVzc2FnZVxufSk7XG5leHBvcnQgZGVmYXVsdCBSZWR1Y2VyOyIsIlxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCJcblxudmFyIG1lc3NhZ2VzID0gW11cbmlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIERhdGFTdHJpbmdNZXNzYWdlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZXNzYWdlcycpXG4gICAgaWYoIERhdGFTdHJpbmdNZXNzYWdlcyApe1xuICAgICAgICBcbiAgICAgICAgbWVzc2FnZXMgPSBKU09OLnBhcnNlKERhdGFTdHJpbmdNZXNzYWdlcylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IG1lc3NhZ2VzLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIFxuICAgICAgICBjYXNlIFRZUEUuTUVTU0FHRS5TRVRURVI6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXG4gICAgICAgIGNhc2UgVFlQRS5NRVNTQUdFLkFERF9NRVNTQUdFOlxuICAgICAgICAgICAgdmFyIG1lc3NhZ2VzID0gc3RhdGUubWFwKCBtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQuX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLm1lc3NhZ2UsIG1lc3NhZ2VfZGF0YTogWyAuLi5tZXNzYWdlLm1lc3NhZ2VfZGF0YSwgYWN0aW9uLnBheWxvYWQubWVzc2FnZV9kYXRhXSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsImltcG9ydCBUWVBFIGZyb20gJy4uL2FjdGlvbi90eXBlLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2tldFJlZHVjZXIoc3RhdGUgPSBudWxsICwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFRZUEUuU09DQ0tFVC5TRVRURVI6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==