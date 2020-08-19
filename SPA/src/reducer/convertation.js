
import TYPE from "../action/type.js"

export default function (state = [], action) {
    switch (action.type) {
        
        
        case TYPE.CONVERTATION.SETTER:
            return action.payload
        
        case TYPE.CONVERTATION.CHANGE: 
            return state.map( item => {
                if(item._id === action.payload) {
                    return { ...item, isActive : true }
                }
                return { ...item, isActive : false }
            })
            
        default:
            return state;
    }
}