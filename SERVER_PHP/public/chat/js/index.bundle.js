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
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Regular\";\n  src: url(\"/font/KozGoPro/KozGoPro-Regular.otf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Bold\";\n  src: url(\"/font/KozGoPro/KozGoPro-Bold.otf\");\n}\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.AppComponent {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 15px;\n}\n\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.component-sidebar-chat {\n  float: left;\n  width: 30%;\n  box-sizing: border-box;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: 50%;\n  border: 2px double #9175ca;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 60px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 10px;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.component-list-message .wrapper-list-message {\n  padding: 15px;\n  height: 400px;\n  overflow-y: scroll;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 60px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}\n.component-user-chat-sidebar {\n  position: relative;\n}\n.component-user-chat-sidebar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  bottom: 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.component-user-chat-sidebar .user-chat {\n  position: relative;\n  padding: 15px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #c7c6c6;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 10px;\n  color: #28a745;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  background: -moz-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -webkit-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -o-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -ms-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n}\n.component-message-chat .chat-group .avatar {\n  max-width: 40px;\n  max-height: 40px;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content {\n  padding-left: 50px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  background: transparent !important;\n  font-size: 40px;\n  padding: 0 2px;\n  line-height: 1;\n}\n.component-message-chat .chat-group .message-content .text {\n  padding: 10px;\n  border-radius: 15px;\n  white-space: pre;\n  word-break: break-all;\n  background: -moz-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -webkit-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -o-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -ms-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}\n\n.component-list-emoji {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  padding: 10px;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  background-color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.component-list-emoji.first-show {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-list-emoji.show {\n  visibility: unset;\n  height: unset;\n  bottom: 100%;\n  left: 20px;\n  right: 20px;\n  opacity: 1;\n}\n\n.component-emoji {\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  color: #0d47a1;\n}\n\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-bottom-color: transparent;\n  border-left: none;\n  position: relative;\n  padding: 5px 80px 0 50px;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #e9ecef;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n  -ms-overflow-style: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 10px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: inline-block;\n  z-index: 1;\n  right: 45px;\n}\n.component-input-send-chat .hero-icon.react {\n  z-index: 1;\n  display: inline-block;\n  right: 10px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"\\F0157\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}\n\n.component-register {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  padding: 5px;\n}\n.component-register:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-register .left__register {\n  float: left;\n  width: 40%;\n  padding: 10px;\n}\n.component-register .right__register {\n  float: right;\n  width: 60%;\n  padding: 10px;\n}\n.component-register .conpany {\n  line-height: 1;\n  font-size: 18px;\n}\n.component-register .register-address {\n  background: #f2f2f2 none repeat scroll 0 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  display: block;\n  margin: 10px 0;\n  padding: 10px 10px;\n  position: relative;\n}\n.component-register .register-address h6 {\n  font-weight: 100;\n  font-size: 15px;\n}\n.component-register .intro-chat-register {\n  font-size: 18px;\n  color: #f44336;\n}\n.component-register .form-input {\n  padding-top: 10px;\n}\n.component-register .form-input label {\n  font-size: 15px;\n  color: #212529;\n  display: block;\n  padding-bottom: 10px;\n}\n.component-register .form-input input {\n  display: block;\n  width: 100%;\n  padding: 8px 15px;\n  font-size: 16px;\n  border-radius: 0;\n  border: 1px solid #6c757d;\n  outline: none;\n}\n.component-register .form-input input:focus {\n  color: #0d47a1;\n  border: 1px solid #0d47a1;\n}\n.component-register .form-input i {\n  font-style: normal;\n  color: #dc3545;\n}\n.component-register .btn-send-mail-contact {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 2px solid #3f51b5;\n}\n.component-register .btn-send-mail-contact:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #3f51b5;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.component-register .btn-send-mail-contact:focus, .component-register .btn-send-mail-contact.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.component-register .btn-send-mail-contact:disabled, .component-register .btn-send-mail-contact.disabled, fieldset:disabled .component-register .btn-send-mail-contact {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-box-outline::before {\n  content: \"\\F0007\";\n}\ni.hero-icon.hero-account-edit-outline::before {\n  content: \"\\F0FFB\";\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-calendar::before {\n  content: \"\\F00ED\";\n}\ni.hero-icon.hero-calendar-month-outline::before {\n  content: \"\\F0E18\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-clock-check-outline::before {\n  content: \"\\F0FA9\";\n}\ni.hero-icon.hero-close::before {\n  content: \"\\F0156\";\n}\ni.hero-icon.hero-close-box-outline::before {\n  content: \"\\F0158\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-delete-variant::before {\n  content: \"\\F01B3\";\n}\ni.hero-icon.hero-email-check-outline::before {\n  content: \"\\F0AB2\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-eye-outline::before {\n  content: \"\\F06D0\";\n}\ni.hero-icon.hero-file-document-edit-outline::before {\n  content: \"\\F0DC9\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-import-outline::before {\n  content: \"\\F0F9C\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-layers-search-outline::before {\n  content: \"\\F1207\";\n}\ni.hero-icon.hero-lock-outline::before {\n  content: \"\\F0341\";\n}\ni.hero-icon.hero-magnify-scan::before {\n  content: \"\\F1276\";\n}\ni.hero-icon.hero-menu-down::before {\n  content: \"\\F035D\";\n}\ni.hero-icon.hero-menu-down-outline::before {\n  content: \"\\F06B6\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-monitor-dashboard::before {\n  content: \"\\F0A07\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-scatter-plot-outline::before {\n  content: \"\\F0ECA\";\n}\ni.hero-icon.hero-segment::before {\n  content: \"\\F0ECB\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-snowflake-variant::before {\n  content: \"\\F0F2A\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-table-star::before {\n  content: \"\\F13CB\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-tag::before {\n  content: \"\\F04F9\";\n}\ni.hero-icon.hero-tag-heart::before {\n  content: \"\\F068B\";\n}\ni.hero-icon.hero-tag-heart-outline::before {\n  content: \"\\F0BCF\";\n}\ni.hero-icon.hero-tag-multiple-outline::before {\n  content: \"\\F12F7\";\n}\ni.hero-icon.hero-tag-text-outline::before {\n  content: \"\\F04FD\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-theme-light-dark::before {\n  content: \"\\F050E\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}", ""]);

// exports


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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("componentDidUpdate");
    }
  }, {
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

  function InputSend() {
    var _this;

    _classCallCheck(this, InputSend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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

    _defineProperty(_assertThisInitialized(_this), "listenKeyDown", function (event) {
      var input = document.getElementById("js-input-chat");
      if (!input) return false; /// space character replace emoji

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

    _defineProperty(_assertThisInitialized(_this), "listenKeyUp", function (event) {
      var input = document.getElementById("js-input-chat");
      if (!input) return false;

      if (event.keyCode == 13 && !event.shiftKey) {
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
      }
    });

    _defineProperty(_assertThisInitialized(_this), "btnSendMessage", function () {
      var input = document.getElementById("js-input-chat");
      if (!input) return false;
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
      return false;
    });

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
        onKeyDown: this.listenKeyDown,
        onKeyUp: this.listenKeyUp,
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

      if (domScroll) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(domScroll).on('scroll', function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).innerHeight() >= jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].scrollHeight) {
            document.getElementById("js-is-write-message").classList.add("follow-conversation");
          } else {
            document.getElementById("js-is-write-message").classList.remove("follow-conversation");
          }
        });
      }

      if (domWriter && domScroll && domScroll.scrollHeight == domScroll.clientHeight) {/// read message
      } else if (domScroll && domWriter && domWriter.classList.contains('follow-conversation')) {
        domScroll.scrollTop = domScroll.scrollHeight;
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
          to: "/chat"
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

          var message = {
            _id: conv._id,
            message_data: conv.message || []
          };
          convertations.push(convertation);
          messages.push(message);
        });
        component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterConvertation"])(convertations));
        component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterMessage"])(messages));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JVSUxERVIvU0NTUy9jaGF0LnNjc3M/NWNmMSIsIndlYnBhY2s6Ly8vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NvbnZlcnRhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FbW9qaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9JbnB1dFNlbmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGVmdEluZm9yQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9MaXN0RW1vamkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdE1lc3NhZ2VIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9SZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9TaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5L3NvY2tldF9saXN0ZW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvY29udmVydGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvc29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsic2V0dGVyU29ja2V0Iiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJUWVBFIiwiU09DQ0tFVCIsIlNFVFRFUiIsInBheWxvYWQiLCJzZXR0ZXJBdXRoIiwiYXV0aCIsIkFVVEgiLCJzZXR0ZXJDb252ZXJ0YXRpb24iLCJjb252IiwiQ09OVkVSVEFUSU9OIiwic2V0dGVyTWVzc2FnZSIsIm1lc3MiLCJNRVNTQUdFIiwiY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIiwiaWQiLCJDSEFOR0UiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsIkFERF9NRVNTQUdFIiwiYWRkTWVzc2FnZVNlbmRUb01lIiwiQ0hBTk5FTCIsIkFERF9NRVNTQUdFX1NFTkRfVE9fTUUiLCJDT05GSUciLCJTRVRURVJfQ09ORklHIiwiQXBwIiwicHJvcHMiLCJDaGF0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjbGllbnQiLCJjb25uZWN0IiwiZmV0Y2hBUElDaGFubmVscyIsImNvbmZpZyIsIkNvbnZlcnRhdGlvbiIsImRpc3BhdGNoIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwiaXNBY3RpdmUiLCJjaGFuZ2VBY3RpdmVVc2VyIiwiX2lkIiwiYXZhdGFyIiwibmFtZSIsImNvbnZlcnRhdGlvbnMiLCJjb252ZXJ0YXRpb24iLCJFbW9qaSIsImV2ZW50IiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudCIsInZhbHVlIiwic3ltYm9sIiwiYWRkSWNvbklucHV0Q2hhdCIsIklucHV0U2VuZCIsImVtb2ppcyIsImNsYXNzTGlzdCIsImFkZCIsImNvbnZBY3RpdmUiLCJmaW5kIiwib2JqTWVzcyIsInN0eWxlIiwidG9rZW4iLCJ1c2VyIiwiY2hhbm5lbF9pZCIsImNvbXBvbmVudCIsInNlbmQiLCJrZXlDb2RlIiwid29yZHMiLCJ0cmltIiwic3BsaXQiLCJ3b3JkTGFzdGVzdCIsImxlbmd0aCIsImVtb2ppc0NhbGwiLCJDT05GSUdfRU1PSklTIiwiZmlsdGVyIiwiaXRlbSIsInNpZ24iLCJsYXN0SW5kZXgiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsInNoaWZ0S2V5IiwidGFyZ2V0Iiwid2luZG93Iiwib25jbGljayIsImNvbnRhaW5zIiwicmVtb3ZlIiwic2V0VGltZW91dCIsInNob3dMaXN0RW1vamkiLCJsaXN0ZW5LZXlEb3duIiwibGlzdGVuS2V5VXAiLCJidG5TZW5kTWVzc2FnZSIsImhhbmRsZVNlbmRNZXNzYWdlUmVhY3RTdWJtaXQiLCJMZWZ0SW5mb3JBdXRoIiwiY29tcGFueV9uYW1lIiwidGF4X2NvZGVfZGF0ZSIsImNvbXBhbnlfYWRkcmVzc19zdHJlZXQiLCJjb21wYW55X2FkZHJlc3NfbG9jYWxpdHkiLCJjb21wYW55X2FkZHJlc3NfcmVnaW9uIiwiY29tcGFueV9hZGRyZXNzX2NvdW50cnkiLCJqb2luIiwicGhvbmVfb25lIiwiY29tcGFueV9tYWlsIiwiTGlzdEVtb2ppIiwibWFwIiwiTGlzdE1lc3NhZ2UiLCJkb21TY3JvbGwiLCJkb21Xcml0ZXIiLCIkIiwib24iLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnZlcnRhdGlvbkFjdGl2ZSIsIm1lc3NhZ2VzIiwibWVzc2FnZV9kYXRhIiwiY3JlYXRlZEF0IiwicmVhZCIsImtleSIsIkhlYWRJbmZvIiwidGltZU9ubGluZSIsImlzT25saW5lIiwiTWVzc2FnZSIsImNsYXNzVHlwZU1lc3NhZ2UiLCJSZWdpc3RlciIsImVycm9yRmllbGQiLCJlbWFpbCIsIm1vYmlsZSIsImUiLCJ2YWxpZGF0b3IiLCJpbnZhbGlkTG9naW5DaGF0Iiwic2V0U3RhdGUiLCJhbGVydCIsInByb2dyZXNzIiwiYWN0aW9uIiwidXJsX3JlYWx0aW1lIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhVHlwZSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwIiwib2siLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImVycm9yIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsIkxvZ2luQ2hhdCIsIlNpZGViYXIiLCJzaWRlYmFyIiwiaGVpZ2h0IiwiU2lkZWJhckxzdENvbnZlcnRhdGlvbiIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJSZWR1Y2VyIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJ3cmFwcGVyIiwiU3RvcmFnZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiQ09ORklHX0FQUCIsIkVWRU5UIiwiQ09ORklHX0VWRU5UIiwic29ja2V0SW5pdGlhbENvbm5lY3QiLCJzb2NrZXRJT0NsaWVudCIsImluc3RhbmNlQXBwIiwiQXBwbGljYXRpb25Eb20iLCJzb2NrZXRMaXN0ZW5uZXIiLCJqb2luUm9vbUluaXQiLCJlbWl0IiwiSk9JTl9DSEFOTkVMIiwib3B0aW9uIiwiY2hhbm5lbHMiLCJ1c2VyX2lkIiwicHVzaCIsIlNFTkRfTUVTU0FHRSIsIlJFU1BPTlNFX01FU1NBR0UiLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiY29tYmluZVJlZHVjZXJzIiwiU29ja2V0UmVkdWNlciIsIkF1dGgiLCJDb25maWciLCJEYXRhU3RyaW5nTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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S0gsdURBQUksQ0FBQ1ksT0FBTCxDQUFhTSxXQUFsQjtBQUNJLFlBQUlnRyxRQUFRLEdBQUdyRixLQUFLLENBQUMwRSxHQUFOLENBQVcsVUFBQXRGLE9BQU8sRUFBSTtBQUNqQyxjQUFHQSxPQUFPLENBQUNzQixHQUFSLEtBQWdCK0YsTUFBTSxDQUFDbkksT0FBUCxDQUFlb0MsR0FBbEMsRUFBdUM7QUFDbkMsbURBQVl0QixPQUFaO0FBQXFCa0csMEJBQVksK0JBQU9sRyxPQUFPLENBQUNrRyxZQUFmLElBQTZCbUIsTUFBTSxDQUFDbkksT0FBUCxDQUFlZ0gsWUFBNUM7QUFBakM7QUFDSDs7QUFDRCxpQkFBT2xHLE9BQVA7QUFDSCxTQUxjLENBQWY7QUFNQSxlQUFPaUcsUUFBUDs7QUFDSjtBQUNJLGVBQU9yRixLQUFQO0FBZFI7QUFnQkgsR0FqQmM7QUFBQSxDOzs7Ozs7Ozs7Ozs7QUNaZjtBQUFBO0FBQUE7QUFBQTtBQUNlLFNBQVNnSyxhQUFULEdBQThDO0FBQUEsTUFBdkJoSyxLQUF1Qix1RUFBZixJQUFlO0FBQUEsTUFBUnlHLE1BQVE7O0FBQ3pELFVBQVFBLE1BQU0sQ0FBQ3ZJLElBQWY7QUFDSSxTQUFLQyx1REFBSSxDQUFDQyxPQUFMLENBQWFDLE1BQWxCO0FBQ0ksYUFBT29JLE1BQU0sQ0FBQ25JLE9BQWQ7O0FBQ0o7QUFDSSxhQUFPMEIsS0FBUDtBQUpSO0FBTUgsQzs7Ozs7Ozs7Ozs7QUNSRCxlIiwiZmlsZSI6ImpzL2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0yIS4vY2hhdC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTIhLi9jaGF0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMiEuL2NoYXQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL1NQQS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3pHb1Byby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9Lb3pHb1Byby9Lb3pHb1Byby1SZWd1bGFyLm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS296R29Qcm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvS296R29Qcm8vS296R29Qcm8tQm9sZC5vdGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5BcHBDb21wb25lbnQge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5iZy1jaGF0LXRlbWFsYXRlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi53cmFwcGVyLXBhZ2UtY2hhdCB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ud3JhcHBlci1wYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMzAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5teWluZm8ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbiAgbGVmdDogMXB4O1xcbiAgcmlnaHQ6IDFweDtcXG4gIGJvdHRvbTogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICM5MTc1Y2E7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyLmFjdGl2ZS1vbmxpbmUge1xcbiAgYm9yZGVyOiAycHggZG91YmxlICMwMGM4NTE7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG1heC13aWR0aDogMjdjaDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICB9XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgfVxcblxcbiAgLm15aW5mbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgI0Y1RjVGNTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi50aWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTdweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIHdpZHRoOiA2cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDEpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDIpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDMpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0NTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG4gIDI4JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgNDQlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxuICB9XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNXB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDdweCA3cHggN3B4IDU1cHg7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyAubGFzdC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgfVxcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogN3B4IDdweCA3cHggNTVweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAudGltZS1vbmxpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzI4YTc0NTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lLmFjdGl2ZS1ub3cge1xcbiAgY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5hdmF0YXIge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAubWVzc2FnZS1jb250ZW50IC50ZXh0IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5hdmF0YXIge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuRU1PSkkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHBhZGRpbmc6IDAgMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dC5FTU9KSSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnRleHQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50eXBpbmctdGV4dCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5jb21wb25lbnQtbGlzdC1lbW9qaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICByaWdodDogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5maXJzdC1zaG93IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5zaG93IHtcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcbiAgaGVpZ2h0OiB1bnNldDtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIGxlZnQ6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb21wb25lbnQtZW1vamkge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4IDgwcHggMCA1MHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCA+IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTE7XFxuICBib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBjb2xvcjogIzBkNmVmZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5lbW90aWNvbiB7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLnNlbmQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogMTtcXG4gIHJpZ2h0OiA0NXB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLnJlYWN0IHtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICByaWdodDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2Uge1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTU3XFxcIjtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXIgaW1nIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXI6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIGltZyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5jb21wb25lbnQtcmVnaXN0ZXIge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlcjphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5sZWZ0X19yZWdpc3RlciB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5yaWdodF9fcmVnaXN0ZXIge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmNvbnBhbnkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLnJlZ2lzdGVyLWFkZHJlc3Mge1xcbiAgYmFja2dyb3VuZDogI2YyZjJmMiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLnJlZ2lzdGVyLWFkZHJlc3MgaDYge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuaW50cm8tY2hhdC1yZWdpc3RlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2Y0NDMzNjtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBsYWJlbCB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGlucHV0OmZvY3VzIHtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBpIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGNvbG9yOiAjZGMzNTQ1O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtIDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMC44MXJlbTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW46IDAuMzc1cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGNvbG9yLWxldmVsKCMzZjUxYjUsIC04KTtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdDpmb2N1cywgLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0LmZvY3VzIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0OmRpc2FibGVkLCAuY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3QuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNjU7XFxufVxcblxcbmkuaGVyby1pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5pLmhlcm8taWNvbjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMDdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZGQlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1ncm91cC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEI1OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC10aWUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFpcnBvcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODRCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy11cC1ib2xkLWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDczOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXV0by1maXg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1iYWxsb3QtcmVjb3VudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMzQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FsZW5kYXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEVEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxlbmRhci1tb250aC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUxOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FyZC1hY2NvdW50LW1haWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcnQtcGx1czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMTJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1uZmM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTkwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZXJ0aWZpY2F0ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvY2stY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQTlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb3NlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE1NlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvc2UtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTU4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jcmVhdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NzRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWRlbGV0ZS12YXJpYW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFCM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1haWwtY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtYWlsLWVkaXQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWV5ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZEMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZmlsZS1kb2N1bWVudC1lZGl0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwREM5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtLXNlbGVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MDFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm1hdC1saXN0LXRleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1nb29nbGUtYWRzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGFuZC1va2F5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNTdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhvbWUtaW1wb3J0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjlDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1ob21lLW1hcC1tYXJrZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1odW1hbi1tYWxlLWNoaWxkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM4Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGFwdG9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMyMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGF5ZXJzLXNlYXJjaC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbG9jay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM0MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWFnbmlmeS1zY2FuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI3NlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVudS1kb3duOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM1RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVudS1kb3duLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkI2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLWNvZy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE3MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS10ZXh0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzZBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb25pdG9yLWRhc2hib2FyZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMDdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDAzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcGx1cy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcmVzcG9uc2l2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NUVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNjYXR0ZXItcGxvdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVDQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VnbWVudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQ0JcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbGVjdGlvbi1zZWFyY2g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zbm93Zmxha2UtdmFyaWFudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0YXItYm94LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zdGlja2VyLWVtb2ppOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc4NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFibGUtc3Rhcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQ0JcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhYmxldC1pcGFkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLWhlYXJ0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY4QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLWhlYXJ0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQkNGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWctbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhZy10ZXh0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEZEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10ZWxldmlzaW9uLWNsZWFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTExMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGhlbWUtbGlnaHQtZGFyazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MEVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXVwZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QjBcXFwiO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgVFlQRSBmcm9tIFwiLi90eXBlXCJcclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlclNvY2tldChzb2NrZXQpe1xyXG4gICAgY29uc29sZS5sb2coc29ja2V0ICwgXCIgc2V0IHNvY2tldCBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuU09DQ0tFVC5TRVRURVIsXHJcbiAgICAgICAgcGF5bG9hZCA6IHNvY2tldFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJBdXRoKCBhdXRoICl7XHJcbiAgICBjb25zb2xlLmxvZyhhdXRoICwgXCIgc2V0IGF1dGggXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkFVVEguU0VUVEVSLFxyXG4gICAgICAgIHBheWxvYWQgOiBhdXRoXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckNvbnZlcnRhdGlvbiggY29udiApe1xyXG4gICAgY29uc29sZS5sb2coY29udiAsIFwiIHNldCBjb252IFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DT05WRVJUQVRJT04uU0VUVEVSLFxyXG4gICAgICAgIHBheWxvYWQgOiBjb252XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlck1lc3NhZ2UoIG1lc3MgKXtcclxuICAgIGNvbnNvbGUubG9nKG1lc3MgLCBcIiBzZXQgbWVzcyBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuTUVTU0FHRS5TRVRURVIsXHJcbiAgICAgICAgcGF5bG9hZCA6IG1lc3NcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbiggaWQgKXtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coaWQgLCBcImNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbiBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ09OVkVSVEFUSU9OLkNIQU5HRSxcclxuICAgICAgICBwYXlsb2FkIDogaWRcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZSggbWVzc2FnZSApe1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSAsIFwiIGFkZE1lc3NhZ2UgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLk1FU1NBR0UuQUREX01FU1NBR0UsXHJcbiAgICAgICAgcGF5bG9hZCA6IG1lc3NhZ2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lc3NhZ2VTZW5kVG9NZSggbWVzc2FnZSApe1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSAsIFwiIGFkZE1lc3NhZ2VTZW5kVG9NZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5BRERfTUVTU0FHRV9TRU5EX1RPX01FLFxyXG4gICAgICAgIHBheWxvYWQgOiBtZXNzYWdlXHJcbiAgICB9XHJcbn0iLCJjb25zdCBUWVBFID0gIHtcclxuICBcclxuICBTT0NDS0VUIDoge1xyXG4gICAgU0VUVEVSOiBcIlNPQ0NLRVRfU0VUVEVSXCJcclxuICB9LFxyXG4gIEFVVEg6IHtcclxuICAgIFNFVFRFUjogXCJBVVRIX1NFVFRFUlwiXHJcbiAgfSxcclxuICBDT05WRVJUQVRJT046IHtcclxuICAgIFNFVFRFUjogXCJDT05WRVJUQVRJT05fU0VUVEVSXCIsXHJcbiAgICBDSEFOR0U6IFwiQ09OVkVSVEFUSU9OX0NIQU5HRVwiXHJcbiAgfSxcclxuICBNRVNTQUdFOiB7XHJcbiAgICBTRVRURVI6IFwiTUVTU0FHRV9TRVRURVJcIixcclxuICAgIEFERF9NRVNTQUdFOiBcIk1FU1NBR0VfQUREXCJcclxuICB9LFxyXG4gIENPTkZJRzoge1xyXG4gICAgU0VUVEVSX0NPTkZJRyA6IFwiU0VUVEVSX0NPTkZJR1wiXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRZUEU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcblxyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vUmVnaXN0ZXIuanN4XCJcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0LmpzeCdcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudERpZFVwZGF0ZVwiKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhdyBhcHBcIilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiQXBwbGljYXRpb25cIiBjbGFzc05hbWU9XCJBcHBDb21wb25lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NoYXRcIiByZW5kZXI9eygpID0+IDxDaGF0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jaGF0L3JlZ2lzdGVyXCIgcmVuZGVyPXsoKSA9PiA8UmVnaXN0ZXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvY2hhdC86c2x1ZycgY29tcG9uZW50PXsgQ2hhdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGllbnQgIDogc3RhdGUuY2xpZW50XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCAobWFwU3RhdGVUb1Byb3BzKShBcHApOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG4vLy8gc29jY2tldCBcclxuXHJcbmltcG9ydCB7IGZldGNoQVBJQ2hhbm5lbHMgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuXHJcblxyXG4vLy8vIGRlZmluZVxyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9TaWRlYmFyLmpzeFwiXHJcbmltcG9ydCBMaXN0TWVzc2FnZSBmcm9tIFwiLi9MaXN0TWVzc2FnZS5qc3hcIlxyXG5cclxuY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuXHJcbiAgICAgICAgaWYoIHRoaXMucHJvcHMuYXV0aCApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmV0Y2hBUElDaGFubmVscyh0aGlzLnByb3BzLmF1dGgsIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBpZiggIXRoaXMucHJvcHMuYXV0aCApe1xyXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2NoYXQvcmVnaXN0ZXJcIiAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItcGFnZS1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdE1lc3NhZ2UgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoOiBzdGF0ZS5hdXRoLFxyXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoYXQpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuaW1wb3J0IHsgY2hhbmdlQWN0aXZlQ29udmVydGF0aW9uIH0gZnJvbSBcIi4uL2FjdGlvblwiXHJcblxyXG5jbGFzcyBDb252ZXJ0YXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNoYW5nZUFjdGl2ZVVzZXIgPSAoaWQpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24oaWQpKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgeyBjb252IH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNsYXNzQWN0aXZlTWVzc2FnZSA9IGNvbnYuaXNBY3RpdmUgJiYgJ2FjdGl2ZS1tZXNzYWdlJ1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlQWN0aXZlVXNlcihjb252Ll9pZCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc0FjdGl2ZU1lc3NhZ2UgKyBcIiBhY3RpdmUgdXNlci1jaGF0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb252LmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbnYubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29udmVydGF0aW9uKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNsYXNzIEVtb2ppIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgYWRkSWNvbklucHV0Q2hhdCA9IGV2ZW50ID0+IHtcclxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKVxyXG4gICAgaWYoaW5wdXQpe1xyXG4gICAgICB2YXIgY29udGVudCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAvLy8gYWRkIGljb24gXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ICsgdGhpcy5wcm9wcy5zeW1ib2xcclxuICAgICAgaW5wdXQudmFsdWUgPSBjb250ZW50XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJjb21wb25lbnQtZW1vamlcIiBvbkNsaWNrPXt0aGlzLmFkZEljb25JbnB1dENoYXR9Pnt0aGlzLnByb3BzLnN5bWJvbH08L2k+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFbW9qaSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGlzdEVtb2ppIGZyb20gXCIuL0xpc3RFbW9qaS5qc3hcIjtcclxuaW1wb3J0IHsgc2VuZCB9IGZyb20gXCIuLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuXHJcbmNsYXNzIElucHV0U2VuZCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBvbmVudC1lbW9qaScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbW9qaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWVtb2ppc1wiKVxyXG4gICAgICAgICAgICBpZiAoZW1vamlzKSB7XHJcbiAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW1vamlzLmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctdGVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctdGVtcFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LmFkZChcInNob3dcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0xpc3RFbW9qaSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHZhciBlbW9qaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWVtb2ppc1wiKVxyXG4gICAgICAgIGlmIChlbW9qaXMpIHtcclxuICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5hZGQoXCJzaG93LXRlbXBcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VuZE1lc3NhZ2VSZWFjdFN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgeyBjb252ZXJ0YXRpb25zLCBhdXRoIH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICB2YXIgb2JqTWVzcyA9IHsgXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiIPCfkp0gXCIsIFxyXG4gICAgICAgICAgICBzdHlsZTogXCJFTU9KSVwiLCBcclxuICAgICAgICAgICAgdG9rZW46IHRoaXMucHJvcHMuYXV0aC50b2tlbixcclxuICAgICAgICAgICAgdXNlcjogYXV0aC5faWQsXHJcbiAgICAgICAgICAgIGNoYW5uZWxfaWQ6IGNvbnZBY3RpdmUuX2lkLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZW5kKG9iak1lc3MpXHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuS2V5RG93biA9IGV2ZW50ID0+IHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcclxuICAgICAgICBpZiAoIWlucHV0KSByZXR1cm4gZmFsc2VcclxuICAgICAgICBcclxuICAgICAgICAvLy8gc3BhY2UgY2hhcmFjdGVyIHJlcGxhY2UgZW1vamlcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMikge1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIC8vLyBnZXQgd29yZCBsYXN0XHJcbiAgICAgICAgICAgIHZhciB3b3JkcyA9IGNvbnRlbnQudHJpbSgpLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICB2YXIgd29yZExhc3Rlc3QgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAvLy8vIGNoZWNrIGhhdmUgc3lzYm9sIFxyXG4gICAgICAgICAgICB2YXIgZW1vamlzQ2FsbCA9IENPTkZJR19FTU9KSVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zaWduID09IHdvcmRMYXN0ZXN0KVxyXG4gICAgICAgICAgICBpZihlbW9qaXNDYWxsLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAvLy8gYWRkIGljb24gXHJcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gY29udGVudC50cmltKCkubGFzdEluZGV4T2YoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkgKyBcIiBcIiArIGVtb2ppc0NhbGxbMF0uc3ltYm9sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ZW5LZXlVcCA9IGV2ZW50ID0+IHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcclxuICAgICAgICBpZiAoIWlucHV0KSByZXR1cm4gZmFsc2VcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMsIGF1dGggfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICAgICAgdmFyIG9iak1lc3MgPSB7IFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLnByb3BzLmF1dGgudG9rZW4sXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcclxuICAgICAgICAgICAgICAgIGNoYW5uZWxfaWQ6IGNvbnZBY3RpdmUuX2lkLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZW5kKG9iak1lc3MpXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJydcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnRuU2VuZE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpXHJcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMsIGF1dGggfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgY29udkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb25zID0+IGNvbnZlcnRhdGlvbnMuaXNBY3RpdmUpXHJcblxyXG4gICAgICAgIHZhciBvYmpNZXNzID0geyBcclxuICAgICAgICAgICAgbWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlLCBcclxuICAgICAgICAgICAgc3R5bGU6IFwiXCIsIFxyXG4gICAgICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy5hdXRoLnRva2VuLFxyXG4gICAgICAgICAgICB1c2VyOiBhdXRoLl9pZCxcclxuICAgICAgICAgICAgY2hhbm5lbF9pZDogY29udkFjdGl2ZS5faWQsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbmQob2JqTWVzcylcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICB2YXIgeyBjb252ZXJ0YXRpb25zIH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICBjb252QWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSlcclxuICAgICAgICAgICAgaWYoICFjb252QWN0aXZlICl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWlzLXdyaXRlLW1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IFwiPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zdGlja2VyLWVtb2ppIGVtb3RpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dMaXN0RW1vaml9XHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJqcy1pbnB1dC1jaGF0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyB0aGlzLmxpc3RlbktleURvd24gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMubGlzdGVuS2V5VXB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjg6Hjg4Pjgrvjg7zjgrjjgpLmm7jjgY8uLi5cIlxyXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zZW5kLW91dGxpbmUgc2VuZFwiIG9uQ2xpY2s9e3RoaXMuYnRuU2VuZE1lc3NhZ2V9PjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWhlYXJ0LW11bHRpcGxlLW91dGxpbmUgcmVhY3RcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbmRNZXNzYWdlUmVhY3RTdWJtaXR9PjwvaT5cclxuICAgICAgICAgICAgICAgIDxMaXN0RW1vamkgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoICAgICAgICAgOiBzdGF0ZS5hdXRoLFxyXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvbixcclxuICAgICAgICBzb2NrZXQgICAgICAgOiBzdGF0ZS5zb2NrZXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5wdXRTZW5kKTtcclxuIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNsYXNzIExlZnRJbmZvckF1dGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X19yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnBhbnlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItYWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tYWNjb3VudC1ncm91cC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tdXBkYXRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3RoaXMucHJvcHMuY29uZmlnLnRheF9jb2RlX2RhdGV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8taG9tZS1tYXAtbWFya2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX3N0cmVldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3NfbG9jYWxpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX3JlZ2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3NfY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNlbGxwaG9uZS1uZmNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pel5pys44Gu6Zu76Kmx77yaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCJ0ZWw6XCIgKyB0aGlzLnByb3BzLmNvbmZpZy5waG9uZV9vbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5waG9uZV9vbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2FyZC1hY2NvdW50LW1haWwtb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIm1haWx0bzpcIiArIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbWFpbH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X21haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW50cm8tY2hhdC1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOODgeODo+ODg+ODiOOCkuioreWumuOBmeOCi+OBn+OCgeOBruaDheWgseOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgiDkuIroqJjjga7mg4XloLHjga7kv53orbfjgavliqrjgoHjgabjgYTjgb7jgZlcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMZWZ0SW5mb3JBdXRoKVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBFbW9qaSBmcm9tIFwiLi9FbW9qaS5qc3hcIlxyXG5cclxuY2xhc3MgTGlzdEVtb2ppIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJqcy1lbW9qaXNcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1lbW9qaVwiPlxyXG4gICAgICAgIHsgQ09ORklHX0VNT0pJUy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxFbW9qaSBrZXk9e2l0ZW0uc2lnbn0gc3ltYm9sPXtpdGVtLnN5bWJvbH0gc2lnbj17aXRlbS5zaWdufSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0RW1vamlcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgTGlzdE1lc3NhZ2VIZWFkZXIgZnJvbSBcIi4vTGlzdE1lc3NhZ2VIZWFkZXIuanN4XCJcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZS5qc3hcIlxyXG5pbXBvcnQgSW5wdXRTZW5kIGZyb20gXCIuL0lucHV0U2VuZC5qc3hcIlxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuLy8gaW1wb3J0IE1lc3NhZ2VDaGF0VHlwaW5nIGZyb20gXCIuL01lc3NhZ2VDaGF0VHlwaW5nLmpzeFwiXHJcblxyXG5jbGFzcyBMaXN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cclxuICAgICAgICB2YXIgZG9tU2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1zY3JvbGwtdG8tYm90dG9tXCIpXHJcbiAgICAgICAgdmFyIGRvbVdyaXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaXMtd3JpdGUtbWVzc2FnZVwiKVxyXG4gICAgICAgIGlmKGRvbVNjcm9sbCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKGRvbVNjcm9sbCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpICsgXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5pbm5lckhlaWdodCgpID49ICBcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpWzBdLnNjcm9sbEhlaWdodCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5hZGQoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBkb21Xcml0ZXIgJiYgZG9tU2Nyb2xsICYmIGRvbVNjcm9sbC5zY3JvbGxIZWlnaHQgPT0gZG9tU2Nyb2xsLmNsaWVudEhlaWdodCl7XHJcbiAgICAgICAgICAgIC8vLyByZWFkIG1lc3NhZ2VcclxuICAgICAgICB9ZWxzZSBpZihcclxuICAgICAgICAgICAgZG9tU2Nyb2xsICYmIFxyXG4gICAgICAgICAgICBkb21Xcml0ZXIgJiYgXHJcbiAgICAgICAgICAgIGRvbVdyaXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvbGxvdy1jb252ZXJzYXRpb24nKSl7XHJcbiAgICAgICAgICAgICAgICBkb21TY3JvbGwuc2Nyb2xsVG9wID0gZG9tU2Nyb2xsLnNjcm9sbEhlaWdodFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY29udmVydGF0aW9uQWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSlcclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXVxyXG4gICAgICAgIGlmKCBjb252ZXJ0YXRpb25BY3RpdmUgKXtcclxuICAgICAgICAgICAgbWVzc2FnZXMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzLmZpbmQoIG1lc3MgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzcy5faWQgPT0gY29udmVydGF0aW9uQWN0aXZlLl9pZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiggbWVzc2FnZXMgKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMubWVzc2FnZV9kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoICFtZXNzYWdlcy5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gWyBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiY2jDum5nIHTDtGkgY8OzIHRo4buDIGdpw7pwIGfDrCBjaG8gYuG6oW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBcIjIwMjAtMDctMjlUMDY6NTE6NTQuOTYzWlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogXCJBRE1JTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IFwiQURNSU5cIixcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1sc3QtbWVzc2FnZXNcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdE1lc3NhZ2VIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1saXN0LW1lc3NhZ2VcIiBpZD1cImpzLXNjcm9sbC10by1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMgJiYgbWVzc2FnZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobWVzc2FnZSwga2V5KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJtZXNzYWdlLWNoYXRcIiArIGtleSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TWVzc2FnZUNoYXRUeXBpbmcvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0U2VuZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb24sXHJcbiAgICAgICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlzdE1lc3NhZ2UpXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNsYXNzIEhlYWRJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGzhuqFpIGhlYWQgbGlzdCBtZXNzYWdlXCIpXHJcbiAgICAgICAgdmFyIHsgY29udmVydGF0aW9ucyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjb252ZXJ0YXRpb25BY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9uID0+IGNvbnZlcnRhdGlvbi5pc0FjdGl2ZSlcclxuXHJcbiAgICAgICAgaWYgKCFjb252ZXJ0YXRpb25BY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aW1lT25saW5lID0gJ+OCquODs+ODqeOCpOODsydcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhlYWQtaW5mb1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hY3RpdmUtY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnZlcnRhdGlvbkFjdGl2ZS5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjb252ZXJ0YXRpb25BY3RpdmUubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KGNvbnZlcnRhdGlvbkFjdGl2ZS5pc09ubGluZSA/IFwiYWN0aXZlLW5vd1wiIDogJycpICsgXCIgdGltZS1vbmxpbmVcIn0+e3RpbWVPbmxpbmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZEluZm8pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXHJcblxyXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgbWVzc2FnZSwgY29udmVydGF0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICBjb252QWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSksXHJcbiAgICAgICAgY2xhc3NUeXBlTWVzc2FnZSA9IG1lc3NhZ2UudXNlciAhPSBhdXRoLl9pZCA/ICdmbG9hdC1sZWZ0JyA6ICdmbG9hdC1yaWdodCBieS1tZSdcclxuICAgICAgICBpZiAoIWNvbnZBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbWVzc2FnZS1jaGF0XCIgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1R5cGVNZXNzYWdlICsgXCIgY2hhdC1ncm91cFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udkFjdGl2ZS5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lc3NhZ2Uuc3R5bGUgKyBcIiB0ZXh0XCJ9ID57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb24sXHJcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVzc2FnZSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5cclxuaW1wb3J0IExlZnRJbmZvckF1dGggZnJvbSBcIi4vTGVmdEluZm9yQXV0aC5qc3hcIlxyXG5pbXBvcnQgeyBzZXR0ZXJBdXRoIH0gZnJvbSBcIi4uL2FjdGlvblwiXHJcblxyXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGFsZXJ0IDogZmFsc2UgLCBwcm9ncmVzcyA6IGZhbHNlIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW52YWxpZExvZ2luQ2hhdCA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZighdGhpcy5uYW1lLnZhbHVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3JGaWVsZDogJ2VtYWlsJywgbWVzc2FnZTogXCJuYW1lIGJ14buZYyBwaOG6o2kgbmjhuq1wXCIgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5lbWFpbC52YWx1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yRmllbGQ6ICdlbWFpbCcsIG1lc3NhZ2U6IFwiZW1haWwgYnXhu5ljIHBo4bqjaSBuaOG6rXBcIiB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLm1vYmlsZS52YWx1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yRmllbGQ6ICdlbWFpbCcsIG1lc3NhZ2U6IFwibW9iaWxlIGJ14buZYyBwaOG6o2kgbmjhuq1wXCIgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBMb2dpbkNoYXQgPSBlID0+IHtcclxuICAgICAgICB2YXIgZW1haWwgID0gdGhpcy5lbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgbmFtZSAgID0gdGhpcy5uYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBtb2JpbGUgPSB0aGlzLm1vYmlsZS52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yID0gdGhpcy5pbnZhbGlkTG9naW5DaGF0KClcclxuICAgICAgICBpZiggdmFsaWRhdG9yICl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IHZhbGlkYXRvci5tZXNzYWdlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsZXJ0IDogZmFsc2UgLCBwcm9ncmVzcyA6IHRydWV9LCAoKT0+e1xyXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5wcm9wcy5jb25maWcudXJsX3JlYWx0aW1lICsgXCIvYXBpL3JlZ2lzdGVyLWNoYXRcIlxyXG4gICAgICAgICAgICBmZXRjaChhY3Rpb24sIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCAsIG5hbWUgLCBtb2JpbGUgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3Aub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZSwgc3RhdHVzOiByZXNwLnN0YXR1cywgZXJyb3I6IGRhdGEuZXJyb3JzIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxlcnQgOiBmYWxzZSAsIHByb2dyZXNzIDogZmFsc2UgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldHRlckF1dGgoeyAuLi4gcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0IDogZXJyb3IubWVzc2FnZSAsIHByb2dyZXNzIDogZmFsc2UgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiggdGhpcy5wcm9wcy5hdXRoICl7XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvY2hhdFwiIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGVmdEluZm9yQXV0aCAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9fcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYWxlcnQgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57IHRoaXMuc3RhdGUuYWxlcnQgfTwvZGl2PiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4g44GC44Gq44Gf44Gu44OV44Or44ON44O844OgIDxpPuKctTwvaT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHJlZj17KGlucHV0KSA9PiB0aGlzLm5hbWUgPSBpbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDjg6Hjg7zjg6vjgqLjg4njg6zjgrkgPGk+4py1PC9pPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHJlZj17KGlucHV0KSA9PiB0aGlzLmVtYWlsID0gaW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDpm7voqbHnlarlj7cgPGk+4py1PC9pPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibW9iaWxlXCIgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5tb2JpbGUgPSBpbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlbmQtbWFpbC1jb250YWN0XCIgb25DbGljaz17IHRoaXMuTG9naW5DaGF0IH0+IOODoeODvOODq+euoeeQhuiAheOBq+mAgeS/oTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9ncmVzcyAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyBwcm9ncmVzcy1zdWNjZXNzXCI+PGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1sb2FkZGluZ1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgOiBzdGF0ZS5hdXRoLFxyXG4gICAgICAgIGNvbmZpZzogc3RhdGUuY29uZmlnXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJlZ2lzdGVyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCBTaWRlYmFyTHN0Q29udmVydGF0aW9uIGZyb20gXCIuL1NpZGViYXJMc3RDb252ZXJ0YXRpb24uanN4XCJcclxuXHJcbmNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgLy8vL3NldCBoZWlnaHQgY29tcG9uZW50XHJcbiAgICAgICAgdmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNpZGViYXItY2hhdFwiKSxcclxuICAgICAgICBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1sc3QtbWVzc2FnZXNcIilcclxuICAgICAgICBpZihzaWRlYmFyICYmIG1lc3NhZ2Upe1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmhlaWdodCA9IG1lc3NhZ2UuY2xpZW50SGVpZ2h0ICsgXCJweFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgc2lkZWJhclwiKVxyXG4gICAgICAgIHZhciB7IGF1dGggfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBhdXRoLmF2YXRhciA9ICdodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvdXBsb2Fkcy9hdmF0YXIuanBnJ1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtc2lkZWJhci1jaGF0XCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LXNpZGViYXItY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXV0aC5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2F1dGgubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJMc3RDb252ZXJ0YXRpb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlYmFyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCBDb252ZXJ0YXRpb24gZnJvbSBcIi4vQ29udmVydGF0aW9uLmpzeFwiXHJcblxyXG5jbGFzcyBTaWRlYmFyTHN0Q29udmVydGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgY29udmVydGF0aW9uXCIpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbnMgJiYgY29udmVydGF0aW9ucy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbiA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnZlcnRhdGlvbiBrZXk9e2NvbnZlcnRhdGlvbi5faWR9IGNvbnY9e2NvbnZlcnRhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNpZGViYXJMc3RDb252ZXJ0YXRpb24pXHJcbiIsIi8qIHBvbHlmaWxscy5qcyAqL1xyXG4vLyBpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xyXG4vLyBpbXBvcnQgJ3JlYWN0LWFwcC1wb2x5ZmlsbC9pZTExJ1xyXG5pbXBvcnQgJ2NvcmUtanMnXHJcbi8vL2ZvciBpZTkgXHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG4vKiogSUU5LCBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIGFsbCBvZiB0aGUgZm9sbG93aW5nIHBvbHlmaWxscy4gKiovXHJcbmltcG9ydCAnY29yZS1qcy9lcy9zeW1ib2wnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL2Z1bmN0aW9uJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3BhcnNlLWludCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9udW1iZXInO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvbWF0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvZGF0ZSc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3dlYWstbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3NldCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XHJcblxyXG5pbXBvcnQgJ3JhZi9wb2x5ZmlsbCc7XHJcbi8vLyBmb3Igd2VicGFjayBpbXBvcnRcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmltcG9ydCAnLi8uLi8uLi9CVUlMREVSL1NDU1MvY2hhdC5zY3NzJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShSZWR1Y2VyKTtcclxuc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY8OzIHRoYXkgxJHhu5VpIHRyb25nIFJlZHV4ISEnKVxyXG4gICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbn0pO1xyXG5cclxuLy8vIG15IGNvbXBvbmVudFxyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50L0FwcC5qc3gnXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlJPT1RcIik7XHJcblxyXG5pZiAodHlwZW9mIChTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgd3JhcHBlcikge1xyXG4gICAgXHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgLCB3cmFwcGVyKVxyXG59ZWxzZXtcclxuICAgIGFsZXJ0KFwi44GT44Gu44OW44Op44Km44K244Gn44Gv44CB44Ki44OX44Oq44Kx44O844K344On44Oz44Gv5q2j5bi444Gr5YuV5L2c44GX44G+44Gb44KT44CCIOOCouODg+ODl+OCsOODrOODvOODieOBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBzb2NrZXRMaXN0ZW5uZXIgfSBmcm9tIFwiLi9zb2NrZXRfbGlzdGVubmVyXCJcclxuaW1wb3J0IHsgc2V0dGVyU29ja2V0LCBzZXR0ZXJDb252ZXJ0YXRpb24sIHNldHRlck1lc3NhZ2UsIHNldHRlckF1dGggIH0gZnJvbSBcIi4uL2FjdGlvblwiXHJcbmltcG9ydCB7IGFkZE1lc3NhZ2UgfSBmcm9tIFwiLi4vYWN0aW9uXCJcclxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcclxuXHJcbmNvbnN0IENPTkZJRyA9IENPTkZJR19BUFAsXHJcbkVWRU5UID0gQ09ORklHX0VWRU5UXHJcbnZhciBzb2NrZXQgPSBudWxsXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCBpbnN0YW5jZUFwcCkge1xyXG4gICAgY29uc29sZS5sb2coQ09ORklHLnVybF9yZWFsdGltZSlcclxuICAgIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KENPTkZJRy51cmxfcmVhbHRpbWUpXHJcbiAgICB2YXIgQXBwbGljYXRpb25Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpXHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIEFwcGxpY2F0aW9uRG9tICYmIEFwcGxpY2F0aW9uRG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJjb25uZWN0LXNvY2tldC1lcnJvclwiKVxyXG4gICAgICAgIC8vLy8gc2V0IGNvbmZpZ1xyXG4gICAgICAgIHNvY2tldExpc3Rlbm5lcihzb2NrZXQsIGluc3RhbmNlQXBwKVxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKHNldHRlclNvY2tldChzb2NrZXQpKVxyXG4gICAgICAgIC8vLyBqb2luUm9vbUluaXRcclxuICAgICAgICBqb2luUm9vbUluaXQoaW5zdGFuY2VBcHAucHJvcHMuYXV0aClcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKHNldHRlclNvY2tldChudWxsKSlcclxuICAgICAgICBBcHBsaWNhdGlvbkRvbSAmJiBBcHBsaWNhdGlvbkRvbS5jbGFzc0xpc3QuYWRkKFwiY29ubmVjdC1zb2NrZXQtZXJyb3JcIilcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEFwcGxpY2F0aW9uRG9tICYmIEFwcGxpY2F0aW9uRG9tLmNsYXNzTGlzdC5hZGQoXCJjb25uZWN0LXNvY2tldC1lcnJvclwiKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luUm9vbUluaXQoYXV0aCl7XHJcblxyXG4gICAgc29ja2V0LmVtaXQoRVZFTlQuSk9JTl9DSEFOTkVMLCBhdXRoKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQVBJQ2hhbm5lbHMoIG9wdGlvbiwgY29tcG9uZW50ICl7XHJcbiAgICB2YXIgYWN0aW9uID0gY29tcG9uZW50LnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvY2hhbm5lbHM/XCJcclxuICAgIGlmKCBvcHRpb24uX2lkICl7XHJcbiAgICAgICAgYWN0aW9uICs9IFwiJmlkPVwiICsgb3B0aW9uLl9pZFxyXG4gICAgfVxyXG4gICAgaWYoIG9wdGlvbi5lbWFpbCApe1xyXG4gICAgICAgIGFjdGlvbiArPSBcIiZlbWFpbD1cIiArIG9wdGlvbi5lbWFpbFxyXG4gICAgfVxyXG4gICAgaWYoIG9wdGlvbi5tb2JpbGUgKXtcclxuICAgICAgICBhY3Rpb24gKz0gXCImbW9iaWxlPVwiICsgb3B0aW9uLm1vYmlsZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgZmV0Y2goYWN0aW9uLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcCA9PiB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcmVzcC5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKSBcclxuICAgIH0pXHJcbiAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCByZXNwb25zZS5kYXRhICl7XHJcbiAgICAgICAgICAgIHZhciBjb252ZXJ0YXRpb25zID0gW10sXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzID0gW11cclxuXHJcbiAgICAgICAgICAgIGlmKCByZXNwb25zZS5kYXRhLmNoYW5uZWxzICl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2hhbm5lbHMubWFwKGNvbnYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb252ZXJ0YXRpb24gPSB7IC4uLmNvbnYudXNlclswXSwgdXNlcl9pZDogY29tcG9uZW50LnByb3BzLmF1dGguX2lkLCBfaWQ6IGNvbnYuX2lkIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBjb252Ll9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9kYXRhOiBjb252Lm1lc3NhZ2UgfHwgW11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGF0aW9ucy5wdXNoKGNvbnZlcnRhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlckNvbnZlcnRhdGlvbiggY29udmVydGF0aW9ucyApKVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlck1lc3NhZ2UoIG1lc3NhZ2VzICkpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRJbml0aWFsQ29ubmVjdChzb2NrZXRJT0NsaWVudCwgY29tcG9uZW50IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YS50b2tlbiApe1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1dGggPSBjb21wb25lbnQucHJvcHMuYXV0aFxyXG4gICAgICAgICAgICAgICAgYXV0aC50b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW5cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKCBhdXRoICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyggZXJyb3IgKVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZCggbWVzc2FnZSApe1xyXG4gICAgdmFyIHsgbWVzc2FnZSwgc3R5bGUsIHRva2VuLCB1c2VyLCBjaGFubmVsX2lkLCBjb21wb25lbnQgfSA9IG1lc3NhZ2VcclxuICAgIFxyXG4gICAgc29ja2V0LmVtaXQoRVZFTlQuU0VORF9NRVNTQUdFLCB7IG1lc3NhZ2UsIHN0eWxlLCB0b2tlbiwgdXNlciwgY2hhbm5lbF9pZCB9KVxyXG4gICAgY29tcG9uZW50LnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE1lc3NhZ2UoXHJcbiAgICAgICAgICAgIHsgX2lkOiBjaGFubmVsX2lkLCBtZXNzYWdlX2RhdGE6e3R5cGU6IHRydWUsIHJlYWQ6IHRydWUsIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCB0b2tlbiwgdXNlcn19XHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59IiwidmFyIEVWRU5UID0gQ09ORklHX0VWRU5UXHJcbmltcG9ydCB7IGFkZE1lc3NhZ2UgfSBmcm9tIFwiLi4vYWN0aW9uXCJcclxuZXhwb3J0IGZ1bmN0aW9uIHNvY2tldExpc3Rlbm5lciggc29ja2V0LCBpbnN0YW5jZUFwcCApe1xyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBtZXNzYWdlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIsSRw6MgdsOgbyBcIiArIEVWRU5ULlJFU1BPTlNFX01FU1NBR0UsIG1lc3NhZ2UpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGF1dGggPSBpbnN0YW5jZUFwcC5wcm9wcy5hdXRoXHJcbiAgICAgICAgaWYoIG1lc3NhZ2UudG9rZW4gIT0gYXV0aC50b2tlbiApe1xyXG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VfZGF0YS5faWQgPSBhdXRoLl9pZFxyXG4gICAgICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaCggYWRkTWVzc2FnZSggbWVzc2FnZSApKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxufSIsInZhciBhdXRoID0gbnVsbFxyXG5pZiAodHlwZW9mKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSlcclxufVxyXG5cclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGF1dGgsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVFlQRS5BVVRILlNFVFRFUjpcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpXHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5pZiAodHlwZW9mIENPTkZJR19BUFAgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnN0IENPTkZJR19BUFAgPSBudWxsXHJcbn1cclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBDT05GSUdfQVBQLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuQ09ORklHLlNFVFRFUl9DT05GSUc6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gW10sIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgVFlQRS5DT05WRVJUQVRJT04uU0VUVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFRZUEUuQ09OVkVSVEFUSU9OLkNIQU5HRTogXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5faWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmUgOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGlzQWN0aXZlIDogZmFsc2UgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vLy90aMOqbSBjw6FjIHJlZHVjZXIgZnVudGlvbiBj4bqnbiDEkcaw4bujYyBjb21iaW5lIHbDoG8gxJHDonlcclxuaW1wb3J0IFNvY2tldFJlZHVjZXIgZnJvbSBcIi4vc29ja2V0LmpzXCJcclxuaW1wb3J0IEF1dGggZnJvbSBcIi4vYXV0aC5qc1wiXHJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vY29uZmlnLmpzXCJcclxuaW1wb3J0IENvbnZlcnRhdGlvbiBmcm9tIFwiLi9jb252ZXJ0YXRpb24uanNcIlxyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9tZXNzYWdlLmpzXCJcclxuLy8vLyBraOG7n2kgdOG6oW8gMSBiaeG6v24gYmnhu4N1IGRp4buFbiBSRURVQ0VSIEFMTCBcclxuY29uc3QgUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBcclxuICAgIHNvY2tldCAgICAgIDogU29ja2V0UmVkdWNlcixcclxuICAgIGF1dGggICAgICAgIDogQXV0aCxcclxuICAgIGNvbmZpZyAgICAgIDogQ29uZmlnLFxyXG4gICAgY29udmVydGF0aW9uOiBDb252ZXJ0YXRpb24sXHJcbiAgICBtZXNzYWdlICAgICA6IE1lc3NhZ2VcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlZHVjZXI7IiwiXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXHJcblxyXG52YXIgbWVzc2FnZXMgPSBbXVxyXG5pZiAodHlwZW9mKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgdmFyIERhdGFTdHJpbmdNZXNzYWdlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZXNzYWdlcycpXHJcbiAgICBpZiggRGF0YVN0cmluZ01lc3NhZ2VzICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWVzc2FnZXMgPSBKU09OLnBhcnNlKERhdGFTdHJpbmdNZXNzYWdlcylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbWVzc2FnZXMsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgVFlQRS5NRVNTQUdFLlNFVFRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBUWVBFLk1FU1NBR0UuQUREX01FU1NBR0U6XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHN0YXRlLm1hcCggbWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ubWVzc2FnZSwgbWVzc2FnZV9kYXRhOiBbIC4uLm1lc3NhZ2UubWVzc2FnZV9kYXRhLCBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlX2RhdGFdIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlc1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCBUWVBFIGZyb20gJy4uL2FjdGlvbi90eXBlLmpzJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ja2V0UmVkdWNlcihzdGF0ZSA9IG51bGwgLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuU09DQ0tFVC5TRVRURVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=