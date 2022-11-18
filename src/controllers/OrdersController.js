//const connection = require('../connection_database/connector.js');
const jwt = require('jsonwebtoken');


class ordersController {

    // [GET] /
    async orders(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            //console.log(token);
            let user = {id: token.id, name: token.name, role: token.role, picture: token.picture};
            //console.log(user);
            home(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, role: 1, picture: ""};
                home(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, role: 1, picture: ""};
                home(req, res, user);
        }
    }

    // [GET] /:slug
    async show_detail(req, res, next) {
        try {
            /*
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
                res.redirect('/');
            }   
            */
        } catch(err) {
            res.redirect('/');
        }
    }

}

module.exports = new ordersController;
/*
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
*/

function show_detail(req, res, user) {
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