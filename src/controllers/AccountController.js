const connection = require('../connection_database/connector.js');

class accountController {
    async index(req, res, next){
        if( JSON.stringify(req.oidc.user, null, 2) != undefined)
        {
        }
        res.redirect('/');
    }

    async profile(req, res, next){
        res.render('profile', {
            userProfile: JSON.stringify(req.oidc.user, null, 2),
            title: 'Profile'
          });
    }
}

module.exports = new accountController;