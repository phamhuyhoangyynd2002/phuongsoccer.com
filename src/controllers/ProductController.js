const connection = require('../connection_database/connector.js');
const jwt = require('jsonwebtoken');


class productController {
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

module.exports = new productController;

function show_detail(req, res, user) {
    try {
    const code = req.params.slug;
    let sql_products=`SELECT * FROM products p  WHERE p.code = '`+code+"'";
    connection.query(sql_products, function (error, products) {
            if (error) {
                return console.error(error.message);
            }
            product = products[0];
            console.log("product");
            console.log(product);
            
            res.redirect('/');
            /*
            let sql_productsSold="SELECT * FROM products ORDER BY sold DESC LIMIT 8";
            connection.query(sql_productsSold, function (error, productsSold) {
                if (error) {
                    return console.error(error.message);
                }
                let sql_news="SELECT * FROM news ORDER BY updated_At DESC LIMIT 3";
                connection.query(sql_news, function (error, news) {
                    if (error) {
                        return console.error(error.message);
                    }
                    res.render('pages/home',{ user, productsNew, productsSold, news});
                    });
                });
            */
        });
    }
    catch(err) {
        res.redirect('/');
    }

}