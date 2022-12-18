const {orders, orders_details, products_details, products} = require('../connection_database/index');
const jwt = require('jsonwebtoken');

class ordersProcess {

    // async unhandled(req, res, next) {
    //     if(req.session.token == null) {
    //         res.redirect('/');
    //     } else {
    //         var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
    //         let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
    //         if (user.id_role == 2) {
    //             let tempOrders = await orders_details.findAll();
    //             for (var i = 0; i < tempOrders.length; i++) {
    //                 const order = await orders.findByPk(tempOrders[i].id_order);
    //                 const product_detail = await products_details.findByPk(tempOrders[i].id_products_details);
    //                 const product = await products.findByPk(product_detail.id_products);
    //                 tempOrders[i].id_status = order.id_status;
    //                 tempOrders[i].buyer_name = order.buyer_name;
    //                 tempOrders[i].phone_Number = order.phone_Number;
    //                 tempOrders[i].address = order.address;
    //                 tempOrders[i].name = product.name;
    //                 tempOrders[i].size = product_detail.size;
    //             };
    //             for (var i = 0; i < tempOrders.length; i++) {
    //                 if (tempOrders[i].id_status != 1) {
    //                     tempOrders.splice(i, 1);
    //                     i--;
    //                 }
    //             };
    //             res.render('ordersProcess/ordersProcess', {user: user, orders: tempOrders});
    //         } else {
    //             res.redirect('/');
    //         }
    //     }       
    // }

    async unhandled(req, res, next) {
        if(req.session.token == null) {
            res.redirect('/');
        } else {
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if (user.id_role == 2 || user.id_role == 5 ) {
                let tempOrders = await orders.findAll();
                for (var i = 0; i < tempOrders.length; i++) {
                    if(tempOrders[i].cash_payment == 0) await tempOrders[i].destroy();
                }
                tempOrders = await orders.findAll();
                for (var i = 0; i < tempOrders.length; i++) {
                    const tempOrderDetail = await orders_details.findAll({
                        where: {id_order: tempOrders[i].id}
                    });
                    for (var k = 0; k < tempOrderDetail.length; k++) {
                        const tempProductDetail = await products_details.findByPk(tempOrderDetail[k].id_products_details);
                        const tempProduct = await products.findByPk(tempProductDetail.id_products);
                        tempOrderDetail[k].name = tempProduct.name;
                        tempOrderDetail[k].size = tempProductDetail.size;
                    };
                    tempOrders[i].orders_details = tempOrderDetail;
                };
                for (var i = 0; i < tempOrders.length; i++) {
                    if (tempOrders[i].id_status != 1) {
                        tempOrders.splice(i, 1);
                        i--;
                    };
                };
                res.render('ordersProcess/ordersProcess', {user: user, orders: tempOrders});
            } else {
                res.redirect('/');
            }
        }       
    }

    async handling(req, res, next) {
        if(req.session.token == null) {
            res.redirect('/');
        } else {
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if (user.id_role == 2 || user.id_role == 3 || user.id_role == 5) {
                let tempOrders = await orders.findAll();
                for (var i = 0; i < tempOrders.length; i++) {
                    const tempOrderDetail = await orders_details.findAll({
                        where: {id_order: tempOrders[i].id}
                    });
                    for (var k = 0; k < tempOrderDetail.length; k++) {
                        const tempProductDetail = await products_details.findByPk(tempOrderDetail[k].id_products_details);
                        const tempProduct = await products.findByPk(tempProductDetail.id_products);
                        tempOrderDetail[k].name = tempProduct.name;
                        tempOrderDetail[k].size = tempProductDetail.size;
                    };
                    tempOrders[i].orders_details = tempOrderDetail;
                };
                for (var i = 0; i < tempOrders.length; i++) {
                    if (tempOrders[i].id_status != 2) {
                        tempOrders.splice(i, 1);
                        i--;
                    };
                };
                res.render('ordersProcess/ordersProcess', {user: user, orders: tempOrders});
            } else {
                res.redirect('/');
            }
        }       
    }
    
    async handled(req, res, next) {
        if(req.session.token == null) {
            res.redirect('/');
        } else {
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if (user.id_role == 2 || user.id_role == 5) {
                let tempOrders = await orders.findAll();
                for (var i = 0; i < tempOrders.length; i++) {
                    const tempOrderDetail = await orders_details.findAll({
                        where: {id_order: tempOrders[i].id}
                    });
                    for (var k = 0; k < tempOrderDetail.length; k++) {
                        const tempProductDetail = await products_details.findByPk(tempOrderDetail[k].id_products_details);
                        const tempProduct = await products.findByPk(tempProductDetail.id_products);
                        tempOrderDetail[k].name = tempProduct.name;
                        tempOrderDetail[k].size = tempProductDetail.size;
                    };
                    tempOrders[i].orders_details = tempOrderDetail;
                };
                for (var i = 0; i < tempOrders.length; i++) {
                    if (tempOrders[i].id_status != 3) {
                        tempOrders.splice(i, 1);
                        i--;
                    };
                };
                res.render('ordersProcess/ordersProcess', {user: user, orders: tempOrders});
            } else {
                res.redirect('/');
            }
        }       
    }

    async posthandle(req, res, next) {
        const id = req.body.id;
        const processOrders = await orders.findAll({
            where: {id: id}
        });
        const order = processOrders[0];
        const idStatus = order.id_status;
        let newStatus;
        if (idStatus == 1) {
            newStatus = 2;
        } else if (idStatus == 2) {
            newStatus = 3;
        }
        await orders.upsert({
            id: id,
            id_status: newStatus
        });
        res.end();
    }
}

module.exports = new ordersProcess;