const { users} = require('../connection_database/index');
const jwt = require('jsonwebtoken');

class accountController {

    // [GET]
    login(req, res, next) {
        let user = {id: 0, name: null, id_role: 1, picture: ""};
        res.render('pages/account/login',{ 
        title: 'Login', 
        user, 
        });
    }

    logout(req, res, next) {
        res.session.token = null;
        res.redirect('/');
    }
    // [GET]
    register(req, res, next) {
        const user = {id: 0, name: null, id_role: 1, picture: ""};
        res.render('pages/account/register',{user});
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
            res.redirect('/account/login');
        }
    }

    // [POST]
    PostRegister(req, res, next) {
        res.render('pages/login');
    }
}

module.exports = new accountController;
