/* polyfills.js */
// import 'babel-polyfill'
// import 'react-app-polyfill/ie11'
import 'core-js'
///for ie9 
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';
import 'core-js/es/parse-int';
import 'core-js/es/parse-float';
import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/es/date';
import 'core-js/es/array';
import 'core-js/es/regexp';
import 'core-js/es/map';
import 'core-js/es/weak-map';
import 'core-js/es/set';
import 'core-js/es/array';

import 'raf/polyfill';
/// for webpack import
import React from 'react'
import ReactDOM from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './reducer'

import './../../BUILDER/SCSS/chat.scss'

const store = createStore(Reducer);
store.subscribe(function(){
    console.log('có thay đổi trong Redux!!')
    console.log(store.getState());
});

/// my component
import App from './component/App.jsx'
const wrapper = document.getElementById("ROOT");

if (typeof (Storage) !== 'undefined' && wrapper) {
    
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , wrapper)
}else{
    alert("このブラウザでは、アプリケーションは正常に動作しません。 アップグレードしてください")
}

