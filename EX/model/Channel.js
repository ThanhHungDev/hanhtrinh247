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

ChannelSchema.statics.getChannelMessageByCondition = function( condition ){

    var query = []
    if( condition.user ){
        query.push({ $match: { user: condition.user } })
    }
    if( condition.unwind ){
        query.push({ $unwind: condition.unwind })
    }
    if( condition.ignore ){
        query.push({ $match: { user: { $ne : condition.ignore }} })
    }

    if( condition.query_message ){
        query.push({ 
            $lookup: {
                from: "messages",
                localField: "_id",
                foreignField: "channel",
                as: "message"
            }
        })
    }
    if( condition.query_user_account ){
        query.push({ 
            $lookup: {
                from: "user_accounts",
                localField: "user",
                foreignField: "_id",
                as: "user"
            }
        })
    }
    
    return this.aggregate(query)
}


module.exports = mongoose.model("channel", ChannelSchema)