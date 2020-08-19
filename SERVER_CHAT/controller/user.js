const Channel     = require("../model/Channel"),
UserAccount = require("../model/UserAccount"),
crypto      = require('crypto'),
TokenAccess = require("../model/TokenAccess"),
CONFIG = require("../config")

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
            UserAccount.findOne({ role_id: parseInt(CONFIG.ROLE.CONSULTING_WEB)}).then( user => {
                user && (new Channel({ user: [newUser._id, ], detect })).save()
            })
            UserAccount.findOne({ role_id: parseInt(CONFIG.ROLE.TECHNICAL_SUPPORT)}).then( user => {
                user && (new Channel({ user: [newUser._id, ], detect })).save()
            })
            UserAccount.findOne({ role_id: parseInt(CONFIG.ROLE.WEB_REQUEST)}).then( user => {
                user && (new Channel({ user: [newUser._id, ], detect })).save()
            })
        })
        response.message = "thêm mới"
        response.data = { userId: newUserAccount._id, token: tokenAccess }
        return res.status(200).json(response)
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



module.exports.channels = function( req, res ){

    var response = {}
    response.message          = "チャンネル成功"
    response.internal_message = "チャンネル成功"
    response.data           = {
        online: [],
        channels: [
            {
                _id: "channel1",
                user: {
                    _id: "534535345435",
                    name: "quản trị viên web",
                    avatar: "http://babysitter.trust-growth.co.jp/storage/uploads/avatars/thumbnail/1597294935img_avatar2.png",
                    mobile: "435435435",
                    email: "buitoan0405@gmail.com",
                    role_id: 1
                },
                message: [
                    {
                        attachment: [],
                        content: "利用者が選んだ日付：↵2020/08/02 家事代行↵",
                        createdAt: "2020-07-29T06:51:54.963Z",
                        read: false,
                        style: "",
                        sender_id: "534535345435",
                        _id: "5f211c8a54c6bd55c9c7ca67",
                    },
                    {
                        attachment: [],
                        content: "利用者が選んだ日付事代行 sdfgfdsgsdgsdg",
                        createdAt: "2020-07-29T06:51:54.963Z",
                        read: false,
                        style: "",
                        sender_id: "53455435",
                        _id: "5f211c8a54c6bd55c9c7ca67",
                    }
                ],
            },
            {
                _id: "channel2",
                user: {
                    _id: "5345356345435",
                    name: "quản trị viên tư vấn web",
                    avatar: "http://babysitter.trust-growth.co.jp/storage/uploads/avatars/thumbnail/1597294935img_avatar2.png",
                    mobile: "435435435",
                    email: "phamthithuhuong@gmail.com",
                    role_id: 2
                },
                message: [
                    {
                        attachment: [],
                        content: "利用者が選んだ日付：↵2020/08/02 家事代行↵",
                        createdAt: "2020-07-29T06:51:54.963Z",
                        read: false,
                        style: "",
                        sender_id: "53453563454354",
                        _id: "5f211c8a54c6bd55c9c7ca67",
                    },
                    {
                        attachment: [],
                        content: "利用者が選んだ日付事代行 sdfgfdsgsdgsdg",
                        createdAt: "2020-07-29T06:51:54.963Z",
                        read: false,
                        style: "",
                        sender_id: "5345356345435",
                        _id: "5f211c8a54c6bd55c9c7ca67",
                    }
                ],
            },
            {
                _id: "channel3",
                user: {
                    _id: "53453534545",
                    name: "quản trị viên chăm sóc khách hàng",
                    avatar: "http://babysitter.trust-growth.co.jp/storage/uploads/avatars/thumbnail/1597294935img_avatar2.png",
                    mobile: "435435435",
                    email: "thanhhung@gmail.com",
                    role_id: 3
                },
                message: [
                    {
                        attachment: [],
                        content: "利用者が選んだ日/02 家事代行↵",
                        createdAt: "2020-07-29T06:51:54.963Z",
                        read: false,
                        style: "",
                        sender_id: "53453534545",
                        _id: "5f211c8a54c6bd55c9c7ca67",
                    },
                    {
                        attachment: [],
                        content: "利用者が選んだ日付事代行 sdfgfdsgsdgsdg",
                        createdAt: "2020-07-29T06:51:54.963Z",
                        read: false,
                        style: "",
                        sender_id: "53453534545fdg",
                        _id: "5f211c8a54c6bd55c9c7ca67",
                    }
                ],
            }
        ]
    }
    return res.status(200).json(response)
}