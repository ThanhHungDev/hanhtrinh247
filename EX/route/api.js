/**
 * define
 */
var express               = require('express')
var router                = express.Router()


var { registerChat, registerAdmin } = require("../controller/user"),
    { channels } = require("../controller/channel"),

    { VALIDATE_REGISTER_CHAT } = require("../middleware/request/register-chat")
    

router.post('/register-admin', registerAdmin)
router.post('/register-chat', [ VALIDATE_REGISTER_CHAT ], registerChat)
router.get('/channels', channels)

module.exports = router