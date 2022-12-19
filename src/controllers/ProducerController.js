const { users, products, img} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class producerController {

    async indexx(req, res, next) {
        res.redirect('/producer')
    }

    async index(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            index(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                imdex(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                index(req, res, user);
        }
    }

    // [GET] /:slug
    async show_producer(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            show_producer(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_producer(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_producer(req, res, user);
        }
    }

    async nameaz(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            nameaz(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                nameaz(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                nameaz(req, res, user);
        }
    }

    async nameza(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            nameza(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                nameza(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                nameza(req, res, user);
        }
    }

    async price_min(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            price_min(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                price_min(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                price_min(req, res, user);
        }
    }

    async price_max(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            price_max(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                price_max(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                price_max(req, res, user);
        }
    }
}

module.exports = new producerController;

async function index(req, res, user) {
    try {
    let product = await products.findAll();
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

async function show_producer(req, res, user) {
    try {
    let id_producer = req.params.slug; 
    let product = await products.findAll({ where: { id_producer: id_producer } });
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

async function nameaz(req, res, user) {
    try {
    let id_producer = req.params.slug; 
    let product;
    if(id_producer != null){
        product = await products.findAll({ 
            where: { id_producer: id_producer },
            order: [['name', 'ASC']],
        });
    }
    else {
        product = await products.findAll({ 
            order: [['name', 'ASC']],
        });
    }
    
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

async function nameza(req, res, user) {
    try {
    let id_producer = req.params.slug; 
    let product;
    if(id_producer != null){
        product = await products.findAll({ 
            where: { id_producer: id_producer },
            order: [['name', 'DESC']],
        });
    }
    else {
        product = await products.findAll({ 
            order: [['name', 'DESC']],
        });
    }
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

async function price_min(req, res, user) {
    try {
    let id_producer = req.params.slug; 
    let product;
    if(id_producer != null){
        product = await products.findAll({ 
            where: { id_producer: id_producer },
            order: [['discount_min', 'ASC']],
        });
    }
    else {
        product = await products.findAll({ 
            order: [['discount_min', 'ASC']],
        });
    }
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

async function price_max(req, res, user) {
    try {
    let id_producer = req.params.slug; 
    let product;
    if(id_producer != null){
        product = await products.findAll({ 
            where: { id_producer: id_producer },
            order: [['discount_max', 'DESC']],
        });
    }
    else {
        product = await products.findAll({ 
            order: [['discount_max', 'DESC']],
        });
    }
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