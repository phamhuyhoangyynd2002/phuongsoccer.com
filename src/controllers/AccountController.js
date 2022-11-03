const connection = require('../connection_database/connector.js');
const users = require('../connection_database/users');

const usersDB = require('../connection_database/users');

class accountController {
    // [GET]
    account(req, res, next) {
        res.render('pages/account');
    }

    // [GET]
    login(req, res, next) {
        res.render('pages/login', {permit: undefined});
    }

    // [GET]
    register(req, res, next) {
        res.render('pages/register', {canCreate: undefined});
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
            res.render('./pages/login', {permit: false});
        }
        else res.redirect('/');
    }

    // [POST]
    async PostRegister(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        const sub = req.body.sub;
        const avatar = req.body.avatar;
        const name = req.body.name;
        const phoneNumber = req.body.phoneNumber;
        console.log(req.body);
        let user = new usersDB({});
        user = await usersDB.find({'email': email, 'password': password});
        if (user == ''){
            let newUser = new users({
                email: email,
                password: password,
                sub: sub,
                avatar: avatar,
                name: name,
                phone_Number: phoneNumber
            });
            newUser.save();
            res.redirect('/');
        } else {
            res.render('./pages/register', {canCreate: false});
        }
    }
}

module.exports = new accountController;