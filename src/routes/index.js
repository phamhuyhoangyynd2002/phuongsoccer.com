
const homeRouter = require('./home');
const accountRouter = require('./account');
const productRouter = require('./product');
const productManagerRouter = require('./productManager');
/*
const managementStaffRouter = require('./managementStaff');
const warehouseStaffRouter = require('./warehouseStaff');
const customerCareStaffRouter = require('./customerCareStaff');
*/
const cartRouter = require('./cart');
const ordersRouter = require('./orders');


function route(app){

    app.use('/account',accountRouter);
    app.use('/product',productRouter);
    app.use('/account',accountRouter);
    app.use('/productmanager',productManagerRouter);
    /*
    app.use('/managementstaff',managementStaffRouter);
    app.use('/warehousestaff',warehouseStaffRouter);
    app.use('/customercarestaff',customerCareStaffRouter);
    */
    app.use('/cart',cartRouter);
    app.use('/orders',ordersRouter);
    app.use('/',homeRouter);
}

module.exports = route;