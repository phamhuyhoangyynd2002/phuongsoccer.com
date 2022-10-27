const productsDB = require('../connection_database/products');
const producerDB = require('../connection_database/producer');

class homeController {
    // [GET] /food
    async index(req, res, next) {
        try {
            const limitNumber = 5;
            //const products = await productsDB.find({});
            //console.log(products);
            res.render('pages/home');
        } 
        catch (error){
            console.log(error);
        }
    }
}

module.exports = new homeController;