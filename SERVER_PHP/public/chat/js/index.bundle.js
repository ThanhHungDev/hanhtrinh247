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
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Regular\";\n  src: url(\"/font/KozGoPro/KozGoPro-Regular.otf\");\n}\n@font-face {\n  font-family: \"KozGoPro-Bold\";\n  src: url(\"/font/KozGoPro/KozGoPro-Bold.otf\");\n}\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.AppComponent {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 15px;\n}\n\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n  background-color: #9175ca;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.component-sidebar-chat {\n  float: left;\n  width: 30%;\n  box-sizing: border-box;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: 50%;\n  border: 2px double #9175ca;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 60px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 10px;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.component-list-message .wrapper-list-message {\n  padding: 15px;\n  height: 400px;\n  overflow-y: scroll;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 60px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}\n.component-user-chat-sidebar {\n  position: relative;\n}\n.component-user-chat-sidebar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  bottom: 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.component-user-chat-sidebar .user-chat {\n  position: relative;\n  padding: 15px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #c7c6c6;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 10px;\n  color: #28a745;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  background: -moz-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -webkit-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -o-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -ms-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n}\n.component-message-chat .chat-group .avatar {\n  max-width: 40px;\n  max-height: 40px;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content {\n  padding-left: 50px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  padding: 10px;\n  background: none !important;\n}\n.component-message-chat .chat-group .message-content .text {\n  padding: 10px;\n  border-radius: 15px;\n  white-space: pre;\n  word-break: break-all;\n  background: -moz-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -webkit-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -o-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -ms-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}\n\n.component-list-emoji {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  padding: 10px;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  background-color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.component-list-emoji.first-show {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-list-emoji.show {\n  visibility: unset;\n  height: unset;\n  bottom: 100%;\n  left: 20px;\n  right: 20px;\n  opacity: 1;\n}\n\n.component-emoji {\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  color: #0d47a1;\n}\n\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  position: relative;\n  padding: 5px 80px 0 50px;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #e9ecef;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n  -ms-overflow-style: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 10px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: inline-block;\n  z-index: 1;\n  right: 45px;\n}\n.component-input-send-chat .hero-icon.react {\n  z-index: 1;\n  display: inline-block;\n  right: 10px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"\\F0157\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}\n\n.component-register {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  padding: 5px;\n}\n.component-register:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-register .left__register {\n  float: left;\n  width: 40%;\n  padding: 10px;\n}\n.component-register .right__register {\n  float: right;\n  width: 60%;\n  padding: 10px;\n}\n.component-register .conpany {\n  line-height: 1;\n  font-size: 18px;\n}\n.component-register .register-address {\n  background: #f2f2f2 none repeat scroll 0 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  display: block;\n  margin: 10px 0;\n  padding: 10px 10px;\n  position: relative;\n}\n.component-register .register-address h6 {\n  font-weight: 100;\n  font-size: 15px;\n}\n.component-register .intro-chat-register {\n  font-size: 18px;\n  color: #f44336;\n}\n.component-register .form-input {\n  padding-top: 10px;\n}\n.component-register .form-input label {\n  font-size: 15px;\n  color: #212529;\n  display: block;\n  padding-bottom: 10px;\n}\n.component-register .form-input input {\n  display: block;\n  width: 100%;\n  padding: 8px 15px;\n  font-size: 16px;\n  border-radius: 0;\n  border: 1px solid #6c757d;\n  outline: none;\n}\n.component-register .form-input input:focus {\n  color: #0d47a1;\n  border: 1px solid #0d47a1;\n}\n.component-register .form-input i {\n  font-style: normal;\n  color: #dc3545;\n}\n.component-register .btn-send-mail-contact {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 2px solid #3f51b5;\n}\n.component-register .btn-send-mail-contact:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#3f51b5, -8);\n  color: #3f51b5;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.component-register .btn-send-mail-contact:focus, .component-register .btn-send-mail-contact.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.component-register .btn-send-mail-contact:disabled, .component-register .btn-send-mail-contact.disabled, fieldset:disabled .component-register .btn-send-mail-contact {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-box-outline::before {\n  content: \"\\F0007\";\n}\ni.hero-icon.hero-account-edit-outline::before {\n  content: \"\\F0FFB\";\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-calendar::before {\n  content: \"\\F00ED\";\n}\ni.hero-icon.hero-calendar-month-outline::before {\n  content: \"\\F0E18\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-clock-check-outline::before {\n  content: \"\\F0FA9\";\n}\ni.hero-icon.hero-close::before {\n  content: \"\\F0156\";\n}\ni.hero-icon.hero-close-box-outline::before {\n  content: \"\\F0158\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-delete-variant::before {\n  content: \"\\F01B3\";\n}\ni.hero-icon.hero-email-check-outline::before {\n  content: \"\\F0AB2\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-eye-outline::before {\n  content: \"\\F06D0\";\n}\ni.hero-icon.hero-file-document-edit-outline::before {\n  content: \"\\F0DC9\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-import-outline::before {\n  content: \"\\F0F9C\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-layers-search-outline::before {\n  content: \"\\F1207\";\n}\ni.hero-icon.hero-lock-outline::before {\n  content: \"\\F0341\";\n}\ni.hero-icon.hero-magnify-scan::before {\n  content: \"\\F1276\";\n}\ni.hero-icon.hero-menu-down::before {\n  content: \"\\F035D\";\n}\ni.hero-icon.hero-menu-down-outline::before {\n  content: \"\\F06B6\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-monitor-dashboard::before {\n  content: \"\\F0A07\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-scatter-plot-outline::before {\n  content: \"\\F0ECA\";\n}\ni.hero-icon.hero-segment::before {\n  content: \"\\F0ECB\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-snowflake-variant::before {\n  content: \"\\F0F2A\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-table-star::before {\n  content: \"\\F13CB\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-tag::before {\n  content: \"\\F04F9\";\n}\ni.hero-icon.hero-tag-heart::before {\n  content: \"\\F068B\";\n}\ni.hero-icon.hero-tag-heart-outline::before {\n  content: \"\\F0BCF\";\n}\ni.hero-icon.hero-tag-multiple-outline::before {\n  content: \"\\F12F7\";\n}\ni.hero-icon.hero-tag-text-outline::before {\n  content: \"\\F04FD\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-theme-light-dark::before {\n  content: \"\\F050E\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}", ""]);

// exports


/***/ }),

/***/ "./src/action/index.js":
/*!*****************************!*\
  !*** ./src/action/index.js ***!
  \*****************************/
/*! exports provided: setterSocket, setterAuth, setterConvertation, setterMessage, changeActiveConvertation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterSocket", function() { return setterSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterAuth", function() { return setterAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterConvertation", function() { return setterConvertation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterMessage", function() { return setterMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeActiveConvertation", function() { return changeActiveConvertation; });
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
    payload: {
      auth: auth
    }
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
    SETTER: "MESSAGE_SETTER"
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
/* harmony import */ var _library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/service */ "./src/library/service.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar.jsx */ "./src/component/Sidebar.jsx");
/* harmony import */ var _ListMessage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListMessage.jsx */ "./src/component/ListMessage.jsx");
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
      Object(_library_service__WEBPACK_IMPORTED_MODULE_3__["socketInitialConnect"])(socket_io_client__WEBPACK_IMPORTED_MODULE_4___default.a, this);
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListMessage_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
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
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/type */ "./src/action/type.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
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
      _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__["changeActiveConvertation"])(id));
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

    _defineProperty(_assertThisInitialized(_this), "submitMessageChat", function (message, style, attachment) {
      console.log({
        message: message,
        style: style,
        attachment: attachment
      });

      if (!message) {
        if (style == "IMAGE") {
          message = style;
        } else {
          return false;
        }
      }

      if (!style) {
        var emojiChat = config.EMOJIS.filter(function (emoji) {
          return emoji.symbol == message.trim();
        });

        if (emojiChat.length) {
          style = "EMOJI";
        }
      }

      console.log(message); /// .replace(/\n/g,'<br />')

      if (this.props.user) {
        /// có 1 vấn đè chưa nghĩ ra cách giải quyết
        /// là nếu token hết hạn thì phải refesh như thế nào để chạy mượt? 
        /// là nếu token hết hạn thì phải refesh như thế nào để chạy mượt? 
        /// là nếu token hết hạn thì phải refesh như thế nào để chạy mượt? 
        /// giải pháp duy nhâts là tạo 1 hàm refesh token trước khi send chat
        /// sau đó chưa dispacth ngay mà send chat đã. rồi dispatch 1 lần
        var user = this.props.user,
            instance = this,
            dataRefesh = false;
        var diff = (new Date().getTime() - new Date(user.tokens.period).getTime()) / 1000;

        if (diff >= user.tokens.expire) {
          /// fetch new token
          var dataRefesh = {
            userId: user._id,
            refesh: user.tokens.tokenRefesh,
            detect: this.props.client
          };
          console.log(dataRefesh, "refesh token trước khi send chat vì hết hạn");
        }

        var messageSendToChannel = message;
        var channelSend = this.props.userChat.find(function (channel) {
          return channel.isActive == true;
        });
        var channelId = channelSend.id;
        var tokenAccess = user.tokens.tokenAccess;
        var detect = this.props.client;
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_3__["sendMessageToChannel"])(messageSendToChannel, style, attachment, channelId, tokenAccess, detect, instance, dataRefesh);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendEmojiSubmit", function () {
      var message = " 💝 ";
      var style = "EMOJI";

      _this.submitMessageChat(message, style, null);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendMessageSubmit", function () {
      var style = "";
      var urlAttachment = [];
      console.log(" vào click send submit ");
      var message = document.getElementById("js-input-chat").value;

      if (!message) {
        return false;
      }

      document.getElementById("js-input-chat").value = '';
      var imagesDom = document.getElementById("js-image--block");
      var images = imagesDom.getElementsByClassName("remove-image");

      if (images.length) {
        style = "IMAGE";
        urlAttachment = [];

        for (var index_image_send = 0; index_image_send < images.length; index_image_send++) {
          urlAttachment.push(images[index_image_send].getAttribute('data-url'));
        }
      }

      document.getElementById("js-image--block").innerHTML = '';

      _this.submitMessageChat(message, style, urlAttachment);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendMessageDown", function (event) {
      if (event.keyCode == 13 && !event.shiftKey) {
        var style = "";
        var urlAttachment = [];
        var imagesDom = document.getElementById("js-image--block");
        var images = imagesDom.getElementsByClassName("remove-image");

        if (images.length) {
          style = "IMAGE";
          urlAttachment = [];

          for (var index_image_send = 0; index_image_send < images.length; index_image_send++) {
            urlAttachment.push(images[index_image_send].getAttribute('data-url'));
          }
        }

        document.getElementById("js-image--block").innerHTML = '';

        _this.submitMessageChat(event.target.value, style, urlAttachment);

        _this.setState({
          sendChat: true
        });

        document.getElementById("js-input-chat").value = "";
        return false;
      }

      if (event.keyCode == 32) {
        var input = document.getElementById("js-input-chat");

        if (input) {
          var content = input.value; /// get word last

          var words = content.split(" ");
          var wordLastest = words[words.length - 1];
          console.log(wordLastest); //// check have sysbol 

          var emojisCall = config.EMOJIS.filter(function (item) {
            return item.sign == wordLastest;
          });
          console.log(emojisCall);

          if (emojisCall.length) {
            /// add icon 
            var lastIndex = content.lastIndexOf(" ");
            input.value = content.substring(0, lastIndex) + " " + emojisCall[0].symbol;
          }
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

    _defineProperty(_assertThisInitialized(_this), "retrieveImageFromClipboardAsBlob", function (pasteEvent, callback) {
      if (!pasteEvent.clipboardData) {
        if (typeof callback == "function") {
          /// call calback function undefine
          callback(undefined);
        }
      }

      var items = pasteEvent.clipboardData.items;

      if (!items) {
        if (typeof callback == "function") {
          /// call calback function undefine
          callback(undefined);
        }
      }

      for (var i = 0; i < items.length; i++) {
        // Skip content if not image
        if (items[i].type.indexOf("image") == -1) continue; // Retrieve image on clipboard as blob

        var blob = items[i].getAsFile();
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_3__["saveBlobToServer"])(blob); // Create an image

        var img = new Image(); // Once the image loads, render the img on the canvas

        img.onload = function () {
          // Update dimensions of the canvas with the dimensions of the image
          callback(this);
        }; // Crossbrowser support for URL


        var URLObj = window.URL || window.webkitURL; // Creates a DOMString containing a URL representing the object given in the parameter
        // namely the original Blob

        try {
          img.src = URLObj.createObjectURL(blob);
        } catch (error) {
          console.log(error);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showListEmoji", function (event) {
      var emojis = document.getElementById("js-emojis");

      if (emojis) {
        emojis.classList.add("show-temp");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendChatClick", function () {
      //// send class is write message
      document.getElementById("js-is-write-message").classList.add("writing"); ///send typing 

      var user = _this.props.user,
          instance = _assertThisInitialized(_this);

      var channelSend = _this.props.userChat.find(function (channel) {
        return channel.isActive == true;
      });

      var channelId = channelSend.id;
      var tokenAccess = user.tokens.tokenAccess;
      var detect = _this.props.client;
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_3__["sendTypingMessageToChannel"])(channelId, tokenAccess, detect, instance);
    });

    _this.state = {
      sendChat: false
    };
    _this.submitMessageChat = _this.submitMessageChat.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputSend, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sup = this;
      window.addEventListener("paste", function (event) {
        // Handle the event
        sup.retrieveImageFromClipboardAsBlob(event, function (imgLoading) {
          // add it in editor
          imgLoading.width = 100; /// create wrapper img

          var wrapperImage = document.createElement("div");
          wrapperImage.className = "remove-image js-sign-url";

          wrapperImage.onclick = function () {
            this.remove();
          };

          wrapperImage.appendChild(imgLoading);
          document.getElementById("js-image--block").appendChild(wrapperImage);
        });
      }, false);

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-is-write-message",
        className: "component-input-send-chat "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-image--block",
        className: "image-block"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
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
        onClick: this.handleSendMessageSubmit
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-heart-multiple-outline react",
        onClick: this.handleSendEmojiSubmit
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListEmoji_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return InputSend;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.users,
    client: state.client,
    userChat: state.userChat,
    socket: state.socket
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(InputSend));

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
    key: "render",
    value: function render() {
      console.log("render ListMessage");
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

        console.log(messages, "sđsfdsfsd");
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
      var _this = this;

      var _this$props = this.props,
          message = _this$props.message,
          convertations = _this$props.convertations,
          convActive = convertations.find(function (convertations) {
        return convertations.isActive;
      }),
          classTypeMessage = message.sender_id == convActive.userId ? 'float-right by-me' : 'float-left';

      if (!convActive) {
        return null;
      }

      console.log(message, "messagemessagemessagemessage");
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
      }, message.style == "IMAGE" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: message.style
      }, message.attachment.map(function (image, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: "wrapper-attachment" + index + image,
          className: "wrapper-attachment"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _this.props.config.asset + image
        }));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
/* harmony import */ var _library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/service */ "./src/library/service.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
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







var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "LoginChat", function (e) {
      var email = _this.email.value,
          name = _this.name.value,
          mobile = _this.mobile.value,
          detect = JSON.stringify(_this.props.detect);

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
            mobile: mobile,
            detect: detect
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
              var auth = {
                email: email,
                name: name,
                mobile: mobile,
                token: response.data.token.toString(),
                _id: response.data.userId.toString()
              };
              Object(_library_service__WEBPACK_IMPORTED_MODULE_3__["saveAuthLocalStorage"])(auth);
              this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_4__["setterAuth"])(auth));
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
          to: "/chat/hung"
        });
      }

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
      }, "\u30C1\u30E3\u30C3\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306E\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4E0A\u8A18\u306E\u60C5\u5831\u306E\u4FDD\u8B77\u306B\u52AA\u3081\u3066\u3044\u307E\u3059")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    config: state.config,
    detect: state.detect
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
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/service.js */ "./src/library/service.js");
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

      if (this.props.auth) {
        console.log(this.props.auth, "ssdfdsfsd auth ");
        var token = this.props.auth.token;

        if (token) {
          Object(_library_service_js__WEBPACK_IMPORTED_MODULE_3__["fetchAPIChannels"])(token, this);
        }
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
/*! exports provided: saveAuthLocalStorage, socketInitialConnect, fetchAPIChannels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAuthLocalStorage", function() { return saveAuthLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketInitialConnect", function() { return socketInitialConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAPIChannels", function() { return fetchAPIChannels; });
/* harmony import */ var _socketListenner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socketListenner */ "./src/library/socketListenner.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var CONFIG = CONFIG_APP;
var socket = null;
function saveAuthLocalStorage(auth) {
  localStorage.setItem('auth', JSON.stringify(auth));
}
function socketInitialConnect(socketIOClient, instanceApp) {
  socket = socketIOClient(CONFIG.url_realtime);
  var ApplicationDom = document.getElementById("Application");
  socket.on('connect', function () {
    ApplicationDom && ApplicationDom.classList.remove("connect-socket-error"); //// set config

    Object(_socketListenner__WEBPACK_IMPORTED_MODULE_0__["socketListenner"])(socket, instanceApp);
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterSocket"])(socket));
  });
  socket.on('disconnect', function () {
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterSocket"])(null));
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error");
  });
  socket.on('connect_error', function () {
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error");
  });
}
function fetchAPIChannels(token, component) {
  var action = component.props.config.url_realtime + "/api/channels";
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
          var convertation = _objectSpread(_objectSpread({}, conv.user), {}, {
            userId: conv.user._id,
            _id: conv._id
          });

          var message = {
            _id: conv._id,
            message_data: conv.message
          };
          convertations.push(convertation);
          messages.push(message);
        });
        component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterConvertation"])(convertations));
        component.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterMessage"])(messages));
      }
    }
  })["catch"](function (error) {
    console.log(error);
  });
}

/***/ }),

/***/ "./src/library/socketListenner.js":
/*!****************************************!*\
  !*** ./src/library/socketListenner.js ***!
  \****************************************/
/*! exports provided: socketListenner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketListenner", function() { return socketListenner; });
var EVENT = CONFIG_EVENT;
function socketListenner(socket, instanceApp) {
  socket.on(EVENT.RESPONSE_MESSAGE, function (data) {
    console.log("đã vào " + EVENT.RESPONSE_MESSAGE, data);
    var user = data.user,
        message = data.message,
        style = data.style,
        attachment = data.attachment,
        channel = data.channel,
        detect = data.detect;
    var auth = JSON.parse(localStorage.getItem('auth')),
        localDetect = localStorage.getItem('detect');
    if (auth && auth._id == user && localDetect == detect) return false;
    instanceApp.props.dispatch(addMessageSendToMe({
      type: false,
      content: message,
      style: style,
      attachment: attachment,
      channel: channel
    }));
    return false;
  });
  socket.on(EVENT.RESPONSE_TYPING, function (data) {
    console.log("vaof EVENT.RESPONSE_TYPING" + EVENT.RESPONSE_TYPING);
    var user = data.user,
        channel = data.channel;
    var auth = JSON.parse(localStorage.getItem('auth'));

    if (auth && auth._id == user) {
      return false;
    }

    console.log("cos theer show typing ");

    if (timeoutTyping) {
      clearTimeout(timeoutTyping);
    }

    var domTyping = document.getElementById("js-typing");
    if (domTyping.getAttribute("channel") == channel) domTyping.classList.add("show"); /// scroll bottom 

    var inputMessage = document.getElementById("js-is-write-message");

    if (inputMessage.classList.contains("writing")) {
      document.getElementById('js-scroll-to-bottom').scrollTop = document.getElementById('js-scroll-to-bottom').scrollHeight;
    }

    var timeoutTyping = setTimeout(function () {
      var domTyping = document.getElementById("js-typing");
      if (domTyping.getAttribute("channel") == channel) domTyping.classList.remove("show");
    }, 10000);
    return false;
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

/***/ "./src/reducer/detect.js":
/*!*******************************!*\
  !*** ./src/reducer/detect.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetectClientReducer; });
function detectClient() {
  {
    var unknown = 'unknown'; // browser

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix; // Opera

    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
      browser += 'Opera';
      version = nAgt.substring(verOffset + 6);

      if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    } // Opera Next


    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
      browser += 'Opera';
      version = nAgt.substring(verOffset + 4);
    } // Edge
    else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
        browser += 'Microsoft Edge';
        version = nAgt.substring(verOffset + 5);
      } // MSIE
      else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
          browser += 'Microsoft Internet Explorer';
          version = nAgt.substring(verOffset + 5);
        } // CocCoc
        else if ((verOffset = nAgt.indexOf('coc')) != -1) {
            browser += 'CocCoc';
            version = nAgt.substring(verOffset + 8);
          } // Chrome
          else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
              browser += 'Chrome';
              version = nAgt.substring(verOffset + 7);
            } // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser += 'Safari';
                version = nAgt.substring(verOffset + 7);

                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                  version = nAgt.substring(verOffset + 8);
                }
              } // Firefox
              else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                  browser += 'Firefox';
                  version = nAgt.substring(verOffset + 8);
                } // MSIE 11+
                else if (nAgt.indexOf('Trident/') != -1) {
                    browser += 'Microsoft Internet Explorer';
                    version = nAgt.substring(nAgt.indexOf('rv:') + 3);
                  } // Other browsers
                  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                      browser = nAgt.substring(nameOffset, verOffset);
                      version = nAgt.substring(verOffset + 1);

                      if (browser.toLowerCase() == browser.toUpperCase()) {
                        browser = navigator.appName;
                      }
                    } // trim the version string


    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
    majorVersion = parseInt('' + version, 10);

    if (isNaN(majorVersion)) {
      version = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    } // system


    var os = unknown;
    var clientStrings = [{
      s: 'Windows 10',
      r: /(Windows 10.0|Windows NT 10.0)/
    }, {
      s: 'Windows 8.1',
      r: /(Windows 8.1|Windows NT 6.3)/
    }, {
      s: 'Windows 8',
      r: /(Windows 8|Windows NT 6.2)/
    }, {
      s: 'Windows 7',
      r: /(Windows 7|Windows NT 6.1)/
    }, {
      s: 'Windows Vista',
      r: /Windows NT 6.0/
    }, {
      s: 'Windows Server 2003',
      r: /Windows NT 5.2/
    }, {
      s: 'Windows XP',
      r: /(Windows NT 5.1|Windows XP)/
    }, {
      s: 'Windows 2000',
      r: /(Windows NT 5.0|Windows 2000)/
    }, {
      s: 'Windows ME',
      r: /(Win 9x 4.90|Windows ME)/
    }, {
      s: 'Windows 98',
      r: /(Windows 98|Win98)/
    }, {
      s: 'Windows 95',
      r: /(Windows 95|Win95|Windows_95)/
    }, {
      s: 'Windows NT 4.0',
      r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
    }, {
      s: 'Windows CE',
      r: /Windows CE/
    }, {
      s: 'Windows 3.11',
      r: /Win16/
    }, {
      s: 'Android',
      r: /Android/
    }, {
      s: 'Open BSD',
      r: /OpenBSD/
    }, {
      s: 'Sun OS',
      r: /SunOS/
    }, {
      s: 'Linux',
      r: /(Linux|X11)/
    }, {
      s: 'iOS',
      r: /(iPhone|iPad|iPod)/
    }, {
      s: 'Mac OS X',
      r: /Mac OS X/
    }, {
      s: 'Mac OS',
      r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    }, {
      s: 'QNX',
      r: /QNX/
    }, {
      s: 'UNIX',
      r: /UNIX/
    }, {
      s: 'BeOS',
      r: /BeOS/
    }, {
      s: 'OS/2',
      r: /OS\/2/
    }, {
      s: 'Search Bot',
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }];

    for (var id in clientStrings) {
      var cs = clientStrings[id];

      if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
      }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = 'Windows';
    }

    switch (os) {
      case 'Mac OS X':
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'Android':
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'iOS':
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
        break;
    }
  }
  return {
    browser: browser.toString(),
    browserMajorVersion: majorVersion.toString(),
    browserVersion: version.toString(),
    os: os.toString(),
    osVersion: osVersion.toString()
  };
}

if (typeof Storage !== 'undefined') {
  localStorage.setItem('detect', JSON.stringify(detectClient()));
}

function DetectClientReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : detectClient();
  return state;
}

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
/* harmony import */ var _detect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detect.js */ "./src/reducer/detect.js");
/* harmony import */ var _convertation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./convertation.js */ "./src/reducer/convertation.js");
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.js */ "./src/reducer/message.js");
 ///thêm các reducer funtion cần được combine vào đây






 //// khởi tạo 1 biến biểu diễn REDUCER ALL 

var Reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  socket: _socket_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _auth_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  config: _config_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  detect: _detect_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  convertation: _convertation_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  message: _message_js__WEBPACK_IMPORTED_MODULE_6__["default"]
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

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].MESSAGE.SETTER:
      return action.payload;

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JVSUxERVIvU0NTUy9jaGF0LnNjc3M/NWNmMSIsIndlYnBhY2s6Ly8vLi4vQlVJTERFUi9TQ1NTL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NvbnZlcnRhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FbW9qaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9JbnB1dFNlbmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGlzdEVtb2ppLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0xpc3RNZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0xpc3RNZXNzYWdlSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L01lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvU2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9TaWRlYmFyTHN0Q29udmVydGF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnJhcnkvc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zb2NrZXRMaXN0ZW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvY29udmVydGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2RldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL3NvY2tldC5qcyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbInNldHRlclNvY2tldCIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiVFlQRSIsIlNPQ0NLRVQiLCJTRVRURVIiLCJwYXlsb2FkIiwic2V0dGVyQXV0aCIsImF1dGgiLCJBVVRIIiwic2V0dGVyQ29udmVydGF0aW9uIiwiY29udiIsIkNPTlZFUlRBVElPTiIsInNldHRlck1lc3NhZ2UiLCJtZXNzIiwiTUVTU0FHRSIsImNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbiIsImlkIiwiQ0hBTkdFIiwiQ09ORklHIiwiU0VUVEVSX0NPTkZJRyIsIkFwcCIsInByb3BzIiwiQ2hhdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpZW50IiwiY29ubmVjdCIsInNvY2tldEluaXRpYWxDb25uZWN0Iiwic29ja2V0SU9DbGllbnQiLCJDb252ZXJ0YXRpb24iLCJkaXNwYXRjaCIsImNsYXNzQWN0aXZlTWVzc2FnZSIsImlzQWN0aXZlIiwiY2hhbmdlQWN0aXZlVXNlciIsIl9pZCIsImF2YXRhciIsIm5hbWUiLCJjb252ZXJ0YXRpb25zIiwiY29udmVydGF0aW9uIiwiRW1vamkiLCJldmVudCIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJ2YWx1ZSIsInN5bWJvbCIsImFkZEljb25JbnB1dENoYXQiLCJJbnB1dFNlbmQiLCJtZXNzYWdlIiwic3R5bGUiLCJhdHRhY2htZW50IiwiZW1vamlDaGF0IiwiY29uZmlnIiwiRU1PSklTIiwiZmlsdGVyIiwiZW1vamkiLCJ0cmltIiwibGVuZ3RoIiwidXNlciIsImluc3RhbmNlIiwiZGF0YVJlZmVzaCIsImRpZmYiLCJEYXRlIiwiZ2V0VGltZSIsInRva2VucyIsInBlcmlvZCIsImV4cGlyZSIsInVzZXJJZCIsInJlZmVzaCIsInRva2VuUmVmZXNoIiwiZGV0ZWN0IiwibWVzc2FnZVNlbmRUb0NoYW5uZWwiLCJjaGFubmVsU2VuZCIsInVzZXJDaGF0IiwiZmluZCIsImNoYW5uZWwiLCJjaGFubmVsSWQiLCJ0b2tlbkFjY2VzcyIsInNlbmRNZXNzYWdlVG9DaGFubmVsIiwic3VibWl0TWVzc2FnZUNoYXQiLCJ1cmxBdHRhY2htZW50IiwiaW1hZ2VzRG9tIiwiaW1hZ2VzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImluZGV4X2ltYWdlX3NlbmQiLCJwdXNoIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJzZW5kQ2hhdCIsIndvcmRzIiwic3BsaXQiLCJ3b3JkTGFzdGVzdCIsImVtb2ppc0NhbGwiLCJpdGVtIiwic2lnbiIsImxhc3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwicGFzdGVFdmVudCIsImNhbGxiYWNrIiwiY2xpcGJvYXJkRGF0YSIsInVuZGVmaW5lZCIsIml0ZW1zIiwiaSIsImluZGV4T2YiLCJibG9iIiwiZ2V0QXNGaWxlIiwic2F2ZUJsb2JUb1NlcnZlciIsImltZyIsIkltYWdlIiwib25sb2FkIiwiVVJMT2JqIiwid2luZG93IiwiVVJMIiwid2Via2l0VVJMIiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwiZXJyb3IiLCJlbW9qaXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZW5kVHlwaW5nTWVzc2FnZVRvQ2hhbm5lbCIsImJpbmQiLCJzdXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmV0cmlldmVJbWFnZUZyb21DbGlwYm9hcmRBc0Jsb2IiLCJpbWdMb2FkaW5nIiwid2lkdGgiLCJ3cmFwcGVySW1hZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25jbGljayIsInJlbW92ZSIsImFwcGVuZENoaWxkIiwiY29udGFpbnMiLCJzZXRUaW1lb3V0Iiwic2hvd0xpc3RFbW9qaSIsImhhbmRsZVNlbmRNZXNzYWdlRG93biIsImhhbmRsZVNlbmRNZXNzYWdlVXAiLCJoYW5kbGVTZW5kQ2hhdENsaWNrIiwiaGFuZGxlU2VuZE1lc3NhZ2VTdWJtaXQiLCJoYW5kbGVTZW5kRW1vamlTdWJtaXQiLCJ1c2VycyIsIkxpc3RFbW9qaSIsIkNPTkZJR19FTU9KSVMiLCJtYXAiLCJMaXN0TWVzc2FnZSIsImNvbnZlcnRhdGlvbkFjdGl2ZSIsIm1lc3NhZ2VzIiwibWVzc2FnZV9kYXRhIiwia2V5IiwiSGVhZEluZm8iLCJ0aW1lT25saW5lIiwiaXNPbmxpbmUiLCJNZXNzYWdlIiwiY29udkFjdGl2ZSIsImNsYXNzVHlwZU1lc3NhZ2UiLCJzZW5kZXJfaWQiLCJpbWFnZSIsImluZGV4IiwiYXNzZXQiLCJSZWdpc3RlciIsImUiLCJlbWFpbCIsIm1vYmlsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGVydCIsInByb2dyZXNzIiwiYWN0aW9uIiwidXJsX3JlYWx0aW1lIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhVHlwZSIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3AiLCJvayIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJ0b2tlbiIsInRvU3RyaW5nIiwic2F2ZUF1dGhMb2NhbFN0b3JhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBhbnlfbmFtZSIsInRheF9jb2RlX2RhdGUiLCJjb21wYW55X2FkZHJlc3Nfc3RyZWV0IiwiY29tcGFueV9hZGRyZXNzX2xvY2FsaXR5IiwiY29tcGFueV9hZGRyZXNzX3JlZ2lvbiIsImNvbXBhbnlfYWRkcmVzc19jb3VudHJ5Iiwiam9pbiIsInBob25lX29uZSIsImNvbXBhbnlfbWFpbCIsIkxvZ2luQ2hhdCIsIlNpZGViYXIiLCJzaWRlYmFyIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZmV0Y2hBUElDaGFubmVscyIsIlNpZGViYXJMc3RDb252ZXJ0YXRpb24iLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiUmVkdWNlciIsInN1YnNjcmliZSIsImdldFN0YXRlIiwid3JhcHBlciIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsIkNPTkZJR19BUFAiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaW5zdGFuY2VBcHAiLCJBcHBsaWNhdGlvbkRvbSIsIm9uIiwic29ja2V0TGlzdGVubmVyIiwiY29tcG9uZW50IiwiY2hhbm5lbHMiLCJFVkVOVCIsIkNPTkZJR19FVkVOVCIsIlJFU1BPTlNFX01FU1NBR0UiLCJwYXJzZSIsImdldEl0ZW0iLCJsb2NhbERldGVjdCIsImFkZE1lc3NhZ2VTZW5kVG9NZSIsIlJFU1BPTlNFX1RZUElORyIsInRpbWVvdXRUeXBpbmciLCJjbGVhclRpbWVvdXQiLCJkb21UeXBpbmciLCJpbnB1dE1lc3NhZ2UiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJkZXRlY3RDbGllbnQiLCJ1bmtub3duIiwiblZlciIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJuQWd0IiwidXNlckFnZW50IiwiYnJvd3NlciIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwicGFyc2VGbG9hdCIsIm1ham9yVmVyc2lvbiIsInBhcnNlSW50IiwibmFtZU9mZnNldCIsInZlck9mZnNldCIsIml4IiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzTmFOIiwib3MiLCJjbGllbnRTdHJpbmdzIiwicyIsInIiLCJjcyIsInRlc3QiLCJvc1ZlcnNpb24iLCJleGVjIiwiYnJvd3Nlck1ham9yVmVyc2lvbiIsImJyb3dzZXJWZXJzaW9uIiwiRGV0ZWN0Q2xpZW50UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsIlNvY2tldFJlZHVjZXIiLCJBdXRoIiwiQ29uZmlnIiwiRGV0ZWN0Il0sIm1hcHBp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dGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTIhLi9jaGF0LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9TUEEvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMiEuL2NoYXQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL1NQQS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0yIS4vY2hhdC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vU1BBL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIktvekdvUHJvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0tvekdvUHJvL0tvekdvUHJvLVJlZ3VsYXIub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3pHb1Byby1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9Lb3pHb1Byby9Lb3pHb1Byby1Cb2xkLm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLkFwcENvbXBvbmVudCB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmJnLWNoYXQtdGVtYWxhdGUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG59XFxuXFxuLndyYXBwZXItcGFnZS1jaGF0IHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE3NWNhO1xcbn1cXG4ud3JhcHBlci1wYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMzAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5teWluZm8ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbiAgbGVmdDogMXB4O1xcbiAgcmlnaHQ6IDFweDtcXG4gIGJvdHRvbTogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICM5MTc1Y2E7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyLmFjdGl2ZS1vbmxpbmUge1xcbiAgYm9yZGVyOiAycHggZG91YmxlICMwMGM4NTE7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG1heC13aWR0aDogMjdjaDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICB9XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgfVxcblxcbiAgLm15aW5mbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgI0Y1RjVGNTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi50aWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTdweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIHdpZHRoOiA2cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDEpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDIpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDMpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0NTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG4gIDI4JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgNDQlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxuICB9XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNXB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDdweCA3cHggN3B4IDU1cHg7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyAubGFzdC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgfVxcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogN3B4IDdweCA3cHggNTVweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAudGltZS1vbmxpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzI4YTc0NTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lLmFjdGl2ZS1ub3cge1xcbiAgY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5hdmF0YXIge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAubWVzc2FnZS1jb250ZW50IC50ZXh0IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5hdmF0YXIge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuRU1PSkkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50ZXh0LkVNT0pJIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC50eXBpbmctbWVzc2FnZSAudGV4dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnR5cGluZy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmNvbXBvbmVudC1saXN0LWVtb2ppIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGhlaWdodDogMDtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppLmZpcnN0LXNob3cge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppLnNob3cge1xcbiAgdmlzaWJpbGl0eTogdW5zZXQ7XFxuICBoZWlnaHQ6IHVuc2V0O1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgbGVmdDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNvbXBvbmVudC1lbW9qaSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4IDgwcHggMCA1MHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCA+IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTE7XFxuICBib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBjb2xvcjogIzBkNmVmZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5lbW90aWNvbiB7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLnNlbmQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogMTtcXG4gIHJpZ2h0OiA0NXB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLnJlYWN0IHtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICByaWdodDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2Uge1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTU3XFxcIjtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXIgaW1nIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXI6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIGltZyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5jb21wb25lbnQtcmVnaXN0ZXIge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlcjphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5sZWZ0X19yZWdpc3RlciB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5yaWdodF9fcmVnaXN0ZXIge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmNvbnBhbnkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLnJlZ2lzdGVyLWFkZHJlc3Mge1xcbiAgYmFja2dyb3VuZDogI2YyZjJmMiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLnJlZ2lzdGVyLWFkZHJlc3MgaDYge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuaW50cm8tY2hhdC1yZWdpc3RlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2Y0NDMzNjtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBsYWJlbCB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmZvcm0taW5wdXQgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5mb3JtLWlucHV0IGlucHV0OmZvY3VzIHtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuZm9ybS1pbnB1dCBpIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGNvbG9yOiAjZGMzNTQ1O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtIDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMC44MXJlbTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW46IDAuMzc1cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xcbn1cXG4uY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGNvbG9yLWxldmVsKCMzZjUxYjUsIC04KTtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdDpmb2N1cywgLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0LmZvY3VzIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmNvbXBvbmVudC1yZWdpc3RlciAuYnRuLXNlbmQtbWFpbC1jb250YWN0OmRpc2FibGVkLCAuY29tcG9uZW50LXJlZ2lzdGVyIC5idG4tc2VuZC1tYWlsLWNvbnRhY3QuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5jb21wb25lbnQtcmVnaXN0ZXIgLmJ0bi1zZW5kLW1haWwtY29udGFjdCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNjU7XFxufVxcblxcbmkuaGVyby1pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5pLmhlcm8taWNvbjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMDdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZGQlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1ncm91cC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEI1OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC10aWUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFpcnBvcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODRCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy11cC1ib2xkLWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDczOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXV0by1maXg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1iYWxsb3QtcmVjb3VudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMzQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FsZW5kYXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEVEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxlbmRhci1tb250aC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUxOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FyZC1hY2NvdW50LW1haWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcnQtcGx1czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMTJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1uZmM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTkwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZXJ0aWZpY2F0ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvY2stY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQTlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb3NlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE1NlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvc2UtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTU4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jcmVhdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NzRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWRlbGV0ZS12YXJpYW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFCM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1haWwtY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtYWlsLWVkaXQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWV5ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZEMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZmlsZS1kb2N1bWVudC1lZGl0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwREM5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtLXNlbGVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MDFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm1hdC1saXN0LXRleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1nb29nbGUtYWRzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGFuZC1va2F5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNTdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhvbWUtaW1wb3J0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjlDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1ob21lLW1hcC1tYXJrZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1odW1hbi1tYWxlLWNoaWxkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM4Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGFwdG9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMyMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGF5ZXJzLXNlYXJjaC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbG9jay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM0MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWFnbmlmeS1zY2FuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI3NlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVudS1kb3duOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM1RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVudS1kb3duLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkI2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLWNvZy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE3MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS10ZXh0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzZBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb25pdG9yLWRhc2hib2FyZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMDdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDAzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcGx1cy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcmVzcG9uc2l2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NUVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNjYXR0ZXItcGxvdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVDQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VnbWVudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQ0JcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbGVjdGlvbi1zZWFyY2g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zbm93Zmxha2UtdmFyaWFudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0YXItYm94LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zdGlja2VyLWVtb2ppOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc4NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFibGUtc3Rhcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQ0JcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhYmxldC1pcGFkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLWhlYXJ0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY4QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFnLWhlYXJ0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQkNGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWctbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhZy10ZXh0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEZEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10ZWxldmlzaW9uLWNsZWFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTExMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGhlbWUtbGlnaHQtZGFyazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MEVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXVwZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QjBcXFwiO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgVFlQRSBmcm9tIFwiLi90eXBlXCJcclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlclNvY2tldChzb2NrZXQpe1xyXG4gICAgY29uc29sZS5sb2coc29ja2V0ICwgXCIgc2V0IHNvY2tldCBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuU09DQ0tFVC5TRVRURVIsXHJcbiAgICAgICAgcGF5bG9hZCA6IHNvY2tldFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJBdXRoKCBhdXRoICl7XHJcbiAgICBjb25zb2xlLmxvZyhhdXRoICwgXCIgc2V0IGF1dGggXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkFVVEguU0VUVEVSLFxyXG4gICAgICAgIHBheWxvYWQgOiB7IGF1dGggfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJDb252ZXJ0YXRpb24oIGNvbnYgKXtcclxuICAgIGNvbnNvbGUubG9nKGNvbnYgLCBcIiBzZXQgY29udiBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ09OVkVSVEFUSU9OLlNFVFRFUixcclxuICAgICAgICBwYXlsb2FkIDogY29udlxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJNZXNzYWdlKCBtZXNzICl7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzICwgXCIgc2V0IG1lc3MgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLk1FU1NBR0UuU0VUVEVSLFxyXG4gICAgICAgIHBheWxvYWQgOiBtZXNzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24oIGlkICl7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGlkICwgXCJjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24gXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNPTlZFUlRBVElPTi5DSEFOR0UsXHJcbiAgICAgICAgcGF5bG9hZCA6IGlkXHJcbiAgICB9XHJcbn0iLCJjb25zdCBUWVBFID0gIHtcclxuICBcclxuICBTT0NDS0VUIDoge1xyXG4gICAgU0VUVEVSOiBcIlNPQ0NLRVRfU0VUVEVSXCJcclxuICB9LFxyXG4gIEFVVEg6IHtcclxuICAgIFNFVFRFUjogXCJBVVRIX1NFVFRFUlwiXHJcbiAgfSxcclxuICBDT05WRVJUQVRJT046IHtcclxuICAgIFNFVFRFUjogXCJDT05WRVJUQVRJT05fU0VUVEVSXCIsXHJcbiAgICBDSEFOR0U6IFwiQ09OVkVSVEFUSU9OX0NIQU5HRVwiXHJcbiAgfSxcclxuICBNRVNTQUdFOiB7XHJcbiAgICBTRVRURVI6IFwiTUVTU0FHRV9TRVRURVJcIlxyXG4gIH0sXHJcbiAgQ09ORklHOiB7XHJcbiAgICBTRVRURVJfQ09ORklHIDogXCJTRVRURVJfQ09ORklHXCJcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVFlQRTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3Rlci5qc3hcIlxyXG5pbXBvcnQgQ2hhdCBmcm9tICcuL0NoYXQuanN4J1xyXG5cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuXHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkVXBkYXRlXCIpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmF3IGFwcFwiKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJBcHBsaWNhdGlvblwiIGNsYXNzTmFtZT1cIkFwcENvbXBvbmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2hhdC9yZWdpc3RlclwiIHJlbmRlcj17KCkgPT4gPFJlZ2lzdGVyIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2NoYXQvOnNsdWcnIGNvbXBvbmVudD17IENoYXQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xpZW50ICA6IHN0YXRlLmNsaWVudFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QgKG1hcFN0YXRlVG9Qcm9wcykoQXBwKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IHsgc29ja2V0SW5pdGlhbENvbm5lY3QgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlXCJcclxuLy8vIHNvY2NrZXQgXHJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXHJcblxyXG5cclxuLy8vLyBkZWZpbmVcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhci5qc3hcIlxyXG5pbXBvcnQgTGlzdE1lc3NhZ2UgZnJvbSBcIi4vTGlzdE1lc3NhZ2UuanN4XCJcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcblxyXG4gICAgICAgIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCB0aGlzIClcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgaWYoICF0aGlzLnByb3BzLmF1dGggKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9jaGF0L3JlZ2lzdGVyXCIgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLXBhZ2UtY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RNZXNzYWdlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGF0KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcblxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGVcIlxyXG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmVDb252ZXJ0YXRpb24gfSBmcm9tIFwiLi4vYWN0aW9uXCJcclxuXHJcbmNsYXNzIENvbnZlcnRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlVXNlciA9IChpZCkgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNoYW5nZUFjdGl2ZUNvbnZlcnRhdGlvbihpZCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciB7IGNvbnYgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY2xhc3NBY3RpdmVNZXNzYWdlID0gY29udi5pc0FjdGl2ZSAmJiAnYWN0aXZlLW1lc3NhZ2UnXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyXCIgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VBY3RpdmVVc2VyKGNvbnYuX2lkKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzQWN0aXZlTWVzc2FnZSArIFwiIGFjdGl2ZSB1c2VyLWNoYXRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnYuYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57Y29udi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvblxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb252ZXJ0YXRpb24pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY2xhc3MgRW1vamkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBhZGRJY29uSW5wdXRDaGF0ID0gZXZlbnQgPT4ge1xyXG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpXHJcbiAgICBpZihpbnB1dCl7XHJcbiAgICAgIHZhciBjb250ZW50ID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIC8vLyBhZGQgaWNvbiBcclxuICAgICAgY29udGVudCA9IGNvbnRlbnQgKyB0aGlzLnByb3BzLnN5bWJvbFxyXG4gICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnRcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImNvbXBvbmVudC1lbW9qaVwiIG9uQ2xpY2s9e3RoaXMuYWRkSWNvbklucHV0Q2hhdH0+e3RoaXMucHJvcHMuc3ltYm9sfTwvaT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVtb2ppIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaXN0RW1vamkgZnJvbSBcIi4vTGlzdEVtb2ppLmpzeFwiO1xyXG5pbXBvcnQgeyBzZW5kTWVzc2FnZVRvQ2hhbm5lbCwgc2F2ZUJsb2JUb1NlcnZlciwgc2VuZFR5cGluZ01lc3NhZ2VUb0NoYW5uZWwgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuXHJcbmNsYXNzIElucHV0U2VuZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2VuZENoYXQ6IGZhbHNlIH1cclxuICAgICAgICB0aGlzLnN1Ym1pdE1lc3NhZ2VDaGF0ID0gdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIHN1cCA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwicGFzdGVcIixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIGV2ZW50XHJcbiAgICAgICAgICAgICAgICBzdXAucmV0cmlldmVJbWFnZUZyb21DbGlwYm9hcmRBc0Jsb2IoZXZlbnQsIGZ1bmN0aW9uIChpbWdMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGl0IGluIGVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGltZ0xvYWRpbmcud2lkdGggPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vIGNyZWF0ZSB3cmFwcGVyIGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwcGVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXJJbWFnZS5jbGFzc05hbWUgPSBcInJlbW92ZS1pbWFnZSBqcy1zaWduLXVybFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXJJbWFnZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlckltYWdlLmFwcGVuZENoaWxkKGltZ0xvYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpLmFwcGVuZENoaWxkKHdyYXBwZXJJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wb25lbnQtZW1vamknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZW1vamlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1lbW9qaXNcIik7XHJcbiAgICAgICAgICAgIGlmIChlbW9qaXMpIHtcclxuICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbW9qaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvdy10ZW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy10ZW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0TWVzc2FnZUNoYXQgPSBmdW5jdGlvbiAobWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50IH0pXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHlsZSA9PSBcIklNQUdFXCIpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBzdHlsZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgICAgICB2YXIgZW1vamlDaGF0ID0gY29uZmlnLkVNT0pJUy5maWx0ZXIoZW1vamkgPT4gZW1vamkuc3ltYm9sID09IG1lc3NhZ2UudHJpbSgpKVxyXG4gICAgICAgICAgICBpZiAoZW1vamlDaGF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcIkVNT0pJXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTsgLy8vIC5yZXBsYWNlKC9cXG4vZywnPGJyIC8+JylcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyKSB7XHJcbiAgICAgICAgICAgIC8vLyBjw7MgMSB24bqlbiDEkcOoIGNoxrBhIG5naMSpIHJhIGPDoWNoIGdp4bqjaSBxdXnhur90XHJcbiAgICAgICAgICAgIC8vLyBsw6AgbuG6v3UgdG9rZW4gaOG6v3QgaOG6oW4gdGjDrCBwaOG6o2kgcmVmZXNoIG5oxrAgdGjhur8gbsOgbyDEkeG7gyBjaOG6oXkgbcaw4bujdD8gXHJcbiAgICAgICAgICAgIC8vLyBsw6AgbuG6v3UgdG9rZW4gaOG6v3QgaOG6oW4gdGjDrCBwaOG6o2kgcmVmZXNoIG5oxrAgdGjhur8gbsOgbyDEkeG7gyBjaOG6oXkgbcaw4bujdD8gXHJcbiAgICAgICAgICAgIC8vLyBsw6AgbuG6v3UgdG9rZW4gaOG6v3QgaOG6oW4gdGjDrCBwaOG6o2kgcmVmZXNoIG5oxrAgdGjhur8gbsOgbyDEkeG7gyBjaOG6oXkgbcaw4bujdD8gXHJcbiAgICAgICAgICAgIC8vLyBnaeG6o2kgcGjDoXAgZHV5IG5ow6J0cyBsw6AgdOG6oW8gMSBow6BtIHJlZmVzaCB0b2tlbiB0csaw4bubYyBraGkgc2VuZCBjaGF0XHJcbiAgICAgICAgICAgIC8vLyBzYXUgxJHDsyBjaMawYSBkaXNwYWN0aCBuZ2F5IG3DoCBzZW5kIGNoYXQgxJHDoy4gcuG7k2kgZGlzcGF0Y2ggMSBs4bqnblxyXG4gICAgICAgICAgICB2YXIgeyB1c2VyIH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgZGF0YVJlZmVzaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHZhciBkaWZmID0gKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUodXNlci50b2tlbnMucGVyaW9kKS5nZXRUaW1lKCkpIC8gMTAwMFxyXG4gICAgICAgICAgICBpZiAoZGlmZiA+PSB1c2VyLnRva2Vucy5leHBpcmUpIHtcclxuICAgICAgICAgICAgICAgIC8vLyBmZXRjaCBuZXcgdG9rZW5cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhUmVmZXNoID0geyB1c2VySWQ6IHVzZXIuX2lkLCByZWZlc2g6IHVzZXIudG9rZW5zLnRva2VuUmVmZXNoLCBkZXRlY3Q6IHRoaXMucHJvcHMuY2xpZW50IH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZWZlc2gsIFwicmVmZXNoIHRva2VuIHRyxrDhu5tjIGtoaSBzZW5kIGNoYXQgdsOsIGjhur90IGjhuqFuXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2VTZW5kVG9DaGFubmVsID0gbWVzc2FnZVxyXG4gICAgICAgICAgICB2YXIgY2hhbm5lbFNlbmQgPSB0aGlzLnByb3BzLnVzZXJDaGF0LmZpbmQoY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhbm5lbC5pc0FjdGl2ZSA9PSB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHZhciBjaGFubmVsSWQgPSBjaGFubmVsU2VuZC5pZFxyXG4gICAgICAgICAgICB2YXIgdG9rZW5BY2Nlc3MgPSB1c2VyLnRva2Vucy50b2tlbkFjY2Vzc1xyXG4gICAgICAgICAgICB2YXIgZGV0ZWN0ID0gdGhpcy5wcm9wcy5jbGllbnRcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2VUb0NoYW5uZWwobWVzc2FnZVNlbmRUb0NoYW5uZWwsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsSWQsIHRva2VuQWNjZXNzLCBkZXRlY3QsIGluc3RhbmNlLCBkYXRhUmVmZXNoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VuZEVtb2ppU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gXCIg8J+SnSBcIlxyXG4gICAgICAgIHZhciBzdHlsZSA9IFwiRU1PSklcIlxyXG4gICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQobWVzc2FnZSwgc3R5bGUsIG51bGwpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZW5kTWVzc2FnZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICB2YXIgc3R5bGUgPSBcIlwiXHJcbiAgICAgICAgdmFyIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIHbDoG8gY2xpY2sgc2VuZCBzdWJtaXQgXCIpXHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIikudmFsdWVcclxuICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZSA9ICcnXHJcbiAgICAgICAgdmFyIGltYWdlc0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpXHJcbiAgICAgICAgdmFyIGltYWdlcyA9IGltYWdlc0RvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVtb3ZlLWltYWdlXCIpXHJcbiAgICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBcIklNQUdFXCJcclxuICAgICAgICAgICAgdXJsQXR0YWNobWVudCA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4X2ltYWdlX3NlbmQgPSAwOyBpbmRleF9pbWFnZV9zZW5kIDwgaW1hZ2VzLmxlbmd0aDsgaW5kZXhfaW1hZ2Vfc2VuZCsrKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxBdHRhY2htZW50LnB1c2goaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQobWVzc2FnZSwgc3R5bGUsIHVybEF0dGFjaG1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VuZE1lc3NhZ2VEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzICYmICFldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBcIlwiXHJcbiAgICAgICAgICAgIHZhciB1cmxBdHRhY2htZW50ID0gW11cclxuICAgICAgICAgICAgdmFyIGltYWdlc0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpXHJcbiAgICAgICAgICAgIHZhciBpbWFnZXMgPSBpbWFnZXNEb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlbW92ZS1pbWFnZVwiKVxyXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcIklNQUdFXCJcclxuICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhfaW1hZ2Vfc2VuZCA9IDA7IGluZGV4X2ltYWdlX3NlbmQgPCBpbWFnZXMubGVuZ3RoOyBpbmRleF9pbWFnZV9zZW5kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxBdHRhY2htZW50LnB1c2goaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdE1lc3NhZ2VDaGF0KGV2ZW50LnRhcmdldC52YWx1ZSwgc3R5bGUsIHVybEF0dGFjaG1lbnQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kQ2hhdDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMikge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcclxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8vIGdldCB3b3JkIGxhc3RcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IGNvbnRlbnQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmRMYXN0ZXN0ID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3b3JkTGFzdGVzdClcclxuICAgICAgICAgICAgICAgIC8vLy8gY2hlY2sgaGF2ZSBzeXNib2wgXHJcbiAgICAgICAgICAgICAgICB2YXIgZW1vamlzQ2FsbCA9IGNvbmZpZy5FTU9KSVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zaWduID09IHdvcmRMYXN0ZXN0KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZW1vamlzQ2FsbClcclxuICAgICAgICAgICAgICAgIGlmIChlbW9qaXNDYWxsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLyBhZGQgaWNvbiBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gY29udGVudC5sYXN0SW5kZXhPZihcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkgKyBcIiBcIiArIGVtb2ppc0NhbGxbMF0uc3ltYm9sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VuZENoYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRDaGF0OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0cmlldmVJbWFnZUZyb21DbGlwYm9hcmRBc0Jsb2IgPSAocGFzdGVFdmVudCwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICBpZiAoIXBhc3RlRXZlbnQuY2xpcGJvYXJkRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8vIGNhbGwgY2FsYmFjayBmdW5jdGlvbiB1bmRlZmluZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXRlbXMgPSBwYXN0ZUV2ZW50LmNsaXBib2FyZERhdGEuaXRlbXM7XHJcbiAgICAgICAgaWYgKCFpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8vIGNhbGwgY2FsYmFjayBmdW5jdGlvbiB1bmRlZmluZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIFNraXAgY29udGVudCBpZiBub3QgaW1hZ2VcclxuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLnR5cGUuaW5kZXhPZihcImltYWdlXCIpID09IC0xKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIGltYWdlIG9uIGNsaXBib2FyZCBhcyBibG9iXHJcbiAgICAgICAgICAgIHZhciBibG9iID0gaXRlbXNbaV0uZ2V0QXNGaWxlKCk7XHJcbiAgICAgICAgICAgIHNhdmVCbG9iVG9TZXJ2ZXIoYmxvYilcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuIGltYWdlXHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgLy8gT25jZSB0aGUgaW1hZ2UgbG9hZHMsIHJlbmRlciB0aGUgaW1nIG9uIHRoZSBjYW52YXNcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkaW1lbnNpb25zIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBDcm9zc2Jyb3dzZXIgc3VwcG9ydCBmb3IgVVJMXHJcbiAgICAgICAgICAgIHZhciBVUkxPYmogPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBET01TdHJpbmcgY29udGFpbmluZyBhIFVSTCByZXByZXNlbnRpbmcgdGhlIG9iamVjdCBnaXZlbiBpbiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgICAgIC8vIG5hbWVseSB0aGUgb3JpZ2luYWwgQmxvYlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IFVSTE9iai5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93TGlzdEVtb2ppID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpO1xyXG4gICAgICAgIGlmIChlbW9qaXMpIHtcclxuICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5hZGQoXCJzaG93LXRlbXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VuZENoYXRDbGljayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8vLyBzZW5kIGNsYXNzIGlzIHdyaXRlIG1lc3NhZ2VcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcIndyaXRpbmdcIilcclxuXHJcbiAgICAgICAgLy8vc2VuZCB0eXBpbmcgXHJcbiAgICAgICAgdmFyIHsgdXNlciB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxTZW5kID0gdGhpcy5wcm9wcy51c2VyQ2hhdC5maW5kKGNoYW5uZWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhbm5lbC5pc0FjdGl2ZSA9PSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB2YXIgY2hhbm5lbElkID0gY2hhbm5lbFNlbmQuaWRcclxuICAgICAgICB2YXIgdG9rZW5BY2Nlc3MgPSB1c2VyLnRva2Vucy50b2tlbkFjY2Vzc1xyXG4gICAgICAgIHZhciBkZXRlY3QgPSB0aGlzLnByb3BzLmNsaWVudFxyXG5cclxuICAgICAgICBzZW5kVHlwaW5nTWVzc2FnZVRvQ2hhbm5lbChjaGFubmVsSWQsIHRva2VuQWNjZXNzLCBkZXRlY3QsIGluc3RhbmNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWlzLXdyaXRlLW1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImpzLWltYWdlLS1ibG9ja1wiIGNsYXNzTmFtZT1cImltYWdlLWJsb2NrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLXN0aWNrZXItZW1vamkgZW1vdGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0xpc3RFbW9qaX1cclxuICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImpzLWlucHV0LWNoYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZVVwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZENoYXRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuODoeODg+OCu+ODvOOCuOOCkuabuOOBjy4uLlwiXHJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLXNlbmQtb3V0bGluZSBzZW5kXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZVN1Ym1pdH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZSByZWFjdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZEVtb2ppU3VibWl0fT48L2k+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVtb2ppIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgY2xpZW50OiBzdGF0ZS5jbGllbnQsXHJcbiAgICAgICAgdXNlckNoYXQ6IHN0YXRlLnVzZXJDaGF0LFxyXG4gICAgICAgIHNvY2tldDogc3RhdGUuc29ja2V0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKElucHV0U2VuZCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRW1vamkgZnJvbSBcIi4vRW1vamkuanN4XCJcclxuXHJcbmNsYXNzIExpc3RFbW9qaSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIFxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwianMtZW1vamlzXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtZW1vamlcIj5cclxuICAgICAgICB7IENPTkZJR19FTU9KSVMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8RW1vamkga2V5PXtpdGVtLnNpZ259IHN5bWJvbD17aXRlbS5zeW1ib2x9IHNpZ249e2l0ZW0uc2lnbn0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEVtb2ppXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IExpc3RNZXNzYWdlSGVhZGVyIGZyb20gXCIuL0xpc3RNZXNzYWdlSGVhZGVyLmpzeFwiXHJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2UuanN4XCJcclxuaW1wb3J0IElucHV0U2VuZCBmcm9tIFwiLi9JbnB1dFNlbmQuanN4XCJcclxuLy8gaW1wb3J0IE1lc3NhZ2VDaGF0VHlwaW5nIGZyb20gXCIuL01lc3NhZ2VDaGF0VHlwaW5nLmpzeFwiXHJcblxyXG5jbGFzcyBMaXN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBMaXN0TWVzc2FnZVwiKVxyXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY29udmVydGF0aW9uQWN0aXZlID0gY29udmVydGF0aW9ucy5maW5kKGNvbnZlcnRhdGlvbnMgPT4gY29udmVydGF0aW9ucy5pc0FjdGl2ZSlcclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXVxyXG4gICAgICAgIGlmKCBjb252ZXJ0YXRpb25BY3RpdmUgKXtcclxuICAgICAgICAgICAgbWVzc2FnZXMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzLmZpbmQoIG1lc3MgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzcy5faWQgPT0gY29udmVydGF0aW9uQWN0aXZlLl9pZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiggbWVzc2FnZXMgKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMubWVzc2FnZV9kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZXMsIFwic8SRc2Zkc2ZzZFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWxzdC1tZXNzYWdlc1wiIGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxMaXN0TWVzc2FnZUhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWxpc3QtbWVzc2FnZVwiIGlkPVwianMtc2Nyb2xsLXRvLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcyAmJiBtZXNzYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtZXNzYWdlLCBrZXkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcIm1lc3NhZ2UtY2hhdFwiICsga2V5IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxNZXNzYWdlQ2hhdFR5cGluZy8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRTZW5kIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvbixcclxuICAgICAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMaXN0TWVzc2FnZSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuY2xhc3MgSGVhZEluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgbOG6oWkgaGVhZCBsaXN0IG1lc3NhZ2VcIilcclxuICAgICAgICB2YXIgeyBjb252ZXJ0YXRpb25zIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNvbnZlcnRhdGlvbkFjdGl2ZSA9IGNvbnZlcnRhdGlvbnMuZmluZChjb252ZXJ0YXRpb24gPT4gY29udmVydGF0aW9uLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICBpZiAoIWNvbnZlcnRhdGlvbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRpbWVPbmxpbmUgPSAn44Kq44Oz44Op44Kk44OzJ1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaGVhZC1pbmZvXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFjdGl2ZS1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXIgYWN0aXZlLW9ubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udmVydGF0aW9uQWN0aXZlLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbnZlcnRhdGlvbkFjdGl2ZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsoY29udmVydGF0aW9uQWN0aXZlLmlzT25saW5lID8gXCJhY3RpdmUtbm93XCIgOiAnJykgKyBcIiB0aW1lLW9ubGluZVwifT57dGltZU9ubGluZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLmNvbnZlcnRhdGlvblxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkSW5mbyk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCJcclxuXHJcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgeyBtZXNzYWdlLCBjb252ZXJ0YXRpb25zIH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgIGNvbnZBY3RpdmUgPSBjb252ZXJ0YXRpb25zLmZpbmQoY29udmVydGF0aW9ucyA9PiBjb252ZXJ0YXRpb25zLmlzQWN0aXZlKSxcclxuICAgICAgICBjbGFzc1R5cGVNZXNzYWdlID0gbWVzc2FnZS5zZW5kZXJfaWQgPT0gY29udkFjdGl2ZS51c2VySWQgPyAnZmxvYXQtcmlnaHQgYnktbWUnIDogJ2Zsb2F0LWxlZnQnXHJcblxyXG4gICAgICAgIGlmICghY29udkFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCBcIm1lc3NhZ2VtZXNzYWdlbWVzc2FnZW1lc3NhZ2VcIilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1tZXNzYWdlLWNoYXRcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzVHlwZU1lc3NhZ2UgKyBcIiBjaGF0LWdyb3VwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb252QWN0aXZlLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN0eWxlID09IFwiSU1BR0VcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lc3NhZ2Uuc3R5bGV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5hdHRhY2htZW50Lm1hcCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIiArIGluZGV4ICsgaW1hZ2V9IGNsYXNzTmFtZT1cIndyYXBwZXItYXR0YWNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuY29uZmlnLmFzc2V0ICsgaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lc3NhZ2Uuc3R5bGUgKyBcIiB0ZXh0XCJ9ID57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb24sXHJcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWdcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVzc2FnZSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5cclxuaW1wb3J0IHsgc2F2ZUF1dGhMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlXCJcclxuaW1wb3J0IHsgc2V0dGVyQXV0aCB9IGZyb20gXCIuLi9hY3Rpb25cIlxyXG5cclxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBhbGVydCA6IGZhbHNlICwgcHJvZ3Jlc3MgOiBmYWxzZSB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIExvZ2luQ2hhdCA9IGUgPT4ge1xyXG4gICAgICAgIHZhciBlbWFpbCAgPSB0aGlzLmVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICBuYW1lICAgPSB0aGlzLm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIG1vYmlsZSA9IHRoaXMubW9iaWxlLnZhbHVlLFxyXG4gICAgICAgICAgICBkZXRlY3QgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRldGVjdClcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxlcnQgOiBmYWxzZSAsIHByb2dyZXNzIDogdHJ1ZX0sICgpPT57XHJcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmNvbmZpZy51cmxfcmVhbHRpbWUgKyBcIi9hcGkvcmVnaXN0ZXItY2hhdFwiXHJcbiAgICAgICAgICAgIGZldGNoKGFjdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsICwgbmFtZSAsIG1vYmlsZSwgZGV0ZWN0IH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3AgPT4geyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKSBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0IDogZmFsc2UgLCBwcm9ncmVzcyA6IGZhbHNlIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHJlc3BvbnNlLmRhdGEgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF1dGggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCwgbmFtZSwgbW9iaWxlLCB0b2tlbiA6IHJlc3BvbnNlLmRhdGEudG9rZW4udG9TdHJpbmcoKSwgX2lkOiByZXNwb25zZS5kYXRhLnVzZXJJZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUF1dGhMb2NhbFN0b3JhZ2UoYXV0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJBdXRoKCBhdXRoICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydCA6IGVycm9yLm1lc3NhZ2UgLCBwcm9ncmVzcyA6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYoIHRoaXMucHJvcHMuYXV0aCApe1xyXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2NoYXQvaHVuZ1wiIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfX3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnBhbnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X25hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1hZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWFjY291bnQtZ3JvdXAtb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9uYW1lIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLXVwZGF0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7IHRoaXMucHJvcHMuY29uZmlnLnRheF9jb2RlX2RhdGUgfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWhvbWUtbWFwLW1hcmtlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX3N0cmVldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3NfbG9jYWxpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY29tcGFueV9hZGRyZXNzX3JlZ2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X2FkZHJlc3NfY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbigpIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNlbGxwaG9uZS1uZmNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDml6XmnKzjga7pm7voqbHvvJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgXCJ0ZWw6XCIgKyB0aGlzLnByb3BzLmNvbmZpZy5waG9uZV9vbmUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNvbmZpZy5waG9uZV9vbmUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2FyZC1hY2NvdW50LW1haWwtb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBcIm1haWx0bzpcIiArIHRoaXMucHJvcHMuY29uZmlnLmNvbXBhbnlfbWFpbCB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNvbmZpZy5jb21wYW55X21haWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW50cm8tY2hhdC1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOODgeODo+ODg+ODiOOCkuioreWumuOBmeOCi+OBn+OCgeOBruaDheWgseOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgiDkuIroqJjjga7mg4XloLHjga7kv53orbfjgavliqrjgoHjgabjgYTjgb7jgZlcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X19yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5hbGVydCAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPnsgdGhpcy5zdGF0ZS5hbGVydCB9PC9kaXY+IH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiDjgYLjgarjgZ/jga7jg5Xjg6vjg43jg7zjg6AgPGk+4py1PC9pPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcmVmPXsoaW5wdXQpID0+IHRoaXMubmFtZSA9IGlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IOODoeODvOODq+OCouODieODrOOCuSA8aT7inLU8L2k+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcmVmPXsoaW5wdXQpID0+IHRoaXMuZW1haWwgPSBpbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IOmbu+ipseeVquWPtyA8aT7inLU8L2k+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtb2JpbGVcIiB0eXBlPVwidGV4dFwiIHJlZj17KGlucHV0KSA9PiB0aGlzLm1vYmlsZSA9IGlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2VuZC1tYWlsLWNvbnRhY3RcIiBvbkNsaWNrPXsgdGhpcy5Mb2dpbkNoYXQgfT4g44Oh44O844Or566h55CG6ICF44Gr6YCB5L+hPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb2dyZXNzICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHByb2dyZXNzLXN1Y2Nlc3NcIj48ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWxvYWRkaW5nXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoICA6IHN0YXRlLmF1dGgsXHJcbiAgICAgICAgY29uZmlnOiBzdGF0ZS5jb25maWcsXHJcbiAgICAgICAgZGV0ZWN0OiBzdGF0ZS5kZXRlY3RcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmVnaXN0ZXIpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuaW1wb3J0IFNpZGViYXJMc3RDb252ZXJ0YXRpb24gZnJvbSBcIi4vU2lkZWJhckxzdENvbnZlcnRhdGlvbi5qc3hcIlxyXG5cclxuaW1wb3J0IHsgZmV0Y2hBUElDaGFubmVscyB9IGZyb20gXCIuLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5cclxuY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAvLy8vc2V0IGhlaWdodCBjb21wb25lbnRcclxuICAgICAgICB2YXIgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2lkZWJhci1jaGF0XCIpLFxyXG4gICAgICAgIG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWxzdC1tZXNzYWdlc1wiKVxyXG4gICAgICAgIGlmKHNpZGViYXIgJiYgbWVzc2FnZSl7XHJcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUuaGVpZ2h0ID0gbWVzc2FnZS5jbGllbnRIZWlnaHQgKyBcInB4XCJcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiggdGhpcy5wcm9wcy5hdXRoICl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb3BzLmF1dGggLCBcInNzZGZkc2ZzZCBhdXRoIFwiKVxyXG4gICAgICAgICAgICB2YXIgeyB0b2tlbiB9ID0gdGhpcy5wcm9wcy5hdXRoXHJcbiAgICAgICAgICAgIGlmKCB0b2tlbiApe1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hBUElDaGFubmVscyh0b2tlbiwgdGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgc2lkZWJhclwiKVxyXG4gICAgICAgIHZhciB7IGF1dGggfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBhdXRoLmF2YXRhciA9ICdodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvdXBsb2Fkcy9hdmF0YXIuanBnJ1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtc2lkZWJhci1jaGF0XCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LXNpZGViYXItY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXV0aC5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2F1dGgubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJMc3RDb252ZXJ0YXRpb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aCxcclxuICAgICAgICBjb25maWc6IHN0YXRlLmNvbmZpZ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlYmFyKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCBDb252ZXJ0YXRpb24gZnJvbSBcIi4vQ29udmVydGF0aW9uLmpzeFwiXHJcblxyXG5jbGFzcyBTaWRlYmFyTHN0Q29udmVydGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNvbnZlcnRhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgY29udmVydGF0aW9uXCIpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbnMgJiYgY29udmVydGF0aW9ucy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbiA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnZlcnRhdGlvbiBrZXk9e2NvbnZlcnRhdGlvbi5faWR9IGNvbnY9e2NvbnZlcnRhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS5jb252ZXJ0YXRpb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNpZGViYXJMc3RDb252ZXJ0YXRpb24pXHJcbiIsIi8qIHBvbHlmaWxscy5qcyAqL1xyXG4vLyBpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xyXG4vLyBpbXBvcnQgJ3JlYWN0LWFwcC1wb2x5ZmlsbC9pZTExJ1xyXG5pbXBvcnQgJ2NvcmUtanMnXHJcbi8vL2ZvciBpZTkgXHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG4vKiogSUU5LCBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIGFsbCBvZiB0aGUgZm9sbG93aW5nIHBvbHlmaWxscy4gKiovXHJcbmltcG9ydCAnY29yZS1qcy9lcy9zeW1ib2wnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL2Z1bmN0aW9uJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3BhcnNlLWludCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9udW1iZXInO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvbWF0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvZGF0ZSc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXMvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3dlYWstbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzL3NldCc7XHJcbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheSc7XHJcblxyXG5pbXBvcnQgJ3JhZi9wb2x5ZmlsbCc7XHJcbi8vLyBmb3Igd2VicGFjayBpbXBvcnRcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmltcG9ydCAnLi8uLi8uLi9CVUlMREVSL1NDU1MvY2hhdC5zY3NzJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShSZWR1Y2VyKTtcclxuc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY8OzIHRoYXkgxJHhu5VpIHRyb25nIFJlZHV4ISEnKVxyXG4gICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbn0pO1xyXG5cclxuLy8vIG15IGNvbXBvbmVudFxyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50L0FwcC5qc3gnXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlJPT1RcIik7XHJcblxyXG5pZiAodHlwZW9mIChTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgd3JhcHBlcikge1xyXG4gICAgXHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgLCB3cmFwcGVyKVxyXG59ZWxzZXtcclxuICAgIGFsZXJ0KFwi44GT44Gu44OW44Op44Km44K244Gn44Gv44CB44Ki44OX44Oq44Kx44O844K344On44Oz44Gv5q2j5bi444Gr5YuV5L2c44GX44G+44Gb44KT44CCIOOCouODg+ODl+OCsOODrOODvOODieOBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBzb2NrZXRMaXN0ZW5uZXIgfSBmcm9tIFwiLi9zb2NrZXRMaXN0ZW5uZXJcIlxyXG5pbXBvcnQgeyBzZXR0ZXJTb2NrZXQsIHNldHRlckNvbnZlcnRhdGlvbiwgc2V0dGVyTWVzc2FnZSAgfSBmcm9tIFwiLi4vYWN0aW9uXCJcclxuXHJcbmNvbnN0IENPTkZJRyA9IENPTkZJR19BUFBcclxudmFyIHNvY2tldCA9IG51bGxcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXV0aExvY2FsU3RvcmFnZSAoYXV0aCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoKSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb2NrZXRJbml0aWFsQ29ubmVjdChzb2NrZXRJT0NsaWVudCwgaW5zdGFuY2VBcHApIHtcclxuXHJcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChDT05GSUcudXJsX3JlYWx0aW1lKVxyXG4gICAgdmFyIEFwcGxpY2F0aW9uRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKVxyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBBcHBsaWNhdGlvbkRvbSAmJiBBcHBsaWNhdGlvbkRvbS5jbGFzc0xpc3QucmVtb3ZlKFwiY29ubmVjdC1zb2NrZXQtZXJyb3JcIilcclxuICAgICAgICAvLy8vIHNldCBjb25maWdcclxuICAgICAgICBzb2NrZXRMaXN0ZW5uZXIoc29ja2V0LCBpbnN0YW5jZUFwcClcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQoc29ja2V0KSlcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKHNldHRlclNvY2tldChudWxsKSlcclxuICAgICAgICBBcHBsaWNhdGlvbkRvbSAmJiBBcHBsaWNhdGlvbkRvbS5jbGFzc0xpc3QuYWRkKFwiY29ubmVjdC1zb2NrZXQtZXJyb3JcIilcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEFwcGxpY2F0aW9uRG9tICYmIEFwcGxpY2F0aW9uRG9tLmNsYXNzTGlzdC5hZGQoXCJjb25uZWN0LXNvY2tldC1lcnJvclwiKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBUElDaGFubmVscyggdG9rZW4sIGNvbXBvbmVudCApe1xyXG5cclxuICAgIHZhciBhY3Rpb24gPSBjb21wb25lbnQucHJvcHMuY29uZmlnLnVybF9yZWFsdGltZSArIFwiL2FwaS9jaGFubmVsc1wiXHJcbiAgICAgICAgZmV0Y2goYWN0aW9uLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwID0+IHsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXJlc3Aub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHN0YXR1czogcmVzcC5zdGF0dXMsIGVycm9yOiBkYXRhLmVycm9ycyB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKSBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiggcmVzcG9uc2UuZGF0YSApe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnZlcnRhdGlvbnMgPSBbXSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gW11cclxuICAgICAgICAgICAgICAgIGlmKCByZXNwb25zZS5kYXRhLmNoYW5uZWxzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5jaGFubmVscy5tYXAoY29udiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udmVydGF0aW9uID0geyAuLi5jb252LnVzZXIsIHVzZXJJZDogY29udi51c2VyLl9pZCwgX2lkOiBjb252Ll9pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogY29udi5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2RhdGE6IGNvbnYubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRhdGlvbnMucHVzaChjb252ZXJ0YXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJDb252ZXJ0YXRpb24oIGNvbnZlcnRhdGlvbnMgKSlcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQucHJvcHMuZGlzcGF0Y2goc2V0dGVyTWVzc2FnZSggbWVzc2FnZXMgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBlcnJvciApXHJcbiAgICAgICAgfSlcclxufSIsInZhciBFVkVOVCA9IENPTkZJR19FVkVOVFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvY2tldExpc3Rlbm5lciggc29ja2V0LCBpbnN0YW5jZUFwcCApe1xyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLEkcOjIHbDoG8gXCIgKyBFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBkYXRhKVxyXG5cclxuICAgICAgICB2YXIgeyB1c2VyLCBtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbCwgZGV0ZWN0IH0gPSBkYXRhIFxyXG4gICAgICAgIHZhciBhdXRoICAgICAgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSksXHJcbiAgICAgICAgICAgIGxvY2FsRGV0ZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RldGVjdCcpXHJcblxyXG4gICAgICAgIGlmKCBhdXRoICYmIGF1dGguX2lkID09IHVzZXIgJiYgbG9jYWxEZXRlY3QgPT0gZGV0ZWN0ICkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goIGFkZE1lc3NhZ2VTZW5kVG9NZSh7IHR5cGU6IGZhbHNlLCBjb250ZW50OiBtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbCB9KSApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlJFU1BPTlNFX1RZUElORywgZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YW9mIEVWRU5ULlJFU1BPTlNFX1RZUElOR1wiICsgRVZFTlQuUkVTUE9OU0VfVFlQSU5HKVxyXG4gICAgICAgIHZhciB7IHVzZXIsIGNoYW5uZWwgfSA9IGRhdGEgXHJcbiAgICAgICAgdmFyIGF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpXHJcbiAgICAgICAgaWYoIGF1dGggJiYgYXV0aC5faWQgPT0gdXNlciApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb3MgdGhlZXIgc2hvdyB0eXBpbmcgXCIpXHJcbiAgICAgICAgaWYodGltZW91dFR5cGluZyl7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VHlwaW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZG9tVHlwaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy10eXBpbmdcIilcclxuICAgICAgICBpZihkb21UeXBpbmcuZ2V0QXR0cmlidXRlKFwiY2hhbm5lbFwiKSA9PSBjaGFubmVsKVxyXG4gICAgICAgIGRvbVR5cGluZy5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICAgIC8vLyBzY3JvbGwgYm90dG9tIFxyXG4gICAgICAgIHZhciBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIilcclxuICAgICAgICBpZihpbnB1dE1lc3NhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwid3JpdGluZ1wiKSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJykuc2Nyb2xsVG9wICA9IFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbEhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGltZW91dFR5cGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkb21UeXBpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXR5cGluZ1wiKVxyXG4gICAgICAgICAgICBpZihkb21UeXBpbmcuZ2V0QXR0cmlidXRlKFwiY2hhbm5lbFwiKSA9PSBjaGFubmVsKVxyXG4gICAgICAgICAgICBkb21UeXBpbmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcclxuICAgICAgICB9LCAxMDAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG4gICAgXHJcbn0iLCJ2YXIgYXV0aCA9IG51bGxcclxuaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpXHJcbn1cclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBhdXRoLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuQVVUSC5TRVRURVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5pZiAodHlwZW9mIENPTkZJR19BUFAgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnN0IENPTkZJR19BUFAgPSBudWxsXHJcbn1cclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBDT05GSUdfQVBQLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuQ09ORklHLlNFVFRFUl9DT05GSUc6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gW10sIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgVFlQRS5DT05WRVJUQVRJT04uU0VUVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFRZUEUuQ09OVkVSVEFUSU9OLkNIQU5HRTogXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5faWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmUgOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGlzQWN0aXZlIDogZmFsc2UgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJmdW5jdGlvbiBkZXRlY3RDbGllbnQoKSB7XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVua25vd24gPSAndW5rbm93bic7XHJcbiAgICAgICAgLy8gYnJvd3NlclxyXG4gICAgICAgIHZhciBuVmVyID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XHJcbiAgICAgICAgdmFyIG5BZ3QgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIHZhciBicm93c2VyID0gbmF2aWdhdG9yLmFwcE5hbWU7XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgICAgIHZhciBtYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApO1xyXG4gICAgICAgIHZhciBuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQsIGl4O1xyXG4gICAgICAgIC8vIE9wZXJhXHJcbiAgICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ09wZXJhJykpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXIgKz0gJ09wZXJhJztcclxuICAgICAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDYpO1xyXG4gICAgICAgICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignVmVyc2lvbicpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9wZXJhIE5leHRcclxuICAgICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignT1BSJykpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXIgKz0gJ09wZXJhJztcclxuICAgICAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBFZGdlXHJcbiAgICAgICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignRWRnJykpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXIgKz0gJ01pY3Jvc29mdCBFZGdlJztcclxuICAgICAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBNU0lFXHJcbiAgICAgICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignTVNJRScpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBicm93c2VyICs9ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENvY0NvY1xyXG4gICAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ2NvYycpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBicm93c2VyICs9ICdDb2NDb2MnO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENocm9tZVxyXG4gICAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0Nocm9tZScpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBicm93c2VyICs9ICdDaHJvbWUnO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNhZmFyaVxyXG4gICAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1NhZmFyaScpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBicm93c2VyICs9ICdTYWZhcmknO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICAgICAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdWZXJzaW9uJykpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0ZpcmVmb3gnKSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgYnJvd3NlciArPSAnRmlyZWZveCc7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTVNJRSAxMStcclxuICAgICAgICBlbHNlIGlmIChuQWd0LmluZGV4T2YoJ1RyaWRlbnQvJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgYnJvd3NlciArPSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJztcclxuICAgICAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKG5BZ3QuaW5kZXhPZigncnY6JykgKyAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT3RoZXIgYnJvd3NlcnNcclxuICAgICAgICBlbHNlIGlmICgobmFtZU9mZnNldCA9IG5BZ3QubGFzdEluZGV4T2YoJyAnKSArIDEpIDwgKHZlck9mZnNldCA9IG5BZ3QubGFzdEluZGV4T2YoJy8nKSkpIHtcclxuICAgICAgICAgICAgYnJvd3NlciA9IG5BZ3Quc3Vic3RyaW5nKG5hbWVPZmZzZXQsIHZlck9mZnNldCk7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyAxKTtcclxuICAgICAgICAgICAgaWYgKGJyb3dzZXIudG9Mb3dlckNhc2UoKSA9PSBicm93c2VyLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0cmltIHRoZSB2ZXJzaW9uIHN0cmluZ1xyXG4gICAgICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJzsnKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICAgICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignICcpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgICAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCcpJykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KCcnICsgdmVyc2lvbiwgMTApO1xyXG4gICAgICAgIGlmIChpc05hTihtYWpvclZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgICAgICAgICBtYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3lzdGVtXHJcbiAgICAgICAgdmFyIG9zID0gdW5rbm93bjtcclxuICAgICAgICB2YXIgY2xpZW50U3RyaW5ncyA9IFt7XHJcbiAgICAgICAgICAgIHM6ICdXaW5kb3dzIDEwJyxcclxuICAgICAgICAgICAgcjogLyhXaW5kb3dzIDEwLjB8V2luZG93cyBOVCAxMC4wKS9cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgczogJ1dpbmRvd3MgOC4xJyxcclxuICAgICAgICAgICAgcjogLyhXaW5kb3dzIDguMXxXaW5kb3dzIE5UIDYuMykvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdXaW5kb3dzIDgnLFxyXG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgOHxXaW5kb3dzIE5UIDYuMikvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdXaW5kb3dzIDcnLFxyXG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdXaW5kb3dzIFZpc3RhJyxcclxuICAgICAgICAgICAgcjogL1dpbmRvd3MgTlQgNi4wL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzOiAnV2luZG93cyBTZXJ2ZXIgMjAwMycsXHJcbiAgICAgICAgICAgIHI6IC9XaW5kb3dzIE5UIDUuMi9cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgczogJ1dpbmRvd3MgWFAnLFxyXG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgTlQgNS4xfFdpbmRvd3MgWFApL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzOiAnV2luZG93cyAyMDAwJyxcclxuICAgICAgICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMHxXaW5kb3dzIDIwMDApL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzOiAnV2luZG93cyBNRScsXHJcbiAgICAgICAgICAgIHI6IC8oV2luIDl4IDQuOTB8V2luZG93cyBNRSkvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdXaW5kb3dzIDk4JyxcclxuICAgICAgICAgICAgcjogLyhXaW5kb3dzIDk4fFdpbjk4KS9cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgczogJ1dpbmRvd3MgOTUnLFxyXG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgOTV8V2luOTV8V2luZG93c185NSkvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdXaW5kb3dzIE5UIDQuMCcsXHJcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyBOVCA0LjB8V2luTlQ0LjB8V2luTlR8V2luZG93cyBOVCkvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdXaW5kb3dzIENFJyxcclxuICAgICAgICAgICAgcjogL1dpbmRvd3MgQ0UvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdXaW5kb3dzIDMuMTEnLFxyXG4gICAgICAgICAgICByOiAvV2luMTYvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdBbmRyb2lkJyxcclxuICAgICAgICAgICAgcjogL0FuZHJvaWQvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdPcGVuIEJTRCcsXHJcbiAgICAgICAgICAgIHI6IC9PcGVuQlNEL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzOiAnU3VuIE9TJyxcclxuICAgICAgICAgICAgcjogL1N1bk9TL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzOiAnTGludXgnLFxyXG4gICAgICAgICAgICByOiAvKExpbnV4fFgxMSkvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdpT1MnLFxyXG4gICAgICAgICAgICByOiAvKGlQaG9uZXxpUGFkfGlQb2QpL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzOiAnTWFjIE9TIFgnLFxyXG4gICAgICAgICAgICByOiAvTWFjIE9TIFgvXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHM6ICdNYWMgT1MnLFxyXG4gICAgICAgICAgICByOiAvKE1hY1BQQ3xNYWNJbnRlbHxNYWNfUG93ZXJQQ3xNYWNpbnRvc2gpL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzOiAnUU5YJyxcclxuICAgICAgICAgICAgcjogL1FOWC9cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgczogJ1VOSVgnLFxyXG4gICAgICAgICAgICByOiAvVU5JWC9cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgczogJ0JlT1MnLFxyXG4gICAgICAgICAgICByOiAvQmVPUy9cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgczogJ09TLzInLFxyXG4gICAgICAgICAgICByOiAvT1NcXC8yL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzOiAnU2VhcmNoIEJvdCcsXHJcbiAgICAgICAgICAgIHI6IC8obnVoa3xHb29nbGVib3R8WWFtbXlib3R8T3BlbmJvdHxTbHVycHxNU05Cb3R8QXNrIEplZXZlc1xcL1Rlb21hfGlhX2FyY2hpdmVyKS9cclxuICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKHZhciBpZCBpbiBjbGllbnRTdHJpbmdzKSB7XHJcbiAgICAgICAgICAgIHZhciBjcyA9IGNsaWVudFN0cmluZ3NbaWRdO1xyXG4gICAgICAgICAgICBpZiAoY3Muci50ZXN0KG5BZ3QpKSB7XHJcbiAgICAgICAgICAgICAgICBvcyA9IGNzLnM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3NWZXJzaW9uID0gdW5rbm93bjtcclxuICAgICAgICBpZiAoL1dpbmRvd3MvLnRlc3Qob3MpKSB7XHJcbiAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9XaW5kb3dzICguKikvLmV4ZWMob3MpWzFdO1xyXG4gICAgICAgICAgICBvcyA9ICdXaW5kb3dzJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChvcykge1xyXG4gICAgICAgICAgICBjYXNlICdNYWMgT1MgWCc6XHJcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb24gPSAvTWFjIE9TIFggKDEwW1xcLlxcX1xcZF0rKS8uZXhlYyhuQWd0KVsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQW5kcm9pZCc6XHJcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb24gPSAvQW5kcm9pZCAoW1xcLlxcX1xcZF0rKS8uZXhlYyhuQWd0KVsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnaU9TJzpcclxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Ly5leGVjKG5WZXIpO1xyXG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uWzFdICsgJy4nICsgb3NWZXJzaW9uWzJdICsgJy4nICsgKG9zVmVyc2lvblszXSB8IDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYnJvd3NlcjogYnJvd3Nlci50b1N0cmluZygpLCBcclxuICAgICAgICBicm93c2VyTWFqb3JWZXJzaW9uOiBtYWpvclZlcnNpb24udG9TdHJpbmcoKSxcclxuICAgICAgICBicm93c2VyVmVyc2lvbjogdmVyc2lvbi50b1N0cmluZygpLFxyXG4gICAgICAgIG9zOiBvcy50b1N0cmluZygpLFxyXG4gICAgICAgIG9zVmVyc2lvbjogb3NWZXJzaW9uLnRvU3RyaW5nKClcclxuICAgIH1cclxufVxyXG5pZiAodHlwZW9mIChTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZXRlY3QnLCBKU09OLnN0cmluZ2lmeShkZXRlY3RDbGllbnQoKSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGVjdENsaWVudFJlZHVjZXIoc3RhdGUgPSBkZXRlY3RDbGllbnQoKSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8vdGjDqm0gY8OhYyByZWR1Y2VyIGZ1bnRpb24gY+G6p24gxJHGsOG7o2MgY29tYmluZSB2w6BvIMSRw6J5XHJcbmltcG9ydCBTb2NrZXRSZWR1Y2VyIGZyb20gXCIuL3NvY2tldC5qc1wiXHJcbmltcG9ydCBBdXRoIGZyb20gXCIuL2F1dGguanNcIlxyXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL2NvbmZpZy5qc1wiXHJcbmltcG9ydCBEZXRlY3QgZnJvbSBcIi4vZGV0ZWN0LmpzXCJcclxuaW1wb3J0IENvbnZlcnRhdGlvbiBmcm9tIFwiLi9jb252ZXJ0YXRpb24uanNcIlxyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9tZXNzYWdlLmpzXCJcclxuLy8vLyBraOG7n2kgdOG6oW8gMSBiaeG6v24gYmnhu4N1IGRp4buFbiBSRURVQ0VSIEFMTCBcclxuY29uc3QgUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBcclxuICAgIHNvY2tldCAgICAgIDogU29ja2V0UmVkdWNlcixcclxuICAgIGF1dGggICAgICAgIDogQXV0aCxcclxuICAgIGNvbmZpZyAgICAgIDogQ29uZmlnLFxyXG4gICAgZGV0ZWN0ICAgICAgOiBEZXRlY3QsXHJcbiAgICBjb252ZXJ0YXRpb246IENvbnZlcnRhdGlvbixcclxuICAgIG1lc3NhZ2UgICAgIDogTWVzc2FnZVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgUmVkdWNlcjsiLCJcclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFRZUEUuTUVTU0FHRS5TRVRURVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVFlQRSBmcm9tICcuLi9hY3Rpb24vdHlwZS5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2tldFJlZHVjZXIoc3RhdGUgPSBudWxsICwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLlNPQ0NLRVQuU0VUVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9