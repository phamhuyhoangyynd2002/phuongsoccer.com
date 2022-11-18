//const connection = require('../connection_database/connector.js');
const jwt = require('jsonwebtoken');


class cartController {
    // [GET] /:slug
    async cart(req, res, next) {
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

}

module.exports = new cartController;
/*
function cart(req, res, user) {
    try {
    let sql_cart=`SELECT * FROM cart c  WHERE c._id_users = '`+user._id+"'";
    connection.query(sql_cart, function (error, carts) {
            if (error) {
                return console.error(error.message);
            }
            var cart = carts[0];
            console.log("cart");
            console.log(cart);
            
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
            
        });
    }
    catch(err) {
        res.redirect('/cart');
    }

}
*/