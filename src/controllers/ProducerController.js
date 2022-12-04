const { users, products, img} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class producerController {
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
}

module.exports = new producerController;

async function show_producer(req, res, user) {
    try {
    let id_producer = req.params.slug; 
    let product = await products.findAll({ where: { id_producer: id_producer } });
    res.render('products/index', { 
        title: 'products', 
        user,
        product
      });
    }
    catch(err) {
        res.redirect('/');
    }
}
