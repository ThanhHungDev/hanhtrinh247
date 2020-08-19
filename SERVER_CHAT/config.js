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
    mailler: {
        email: "jbtruongthanhhung@gmail.com",
        password: "...."
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
        DISCONNECT               : 'disconnect'
    },
    ROLE: {
        
        CONSULTING_WEB: parseInt(process.env.ROLE_CONSULTING_WEB),
        TECHNICAL_SUPPORT: parseInt(process.env.ROLE_TECHNICAL_SUPPORT),
        WEB_REQUEST: parseInt(process.env.ROLE_WEB_REQUEST),
        USER: parseInt(process.env.ROLE_USER)
    }
}
module.exports = CONFIG;