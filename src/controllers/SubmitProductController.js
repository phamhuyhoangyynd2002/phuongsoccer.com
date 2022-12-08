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
        //console.log(req.body);
        //console.log(req.files);
        let _name = req.body.name;
        let _description = req.body.description;
        let _id_producer  = req.body.id_Producer;
        let _id_tag = req.body.id_tag;
        let _code = req.body.code;
        let _numRow = req.body.numRow;
        let file_product_Image = req.files.product_Image;
        let file_Image = req.files.image;
        let _product_Image = Math.random().toString(36).substring(7) + _code +file_product_Image.name;
        let new_product ={ name: _name, description: _description, id_producer: _id_producer, user_Update : user.id, code: _code, product_Image : _product_Image, id_tag: _id_tag};
        let product = await products.create(new_product);
        if(file_product_Image.mimetype == "image/jpeg" ||file_product_Image.mimetype == "image/png"||file_product_Image.mimetype == "image/gif" || Image.mimetype == "image/jpg"){
            file_product_Image.mv('src/public/img/'+ _product_Image, function(err) {
                if (err) console.log(err);
        });
        }
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
        if(_numRow >= 1){
            let _size = req.body.size1;

            let _price =  req.body.price1;
            let _discount_Percent = req.body.discount_Percent1;
            let _discount_Minus = req.body.discount_Minus1;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 2){
            let _size = req.body.size2;
            let _price =  req.body.price2;
            let _discount_Percent = req.body.discount_Percent2;
            let _discount_Minus = req.body.discount_Minus2;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 3){
            let _size = req.body.size3;
            let _price =  req.body.price3;
            let _discount_Percent = req.body.discount_Percent3;
            let _discount_Minus = req.body.discount_Minus3;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 4){
            let _size = req.body.size4;
            let _price =  req.body.price4;
            let _discount_Percent = req.body.discount_Percent4;
            let _discount_Minus = req.body.discount_Minus4;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 5){
            let _size = req.body.size5;
            let _price =  req.body.price5;
            let _discount_Percent = req.body.discount_Percent5;
            let _discount_Minus = req.body.discount_Minus5;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 6){
            let _size = req.body.size6;
            let _price =  req.body.price6;
            let _discount_Percent = req.body.discount_Percent6;
            let _discount_Minus = req.body.discount_Minus6;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 7){
            let _size = req.body.size7;
            let _price =  req.body.price7;
            let _discount_Percent = req.body.discount_Percent7;
            let _discount_Minus = req.body.discount_Minus7;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 8){
            let _size = req.body.size8;
            let _price =  req.body.price8;
            let _discount_Percent = req.body.discount_Percent8;
            let _discount_Minus = req.body.discount_Minus8;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 9){
            let _size = req.body.size9;
            let _price =  req.body.price9;
            let _discount_Percent = req.body.discount_Percent9;
            let _discount_Minus = req.body.discount_Minus9;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        if(_numRow >= 10){
            let _size = req.body.size10;
            let _price =  req.body.price10;
            let _discount_Percent = req.body.discount_Percent10;
            let _discount_Minus = req.body.discount_Minus10;
            if(product.discount_max < _price) product.discount_max = _price;
            if(_price - _discount_Minus > _price * (100 - _discount_Percent) /100 ) _price = _price * (100 - _discount_Percent) /100;
                else _price = _price - _discount_Minus;
            if(product.discount_min > _price) product.discount_min = _price;
            let new_product_detail = {id_products: product.id, size: _size, discout_percent: _discount_Percent, discount_minus: _discount_Minus, user_Updater: user.id, price:_price};
            let product_detail = await products_details.create(new_product_detail);
        }
        await product.save();
        res.redirect('/');
    } catch(err) {
        console.log(err);
        res.redirect('/');
    }

}
