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
    period: {
        type : Date
    },
    detect : { 
        type    : String
    }
},{ 
    capped: true, size: 200 
})
TokenAccessSchema.pre('save', function (next) {
    
    this.period = new Date
    return next()
})
module.exports = mongoose.model("token_access", TokenAccessSchema)