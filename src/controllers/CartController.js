const { users, products, cart, products_details} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class cartController {
    // [GET] /:slug
    async index(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            index(req, res, user);  
            }  
            else {
                res.redirect('/');
            }   
        } catch(err) {
            console.log(err);
            res.redirect('/');
        }
    }

    async deletecart(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            deletecart(req, res, user);  
            }  
            else {
                res.redirect('/');
            }   
        } catch(err) {
            console.log(err);
            res.redirect('/');
        }
    }

    async addcart(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            addcart(req, res, user);  
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

module.exports = new cartController;

async function index(req, res, user) {
    try {
        //console.log(user);
        let cartdb = await cart.findAll({
            where: {
                id_users: user.id
            }
        });
        //console.log(cartdb);
        for (let i in cartdb) {
            const product_details = await products_details.findByPk(cartdb[i].id_Products_details);
            const product = await products.findByPk(product_details.id_products);
            cartdb[i].stt = i;
            cartdb[i].nane_product = product.name;
            cartdb[i].description = product.description;
            cartdb[i].product_Image = product.product_Image;
            cartdb[i].code = product.code;
            cartdb[i].size = product_details.size;
            if(product_details.price + product_details.discount_minus > product_details.price / ((100-product_details.discout_percent)/100)) cartdb[i]._price = product_details.price + product_details.discount_minus;
                else cartdb[i]._price = product_details.price / ((100-product_details.discout_percent)/100);
            cartdb[i].price = product_details.price;
            cartdb[i].discout_percent = product_details.discout_percent;
            cartdb[i].discount_minus = product_details.discount_minus;
          }
        //console.log(cartdb);
        res.render('cart/index', { 
            title: 'Giỏ hàng', 
            user,
            cartdb
          });
    }
    catch(err) {
        console.log(err);
        res.redirect('/cart');
    }

}

async function deletecart(req, res, user) {
    try {
        let id_cart = req.params.slug; 
        const cartdb = await cart.findByPk(id_cart);
        if(cartdb.id_users == user.id)  {
            await cartdb.destroy();
        }
        res.redirect('/cart');
    }
    catch(err) {
        console.log(err);
        res.redirect('/cart');
    }

}

async function addcart(req, res, user) {
    try {
        console.log(req.body);
        let _id_Products_details = req.body.size;
        let _amount = req.body.quantity;
        let c = {id_users: user.id, id_Products_details: _id_Products_details, amount: _amount};
        let new_cart = await cart.create(c);
        res.redirect('/cart');
    }
    catch(err) {
        console.log(err);
        res.redirect('/cart');
    }

}
