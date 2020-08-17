'use strict'


var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

const UserSchema = new Schema(
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
        period: {
            type : Date
        },
        token: {
            type: String,
            required: [ true, 'Token is required' ]
        },
    }, {
    timestamps: true
})

UserSchema.pre('save', function (next) {
    
    this.period = new Date
    return next()
})

module.exports = mongoose.model("user", UserSchema)