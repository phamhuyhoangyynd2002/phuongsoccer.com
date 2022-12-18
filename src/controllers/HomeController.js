const { users, products, news} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class homeController {

    // [GET] /
    async home(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            home(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                home(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                home(req, res, user);
        }
    }

    // [GET] /
    async into(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            into(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                into(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                into(req, res, user);
        }
    }
}

module.exports = new homeController;

async function home(req, res, user) {
    try {
        
        let productsNew = await products.findAll({
            order: [['createdAt', 'DESC']],
            limit: 8,
        });
        let productsSold = await products.findAll({
            order: [['sold', 'DESC']],
            limit: 8,
        });
        let newdb = await news.findAll({
            order: [['createdAt', 'DESC']],
            limit: 4,
        }); 
        res.render('Home/home', { 
            title: 'Home', 
            productsNew, 
            productsSold, 
            user, 
            newdb
          });
    }
    catch(err) {
        console.log(err);
        res.redirect('/');
    }
}

async function into(req, res, user) {
    try {
        res.render('Home/intro', { 
            title: 'Liên hệ', 
            user
          });
    }
    catch(err) {
        console.log(err);
        res.redirect('/');
    }
}