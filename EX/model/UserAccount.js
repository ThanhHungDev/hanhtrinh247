'use strict'


var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    CONFIG = require('../config.js')

const UserAccountSchema = new Schema(
    {
        
        name: {
            type: String,
            required: [true, 'User Name is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required']
        },
        mobile: {
            type: String,
            required: [true, 'Mobile is required']
        },
        avatar: {
            type: String,
            default: CONFIG.AVATAR
        },
        role_id: {
            type: Number,
            default: CONFIG.ROLE.USER
        },
        slug: {
            type: String
        },
        accessToken: {
            type: String
        },
        userID: {
            type: String
        },
        type: {
            type: String
        },
    }, {
    timestamps: true
})
UserAccountSchema.pre('save', function (next) {
    if(!this.slug){
        this.slug = this.mobile
    }
    return next()
})

module.exports = mongoose.model("user_account", UserAccountSchema)