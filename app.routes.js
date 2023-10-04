// LOCAL UTILS
const vl = require('./utils/data.validation')
const post = require('./app.post.js')

// DATABASES
const {connectToDatabase , models , connection} = require('./databases/db.connect')
const {Client , Admin} = models;
// MAIN FUNCTION
module.exports = async (app , express) => {
    const Router = express.Router()
    Router.get('/' , (req , res) => {
        res.render('index.ejs')
    });
    Router.get('/user-gateway-login' , (req , res) => {
        res.render('login.ejs' , {
            messageIn : req.flash('message-in'),
        })
    });
    Router.get('/user-gateway-signup' , (req , res) => {
        res.render('sign.ejs' , {
            messageUp : req.flash('message-up')
        })
    });
    Router.post('/user-login-processing' , async (req , res) => {
        const database = await Client.find()
            .catch(error => console.error(error.message));
        post.userLogin(req , res , database)
    });

    Router.post('/user-sign-processing' , async (req , res) => {
        const database = await Client.find()
            .catch(error => console.error(error.message));
        post.userSignup(req , res , database)
    });

    Router.get('/main' , (req , res) => {
        const sendVar = {
            user : req.flash('username') ,
            uniword : req.flash('uniword'),
            cookie : req.flash('cookie')
        }
        res.render('main.ejs' , sendVar);
    })
    app.use("/" , Router);    
};