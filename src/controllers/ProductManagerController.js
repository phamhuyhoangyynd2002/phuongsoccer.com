const { users} = require('../connection_database/index');
const jwt = require('jsonwebtoken');

class productManagerController {
    // [GET]
    submitproduct(req, res, next) {
        res.render('pages/submitproduct');
    }

    // [POST]
    PostSubmitproduct(req, res, next) {
        console.log(name);
        console.log(description);
        console.log(_id_Producer);
        console.log(product_Image);
        console.log(code);
        res.redirect('/');
    }
}

module.exports = new productManagerController;
