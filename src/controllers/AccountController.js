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

    async profile(req, res, next) {
        if(req.session.token == null) {
            res.redirect('/');
        } else {
        var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
        var user = await users.findOne({
            where: {
                id: token.id
            }
        });
        res.render('account/profile', {user: user, wrong_password: undefined, passwordMatch: undefined});
        }
    }

    async postProfile(req, res, next) {
        if(req.session.token == null) {
            res.redirect('/');
        } else {
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            var user = await users.findOne({
                where: {
                    id: token.id
                }
            });
            const {name, phone_Number, email, new_password, re_new_password, current_password} = req.body;
            if (user.password != current_password) {
                res.render('account/profile', {user: user, wrong_password: true, passwordMatch: true});
            } else {
                if (name != null) {
                    await users.upsert({
                        id: token.id,
                        name: name,
                    });
                }
                if (email != null) {
                    await users.upsert({
                        id: token.id,
                        email: email,
                    });
                }
                if (phone_Number != null) {
                    await users.upsert({
                        id: token.id,
                        phone_Number: phone_Number,
                    });
                }
                if (new_password != null) {
                    if (new_password == re_new_password) {
                        await users.upsert({
                            id: token.id,
                            password: new_password,
                        });
                        res.redirect('/account/profile');
                    } else if(new_password != re_new_password) {
                        res.render('account/profile', {user: user, wrong_password: false, passwordMatch: false});
                    }
                }
            }        
        }
    }

    // [POST]
    async PostLogin(req, res, next) {
        const { email, password } = req.body;
        const user = await users.findOne({ where: { email,password } });
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
            res.render('account/login', {user, canLogin: false});
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
