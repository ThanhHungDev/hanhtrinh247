const CONFIG = require('../config.js')

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

const MessageSchema = new Schema(
    {
        channel : {
            type: Schema.Types.ObjectId,
            ref : 'channel'
        },
        user: { 
            type: Schema.Types.ObjectId,
            required: [ true, 'Message of user is required' ]
        },
        content: {
            type: String,
            required: [ true, 'Body message is required' ]
        },
        read: {
            type: Boolean,
            default: false
        },
        style : {
            type: String
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("message", MessageSchema)


