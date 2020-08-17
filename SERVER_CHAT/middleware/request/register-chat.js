const node_validator = require('node-input-validator')

var { Validator } = node_validator


module.exports.VALIDATE_REGISTER_CHAT = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        email : "required",
        name  : "required",
        mobile: "required"
    },{
        'email.required' : "userId is required",
        'name.required'  : "Refesh is valid",
        'mobile.required': "Password is required"
    });
     
    var matched = await validate.check()
    if (!matched) {
        req.error = validate.errors
    }
    next();
}