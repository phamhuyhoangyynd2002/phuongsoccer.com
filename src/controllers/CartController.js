const { users, products, cart} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class cartController {
    // [GET] /:slug
    async index(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, role: token.role, picture: token.picture};
            index(req, res, user);  
            }  
            else {
                let user = {id: 1, name: null, role: 1, picture: ""};
                index(req, res, user); 
                //res.redirect('/account/login'); 
            }   
        } catch(err) {
            res.redirect('/');
        }
    }

}

module.exports = new cartController;

async function index(req, res, user) {
    try {

        let cartdb = await cart.findAll({
            where: {
                id_users: user.id
            }
        });
        for (let i in cartdb) {
            //const user = await users.findOne({ where: { email } });
          }
    }
    catch(err) {
        console.log(err);
        res.redirect('/cart');
    }

}
