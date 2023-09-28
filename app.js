// DEBUGER AND LISTENER APP
console.log('====================DEBUG====================')


// EXPRESS IMPORT
const express = require('express')
const app = express ()
const port = 3000

// FLASH MESSAGE
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    secret : "secret",
    saveUninitialized : true,
    resave : true
}));
app.use(flash())

// COOKIE

const cookie = require('cookie-parser')
app.use(cookie());


// EXPRESS JS CONFIGURE
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`public`))


// EJS CONFIGURE
app.set('view engine' , 'ejs')
app.set('views' , `${__dirname}/public`)


// ROOT
require('./app.routes')(app , express)

// NOT FOUND PAGE
app.use('/' , function (req , res , next) {
    res.status(404)
    res.send('<h1>404</h1><p>FILE NOT FOUND</p>')
})

console.log('=============================================')
app.listen( port , function () {
    console.log('Server runing on http://localhost:3000/')
}) 