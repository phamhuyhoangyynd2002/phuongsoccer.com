const connection = require('../connection_database/connector.js');

class accountController {
    async account(req, res, next){
        if( req.oidc.user != undefined)
        {
            var user= req.oidc.user;
            console.log(user);
            let sql_email= `SELECT * FROM users u  WHERE u.email = '`+user.email+"'";
            connection.query(sql_email, function (error, results_email) {
                if (error) {
                    console.log(error);
                }
                else{
                    console.log(results_email[0]);
                    if(results_email[0] ==undefined){
                        let sql_users = "INSERT INTO users (email, name, phone_Number, role, updated_at, picture, sub) VALUES ('"+ user.email + "', '" +user.name + "', "+0+", "+1+", '" +user.updated_at +"', '" +user.picture+"', '" +user.sub +"')";
                        console.log(sql_users);
                        connection.query(sql_users, function (error, results_users) {
                            if (error) {
                                console.log(error);
                            }
                            else{
                                console.log("themok")
                            }
                            });
                    }
                }
            });
            
        }
        console.log("account")
        res.redirect('/home');
    }

    async profile(req, res, next){
        res.render('profile', {
            userProfile: req.oidc.user,
            title: 'Profile'
          });
    }
}

module.exports = new accountController;