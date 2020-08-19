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
        payload : { auth }
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