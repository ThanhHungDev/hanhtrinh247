var io,
CONFIG      = require("../config"),
mongoose    = require("mongoose"),
TokenAccess = require("../model/TokenAccess"),
Message     = require("../model/Message"),
Channel     = require("../model/Channel"),
EVENT       = CONFIG.EVENT

module.exports = function(_io) {
    io = _io
    socketConnecting()
};

function socketConnecting(){

    io.sockets.on( EVENT.CONNECTTION ,function(socket){ 

        console.log("have connect: " + socket.id + " " + EVENT.REQUEST_GET_CHANEL);
        
        try {
            disconnect(socket)
            sendMessageChat(socket)
            joinChannel(socket)
        } catch (err) {
            console.log( err )
        }
        ////////////////////////////////////////////////////////
    })
}

function disconnect(socket){
    socket.on( EVENT.DISCONNECT, function () {
        
        console.log( EVENT.DISCONNECT + " đang set user không online")
        socket.leaveAll()
    })
}


function sendMessageChat(socket){
    socket.on( EVENT.SEND_MESSAGE, data => {
        
        /// variable input
        var { message, style, token, user, channel_id } = data

        Promise.all([
            TokenAccess.findOne({ token, user: mongoose.Types.ObjectId(user) }),
            Channel.findOne({ _id: mongoose.Types.ObjectId(channel_id), user: mongoose.Types.ObjectId(user) })
        ]).then(([ access, channel ])=>{
            if(!access){
                console.log("send message to socket fail access", data)
                throw { status: 302, message: "lỗi xác thực người dùng" }
            }
            if( !channel ){
                console.log("send message to socket fail channel", data)
                throw { status: 404, message: "lỗi xác thực người dùng" }
            }
            saveMessage(user, message, style, channel._id)
            
            var response = { 
                _id: channel._id,
                token: access.token,
                message_data: {
                    content: message,
                    createdAt: new Date,
                    read: true,
                    style: style,
                    user: user,
                    _id: "UNSET"
                }
            }
            io.in(channel.name).emit(EVENT.RESPONSE_MESSAGE, response)
        })
        .catch( error => {
            console.log( error )
            socket.emit(EVENT.RESPONSE_MESSAGE_ERROR, error)
        })
    })
}

function joinChannel( socket ){
    socket.on(EVENT.JOIN_CHANNEL, auth => {
        
        Promise.all([
            Channel.find({ user: mongoose.Types.ObjectId(auth._id) }),
            TokenAccess.findOne({ token: auth.token, user: mongoose.Types.ObjectId(auth._id)})
        ]).then(([ channels, access ]) => {
            if(access){
                channels.forEach(function(channel){
                    socket.join( channel.name )
                })
            }
            console.log(io.sockets.adapter.rooms)
        })
    })
}

function saveMessage(userId, message, style, channelId){
    new Message({
        user : userId,
        content: message,
        channel: channelId,
        style
    }).save()
    .catch( err => { console.log(err, "save message error") })
}