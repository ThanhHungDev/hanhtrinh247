'use strict'

const CONFIG = require('../config.js');


var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

const ChannelSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Channel Name is required']
        },
        user: [
            {
                type: Schema.Types.ObjectId,
                ref : 'user_account',
                required: [ true, 'User id is required in row Channel' ]
            }
        ],
    }, {
    timestamps: true
})

ChannelSchema.statics.getChannelMessageChat = function( _userId ){
    
    return this
    .aggregate([
        { 
            $match: { user: _userId }
        },
        { 
            $unwind: "$user"
        },
        { 
            $match: { user: { $ne : _userId }}
        },
        {
            $lookup: {
                from: "messages",
                localField: "_id",
                foreignField: "channel",
                as: "message"
            }
        },
        {
            $lookup: {
                from: "user_accounts",
                localField: "user",
                foreignField: "_id",
                as: "user"
            }
        }
    ])
}


module.exports = mongoose.model("channel", ChannelSchema)