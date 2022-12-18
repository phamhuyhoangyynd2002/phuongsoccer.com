const { users, contact} = require('../connection_database/index');
const jwt = require('jsonwebtoken');


class customerCareStaffController {
    // [GET] 
    async problem(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id == 2 || user.id == 5) problem(req, res, user)
            }
            else {
                res.redirect('/');
            }   
        } catch(err) {
            res.redirect('/');
        }
    }

    
    async submitproblem(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id == 2 || user.id == 5) submitproblem(req, res, user)
            }
            else {
                res.redirect('/');
            }   
        } catch(err) {
            res.redirect('/');
        }
    }
}

module.exports = new customerCareStaffController;

async function problem(req, res, user) {
    try {
        let contacts = await contact.findAll({ where: {status: true}});
        res.render('customerCareStaff/problem', { 
            title: 'Vấn đề liên hệ', 
            user,
            contacts
          });
    }
    catch(err) {
        res.redirect('/');
    }
}

async function submitproblem(req, res, user) {
    try {
        let id_contact = req.params.slug;
        let contacts = await contact.findByPk(id_contact);
        contacts.status =  false;
        await contacts.save();
        res.redirect('/customercarestaff/problem');
    }
    catch(err) {
        res.redirect('/');
    }
}