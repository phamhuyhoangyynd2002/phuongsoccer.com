//const connection = require('../connection_database/connector.js');
const jwt = require('jsonwebtoken');


class productController {
    // [GET] /:slug
    async show_detail(req, res, next) {
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

module.exports = new productController;
/*
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
*/