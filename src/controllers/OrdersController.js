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
    async postneworder(req, res, next) {
        try {
            if (req.session.token != null) {
                var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
                let user = { id: token.id, name: token.name, id_role: token.id_role, picture: token.picture };
                let id_cart = req.body.chk;
                console.log(id_cart);
                let cartdata = [];
                let Totalmoney = 0;
                for (let i in id_cart)
                {
                    
                    const c = await cart.findByPk(id_cart[i]);
                    //console.log(c);
                    if (c.id_users == user.id) {
                        const product_details = await products_details.findByPk(c.id_Products_details);
                        const product = await products.findByPk(product_details.id_products);
                        let cc = {
                            id : c.id,
                            stt : i,
                            nane_product : product.name,
                            product_Image : product.product_Image,
                            code : product.code,
                            size : product_details.size,
                            price : product_details.price,
                            amount : c.amount
                        }
                        console.log(cc);
                        Totalmoney += cc.price * c.amount;
                        cartdata.push(cc);
                    }
                }
                console.log(Totalmoney);
                if(Totalmoney <= 0) res.redirect('/');
                res.render('orders/add', { 
                    user, 
                    cartdata, 
                    Totalmoney });
                
            }
            else {
                
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
        console.log(req.body);
        let _address = req.body.address;
        let _buyer_name = req.body.buyer_name;
        let _phone_Number = req.body.phone_Number;
        let _note = req.body.note;
        let order ={ address: _address, buyer_name: _buyer_name, phone_Number: _phone_Number, id_buyer : user.id, note: _note, id_status : 1, cash_payment: 0};
        let new_orders = await orders.create(order);
        let numProduct =  req.body.numProduct;
 
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