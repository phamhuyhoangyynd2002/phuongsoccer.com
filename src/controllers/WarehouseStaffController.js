const { users, products, products_details} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');

class warehouseStaffController {
    // [GET]
    warehouse(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 3 || user.id_role == 5) warehouse(req, res, user);  
            else res.redirect('/');
            }  
            else {
                res.redirect('/');
            }   
        } catch(err) {
            res.redirect('/');
        }   
    }

    // [POST]
    PostWarehouse(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 3) postWarehouse(req, res, user);  
            else res.redirect('/');
            }  
            else {
                res.redirect('/');
            }   
        } catch(err) {
            res.redirect('/');
        }   
    }
}

module.exports = new warehouseStaffController;

async function warehouse(req, res, user) {
    try {
    let allproducts = await products.findAll();
    //console.log(product);
    let numRow = 0;
    let product = [];
    for (let i in allproducts)
    {
        let p = allproducts[i]; 
        let product_detail = await products_details.findAll({ where: {id_products: p.id, onSale: true}}); 
        for (let j in product_detail)
        {
            let p_d = {
                id: numRow,
                product_Image: p.product_Image,
                name: p.name,
                code: p.code,
                size: product_detail[j].size,
                amount: product_detail[j].amount,
                price: product_detail[j].price
              };
            numRow++;
            product.push(p_d);

        }
        
    }
    res.render('warehouseStaff/index', { 
        title: 'products', 
        user,
        product
      });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function postWarehouse(req, res, user) {
    try {
    console.log(req.body);
    res.redirect('/');
    }
    catch(err) {
        res.redirect('/');
    }
}