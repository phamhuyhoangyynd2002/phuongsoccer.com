const connection = require('../connection_database/connector.js');
const jwt = require('jsonwebtoken');

class homeController {
    // [GET] /food
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
                    console.log(user);
                    res.render('pages/login',{
                        title: 'Home',
                        user,
                    });     
                }
            });
            }  
            else{
                var user = undefined;
                res.render('pages/register',{
                    title: 'Home',
                    user,
                });
            }   
        } catch(err) {
            console.log(err);
            var user = undefined;
            res.render('pages/account',{
                title: 'Home',
                user,
            });
        }
            
            
        
    }
}

module.exports = new homeController;