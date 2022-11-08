const connection = require('../connection_database/connector.js');

class homeController {
    // [GET] /food
    async home(req, res, next) {
        try {
            const user = req.oidc.user;
            console.log("home");
            console.log(user);
            if(user  == undefined){
                res.render('pages/login',{
                    title: 'Home',
                    user,
                });
            }
            let sql_email= `SELECT * FROM users u  WHERE u.email = '`+user.email+"'";
            connection.query(sql_email, function (error, results_email) {
                if (error) {
                    console.log(error);
                }
                else{
                    res.render('pages/login',{
                        title: 'Home',
                        user: results_email[0],
                    });     
                }
            });
            
        } 
        catch (error){
            console.log(error);
        }
    }
}

module.exports = new homeController;