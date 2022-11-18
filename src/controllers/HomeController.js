const { users, products, news} = require('../connection_database/index');
//const connection = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class homeController {

    // [GET] /
    async home(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            //console.log(token);
            let user = {id: token.id, name: token.name, role: token.role, picture: token.picture};
            //console.log(user);
            home(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, role: 1, picture: ""};
                home(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, role: 1, picture: ""};
                home(req, res, user);
        }
    }
}

module.exports = new homeController;

async function home(req, res, user) {
    try {
        let sql_productsNew = "SELECT * FROM products ORDER BY updated_At DESC LIMIT 8";
        let productsNew = await products.findAll({
            limit: 3,
        });
        console.log(productsNew);

    
    }
    catch(err) {
        console.log("lỗi");
        //res.redirect('/');
    }
}