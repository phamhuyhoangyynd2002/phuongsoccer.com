const { users, contact} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class contactController {
    // [GET] 
    async index(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            res.render('contact/index', { 
                title: 'Liên hệ', 
                user
              }); 
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                res.render('contact/index', { 
                    title: 'Liên hệ', 
                    user
                  });
            }   
        } catch(err) {
            console.log(err);
            let user = {id: 0, name: null, id_role: 1, picture: ""};
            res.render('contact/index', { 
                title: 'Liên hệ', 
                user
              });
        }
    }
    
    // [POST] /
    async postcontact(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            postcontact(req, res, user); 
            }  
            else {
                let user = {id: 0, name: null, id_role: 1, picture: ""};
                postcontact(req, res, user);
            }   
        } catch(err) {
            console.log(err);
            let user = {id: 0, name: null, id_role: 1, picture: ""};
            res.redirect('/');
        }
    }
}

module.exports = new contactController;

async function postcontact(req, res, user) {
    try {
        let _name= req.body.name;
        let _email = req.body.email;
        let _phone_Number  = req.body.phone_Number;
        let _note = req.body.note;
        let dc = { name: _name, email: _email, phone_Number: _phone_Number, note: _note};
        console.log(dc);
        let c = await contact.create(dc);
    }
    catch(err) {
        res.redirect('/');
    }
}