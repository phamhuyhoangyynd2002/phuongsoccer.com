const productsDB = require('../connection_database/products');
const newsDB = require('../connection_database/news');
const usersDB = require('../connection_database/users');
var user = new usersDB({});

class homeController {
    // [GET] /food
    async index(req, res, next) {
        try {
            const limitNumberProductsNew = 8;
            const productsNew = await productsDB.find({}).sort({ _id: -1 }).limit(limitNumberProductsNew);

            const limitNumberProductsSold = 8;
            const productsSold = await productsDB.find({}).sort({'sold' : -1 }).limit(limitNumberProductsSold);

            const limitNumberNews = 3;
            const news = await newsDB.find({}).sort({ _id: -1 }).limit(limitNumberNews);
            //user = JSON.stringify(req.oidc.user, null, 2);
            //res.locals.user = req.oidc.user;
            console.log(user);
            //console.log("productsNew");
            //console.log(productsNew);
            //console.log("products");
            //console.log(products);
            //console.log("New");
            //console.log(news);
            res.render('pages/home',{
                title: 'Home',
                productsNew,
                productsSold,
                news,
                user,
            });
        } 
        catch (error){
            console.log(error);
        }
    }
}

module.exports = new homeController;