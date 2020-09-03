import { socketListenner } from "./socket_listenner"
import { setterSocket, setterConvertation, setterMessage, setterAuth, changeActiveConvertation } from "../action"
import { addMessage } from "../action"
import socketIOClient from "socket.io-client"

const CONFIG = CONFIG_APP,
EVENT = CONFIG_EVENT
var socket = null


export function socketInitialConnect(socketIOClient, instanceApp) {
    console.log(CONFIG.url_realtime)
    socket = socketIOClient(CONFIG.url_realtime)
    var ApplicationDom = document.getElementById("Application")
    socket.on('connect', function () {

        ApplicationDom && ApplicationDom.classList.remove("connect-socket-error")
        //// set config
        socketListenner(socket, instanceApp)
        instanceApp.props.dispatch(setterSocket(socket))
        /// joinRoomInit
        joinRoomInit(instanceApp.props.auth)
    });
    socket.on('disconnect', function () {
        instanceApp.props.dispatch(setterSocket(null))
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
        window.location.href = CONFIG.asset
    });
    socket.on('connect_error', function () {
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
        window.location.href = CONFIG.asset
    });
}

export function joinRoomInit(auth){

    socket.emit(EVENT.JOIN_CHANNEL, auth)
}


export function fetchAPIChannels( option, component ){

    var { match } = component.props,
    slug = null, 
    convertationIdActive = null
    if( match ){
        slug = match.params.slug
    }

    var action = component.props.config.url_realtime + "/api/channels?"
    if( option._id ){
        action += "&id=" + option._id
    }
    if( option.email ){
        action += "&email=" + option.email
    }
    if( option.mobile ){
        action += "&mobile=" + option.mobile
    }
    console.log(action)
    fetch(action, {
        method: "GET",
        dataType: "JSON",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => { 
        
        if (!resp.ok) {
            return resp.json().then((data) => {
                throw { message: data.message, status: resp.status, error: data.errors }
            })
        }
        return resp.json() 
    })
    .then( response => {
        
        if( response.data ){
            var convertations = [],
            messages = []

            if( response.data.channels ){
                
                response.data.channels.map(conv => {
                    
                    var convertation = { 
                        ...conv.user[0], 
                        user_id: component.props.auth._id, 
                        _id: conv._id 
                    }
                    if( slug && convertation.slug == slug){
                        convertationIdActive = convertation._id
                    }
                    
                    var message = {
                        _id: conv._id,
                        message_data: conv.message || []
                    }
                    convertations.push(convertation)
                    messages.push(message)
                })
                component.props.dispatch(setterConvertation( convertations ))
                component.props.dispatch(setterMessage( messages ))
                convertationIdActive && component.props.dispatch(changeActiveConvertation(convertationIdActive))
                
                socketInitialConnect(socketIOClient, component )
            }
            if( response.data.token ){
                var auth = component.props.auth
                auth.token = response.data.token
                component.props.dispatch(setterAuth( auth ))
            }
        }
    })
    .catch(error => {
        
        localStorage.setItem('auth', null)
        component.props.dispatch(setterAuth( null ))
    })
}



export function send( message ){
    var { message, style, token, user, channel_id, component } = message
    message = message.replace(/(\n\s*?\n)\s*\n/, '$1')
    
    socket.emit(EVENT.SEND_MESSAGE, { message, style, token, user, channel_id })
    component.props.dispatch(
        addMessage(
            { _id: channel_id, message_data:{type: true, read: true, content: message, style, token, user}}
        )
    )
}