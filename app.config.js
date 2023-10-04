// DEBUGER AND LISTENER APP
console.log('====================DEBUG====================')
const {connectToDatabase} = require ('./databases/db.connect')


// EXPRESS IMPORT
const express = require('express')
const app = express ()
const PORT = process.cwd.PORT || 3000

// FLASH MESSAGE
const session = require('express-session');
const flash = require('connect-flash');
// FLASH MESSAGE CONFIGURE
const sessionConfig = {
    secret : "secret",
    saveUninitialized : true,
    resave : true
};
app.use(session(sessionConfig));
app.use(flash())

// COOKIE
const cookie = require('cookie-parser')
app.use(cookie());

// EXPRESS JS CONFIGURE
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`public`))

// EJS CONFIGURE
app.set('view engine' , 'ejs')
app.set('views' , `${__dirname}/public/views`);

// MIDLEWARE
app.use(async function (req , res , next) {
    await connectToDatabase()
    next()
})

// ROOT
require('./app.routes')(app , express)

// NOT FOUND PAGE
app.use('/' , function (req , res) {
    res.status(404)
    res.send('<h1>404</h1><p>FILE NOT FOUND</p>')
});

console.log('=============================================')
app.listen( PORT , function () {
    console.log(`Server runing on http://localhost:${PORT}`);
});