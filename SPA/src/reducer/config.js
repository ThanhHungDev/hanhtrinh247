
if (typeof CONFIG_APP == 'undefined') {
    const CONFIG_APP = null
}

import TYPE from "../action/type.js";
export default function (state = CONFIG_APP, action) {
    switch (action.type) {
        case TYPE.CONFIG.SETTER_CONFIG:
            return action.payload
        default:
            return state;
    }
}