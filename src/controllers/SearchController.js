const { Op } = require("sequelize");
const { users, products} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');
class searchController {
    index(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            index(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                index(req, res, user); 
            }   
        } catch(err) {
            console.log(err);
            res.redirect('/');
        }
    }
}

module.exports = new searchController;

async function index(req, res, user) {
    try {
        let search = req.body.search;
        let product = await products.findAll({
            where: {
                [Op.or]: 
                {
                    name: 
                    {
                        [Op.substring]: search,
                    },
                    description: 
                    {
                        [Op.substring]: search,
                    },
                    code: 
                    {
                        [Op.substring]: search,
                    },
                }
            },
        });
        res.render('products/index', { 
            title: 'Sẳn phẩm', 
            user,
            product
          });
    }
    catch(err) {
        res.redirect('/');
    }
}
