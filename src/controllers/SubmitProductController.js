const { users, products, products_details,img} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');
class submitProductController {
    // [GET]
    submitproduct(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 4)
                            res.render('productManager/submitproduct', { 
                                title: 'Đăng bán mới', 
                                user, 
                            });
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
    PostSubmitproduct(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 4) PostSubmitproduct(req, res, user);  
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

module.exports = new submitProductController;

async function PostSubmitproduct(req, res, user) {
    try {

        let _name = req.body.name;
        let _code = req.body.code;
        let _id_tag = req.body.id_tag;
        let _id_producer = req.body.id_Producer;
        let _description = req.body.description;
        let new_product ={ name: _name, description: _description, id_producer: _id_producer, user_Update : user.id, code: _code, id_tag: _id_tag};
        let product = await products.create(new_product);

        if(req.files != null){
            if(req.files.product_Image != null){
                let file_product_Image = req.files.product_Image;
                let _product_Image = Math.random().toString(36).substring(7) + _code +file_product_Image.name;
                if(file_product_Image.mimetype == "image/jpeg" ||file_product_Image.mimetype == "image/png"||file_product_Image.mimetype == "image/gif" || Image.mimetype == "image/jpg"){
                    file_product_Image.mv('src/public/img/'+ _product_Image, function(err) {
                        if (err) console.log(err);
                });
                }
                product.product_Image = _product_Image;
            }
            
            if(req.files.image  != null){
                let file_Image = req.files.image;
                for (let i in file_Image) {
                    let Image = file_Image[i];
                    let _Image = Math.random().toString(36).substring(7) + _code + Image.name ;
                    let _new_img ={id_Products: product.id, image_path: _Image};
                    let new_img = await img.create(_new_img);
                    if(Image.mimetype == "image/jpeg" ||Image.mimetype == "image/png"||Image.mimetype == "image/gif" || Image.mimetype == "image/jpg" ){
                        Image.mv('src/public/img/'+ _Image, function(err) {
                            if (err) console.log(err);
                    });
                    }
                }
            }
        }

        let p_d_id = req.body.p_d_id;
        let p_d_size = req.body.p_d_size;
        let p_d_price = req.body.p_d_price;
        let p_d_discout_percent = req.body.p_d_discout_percent;
        let p_d_discount_minus = req.body.p_d_discount_minus;
        let p_d_onSale = req.body.p_d_onSale;
        if(p_d_id != undefined)
            if(Array.isArray(p_d_id) ){
                for(let i = p_d_id.length - 1; i >= 0; i--){
                    let product_details = await products_details.findOne({ where: { id_products: product.id, size: p_d_size[i]} });
                    if(product_details == null){
                        let _size = p_d_size[i];
                        let _price =  p_d_price[i];
                        let _discount_Percent = p_d_discout_percent[i];
                        let _discount_Minus = p_d_discount_minus[i];
                        if(_discount_Percent >= 100 || _discount_Percent <= 0) _discount_Percent = 0;
                        if(_discount_Minus >= _price || _discount_Minus <= 0) _discount_Minus = 0;
                        if(product.discount_max < _price) product.discount_max = _price;
                        if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                            else _price = _price - _discount_Minus;
                        if(product.discount_min > _price) product.discount_min = _price;
                        let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
                        let n_product_detail = await products_details.create(new_product_detail);
                    }
                    else{
                        let _size = p_d_size[i];
                        let _price =  p_d_price[i];
                        let _discount_Percent = p_d_discout_percent[i];
                        let _discount_Minus = p_d_discount_minus[i];
                        let _onSale = p_d_onSale[i];
                        if(_discount_Percent >= 100 || _discount_Percent <= 0) _discount_Percent = 0;
                        if(_discount_Minus >= _price || _discount_Minus <= 0) _discount_Minus = 0;
                        if(product.discount_max < _price) product.discount_max = _price;
                        if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                            else _price = _price - _discount_Minus;
                        if(product.discount_min > _price) product.discount_min = _price;
                        product_details.size = _size;
                        product_details.price = _price;
                        product_details.discount_percent = _discount_Percent;
                        product_details.discount_minus = _discount_Minus;
                        product_details.onSale = p_d_onSale[i];
                        await product_details.save();
                    }
                }
            }
            else{
                let product_details = await products_details.findOne({ where: { id_products: product.id, size: p_d_size} });
                    if(product_details == null){
                        let _size = p_d_size;
                        let _price =  p_d_price;
                        let _discount_Percent = p_d_discout_percent;
                        let _discount_Minus = p_d_discount_minus;
                        if(_discount_Percent >= 100 || _discount_Percent <= 0) _discount_Percent = 0;
                        if(_discount_Minus >= _price || _discount_Minus <= 0) _discount_Minus = 0;
                        if(product.discount_max < _price) product.discount_max = _price;
                        if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                            else _price = _price - _discount_Minus;
                        if(product.discount_min > _price) product.discount_min = _price;
                        let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
                        let n_product_detail = await products_details.create(new_product_detail);
                    }
                    else{
                        let _size = p_d_size;
                        let _price =  p_d_price;
                        let _discount_Percent = p_d_discout_percent;
                        let _discount_Minus = p_d_discount_minus;
                        let _onSale = p_d_onSale;
                        if(_discount_Percent >= 100 || _discount_Percent <= 0) _discount_Percent = 0;
                        if(_discount_Minus >= _price || _discount_Minus <= 0) _discount_Minus = 0;
                        if(product.discount_max < _price) product.discount_max = _price;
                        if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                            else _price = _price - _discount_Minus;
                        if(product.discount_min > _price) product.discount_min = _price;
                        product_details.size = _size;
                        product_details.price = _price;
                        product_details.discount_percent = _discount_Percent;
                        product_details.discount_minus = _discount_Minus;
                        product_details.onSale = p_d_onSale;
                        await product_details.save();
                    }
            }
        await product.save();
        res.redirect('/productmanager/productlist');
    } catch(err) {
        console.log(err);
        res.redirect('/');
    }

}
