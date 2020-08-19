var EVENT = CONFIG_EVENT

export function socketListenner( socket, instanceApp ){

    socket.on(EVENT.RESPONSE_MESSAGE, data => {

        console.log("đã vào " + EVENT.RESPONSE_MESSAGE, data)

        var { user, message, style, attachment, channel, detect } = data 
        var auth        = JSON.parse(localStorage.getItem('auth')),
            localDetect = localStorage.getItem('detect')

        if( auth && auth._id == user && localDetect == detect ) return false
        instanceApp.props.dispatch( addMessageSendToMe({ type: false, content: message, style, attachment, channel }) )
        return false
    })
    socket.on(EVENT.RESPONSE_TYPING, data => {
        console.log("vaof EVENT.RESPONSE_TYPING" + EVENT.RESPONSE_TYPING)
        var { user, channel } = data 
        var auth = JSON.parse(localStorage.getItem('auth'))
        if( auth && auth._id == user ){
            return false
        }
        
        console.log("cos theer show typing ")
        if(timeoutTyping){
            clearTimeout(timeoutTyping)
        }
        var domTyping = document.getElementById("js-typing")
        if(domTyping.getAttribute("channel") == channel)
        domTyping.classList.add("show")
        /// scroll bottom 
        var inputMessage = document.getElementById("js-is-write-message")
        if(inputMessage.classList.contains("writing")){
            document.getElementById('js-scroll-to-bottom').scrollTop  = 
            document.getElementById('js-scroll-to-bottom').scrollHeight
        }
        var timeoutTyping = setTimeout(function() {
            var domTyping = document.getElementById("js-typing")
            if(domTyping.getAttribute("channel") == channel)
            domTyping.classList.remove("show")
        }, 10000);
        return false
    })
    
}