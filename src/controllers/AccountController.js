const { users} = require('../connection_database/index');
const jwt = require('jsonwebtoken');

class accountController {

    // [GET]
    login(req, res, next) {
        let user = {id: 0, name: null, id_role: 1, picture: ""};
        res.render('account/login',{ 
        title: 'Login', 
        user, canLogin: undefined
        });
    }

    logout(req, res, next) {
        res.session.token = null;
        res.redirect('/');
    }
    // [GET]
    register(req, res, next) {
        const user = {id: 0, name: null, id_role: 1, picture: ""};
        res.render('account/register',{user, canRegister: undefined});
    }

    // [POST]
    async PostLogin(req, res, next) {
        const { email, password } = req.body;
        const user = await users.findOne({ where: { email } });
        if(user !=  null){
            var token = await jwt.sign({
                id: user.id,
                name: user.name,
                id_role: user.id_role,
                picture: user.picture
            },process.env.KEY_TOKEN);
            res.session.token = token;
            res.redirect('/');
        }
        else{
            const user = {id: 0, name: null, id_role: 1, picture: ""};
            res.render('/account/login', {user, canLogin: false});
        }
    }

    // [POST]
     async PostRegister(req, res, next) {
        const email = req.body.email;
        const user = await users.findOne({ where: { email } });
        if (user != null) {
            const user = {id: 0, name: null, role: 1, picture: ""};
            res.render('pages/register', {user, canRegister: false})
        } else {
            await users.create({
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                phone_Number: req.body.phoneNumber,
                picture: req.body.avatar,
                sub: 'a',   
            });
            res.redirect('/account/login');
        }
    }
}

module.exports = new accountController;
