const node_validator = require('node-input-validator')

var { Validator } = node_validator


module.exports.VALIDATE_REGISTER_CHAT = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        email : "required",
        name  : "required",
        mobile: "required"
    },{
        'email.required' : "Email is required",
        'name.required'  : "Name is valid",
        'mobile.required': "Mobile is required"
    });
     
    var matched = await validate.check()
    if (!matched) {
        req.error = validate.errors
    }
    next();
}

