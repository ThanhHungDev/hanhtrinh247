/**
 * define
 */
var express               = require('express')
var router                = express.Router()


var { registerChat }                       = require("../controller/user"),

    { VALIDATE_REGISTER_CHAT }              = require("../middleware/request/register-chat")
    


router.post('/register-chat', [ VALIDATE_REGISTER_CHAT ], registerChat)

module.exports = router