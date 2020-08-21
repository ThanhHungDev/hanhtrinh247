
import TYPE from "../action/type.js"

var messages = []
if (typeof(Storage) !== 'undefined') {
    var DataStringMessages = localStorage.getItem('messages')
    if( DataStringMessages ){
        
        messages = JSON.parse(DataStringMessages)
    }
}

export default function (state = messages, action) {
    switch (action.type) {
        
        case TYPE.MESSAGE.SETTER:
            return action.payload
        
        case TYPE.MESSAGE.ADD_MESSAGE:
            var messages = state.map( message => {
                if(message._id === action.payload._id) {
                    return { ...message, message_data: [ ...message.message_data, action.payload.message_data] }
                }
                return message
            })
            return messages
        default:
            return state;
    }
}