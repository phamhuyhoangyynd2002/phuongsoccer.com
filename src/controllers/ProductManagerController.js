const { users, products, products_details, news} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');

class productManagerController {
    // [GET]
    productList(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role != 1) productList(req, res, user);  
            else res.redirect('/');
            }  
            else {
                res.redirect('/');
            }   
        } catch(err) {
            res.redirect('/');
        }   
    }

    // [GET]
   newsList(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role != 1) newsList(req, res, user);  
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
    PostProductList(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 5) postProductList(req, res, user);  
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

module.exports = new productManagerController;

async function productList(req, res, user) {
    try {
    let allproducts = await products.findAll();
    let product = [];
    for (let i in allproducts)
    {
        let p = allproducts[i]; 
        let product_detail = await products_details.findAll({ where: {id_products: p.id, onSale : true}}); 
        if(product_detail.length > 0){
            let p_d = {
                id: p.id,
                product_Image: p.product_Image,
                name: p.name,
                code: p.code,
                sold: p.sold,
              };
            product.push(p_d);
        } 
    }
    res.render('productManager/productlist', { 
        title: 'Danh sách sản phẩm', 
        user,
        product
      });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function newsList(req, res, user) {
    try {
        let newdb = await news.findAll(); 
        res.render('productManager/newslist', { 
            title: 'Tin tức', 
            user,
            newdb
          });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function postProductList(req, res, user) {
    try {
    let deleteChk = req.body.chk;
    if(Array.isArray(deleteChk)){
        for(let i in deleteChk){
            let product_details = await products_details.findAll( { where: { id_products: deleteChk[i]} });
            if(product_details != undefined)
                if(Array.isArray(product_details)){
                    for(let i in product_details){
                        let pd = product_details[i];
                        pd.onSale = false;
                        await pd.save();
                    }
                }
                else{
                    product_details.onSale = false;
                    await product_details.save();
                }
        }
    }
    else{
        let product_details = await products_details.findAll({ where: { id_products: deleteChk} });
            if(product_details != undefined)
                if(Array.isArray(product_details)){
                    for(let i in product_details){
                        let pd = product_details[i];
                        pd.onSale = false;
                        await pd.save();
                    }
                }
                else{
                    product_details.onSale = false;
                    await product_details.save();
                }
    }
    
    res.redirect('/productmanager/productlist');
    }
    catch(err) {
        res.redirect('/');
    }
}