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
      auth.avatar = '/uploads/avatar.jpg';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JVSUxERVIvU0NTUy9jaGF0LnNjc3M/NjFkZCIsIndlYnBhY2s6Ly8vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NvbnZlcnRhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FbW9qaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9JbnB1dFNlbmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGVmdEluZm9yQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9MaXN0RW1vamkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2VIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9NeUxvZ2luRmFjZWJvb2suanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTXlMb2dpbkdvb2dsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9SZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9TaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5L3NvY2tldF9saXN0ZW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvY29udmVydGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvc29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsic2V0dGVyU29ja2V0Iiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJUWVBFIiwiU09DQ0tFVCIsIlNFVFRFUiIsInBheWxvYWQiLCJzZXR0ZXJBdXRoIiwiYXV0aCIsIkFVVEgiLCJzZXR0ZXJDb252ZXJ0YXRpb24iLCJjb252IiwiQ09OVkVSVEFUSU9OIiwic2V0dGVyTWVzc2FnZSIsIm1lc3MiLCJNRVNTQUdFIiwiY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIiwiaWQiLCJDSEFOR0UiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsIkFERF9NRVNTQUdFIiwiYWRkTWVzc2FnZVNlbmRUb01lIiwiQ0hBTk5FTCIsIkFERF9NRVNTQUdFX1NFTkRfVE9fTUUiLCJDT05GSUciLCJTRVRURVJfQ09ORklHIiwiQXBwIiwicHJvcHMiLCJtYXRjaCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpZW50IiwiY29ubmVjdCIsIkNoYXQiLCJmZXRjaEFQSUNoYW5uZWxzIiwiY29uZmlnIiwiQ29udmVydGF0aW9uIiwiZGlzcGF0Y2giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwiaXNBY3RpdmUiLCJjaGFuZ2VBY3RpdmVVc2VyIiwiX2lkIiwiYXZhdGFyIiwibmFtZSIsImNvbnZlcnRhdGlvbnMiLCJjb252ZXJ0YXRpb24iLCJFbW9qaSIsImV2ZW50IiwiaW5wdXQiLCJjb250ZW50IiwidmFsdWUiLCJzeW1ib2wiLCJhZGRJY29uSW5wdXRDaGF0IiwiSW5wdXRTZW5kIiwiZW1vamlzIiwiY29udkFjdGl2ZSIsImZpbmQiLCJvYmpNZXNzIiwic3R5bGUiLCJ0b2tlbiIsInVzZXIiLCJjaGFubmVsX2lkIiwiY29tcG9uZW50Iiwic2VuZCIsImtleUNvZGUiLCJzaGlmdEtleSIsInRhcmdldCIsInNldFN0YXRlIiwic2VuZENoYXQiLCJ3b3JkcyIsInRyaW0iLCJzcGxpdCIsIndvcmRMYXN0ZXN0IiwibGVuZ3RoIiwiZW1vamlzQ2FsbCIsIkNPTkZJR19FTU9KSVMiLCJmaWx0ZXIiLCJpdGVtIiwic2lnbiIsImxhc3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwid2luZG93Iiwib25jbGljayIsImNvbnRhaW5zIiwicmVtb3ZlIiwic2V0VGltZW91dCIsInNob3dMaXN0RW1vamkiLCJoYW5kbGVTZW5kTWVzc2FnZURvd24iLCJoYW5kbGVTZW5kTWVzc2FnZVVwIiwiaGFuZGxlU2VuZENoYXRDbGljayIsImJ0blNlbmRNZXNzYWdlIiwiaGFuZGxlU2VuZE1lc3NhZ2VSZWFjdFN1Ym1pdCIsIkxlZnRJbmZvckF1dGgiLCJjb21wYW55X25hbWUiLCJ0YXhfY29kZV9kYXRlIiwiY29tcGFueV9hZGRyZXNzX3N0cmVldCIsImNvbXBhbnlfYWRkcmVzc19sb2NhbGl0eSIsImNvbXBhbnlfYWRkcmVzc19yZWdpb24iLCJjb21wYW55X2FkZHJlc3NfY291bnRyeSIsImpvaW4iLCJwaG9uZV9vbmUiLCJjb21wYW55X21haWwiLCJMaXN0RW1vamkiLCJtYXAiLCJMaXN0TWVzc2FnZSIsImRvbVNjcm9sbCIsImRvbVdyaXRlciIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIiQiLCJvbiIsImlubmVySGVpZ2h0IiwiY29udmVydGF0aW9uQWN0aXZlIiwibWVzc2FnZXMiLCJtZXNzYWdlX2RhdGEiLCJjcmVhdGVkQXQiLCJyZWFkIiwia2V5IiwiSGVhZEluZm8iLCJ0aW1lT25saW5lIiwiaXNPbmxpbmUiLCJNZXNzYWdlIiwiY2xhc3NUeXBlTWVzc2FnZSIsIk15TG9naW5GYWNlYm9vayIsInJlc3BvbnNlIiwiYXV0aGVuIiwiYWNjZXNzVG9rZW4iLCJ1c2VySUQiLCJlbWFpbCIsInBpY3R1cmUiLCJkYXRhIiwidXJsIiwibW9iaWxlIiwicmVnaXN0ZXJMb2dpbkNoYXQiLCJhY3Rpb24iLCJ1cmxfcmVhbHRpbWUiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3AiLCJvayIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImVycm9ycyIsImNvbXBvbmVudENsaWNrZWQiLCJyZXNwb25zZUZhY2Vib29rIiwiTXlMb2dpbkdvb2dsZSIsInByb2ZpbGVPYmoiLCJnb29nbGVJZCIsImltYWdlVXJsIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZUdvb2dsZUVycm9yIiwiUmVnaXN0ZXIiLCJlcnJvckZpZWxkIiwiZSIsInZhbGlkYXRvciIsImludmFsaWRMb2dpbkNoYXQiLCJhbGVydCIsInByb2dyZXNzIiwicHJldmVudERlZmF1bHQiLCJMb2dpbkNoYXQiLCJTaWRlYmFyIiwic2lkZWJhciIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIlNpZGViYXJMc3RDb252ZXJ0YXRpb24iLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiUmVkdWNlciIsInN1YnNjcmliZSIsImdldFN0YXRlIiwid3JhcHBlciIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsIkNPTkZJR19BUFAiLCJFVkVOVCIsIkNPTkZJR19FVkVOVCIsInNvY2tldEluaXRpYWxDb25uZWN0Iiwic29ja2V0SU9DbGllbnQiLCJpbnN0YW5jZUFwcCIsIkFwcGxpY2F0aW9uRG9tIiwic29ja2V0TGlzdGVubmVyIiwiam9pblJvb21Jbml0IiwibG9jYXRpb24iLCJocmVmIiwiYXNzZXQiLCJlbWl0IiwiSk9JTl9DSEFOTkVMIiwib3B0aW9uIiwic2x1ZyIsImNvbnZlcnRhdGlvbklkQWN0aXZlIiwicGFyYW1zIiwiY2hhbm5lbHMiLCJ1c2VyX2lkIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZXBsYWNlIiwiU0VORF9NRVNTQUdFIiwiUkVTUE9OU0VfTUVTU0FHRSIsInBhcnNlIiwiZ2V0SXRlbSIsImNvbWJpbmVSZWR1Y2VycyIsIlNvY2tldFJlZHVjZXIiLCJBdXRoIiwiQ29uZmlnIiwiRGF0YVN0cmluZ01lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtC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QUNxRyxZQUFmLElBQTZCb0IsTUFBTSxDQUFDdkksT0FBUCxDQUFlbUgsWUFBNUM7QUFBakM7QUFDSDs7QUFDRCxpQkFBT3JHLE9BQVA7QUFDSCxTQUxjLENBQWY7QUFNQSxlQUFPb0csUUFBUDs7QUFDSjtBQUNJLGVBQU94RixLQUFQO0FBZFI7QUFnQkgsR0FqQmM7QUFBQSxDOzs7Ozs7Ozs7Ozs7QUNaZjtBQUFBO0FBQUE7QUFBQTtBQUNlLFNBQVMyTCxhQUFULEdBQThDO0FBQUEsTUFBdkIzTCxLQUF1Qix1RUFBZixJQUFlO0FBQUEsTUFBUjZHLE1BQVE7O0FBQ3pELFVBQVFBLE1BQU0sQ0FBQzNJLElBQWY7QUFDSSxTQUFLQyx1REFBSSxDQUFDQyxPQUFMLENBQWFDLE1BQWxCO0FBQ0ksYUFBT3dJLE1BQU0sQ0FBQ3ZJLE9BQWQ7O0FBQ0o7QUFDSSxhQUFPMEIsS0FBUDtBQUpSO0FBTUgsQzs7Ozs7Ozs7Ozs7QUNSRCxlIiwiZmlsZSI6ImpzL2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTIhLi9jaGF0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIktvekdvUHJvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0tvekdvUHJvL0tvekdvUHJvLVJlZ3VsYXIub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3pHb1Byby1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9Lb3pHb1Byby9Lb3pHb1Byby1Cb2xkLm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLkFwcENvbXBvbmVudCB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5idG4tZ29vZ2xlLWxvZ2luIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNnJlbSAxLjVyZW0gMC40cmVtO1xcbiAgZm9udC1zaXplOiAwLjgxcmVtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIG1hcmdpbjogMC4zNzVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLWxldmVsKCMzZjUxYjUsIC04KTtcXG4gIGNvbG9yOiBjb2xvci1sZXZlbCgjM2Y1MWI1LCAtOCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xcbn1cXG4uYnRuLWdvb2dsZS1sb2dpbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xcbiAgYm9yZGVyOiAycHggc29saWQgY29sb3ItbGV2ZWwoIzNmNTFiNSwgLTgpO1xcbiAgY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmJ0bi1nb29nbGUtbG9naW46Zm9jdXMsIC5idG4tZ29vZ2xlLWxvZ2luLmZvY3VzIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmJ0bi1nb29nbGUtbG9naW46ZGlzYWJsZWQsIC5idG4tZ29vZ2xlLWxvZ2luLmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAuYnRuLWdvb2dsZS1sb2dpbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNjU7XFxufVxcblxcbi5teS1mYWNlYm9vay1idXR0b24tY2xhc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtIDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMC44MXJlbTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW46IDAuMzc1cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xcbn1cXG4ubXktZmFjZWJvb2stYnV0dG9uLWNsYXNzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBjb2xvci1sZXZlbCgjM2Y1MWI1LCAtOCk7XFxuICBjb2xvcjogIzNmNTFiNTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4ubXktZmFjZWJvb2stYnV0dG9uLWNsYXNzOmZvY3VzLCAubXktZmFjZWJvb2stYnV0dG9uLWNsYXNzLmZvY3VzIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLm15LWZhY2Vib29rLWJ1dHRvbi1jbGFzczpkaXNhYmxlZCwgLm15LWZhY2Vib29rLWJ1dHRvbi1jbGFzcy5kaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLm15LWZhY2Vib29rLWJ1dHRvbi1jbGFzcyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNjU7XFxufVxcbi5teS1mYWNlYm9vay1idXR0b24tY2xhc3MgaS5mYS5mYS1mYWNlYm9vayB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmJnLWNoYXQtdGVtYWxhdGUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG59XFxuXFxuLndyYXBwZXItcGFnZS1jaGF0IHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi53cmFwcGVyLXBhZ2UtY2hhdDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAzMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgI0Y1RjVGNTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tb3otc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1vLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1vLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1zLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm15aW5mbyB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcHg7XFxuICBsZWZ0OiAxcHg7XFxuICByaWdodDogMXB4O1xcbiAgYm90dG9tOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzkxNzVjYTtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIuYWN0aXZlLW9ubGluZSB7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzAwYzg1MTtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAubmFtZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgbWF4LXdpZHRoOiAyN2NoO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNjBweDtcXG4gIH1cXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICB9XFxuXFxuICAubXlpbmZvIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIC5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICAgIG1heC13aWR0aDogMzVweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gIH1cXG4gIC5teWluZm8gLmF2YXRhciAubmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAjRjVGNUY1O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbW96LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW8tc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1zLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuXFxuLnRpY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogMzBweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDZweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgd2lkdGg6IDZweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMSkge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMikge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMykge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDQ1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA0MDBtcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIG1lcmN1cnlUeXBpbmdBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgMjglIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICB9XFxuICA0NCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gIH1cXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZSB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE1cHg7XFxuICByaWdodDogMTVweDtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M2YzY7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUgLnN0YXRlLWF2YXRhciB7XFxuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogN3B4IDdweCA3cHggNTVweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyAubmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIC5sYXN0LW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICB9XFxuICAuY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA3cHggN3B4IDdweCA1NXB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC50aW1lLW9ubGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGNvbG9yOiAjMjhhNzQ1O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAudGltZS1vbmxpbmUuYWN0aXZlLW5vdyB7XFxuICBjb2xvcjogIzhiYzM0YTtcXG59XFxuXFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2Uuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXA6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLmF2YXRhciB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5FTU9KSSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZzogMCAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50ZXh0LkVNT0pJIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC50eXBpbmctbWVzc2FnZSAudGV4dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnR5cGluZy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmNvbXBvbmVudC1saXN0LWVtb2ppIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGhlaWdodDogMDtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppLmZpcnN0LXNob3cge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppLnNob3cge1xcbiAgdmlzaWJpbGl0eTogdW5zZXQ7XFxuICBoZWlnaHQ6IHVuc2V0O1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgbGVmdDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNvbXBvbmVudC1lbW9qaSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4IDgwcHggMCA1MHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCA+IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTE7XFxuICBib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBjb2xvcjogIzBkNmVmZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5lbW90aWNvbiB7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLnNlbmQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogMTtcXG4gIHJpZ2h0OiA0NXB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLnJlYWN0IHtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICByaWdodDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2Uge1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBjb250ZW50OiBcXFwi87CFl1xcXCI7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlOmhvdmVyIGltZyB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlOmhvdmVyOmFmdGVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayBpbWcge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4uY29tcG9uZW50LXJlZ2lzdGVyIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAubGVmdF9fcmVnaXN0ZXIge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogNDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAucmlnaHRfX3JlZ2lzdGVyIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtcmVnaXN0ZXIgLmxlZnRfX3JlZ2lzdGVyLCAuY29tcG9uZW50LXJlZ2lzdGVyIC5yaWdodF9fcmVnaXN0ZXIge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmNvbnBhbnkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLnJlZ2lzdGVyLWFkZHJlc3Mge1xcbiAgYmFja2dyb3VuZDogI2YyZjJmMiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLnJlZ2lzdGVyLWFkZHJlc3MgaDYge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuaW50cm8tY2hhdC1yZWdpc3RlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2Y0NDMzNjtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBsYWJlbCB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGlucHV0OmZvY3VzIHtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBpIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGNvbG9yOiAjZGMzNTQ1O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtIDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMC44MXJlbTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW46IDAuMzc1cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGNvbG9yLWxldmVsKCMzZjUxYjUsIC04KTtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdDpmb2N1cywgLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0LmZvY3VzIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0OmRpc2FibGVkLCAuY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3QuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNjU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9JY29uRm9udC93ZWJmb250LmVvdD92PTEuNC41N1xcXCIpO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0ljb25Gb250L3dlYmZvbnQuZW90PyNpZWZpeCZ2PTEuNC41N1xcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCIvZm9udC9JY29uRm9udC93ZWJmb250LndvZmYyP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi9mb250L0ljb25Gb250L3dlYmZvbnQud29mZj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcIi9mb250L0ljb25Gb250L3dlYmZvbnQudHRmP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXFxcIi9mb250L0ljb25Gb250L3dlYmZvbnQuc3ZnP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmkuaGVyby1pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5pLmhlcm8taWNvbjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMDdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZGQlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1ncm91cC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEI1OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC10aWUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFpcnBvcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODRCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy11cC1ib2xkLWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDczOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXV0by1maXg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1iYWxsb3QtcmVjb3VudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMzQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FsZW5kYXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEVEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxlbmRhci1tb250aC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUxOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FyZC1hY2NvdW50LW1haWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcnQtcGx1czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMTJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1uZmM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTkwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZXJ0aWZpY2F0ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvY2stY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQTlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb3NlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE1NlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvc2UtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTU4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jcmVhdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NzRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWRlbGV0ZS12YXJpYW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFCM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1haWwtY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtYWlsLWVkaXQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWV5ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZEMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZmlsZS1kb2N1bWVudC1lZGl0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwREM5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtLXNlbGVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MDFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm1hdC1saXN0LXRleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtYXQtcGFnZS1icmVhazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RDdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWdvb2dsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQURcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWdvb2dsZS1hZHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oYW5kLW9rYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTUwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oZWFydC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taG9tZS1pbXBvcnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGOUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhvbWUtbWFwLW1hcmtlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWh1bWFuLW1hbGUtY2hpbGQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzhDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sYXB0b3A6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzIyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sYXllcnMtc2VhcmNoLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjA3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sb2NrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzQxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tYWduaWZ5LXNjYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjc2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZW51LWRvd246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzVEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZW51LWRvd24tb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QjZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtYnVsbGV0ZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkEyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLWNvZy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE3MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS10ZXh0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzZBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb25pdG9yLWRhc2hib2FyZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMDdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDAzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcGx1cy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcmVzcG9uc2l2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NUVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNjYXR0ZXItcGxvdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVDQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VnbWVudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQ0JcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbGVjdGlvbi1zZWFyY2g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zbm93Zmxha2UtdmFyaWFudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0YXItYm94LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zdGlja2VyLWVtb2ppOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc4NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFibGUtc3Rhcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQ0JcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhYmxldC1pcGFkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLWhlYXJ0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY4QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLWhlYXJ0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQkNGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWctbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhZy10ZXh0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEZEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10ZWxldmlzaW9uLWNsZWFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTExMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGhlbWUtbGlnaHQtZGFyazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MEVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXVwZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QjBcXFwiO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IFRZUEUgZnJvbSBcIi4vdHlwZVwiXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJTb2NrZXQoc29ja2V0KXtcclxuICAgIGNvbnNvbGUubG9nKHNvY2tldCAsIFwiIHNldCBzb2NrZXQgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLlNPQ0NLRVQuU0VUVEVSLFxyXG4gICAgICAgIHBheWxvYWQgOiBzb2NrZXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyQXV0aCggYXV0aCApe1xyXG4gICAgY29uc29sZS5sb2coYXV0aCAsIFwiIHNldCBhdXRoIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5BVVRILlNFVFRFUixcclxuICAgICAgICBwYXlsb2FkIDogYXV0aFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJDb252ZXJ0YXRpb24oIGNvbnYgKXtcclxuICAgIGNvbnNvbGUubG9nKGNvbnYgLCBcIiBzZXQgY29udiBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ09OVkVSVEFUSU9OLlNFVFRFUixcclxuICAgICAgICBwYXlsb2FkIDogY29udlxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJNZXNzYWdlKCBtZXNzICl7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzICwgXCIgc2V0IG1lc3MgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLk1FU1NBR0UuU0VUVEVSLFxyXG4gICAgICAgIHBheWxvYWQgOiBtZXNzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24oIGlkICl7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGlkICwgXCJjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24gXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNPTlZFUlRBVElPTi5DSEFOR0UsXHJcbiAgICAgICAgcGF5bG9hZCA6IGlkXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lc3NhZ2UoIG1lc3NhZ2UgKXtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UgLCBcIiBhZGRNZXNzYWdlIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5NRVNTQUdFLkFERF9NRVNTQUdFLFxyXG4gICAgICAgIHBheWxvYWQgOiBtZXNzYWdlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlU2VuZFRvTWUoIG1lc3NhZ2UgKXtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UgLCBcIiBhZGRNZXNzYWdlU2VuZFRvTWUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuQUREX01FU1NBR0VfU0VORF9UT19NRSxcclxuICAgICAgICBwYXlsb2FkIDogbWVzc2FnZVxyXG4gICAgfVxyXG59IiwiY29uc3QgVFlQRSA9ICB7XHJcbiAgXHJcbiAgU09DQ0tFVCA6IHtcclxuICAgIFNFVFRFUjogXCJTT0NDS0VUX1NFVFRFUlwiXHJcbiAgfSxcclxuICBBVVRIOiB7XHJcbiAgICBTRVRURVI6IFwiQVVUSF9TRVRURVJcIlxyXG4gIH0sXHJcbiAgQ09OVkVSVEFUSU9OOiB7XHJcbiAgICBTRVRURVI6IFwiQ09OVkVSVEFUSU9OX1NFVFRFUlwiLFxyXG4gICAgQ0hBTkdFOiBcIkNPTlZFUlRBVElPTl9DSEFOR0VcIlxyXG4gIH0sXHJcbiAgTUVTU0FHRToge1xyXG4gICAgU0VUVEVSOiBcIk1FU1NBR0VfU0VUVEVSXCIsXHJcbiAgICBBRERfTUVTU0FHRTogXCJNRVNTQUdFX0FERFwiXHJcbiAgfSxcclxuICBDT05GSUc6IHtcclxuICAgIFNFVFRFUl9DT05GSUcgOiBcIlNFVFRFUl9DT05GSUdcIlxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUWVBFOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5cclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL1JlZ2lzdGVyLmpzeFwiXHJcbmltcG9ydCBDaGF0IGZyb20gJy4vQ2hhdC5qc3gnXHJcblxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhdyBhcHBcIilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiQXBwbGljYXRpb25cIiBjbGFzc05hbWU9XCJBcHBDb21wb25lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NoYXRcIiByZW5kZXI9eygpID0+IDxDaGF0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jaGF0L3JlZ2lzdGVyXCIgcmVuZGVyPXsoKSA9PiA8UmVnaXN0ZXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvY2hhdC86c2x1ZycgcmVuZGVyPXsoeyBtYXRjaCB9KSA9PiA8Q2hhdCBtYXRjaD17bWF0Y2h9IC8+IH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FkbWluL2NoYXRcIiByZW5kZXI9eygpID0+IDxDaGF0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hZG1pbi9jaGF0L3JlZ2lzdGVyXCIgcmVuZGVyPXsoKSA9PiA8UmVnaXN0ZXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWRtaW4vY2hhdC86c2x1ZycgcmVuZGVyPXsoeyBtYXRjaCB9KSA9PiA8Q2hhdCBtYXRjaD17bWF0Y2h9IC8+IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsaWVudCAgOiBzdGF0ZS5jbGllbnRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0IChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbi8vLyBzb2Nja2V0IFxyXG5cclxuaW1wb3J0IHsgZmV0Y2hBUElDaGFubmVscyB9IGZyb20gXCIuLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5cclxuXHJcbi8vLy8gZGVmaW5lXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXIuanN4XCJcclxuaW1wb3J0IExpc3RNZXNzYWdlIGZyb20gXCIuL0xpc3RNZXNzYWdlLmpzeFwiXHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG5cclxuICAgICAgICBpZiggdGhpcy5wcm9wcy5hdXRoICl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmZXRjaEFQSUNoYW5uZWxzKHRoaXMucHJvcHMuYXV0aCwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGlmKCAhdGhpcy5wcm9wcy5hdXRoICl7XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvY2hhdC9yZWdpc3RlclwiIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWNoYXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1wYWdlLWNoYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0TWVzc2FnZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGgsXHJcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hhdCkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24gfSBmcm9tIFwiLi4vYWN0aW9uXCJcclxuXHJcbmNsYXNzIENvbnZlcnRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlVXNlciA9IChpZCkgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbihpZCkpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKS5jbGFzc0xpc3QuYWRkKCdjb252ZXJ0YXRpb24tY2hhbmdlJylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgY29udiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjbGFzc0FjdGl2ZU1lc3NhZ2UgPSBjb252LmlzQWN0aXZlICYmICdhY3RpdmUtbWVzc2FnZSdcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUFjdGl2ZVVzZXIoY29udi5faWQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NBY3RpdmVNZXNzYWdlICsgXCIgYWN0aXZlIHVzZXItY2hhdFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udi5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjb252Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUuY29udmVydGF0aW9uXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbnZlcnRhdGlvbik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jbGFzcyBFbW9qaSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGFkZEljb25JbnB1dENoYXQgPSBldmVudCA9PiB7XHJcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcclxuICAgIGlmKGlucHV0KXtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgLy8vIGFkZCBpY29uIFxyXG4gICAgICBjb250ZW50ID0gY29udGVudCArIHRoaXMucHJvcHMuc3ltYm9sXHJcbiAgICAgIGlucHV0LnZhbHVlID0gY29udGVudFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGkgY2xhc3NOYW1lPVwiY29tcG9uZW50LWVtb2ppXCIgb25DbGljaz17dGhpcy5hZGRJY29uSW5wdXRDaGF0fT57dGhpcy5wcm9wcy5zeW1ib2x9PC9pPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRW1vamkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpc3RFbW9qaSBmcm9tIFwiLi9MaXN0RW1vamkuanN4XCI7XHJcbmltcG9ydCB7IHNlbmQgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcblxyXG5jbGFzcyBJbnB1dFNlbmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2VuZENoYXQ6IGZhbHNlIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tcG9uZW50LWVtb2ppJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpXHJcbiAgICAgICAgICAgIGlmIChlbW9qaXMpIHtcclxuICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbW9qaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvdy10ZW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy10ZW1wXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93TGlzdEVtb2ppID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpXHJcbiAgICAgICAgaWYgKGVtb2ppcykge1xyXG4gICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LmFkZChcInNob3ctdGVtcFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZW5kTWVzc2FnZVJlYWN0U3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMsIGF1dGggfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXHJcblxyXG4gICAgICAgIHZhciBvYmpNZXNzID0geyBcclxuICAgICAgICAgICAgbWVzc2FnZTogXCIg8J+SnSBcIiwgXHJcbiAgICAgICAgICAgIHN0eWxlOiBcIkVNT0pJXCIsIFxyXG4gICAgICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy5hdXRoLnRva2VuLFxyXG4gICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcclxuICAgICAgICAgICAgY2hhbm5lbF9pZDogY29udkFjdGl2ZS5faWQsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbmQob2JqTWVzcylcclxuICAgIH1cclxuXHJcbiAgICBidG5TZW5kTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcclxuICAgICAgICBpZiAoIWlucHV0KSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICBjb252QWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSlcclxuXHJcbiAgICAgICAgdmFyIG9iak1lc3MgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGlucHV0LnZhbHVlLCBcclxuICAgICAgICAgICAgc3R5bGU6IFwiXCIsIFxyXG4gICAgICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy5hdXRoLnRva2VuLFxyXG4gICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcclxuICAgICAgICAgICAgY2hhbm5lbF9pZDogY29udkFjdGl2ZS5faWQsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbmQob2JqTWVzcylcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlRG93biA9IChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcclxuICAgICAgICBpZiAoIWlucHV0KSByZXR1cm4gZmFsc2VcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMsIGF1dGggfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICAgICAgdmFyIG9iak1lc3MgPSB7IFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLnByb3BzLmF1dGgudG9rZW4sXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcclxuICAgICAgICAgICAgICAgIGNoYW5uZWxfaWQ6IGNvbnZBY3RpdmUuX2lkLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZW5kKG9iak1lc3MpXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJydcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRDaGF0OiB0cnVlIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gc3BhY2UgY2hhcmFjdGVyIHJlcGxhY2UgZW1vamlcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMikge1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIC8vLyBnZXQgd29yZCBsYXN0XHJcbiAgICAgICAgICAgIHZhciB3b3JkcyA9IGNvbnRlbnQudHJpbSgpLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICB2YXIgd29yZExhc3Rlc3QgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAvLy8vIGNoZWNrIGhhdmUgc3lzYm9sIFxyXG4gICAgICAgICAgICB2YXIgZW1vamlzQ2FsbCA9IENPTkZJR19FTU9KSVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zaWduID09IHdvcmRMYXN0ZXN0KVxyXG4gICAgICAgICAgICBpZihlbW9qaXNDYWxsLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAvLy8gYWRkIGljb24gXHJcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gY29udGVudC50cmltKCkubGFzdEluZGV4T2YoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkgKyBcIiBcIiArIGVtb2ppc0NhbGxbMF0uc3ltYm9sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZW5kTWVzc2FnZVVwID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbmRDaGF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kQ2hhdDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VuZENoYXRDbGljayA9ICgpID0+IHtcclxuICAgICAgICAvLy8vIHNlbmQgY2xhc3MgaXMgd3JpdGUgbWVzc2FnZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaXMtd3JpdGUtbWVzc2FnZVwiKS5jbGFzc0xpc3QuYWRkKFwiZm9sbG93LWNvbnZlcnNhdGlvblwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXHJcbiAgICAgICAgICAgIGlmKCAhY29udkFjdGl2ZSApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1pcy13cml0ZS1tZXNzYWdlXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCBcIj5cclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tc3RpY2tlci1lbW9qaSBlbW90aWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TGlzdEVtb2ppfVxyXG4gICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwianMtaW5wdXQtY2hhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZVNlbmRNZXNzYWdlRG93bn1cclxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLmhhbmRsZVNlbmRNZXNzYWdlVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kQ2hhdENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44Oh44OD44K744O844K444KS5pu444GPLi4uXCJcclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tc2VuZC1vdXRsaW5lIHNlbmRcIiBvbkNsaWNrPXt0aGlzLmJ0blNlbmRNZXNzYWdlfT48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1oZWFydC1tdWx0aXBsZS1vdXRsaW5lIHJlYWN0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZVJlYWN0U3VibWl0fT48L2k+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVtb2ppIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgICAgICAgIDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb24sXHJcbiAgICAgICAgc29ja2V0ICAgICAgIDogc3RhdGUuc29ja2V0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKElucHV0U2VuZCk7XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBNeUxvZ2luRmFjZWJvb2sgZnJvbSAnLi9NeUxvZ2luRmFjZWJvb2suanN4J1xyXG5pbXBvcnQgTXlMb2dpbkdvb2dsZSBmcm9tIFwiLi9NeUxvZ2luR29vZ2xlLmpzeFwiXHJcblxyXG5jbGFzcyBMZWZ0SW5mb3JBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9fcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb25wYW55XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLWFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWFjY291bnQtZ3JvdXAtb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLXVwZGF0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt0aGlzLnByb3BzLmNvbmZpZy50YXhfY29kZV9kYXRlfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWhvbWUtbWFwLW1hcmtlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfYWRkcmVzc19zdHJlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX2xvY2FsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfYWRkcmVzc19yZWdpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX2NvdW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jZWxscGhvbmUtbmZjXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXpeacrOOBrumbu+ipse+8mlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1widGVsOlwiICsgdGhpcy5wcm9wcy5jb25maWcucGhvbmVfb25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcucGhvbmVfb25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNhcmQtYWNjb3VudC1tYWlsLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCJtYWlsdG86XCIgKyB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X21haWx9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9tYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImludHJvLWNoYXQtcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICDjg4Hjg6Pjg4Pjg4jjgpLoqK3lrprjgZnjgovjgZ/jgoHjga7mg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIIg5LiK6KiY44Gu5oOF5aCx44Gu5L+d6K2344Gr5Yqq44KB44Gm44GE44G+44GZXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUxvZ2luRmFjZWJvb2svPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUxvZ2luR29vZ2xlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGgsXHJcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGVmdEluZm9yQXV0aClcclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRW1vamkgZnJvbSBcIi4vRW1vamkuanN4XCJcclxuXHJcbmNsYXNzIExpc3RFbW9qaSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIFxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwianMtZW1vamlzXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtZW1vamlcIj5cclxuICAgICAgICB7IENPTkZJR19FTU9KSVMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8RW1vamkga2V5PXtpdGVtLnNpZ259IHN5bWJvbD17aXRlbS5zeW1ib2x9IHNpZ249e2l0ZW0uc2lnbn0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEVtb2ppXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IExpc3RNZXNzYWdlSGVhZGVyIGZyb20gXCIuL0xpc3RNZXNzYWdlSGVhZGVyLmpzeFwiXHJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2UuanN4XCJcclxuaW1wb3J0IElucHV0U2VuZCBmcm9tIFwiLi9JbnB1dFNlbmQuanN4XCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcbi8vIGltcG9ydCBNZXNzYWdlQ2hhdFR5cGluZyBmcm9tIFwiLi9NZXNzYWdlQ2hhdFR5cGluZy5qc3hcIlxyXG5cclxuY2xhc3MgTGlzdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRvbVNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLWJvdHRvbVwiKVxyXG4gICAgICAgIHZhciBkb21Xcml0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIilcclxuXHJcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnZlcnRhdGlvbi1jaGFuZ2UnKSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIikuY2xhc3NMaXN0LnJlbW92ZSgnY29udmVydGF0aW9uLWNoYW5nZScpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZG9tU2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1zY3JvbGwtdG8tYm90dG9tXCIpXHJcbiAgICAgICAgICAgIHZhciBkb21Xcml0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIilcclxuICAgICAgICAgICAgZG9tU2Nyb2xsLnNjcm9sbFRvcCA9IGRvbVNjcm9sbC5zY3JvbGxIZWlnaHRcclxuICAgICAgICB9ZWxzZSBpZihcclxuICAgICAgICAgICAgZG9tU2Nyb2xsICYmIFxyXG4gICAgICAgICAgICBkb21Xcml0ZXIgJiYgXHJcbiAgICAgICAgICAgIGRvbVdyaXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvbGxvdy1jb252ZXJzYXRpb24nKSl7XHJcbiAgICAgICAgICAgICAgICBkb21TY3JvbGwuc2Nyb2xsVG9wID0gZG9tU2Nyb2xsLnNjcm9sbEhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkb21TY3JvbGwpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJChkb21TY3JvbGwpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSArIFxyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuaW5uZXJIZWlnaHQoKSA+PSAgXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVswXS5zY3JvbGxIZWlnaHQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaXMtd3JpdGUtbWVzc2FnZVwiKS5jbGFzc0xpc3QuYWRkKFwiZm9sbG93LWNvbnZlcnNhdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY29udmVydGF0aW9uQWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSlcclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXVxyXG4gICAgICAgIGlmKCBjb252ZXJ0YXRpb25BY3RpdmUgKXtcclxuICAgICAgICAgICAgbWVzc2FnZXMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzLmZpbmQoIG1lc3MgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzcy5faWQgPT0gY29udmVydGF0aW9uQWN0aXZlLl9pZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiggbWVzc2FnZXMgKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMubWVzc2FnZV9kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoICFtZXNzYWdlcy5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gWyBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiY2jDum5nIHTDtGkgY8OzIHRo4buDIGdpw7pwIGfDrCBjaG8gYuG6oW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBcIjIwMjAtMDctMjlUMDY6NTE6NTQuOTYzWlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogXCJBRE1JTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IFwiQURNSU5cIixcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1sc3QtbWVzc2FnZXNcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdE1lc3NhZ2VIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1saXN0LW1lc3NhZ2VcIiBpZD1cImpzLXNjcm9sbC10by1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMgJiYgbWVzc2FnZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobWVzc2FnZSwga2V5KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJtZXNzYWdlLWNoYXRcIiArIGtleSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TWVzc2FnZUNoYXRUeXBpbmcvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0U2VuZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb24sXHJcbiAgICAgICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlzdE1lc3NhZ2UpXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNsYXNzIEhlYWRJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGzhuqFpIGhlYWQgbGlzdCBtZXNzYWdlXCIpXHJcbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjb252ZXJ0YXRpb25BY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9uID0+IGNvbnZlcnRhdGlvbi5pc0FjdGl2ZSlcclxuXHJcbiAgICAgICAgaWYgKCFjb252ZXJ0YXRpb25BY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aW1lT25saW5lID0gJ+OCquODs+ODqeOCpOODsydcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhlYWQtaW5mb1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hY3RpdmUtY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnZlcnRhdGlvbkFjdGl2ZS5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjb252ZXJ0YXRpb25BY3RpdmUubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KGNvbnZlcnRhdGlvbkFjdGl2ZS5pc09ubGluZSA/IFwiYWN0aXZlLW5vd1wiIDogJycpICsgXCIgdGltZS1vbmxpbmVcIn0+e3RpbWVPbmxpbmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZEluZm8pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXHJcblxyXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgbWVzc2FnZSwgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICBjb252QWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSksXHJcbiAgICAgICAgY2xhc3NUeXBlTWVzc2FnZSA9IG1lc3NhZ2UudXNlciAhPSBhdXRoLl9pZCA/ICdmbG9hdC1sZWZ0JyA6ICdmbG9hdC1yaWdodCBieS1tZSdcclxuICAgICAgICBpZiAoIWNvbnZBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbWVzc2FnZS1jaGF0XCIgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1R5cGVNZXNzYWdlICsgXCIgY2hhdC1ncm91cFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udkFjdGl2ZS5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lc3NhZ2Uuc3R5bGUgKyBcIiB0ZXh0XCJ9ID57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb24sXHJcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVzc2FnZSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCB7IHNldHRlckF1dGggfSBmcm9tIFwiLi4vYWN0aW9uXCJcclxuXHJcbmNsYXNzIE15TG9naW5GYWNlYm9vayBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50Q2xpY2tlZCA9ICgpID0+IHsgfVxyXG4gICAgcmVzcG9uc2VGYWNlYm9vayA9IHJlc3BvbnNlID0+IHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYXV0aGVuID0ge1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sIFxyXG4gICAgICAgICAgICB1c2VySUQ6IHJlc3BvbnNlLnVzZXJJRCxcclxuICAgICAgICAgICAgbmFtZTogcmVzcG9uc2UubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmVtYWlsLFxyXG4gICAgICAgICAgICBhdmF0YXI6IHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmJcIixcclxuICAgICAgICAgICAgbW9iaWxlOiBcIjEyMzQ1Njc4OTBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTG9naW5DaGF0KCBhdXRoZW4gKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJMb2dpbkNoYXQgPSBhdXRoZW4gPT4ge1xyXG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvcmVnaXN0ZXItY2hhdFwiXHJcbiAgICAgICAgZmV0Y2goYWN0aW9uLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYXV0aGVuKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogZGF0YS5tZXNzYWdlLCBzdGF0dXM6IHJlc3Auc3RhdHVzLCBlcnJvcjogZGF0YS5lcnJvcnMgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKHsgLi4ucmVzcG9uc2UuZGF0YSB9KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZXJyOiBcIiArIGVycm9yLm1lc3NhZ2UsIGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGYWNlYm9va0xvZ2luXHJcbiAgICAgICAgICAgICAgICBhcHBJZD1cIjYxODU3OTA0NTQ2MDk2MlwiXHJcbiAgICAgICAgICAgICAgICBhdXRvTG9hZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M9XCJteS1mYWNlYm9vay1idXR0b24tY2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj1cImZhLWZhY2Vib29rXCJcclxuICAgICAgICAgICAgICAgIHRleHRCdXR0b249XCJGYWNlYm9va+OBp+ODreOCsOOCpOODs1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvbXBvbmVudENsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz17dGhpcy5yZXNwb25zZUZhY2Vib29rfSAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgOiBzdGF0ZS5hdXRoLFxyXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE15TG9naW5GYWNlYm9vaykiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuaW1wb3J0IHsgc2V0dGVyQXV0aCB9IGZyb20gXCIuLi9hY3Rpb25cIlxyXG5cclxuY2xhc3MgTXlMb2dpbkdvb2dsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50Q2xpY2tlZCA9ICgpID0+IHsgfVxyXG4gICAgXHJcbiAgICByZXNwb25zZUdvb2dsZUVycm9yID0gcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBcImzhu5dpIHJlc3BvbnNlR29vZ2xlRXJyb3JcIilcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgXCJyZXNwb25zZUdvb2dsZUVycm9yXCIpXHJcbiAgICB9XHJcbiAgICByZXNwb25zZUdvb2dsZSA9IHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgXCLEkcO6bmcgcmVzcG9uc2VHb29nbGVcIilcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYXV0aGVuID0ge1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgIHVzZXJJRDogcmVzcG9uc2UucHJvZmlsZU9iai5nb29nbGVJZCxcclxuICAgICAgICAgICAgbmFtZTogcmVzcG9uc2UucHJvZmlsZU9iai5uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogcmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCxcclxuICAgICAgICAgICAgYXZhdGFyOiByZXNwb25zZS5wcm9maWxlT2JqLmltYWdlVXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdvb2dsZVwiLFxyXG4gICAgICAgICAgICBtb2JpbGU6IFwiMTIzNDU2Nzg5MFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJMb2dpbkNoYXQoIGF1dGhlbiApXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJMb2dpbkNoYXQgPSBhdXRoZW4gPT4ge1xyXG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvcmVnaXN0ZXItY2hhdFwiXHJcbiAgICAgICAgZmV0Y2goYWN0aW9uLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYXV0aGVuKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogZGF0YS5tZXNzYWdlLCBzdGF0dXM6IHJlc3Auc3RhdHVzLCBlcnJvcjogZGF0YS5lcnJvcnMgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIHJlc3BvbnNlLmRhdGEgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQXV0aCh7IC4uLnJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycjogXCIgKyBlcnJvci5tZXNzYWdlLCBlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjE4NzE4NTIwNjkyNi1zbXFvZWo4azRhajlrM3Nka3E0NmJvZ2RmNGVvanZuNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9IGNsYXNzTmFtZT1cImJ0bi1nb29nbGUtbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tZ29vZ2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHb29nbGXjgafjg63jgrDjgqTjg7NcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvLyBidXR0b25UZXh0PVwiXCJcclxuICAgICAgICAgICAgICAgIGljb249XCJmYS1nb29nbGVcIlxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M9XCJteS1nb29nbGUtYnV0dG9uLWNsYXNzXCJcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17dGhpcy5yZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5yZXNwb25zZUdvb2dsZUVycm9yfVxyXG4gICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cclxuICAgICAgICAgICAgICAgID48L0dvb2dsZUxvZ2luPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGggIDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNeUxvZ2luR29vZ2xlKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcblxyXG5pbXBvcnQgTGVmdEluZm9yQXV0aCBmcm9tIFwiLi9MZWZ0SW5mb3JBdXRoLmpzeFwiXHJcbmltcG9ydCB7IHNldHRlckF1dGggfSBmcm9tIFwiLi4vYWN0aW9uXCJcclxuXHJcbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgYWxlcnQgOiBmYWxzZSAsIHByb2dyZXNzIDogZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnZhbGlkTG9naW5DaGF0ID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLm5hbWUudmFsdWUpe1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvckZpZWxkOiAnZW1haWwnLCBtZXNzYWdlOiBcIm5hbWUgYnXhu5ljIHBo4bqjaSBuaOG6rXBcIiB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmVtYWlsLnZhbHVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3JGaWVsZDogJ2VtYWlsJywgbWVzc2FnZTogXCJlbWFpbCBideG7mWMgcGjhuqNpIG5o4bqtcFwiIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMubW9iaWxlLnZhbHVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3JGaWVsZDogJ2VtYWlsJywgbWVzc2FnZTogXCJtb2JpbGUgYnXhu5ljIHBo4bqjaSBuaOG6rXBcIiB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIExvZ2luQ2hhdCA9IGUgPT4ge1xyXG4gICAgICAgIHZhciBlbWFpbCAgPSB0aGlzLmVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICBuYW1lICAgPSB0aGlzLm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIG1vYmlsZSA9IHRoaXMubW9iaWxlLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0b3IgPSB0aGlzLmludmFsaWRMb2dpbkNoYXQoKVxyXG4gICAgICAgIGlmKCB2YWxpZGF0b3IgKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0IDogdmFsaWRhdG9yLm1lc3NhZ2UgLCBwcm9ncmVzcyA6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxlcnQgOiBmYWxzZSAsIHByb2dyZXNzIDogdHJ1ZX0sICgpPT57XHJcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvcmVnaXN0ZXItY2hhdFwiXHJcbiAgICAgICAgICAgIGZldGNoKGFjdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsICwgbmFtZSAsIG1vYmlsZSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogZGF0YS5tZXNzYWdlLCBzdGF0dXM6IHJlc3Auc3RhdHVzLCBlcnJvcjogZGF0YS5lcnJvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IGZhbHNlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZXNwb25zZS5kYXRhICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQXV0aCh7IC4uLiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxlcnQgOiBlcnJvci5tZXNzYWdlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLmF1dGggKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9jaGF0L2NvbnN1bHRpbmctd2ViLWRlc2lnblwiIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGVmdEluZm9yQXV0aCAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9fcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYWxlcnQgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57IHRoaXMuc3RhdGUuYWxlcnQgfTwvZGl2PiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4g44GC44Gq44Gf44Gu44OV44Or44ON44O844OgIDxpPuKctTwvaT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHJlZj17KGlucHV0KSA9PiB0aGlzLm5hbWUgPSBpbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDjg6Hjg7zjg6vjgqLjg4njg6zjgrkgPGk+4py1PC9pPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHJlZj17KGlucHV0KSA9PiB0aGlzLmVtYWlsID0gaW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDpm7voqbHnlarlj7cgPGk+4py1PC9pPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibW9iaWxlXCIgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5tb2JpbGUgPSBpbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlbmQtbWFpbC1jb250YWN0XCIgb25DbGljaz17IHRoaXMuTG9naW5DaGF0IH0+IOODoeODvOODq+euoeeQhuiAheOBq+mAgeS/oTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9ncmVzcyAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyBwcm9ncmVzcy1zdWNjZXNzXCI+PGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1sb2FkZGluZ1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgOiBzdGF0ZS5hdXRoLFxyXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJlZ2lzdGVyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCBTaWRlYmFyTHN0Q29udmVydGF0aW9uIGZyb20gXCIuL1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4XCJcclxuXHJcbmNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgLy8vL3NldCBoZWlnaHQgY29tcG9uZW50XHJcbiAgICAgICAgdmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNpZGViYXItY2hhdFwiKSxcclxuICAgICAgICBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1sc3QtbWVzc2FnZXNcIilcclxuICAgICAgICBpZihzaWRlYmFyICYmIG1lc3NhZ2Upe1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmhlaWdodCA9IG1lc3NhZ2UuY2xpZW50SGVpZ2h0ICsgXCJweFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgc2lkZWJhclwiKVxyXG4gICAgICAgIHZhciB7IGF1dGggfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBhdXRoLmF2YXRhciA9ICcvdXBsb2Fkcy9hdmF0YXIuanBnJ1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtc2lkZWJhci1jaGF0XCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LXNpZGViYXItY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXV0aC5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2F1dGgubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJMc3RDb252ZXJ0YXRpb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlYmFyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCBDb252ZXJ0YXRpb24gZnJvbSBcIi4vQ29udmVydGF0aW9uLmpzeFwiXHJcblxyXG5jbGFzcyBTaWRlYmFyTHN0Q29udmVydGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgY29udmVydGF0aW9uXCIpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbnMgJiYgY29udmVydGF0aW9ucy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbiA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnZlcnRhdGlvbiBrZXk9e2NvbnZlcnRhdGlvbi5faWR9IGNvbnY9e2NvbnZlcnRhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNpZGViYXJMc3RDb252ZXJ0YXRpb24pXHJcbiIsIi8qIHBvbHlmaWxscy5qcyAqL1xyXG4vLyBpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xyXG4vLyBpbXBvcnQgJ3JlYWN0LWFwcC1wb2x5ZmlsbC9pZTExJ1xyXG5pbXBvcnQgJ2NvcmUtanMnXHJcbi8vL2ZvciBpZTkgXHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG4vKiogSUU5LCBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIGFsbCBvZiB0aGUgZm9sbG93aW5nIHBvbHlmaWxscy4gKiovXHJcbmltcG9ydCAnY29yZS1qcy9lcy9zeW1ib2wnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL2Z1bmN0aW9uJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3BhcnNlLWludCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9udW1iZXInO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvbWF0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvZGF0ZSc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3dlYWstbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3NldCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XHJcblxyXG5pbXBvcnQgJ3JhZi9wb2x5ZmlsbCc7XHJcbi8vLyBmb3Igd2VicGFjayBpbXBvcnRcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmltcG9ydCAnLi8uLi8uLi9CVUlMREVSL1NDU1MvY2hhdC5zY3NzJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShSZWR1Y2VyKTtcclxuc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY8OzIHRoYXkgxJHhu5VpIHRyb25nIFJlZHV4ISEnKVxyXG4gICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbn0pO1xyXG5cclxuLy8vIG15IGNvbXBvbmVudFxyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50L0FwcC5qc3gnXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlJPT1RcIik7XHJcblxyXG5pZiAodHlwZW9mIChTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgd3JhcHBlcikge1xyXG4gICAgXHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgLCB3cmFwcGVyKVxyXG59ZWxzZXtcclxuICAgIGFsZXJ0KFwi44GT44Gu44OW44Op44Km44K244Gn44Gv44CB44Ki44OX44Oq44Kx44O844K344On44Oz44Gv5q2j5bi444Gr5YuV5L2c44GX44G+44Gb44KT44CCIOOCouODg+ODl+OCsOODrOODvOODieOBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBzb2NrZXRMaXN0ZW5uZXIgfSBmcm9tIFwiLi9zb2NrZXRfbGlzdGVubmVyXCJcclxuaW1wb3J0IHsgc2V0dGVyU29ja2V0LCBzZXR0ZXJDb252ZXJ0YXRpb24sIHNldHRlck1lc3NhZ2UsIHNldHRlckF1dGgsIGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25cIlxyXG5pbXBvcnQgeyBhZGRNZXNzYWdlIH0gZnJvbSBcIi4uL2FjdGlvblwiXHJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXHJcblxyXG5jb25zdCBDT05GSUcgPSBDT05GSUdfQVBQLFxyXG5FVkVOVCA9IENPTkZJR19FVkVOVFxyXG52YXIgc29ja2V0ID0gbnVsbFxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb2NrZXRJbml0aWFsQ29ubmVjdChzb2NrZXRJT0NsaWVudCwgaW5zdGFuY2VBcHApIHtcclxuICAgIGNvbnNvbGUubG9nKENPTkZJRy51cmxfcmVhbHRpbWUpXHJcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChDT05GSUcudXJsX3JlYWx0aW1lKVxyXG4gICAgdmFyIEFwcGxpY2F0aW9uRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKVxyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBBcHBsaWNhdGlvbkRvbSAmJiBBcHBsaWNhdGlvbkRvbS5jbGFzc0xpc3QucmVtb3ZlKFwiY29ubmVjdC1zb2NrZXQtZXJyb3JcIilcclxuICAgICAgICAvLy8vIHNldCBjb25maWdcclxuICAgICAgICBzb2NrZXRMaXN0ZW5uZXIoc29ja2V0LCBpbnN0YW5jZUFwcClcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQoc29ja2V0KSlcclxuICAgICAgICAvLy8gam9pblJvb21Jbml0XHJcbiAgICAgICAgam9pblJvb21Jbml0KGluc3RhbmNlQXBwLnByb3BzLmF1dGgpXHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQobnVsbCkpXHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBDT05GSUcuYXNzZXRcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEFwcGxpY2F0aW9uRG9tICYmIEFwcGxpY2F0aW9uRG9tLmNsYXNzTGlzdC5hZGQoXCJjb25uZWN0LXNvY2tldC1lcnJvclwiKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQ09ORklHLmFzc2V0XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5Sb29tSW5pdChhdXRoKXtcclxuXHJcbiAgICBzb2NrZXQuZW1pdChFVkVOVC5KT0lOX0NIQU5ORUwsIGF1dGgpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBUElDaGFubmVscyggb3B0aW9uLCBjb21wb25lbnQgKXtcclxuXHJcbiAgICB2YXIgeyBtYXRjaCB9ID0gY29tcG9uZW50LnByb3BzLFxyXG4gICAgc2x1ZyA9IG51bGwsIFxyXG4gICAgY29udmVydGF0aW9uSWRBY3RpdmUgPSBudWxsXHJcbiAgICBpZiggbWF0Y2ggKXtcclxuICAgICAgICBzbHVnID0gbWF0Y2gucGFyYW1zLnNsdWdcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWN0aW9uID0gY29tcG9uZW50LnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvY2hhbm5lbHM/XCJcclxuICAgIGlmKCBvcHRpb24uX2lkICl7XHJcbiAgICAgICAgYWN0aW9uICs9IFwiJmlkPVwiICsgb3B0aW9uLl9pZFxyXG4gICAgfVxyXG4gICAgaWYoIG9wdGlvbi5lbWFpbCApe1xyXG4gICAgICAgIGFjdGlvbiArPSBcIiZlbWFpbD1cIiArIG9wdGlvbi5lbWFpbFxyXG4gICAgfVxyXG4gICAgaWYoIG9wdGlvbi5tb2JpbGUgKXtcclxuICAgICAgICBhY3Rpb24gKz0gXCImbW9iaWxlPVwiICsgb3B0aW9uLm1vYmlsZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgZmV0Y2goYWN0aW9uLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcCA9PiB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcmVzcC5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKSBcclxuICAgIH0pXHJcbiAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCByZXNwb25zZS5kYXRhICl7XHJcbiAgICAgICAgICAgIHZhciBjb252ZXJ0YXRpb25zID0gW10sXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzID0gW11cclxuXHJcbiAgICAgICAgICAgIGlmKCByZXNwb25zZS5kYXRhLmNoYW5uZWxzICl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2hhbm5lbHMubWFwKGNvbnYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb252ZXJ0YXRpb24gPSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb252LnVzZXJbMF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiBjb21wb25lbnQucHJvcHMuYXV0aC5faWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGNvbnYuX2lkIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiggc2x1ZyAmJiBjb252ZXJ0YXRpb24uc2x1ZyA9PSBzbHVnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydGF0aW9uSWRBY3RpdmUgPSBjb252ZXJ0YXRpb24uX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGNvbnYuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2RhdGE6IGNvbnYubWVzc2FnZSB8fCBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0YXRpb25zLnB1c2goY29udmVydGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQucHJvcHMuZGlzcGF0Y2goc2V0dGVyQ29udmVydGF0aW9uKCBjb252ZXJ0YXRpb25zICkpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQucHJvcHMuZGlzcGF0Y2goc2V0dGVyTWVzc2FnZSggbWVzc2FnZXMgKSlcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbklkQWN0aXZlICYmIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24oY29udmVydGF0aW9uSWRBY3RpdmUpKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRJbml0aWFsQ29ubmVjdChzb2NrZXRJT0NsaWVudCwgY29tcG9uZW50IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YS50b2tlbiApe1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1dGggPSBjb21wb25lbnQucHJvcHMuYXV0aFxyXG4gICAgICAgICAgICAgICAgYXV0aC50b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW5cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKCBhdXRoICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIG51bGwpXHJcbiAgICAgICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlckF1dGgoIG51bGwgKSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmQoIG1lc3NhZ2UgKXtcclxuICAgIHZhciB7IG1lc3NhZ2UsIHN0eWxlLCB0b2tlbiwgdXNlciwgY2hhbm5lbF9pZCwgY29tcG9uZW50IH0gPSBtZXNzYWdlXHJcbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC8oXFxuXFxzKj9cXG4pXFxzKlxcbi8sICckMScpXHJcbiAgICBcclxuICAgIHNvY2tldC5lbWl0KEVWRU5ULlNFTkRfTUVTU0FHRSwgeyBtZXNzYWdlLCBzdHlsZSwgdG9rZW4sIHVzZXIsIGNoYW5uZWxfaWQgfSlcclxuICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChcclxuICAgICAgICBhZGRNZXNzYWdlKFxyXG4gICAgICAgICAgICB7IF9pZDogY2hhbm5lbF9pZCwgbWVzc2FnZV9kYXRhOnt0eXBlOiB0cnVlLCByZWFkOiB0cnVlLCBjb250ZW50OiBtZXNzYWdlLCBzdHlsZSwgdG9rZW4sIHVzZXJ9fVxyXG4gICAgICAgIClcclxuICAgIClcclxufSIsInZhciBFVkVOVCA9IENPTkZJR19FVkVOVFxyXG5pbXBvcnQgeyBhZGRNZXNzYWdlIH0gZnJvbSBcIi4uL2FjdGlvblwiXHJcbmV4cG9ydCBmdW5jdGlvbiBzb2NrZXRMaXN0ZW5uZXIoIHNvY2tldCwgaW5zdGFuY2VBcHAgKXtcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfTUVTU0FHRSwgbWVzc2FnZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLEkcOjIHbDoG8gXCIgKyBFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBtZXNzYWdlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBhdXRoID0gaW5zdGFuY2VBcHAucHJvcHMuYXV0aFxyXG4gICAgICAgIGlmKCBtZXNzYWdlLnRva2VuICE9IGF1dGgudG9rZW4gKXtcclxuICAgICAgICAgICAgbWVzc2FnZS5tZXNzYWdlX2RhdGEuX2lkID0gYXV0aC5faWRcclxuICAgICAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goIGFkZE1lc3NhZ2UoIG1lc3NhZ2UgKSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn0iLCJ2YXIgYXV0aCA9IG51bGxcclxuaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpXHJcbn1cclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBhdXRoLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuQVVUSC5TRVRURVI6XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKVxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJcclxuaWYgKHR5cGVvZiBDT05GSUdfQVBQID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zdCBDT05GSUdfQVBQID0gbnVsbFxyXG59XHJcblxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gQ09ORklHX0FQUCwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLkNPTkZJRy5TRVRURVJfQ09ORklHOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFRZUEUuQ09OVkVSVEFUSU9OLlNFVFRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBUWVBFLkNPTlZFUlRBVElPTi5DSEFOR0U6IFxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0uX2lkID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGlzQWN0aXZlIDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IGZhbHNlIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8vdGjDqm0gY8OhYyByZWR1Y2VyIGZ1bnRpb24gY+G6p24gxJHGsOG7o2MgY29tYmluZSB2w6BvIMSRw6J5XHJcbmltcG9ydCBTb2NrZXRSZWR1Y2VyIGZyb20gXCIuL3NvY2tldC5qc1wiXHJcbmltcG9ydCBBdXRoIGZyb20gXCIuL2F1dGguanNcIlxyXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL2NvbmZpZy5qc1wiXHJcbmltcG9ydCBDb252ZXJ0YXRpb24gZnJvbSBcIi4vY29udmVydGF0aW9uLmpzXCJcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZS5qc1wiXHJcbi8vLy8ga2jhu59pIHThuqFvIDEgYmnhur9uIGJp4buDdSBkaeG7hW4gUkVEVUNFUiBBTEwgXHJcbmNvbnN0IFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgXHJcbiAgICBzb2NrZXQgICAgICA6IFNvY2tldFJlZHVjZXIsXHJcbiAgICBhdXRoICAgICAgICA6IEF1dGgsXHJcbiAgICBjb25maWcgICAgICA6IENvbmZpZyxcclxuICAgIGNvbnZlcnRhdGlvbjogQ29udmVydGF0aW9uLFxyXG4gICAgbWVzc2FnZSAgICAgOiBNZXNzYWdlXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSZWR1Y2VyOyIsIlxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxyXG5cclxudmFyIG1lc3NhZ2VzID0gW11cclxuaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHZhciBEYXRhU3RyaW5nTWVzc2FnZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVzc2FnZXMnKVxyXG4gICAgaWYoIERhdGFTdHJpbmdNZXNzYWdlcyApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lc3NhZ2VzID0gSlNPTi5wYXJzZShEYXRhU3RyaW5nTWVzc2FnZXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IG1lc3NhZ2VzLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFRZUEUuTUVTU0FHRS5TRVRURVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgVFlQRS5NRVNTQUdFLkFERF9NRVNTQUdFOlxyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBzdGF0ZS5tYXAoIG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS5faWQgPT09IGFjdGlvbi5wYXlsb2FkLl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLm1lc3NhZ2UsIG1lc3NhZ2VfZGF0YTogWyAuLi5tZXNzYWdlLm1lc3NhZ2VfZGF0YSwgYWN0aW9uLnBheWxvYWQubWVzc2FnZV9kYXRhXSB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZXNcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVFlQRSBmcm9tICcuLi9hY3Rpb24vdHlwZS5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2tldFJlZHVjZXIoc3RhdGUgPSBudWxsICwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLlNPQ0NLRVQuU0VUVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9