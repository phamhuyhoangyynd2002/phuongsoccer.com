const { users} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');

class productManagerController {
    // [GET]
    productList(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 5) productList(req, res, user);  
            else res.redirect('/');
            }  
            else {
                res.redirect('/');
            }   
        } catch(err) {
            res.redirect('/');
        }   
    }

    // [POST]
    PostProductList(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 5) PostSubmitNews(req, res, user);  
            else res.redirect('/');
            }  
            else {
                res.redirect('/');
            }   
        } catch(err) {
            res.redirect('/');
        }   
    }
}

module.exports = new productManagerController;

async function productList(req, res, user) {
    try {
    let product = await products.findAll();
    res.render('products/productlist', { 
        title: 'products', 
        user,
        product
      });
    }
    catch(err) {
        res.redirect('/');
    }
}