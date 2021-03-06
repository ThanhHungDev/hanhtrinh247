'use strict'
require('dotenv').config()

var local      = process.env.ASSET_REALTIME,
    local_ip   = process.env.ASSET_REALTIME_IP,
    local_port = process.env.ASSET_REALTIME_PORT,
    peer_port  = 7000

var CONFIG = {
    SERVER : {
        PORT     : local_port,
        DOMAIN   : local,
        IP       : local_ip,
        PEER_PORT: peer_port,
        PROTOCOL: function(){
            if( local_port == 443 ){
                return "https://"
            }
            return  "http://"
        }, 
        ASSET : () => {
            let port_url = ''
            let protocol = ''
            if( local_port == 443 ){
                protocol = "https://"
            }else{
                protocol = "http://"
                port_url = ':'+ local_port
            }

            return protocol + local + port_url;
        }
    }, 
    MOBILE: "080.3387.0674",
    mailler: {
        email: "managementpartners.hospital@gmail.com",
        password: "mp@123456"
    },
    database : {
        
        mongodb : process.env.DB_MONGO,
    },
    salt : 5,
    IS_ENVIROMENT_PRODUCT : true,
    WEBPUSH: { 
        PUBLIC_KEY: 'BIUnprvdEEntYAgrOBaI_MAaWK8qtRtgfM_RKnSGglsI1NAZUcycI7yJ6YL2ZEoqmKG9dSQ3AtX0-2mS6j_7epE',
        PRIVATE_KEY: 'OAGhOjAuZ5WqNOm7hdqNeo-SSJqGApaXivfY5ps0Eiw'
    },
    EVENT : {
        CONNECTTION              : 'connection',
        DISCONNECT               : 'disconnect',
        SEND_MESSAGE             : 'send-message',
        RESPONSE_MESSAGE         : 'response-message',
        RESPONSE_MESSAGE_ERROR   : 'RESPONSE_MESSAGE_ERROR',
        JOIN_CHANNEL             : "join-channel",

        SEND_TYPING              : "send-typing",
        RESPONSE_TYPING          : 'response-typing',
        USER_ONLINE              : "USER_ONLINE",
        USER_ONLINE_NOTI         : "USER_ONLINE_NOTI",
        USER_OFFLINE_NOTI        : "USER_OFFLINE_NOTI",
        DUPLICATION_TAB          : "DUPLICATION_TAB",
        READ_MESSAGE_ALL         : "READ_MESSAGE_ALL",
        READ_MESSAGE_ALL_RESPONSE: "READ_MESSAGE_ALL_RESPONSE"
    },
    ROLE: {
        
        CONSULTING_WEB: parseInt(process.env.ROLE_CONSULTING_WEB),
        TECHNICAL_SUPPORT: parseInt(process.env.ROLE_TECHNICAL_SUPPORT),
        WEB_REQUEST: parseInt(process.env.ROLE_WEB_REQUEST),
        USER: parseInt(process.env.ROLE_USER)
    },
    DF_MESSAGE: {
        CONSULTING_WEB: process.env.DF_MESSAGE_CONSULTING_WEB,
        TECHNICAL_SUPPORT: process.env.DF_MESSAGE_TECHNICAL_SUPPORT,
        WEB_REQUEST: process.env.DF_MESSAGE_WEB_REQUEST,
    },
    CHANNEL:{
        DF_NAME_SINGLE: "SINGLE"
    },
    AVATAR: "https://ebudezain.com/images/user-avatar.jpg",
}
module.exports = CONFIG;