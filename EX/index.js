const fs   = require('fs'),
      path = require('path')

/// library
var http       = require('http'),
    https      = require('https'),
    express    = require('express'),
    bodyParser = require('body-parser'),
    session    = require('express-session'),
    cors       = require('cors'),
    rateLimit  = require("express-rate-limit"),
    helmet     = require("helmet"),
    connection = require("./library/connect-mongo"),
    socket     = require('socket.io'),
    i18n       = require("i18n")

// Create global app object
var app = express()
require('dotenv').config()


/// my define
const CONFIG        = require('./config')
const PORT          = process.env.PORT || parseInt(CONFIG.SERVER.PORT)
const DOMAIN        = CONFIG.SERVER.ASSET()
const IS_PRODUCTION = CONFIG.IS_ENVIROMENT_PRODUCT

//// ============== begin config app ===================
!IS_PRODUCTION && app.use(cors())
// Normal express config defaults
app.use(require('sanitize').middleware)

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))

app.use(session({
            secret: 'hungtt',
            cookie: {
                maxAge: 60000
            },
            resave: false,
            saveUninitialized: false
        }))

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 2000, // start blocking after 5 requests
    message: "Too many accounts created from this IP, please try again after an hour"
})
    
app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.use(limiter)
app.use(helmet())
app.use(i18n.init)
i18n.configure({
    locales:['jp', 'vi'],
    directory: __dirname + '/locale',
    cookie: 'language',
})
//// ============== end config app ===================

/// setting directeries asset root 
app.use(cors());
/// view engine
app.set('view engine', 'ejs')
app.set('views', './view')

/// listener server
var options = {
    key: fs.readFileSync(path.join(__dirname, 'create-ssl/server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'create-ssl/server.crt'))
};
var server = null
if(PORT == 443){
    server = https.createServer(options, app)
    
}else{
    server = http.createServer(app)
    
}
const io     = socket(server)
server.listen(PORT,  () => {
    require("./library/socket-event")(io)
    console.log(`server run: ${DOMAIN}`)
})
/// set middleware api
app.use("/", [  require('./middleware').setAllowOrigin ])
app.use("/api", [ require('./middleware').formatJsonApi ])
/// set root api
app.use("/api", require('./route/api'))
var debug = "debug";
// // respond with "hello world" when a GET request is made to the homepage
app.get('/test', function (req, res) {
    res.send('hello world')
})