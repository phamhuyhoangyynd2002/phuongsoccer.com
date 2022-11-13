const connection = require('../connection_database/connector.js');
const jwt = require('jsonwebtoken');


class homeController {

    // [GET] /
    async home(req, res, next) {
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
                    home(req, res, user);    
                }
            });
            }  
            else {
                const user = {_id: 0, name: null, role: 1, picture: ""};
                home(req, res, user);
            }   
        } catch(err) {
                const user = {_id: 0, name: null, role: 1, picture: ""};
                home(req, res, user);
        }
    }
}

module.exports = new homeController;

function home(req, res, user) {
    try {
    let sql_productsNew="SELECT * FROM products ORDER BY updated_At DESC LIMIT 8";
    connection.query(sql_productsNew, function (error, productsNew) {
            if (error) {
                return console.error(error.message);
            }
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
        res.redirect('/');
    }
}