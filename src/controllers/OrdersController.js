const { users, orders, products_details, products, cart } = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class ordersController {

    // [GET] /
    async index(req, res, next) {
        try {
            if (req.session.token != null) {
                var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
                let user = { id: token.id, name: token.name, id_role: token.id_role, picture: token.picture };
                index(req, res, user);
            }
            else {
                res.redirect('/');
            }
        } catch (err) {
            res.redirect('/');
        }
    }

    // [GET] /:slug
    async show_detail(req, res, next) {
        try {

        } catch (err) {
            res.redirect('/');
        }
    }

    // [POST] /add
    async add(req, res, next) {
        try {
            if (req.session.token != null) {
                var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
                let user = { id: token.id, name: token.name, id_role: token.id_role, picture: token.picture };
                let id_cart = req.params.slug;
                const cartdb = await cart.findByPk(id_cart);
                if (cartdb.id_users == user.id) {
                    let Totalmoney = 0;
                    const product_details = await products_details.findByPk(cartdb.id_Products_details);
                    const product = await products.findByPk(product_details.id_products);
                    cartdb.stt = 1;
                    cartdb.nane_product = product.name;
                    cartdb.product_Image = product.product_Image;
                    cartdb.code = product.code;
                    cartdb.size = product_details.size;
                    if (product_details.price + product_details.discount_minus > product_details.price / ((100 - product_details.discout_percent) / 100)) cartdb._price = product_details.price + product_details.discount_minus;
                    else cartdb._price = product_details.price / ((100 - product_details.discout_percent) / 100);
                    cartdb.price = product_details.price;
                    cartdb.discout_percent = product_details.discout_percent;
                    cartdb.discount_minus = product_details.discount_minus;
                    Totalmoney += cartdb.price * cartdb.amount;
                    console.log(cartdb);
                    res.render('orders/add', { 
                        user, 
                        cartdb, 
                        Totalmoney });
                }
            }
            else {
                res.redirect('/');
            }
        } catch (err) {
            res.redirect('/');
        }
    }

}

module.exports = new ordersController;

async function index(req, res, user) {
    try {
        let order = await orders.findAll(
            { where: { _id_buyer: user.id } }
        );
    }
    catch (err) {
        res.redirect('/');
    }
}


async function show_detail(req, res, user) {
    try {
        let sql_orders = `SELECT * FROM orders o  WHERE o._id = '` + req.params.slug + "'";
        connection.query(sql_orders, function (error, orders) {
            if (error) {
                return console.error(error.message);
            }
            let order = orders[0];
            let sql_orders_details = `SELECT * FROM orders_details o_d  WHERE o_d._id_orders = '` + order._id + "'";
            connection.query(sql_orders_details, function (error, orders_details) {
                if (error) {
                    return console.error(error.message);
                }
                res.render('pages/home', { user, orders });
            });
        });
    }
    catch (err) {
        res.redirect('/');
    }

}