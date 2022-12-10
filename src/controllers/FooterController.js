const { users, products, news} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class footerController {

    // [GET] /
    async policy(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            res.render('footer/chinhsach', { 
                title: 'Chính sách', 
                user, 
              });
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                res.render('footer/chinhsach', { 
                    title: 'Chính sách', 
                    user, 
                  });    
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                res.render('footer/chinhsach', { 
                    title: 'Chính sách', 
                    user, 
                  });
        }
    }

    async guide(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            res.render('footer/huongdan', { 
                title: 'Hướng dẫn', 
                user, 
              });  
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                res.render('footer/huongdan', { 
                    title: 'Hướng dẫn', 
                    user, 
                  });  
            }   
        } catch(err) {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                res.render('footer/huongdan', { 
                    title: 'Hướng dẫn', 
                    user, 
                  });
        }
    }
}

module.exports = new footerController;
