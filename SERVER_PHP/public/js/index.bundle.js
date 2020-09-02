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
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Regular\";\n  src: url(\"/font/KozGoPro/KozGoPro-Regular.otf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Bold\";\n  src: url(\"/font/KozGoPro/KozGoPro-Bold.otf\");\n}\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.AppComponent {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 15px;\n  text-align: left;\n}\n\n.btn-google-login {\n  display: inline-block;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.6rem 1.5rem 0.4rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: color-level(#3f51b5, -8);\n  color: color-level(#3f51b5, -8);\n  border: 2px solid #3f51b5;\n}\n.btn-google-login:hover {\n  background-color: #3f51b5;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn-google-login:focus, .btn-google-login.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn-google-login:disabled, .btn-google-login.disabled, fieldset:disabled .btn-google-login {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n.my-facebook-button-class {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 2px solid #3f51b5;\n}\n.my-facebook-button-class:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #3f51b5;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.my-facebook-button-class:focus, .my-facebook-button-class.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.my-facebook-button-class:disabled, .my-facebook-button-class.disabled, fieldset:disabled .my-facebook-button-class {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.my-facebook-button-class i.fa.fa-facebook {\n  margin-right: 5px;\n  font-size: 18px;\n}\n\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.component-sidebar-chat {\n  float: left;\n  width: 30%;\n  box-sizing: border-box;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: 50%;\n  border: 2px double #9175ca;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 60px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 10px;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.component-list-message .wrapper-list-message {\n  padding: 15px;\n  height: 400px;\n  overflow-y: scroll;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 60px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}\n.component-user-chat-sidebar {\n  position: relative;\n}\n.component-user-chat-sidebar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  bottom: 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.component-user-chat-sidebar .user-chat {\n  position: relative;\n  padding: 15px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #c7c6c6;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 10px;\n  color: #28a745;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  background: -moz-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -webkit-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -o-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -ms-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n}\n.component-message-chat .chat-group .avatar {\n  max-width: 40px;\n  max-height: 40px;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content {\n  padding-left: 50px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  background: transparent !important;\n  font-size: 40px;\n  padding: 0 2px;\n  line-height: 1;\n}\n.component-message-chat .chat-group .message-content .text {\n  padding: 10px;\n  border-radius: 15px;\n  white-space: pre;\n  word-break: break-all;\n  background: -moz-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -webkit-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -o-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -ms-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}\n\n.component-list-emoji {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  padding: 10px;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  background-color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.component-list-emoji.first-show {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-list-emoji.show {\n  visibility: unset;\n  height: unset;\n  bottom: 100%;\n  left: 20px;\n  right: 20px;\n  opacity: 1;\n}\n\n.component-emoji {\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  color: #0d47a1;\n}\n\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  position: relative;\n  padding: 5px 80px 0 50px;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #e9ecef;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n  -ms-overflow-style: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 10px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: inline-block;\n  z-index: 1;\n  right: 45px;\n}\n.component-input-send-chat .hero-icon.react {\n  z-index: 1;\n  display: inline-block;\n  right: 10px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"󰅗\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}\n\n.component-register {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  padding: 5px;\n}\n.component-register:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-register .left__register {\n  float: left;\n  width: 40%;\n  padding: 10px;\n}\n.component-register .right__register {\n  float: right;\n  width: 60%;\n  padding: 10px;\n}\n@media (max-width: 768px) {\n  .component-register .left__register, .component-register .right__register {\n    float: none;\n    width: 100%;\n  }\n}\n.component-register .conpany {\n  line-height: 1;\n  font-size: 18px;\n}\n.component-register .register-address {\n  background: #f2f2f2 none repeat scroll 0 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  display: block;\n  margin: 10px 0;\n  padding: 10px 10px;\n  position: relative;\n}\n.component-register .register-address h6 {\n  font-weight: 100;\n  font-size: 15px;\n}\n.component-register .intro-chat-register {\n  font-size: 18px;\n  color: #f44336;\n}\n.component-register .form-input {\n  padding-top: 10px;\n}\n.component-register .form-input label {\n  font-size: 15px;\n  color: #212529;\n  display: block;\n  padding-bottom: 10px;\n}\n.component-register .form-input input {\n  display: block;\n  width: 100%;\n  padding: 8px 15px;\n  font-size: 16px;\n  border-radius: 0;\n  border: 1px solid #6c757d;\n  outline: none;\n}\n.component-register .form-input input:focus {\n  color: #0d47a1;\n  border: 1px solid #0d47a1;\n}\n.component-register .form-input i {\n  font-style: normal;\n  color: #dc3545;\n}\n.component-register .btn-send-mail-contact {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 2px solid #3f51b5;\n}\n.component-register .btn-send-mail-contact:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #3f51b5;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.component-register .btn-send-mail-contact:focus, .component-register .btn-send-mail-contact.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.component-register .btn-send-mail-contact:disabled, .component-register .btn-send-mail-contact.disabled, fieldset:disabled .component-register .btn-send-mail-contact {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(\"/font/IconFont/webfont.eot?v=1.4.57\");\n  src: url(\"/font/IconFont/webfont.eot?#iefix&v=1.4.57\") format(\"embedded-opentype\"), url(\"/font/IconFont/webfont.woff2?v=1.4.57\") format(\"woff2\"), url(\"/font/IconFont/webfont.woff?v=1.4.57\") format(\"woff\"), url(\"/font/IconFont/webfont.ttf?v=1.4.57\") format(\"truetype\"), url(\"/font/IconFont/webfont.svg?v=1.4.57\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-box-outline::before {\n  content: \"\\F0007\";\n}\ni.hero-icon.hero-account-edit-outline::before {\n  content: \"\\F0FFB\";\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-calendar::before {\n  content: \"\\F00ED\";\n}\ni.hero-icon.hero-calendar-month-outline::before {\n  content: \"\\F0E18\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-clock-check-outline::before {\n  content: \"\\F0FA9\";\n}\ni.hero-icon.hero-close::before {\n  content: \"\\F0156\";\n}\ni.hero-icon.hero-close-box-outline::before {\n  content: \"\\F0158\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-delete-variant::before {\n  content: \"\\F01B3\";\n}\ni.hero-icon.hero-email-check-outline::before {\n  content: \"\\F0AB2\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-eye-outline::before {\n  content: \"\\F06D0\";\n}\ni.hero-icon.hero-file-document-edit-outline::before {\n  content: \"\\F0DC9\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-format-page-break::before {\n  content: \"\\F06D7\";\n}\ni.hero-icon.hero-google::before {\n  content: \"\\F02AD\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-import-outline::before {\n  content: \"\\F0F9C\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-layers-search-outline::before {\n  content: \"\\F1207\";\n}\ni.hero-icon.hero-lock-outline::before {\n  content: \"\\F0341\";\n}\ni.hero-icon.hero-magnify-scan::before {\n  content: \"\\F1276\";\n}\ni.hero-icon.hero-menu-down::before {\n  content: \"\\F035D\";\n}\ni.hero-icon.hero-menu-down-outline::before {\n  content: \"\\F06B6\";\n}\ni.hero-icon.hero-message-bulleted::before {\n  content: \"\\F06A2\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-monitor-dashboard::before {\n  content: \"\\F0A07\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-scatter-plot-outline::before {\n  content: \"\\F0ECA\";\n}\ni.hero-icon.hero-segment::before {\n  content: \"\\F0ECB\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-snowflake-variant::before {\n  content: \"\\F0F2A\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-table-star::before {\n  content: \"\\F13CB\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-tag::before {\n  content: \"\\F04F9\";\n}\ni.hero-icon.hero-tag-heart::before {\n  content: \"\\F068B\";\n}\ni.hero-icon.hero-tag-heart-outline::before {\n  content: \"\\F0BCF\";\n}\ni.hero-icon.hero-tag-multiple-outline::before {\n  content: \"\\F12F7\";\n}\ni.hero-icon.hero-tag-text-outline::before {\n  content: \"\\F04FD\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-theme-light-dark::before {\n  content: \"\\F050E\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}", ""]);
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
      var convertations = this.props.convertations;
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
          messages = [{
            content: "chúng tôi có thể giúp gì cho bạn",
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
    messages: state.message
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




var HeadInfo = /*#__PURE__*/function (_Component) {
  _inherits(HeadInfo, _Component);

  var _super = _createSuper(HeadInfo);

  function HeadInfo() {
    _classCallCheck(this, HeadInfo);

    return _super.apply(this, arguments);
  }

  _createClass(HeadInfo, [{
    key: "render",
    value: function render() {
      console.log("render lại head list message");
      var convertations = this.props.convertations;
      var convertationActive = convertations.find(function (convertation) {
        return convertation.isActive;
      });

      if (!convertationActive) {
        return null;
      }

      var timeOnline = 'オンライン';
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
      }, timeOnline))));
    }
  }]);

  return HeadInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    convertations: state.convertation
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
      }, message.content))));
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
        type: "fb",
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
        alert("have error login google");
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
      alert("can't login google");
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
        alert("have error login google");
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
      auth.avatar = 'http://babysitter.trust-growth.co.jp/uploads/avatar.jpg';
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
  });
  socket.on('connect_error', function () {
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error");
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
    console.log(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JVSUxERVIvU0NTUy9jaGF0LnNjc3M/NjFkZCIsIndlYnBhY2s6Ly8vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NvbnZlcnRhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FbW9qaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9JbnB1dFNlbmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGVmdEluZm9yQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9MaXN0RW1vamkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2VIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9NeUxvZ2luRmFjZWJvb2suanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTXlMb2dpbkdvb2dsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9SZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9TaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5L3NvY2tldF9saXN0ZW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvY29udmVydGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvc29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsic2V0dGVyU29ja2V0Iiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJUWVBFIiwiU09DQ0tFVCIsIlNFVFRFUiIsInBheWxvYWQiLCJzZXR0ZXJBdXRoIiwiYXV0aCIsIkFVVEgiLCJzZXR0ZXJDb252ZXJ0YXRpb24iLCJjb252IiwiQ09OVkVSVEFUSU9OIiwic2V0dGVyTWVzc2FnZSIsIm1lc3MiLCJNRVNTQUdFIiwiY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIiwiaWQiLCJDSEFOR0UiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsIkFERF9NRVNTQUdFIiwiYWRkTWVzc2FnZVNlbmRUb01lIiwiQ0hBTk5FTCIsIkFERF9NRVNTQUdFX1NFTkRfVE9fTUUiLCJDT05GSUciLCJTRVRURVJfQ09ORklHIiwiQXBwIiwicHJvcHMiLCJtYXRjaCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpZW50IiwiY29ubmVjdCIsIkNoYXQiLCJmZXRjaEFQSUNoYW5uZWxzIiwiY29uZmlnIiwiQ29udmVydGF0aW9uIiwiZGlzcGF0Y2giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwiaXNBY3RpdmUiLCJjaGFuZ2VBY3RpdmVVc2VyIiwiX2lkIiwiYXZhdGFyIiwibmFtZSIsImNvbnZlcnRhdGlvbnMiLCJjb252ZXJ0YXRpb24iLCJFbW9qaSIsImV2ZW50IiwiaW5wdXQiLCJjb250ZW50IiwidmFsdWUiLCJzeW1ib2wiLCJhZGRJY29uSW5wdXRDaGF0IiwiSW5wdXRTZW5kIiwiZW1vamlzIiwiY29udkFjdGl2ZSIsImZpbmQiLCJvYmpNZXNzIiwic3R5bGUiLCJ0b2tlbiIsInVzZXIiLCJjaGFubmVsX2lkIiwiY29tcG9uZW50Iiwic2VuZCIsImtleUNvZGUiLCJzaGlmdEtleSIsInRhcmdldCIsInNldFN0YXRlIiwic2VuZENoYXQiLCJ3b3JkcyIsInRyaW0iLCJzcGxpdCIsIndvcmRMYXN0ZXN0IiwibGVuZ3RoIiwiZW1vamlzQ2FsbCIsIkNPTkZJR19FTU9KSVMiLCJmaWx0ZXIiLCJpdGVtIiwic2lnbiIsImxhc3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwid2luZG93Iiwib25jbGljayIsImNvbnRhaW5zIiwicmVtb3ZlIiwic2V0VGltZW91dCIsInNob3dMaXN0RW1vamkiLCJoYW5kbGVTZW5kTWVzc2FnZURvd24iLCJoYW5kbGVTZW5kTWVzc2FnZVVwIiwiaGFuZGxlU2VuZENoYXRDbGljayIsImJ0blNlbmRNZXNzYWdlIiwiaGFuZGxlU2VuZE1lc3NhZ2VSZWFjdFN1Ym1pdCIsIkxlZnRJbmZvckF1dGgiLCJjb21wYW55X25hbWUiLCJ0YXhfY29kZV9kYXRlIiwiY29tcGFueV9hZGRyZXNzX3N0cmVldCIsImNvbXBhbnlfYWRkcmVzc19sb2NhbGl0eSIsImNvbXBhbnlfYWRkcmVzc19yZWdpb24iLCJjb21wYW55X2FkZHJlc3NfY291bnRyeSIsImpvaW4iLCJwaG9uZV9vbmUiLCJjb21wYW55X21haWwiLCJMaXN0RW1vamkiLCJtYXAiLCJMaXN0TWVzc2FnZSIsImRvbVNjcm9sbCIsImRvbVdyaXRlciIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIiQiLCJvbiIsImlubmVySGVpZ2h0IiwiY29udmVydGF0aW9uQWN0aXZlIiwibWVzc2FnZXMiLCJtZXNzYWdlX2RhdGEiLCJjcmVhdGVkQXQiLCJyZWFkIiwia2V5IiwiSGVhZEluZm8iLCJ0aW1lT25saW5lIiwiaXNPbmxpbmUiLCJNZXNzYWdlIiwiY2xhc3NUeXBlTWVzc2FnZSIsIk15TG9naW5GYWNlYm9vayIsInJlc3BvbnNlIiwiYXV0aGVuIiwiYWNjZXNzVG9rZW4iLCJ1c2VySUQiLCJlbWFpbCIsInBpY3R1cmUiLCJkYXRhIiwidXJsIiwibW9iaWxlIiwicmVnaXN0ZXJMb2dpbkNoYXQiLCJhY3Rpb24iLCJ1cmxfcmVhbHRpbWUiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3AiLCJvayIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImVycm9ycyIsImFsZXJ0IiwiY29tcG9uZW50Q2xpY2tlZCIsInJlc3BvbnNlRmFjZWJvb2siLCJNeUxvZ2luR29vZ2xlIiwicHJvZmlsZU9iaiIsImdvb2dsZUlkIiwiaW1hZ2VVcmwiLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlR29vZ2xlRXJyb3IiLCJSZWdpc3RlciIsImVycm9yRmllbGQiLCJlIiwidmFsaWRhdG9yIiwiaW52YWxpZExvZ2luQ2hhdCIsInByb2dyZXNzIiwicHJldmVudERlZmF1bHQiLCJMb2dpbkNoYXQiLCJTaWRlYmFyIiwic2lkZWJhciIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIlNpZGViYXJMc3RDb252ZXJ0YXRpb24iLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiUmVkdWNlciIsInN1YnNjcmliZSIsImdldFN0YXRlIiwid3JhcHBlciIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsIkNPTkZJR19BUFAiLCJFVkVOVCIsIkNPTkZJR19FVkVOVCIsInNvY2tldEluaXRpYWxDb25uZWN0Iiwic29ja2V0SU9DbGllbnQiLCJpbnN0YW5jZUFwcCIsIkFwcGxpY2F0aW9uRG9tIiwic29ja2V0TGlzdGVubmVyIiwiam9pblJvb21Jbml0IiwiZW1pdCIsIkpPSU5fQ0hBTk5FTCIsIm9wdGlvbiIsInNsdWciLCJjb252ZXJ0YXRpb25JZEFjdGl2ZSIsInBhcmFtcyIsImNoYW5uZWxzIiwidXNlcl9pZCIsInB1c2giLCJyZXBsYWNlIiwiU0VORF9NRVNTQUdFIiwiUkVTUE9OU0VfTUVTU0FHRSIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJjb21iaW5lUmVkdWNlcnMiLCJTb2NrZXRSZWR1Y2VyIiwiQXV0aCIsIkNvbmZpZyIsIkRhdGFTdHJpbmdNZXNzYWdlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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SSxhQUFPd0ksTUFBTSxDQUFDdkksT0FBZDs7QUFDSjtBQUNJLGFBQU8wQixLQUFQO0FBSlI7QUFNSCxDOzs7Ozs7Ozs7OztBQ1JELGUiLCJmaWxlIjoianMvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMiEuL2NoYXQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS296R29Qcm8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvS296R29Qcm8vS296R29Qcm8tUmVndWxhci5vdGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIktvekdvUHJvLUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0tvekdvUHJvL0tvekdvUHJvLUJvbGQub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uQXBwQ29tcG9uZW50IHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmJ0bi1nb29nbGUtbG9naW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC42cmVtIDEuNXJlbSAwLjRyZW07XFxuICBmb250LXNpemU6IDAuODFyZW07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luOiAwLjM3NXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbGV2ZWwoIzNmNTFiNSwgLTgpO1xcbiAgY29sb3I6IGNvbG9yLWxldmVsKCMzZjUxYjUsIC04KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZjUxYjU7XFxufVxcbi5idG4tZ29vZ2xlLWxvZ2luOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBjb2xvci1sZXZlbCgjM2Y1MWI1LCAtOCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uYnRuLWdvb2dsZS1sb2dpbjpmb2N1cywgLmJ0bi1nb29nbGUtbG9naW4uZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uYnRuLWdvb2dsZS1sb2dpbjpkaXNhYmxlZCwgLmJ0bi1nb29nbGUtbG9naW4uZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5idG4tZ29vZ2xlLWxvZ2luIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuXFxuLm15LWZhY2Vib29rLWJ1dHRvbi1jbGFzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW0gMC42cmVtO1xcbiAgZm9udC1zaXplOiAwLjgxcmVtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIG1hcmdpbjogMC4zNzVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZjUxYjU7XFxufVxcbi5teS1mYWNlYm9vay1idXR0b24tY2xhc3M6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGNvbG9yLWxldmVsKCMzZjUxYjUsIC04KTtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5teS1mYWNlYm9vay1idXR0b24tY2xhc3M6Zm9jdXMsIC5teS1mYWNlYm9vay1idXR0b24tY2xhc3MuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ubXktZmFjZWJvb2stYnV0dG9uLWNsYXNzOmRpc2FibGVkLCAubXktZmFjZWJvb2stYnV0dG9uLWNsYXNzLmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAubXktZmFjZWJvb2stYnV0dG9uLWNsYXNzIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuLm15LWZhY2Vib29rLWJ1dHRvbi1jbGFzcyBpLmZhLmZhLWZhY2Vib29rIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uYmctY2hhdC10ZW1hbGF0ZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud3JhcHBlci1wYWdlLWNoYXQge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLndyYXBwZXItcGFnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAjRjVGNUY1O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tb3otc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW8tc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW8tc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1zLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubXlpbmZvIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFweDtcXG4gIGxlZnQ6IDFweDtcXG4gIHJpZ2h0OiAxcHg7XFxuICBib3R0b206IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjOTE3NWNhO1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhci5hY3RpdmUtb25saW5lIHtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjMDBjODUxO1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5uYW1lIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtYXgtd2lkdGg6IDI3Y2g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgfVxcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gICAgbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIC5teWluZm8ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbiAgLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgfVxcbiAgLm15aW5mbyAuYXZhdGFyIC5uYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tb3otc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tb3otc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW8tc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1zLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG4udGljb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDE3cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICB3aWR0aDogNnB4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgxKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTUwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgyKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgzKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNDUwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDQwMG1zO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICAyOCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIH1cXG4gIDQ0JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgfVxcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzZjNjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZSAuc3RhdGUtYXZhdGFyIHtcXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZSAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDU7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA3cHggN3B4IDdweCA1NXB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLmxhc3QtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIH1cXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDdweCA3cHggN3B4IDU1cHg7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAubmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgY29sb3I6ICMyOGE3NDU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC50aW1lLW9ubGluZS5hY3RpdmUtbm93IHtcXG4gIGNvbG9yOiAjOGJjMzRhO1xcbn1cXG5cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdC50eXBpbmctY2hhdC1tZXNzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdC50eXBpbmctY2hhdC1tZXNzc2FnZS5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAuYXZhdGFyIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIHtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLkVNT0pJIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwYWRkaW5nOiAwIDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50ZXh0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQuRU1PSkkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50ZXh0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC50eXBpbmctbWVzc2FnZSAudHlwaW5nLXRleHQge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4uY29tcG9uZW50LWxpc3QtZW1vamkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtZW1vamkuZmlyc3Qtc2hvdyB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtZW1vamkuc2hvdyB7XFxuICB2aXNpYmlsaXR5OiB1bnNldDtcXG4gIGhlaWdodDogdW5zZXQ7XFxuICBib3R0b206IDEwMCU7XFxuICBsZWZ0OiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY29tcG9uZW50LWVtb2ppIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggODBweCAwIDUwcHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDdhMTtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0ID4gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGNvbG9yOiAjMGQ2ZWZkO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLmVtb3RpY29uIHtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5oZXJvLWljb24uc2VuZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB6LWluZGV4OiAxO1xcbiAgcmlnaHQ6IDQ1cHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5oZXJvLWljb24ucmVhY3Qge1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZSB7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGNvbnRlbnQ6IFxcXCLzsIWXXFxcIjtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXIgaW1nIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXI6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIGltZyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5jb21wb25lbnQtcmVnaXN0ZXIge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlcjphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5sZWZ0X19yZWdpc3RlciB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5yaWdodF9fcmVnaXN0ZXIge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1yZWdpc3RlciAubGVmdF9fcmVnaXN0ZXIsIC5jb21wb25lbnQtcmVnaXN0ZXIgLnJpZ2h0X19yZWdpc3RlciB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuY29ucGFueSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAucmVnaXN0ZXItYWRkcmVzcyB7XFxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAucmVnaXN0ZXItYWRkcmVzcyBoNiB7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5pbnRyby1jaGF0LXJlZ2lzdGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjZjQ0MzM2O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgaW5wdXQ6Zm9jdXMge1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGkge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgY29sb3I6ICNkYzM1NDU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW0gMC42cmVtO1xcbiAgZm9udC1zaXplOiAwLjgxcmVtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIG1hcmdpbjogMC4zNzVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZjUxYjU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgY29sb3ItbGV2ZWwoIzNmNTFiNSwgLTgpO1xcbiAgY29sb3I6ICMzZjUxYjU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0OmZvY3VzLCAuY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3QuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Q6ZGlzYWJsZWQsIC5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdC5kaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0ljb25Gb250L3dlYmZvbnQuZW90P3Y9MS40LjU3XFxcIik7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5lb3Q/I2llZml4JnY9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcIi9mb250L0ljb25Gb250L3dlYmZvbnQud29mZjI/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC53b2ZmP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC50dGY/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5zdmc/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuaS5oZXJvLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbmkuaGVyby1pY29uOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDAwN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1lZGl0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkZCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LWdyb3VwLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjU4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LXRpZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBDQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWlycG9ydDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NEJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LXVwLWJvbGQtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzM5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hdXRvLWZpeDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWJhbGxvdC1yZWNvdW50LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzNBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxlbmRhcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRURcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhbGVuZGFyLW1vbnRoLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTE4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYXJkLWFjY291bnQtbWFpbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FydC1wbHVzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExQ1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLW5mYzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlcnRpZmljYXRlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTg4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG9jay1jaGVjay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZBOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvc2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTU2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG9zZS1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNyZWF0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY3NFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZGVsZXRlLXZhcmlhbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUIzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbWFpbC1jaGVjay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFCMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1haWwtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVFNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZXllLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkQwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1maWxlLWRvY3VtZW50LWVkaXQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQzlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm0tc2VsZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQwMVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybWF0LWxpc3QtdGV4dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNkZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm1hdC1wYWdlLWJyZWFrOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZEN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZ29vZ2xlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJBRFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZ29vZ2xlLWFkczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhhbmQtb2theTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhlYXJ0LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTU3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1ob21lLWltcG9ydC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY5Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taG9tZS1tYXAtbWFya2VyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taHVtYW4tbWFsZS1jaGlsZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOENcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWxhcHRvcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWxheWVycy1zZWFyY2gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMDdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWxvY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNDFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1hZ25pZnktc2Nhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNzZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lbnUtZG93bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNURcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lbnUtZG93bi1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZCNlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS1idWxsZXRlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QTJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtY29nLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTcyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLXRleHQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vbml0b3ItZGFzaGJvYXJkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEEwN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbmV3c3BhcGVyLXZhcmlhbnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMDNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDA0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1wbHVzLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1yZXNwb25zaXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ1RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2NhdHRlci1wbG90LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUNBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWdtZW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVDQlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VsZWN0aW9uLXNlYXJjaDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMDVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNub3dmbGFrZS12YXJpYW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEYyQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc3Rhci1ib3gtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0aWNrZXItZW1vamk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzg1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWJsZS1zdGFyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNDQlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFibGV0LWlwYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEY5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWctaGVhcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjhCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWctaGVhcnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCQ0ZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhZy1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJGN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLXRleHQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RkRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRlbGV2aXNpb24tY2xlYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTEwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10aGVtZS1saWdodC1kYXJrOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDUwRVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdXBkYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZCMFxcXCI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgVFlQRSBmcm9tIFwiLi90eXBlXCJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJTb2NrZXQoc29ja2V0KXtcbiAgICBjb25zb2xlLmxvZyhzb2NrZXQgLCBcIiBzZXQgc29ja2V0IFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLlNPQ0NLRVQuU0VUVEVSLFxuICAgICAgICBwYXlsb2FkIDogc29ja2V0XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckF1dGgoIGF1dGggKXtcbiAgICBjb25zb2xlLmxvZyhhdXRoICwgXCIgc2V0IGF1dGggXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6IFRZUEUuQVVUSC5TRVRURVIsXG4gICAgICAgIHBheWxvYWQgOiBhdXRoXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckNvbnZlcnRhdGlvbiggY29udiApe1xuICAgIGNvbnNvbGUubG9nKGNvbnYgLCBcIiBzZXQgY29udiBcIilcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlIDogVFlQRS5DT05WRVJUQVRJT04uU0VUVEVSLFxuICAgICAgICBwYXlsb2FkIDogY29udlxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJNZXNzYWdlKCBtZXNzICl7XG4gICAgY29uc29sZS5sb2cobWVzcyAsIFwiIHNldCBtZXNzIFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLk1FU1NBR0UuU0VUVEVSLFxuICAgICAgICBwYXlsb2FkIDogbWVzc1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbiggaWQgKXtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhpZCAsIFwiY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLkNPTlZFUlRBVElPTi5DSEFOR0UsXG4gICAgICAgIHBheWxvYWQgOiBpZFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlKCBtZXNzYWdlICl7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSAsIFwiIGFkZE1lc3NhZ2UgXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6IFRZUEUuTUVTU0FHRS5BRERfTUVTU0FHRSxcbiAgICAgICAgcGF5bG9hZCA6IG1lc3NhZ2VcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlU2VuZFRvTWUoIG1lc3NhZ2UgKXtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlICwgXCIgYWRkTWVzc2FnZVNlbmRUb01lIFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuQUREX01FU1NBR0VfU0VORF9UT19NRSxcbiAgICAgICAgcGF5bG9hZCA6IG1lc3NhZ2VcbiAgICB9XG59IiwiY29uc3QgVFlQRSA9ICB7XG4gIFxuICBTT0NDS0VUIDoge1xuICAgIFNFVFRFUjogXCJTT0NDS0VUX1NFVFRFUlwiXG4gIH0sXG4gIEFVVEg6IHtcbiAgICBTRVRURVI6IFwiQVVUSF9TRVRURVJcIlxuICB9LFxuICBDT05WRVJUQVRJT046IHtcbiAgICBTRVRURVI6IFwiQ09OVkVSVEFUSU9OX1NFVFRFUlwiLFxuICAgIENIQU5HRTogXCJDT05WRVJUQVRJT05fQ0hBTkdFXCJcbiAgfSxcbiAgTUVTU0FHRToge1xuICAgIFNFVFRFUjogXCJNRVNTQUdFX1NFVFRFUlwiLFxuICAgIEFERF9NRVNTQUdFOiBcIk1FU1NBR0VfQUREXCJcbiAgfSxcbiAgQ09ORklHOiB7XG4gICAgU0VUVEVSX0NPTkZJRyA6IFwiU0VUVEVSX0NPTkZJR1wiXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRZUEU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5cbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3Rlci5qc3hcIlxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0LmpzeCdcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYXcgYXBwXCIpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiQXBwbGljYXRpb25cIiBjbGFzc05hbWU9XCJBcHBDb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NoYXRcIiByZW5kZXI9eygpID0+IDxDaGF0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2hhdC9yZWdpc3RlclwiIHJlbmRlcj17KCkgPT4gPFJlZ2lzdGVyIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9jaGF0LzpzbHVnJyByZW5kZXI9eyh7IG1hdGNoIH0pID0+IDxDaGF0IG1hdGNoPXttYXRjaH0gLz4gfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hZG1pbi9jaGF0XCIgcmVuZGVyPXsoKSA9PiA8Q2hhdCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FkbWluL2NoYXQvcmVnaXN0ZXJcIiByZW5kZXI9eygpID0+IDxSZWdpc3RlciAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWRtaW4vY2hhdC86c2x1ZycgcmVuZGVyPXsoeyBtYXRjaCB9KSA9PiA8Q2hhdCBtYXRjaD17bWF0Y2h9IC8+IH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50ICA6IHN0YXRlLmNsaWVudFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QgKG1hcFN0YXRlVG9Qcm9wcykoQXBwKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vLyBzb2Nja2V0IFxuXG5pbXBvcnQgeyBmZXRjaEFQSUNoYW5uZWxzIH0gZnJvbSBcIi4uL2xpYnJhcnkvc2VydmljZS5qc1wiXG5cblxuLy8vLyBkZWZpbmVcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXIuanN4XCJcbmltcG9ydCBMaXN0TWVzc2FnZSBmcm9tIFwiLi9MaXN0TWVzc2FnZS5qc3hcIlxuXG5jbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICAgICAgaWYoIHRoaXMucHJvcHMuYXV0aCApe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmZXRjaEFQSUNoYW5uZWxzKHRoaXMucHJvcHMuYXV0aCwgdGhpcylcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYoICF0aGlzLnByb3BzLmF1dGggKXtcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvY2hhdC9yZWdpc3RlclwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWNoYXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItcGFnZS1jaGF0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0TWVzc2FnZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoOiBzdGF0ZS5hdXRoLFxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGF0KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCB7IGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25cIlxuXG5jbGFzcyBDb252ZXJ0YXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY2hhbmdlQWN0aXZlVXNlciA9IChpZCkgPT4ge1xuXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uKGlkKSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKS5jbGFzc0xpc3QuYWRkKCdjb252ZXJ0YXRpb24tY2hhbmdlJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciB7IGNvbnYgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgdmFyIGNsYXNzQWN0aXZlTWVzc2FnZSA9IGNvbnYuaXNBY3RpdmUgJiYgJ2FjdGl2ZS1tZXNzYWdlJ1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlQWN0aXZlVXNlcihjb252Ll9pZCl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NBY3RpdmVNZXNzYWdlICsgXCIgYWN0aXZlIHVzZXItY2hhdFwifT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb252LmF2YXRhcn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbnYubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUuY29udmVydGF0aW9uXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbnZlcnRhdGlvbik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5cbmNsYXNzIEVtb2ppIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBhZGRJY29uSW5wdXRDaGF0ID0gZXZlbnQgPT4ge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKVxuICAgIGlmKGlucHV0KXtcbiAgICAgIHZhciBjb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAvLy8gYWRkIGljb24gXG4gICAgICBjb250ZW50ID0gY29udGVudCArIHRoaXMucHJvcHMuc3ltYm9sXG4gICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnRcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8aSBjbGFzc05hbWU9XCJjb21wb25lbnQtZW1vamlcIiBvbkNsaWNrPXt0aGlzLmFkZEljb25JbnB1dENoYXR9Pnt0aGlzLnByb3BzLnN5bWJvbH08L2k+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRW1vamkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGlzdEVtb2ppIGZyb20gXCIuL0xpc3RFbW9qaS5qc3hcIjtcbmltcG9ydCB7IHNlbmQgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxuXG5jbGFzcyBJbnB1dFNlbmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNlbmRDaGF0OiBmYWxzZSB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBvbmVudC1lbW9qaScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZW1vamlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1lbW9qaXNcIilcbiAgICAgICAgICAgIGlmIChlbW9qaXMpIHtcbiAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbW9qaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvdy10ZW1wXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctdGVtcFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TGlzdEVtb2ppID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHZhciBlbW9qaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWVtb2ppc1wiKVxuICAgICAgICBpZiAoZW1vamlzKSB7XG4gICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LmFkZChcInNob3ctdGVtcFwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU2VuZE1lc3NhZ2VSZWFjdFN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMsIGF1dGggfSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxuXG4gICAgICAgIHZhciBvYmpNZXNzID0geyBcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiIPCfkp0gXCIsIFxuICAgICAgICAgICAgc3R5bGU6IFwiRU1PSklcIiwgXG4gICAgICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy5hdXRoLnRva2VuLFxuICAgICAgICAgICAgdXNlcjogYXV0aC5faWQsXG4gICAgICAgICAgICBjaGFubmVsX2lkOiBjb252QWN0aXZlLl9pZCxcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbmQob2JqTWVzcylcbiAgICB9XG5cbiAgICBidG5TZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpXG4gICAgICAgIGlmICghaW5wdXQpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMsIGF1dGggfSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxuXG4gICAgICAgIHZhciBvYmpNZXNzID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogaW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgc3R5bGU6IFwiXCIsIFxuICAgICAgICAgICAgdG9rZW46IHRoaXMucHJvcHMuYXV0aC50b2tlbixcbiAgICAgICAgICAgIHVzZXI6IGF1dGguX2lkLFxuICAgICAgICAgICAgY2hhbm5lbF9pZDogY29udkFjdGl2ZS5faWQsXG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIH1cblxuICAgICAgICBzZW5kKG9iak1lc3MpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG5cbiAgICBoYW5kbGVTZW5kTWVzc2FnZURvd24gPSAoZXZlbnQpID0+IHtcblxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuIGZhbHNlXG4gICAgICAgIFxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcblxuICAgICAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxuXG4gICAgICAgICAgICB2YXIgb2JqTWVzcyA9IHsgXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJcIiwgXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMucHJvcHMuYXV0aC50b2tlbixcbiAgICAgICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcbiAgICAgICAgICAgICAgICBjaGFubmVsX2lkOiBjb252QWN0aXZlLl9pZCxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmQob2JqTWVzcylcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kQ2hhdDogdHJ1ZSB9KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vLyBzcGFjZSBjaGFyYWN0ZXIgcmVwbGFjZSBlbW9qaVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMikge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgLy8vIGdldCB3b3JkIGxhc3RcbiAgICAgICAgICAgIHZhciB3b3JkcyA9IGNvbnRlbnQudHJpbSgpLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgdmFyIHdvcmRMYXN0ZXN0ID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIC8vLy8gY2hlY2sgaGF2ZSBzeXNib2wgXG4gICAgICAgICAgICB2YXIgZW1vamlzQ2FsbCA9IENPTkZJR19FTU9KSVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zaWduID09IHdvcmRMYXN0ZXN0KVxuICAgICAgICAgICAgaWYoZW1vamlzQ2FsbC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIC8vLyBhZGQgaWNvbiBcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gY29udGVudC50cmltKCkubGFzdEluZGV4T2YoXCIgXCIpXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjb250ZW50LnN1YnN0cmluZygwLCBsYXN0SW5kZXgpICsgXCIgXCIgKyBlbW9qaXNDYWxsWzBdLnN5bWJvbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVNlbmRNZXNzYWdlVXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbmRDaGF0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZENoYXQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVTZW5kQ2hhdENsaWNrID0gKCkgPT4ge1xuICAgICAgICAvLy8vIHNlbmQgY2xhc3MgaXMgd3JpdGUgbWVzc2FnZVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxuICAgICAgICAgICAgaWYoICFjb252QWN0aXZlICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1pcy13cml0ZS1tZXNzYWdlXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCBcIj5cbiAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zdGlja2VyLWVtb2ppIGVtb3RpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TGlzdEVtb2ppfVxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIGlkPVwianMtaW5wdXQtY2hhdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZURvd259XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VVcH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kQ2hhdENsaWNrfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuODoeODg+OCu+ODvOOCuOOCkuabuOOBjy4uLlwiXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tc2VuZC1vdXRsaW5lIHNlbmRcIiBvbkNsaWNrPXt0aGlzLmJ0blNlbmRNZXNzYWdlfT48L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZSByZWFjdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VSZWFjdFN1Ym1pdH0+PC9pPlxuICAgICAgICAgICAgICAgIDxMaXN0RW1vamkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGggICAgICAgICA6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvbixcbiAgICAgICAgc29ja2V0ICAgICAgIDogc3RhdGUuc29ja2V0XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKElucHV0U2VuZCk7XG4iLCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgTXlMb2dpbkZhY2Vib29rIGZyb20gJy4vTXlMb2dpbkZhY2Vib29rLmpzeCdcbmltcG9ydCBNeUxvZ2luR29vZ2xlIGZyb20gXCIuL015TG9naW5Hb29nbGUuanN4XCJcblxuY2xhc3MgTGVmdEluZm9yQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9fcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29ucGFueVwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWFjY291bnQtZ3JvdXAtb3V0bGluZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby11cGRhdGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3RoaXMucHJvcHMuY29uZmlnLnRheF9jb2RlX2RhdGV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8taG9tZS1tYXAtbWFya2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX3N0cmVldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX2xvY2FsaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3NfcmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3NfY291bnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2VsbHBob25lLW5mY1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXpeacrOOBrumbu+ipse+8mlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcInRlbDpcIiArIHRoaXMucHJvcHMuY29uZmlnLnBob25lX29uZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5waG9uZV9vbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jYXJkLWFjY291bnQtbWFpbC1vdXRsaW5lXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCJtYWlsdG86XCIgKyB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X21haWx9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImludHJvLWNoYXQtcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAg44OB44Oj44OD44OI44KS6Kit5a6a44GZ44KL44Gf44KB44Gu5oOF5aCx44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCIOS4iuiomOOBruaDheWgseOBruS/neitt+OBq+WKquOCgeOBpuOBhOOBvuOBmVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TXlMb2dpbkZhY2Vib29rLz5cbiAgICAgICAgICAgICAgICAgICAgPE15TG9naW5Hb29nbGUgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoOiBzdGF0ZS5hdXRoLFxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMZWZ0SW5mb3JBdXRoKVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBFbW9qaSBmcm9tIFwiLi9FbW9qaS5qc3hcIlxuXG5jbGFzcyBMaXN0RW1vamkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJqcy1lbW9qaXNcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1lbW9qaVwiPlxuICAgICAgICB7IENPTkZJR19FTU9KSVMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEVtb2ppIGtleT17aXRlbS5zaWdufSBzeW1ib2w9e2l0ZW0uc3ltYm9sfSBzaWduPXtpdGVtLnNpZ259IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RW1vamlcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgTGlzdE1lc3NhZ2VIZWFkZXIgZnJvbSBcIi4vTGlzdE1lc3NhZ2VIZWFkZXIuanN4XCJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2UuanN4XCJcbmltcG9ydCBJbnB1dFNlbmQgZnJvbSBcIi4vSW5wdXRTZW5kLmpzeFwiXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcbi8vIGltcG9ydCBNZXNzYWdlQ2hhdFR5cGluZyBmcm9tIFwiLi9NZXNzYWdlQ2hhdFR5cGluZy5qc3hcIlxuXG5jbGFzcyBMaXN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cbiAgICAgICAgdmFyIGRvbVNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLWJvdHRvbVwiKVxuICAgICAgICB2YXIgZG9tV3JpdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpXG5cbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnZlcnRhdGlvbi1jaGFuZ2UnKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnZlcnRhdGlvbi1jaGFuZ2UnKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgZG9tU2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1zY3JvbGwtdG8tYm90dG9tXCIpXG4gICAgICAgICAgICB2YXIgZG9tV3JpdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpXG4gICAgICAgICAgICBkb21TY3JvbGwuc2Nyb2xsVG9wID0gZG9tU2Nyb2xsLnNjcm9sbEhlaWdodFxuICAgICAgICB9ZWxzZSBpZihcbiAgICAgICAgICAgIGRvbVNjcm9sbCAmJiBcbiAgICAgICAgICAgIGRvbVdyaXRlciAmJiBcbiAgICAgICAgICAgIGRvbVdyaXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvbGxvdy1jb252ZXJzYXRpb24nKSl7XG4gICAgICAgICAgICAgICAgZG9tU2Nyb2xsLnNjcm9sbFRvcCA9IGRvbVNjcm9sbC5zY3JvbGxIZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBpZihkb21TY3JvbGwpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKGRvbVNjcm9sbCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgKyBcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5pbm5lckhlaWdodCgpID49ICBcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVswXS5zY3JvbGxIZWlnaHQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgdmFyIGNvbnZlcnRhdGlvbkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IFtdXG4gICAgICAgIGlmKCBjb252ZXJ0YXRpb25BY3RpdmUgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzID0gdGhpcy5wcm9wcy5tZXNzYWdlcy5maW5kKCBtZXNzID0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzLl9pZCA9PSBjb252ZXJ0YXRpb25BY3RpdmUuX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYoIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5tZXNzYWdlX2RhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCAhbWVzc2FnZXMubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBbIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImNow7puZyB0w7RpIGPDsyB0aOG7gyBnacO6cCBnw6wgY2hvIGLhuqFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IFwiMjAyMC0wNy0yOVQwNjo1MTo1NC45NjNaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBcIkFETUlOXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IFwiQURNSU5cIixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtbHN0LW1lc3NhZ2VzXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxMaXN0TWVzc2FnZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1saXN0LW1lc3NhZ2VcIiBpZD1cImpzLXNjcm9sbC10by1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChtZXNzYWdlLCBrZXkpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wibWVzc2FnZS1jaGF0XCIgKyBrZXkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgey8qIDxNZXNzYWdlQ2hhdFR5cGluZy8+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dFNlbmQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvbixcbiAgICAgICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlzdE1lc3NhZ2UpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jbGFzcyBIZWFkSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgbOG6oWkgaGVhZCBsaXN0IG1lc3NhZ2VcIilcbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgICAgICB2YXIgY29udmVydGF0aW9uQWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbiA9PiBjb252ZXJ0YXRpb24uaXNBY3RpdmUpXG5cbiAgICAgICAgaWYgKCFjb252ZXJ0YXRpb25BY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGltZU9ubGluZSA9ICfjgqrjg7Pjg6njgqTjg7MnXG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaGVhZC1pbmZvXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYWN0aXZlLWNoYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXIgYWN0aXZlLW9ubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnZlcnRhdGlvbkFjdGl2ZS5hdmF0YXJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjb252ZXJ0YXRpb25BY3RpdmUubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyhjb252ZXJ0YXRpb25BY3RpdmUuaXNPbmxpbmUgPyBcImFjdGl2ZS1ub3dcIiA6ICcnKSArIFwiIHRpbWUtb25saW5lXCJ9Pnt0aW1lT25saW5lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUuY29udmVydGF0aW9uXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRJbmZvKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxuXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHsgbWVzc2FnZSwgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpLFxuICAgICAgICBjbGFzc1R5cGVNZXNzYWdlID0gbWVzc2FnZS51c2VyICE9IGF1dGguX2lkID8gJ2Zsb2F0LWxlZnQnIDogJ2Zsb2F0LXJpZ2h0IGJ5LW1lJ1xuICAgICAgICBpZiAoIWNvbnZBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1tZXNzYWdlLWNoYXRcIiA+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NUeXBlTWVzc2FnZSArIFwiIGNoYXQtZ3JvdXBcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udkFjdGl2ZS5hdmF0YXJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lc3NhZ2Uuc3R5bGUgKyBcIiB0ZXh0XCJ9ID57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvbixcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVzc2FnZSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5pbXBvcnQgeyBzZXR0ZXJBdXRoIH0gZnJvbSBcIi4uL2FjdGlvblwiXG5cbmNsYXNzIE15TG9naW5GYWNlYm9vayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnRDbGlja2VkID0gKCkgPT4geyB9XG4gICAgcmVzcG9uc2VGYWNlYm9vayA9IHJlc3BvbnNlID0+IHtcbiAgICAgICAgXG4gICAgICAgIHZhciBhdXRoZW4gPSB7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sIFxuICAgICAgICAgICAgdXNlcklEOiByZXNwb25zZS51c2VySUQsXG4gICAgICAgICAgICBuYW1lOiByZXNwb25zZS5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmVtYWlsLFxuICAgICAgICAgICAgYXZhdGFyOiByZXNwb25zZS5waWN0dXJlLmRhdGEudXJsLFxuICAgICAgICAgICAgdHlwZTogXCJmYlwiLFxuICAgICAgICAgICAgbW9iaWxlOiBcIjEyMzQ1Njc4OTBcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVnaXN0ZXJMb2dpbkNoYXQoIGF1dGhlbiApXG4gICAgICAgIFxuICAgIH1cbiAgICByZWdpc3RlckxvZ2luQ2hhdCA9IGF1dGhlbiA9PiB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvcmVnaXN0ZXItY2hhdFwiXG4gICAgICAgIGZldGNoKGFjdGlvbiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhdXRoZW4pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3AgPT4geyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQXV0aCh7IC4uLnJlc3BvbnNlLmRhdGEgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0KFwiaGF2ZSBlcnJvciBsb2dpbiBnb29nbGVcIilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZhY2Vib29rTG9naW5cbiAgICAgICAgICAgICAgICBhcHBJZD1cIjYxODU3OTA0NTQ2MDk2MlwiXG4gICAgICAgICAgICAgICAgYXV0b0xvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M9XCJteS1mYWNlYm9vay1idXR0b24tY2xhc3NcIlxuICAgICAgICAgICAgICAgIGljb249XCJmYS1mYWNlYm9va1wiXG4gICAgICAgICAgICAgICAgdGV4dEJ1dHRvbj1cIkZhY2Vib29r44Gn44Ot44Kw44Kk44OzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvbXBvbmVudENsaWNrZWR9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s9e3RoaXMucmVzcG9uc2VGYWNlYm9va30gLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aCAgOiBzdGF0ZS5hdXRoLFxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNeUxvZ2luRmFjZWJvb2spIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5pbXBvcnQgeyBzZXR0ZXJBdXRoIH0gZnJvbSBcIi4uL2FjdGlvblwiXG5cbmNsYXNzIE15TG9naW5Hb29nbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRDbGlja2VkID0gKCkgPT4geyB9XG4gICAgXG4gICAgcmVzcG9uc2VHb29nbGVFcnJvciA9IHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsIFwibOG7l2kgcmVzcG9uc2VHb29nbGVFcnJvclwiKVxuICAgICAgICBcbiAgICAgICAgYWxlcnQoXCJjYW4ndCBsb2dpbiBnb29nbGVcIilcbiAgICB9XG4gICAgcmVzcG9uc2VHb29nbGUgPSByZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBcIsSRw7puZyByZXNwb25zZUdvb2dsZVwiKVxuICAgICAgICBcbiAgICAgICAgdmFyIGF1dGhlbiA9IHtcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiByZXNwb25zZS5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIHVzZXJJRDogcmVzcG9uc2UucHJvZmlsZU9iai5nb29nbGVJZCxcbiAgICAgICAgICAgIG5hbWU6IHJlc3BvbnNlLnByb2ZpbGVPYmoubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiByZXNwb25zZS5wcm9maWxlT2JqLmVtYWlsLFxuICAgICAgICAgICAgYXZhdGFyOiByZXNwb25zZS5wcm9maWxlT2JqLmltYWdlVXJsLFxuICAgICAgICAgICAgdHlwZTogXCJnb29nbGVcIixcbiAgICAgICAgICAgIG1vYmlsZTogXCIxMjM0NTY3ODkwXCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyTG9naW5DaGF0KCBhdXRoZW4gKVxuICAgIH1cblxuICAgIHJlZ2lzdGVyTG9naW5DaGF0ID0gYXV0aGVuID0+IHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMucHJvcHMuY29uZmlnLnVybF9yZWFsdGltZSArIFwiL2FwaS9yZWdpc3Rlci1jaGF0XCJcbiAgICAgICAgZmV0Y2goYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGF1dGhlbilcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZSwgc3RhdHVzOiByZXNwLnN0YXR1cywgZXJyb3I6IGRhdGEuZXJyb3JzIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpIFxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQXV0aCh7IC4uLnJlc3BvbnNlLmRhdGEgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0KFwiaGF2ZSBlcnJvciBsb2dpbiBnb29nbGVcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgICAgIGNsaWVudElkPVwiMTg3MTg1MjA2OTI2LXNtcW9lajhrNGFqOWszc2RrcTQ2Ym9nZGY0ZW9qdm42LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfSBjbGFzc05hbWU9XCJidG4tZ29vZ2xlLWxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1nb29nbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICBHb29nbGXjgafjg63jgrDjgqTjg7NcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAvLyBidXR0b25UZXh0PVwiXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiZmEtZ29vZ2xlXCJcbiAgICAgICAgICAgICAgICBjc3NDbGFzcz1cIm15LWdvb2dsZS1idXR0b24tY2xhc3NcIlxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17dGhpcy5yZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3RoaXMucmVzcG9uc2VHb29nbGVFcnJvcn1cbiAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxuICAgICAgICAgICAgICAgID48L0dvb2dsZUxvZ2luPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGggIDogc3RhdGUuYXV0aCxcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTXlMb2dpbkdvb2dsZSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5cbmltcG9ydCBMZWZ0SW5mb3JBdXRoIGZyb20gXCIuL0xlZnRJbmZvckF1dGguanN4XCJcbmltcG9ydCB7IHNldHRlckF1dGggfSBmcm9tIFwiLi4vYWN0aW9uXCJcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBhbGVydCA6IGZhbHNlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9XG4gICAgfVxuICAgIFxuICAgIGludmFsaWRMb2dpbkNoYXQgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZighdGhpcy5uYW1lLnZhbHVlKXtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yRmllbGQ6ICdlbWFpbCcsIG1lc3NhZ2U6IFwibmFtZSBideG7mWMgcGjhuqNpIG5o4bqtcFwiIH1cbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5lbWFpbC52YWx1ZSl7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvckZpZWxkOiAnZW1haWwnLCBtZXNzYWdlOiBcImVtYWlsIGJ14buZYyBwaOG6o2kgbmjhuq1wXCIgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLm1vYmlsZS52YWx1ZSl7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvckZpZWxkOiAnZW1haWwnLCBtZXNzYWdlOiBcIm1vYmlsZSBideG7mWMgcGjhuqNpIG5o4bqtcFwiIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBMb2dpbkNoYXQgPSBlID0+IHtcbiAgICAgICAgdmFyIGVtYWlsICA9IHRoaXMuZW1haWwudmFsdWUsXG4gICAgICAgICAgICBuYW1lICAgPSB0aGlzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICBtb2JpbGUgPSB0aGlzLm1vYmlsZS52YWx1ZSxcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHRoaXMuaW52YWxpZExvZ2luQ2hhdCgpXG4gICAgICAgIGlmKCB2YWxpZGF0b3IgKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IHZhbGlkYXRvci5tZXNzYWdlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGVydCA6IGZhbHNlICwgcHJvZ3Jlc3MgOiB0cnVlfSwgKCk9PntcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvcmVnaXN0ZXItY2hhdFwiXG4gICAgICAgICAgICBmZXRjaChhY3Rpb24sIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgLCBuYW1lICwgbW9iaWxlIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IGZhbHNlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKHsgLi4uIHJlc3BvbnNlLmRhdGEgfSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IGVycm9yLm1lc3NhZ2UgLCBwcm9ncmVzcyA6IGZhbHNlIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKCB0aGlzLnByb3BzLmF1dGggKXtcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvY2hhdC9jb25zdWx0aW5nLXdlYi1kZXNpZ25cIiAvPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgIDxMZWZ0SW5mb3JBdXRoIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9fcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmFsZXJ0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+eyB0aGlzLnN0YXRlLmFsZXJ0IH08L2Rpdj4gfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4g44GC44Gq44Gf44Gu44OV44Or44ON44O844OgIDxpPuKctTwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5uYW1lID0gaW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4g44Oh44O844Or44Ki44OJ44Os44K5IDxpPuKctTwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcmVmPXsoaW5wdXQpID0+IHRoaXMuZW1haWwgPSBpbnB1dH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IOmbu+ipseeVquWPtyA8aT7inLU8L2k+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibW9iaWxlXCIgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5tb2JpbGUgPSBpbnB1dH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2VuZC1tYWlsLWNvbnRhY3RcIiBvbkNsaWNrPXsgdGhpcy5Mb2dpbkNoYXQgfT4g44Oh44O844Or566h55CG6ICF44Gr6YCB5L+hPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvZ3Jlc3MgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHByb2dyZXNzLXN1Y2Nlc3NcIj48ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWxvYWRkaW5nXCI+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoICA6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJlZ2lzdGVyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCBTaWRlYmFyTHN0Q29udmVydGF0aW9uIGZyb20gXCIuL1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4XCJcblxuY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAvLy8vc2V0IGhlaWdodCBjb21wb25lbnRcbiAgICAgICAgdmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNpZGViYXItY2hhdFwiKSxcbiAgICAgICAgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtbHN0LW1lc3NhZ2VzXCIpXG4gICAgICAgIGlmKHNpZGViYXIgJiYgbWVzc2FnZSl7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmhlaWdodCA9IG1lc3NhZ2UuY2xpZW50SGVpZ2h0ICsgXCJweFwiXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgc2lkZWJhclwiKVxuICAgICAgICB2YXIgeyBhdXRoIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGF1dGguYXZhdGFyID0gJ2h0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC91cGxvYWRzL2F2YXRhci5qcGcnXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1zaWRlYmFyLWNoYXRcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtc2lkZWJhci1jaGF0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXV0aC5hdmF0YXJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57YXV0aC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJMc3RDb252ZXJ0YXRpb24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoOiBzdGF0ZS5hdXRoLFxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlYmFyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCBDb252ZXJ0YXRpb24gZnJvbSBcIi4vQ29udmVydGF0aW9uLmpzeFwiXG5cbmNsYXNzIFNpZGViYXJMc3RDb252ZXJ0YXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBjb252ZXJ0YXRpb25cIilcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC11c2VyXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0YXRpb25zICYmIGNvbnZlcnRhdGlvbnMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydGF0aW9uID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnZlcnRhdGlvbiBrZXk9e2NvbnZlcnRhdGlvbi5faWR9IGNvbnY9e2NvbnZlcnRhdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlYmFyTHN0Q29udmVydGF0aW9uKVxuIiwiLyogcG9seWZpbGxzLmpzICovXG4vLyBpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuLy8gaW1wb3J0ICdyZWFjdC1hcHAtcG9seWZpbGwvaWUxMSdcbmltcG9ydCAnY29yZS1qcydcbi8vL2ZvciBpZTkgXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XG4vKiogSUU5LCBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIGFsbCBvZiB0aGUgZm9sbG93aW5nIHBvbHlmaWxscy4gKiovXG5pbXBvcnQgJ2NvcmUtanMvZXMvc3ltYm9sJztcbmltcG9ydCAnY29yZS1qcy9lcy9vYmplY3QnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL2Z1bmN0aW9uJztcbmltcG9ydCAnY29yZS1qcy9lcy9wYXJzZS1pbnQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL3BhcnNlLWZsb2F0JztcbmltcG9ydCAnY29yZS1qcy9lcy9udW1iZXInO1xuaW1wb3J0ICdjb3JlLWpzL2VzL21hdGgnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL3N0cmluZyc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvZGF0ZSc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvYXJyYXknO1xuaW1wb3J0ICdjb3JlLWpzL2VzL3JlZ2V4cCc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvbWFwJztcbmltcG9ydCAnY29yZS1qcy9lcy93ZWFrLW1hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvc2V0JztcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XG5cbmltcG9ydCAncmFmL3BvbHlmaWxsJztcbi8vLyBmb3Igd2VicGFjayBpbXBvcnRcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuXG5pbXBvcnQgJy4vLi4vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcydcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShSZWR1Y2VyKTtcbnN0b3JlLnN1YnNjcmliZShmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKCdjw7MgdGhheSDEkeG7lWkgdHJvbmcgUmVkdXghIScpXG4gICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XG59KTtcblxuLy8vIG15IGNvbXBvbmVudFxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudC9BcHAuanN4J1xuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUk9PVFwiKTtcblxuaWYgKHR5cGVvZiAoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnICYmIHdyYXBwZXIpIHtcbiAgICBcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICwgd3JhcHBlcilcbn1lbHNle1xuICAgIGFsZXJ0KFwi44GT44Gu44OW44Op44Km44K244Gn44Gv44CB44Ki44OX44Oq44Kx44O844K344On44Oz44Gv5q2j5bi444Gr5YuV5L2c44GX44G+44Gb44KT44CCIOOCouODg+ODl+OCsOODrOODvOODieOBl+OBpuOBj+OBoOOBleOBhFwiKVxufVxuXG4iLCJpbXBvcnQgeyBzb2NrZXRMaXN0ZW5uZXIgfSBmcm9tIFwiLi9zb2NrZXRfbGlzdGVubmVyXCJcbmltcG9ydCB7IHNldHRlclNvY2tldCwgc2V0dGVyQ29udmVydGF0aW9uLCBzZXR0ZXJNZXNzYWdlLCBzZXR0ZXJBdXRoLCBjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24gfSBmcm9tIFwiLi4vYWN0aW9uXCJcbmltcG9ydCB7IGFkZE1lc3NhZ2UgfSBmcm9tIFwiLi4vYWN0aW9uXCJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXG5cbmNvbnN0IENPTkZJRyA9IENPTkZJR19BUFAsXG5FVkVOVCA9IENPTkZJR19FVkVOVFxudmFyIHNvY2tldCA9IG51bGxcblxuXG5leHBvcnQgZnVuY3Rpb24gc29ja2V0SW5pdGlhbENvbm5lY3Qoc29ja2V0SU9DbGllbnQsIGluc3RhbmNlQXBwKSB7XG4gICAgY29uc29sZS5sb2coQ09ORklHLnVybF9yZWFsdGltZSlcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChDT05GSUcudXJsX3JlYWx0aW1lKVxuICAgIHZhciBBcHBsaWNhdGlvbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIilcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LnJlbW92ZShcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXG4gICAgICAgIC8vLy8gc2V0IGNvbmZpZ1xuICAgICAgICBzb2NrZXRMaXN0ZW5uZXIoc29ja2V0LCBpbnN0YW5jZUFwcClcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goc2V0dGVyU29ja2V0KHNvY2tldCkpXG4gICAgICAgIC8vLyBqb2luUm9vbUluaXRcbiAgICAgICAgam9pblJvb21Jbml0KGluc3RhbmNlQXBwLnByb3BzLmF1dGgpXG4gICAgfSk7XG4gICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQobnVsbCkpXG4gICAgICAgIEFwcGxpY2F0aW9uRG9tICYmIEFwcGxpY2F0aW9uRG9tLmNsYXNzTGlzdC5hZGQoXCJjb25uZWN0LXNvY2tldC1lcnJvclwiKVxuICAgIH0pO1xuICAgIHNvY2tldC5vbignY29ubmVjdF9lcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2luUm9vbUluaXQoYXV0aCl7XG5cbiAgICBzb2NrZXQuZW1pdChFVkVOVC5KT0lOX0NIQU5ORUwsIGF1dGgpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQVBJQ2hhbm5lbHMoIG9wdGlvbiwgY29tcG9uZW50ICl7XG5cbiAgICB2YXIgeyBtYXRjaCB9ID0gY29tcG9uZW50LnByb3BzLFxuICAgIHNsdWcgPSBudWxsLCBcbiAgICBjb252ZXJ0YXRpb25JZEFjdGl2ZSA9IG51bGxcbiAgICBpZiggbWF0Y2ggKXtcbiAgICAgICAgc2x1ZyA9IG1hdGNoLnBhcmFtcy5zbHVnXG4gICAgfVxuXG4gICAgdmFyIGFjdGlvbiA9IGNvbXBvbmVudC5wcm9wcy5jb25maWcudXJsX3JlYWx0aW1lICsgXCIvYXBpL2NoYW5uZWxzP1wiXG4gICAgaWYoIG9wdGlvbi5faWQgKXtcbiAgICAgICAgYWN0aW9uICs9IFwiJmlkPVwiICsgb3B0aW9uLl9pZFxuICAgIH1cbiAgICBpZiggb3B0aW9uLmVtYWlsICl7XG4gICAgICAgIGFjdGlvbiArPSBcIiZlbWFpbD1cIiArIG9wdGlvbi5lbWFpbFxuICAgIH1cbiAgICBpZiggb3B0aW9uLm1vYmlsZSApe1xuICAgICAgICBhY3Rpb24gKz0gXCImbW9iaWxlPVwiICsgb3B0aW9uLm1vYmlsZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgZmV0Y2goYWN0aW9uLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwID0+IHsgXG4gICAgICAgIFxuICAgICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKSBcbiAgICB9KVxuICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xuICAgICAgICAgICAgdmFyIGNvbnZlcnRhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgIG1lc3NhZ2VzID0gW11cblxuICAgICAgICAgICAgaWYoIHJlc3BvbnNlLmRhdGEuY2hhbm5lbHMgKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmNoYW5uZWxzLm1hcChjb252ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb252ZXJ0YXRpb24gPSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29udi51c2VyWzBdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGNvbXBvbmVudC5wcm9wcy5hdXRoLl9pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGNvbnYuX2lkIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKCBzbHVnICYmIGNvbnZlcnRhdGlvbi5zbHVnID09IHNsdWcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydGF0aW9uSWRBY3RpdmUgPSBjb252ZXJ0YXRpb24uX2lkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBjb252Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfZGF0YTogY29udi5tZXNzYWdlIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udmVydGF0aW9ucy5wdXNoKGNvbnZlcnRhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlckNvbnZlcnRhdGlvbiggY29udmVydGF0aW9ucyApKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJNZXNzYWdlKCBtZXNzYWdlcyApKVxuICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbklkQWN0aXZlICYmIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24oY29udmVydGF0aW9uSWRBY3RpdmUpKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCBjb21wb25lbnQgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIHJlc3BvbnNlLmRhdGEudG9rZW4gKXtcbiAgICAgICAgICAgICAgICB2YXIgYXV0aCA9IGNvbXBvbmVudC5wcm9wcy5hdXRoXG4gICAgICAgICAgICAgICAgYXV0aC50b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucHJvcHMuZGlzcGF0Y2goc2V0dGVyQXV0aCggYXV0aCApKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coIGVycm9yIClcbiAgICB9KVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmQoIG1lc3NhZ2UgKXtcbiAgICB2YXIgeyBtZXNzYWdlLCBzdHlsZSwgdG9rZW4sIHVzZXIsIGNoYW5uZWxfaWQsIGNvbXBvbmVudCB9ID0gbWVzc2FnZVxuICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoLyhcXG5cXHMqP1xcbilcXHMqXFxuLywgJyQxJylcbiAgICBcbiAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX01FU1NBR0UsIHsgbWVzc2FnZSwgc3R5bGUsIHRva2VuLCB1c2VyLCBjaGFubmVsX2lkIH0pXG4gICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKFxuICAgICAgICBhZGRNZXNzYWdlKFxuICAgICAgICAgICAgeyBfaWQ6IGNoYW5uZWxfaWQsIG1lc3NhZ2VfZGF0YTp7dHlwZTogdHJ1ZSwgcmVhZDogdHJ1ZSwgY29udGVudDogbWVzc2FnZSwgc3R5bGUsIHRva2VuLCB1c2VyfX1cbiAgICAgICAgKVxuICAgIClcbn0iLCJ2YXIgRVZFTlQgPSBDT05GSUdfRVZFTlRcbmltcG9ydCB7IGFkZE1lc3NhZ2UgfSBmcm9tIFwiLi4vYWN0aW9uXCJcbmV4cG9ydCBmdW5jdGlvbiBzb2NrZXRMaXN0ZW5uZXIoIHNvY2tldCwgaW5zdGFuY2VBcHAgKXtcblxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBtZXNzYWdlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCLEkcOjIHbDoG8gXCIgKyBFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBtZXNzYWdlKVxuICAgICAgICBcbiAgICAgICAgdmFyIGF1dGggPSBpbnN0YW5jZUFwcC5wcm9wcy5hdXRoXG4gICAgICAgIGlmKCBtZXNzYWdlLnRva2VuICE9IGF1dGgudG9rZW4gKXtcbiAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZV9kYXRhLl9pZCA9IGF1dGguX2lkXG4gICAgICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaCggYWRkTWVzc2FnZSggbWVzc2FnZSApKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbn0iLCJ2YXIgYXV0aCA9IG51bGxcbmlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSlcbn1cblxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBhdXRoLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRS5BVVRILlNFVFRFUjpcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKVxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsIlxuaWYgKHR5cGVvZiBDT05GSUdfQVBQID09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgQ09ORklHX0FQUCA9IG51bGxcbn1cblxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBDT05GSUdfQVBQLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRS5DT05GSUcuU0VUVEVSX0NPTkZJRzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY2FzZSBUWVBFLkNPTlZFUlRBVElPTi5TRVRURVI6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXG4gICAgICAgIGNhc2UgVFlQRS5DT05WRVJUQVRJT04uQ0hBTkdFOiBcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uX2lkID09PSBhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IHRydWUgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IGZhbHNlIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG4vLy90aMOqbSBjw6FjIHJlZHVjZXIgZnVudGlvbiBj4bqnbiDEkcaw4bujYyBjb21iaW5lIHbDoG8gxJHDonlcbmltcG9ydCBTb2NrZXRSZWR1Y2VyIGZyb20gXCIuL3NvY2tldC5qc1wiXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi9hdXRoLmpzXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vY29uZmlnLmpzXCJcbmltcG9ydCBDb252ZXJ0YXRpb24gZnJvbSBcIi4vY29udmVydGF0aW9uLmpzXCJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL21lc3NhZ2UuanNcIlxuLy8vLyBraOG7n2kgdOG6oW8gMSBiaeG6v24gYmnhu4N1IGRp4buFbiBSRURVQ0VSIEFMTCBcbmNvbnN0IFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIFxuICAgIHNvY2tldCAgICAgIDogU29ja2V0UmVkdWNlcixcbiAgICBhdXRoICAgICAgICA6IEF1dGgsXG4gICAgY29uZmlnICAgICAgOiBDb25maWcsXG4gICAgY29udmVydGF0aW9uOiBDb252ZXJ0YXRpb24sXG4gICAgbWVzc2FnZSAgICAgOiBNZXNzYWdlXG59KTtcbmV4cG9ydCBkZWZhdWx0IFJlZHVjZXI7IiwiXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxuXG52YXIgbWVzc2FnZXMgPSBbXVxuaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgRGF0YVN0cmluZ01lc3NhZ2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21lc3NhZ2VzJylcbiAgICBpZiggRGF0YVN0cmluZ01lc3NhZ2VzICl7XG4gICAgICAgIFxuICAgICAgICBtZXNzYWdlcyA9IEpTT04ucGFyc2UoRGF0YVN0cmluZ01lc3NhZ2VzKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbWVzc2FnZXMsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgVFlQRS5NRVNTQUdFLlNFVFRFUjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBcbiAgICAgICAgY2FzZSBUWVBFLk1FU1NBR0UuQUREX01FU1NBR0U6XG4gICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBzdGF0ZS5tYXAoIG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UuX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ubWVzc2FnZSwgbWVzc2FnZV9kYXRhOiBbIC4uLm1lc3NhZ2UubWVzc2FnZV9kYXRhLCBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlX2RhdGFdIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZXNcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vYWN0aW9uL3R5cGUuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ja2V0UmVkdWNlcihzdGF0ZSA9IG51bGwgLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRS5TT0NDS0VULlNFVFRFUjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9