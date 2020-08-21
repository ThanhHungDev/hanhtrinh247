const CONFIG = require("../config"),
nodemailer = require('nodemailer')

module.exports.createChannelName = ( userID, adminID ) => {
    
    return CONFIG.CHANNEL.DF_NAME_SINGLE + "-" + userID + "-" + adminID
}


module.exports.mailler = function( email, subject, html ){
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: CONFIG.mailler.email,
            pass: CONFIG.mailler.password
        }
    });
    var mailOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: CONFIG.mailler.email,
        to: email,
        subject: subject,
        html: html
    }

    transporter.sendMail(mailOptions, function(err, info){
        if( err ){
            console.log(err)
        }
        console.log("send maill " + email )
    })
}