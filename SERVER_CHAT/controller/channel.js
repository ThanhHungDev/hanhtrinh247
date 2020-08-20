var Channel     = require("../model/Channel"),
    TokenAccess = require("../model/TokenAccess"),
    Message     = require("../model/Message"),
    CONFIG      = require("../config")

 
module.exports.channels = function( req, res ){

    // var token = req.params.token
    var token = req.query.token
    var response = {}
    response.message          = "チャンネル成功"
    response.internal_message = "チャンネル成功"
    
    TokenAccess.findOne({ token }).then( tokenAccess => {
        if(!tokenAccess){
            return false
        }
        
        Channel.getChannelMessageChat( tokenAccess.user ).then( data => {
            
            response.data = {
                channels: data
            }
            return res.status(200).json(response)
        })  
    })
}

