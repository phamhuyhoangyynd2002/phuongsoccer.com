const { users} = require('../connection_database/index');
const jwt = require('jsonwebtoken');

class accountController {
    // [GET]
    account(req, res, next) {
        res.render('pages/account');
    }

    // [GET]
    login(req, res, next) {
        const user = {id: 0, name: null, role: 1, picture: ""};
        res.render('pages/login',{user});
    }

    // [GET]
    register(req, res, next) {
        const user = {id: 0, name: null, role: 1, picture: ""};
        res.render('pages/register',{user});
    }

    // [POST]
    async PostLogin(req, res, next) {
        console.log(process.env.PORT);
        const { email, password } = req.body;

        const user = await users.findOne({ where: { email } });
        if(user !=  null){
            var token = await jwt.sign({
                id: user.id,
                name: user.name,
                role: user.role,
                picture: user.picture
            },process.env.KEY_TOKEN);
            res.session.token=token;
            res.redirect('/');
        }
        else{
            res.redirect('/account/login');
        }
    }

    // [POST]
    PostRegister(req, res, next) {
        res.render('pages/login');
    }
}

module.exports = new accountController;
