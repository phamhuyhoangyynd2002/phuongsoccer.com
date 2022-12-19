const { users, products, img, products_details} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class productController {

    async index(req, res, next) {
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
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                index(req, res, user);
        }
    }

    // [GET] /:slug
    async show_detail(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            show_detail(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_detail(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_detail(req, res, user);
        }
    }

    // [GET]
    async show_accessory(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            show_accessory(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_accessory(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_accessory(req, res, user);
        } 
    }
    
    // [GET]
    async show_shoes(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            show_shoes(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_shoes(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_shoes(req, res, user);
        } 
    }
}

module.exports = new productController;

async function index(req, res, user) {
    try {
    let product = await products.findAll(); 

    res.render('products/index', { 
        title: 'Sản phẩm', 
        user,
        product
      });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function show_detail(req, res, user) {
    try {
    let code = req.params.slug;
    let product = await products.findOne({ where: { code: code } });
    let imgdb = await img.findAll({ where: {id_Products: product.id}}); 
    let products_detail = await products_details.findAll({ where: {id_products: product.id, onSale : true}}); 

    let productsSold = await products.findAll({
        order: [['sold', 'DESC']],
        limit: 8,
    });
    res.render('products/show_detail', { 
        title: 'Sản phẩm', 
        user,
        product,
        imgdb,
        productsSold,
        products_detail
      });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function show_accessory(req, res, user) {
    try {
    let product = await products.findAll({ where: {id_producer: 10}}); 

    res.render('products/index', { 
        title: 'Sản phẩm', 
        user,
        product
      });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function show_shoes(req, res, user) {
    try {
    let product = await products.findAll({ where: {id_producer: id_produce < 10}}); 

    res.render('products/index', { 
        title: 'Sản phẩm', 
        user,
        product
      });
    }
    catch(err) {
        res.redirect('/');
    }
}