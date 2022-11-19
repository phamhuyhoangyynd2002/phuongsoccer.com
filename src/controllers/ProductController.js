const { users, products, img} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const role = require('../connection_database/models/role');


class productController {
    // [GET] /:slug
    async show_detail(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, role: token.role, picture: token.picture};
            show_detail(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, role: 1, picture: ""};
                show_detail(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, role: 1, picture: ""};
                show_detail(req, res, user);
        }
    }

    async add(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, role: token.role, picture: token.picture};
            if(user.role == 2 || user.role == 4) add(req, res, user);  
                else res.redirect('/'); 
            }  
            else {
                res.redirect('/'); 
            }   
        } catch(err) {
            console.log(err);
            res.redirect('/');
        }
    }

    async postAdd(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, role: token.role, picture: token.picture};
            if(user.role == 2 || user.role == 4) postAdd(req, res, user);  
                else res.redirect('/'); 
            }  
            else {
                res.redirect('/'); 
            }   
        } catch(err) {
            console.log(err);
            res.redirect('/');
        }
    }
}

module.exports = new productController;

async function show_detail(req, res, user) {
    try {
    let code = req.params.slug;
    let product = await products.findOne({ where: { code: code } });
    //console.log(product);
    let imgdb = await img.findAll({ where: {_id_Products: product.id}}); 
    console.log(imgdb);
    }
    catch(err) {
        res.redirect('/');
    }
}

async function add(req, res, user) {
    try {
        res.render('pages/home', { 
            title: 'Thêm Sản phẩm', 
            user, 
          });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function postAdd(req, res, user) {
    try {
        res.redirect('/');
    }
    catch(err) {
        res.redirect('/');
    }
}