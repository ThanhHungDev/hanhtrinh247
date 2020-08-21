var Channel     = require("../model/Channel"),
    TokenAccess = require("../model/TokenAccess"),
    UserAccount = require("../model/UserAccount"),
    Message     = require("../model/Message"),
    crypto      = require('crypto'),
    CONFIG      = require("../config"),
    mongoose    = require("mongoose")
const { Promise } = require("mongoose")
const { Resolver } = require("dns")

 
module.exports.channels = function( req, res ){

    var { id, email, mobile } = req.query
    var response = {}
    response.message          = "チャンネル成功"
    response.internal_message = "チャンネル成功"

    email = email.trim()
    var tokenAccess = crypto.createHash('md5').update(
        JSON.stringify({ email, time: (new Date).getTime() })
    ).digest('hex')


    return Promise.all([
        UserAccount.findOne({ email }),
        (new TokenAccess({ token: tokenAccess, user: mongoose.Types.ObjectId(id) })).save(),
        UserAccount.findOne({ email, mobile })
    ]).then(([user, access, userVerify ]) => {
        if( !user ){
            throw { status: 404, message: "user not found" }
        }
        if(user._id.toString() != id ){
            throw { status: 404, message: "dữ liệu sai" }
        }
        

        var condition = {
            user: user._id,
            unwind: "$user",
            ignore: user._id,
            query_message: userVerify._id.toString() == user._id.toString(),
            query_user_account: true
        }
        return Promise.all([
            Channel.getChannelMessageByCondition( condition ),
            Promise.resolve(access.token)
        ])
    })
    .then( ([ data, token ]) => {
            
        response.data = { channels: data, token }
        return res.status(200).json(response)
    })
    .catch( err => {
        
        return res.status(500).json(response)
    })
}

