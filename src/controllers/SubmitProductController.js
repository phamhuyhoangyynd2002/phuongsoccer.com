const { users, products} = require('../connection_database/index');
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
                            res.render('pages/submitproduct', { 
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
        let _description = req.body.description;
        let _id_Producer  = req.body.id_Producer;
        let file_product_Image = req.files.product_Image;
        let file_Image = req.files.image;
        let _code = req.body.code;
        //console.log(file_product_Image);
        //console.log(file_Image);
        //console.log("hi");
        let _product_Image = Math.random().toString(36).substring(7) + file_product_Image.name;
        let p ={ name: _name, description: _description, id_Producer: _id_Producer, user_Update : user.id, code: _code, product_Image : _product_Image};
        //console.log(p);
        let product = await products.create(p);
        //console.log(product);
        if(file_product_Image.mimetype == "image/jpeg" ||file_product_Image.mimetype == "image/png"||file_product_Image.mimetype == "image/gif" ){
            file_product_Image.mv('src/public/img/'+ _product_Image, function(err) {
                if (err) console.log(err);
        });
        }
        for (let i in file_Image) {
                let Image = file_Image[i];
                let _Image = Math.random().toString(36).substring(7) + Image.name;
                if(Image.mimetype == "image/jpeg" ||Image.mimetype == "image/png"||Image.mimetype == "image/gif" ){
                    Image.mv('src/public/img/'+ _Image, function(err) {
                        if (err) console.log(err);
                });
                }
            }
        res.redirect('/');
    } catch(err) {
        res.redirect('/account/login');
    }

}
