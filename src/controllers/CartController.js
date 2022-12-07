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
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                index(req, res, user); 
                //res.redirect('/');
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
            cartdb[i].nane_product = product.name;
            cartdb[i].description = product.description;
            cartdb[i].product_Image = product.product_Image;
            cartdb[i].code = product.code;
            cartdb[i].size = product_details.size;
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
