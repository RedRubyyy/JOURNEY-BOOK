// LOCAL UTILS
const vl = require('./utils/validation')

module.exports = async (app , express) => {
    const Router = express.Router()

    Router.get('/' , (req , res) => {
        res.render('index.ejs')
    })

    Router.get('/user-gateway' , (req , res) => {
        res.render('form.ejs' , {message : req.flash('message')})
    })

    Router.post('/user-gateway-post' , (req , res) => {
        const keys = Object.keys(req.body);
        const uname = keys.includes('username');
        const uniwd = keys.includes('uniword');
        if (uname && uniwd) {
            const result = vl.clientValidation(req.body);
            req.flash('username' , req.body.username);
            req.flash('uniword' , req.body.uniword);
            result.status
                ? "escape"
                : req.flash('message' , result.message);
            
            result.status 
                ? res.redirect('/journey-book') 
                : res.redirect('/user-getway' );
        } else {
            res.send('KAMU COBA APASIH WIR :)');
        }
    })

    Router.post('/admin-login-post' , (req , res) => {
        res.json(req.body)
    })

    Router.get('/journey-book' , (req , res) => {
        res.render('jb.ejs' , {
            user : req.flash('username') ,
            uniword : req.flash('uniword')
        });
    })
    app.use("/" , Router)
}