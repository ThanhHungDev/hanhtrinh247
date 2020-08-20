const CONFIG = require("../config")


module.exports.createChannelName = ( userID, adminID ) => {
    
    return CONFIG.CHANNEL.DF_NAME_SINGLE + "-" + userID + "-" + adminID
}