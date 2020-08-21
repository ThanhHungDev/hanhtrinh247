var EVENT = CONFIG_EVENT
import { addMessage } from "../action"
export function socketListenner( socket, instanceApp ){

    socket.on(EVENT.RESPONSE_MESSAGE, message => {
        console.log("đã vào " + EVENT.RESPONSE_MESSAGE, message)
        
        var auth = instanceApp.props.auth
        if( message.token != auth.token ){
            message.message_data._id = auth._id
            instanceApp.props.dispatch( addMessage( message ))
        }
    })
    
}