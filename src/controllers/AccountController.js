const connection = require('../connection_database/connector.js');

const usersDB = require('../connection_database/users');

class accountController {
    // [GET]
    account(req, res, next) {
        res.render('account');
    }

    // [GET]
    login(req, res, next) {
        res.render('login');
    }

    // [GET]
    register(req, res, next) {
        res.render('register');
    }

    // [POST]
    async PostLogin(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        console.log(req.body);
        let user = new usersDB({});
        user = await usersDB.find({'email': email, 'password': password});
        console.log(user);
        if (user == ''){
            res.render('login');
        }
        else res.redirect('/');
    }

    // [POST]
    PostRegister(req, res, next) {
        res.render('login');
    }
}

module.exports = new accountController;