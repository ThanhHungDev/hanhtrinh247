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
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Regular\";\n  src: url(\"/font/KozGoPro/KozGoPro-Regular.otf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Bold\";\n  src: url(\"/font/KozGoPro/KozGoPro-Bold.otf\");\n}\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.AppComponent {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 15px;\n}\n\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.component-sidebar-chat {\n  float: left;\n  width: 30%;\n  box-sizing: border-box;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: 50%;\n  border: 2px double #9175ca;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 60px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 10px;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.component-list-message .wrapper-list-message {\n  padding: 15px;\n  height: 400px;\n  overflow-y: scroll;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 60px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}\n.component-user-chat-sidebar {\n  position: relative;\n}\n.component-user-chat-sidebar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  bottom: 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.component-user-chat-sidebar .user-chat {\n  position: relative;\n  padding: 15px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #c7c6c6;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 10px;\n  color: #28a745;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  background: -moz-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -webkit-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -o-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -ms-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n}\n.component-message-chat .chat-group .avatar {\n  max-width: 40px;\n  max-height: 40px;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content {\n  padding-left: 50px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  background: transparent !important;\n  font-size: 40px;\n  padding: 0 2px;\n  line-height: 1;\n}\n.component-message-chat .chat-group .message-content .text {\n  padding: 10px;\n  border-radius: 15px;\n  white-space: pre;\n  word-break: break-all;\n  background: -moz-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -webkit-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -o-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -ms-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}\n\n.component-list-emoji {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  padding: 10px;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  background-color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.component-list-emoji.first-show {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-list-emoji.show {\n  visibility: unset;\n  height: unset;\n  bottom: 100%;\n  left: 20px;\n  right: 20px;\n  opacity: 1;\n}\n\n.component-emoji {\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  color: #0d47a1;\n}\n\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  position: relative;\n  padding: 5px 80px 0 50px;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #e9ecef;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n  -ms-overflow-style: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 10px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: inline-block;\n  z-index: 1;\n  right: 45px;\n}\n.component-input-send-chat .hero-icon.react {\n  z-index: 1;\n  display: inline-block;\n  right: 10px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"󰅗\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}\n\n.component-register {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  padding: 5px;\n}\n.component-register:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-register .left__register {\n  float: left;\n  width: 40%;\n  padding: 10px;\n}\n.component-register .right__register {\n  float: right;\n  width: 60%;\n  padding: 10px;\n}\n.component-register .conpany {\n  line-height: 1;\n  font-size: 18px;\n}\n.component-register .register-address {\n  background: #f2f2f2 none repeat scroll 0 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  display: block;\n  margin: 10px 0;\n  padding: 10px 10px;\n  position: relative;\n}\n.component-register .register-address h6 {\n  font-weight: 100;\n  font-size: 15px;\n}\n.component-register .intro-chat-register {\n  font-size: 18px;\n  color: #f44336;\n}\n.component-register .form-input {\n  padding-top: 10px;\n}\n.component-register .form-input label {\n  font-size: 15px;\n  color: #212529;\n  display: block;\n  padding-bottom: 10px;\n}\n.component-register .form-input input {\n  display: block;\n  width: 100%;\n  padding: 8px 15px;\n  font-size: 16px;\n  border-radius: 0;\n  border: 1px solid #6c757d;\n  outline: none;\n}\n.component-register .form-input input:focus {\n  color: #0d47a1;\n  border: 1px solid #0d47a1;\n}\n.component-register .form-input i {\n  font-style: normal;\n  color: #dc3545;\n}\n.component-register .btn-send-mail-contact {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 2px solid #3f51b5;\n}\n.component-register .btn-send-mail-contact:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #3f51b5;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.component-register .btn-send-mail-contact:focus, .component-register .btn-send-mail-contact.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.component-register .btn-send-mail-contact:disabled, .component-register .btn-send-mail-contact.disabled, fieldset:disabled .component-register .btn-send-mail-contact {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-box-outline::before {\n  content: \"\\F0007\";\n}\ni.hero-icon.hero-account-edit-outline::before {\n  content: \"\\F0FFB\";\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-calendar::before {\n  content: \"\\F00ED\";\n}\ni.hero-icon.hero-calendar-month-outline::before {\n  content: \"\\F0E18\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-clock-check-outline::before {\n  content: \"\\F0FA9\";\n}\ni.hero-icon.hero-close::before {\n  content: \"\\F0156\";\n}\ni.hero-icon.hero-close-box-outline::before {\n  content: \"\\F0158\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-delete-variant::before {\n  content: \"\\F01B3\";\n}\ni.hero-icon.hero-email-check-outline::before {\n  content: \"\\F0AB2\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-eye-outline::before {\n  content: \"\\F06D0\";\n}\ni.hero-icon.hero-file-document-edit-outline::before {\n  content: \"\\F0DC9\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-import-outline::before {\n  content: \"\\F0F9C\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-layers-search-outline::before {\n  content: \"\\F1207\";\n}\ni.hero-icon.hero-lock-outline::before {\n  content: \"\\F0341\";\n}\ni.hero-icon.hero-magnify-scan::before {\n  content: \"\\F1276\";\n}\ni.hero-icon.hero-menu-down::before {\n  content: \"\\F035D\";\n}\ni.hero-icon.hero-menu-down-outline::before {\n  content: \"\\F06B6\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-monitor-dashboard::before {\n  content: \"\\F0A07\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-scatter-plot-outline::before {\n  content: \"\\F0ECA\";\n}\ni.hero-icon.hero-segment::before {\n  content: \"\\F0ECB\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-snowflake-variant::before {\n  content: \"\\F0F2A\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-table-star::before {\n  content: \"\\F13CB\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-tag::before {\n  content: \"\\F04F9\";\n}\ni.hero-icon.hero-tag-heart::before {\n  content: \"\\F068B\";\n}\ni.hero-icon.hero-tag-heart-outline::before {\n  content: \"\\F0BCF\";\n}\ni.hero-icon.hero-tag-multiple-outline::before {\n  content: \"\\F12F7\";\n}\ni.hero-icon.hero-tag-text-outline::before {\n  content: \"\\F04FD\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-theme-light-dark::before {\n  content: \"\\F050E\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}", ""]);
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
        message: event.target.value,
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
      }, "\u30C1\u30E3\u30C3\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306E\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4E0A\u8A18\u306E\u60C5\u5831\u306E\u4FDD\u8B77\u306B\u52AA\u3081\u3066\u3044\u307E\u3059"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JVSUxERVIvU0NTUy9jaGF0LnNjc3M/NjFkZCIsIndlYnBhY2s6Ly8vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NvbnZlcnRhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FbW9qaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9JbnB1dFNlbmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGVmdEluZm9yQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9MaXN0RW1vamkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2VIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9SZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9TaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5L3NvY2tldF9saXN0ZW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvY29udmVydGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvc29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsic2V0dGVyU29ja2V0Iiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJUWVBFIiwiU09DQ0tFVCIsIlNFVFRFUiIsInBheWxvYWQiLCJzZXR0ZXJBdXRoIiwiYXV0aCIsIkFVVEgiLCJzZXR0ZXJDb252ZXJ0YXRpb24iLCJjb252IiwiQ09OVkVSVEFUSU9OIiwic2V0dGVyTWVzc2FnZSIsIm1lc3MiLCJNRVNTQUdFIiwiY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIiwiaWQiLCJDSEFOR0UiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsIkFERF9NRVNTQUdFIiwiYWRkTWVzc2FnZVNlbmRUb01lIiwiQ0hBTk5FTCIsIkFERF9NRVNTQUdFX1NFTkRfVE9fTUUiLCJDT05GSUciLCJTRVRURVJfQ09ORklHIiwiQXBwIiwicHJvcHMiLCJtYXRjaCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpZW50IiwiY29ubmVjdCIsIkNoYXQiLCJmZXRjaEFQSUNoYW5uZWxzIiwiY29uZmlnIiwiQ29udmVydGF0aW9uIiwiZGlzcGF0Y2giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwiaXNBY3RpdmUiLCJjaGFuZ2VBY3RpdmVVc2VyIiwiX2lkIiwiYXZhdGFyIiwibmFtZSIsImNvbnZlcnRhdGlvbnMiLCJjb252ZXJ0YXRpb24iLCJFbW9qaSIsImV2ZW50IiwiaW5wdXQiLCJjb250ZW50IiwidmFsdWUiLCJzeW1ib2wiLCJhZGRJY29uSW5wdXRDaGF0IiwiSW5wdXRTZW5kIiwiZW1vamlzIiwiY29udkFjdGl2ZSIsImZpbmQiLCJvYmpNZXNzIiwic3R5bGUiLCJ0b2tlbiIsInVzZXIiLCJjaGFubmVsX2lkIiwiY29tcG9uZW50Iiwic2VuZCIsInRhcmdldCIsImtleUNvZGUiLCJzaGlmdEtleSIsInNldFN0YXRlIiwic2VuZENoYXQiLCJ3b3JkcyIsInRyaW0iLCJzcGxpdCIsIndvcmRMYXN0ZXN0IiwibGVuZ3RoIiwiZW1vamlzQ2FsbCIsIkNPTkZJR19FTU9KSVMiLCJmaWx0ZXIiLCJpdGVtIiwic2lnbiIsImxhc3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwid2luZG93Iiwib25jbGljayIsImNvbnRhaW5zIiwicmVtb3ZlIiwic2V0VGltZW91dCIsInNob3dMaXN0RW1vamkiLCJoYW5kbGVTZW5kTWVzc2FnZURvd24iLCJoYW5kbGVTZW5kTWVzc2FnZVVwIiwiaGFuZGxlU2VuZENoYXRDbGljayIsImJ0blNlbmRNZXNzYWdlIiwiaGFuZGxlU2VuZE1lc3NhZ2VSZWFjdFN1Ym1pdCIsIkxlZnRJbmZvckF1dGgiLCJjb21wYW55X25hbWUiLCJ0YXhfY29kZV9kYXRlIiwiY29tcGFueV9hZGRyZXNzX3N0cmVldCIsImNvbXBhbnlfYWRkcmVzc19sb2NhbGl0eSIsImNvbXBhbnlfYWRkcmVzc19yZWdpb24iLCJjb21wYW55X2FkZHJlc3NfY291bnRyeSIsImpvaW4iLCJwaG9uZV9vbmUiLCJjb21wYW55X21haWwiLCJMaXN0RW1vamkiLCJtYXAiLCJMaXN0TWVzc2FnZSIsImRvbVNjcm9sbCIsImRvbVdyaXRlciIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIiQiLCJvbiIsImlubmVySGVpZ2h0IiwiY29udmVydGF0aW9uQWN0aXZlIiwibWVzc2FnZXMiLCJtZXNzYWdlX2RhdGEiLCJjcmVhdGVkQXQiLCJyZWFkIiwia2V5IiwiSGVhZEluZm8iLCJ0aW1lT25saW5lIiwiaXNPbmxpbmUiLCJNZXNzYWdlIiwiY2xhc3NUeXBlTWVzc2FnZSIsIlJlZ2lzdGVyIiwiZXJyb3JGaWVsZCIsImVtYWlsIiwibW9iaWxlIiwiZSIsInZhbGlkYXRvciIsImludmFsaWRMb2dpbkNoYXQiLCJhbGVydCIsInByb2dyZXNzIiwiYWN0aW9uIiwidXJsX3JlYWx0aW1lIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhVHlwZSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwIiwib2siLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImVycm9yIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsIkxvZ2luQ2hhdCIsIlNpZGViYXIiLCJzaWRlYmFyIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiU2lkZWJhckxzdENvbnZlcnRhdGlvbiIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJSZWR1Y2VyIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJ3cmFwcGVyIiwiU3RvcmFnZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiQ09ORklHX0FQUCIsIkVWRU5UIiwiQ09ORklHX0VWRU5UIiwic29ja2V0SW5pdGlhbENvbm5lY3QiLCJzb2NrZXRJT0NsaWVudCIsImluc3RhbmNlQXBwIiwiQXBwbGljYXRpb25Eb20iLCJzb2NrZXRMaXN0ZW5uZXIiLCJqb2luUm9vbUluaXQiLCJlbWl0IiwiSk9JTl9DSEFOTkVMIiwib3B0aW9uIiwic2x1ZyIsImNvbnZlcnRhdGlvbklkQWN0aXZlIiwicGFyYW1zIiwiY2hhbm5lbHMiLCJ1c2VyX2lkIiwicHVzaCIsInJlcGxhY2UiLCJTRU5EX01FU1NBR0UiLCJSRVNQT05TRV9NRVNTQUdFIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImNvbWJpbmVSZWR1Y2VycyIsIlNvY2tldFJlZHVjZXIiLCJBdXRoIiwiQ29uZmlnIiwiRGF0YVN0cmluZ01lc3NhZ2Vz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QSxNQUFNLENBQUN6SSxJQUFmO0FBQ0ksU0FBS0MsdURBQUksQ0FBQ0MsT0FBTCxDQUFhQyxNQUFsQjtBQUNJLGFBQU9zSSxNQUFNLENBQUNySSxPQUFkOztBQUNKO0FBQ0ksYUFBTzBCLEtBQVA7QUFKUjtBQU1ILEM7Ozs7Ozs7Ozs7O0FDUkQsZSIsImZpbGUiOiJqcy9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0yIS4vY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL1NQQS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3pHb1Byby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9Lb3pHb1Byby9Lb3pHb1Byby1SZWd1bGFyLm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS296R29Qcm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvS296R29Qcm8vS296R29Qcm8tQm9sZC5vdGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5BcHBDb21wb25lbnQge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5iZy1jaGF0LXRlbWFsYXRlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi53cmFwcGVyLXBhZ2UtY2hhdCB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ud3JhcHBlci1wYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMzAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5teWluZm8ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbiAgbGVmdDogMXB4O1xcbiAgcmlnaHQ6IDFweDtcXG4gIGJvdHRvbTogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICM5MTc1Y2E7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyLmFjdGl2ZS1vbmxpbmUge1xcbiAgYm9yZGVyOiAycHggZG91YmxlICMwMGM4NTE7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG1heC13aWR0aDogMjdjaDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICB9XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgfVxcblxcbiAgLm15aW5mbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgI0Y1RjVGNTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi50aWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTdweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIHdpZHRoOiA2cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDEpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDIpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDMpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0NTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG4gIDI4JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgNDQlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxuICB9XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNXB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDdweCA3cHggN3B4IDU1cHg7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyAubGFzdC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgfVxcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogN3B4IDdweCA3cHggNTVweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAudGltZS1vbmxpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzI4YTc0NTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lLmFjdGl2ZS1ub3cge1xcbiAgY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5hdmF0YXIge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAubWVzc2FnZS1jb250ZW50IC50ZXh0IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5hdmF0YXIge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuRU1PSkkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHBhZGRpbmc6IDAgMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dC5FTU9KSSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnRleHQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50eXBpbmctdGV4dCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5jb21wb25lbnQtbGlzdC1lbW9qaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICByaWdodDogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5maXJzdC1zaG93IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5zaG93IHtcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcbiAgaGVpZ2h0OiB1bnNldDtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIGxlZnQ6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb21wb25lbnQtZW1vamkge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA4MHB4IDAgNTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0N2ExO1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgPiBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDExO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgY29sb3I6ICMwZDZlZmQ7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5oZXJvLWljb24uZW1vdGljb24ge1xcbiAgbGVmdDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5zZW5kIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDE7XFxuICByaWdodDogNDVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5yZWFjdCB7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlIHtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgY29udGVudDogXFxcIvOwhZdcXFwiO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTpob3ZlciBpbWcge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTpob3ZlcjphZnRlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgaW1nIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLmNvbXBvbmVudC1yZWdpc3RlciB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmxlZnRfX3JlZ2lzdGVyIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLnJpZ2h0X19yZWdpc3RlciB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuY29ucGFueSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAucmVnaXN0ZXItYWRkcmVzcyB7XFxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAucmVnaXN0ZXItYWRkcmVzcyBoNiB7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5pbnRyby1jaGF0LXJlZ2lzdGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjZjQ0MzM2O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgaW5wdXQ6Zm9jdXMge1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGkge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgY29sb3I6ICNkYzM1NDU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW0gMC42cmVtO1xcbiAgZm9udC1zaXplOiAwLjgxcmVtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIG1hcmdpbjogMC4zNzVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZjUxYjU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgY29sb3ItbGV2ZWwoIzNmNTFiNSwgLTgpO1xcbiAgY29sb3I6ICMzZjUxYjU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0OmZvY3VzLCAuY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3QuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Q6ZGlzYWJsZWQsIC5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdC5kaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuXFxuaS5oZXJvLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbmkuaGVyby1pY29uOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDAwN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1lZGl0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkZCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LWdyb3VwLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjU4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LXRpZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBDQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWlycG9ydDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NEJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LXVwLWJvbGQtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzM5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hdXRvLWZpeDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWJhbGxvdC1yZWNvdW50LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzNBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxlbmRhcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRURcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhbGVuZGFyLW1vbnRoLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTE4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYXJkLWFjY291bnQtbWFpbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FydC1wbHVzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExQ1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLW5mYzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlcnRpZmljYXRlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTg4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG9jay1jaGVjay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZBOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvc2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTU2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG9zZS1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNyZWF0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY3NFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZGVsZXRlLXZhcmlhbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUIzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbWFpbC1jaGVjay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFCMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1haWwtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVFNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZXllLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkQwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1maWxlLWRvY3VtZW50LWVkaXQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQzlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm0tc2VsZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQwMVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybWF0LWxpc3QtdGV4dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNkZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWdvb2dsZS1hZHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oYW5kLW9rYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTUwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oZWFydC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taG9tZS1pbXBvcnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGOUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhvbWUtbWFwLW1hcmtlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWh1bWFuLW1hbGUtY2hpbGQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzhDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sYXB0b3A6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzIyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sYXllcnMtc2VhcmNoLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjA3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sb2NrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzQxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tYWduaWZ5LXNjYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjc2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZW51LWRvd246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzVEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZW51LWRvd24tb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QjZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtY29nLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTcyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLXRleHQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vbml0b3ItZGFzaGJvYXJkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEEwN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbmV3c3BhcGVyLXZhcmlhbnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMDNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDA0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1wbHVzLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1yZXNwb25zaXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ1RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2NhdHRlci1wbG90LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUNBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWdtZW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVDQlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VsZWN0aW9uLXNlYXJjaDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMDVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNub3dmbGFrZS12YXJpYW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEYyQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc3Rhci1ib3gtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0aWNrZXItZW1vamk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzg1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWJsZS1zdGFyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNDQlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFibGV0LWlwYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEY5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWctaGVhcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjhCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWctaGVhcnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCQ0ZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhZy1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJGN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLXRleHQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RkRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRlbGV2aXNpb24tY2xlYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTEwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10aGVtZS1saWdodC1kYXJrOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDUwRVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdXBkYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZCMFxcXCI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgVFlQRSBmcm9tIFwiLi90eXBlXCJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJTb2NrZXQoc29ja2V0KXtcbiAgICBjb25zb2xlLmxvZyhzb2NrZXQgLCBcIiBzZXQgc29ja2V0IFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLlNPQ0NLRVQuU0VUVEVSLFxuICAgICAgICBwYXlsb2FkIDogc29ja2V0XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckF1dGgoIGF1dGggKXtcbiAgICBjb25zb2xlLmxvZyhhdXRoICwgXCIgc2V0IGF1dGggXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6IFRZUEUuQVVUSC5TRVRURVIsXG4gICAgICAgIHBheWxvYWQgOiBhdXRoXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckNvbnZlcnRhdGlvbiggY29udiApe1xuICAgIGNvbnNvbGUubG9nKGNvbnYgLCBcIiBzZXQgY29udiBcIilcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlIDogVFlQRS5DT05WRVJUQVRJT04uU0VUVEVSLFxuICAgICAgICBwYXlsb2FkIDogY29udlxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJNZXNzYWdlKCBtZXNzICl7XG4gICAgY29uc29sZS5sb2cobWVzcyAsIFwiIHNldCBtZXNzIFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLk1FU1NBR0UuU0VUVEVSLFxuICAgICAgICBwYXlsb2FkIDogbWVzc1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbiggaWQgKXtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhpZCAsIFwiY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLkNPTlZFUlRBVElPTi5DSEFOR0UsXG4gICAgICAgIHBheWxvYWQgOiBpZFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlKCBtZXNzYWdlICl7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSAsIFwiIGFkZE1lc3NhZ2UgXCIpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6IFRZUEUuTUVTU0FHRS5BRERfTUVTU0FHRSxcbiAgICAgICAgcGF5bG9hZCA6IG1lc3NhZ2VcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlU2VuZFRvTWUoIG1lc3NhZ2UgKXtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlICwgXCIgYWRkTWVzc2FnZVNlbmRUb01lIFwiKVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuQUREX01FU1NBR0VfU0VORF9UT19NRSxcbiAgICAgICAgcGF5bG9hZCA6IG1lc3NhZ2VcbiAgICB9XG59IiwiY29uc3QgVFlQRSA9ICB7XG4gIFxuICBTT0NDS0VUIDoge1xuICAgIFNFVFRFUjogXCJTT0NDS0VUX1NFVFRFUlwiXG4gIH0sXG4gIEFVVEg6IHtcbiAgICBTRVRURVI6IFwiQVVUSF9TRVRURVJcIlxuICB9LFxuICBDT05WRVJUQVRJT046IHtcbiAgICBTRVRURVI6IFwiQ09OVkVSVEFUSU9OX1NFVFRFUlwiLFxuICAgIENIQU5HRTogXCJDT05WRVJUQVRJT05fQ0hBTkdFXCJcbiAgfSxcbiAgTUVTU0FHRToge1xuICAgIFNFVFRFUjogXCJNRVNTQUdFX1NFVFRFUlwiLFxuICAgIEFERF9NRVNTQUdFOiBcIk1FU1NBR0VfQUREXCJcbiAgfSxcbiAgQ09ORklHOiB7XG4gICAgU0VUVEVSX0NPTkZJRyA6IFwiU0VUVEVSX0NPTkZJR1wiXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRZUEU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5cbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3Rlci5qc3hcIlxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0LmpzeCdcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYXcgYXBwXCIpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiQXBwbGljYXRpb25cIiBjbGFzc05hbWU9XCJBcHBDb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NoYXRcIiByZW5kZXI9eygpID0+IDxDaGF0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2hhdC9yZWdpc3RlclwiIHJlbmRlcj17KCkgPT4gPFJlZ2lzdGVyIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9jaGF0LzpzbHVnJyByZW5kZXI9eyh7IG1hdGNoIH0pID0+IDxDaGF0IG1hdGNoPXttYXRjaH0gLz4gfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnQgIDogc3RhdGUuY2xpZW50XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCAobWFwU3RhdGVUb1Byb3BzKShBcHApOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8vIHNvY2NrZXQgXG5cbmltcG9ydCB7IGZldGNoQVBJQ2hhbm5lbHMgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcblxuXG4vLy8vIGRlZmluZVxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhci5qc3hcIlxuaW1wb3J0IExpc3RNZXNzYWdlIGZyb20gXCIuL0xpc3RNZXNzYWdlLmpzeFwiXG5cbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5hdXRoICl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZldGNoQVBJQ2hhbm5lbHModGhpcy5wcm9wcy5hdXRoLCB0aGlzKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiggIXRoaXMucHJvcHMuYXV0aCApe1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9jaGF0L3JlZ2lzdGVyXCIgLz5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtY2hhdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1wYWdlLWNoYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RNZXNzYWdlIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoYXQpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0IHsgY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIH0gZnJvbSBcIi4uL2FjdGlvblwiXG5cbmNsYXNzIENvbnZlcnRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjaGFuZ2VBY3RpdmVVc2VyID0gKGlkKSA9PiB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24oaWQpKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLmNsYXNzTGlzdC5hZGQoJ2NvbnZlcnRhdGlvbi1jaGFuZ2UnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHsgY29udiB9ID0gdGhpcy5wcm9wc1xuICAgICAgICB2YXIgY2xhc3NBY3RpdmVNZXNzYWdlID0gY29udi5pc0FjdGl2ZSAmJiAnYWN0aXZlLW1lc3NhZ2UnXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyXCIgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VBY3RpdmVVc2VyKGNvbnYuX2lkKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc0FjdGl2ZU1lc3NhZ2UgKyBcIiBhY3RpdmUgdXNlci1jaGF0XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnYuYXZhdGFyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57Y29udi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29udmVydGF0aW9uKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcblxuY2xhc3MgRW1vamkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGFkZEljb25JbnB1dENoYXQgPSBldmVudCA9PiB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpXG4gICAgaWYoaW5wdXQpe1xuICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgIC8vLyBhZGQgaWNvbiBcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ICsgdGhpcy5wcm9wcy5zeW1ib2xcbiAgICAgIGlucHV0LnZhbHVlID0gY29udGVudFxuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpIGNsYXNzTmFtZT1cImNvbXBvbmVudC1lbW9qaVwiIG9uQ2xpY2s9e3RoaXMuYWRkSWNvbklucHV0Q2hhdH0+e3RoaXMucHJvcHMuc3ltYm9sfTwvaT5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBFbW9qaSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaXN0RW1vamkgZnJvbSBcIi4vTGlzdEVtb2ppLmpzeFwiO1xuaW1wb3J0IHsgc2VuZCB9IGZyb20gXCIuLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXG5cbmNsYXNzIElucHV0U2VuZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2VuZENoYXQ6IGZhbHNlIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tcG9uZW50LWVtb2ppJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbW9qaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWVtb2ppc1wiKVxuICAgICAgICAgICAgaWYgKGVtb2ppcykge1xuICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVtb2ppcy5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LXRlbXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy10ZW1wXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LmFkZChcInNob3dcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMaXN0RW1vamkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpXG4gICAgICAgIGlmIChlbW9qaXMpIHtcbiAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QuYWRkKFwic2hvdy10ZW1wXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTZW5kTWVzc2FnZVJlYWN0U3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXG5cbiAgICAgICAgdmFyIG9iak1lc3MgPSB7IFxuICAgICAgICAgICAgbWVzc2FnZTogXCIg8J+SnSBcIiwgXG4gICAgICAgICAgICBzdHlsZTogXCJFTU9KSVwiLCBcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnByb3BzLmF1dGgudG9rZW4sXG4gICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcbiAgICAgICAgICAgIGNoYW5uZWxfaWQ6IGNvbnZBY3RpdmUuX2lkLFxuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICB9XG5cbiAgICAgICAgc2VuZChvYmpNZXNzKVxuICAgIH1cblxuICAgIGJ0blNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXG5cbiAgICAgICAgdmFyIG9iak1lc3MgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBldmVudC50YXJnZXQudmFsdWUsIFxuICAgICAgICAgICAgc3R5bGU6IFwiXCIsIFxuICAgICAgICAgICAgdG9rZW46IHRoaXMucHJvcHMuYXV0aC50b2tlbixcbiAgICAgICAgICAgIHVzZXI6IGF1dGguX2lkLFxuICAgICAgICAgICAgY2hhbm5lbF9pZDogY29udkFjdGl2ZS5faWQsXG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIH1cblxuICAgICAgICBzZW5kKG9iak1lc3MpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG5cbiAgICBoYW5kbGVTZW5kTWVzc2FnZURvd24gPSAoZXZlbnQpID0+IHtcblxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuIGZhbHNlXG4gICAgICAgIFxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcblxuICAgICAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxuXG4gICAgICAgICAgICB2YXIgb2JqTWVzcyA9IHsgXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJcIiwgXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMucHJvcHMuYXV0aC50b2tlbixcbiAgICAgICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcbiAgICAgICAgICAgICAgICBjaGFubmVsX2lkOiBjb252QWN0aXZlLl9pZCxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmQob2JqTWVzcylcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kQ2hhdDogdHJ1ZSB9KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vLyBzcGFjZSBjaGFyYWN0ZXIgcmVwbGFjZSBlbW9qaVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMikge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgLy8vIGdldCB3b3JkIGxhc3RcbiAgICAgICAgICAgIHZhciB3b3JkcyA9IGNvbnRlbnQudHJpbSgpLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgdmFyIHdvcmRMYXN0ZXN0ID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIC8vLy8gY2hlY2sgaGF2ZSBzeXNib2wgXG4gICAgICAgICAgICB2YXIgZW1vamlzQ2FsbCA9IENPTkZJR19FTU9KSVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zaWduID09IHdvcmRMYXN0ZXN0KVxuICAgICAgICAgICAgaWYoZW1vamlzQ2FsbC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIC8vLyBhZGQgaWNvbiBcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gY29udGVudC50cmltKCkubGFzdEluZGV4T2YoXCIgXCIpXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjb250ZW50LnN1YnN0cmluZygwLCBsYXN0SW5kZXgpICsgXCIgXCIgKyBlbW9qaXNDYWxsWzBdLnN5bWJvbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVNlbmRNZXNzYWdlVXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbmRDaGF0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZENoYXQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVTZW5kQ2hhdENsaWNrID0gKCkgPT4ge1xuICAgICAgICAvLy8vIHNlbmQgY2xhc3MgaXMgd3JpdGUgbWVzc2FnZVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxuICAgICAgICAgICAgaWYoICFjb252QWN0aXZlICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1pcy13cml0ZS1tZXNzYWdlXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCBcIj5cbiAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zdGlja2VyLWVtb2ppIGVtb3RpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TGlzdEVtb2ppfVxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIGlkPVwianMtaW5wdXQtY2hhdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZURvd259XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VVcH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kQ2hhdENsaWNrfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuODoeODg+OCu+ODvOOCuOOCkuabuOOBjy4uLlwiXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tc2VuZC1vdXRsaW5lIHNlbmRcIiBvbkNsaWNrPXt0aGlzLmJ0blNlbmRNZXNzYWdlfT48L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZSByZWFjdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VSZWFjdFN1Ym1pdH0+PC9pPlxuICAgICAgICAgICAgICAgIDxMaXN0RW1vamkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGggICAgICAgICA6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvbixcbiAgICAgICAgc29ja2V0ICAgICAgIDogc3RhdGUuc29ja2V0XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKElucHV0U2VuZCk7XG4iLCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmNsYXNzIExlZnRJbmZvckF1dGggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfX3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnBhbnlcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbmFtZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1hY2NvdW50LWdyb3VwLW91dGxpbmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tdXBkYXRlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt0aGlzLnByb3BzLmNvbmZpZy50YXhfY29kZV9kYXRlfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWhvbWUtbWFwLW1hcmtlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfYWRkcmVzc19zdHJlZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfYWRkcmVzc19sb2NhbGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX3JlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX2NvdW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNlbGxwaG9uZS1uZmNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDml6XmnKzjga7pm7voqbHvvJpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCJ0ZWw6XCIgKyB0aGlzLnByb3BzLmNvbmZpZy5waG9uZV9vbmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcucGhvbmVfb25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2FyZC1hY2NvdW50LW1haWwtb3V0bGluZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wibWFpbHRvOlwiICsgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9tYWlsfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X21haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbnRyby1jaGF0LXJlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIOODgeODo+ODg+ODiOOCkuioreWumuOBmeOCi+OBn+OCgeOBruaDheWgseOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgiDkuIroqJjjga7mg4XloLHjga7kv53orbfjgavliqrjgoHjgabjgYTjgb7jgZlcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoOiBzdGF0ZS5hdXRoLFxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMZWZ0SW5mb3JBdXRoKVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBFbW9qaSBmcm9tIFwiLi9FbW9qaS5qc3hcIlxuXG5jbGFzcyBMaXN0RW1vamkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJqcy1lbW9qaXNcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1lbW9qaVwiPlxuICAgICAgICB7IENPTkZJR19FTU9KSVMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEVtb2ppIGtleT17aXRlbS5zaWdufSBzeW1ib2w9e2l0ZW0uc3ltYm9sfSBzaWduPXtpdGVtLnNpZ259IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RW1vamlcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgTGlzdE1lc3NhZ2VIZWFkZXIgZnJvbSBcIi4vTGlzdE1lc3NhZ2VIZWFkZXIuanN4XCJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2UuanN4XCJcbmltcG9ydCBJbnB1dFNlbmQgZnJvbSBcIi4vSW5wdXRTZW5kLmpzeFwiXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcbi8vIGltcG9ydCBNZXNzYWdlQ2hhdFR5cGluZyBmcm9tIFwiLi9NZXNzYWdlQ2hhdFR5cGluZy5qc3hcIlxuXG5jbGFzcyBMaXN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cbiAgICAgICAgdmFyIGRvbVNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLWJvdHRvbVwiKVxuICAgICAgICB2YXIgZG9tV3JpdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpXG5cbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnZlcnRhdGlvbi1jaGFuZ2UnKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnZlcnRhdGlvbi1jaGFuZ2UnKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgZG9tU2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1zY3JvbGwtdG8tYm90dG9tXCIpXG4gICAgICAgICAgICB2YXIgZG9tV3JpdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpXG4gICAgICAgICAgICBkb21TY3JvbGwuc2Nyb2xsVG9wID0gZG9tU2Nyb2xsLnNjcm9sbEhlaWdodFxuICAgICAgICB9ZWxzZSBpZihcbiAgICAgICAgICAgIGRvbVNjcm9sbCAmJiBcbiAgICAgICAgICAgIGRvbVdyaXRlciAmJiBcbiAgICAgICAgICAgIGRvbVdyaXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvbGxvdy1jb252ZXJzYXRpb24nKSl7XG4gICAgICAgICAgICAgICAgZG9tU2Nyb2xsLnNjcm9sbFRvcCA9IGRvbVNjcm9sbC5zY3JvbGxIZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBpZihkb21TY3JvbGwpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKGRvbVNjcm9sbCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgKyBcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5pbm5lckhlaWdodCgpID49ICBcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVswXS5zY3JvbGxIZWlnaHQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgdmFyIGNvbnZlcnRhdGlvbkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IFtdXG4gICAgICAgIGlmKCBjb252ZXJ0YXRpb25BY3RpdmUgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzID0gdGhpcy5wcm9wcy5tZXNzYWdlcy5maW5kKCBtZXNzID0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzLl9pZCA9PSBjb252ZXJ0YXRpb25BY3RpdmUuX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYoIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5tZXNzYWdlX2RhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCAhbWVzc2FnZXMubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBbIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImNow7puZyB0w7RpIGPDsyB0aOG7gyBnacO6cCBnw6wgY2hvIGLhuqFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IFwiMjAyMC0wNy0yOVQwNjo1MTo1NC45NjNaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBcIkFETUlOXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IFwiQURNSU5cIixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtbHN0LW1lc3NhZ2VzXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxMaXN0TWVzc2FnZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1saXN0LW1lc3NhZ2VcIiBpZD1cImpzLXNjcm9sbC10by1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChtZXNzYWdlLCBrZXkpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wibWVzc2FnZS1jaGF0XCIgKyBrZXkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgey8qIDxNZXNzYWdlQ2hhdFR5cGluZy8+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dFNlbmQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvbixcbiAgICAgICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlzdE1lc3NhZ2UpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jbGFzcyBIZWFkSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgbOG6oWkgaGVhZCBsaXN0IG1lc3NhZ2VcIilcbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgICAgICB2YXIgY29udmVydGF0aW9uQWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbiA9PiBjb252ZXJ0YXRpb24uaXNBY3RpdmUpXG5cbiAgICAgICAgaWYgKCFjb252ZXJ0YXRpb25BY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGltZU9ubGluZSA9ICfjgqrjg7Pjg6njgqTjg7MnXG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaGVhZC1pbmZvXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYWN0aXZlLWNoYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXIgYWN0aXZlLW9ubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnZlcnRhdGlvbkFjdGl2ZS5hdmF0YXJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjb252ZXJ0YXRpb25BY3RpdmUubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyhjb252ZXJ0YXRpb25BY3RpdmUuaXNPbmxpbmUgPyBcImFjdGl2ZS1ub3dcIiA6ICcnKSArIFwiIHRpbWUtb25saW5lXCJ9Pnt0aW1lT25saW5lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUuY29udmVydGF0aW9uXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRJbmZvKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxuXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHsgbWVzc2FnZSwgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpLFxuICAgICAgICBjbGFzc1R5cGVNZXNzYWdlID0gbWVzc2FnZS51c2VyICE9IGF1dGguX2lkID8gJ2Zsb2F0LWxlZnQnIDogJ2Zsb2F0LXJpZ2h0IGJ5LW1lJ1xuICAgICAgICBpZiAoIWNvbnZBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1tZXNzYWdlLWNoYXRcIiA+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NUeXBlTWVzc2FnZSArIFwiIGNoYXQtZ3JvdXBcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udkFjdGl2ZS5hdmF0YXJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lc3NhZ2Uuc3R5bGUgKyBcIiB0ZXh0XCJ9ID57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvbixcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVzc2FnZSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5cbmltcG9ydCBMZWZ0SW5mb3JBdXRoIGZyb20gXCIuL0xlZnRJbmZvckF1dGguanN4XCJcbmltcG9ydCB7IHNldHRlckF1dGggfSBmcm9tIFwiLi4vYWN0aW9uXCJcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBhbGVydCA6IGZhbHNlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9XG4gICAgfVxuICAgIFxuICAgIGludmFsaWRMb2dpbkNoYXQgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZighdGhpcy5uYW1lLnZhbHVlKXtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yRmllbGQ6ICdlbWFpbCcsIG1lc3NhZ2U6IFwibmFtZSBideG7mWMgcGjhuqNpIG5o4bqtcFwiIH1cbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5lbWFpbC52YWx1ZSl7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvckZpZWxkOiAnZW1haWwnLCBtZXNzYWdlOiBcImVtYWlsIGJ14buZYyBwaOG6o2kgbmjhuq1wXCIgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLm1vYmlsZS52YWx1ZSl7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvckZpZWxkOiAnZW1haWwnLCBtZXNzYWdlOiBcIm1vYmlsZSBideG7mWMgcGjhuqNpIG5o4bqtcFwiIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBMb2dpbkNoYXQgPSBlID0+IHtcbiAgICAgICAgdmFyIGVtYWlsICA9IHRoaXMuZW1haWwudmFsdWUsXG4gICAgICAgICAgICBuYW1lICAgPSB0aGlzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICBtb2JpbGUgPSB0aGlzLm1vYmlsZS52YWx1ZSxcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHRoaXMuaW52YWxpZExvZ2luQ2hhdCgpXG4gICAgICAgIGlmKCB2YWxpZGF0b3IgKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IHZhbGlkYXRvci5tZXNzYWdlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGVydCA6IGZhbHNlICwgcHJvZ3Jlc3MgOiB0cnVlfSwgKCk9PntcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvcmVnaXN0ZXItY2hhdFwiXG4gICAgICAgICAgICBmZXRjaChhY3Rpb24sIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgLCBuYW1lICwgbW9iaWxlIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IGZhbHNlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKHsgLi4uIHJlc3BvbnNlLmRhdGEgfSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IGVycm9yLm1lc3NhZ2UgLCBwcm9ncmVzcyA6IGZhbHNlIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKCB0aGlzLnByb3BzLmF1dGggKXtcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvY2hhdC9jb25zdWx0aW5nLXdlYi1kZXNpZ25cIiAvPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgIDxMZWZ0SW5mb3JBdXRoIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9fcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmFsZXJ0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+eyB0aGlzLnN0YXRlLmFsZXJ0IH08L2Rpdj4gfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4g44GC44Gq44Gf44Gu44OV44Or44ON44O844OgIDxpPuKctTwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5uYW1lID0gaW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4g44Oh44O844Or44Ki44OJ44Os44K5IDxpPuKctTwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcmVmPXsoaW5wdXQpID0+IHRoaXMuZW1haWwgPSBpbnB1dH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IOmbu+ipseeVquWPtyA8aT7inLU8L2k+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibW9iaWxlXCIgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5tb2JpbGUgPSBpbnB1dH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2VuZC1tYWlsLWNvbnRhY3RcIiBvbkNsaWNrPXsgdGhpcy5Mb2dpbkNoYXQgfT4g44Oh44O844Or566h55CG6ICF44Gr6YCB5L+hPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvZ3Jlc3MgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHByb2dyZXNzLXN1Y2Nlc3NcIj48ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWxvYWRkaW5nXCI+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoICA6IHN0YXRlLmF1dGgsXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJlZ2lzdGVyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCBTaWRlYmFyTHN0Q29udmVydGF0aW9uIGZyb20gXCIuL1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4XCJcblxuY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAvLy8vc2V0IGhlaWdodCBjb21wb25lbnRcbiAgICAgICAgdmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNpZGViYXItY2hhdFwiKSxcbiAgICAgICAgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtbHN0LW1lc3NhZ2VzXCIpXG4gICAgICAgIGlmKHNpZGViYXIgJiYgbWVzc2FnZSl7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmhlaWdodCA9IG1lc3NhZ2UuY2xpZW50SGVpZ2h0ICsgXCJweFwiXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgc2lkZWJhclwiKVxuICAgICAgICB2YXIgeyBhdXRoIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGF1dGguYXZhdGFyID0gJ2h0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC91cGxvYWRzL2F2YXRhci5qcGcnXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1zaWRlYmFyLWNoYXRcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtc2lkZWJhci1jaGF0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXV0aC5hdmF0YXJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57YXV0aC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJMc3RDb252ZXJ0YXRpb24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoOiBzdGF0ZS5hdXRoLFxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlYmFyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCBDb252ZXJ0YXRpb24gZnJvbSBcIi4vQ29udmVydGF0aW9uLmpzeFwiXG5cbmNsYXNzIFNpZGViYXJMc3RDb252ZXJ0YXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBjb252ZXJ0YXRpb25cIilcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC11c2VyXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0YXRpb25zICYmIGNvbnZlcnRhdGlvbnMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydGF0aW9uID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnZlcnRhdGlvbiBrZXk9e2NvbnZlcnRhdGlvbi5faWR9IGNvbnY9e2NvbnZlcnRhdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlYmFyTHN0Q29udmVydGF0aW9uKVxuIiwiLyogcG9seWZpbGxzLmpzICovXG4vLyBpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuLy8gaW1wb3J0ICdyZWFjdC1hcHAtcG9seWZpbGwvaWUxMSdcbmltcG9ydCAnY29yZS1qcydcbi8vL2ZvciBpZTkgXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XG4vKiogSUU5LCBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIGFsbCBvZiB0aGUgZm9sbG93aW5nIHBvbHlmaWxscy4gKiovXG5pbXBvcnQgJ2NvcmUtanMvZXMvc3ltYm9sJztcbmltcG9ydCAnY29yZS1qcy9lcy9vYmplY3QnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL2Z1bmN0aW9uJztcbmltcG9ydCAnY29yZS1qcy9lcy9wYXJzZS1pbnQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL3BhcnNlLWZsb2F0JztcbmltcG9ydCAnY29yZS1qcy9lcy9udW1iZXInO1xuaW1wb3J0ICdjb3JlLWpzL2VzL21hdGgnO1xuaW1wb3J0ICdjb3JlLWpzL2VzL3N0cmluZyc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvZGF0ZSc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvYXJyYXknO1xuaW1wb3J0ICdjb3JlLWpzL2VzL3JlZ2V4cCc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvbWFwJztcbmltcG9ydCAnY29yZS1qcy9lcy93ZWFrLW1hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZXMvc2V0JztcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XG5cbmltcG9ydCAncmFmL3BvbHlmaWxsJztcbi8vLyBmb3Igd2VicGFjayBpbXBvcnRcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuXG5pbXBvcnQgJy4vLi4vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcydcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShSZWR1Y2VyKTtcbnN0b3JlLnN1YnNjcmliZShmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKCdjw7MgdGhheSDEkeG7lWkgdHJvbmcgUmVkdXghIScpXG4gICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XG59KTtcblxuLy8vIG15IGNvbXBvbmVudFxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudC9BcHAuanN4J1xuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUk9PVFwiKTtcblxuaWYgKHR5cGVvZiAoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnICYmIHdyYXBwZXIpIHtcbiAgICBcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICwgd3JhcHBlcilcbn1lbHNle1xuICAgIGFsZXJ0KFwi44GT44Gu44OW44Op44Km44K244Gn44Gv44CB44Ki44OX44Oq44Kx44O844K344On44Oz44Gv5q2j5bi444Gr5YuV5L2c44GX44G+44Gb44KT44CCIOOCouODg+ODl+OCsOODrOODvOODieOBl+OBpuOBj+OBoOOBleOBhFwiKVxufVxuXG4iLCJpbXBvcnQgeyBzb2NrZXRMaXN0ZW5uZXIgfSBmcm9tIFwiLi9zb2NrZXRfbGlzdGVubmVyXCJcbmltcG9ydCB7IHNldHRlclNvY2tldCwgc2V0dGVyQ29udmVydGF0aW9uLCBzZXR0ZXJNZXNzYWdlLCBzZXR0ZXJBdXRoLCBjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24gfSBmcm9tIFwiLi4vYWN0aW9uXCJcbmltcG9ydCB7IGFkZE1lc3NhZ2UgfSBmcm9tIFwiLi4vYWN0aW9uXCJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXG5cbmNvbnN0IENPTkZJRyA9IENPTkZJR19BUFAsXG5FVkVOVCA9IENPTkZJR19FVkVOVFxudmFyIHNvY2tldCA9IG51bGxcblxuXG5leHBvcnQgZnVuY3Rpb24gc29ja2V0SW5pdGlhbENvbm5lY3Qoc29ja2V0SU9DbGllbnQsIGluc3RhbmNlQXBwKSB7XG4gICAgY29uc29sZS5sb2coQ09ORklHLnVybF9yZWFsdGltZSlcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChDT05GSUcudXJsX3JlYWx0aW1lKVxuICAgIHZhciBBcHBsaWNhdGlvbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIilcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LnJlbW92ZShcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXG4gICAgICAgIC8vLy8gc2V0IGNvbmZpZ1xuICAgICAgICBzb2NrZXRMaXN0ZW5uZXIoc29ja2V0LCBpbnN0YW5jZUFwcClcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goc2V0dGVyU29ja2V0KHNvY2tldCkpXG4gICAgICAgIC8vLyBqb2luUm9vbUluaXRcbiAgICAgICAgam9pblJvb21Jbml0KGluc3RhbmNlQXBwLnByb3BzLmF1dGgpXG4gICAgfSk7XG4gICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQobnVsbCkpXG4gICAgICAgIEFwcGxpY2F0aW9uRG9tICYmIEFwcGxpY2F0aW9uRG9tLmNsYXNzTGlzdC5hZGQoXCJjb25uZWN0LXNvY2tldC1lcnJvclwiKVxuICAgIH0pO1xuICAgIHNvY2tldC5vbignY29ubmVjdF9lcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2luUm9vbUluaXQoYXV0aCl7XG5cbiAgICBzb2NrZXQuZW1pdChFVkVOVC5KT0lOX0NIQU5ORUwsIGF1dGgpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQVBJQ2hhbm5lbHMoIG9wdGlvbiwgY29tcG9uZW50ICl7XG5cbiAgICB2YXIgeyBtYXRjaCB9ID0gY29tcG9uZW50LnByb3BzLFxuICAgIHNsdWcgPSBudWxsLCBcbiAgICBjb252ZXJ0YXRpb25JZEFjdGl2ZSA9IG51bGxcbiAgICBpZiggbWF0Y2ggKXtcbiAgICAgICAgc2x1ZyA9IG1hdGNoLnBhcmFtcy5zbHVnXG4gICAgfVxuXG4gICAgdmFyIGFjdGlvbiA9IGNvbXBvbmVudC5wcm9wcy5jb25maWcudXJsX3JlYWx0aW1lICsgXCIvYXBpL2NoYW5uZWxzP1wiXG4gICAgaWYoIG9wdGlvbi5faWQgKXtcbiAgICAgICAgYWN0aW9uICs9IFwiJmlkPVwiICsgb3B0aW9uLl9pZFxuICAgIH1cbiAgICBpZiggb3B0aW9uLmVtYWlsICl7XG4gICAgICAgIGFjdGlvbiArPSBcIiZlbWFpbD1cIiArIG9wdGlvbi5lbWFpbFxuICAgIH1cbiAgICBpZiggb3B0aW9uLm1vYmlsZSApe1xuICAgICAgICBhY3Rpb24gKz0gXCImbW9iaWxlPVwiICsgb3B0aW9uLm1vYmlsZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgZmV0Y2goYWN0aW9uLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwID0+IHsgXG4gICAgICAgIFxuICAgICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKSBcbiAgICB9KVxuICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xuICAgICAgICAgICAgdmFyIGNvbnZlcnRhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgIG1lc3NhZ2VzID0gW11cblxuICAgICAgICAgICAgaWYoIHJlc3BvbnNlLmRhdGEuY2hhbm5lbHMgKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmNoYW5uZWxzLm1hcChjb252ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb252ZXJ0YXRpb24gPSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29udi51c2VyWzBdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGNvbXBvbmVudC5wcm9wcy5hdXRoLl9pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGNvbnYuX2lkIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKCBzbHVnICYmIGNvbnZlcnRhdGlvbi5zbHVnID09IHNsdWcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydGF0aW9uSWRBY3RpdmUgPSBjb252ZXJ0YXRpb24uX2lkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBjb252Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfZGF0YTogY29udi5tZXNzYWdlIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udmVydGF0aW9ucy5wdXNoKGNvbnZlcnRhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlckNvbnZlcnRhdGlvbiggY29udmVydGF0aW9ucyApKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJNZXNzYWdlKCBtZXNzYWdlcyApKVxuICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbklkQWN0aXZlICYmIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24oY29udmVydGF0aW9uSWRBY3RpdmUpKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCBjb21wb25lbnQgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIHJlc3BvbnNlLmRhdGEudG9rZW4gKXtcbiAgICAgICAgICAgICAgICB2YXIgYXV0aCA9IGNvbXBvbmVudC5wcm9wcy5hdXRoXG4gICAgICAgICAgICAgICAgYXV0aC50b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucHJvcHMuZGlzcGF0Y2goc2V0dGVyQXV0aCggYXV0aCApKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coIGVycm9yIClcbiAgICB9KVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmQoIG1lc3NhZ2UgKXtcbiAgICB2YXIgeyBtZXNzYWdlLCBzdHlsZSwgdG9rZW4sIHVzZXIsIGNoYW5uZWxfaWQsIGNvbXBvbmVudCB9ID0gbWVzc2FnZVxuICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoLyhcXG5cXHMqP1xcbilcXHMqXFxuLywgJyQxJylcbiAgICBcbiAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX01FU1NBR0UsIHsgbWVzc2FnZSwgc3R5bGUsIHRva2VuLCB1c2VyLCBjaGFubmVsX2lkIH0pXG4gICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKFxuICAgICAgICBhZGRNZXNzYWdlKFxuICAgICAgICAgICAgeyBfaWQ6IGNoYW5uZWxfaWQsIG1lc3NhZ2VfZGF0YTp7dHlwZTogdHJ1ZSwgcmVhZDogdHJ1ZSwgY29udGVudDogbWVzc2FnZSwgc3R5bGUsIHRva2VuLCB1c2VyfX1cbiAgICAgICAgKVxuICAgIClcbn0iLCJ2YXIgRVZFTlQgPSBDT05GSUdfRVZFTlRcbmltcG9ydCB7IGFkZE1lc3NhZ2UgfSBmcm9tIFwiLi4vYWN0aW9uXCJcbmV4cG9ydCBmdW5jdGlvbiBzb2NrZXRMaXN0ZW5uZXIoIHNvY2tldCwgaW5zdGFuY2VBcHAgKXtcblxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBtZXNzYWdlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCLEkcOjIHbDoG8gXCIgKyBFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBtZXNzYWdlKVxuICAgICAgICBcbiAgICAgICAgdmFyIGF1dGggPSBpbnN0YW5jZUFwcC5wcm9wcy5hdXRoXG4gICAgICAgIGlmKCBtZXNzYWdlLnRva2VuICE9IGF1dGgudG9rZW4gKXtcbiAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZV9kYXRhLl9pZCA9IGF1dGguX2lkXG4gICAgICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaCggYWRkTWVzc2FnZSggbWVzc2FnZSApKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbn0iLCJ2YXIgYXV0aCA9IG51bGxcbmlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSlcbn1cblxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBhdXRoLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRS5BVVRILlNFVFRFUjpcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKVxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsIlxuaWYgKHR5cGVvZiBDT05GSUdfQVBQID09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgQ09ORklHX0FQUCA9IG51bGxcbn1cblxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBDT05GSUdfQVBQLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRS5DT05GSUcuU0VUVEVSX0NPTkZJRzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY2FzZSBUWVBFLkNPTlZFUlRBVElPTi5TRVRURVI6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXG4gICAgICAgIGNhc2UgVFlQRS5DT05WRVJUQVRJT04uQ0hBTkdFOiBcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uX2lkID09PSBhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IHRydWUgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IGZhbHNlIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG4vLy90aMOqbSBjw6FjIHJlZHVjZXIgZnVudGlvbiBj4bqnbiDEkcaw4bujYyBjb21iaW5lIHbDoG8gxJHDonlcbmltcG9ydCBTb2NrZXRSZWR1Y2VyIGZyb20gXCIuL3NvY2tldC5qc1wiXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi9hdXRoLmpzXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vY29uZmlnLmpzXCJcbmltcG9ydCBDb252ZXJ0YXRpb24gZnJvbSBcIi4vY29udmVydGF0aW9uLmpzXCJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL21lc3NhZ2UuanNcIlxuLy8vLyBraOG7n2kgdOG6oW8gMSBiaeG6v24gYmnhu4N1IGRp4buFbiBSRURVQ0VSIEFMTCBcbmNvbnN0IFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIFxuICAgIHNvY2tldCAgICAgIDogU29ja2V0UmVkdWNlcixcbiAgICBhdXRoICAgICAgICA6IEF1dGgsXG4gICAgY29uZmlnICAgICAgOiBDb25maWcsXG4gICAgY29udmVydGF0aW9uOiBDb252ZXJ0YXRpb24sXG4gICAgbWVzc2FnZSAgICAgOiBNZXNzYWdlXG59KTtcbmV4cG9ydCBkZWZhdWx0IFJlZHVjZXI7IiwiXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxuXG52YXIgbWVzc2FnZXMgPSBbXVxuaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgRGF0YVN0cmluZ01lc3NhZ2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21lc3NhZ2VzJylcbiAgICBpZiggRGF0YVN0cmluZ01lc3NhZ2VzICl7XG4gICAgICAgIFxuICAgICAgICBtZXNzYWdlcyA9IEpTT04ucGFyc2UoRGF0YVN0cmluZ01lc3NhZ2VzKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbWVzc2FnZXMsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgVFlQRS5NRVNTQUdFLlNFVFRFUjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBcbiAgICAgICAgY2FzZSBUWVBFLk1FU1NBR0UuQUREX01FU1NBR0U6XG4gICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBzdGF0ZS5tYXAoIG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UuX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ubWVzc2FnZSwgbWVzc2FnZV9kYXRhOiBbIC4uLm1lc3NhZ2UubWVzc2FnZV9kYXRhLCBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlX2RhdGFdIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZXNcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vYWN0aW9uL3R5cGUuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ja2V0UmVkdWNlcihzdGF0ZSA9IG51bGwgLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRS5TT0NDS0VULlNFVFRFUjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9