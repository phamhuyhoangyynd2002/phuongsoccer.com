const { users, orders, products_details, products, cart, orders_details} = require('../connection_database/index');
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
            if (req.session.token != null) {
                var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
                let user = { id: token.id, name: token.name, id_role: token.id_role, picture: token.picture };
                show_detail(req, res, user);
            }
            else {
                res.redirect('/');
            }
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

    async PostAdd(req, res, next) {
        try {
            if (req.session.token != null) {
                var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
                let user = { id: token.id, name: token.name, id_role: token.id_role, picture: token.picture };
                PostAdd(req, res, user);
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

async function PostAdd(req, res, user) {
    try {
        let _address = req.body.address;
        let _buyer_name = req.body.buyer_name;
        let _phone_Number = req.body.phone_Number;
        let _note = req.body.note;
        let order ={ address: _address, buyer_name: _buyer_name, phone_Number: _phone_Number, id_buyer : user.id, note: _note, id_status : 1, cash_payment: 0};
        let new_orders = await orders.create(order);
        let numProduct =  req.body.numProduct;

        console.log(req.body);
        if(numProduct >= 1){
            let _id_Products_details = req.body.id_Products_details1;
            let _cart_id =  req.body.cart_id1;
            let _amount = req.body.amount1;
            const product_details = await products_details.findByPk(_id_Products_details);
            let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
            let order_detail = await orders_details.create(new_orders_details);
            const cartdb = await cart.findByPk(_cart_id);
            console.log(cartdb);
            if(cartdb.id_users == user.id)  {
                await cartdb.destroy();
            }
        }
        res.redirect('/order/' + new_orders.id);
    }
    catch (err) {
        res.redirect('/');
    }
}

async function show_detail(req, res, user) {
    try {
        let id_order = req.params.slug;
        const order = await orders.findByPk(id_order);
        if( order.id_order == user.id || user.id_role != 1 ) res.render('orders/show_detail', { user, order });
        else res.redirect('/');
    }
    catch (err) {
        res.redirect('/');
    }

}