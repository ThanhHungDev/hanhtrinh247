import TYPE from '../action/type.js';
export default function SocketReducer(state = null , action) {
    switch (action.type) {
        case TYPE.SOCCKET.SETTER:
            return action.payload
        default:
            return state;
    }
}