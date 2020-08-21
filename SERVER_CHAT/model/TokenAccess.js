var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    CONFIG   = require("../config")

const TokenAccessSchema = new Schema({
    
    token: {
        type: String,
        required: [ true, 'Token is required' ]
    },
    user: { 
        type: Schema.Types.ObjectId,
        required: [ true, 'User id is required in row Token Access' ]
    },
    // expireAt: {
    //     type: Date,
    //     default: Date.now,
    //     index: { expires: '5m' },
    // },
},{ 
    capped: true, size: 200 
})
module.exports = mongoose.model("token_access", TokenAccessSchema)