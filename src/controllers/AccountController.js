const connection = require('../connection_database/connector.js');

const usersDB = require('../connection_database/users');

class accountController {
    // [GET]
    account(req, res, next) {
        res.render('pages/account');
    }

    // [GET]
    login(req, res, next) {
        const user = JSON.stringify(next, null, 2);
        res.render('pages/login',{user});
    }

    // [GET]
    register(req, res, next) {
        res.render('pages/register');
    }

    // [POST]
    async PostLogin(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        console.log(req.body);
        let user = new usersDB({});
        user = await usersDB.find({'email': email, 'password': password});
        console.log(user);
        req.session.user = user;
        if (user == ''){
            res.render('login',{
                title: 'Đăng Nhập',
                user,
            });
        }
        else {
            res.redirect('/');
        }
    }

    // [POST]
    PostRegister(req, res, next) {
        res.render('pages/login');
    }
}

module.exports = new accountController;