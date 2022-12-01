const { users, news} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');
class submitNewsController {
    // [GET]
    submitNews(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 5)
                            res.render('productManager/submitnews', { 
                                title: 'Thêm tin tức', 
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
    PostSubmitNews(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 5) PostSubmitNews(req, res, user);  
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

module.exports = new submitNewsController ;

async function PostSubmitNews(req, res, user) {
    try {
        let _title = req.body.title;
        let _author = req.body.author;
        let _description  = req.body.description;
        let file_Image = req.files.image;
        let _Image = Math.random().toString(36).substring(7) + file_Image.name;
        let n ={ title: _title, description: _description, author: _author, image: _Image, user_Updater: user.id };
        console.log(n);
        let neww = await news.create(n);
        console.log(neww);
        if(file_Image.mimetype == "image/jpeg" ||file_Image.mimetype == "image/png"||file_Image.mimetype == "image/gif" ){
            file_Image.mv('src/public/img/'+ _Image, function(err) {
                if (err) console.log(err);
        });
        }
        res.redirect('/');
    } catch(err) {
        console.log(err);
        res.redirect('/');
    }

}
