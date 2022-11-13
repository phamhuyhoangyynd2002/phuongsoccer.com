const connection = require('../connection_database/connector.js');
const jwt = require('jsonwebtoken');

class accountController {
    // [GET]
    account(req, res, next) {
        res.render('pages/account');
    }

    // [GET]
    login(req, res, next) {
        const user = {_id: 0, name: null, role: 1, picture: ""};
        res.render('pages/login',{user});
    }

    // [GET]
    register(req, res, next) {
        const user = {_id: 0, name: null, role: 1, picture: ""};
        res.render('pages/register',{user});
    }

    // [POST]
    async PostLogin(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        let sql_user= `SELECT * FROM users u  WHERE u.email = '`+email+"' AND u.password = '"+password+"'";
        connection.query(sql_user, function (error, results_user) {
            if (error) {
                console.log(error);
            }
            else{
                var token = jwt.sign({
                    _id: results_user[0]._id
                },'12345');
                res.session.token=token;
                res.redirect('/');
            }
        });
    }

    // [POST]
    PostRegister(req, res, next) {
        res.render('pages/login');
    }
}

module.exports = new accountController;
