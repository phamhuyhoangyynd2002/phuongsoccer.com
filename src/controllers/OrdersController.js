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

    async failure(req, res, next) {
        try {
            if (req.session.token != null) {
                var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
                let user = { id: token.id, name: token.name, id_role: token.id_role, picture: token.picture };
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
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
                let cartdata = [];
                let Totalmoney = 0;
                let numProduct = 0;
                if(Array.isArray(id_cart)){
                    for (let i in id_cart){
                        if( i>= 10 ) res.redirect('/');
                        numProduct = i;
                        let c = await cart.findByPk(id_cart[i]);
                        if (c.id_users == user.id) {
                            let product_details = await products_details.findByPk(c.id_Products_details);
                            let product = await products.findByPk(product_details.id_products);
                            let cc = {
                                id : c.id,
                                stt : i,
                                id_Products_details: product_details.id,
                                nane_product : product.name,
                                product_Image : product.product_Image,
                                code : product.code,
                                size : product_details.size,
                                price : product_details.price,
                                amount : c.amount
                            }
                            Totalmoney += cc.price * c.amount;
                            cartdata.push(cc);
                        }
                    }
                }
                else{
                        numProduct = 0;
                        let c = await cart.findByPk(id_cart);
                        if (c.id_users == user.id) {
                            let product_details = await products_details.findByPk(c.id_Products_details);
                            let product = await products.findByPk(product_details.id_products);
                            let cc = {
                                id : c.id,
                                stt : 0,
                                id_Products_details: product_details.id,
                                nane_product : product.name,
                                product_Image : product.product_Image,
                                code : product.code,
                                size : product_details.size,
                                price : product_details.price,
                                amount : c.amount
                            }
                            Totalmoney += cc.price * c.amount;
                            cartdata.push(cc);
                        }

                }
                if(Totalmoney <= 0) res.redirect('/');
                res.render('orders/add', { 
                    title: 'Đặt hàng', 
                    user, 
                    cartdata, 
                    Totalmoney,
                    numProduct });
                
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
        let cashpayment = 0;
        if(numProduct >= 0){
            let _id_Products_details = req.body.id_Products_details0;
            let _cart_id =  req.body.cart_id0;
            let _amount = req.body.amount0;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
            
        }
        if(numProduct >= 1){
            let _id_Products_details = req.body.id_Products_details1;
            let _cart_id =  req.body.cart_id1;
            let _amount = req.body.amount1;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        if(numProduct >= 2){
            let _id_Products_details = req.body.id_Products_details2;
            let _cart_id =  req.body.cart_id2;
            let _amount = req.body.amount2;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        if(numProduct >= 3){
            let _id_Products_details = req.body.id_Products_details3;
            let _cart_id =  req.body.cart_id3;
            let _amount = req.body.amount3;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        if(numProduct >= 4){
            let _id_Products_details = req.body.id_Products_details4;
            let _cart_id =  req.body.cart_id4;
            let _amount = req.body.amount4;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        if(numProduct >= 5){
            let _id_Products_details = req.body.id_Products_details5;
            let _cart_id =  req.body.cart_id5;
            let _amount = req.body.amount5;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        if(numProduct >= 6){
            let _id_Products_details = req.body.id_Products_details6;
            let _cart_id =  req.body.cart_id6;
            let _amount = req.body.amount6;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        if(numProduct >= 7){
            let _id_Products_details = req.body.id_Products_details7;
            let _cart_id =  req.body.cart_id7;
            let _amount = req.body.amount7;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        if(numProduct >= 8){
            let _id_Products_details = req.body.id_Products_details8;
            let _cart_id =  req.body.cart_id8;
            let _amount = req.body.amount8;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        if(numProduct >= 9){
            let _id_Products_details = req.body.id_Products_details9;
            let _cart_id =  req.body.cart_id9;
            let _amount = req.body.amount9;
            let product_details = await products_details.findByPk(_id_Products_details);
            if(product_details.amount - _amount < 0) {  
                numProduct = -1;
                res.render('orders/failure', { 
                    title: 'Đơn đặt hàng không thành công', 
                    user, 
                });
                return;
            }
            else{
                product_details.amount = product_details.amount - _amount;
                await product_details.save();
                cashpayment += _amount*product_details.price;
                let new_orders_details = {id_order: new_orders.id, id_products_details: _id_Products_details, amount: _amount, out_price: product_details.price};
                let order_detail = await orders_details.create(new_orders_details);
                let cartdb = await cart.findByPk(_cart_id);
                if(cartdb.id_users == user.id)  {
                    await cartdb.destroy();
                }
            }
        }
        console.log(numProduct);
        if(numProduct >= 0){
            new_orders.cash_payment = cashpayment;
            await new_orders.save();
            order = new_orders;
            res.render('orders/show_detail', { title: 'Đơn hàng của bạn', user, order });
        }
        else {  
            res.render('orders/failure', { 
                title: 'Đơn đặt hàng không thành công', 
                user, 
            });
        }
    }
    catch (err) {
        console.log(err);
        res.render('orders/failure', { 
            title: 'Đơn đặt hàng không thành công', 
            user, 
        });
    }
}

async function show_detail(req, res, user) {
    try {
        let id_order = req.params.slug;
        let order = await orders.findByPk(id_order);
        if( order.id_order == user.id || user.id_role != 1 ) res.render('orders/show_detail', { title: 'Đơn hàng của bạn', user, order });
        else res.redirect('/');
    }
    catch (err) {
        res.redirect('/');
    }

}