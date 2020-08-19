var auth = null
if (typeof(Storage) !== 'undefined') {
    auth = JSON.parse(localStorage.getItem('auth'))
}

import TYPE from "../action/type.js";
export default function (state = auth, action) {
    switch (action.type) {
        case TYPE.AUTH.SETTER:
            return action.payload
        default:
            return state;
    }
}