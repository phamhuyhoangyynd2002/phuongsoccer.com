const connection = require('../connection_database/connector.js');
const jwt = require('jsonwebtoken');


class ordersController {

    // [GET] /
    async orders(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, '12345');
            let sql_user= `SELECT * FROM users u  WHERE u._id = '`+token._id+"'";
            connection.query(sql_user, function (error, results_users) {
                if (error) {
                    console.log(error);
                }
                else{
                    var user = results_users[0];
                    delete user.email;
                    delete user.password;
                    delete user.phone_Number;
                    delete user.updated_at;
                    delete user.sub;
                    //console.log(user);
                    orders(req, res, user);    
                }
            });
            }  
            else {
                const user = {_id: 0, name: null, role: 1, picture: ""};
                orders(req, res, user);
            }   
        } catch(err) {
                const user = {_id: 0, name: null, role: 1, picture: ""};
                orders(req, res, user);
        }
    }

    // [GET] /:slug
    async show_detail(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, '12345');
            let sql_user= `SELECT * FROM users u  WHERE u._id = '`+token._id+"'";
            connection.query(sql_user, function (error, results_users) {
                if (error) {
                    console.log(error);
                }
                else{
                    var user = results_users[0];
                    delete user.email;
                    delete user.password;
                    delete user.phone_Number;
                    delete user.updated_at;
                    delete user.sub;
                    //console.log(user);
                    show_detail(req, res, user);    
                }
            });
            }  
            else {
                const user = {_id: 0, name: null, role: 1, picture: ""};
                show_detail(req, res, user);
            }   
        } catch(err) {
                const user = {_id: 0, name: null, role: 1, picture: ""};
                show_detail(req, res, user);
        }
    }

}

module.exports = new ordersController;

function orders(req, res, user) {
    try {
    let sql_orders=`SELECT * FROM orders o  WHERE o._id_buyer = '`+user._id+"'";
    connection.query(sql_orders, function (error, orders) {
            if (error) {
                return console.error(error.message);
            }
            res.render('pages/home',{ user, orders});
            });
    }
    catch(err) {
        res.redirect('/');
    }
}

function show_detail(req, res, user) {
    try {
    const code = req.params.slug;
    let sql_products=`SELECT * FROM products p  WHERE p.code = '`+code+"'";
    connection.query(sql_products, function (error, products) {
            if (error) {
                return console.error(error.message);
            }
            product = products[0];
            let sql_img=`SELECT * FROM img i  WHERE i._id_Products = '`+product._id+"'";
            connection.query(sql_img, function (error, img) {
                if (error) {
                    return console.error(error.message);
                }
                let sql_products_details=`SELECT * FROM products_details p  WHERE p._id_Products = '`+product._id+"'";
                connection.query(sql_products_details, function (error, products_details) {
                    if (error) {
                        return console.error(error.message);
                    }
                    res.render('pages/home',{ user, product, img, products_details});
                    });
                });
        });
    }
    catch(err) {
        res.redirect('/');
    }

}