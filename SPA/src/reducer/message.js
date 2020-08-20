
import TYPE from "../action/type.js"

export default function (state = [], action) {
    switch (action.type) {
        
        case TYPE.MESSAGE.SETTER:
            return action.payload
        
        case TYPE.MESSAGE.ADD_MESSAGE:
            return state.map( message => {
                if(message._id === action.payload._id) {
                    return { ...message, message_data: [ ...message.message_data, action.payload.message_data] }
                }
                return message
            })
        default:
            return state;
    }
}