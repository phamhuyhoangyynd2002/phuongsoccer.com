const { users, orders} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class ordersController {

    // [GET] /
    async index(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, role: token.role, picture: token.picture};
            index(req, res, user);  
            }  
            else {
                res.redirect('/');    
            }   
        } catch(err) {
            res.redirect('/');
        }
    }

    // [GET] /:slug
    async show_detail(req, res, next) {
        try {
            
        } catch(err) {
            res.redirect('/');
        }
    }

    // [POST] /add
    async add(req, res, next) {
        try {
            
        } catch(err) {
            res.redirect('/');
        }
    }

}

module.exports = new ordersController;

async function index(req, res, user) {
    try {
        let order = await orders.findAll(
            { where: { _id_buyer: user.id} }
        );
    }
    catch(err) {
        res.redirect('/');
    }
}


async function show_detail(req, res, user) {
    try {
        let sql_orders=`SELECT * FROM orders o  WHERE o._id = '`+req.params.slug+"'";
        connection.query(sql_orders, function (error, orders) {
                if (error) {
                    return console.error(error.message);
                }
                let order = orders[0];
                let sql_orders_details=`SELECT * FROM orders_details o_d  WHERE o_d._id_orders = '`+order._id+"'";
                connection.query(sql_orders_details, function (error, orders_details) {
                        if (error) {
                            return console.error(error.message);
                        }
                        res.render('pages/home',{ user, orders});
                        });
                });
        }
        catch(err) {
            res.redirect('/');
        }

}