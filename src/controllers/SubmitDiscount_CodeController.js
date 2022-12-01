const { users, discount_code} = require('../connection_database/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');
class submitDiscount_CodeController {
    // [GET]
    submitDiscount_Code(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 4)
                            res.render('productManager/submitdiscountcode', { 
                                title: 'Thêm mã giảm giá', 
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
    PostSubmitDiscount_Code(req, res, next) {
        try {
            if(req.session.token != null){
            var token = jwt.verify(req.session.token, process.env.KEY_TOKEN);
            let user = {id: token.id, name: token.name, id_role: token.id_role, picture: token.picture};
            if(user.id_role == 2 || user.id_role == 4) PostSubmitDiscount_Code(req, res, user);  
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

module.exports = new submitDiscount_CodeController ;

async function PostSubmitDiscount_Code(req, res, user) {
    try {
        let _code = req.body.code;
        let _start_time = req.body.start_time;
        let _end_time  = req.body.end_time;
        let _discount_Percent = req.body.discount_Percent;
        let _discount_Minus = req.body.discount_Minus;
        let _minimun_order_value = req.body.minimun_order_value;
        let dc = { user_Updater: user.id, code: _code, start_time: _start_time, end_time: _end_time, discount_Percent: _discount_Percent, discount_Minus: _discount_Minus, minimun_order_value: _minimun_order_value};
        console.log(dc);
        let _discount_code = await discount_code.create(dc);
        //console.log(_discount_code);
        res.redirect('/');
    } catch(err) {
        console.log(err);
        res.redirect('/');
    }

}
