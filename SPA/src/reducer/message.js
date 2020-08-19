
import TYPE from "../action/type.js"

export default function (state = [], action) {
    switch (action.type) {
        
        case TYPE.MESSAGE.SETTER:
            return action.payload
        

        default:
            return state;
    }
}