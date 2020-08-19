import { socketListenner } from "./socketListenner"
import { setterSocket, setterConvertation, setterMessage  } from "../action"

const CONFIG = CONFIG_APP
var socket = null

export function saveAuthLocalStorage (auth) {
    localStorage.setItem('auth', JSON.stringify(auth))
}


export function socketInitialConnect(socketIOClient, instanceApp) {

    socket = socketIOClient(CONFIG.url_realtime)
    var ApplicationDom = document.getElementById("Application")
    socket.on('connect', function () {

        ApplicationDom && ApplicationDom.classList.remove("connect-socket-error")
        //// set config
        socketListenner(socket, instanceApp)
        instanceApp.props.dispatch(setterSocket(socket))
    });
    socket.on('disconnect', function () {
        instanceApp.props.dispatch(setterSocket(null))
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
    });
    socket.on('connect_error', function () {
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
    });
}


export function fetchAPIChannels( token, component ){

    var action = component.props.config.url_realtime + "/api/channels"
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
                        
                        var convertation = { ...conv.user, userId: conv.user._id, _id: conv._id }
                        
                        var message = {
                            _id: conv._id,
                            message_data: conv.message
                        }
                        convertations.push(convertation)
                        messages.push(message)
                    })
                    component.props.dispatch(setterConvertation( convertations ))
                    component.props.dispatch(setterMessage( messages ))
                }
            }
        })
        .catch(error => {
            
            console.log( error )
        })
}