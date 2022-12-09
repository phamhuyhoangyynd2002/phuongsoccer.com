const homeRouter = require('./home');
const accountRouter = require('./account');
const productRouter = require('./product');
const productManagerRouter = require('./productManager');
/*
const managementStaffRouter = require('./managementStaff');
const customerCareStaffRouter = require('./customerCareStaff');
*/
const warehouseStaffRouter = require('./warehouseStaff');
const cartRouter = require('./cart');
const newsRouter = require('./news');
const ordersRouter = require('./orders');
const searchRouter = require('./search');
const contactRouter = require('./contact');
const producerRouter = require('./producer');
const tagRouter = require('./tag');
const footerRouter = require('./footer');
const ordersProcessRouter = require('./ordersProcess');

function route(app){

    app.use('/account',accountRouter);
    app.use('/product',productRouter);
    app.use('/account',accountRouter);
    app.use('/productmanager',productManagerRouter);
    app.use('/warehousestaff',warehouseStaffRouter);
    app.use('/footer',footerRouter);
    /*
    app.use('/managementstaff',managementStaffRouter);
    app.use('/customercarestaff',customerCareStaffRouter);
    */
    app.use('/cart',cartRouter);
    app.use('/news',newsRouter);
    app.use('/orders',ordersRouter);
    app.use('/search',searchRouter);
    app.use('/contact',contactRouter);
    app.use('/producer',producerRouter);
    app.use('/tag',tagRouter);
    app.use('/',homeRouter);
    app.use('/ordersprocess', ordersProcessRouter);
}

module.exports = route;
