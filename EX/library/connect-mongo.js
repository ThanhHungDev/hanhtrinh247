var mongoose = require("mongoose"),
    CONFIG = require("../config");
const UserAccount = require("../model/UserAccount");
    

var IS_PRODUCTION = CONFIG.IS_ENVIROMENT_PRODUCT

/// connect mongodb
mongoose.connect(CONFIG.database.mongodb, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    }
)
!IS_PRODUCTION && mongoose.set('debug', true)
mongoose.set('useFindAndModify', true);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connected ' + CONFIG.database.mongodb);

    UserAccount.findOne({ email: "truongpham260620@gmail.com" }).then(user => {
        if(!user){
            throw Error('không tìm thấy user')
        }
        console.log("mongo đã tồn tại admin")
    }).catch(err => {
        var isRoleAdmin = [
            { 
                email: "phamthithuhuong.web@gmail.com", 
                name: "Webリクエストを送信", 
                mobile: CONFIG.MOBILE, 
                role_id: parseInt(CONFIG.ROLE.WEB_REQUEST), 
                slug: "submit-web-request" 
            },
            { 
                email: "thanhhung.code@gmail.com", 
                name: "技術サポート", 
                mobile: CONFIG.MOBILE, 
                role_id: parseInt(CONFIG.ROLE.TECHNICAL_SUPPORT), 
                slug: "technical-support" 
            },
            { 
                email: "truongpham260620@gmail.com", 
                name: "コンサルティングウェブデザイン", 
                mobile: CONFIG.MOBILE, 
                role_id: parseInt(CONFIG.ROLE.CONSULTING_WEB), 
                slug: "consulting-web-design" 
            }
        ]
        var admins = isRoleAdmin.map( admin => new UserAccount(admin).save())
        Promise.all(admins).then( admins => console.log("thêm mới admin xong "))
    })
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function () {
    console.log('Mongoose default connection is open');
    console.log('===================================');
    
});
