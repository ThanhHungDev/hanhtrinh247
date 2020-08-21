import TYPE from "./type"
export function setterSocket(socket){
    console.log(socket , " set socket ")
    return {
        type : TYPE.SOCCKET.SETTER,
        payload : socket
    }
}
export function setterAuth( auth ){
    console.log(auth , " set auth ")
    return {
        type : TYPE.AUTH.SETTER,
        payload : auth
    }
}
export function setterConvertation( conv ){
    console.log(conv , " set conv ")
    return {
        type : TYPE.CONVERTATION.SETTER,
        payload : conv
    }
}
export function setterMessage( mess ){
    console.log(mess , " set mess ")
    return {
        type : TYPE.MESSAGE.SETTER,
        payload : mess
    }
}

export function changeActiveConvertation( id ){
    
    console.log(id , "changeActiveConvertation ")
    return {
        type : TYPE.CONVERTATION.CHANGE,
        payload : id
    }
}



export function addMessage( message ){
    console.log(message , " addMessage ")
    return {
        type : TYPE.MESSAGE.ADD_MESSAGE,
        payload : message
    }
}

export function addMessageSendToMe( message ){
    console.log(message , " addMessageSendToMe ")
    return {
        type : TYPE.CHANNEL.ADD_MESSAGE_SEND_TO_ME,
        payload : message
    }
}