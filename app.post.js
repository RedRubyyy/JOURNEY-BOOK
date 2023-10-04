const vl = require('./utils/data.validation')
const {saveData} = require('./utils/db.controll')
const {createCookie} = require('./utils/cookie.create')

exports.userLogin = (req , res , database) => {
    const keys = Object.keys(req.body);
    const keyValidation = keys.includes('username') && keys.includes('password');

    if (keyValidation) {
     const loginValidation = vl.validationOn(database , 'client-login');
     const result = loginValidation(req.body);
    
        if (result.status) {
          req.flash('username' , req.body.username);
          req.flash('uniword' , req.body.uniword);
          res.redirect('/main');
        } else {
          req.flash('message-in' , result.message);
          res.redirect('/user-gateway-login' );
        }
    } 
    else {res.send('KAMU COBA APASIH WIR :)');}
}

exports.userSignup = (req , res ,  database) => {
  const keys = Object.keys(req.body);
  const keyValidation = 
    keys.includes('username') && 
    keys.includes('password') &&
    keys.includes('uniword');
  if (keyValidation) {
    const signupValidation = vl.validationOn(database , 'client-signup');
    const result = signupValidation(req.body);
    console.log(result)
      if (result.status) {
        req.body.cookie = createCookie(database);
        req.flash('cookie' , req.body.cookie);
        req.flash('username' , req.body.username);
        req.flash('uniword' , req.body.uniword);
        
        saveData(req.body)
        res.redirect('/main');
      } else {
        req.flash('message-up' , result.message);
        res.redirect('/user-gateway-signup');
      }
  } else {
    res.send("APASIH WIR");
  }
}