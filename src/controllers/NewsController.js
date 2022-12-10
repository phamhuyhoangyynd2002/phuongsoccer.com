const { users, news} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class newsController {
    async index(req, res, next){
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            index(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                index(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                index(req, res, user);
        }
    }
    // [GET] /:slug
    async show_detail(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            show_detail(req, res, user);  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_detail(req, res, user);    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                show_detail(req, res, user);
        }
    }
}

module.exports = new newsController;

async function show_detail(req, res, user) {
    try {
        let id_news = req.params.slug;
        const newdb = await news.findByPk(id_news);
        res.render('news/show_detail', { 
            title: newdb.title, 
            user,
            newdb
          });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function index(req, res, user) {
    try {
    let newdb = await news.findAll(); 
    res.render('news/index', { 
        title: 'News', 
        user,
        newdb
      });
    }
    catch(err) {
        res.redirect('/');
    }
}