const { users, news} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');

class updateNewsController {
    // [GET]
    updateNews(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 4) updateNews(req, res, user);
            else res.redirect('/');
            }  
            else {
                res.redirect('/');
            }   
        } catch(err) {
            res.redirect('/');
        }   
    }

    PostUpdateNews(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 4) PostUpdateNews(req, res, user)
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

module.exports = new updateNewsController;

async function updateNews(req, res, user) {
    try {
        let code = req.params.slug;
        let newdb = await news.findOne({ where: { id: code } });
        if(newdb == null) res.redirect('/');
        res.render('productManager/updateNew', { 
            title: 'Cập nhật Tin tức', 
            user,
            newdb
        });
    } catch(err) {
        console.log(err);
        res.redirect('/');
    }

}

async function PostUpdateNews(req, res, user) {
    try {
        let _id =  req.body.id;
        let _title = req.body.title;
        let _author = req.body.author;
        let _description  = req.body.description;
        let newdb = await news.findOne({ where: { id: _id } });
        if(newdb != null){
            if(req.body.deleteNew == 1) await newdb.destroy();
            else{
                if( req.files != null){
                    let file_Image = req.files.image;
                    let _Image = Math.random().toString(36).substring(7) + file_Image.name;
                    newdb.title = _title;
                    newdb.author = _author;
                    newdb.description = _description;
                    newdb.image = _Image;
                    await newdb.save();
                    if(file_Image.mimetype == "image/jpeg" ||file_Image.mimetype == "image/png"||file_Image.mimetype == "image/gif" ){
                        file_Image.mv('src/public/img/'+ _Image, function(err) {
                            if (err) console.log(err);
                        });
                    }
                }
                else{
                    newdb.title = _title;
                    newdb.author = _author;
                    newdb.description = _description;
                    await newdb.save();
                }
            }
        }
        res.redirect('/productmanager/newslist');
    } catch(err) {
        console.log(err);
        res.redirect('/');
    }

}
