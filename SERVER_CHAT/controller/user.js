const Channel     = require("../model/Channel"),
UserAccount = require("../model/UserAccount"),
crypto      = require('crypto'),
TokenAccess = require("../model/TokenAccess"),
CONFIG = require("../config")

var { createChannelName } = require("../library/helper.js")

module.exports.registerChat = function( req, res ){
    var globalUser = null

    var { email, name, mobile, detect } = req.body

    email = email.trim()

    var response = {}
    if(req.error){

        response.message          = "入力エラーがありました"
        response.internal_message = "入力エラーがありました"
        response.errors           = [ req.error ]
        return res.status(422).json(response)
    }
    var tokenAccess = crypto.createHash('md5').update(
        JSON.stringify({ ... detect, time: (new Date).getTime() })
    ).digest('hex')

    UserAccount.findOne({ email })
    .then( user => {
        if( !user ){
            throw Error('user not exist')
        }
        return user._id
    })
    .then( user_id => {
        globalUser = user_id
        return TokenAccess.findOne({  _id: globalUser, detect})
    })
    .then( token_access => {
        if( !token_access ){
            token_access = new TokenAccess({ token : tokenAccess, user: globalUser, detect })
            token_access.save()
        }
        response.message = "tồn tại trong hệ thống"
        response.data    = { userId: globalUser, token: token_access.token }
        return res.status(200).json(response)
    })
    .catch( error => {
        
        var newUserAccount = new UserAccount({ email, name, mobile })
        newUserAccount.save().then(newUser => {
            var newTokenAccess = new TokenAccess({ token : tokenAccess, user  : newUser._id, detect })
            newTokenAccess.save()
            /// create 3 channel 
            var ROLES_ADMIN = [
                parseInt(CONFIG.ROLE.CONSULTING_WEB),
                parseInt(CONFIG.ROLE.TECHNICAL_SUPPORT),
                parseInt(CONFIG.ROLE.WEB_REQUEST)
            ]
            var saveChannel = ROLES_ADMIN.map(_role_id => {
                return UserAccount.findOne({ role_id: _role_id}).then( user => {

                    return user && (new Channel({ 
                        name: createChannelName(newUser._id, user._id), 
                        user: [newUser._id, user._id], 
                        detect 
                    })).save()
                })
            })
            Promise.all(saveChannel).then(channels => {
                response.message = "thêm mới"
                response.data = { userId: newUserAccount._id, token: tokenAccess }
                return res.status(200).json(response)
            })
        })
    })
}

module.exports.registerAdmin = function( req, res ){

    var { email, name, mobile, detect, role_id } = req.body

    email = email.trim()

    var response = {}

    var tokenAccess = crypto.createHash('md5').update(
        JSON.stringify({ ... detect, time: (new Date).getTime() })
    ).digest('hex')

    UserAccount.findOne({ email })
    .then( user => {
        if( user ){
            throw Error('user exist')
        }
        var isRoleAdmin = [
            CONFIG.ROLE.CONSULTING_WEB,
            CONFIG.ROLE.TECHNICAL_SUPPORT,
            CONFIG.ROLE.WEB_REQUEST
        ].some(role => role == role_id)
        if(!isRoleAdmin){
            throw Error('role not exist')
        }
        var newUserAccount = new UserAccount({ email, name, mobile, role_id: parseInt(role_id) })
        newUserAccount.save().then(newUser => {
            var newTokenAccess = new TokenAccess({ token : tokenAccess, user: newUser._id, detect })
            newTokenAccess.save()
            /// create 3 channel
        })
        response.message = "thêm mới admin done"
        return res.status(200).json(response)
    })
    .catch( error => {
        
        response.message = "thêm mới fail: " + error.message
        return res.status(200).json(response)
    })
}
