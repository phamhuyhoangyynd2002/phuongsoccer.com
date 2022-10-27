const connection = require('../connection_database/connector.js');

class accountController {
    // [GET]
    account(req, res, next) {
        res.render('pages/account');
    }

    // [GET]
    login(req, res, next) {
        res.render('pages/login');
    }

    // [GET]
    register(req, res, next) {
        res.render('pages/register');
    }

    // [POST]
    async PostLogin(req, res, next) {
        console.log("PostLogin:"+req.body);
        console.log(req.body);
        res.redirect('/');
    }

    // [POST]
    PostRegister(req, res, next) {
        res.render('pages/login');
    }
}

module.exports = new accountController;