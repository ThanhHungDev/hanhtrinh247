var io,
CONFIG      = require("../config"),
mongoose    = require("mongoose"),
TokenAccess = require("../model/TokenAccess"),
Message     = require("../model/Message"),
Channel     = require("../model/Channel"),
EVENT       = CONFIG.EVENT
// listSocket = []

module.exports = function(_io) {
    io = _io
    socketConnecting()
};

function socketConnecting(){

    io.sockets.on( EVENT.CONNECTTION ,function(socket){ 

        console.log("have connect: " + socket.id + " " + CONFIG.EVENT.REQUEST_GET_CHANEL);
        
        try {
            disconnect(socket)
        } catch (err) {
            console.log( err )
        }
        ////////////////////////////////////////////////////////
    })
}

function disconnect(socket){
    socket.on( EVENT.DISCONNECT, function () {
        var idUserDisconnect = 0
        // listSocket.splice( listSocket.indexOf(socket.id), 1 )
        console.log( EVENT.DISCONNECT + " đang set user không online")
        socket.leaveAll()
    })
}

