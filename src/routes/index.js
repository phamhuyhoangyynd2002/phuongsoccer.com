const homeRouter = require('./home');
const accountRouter = require('./account');
const productRouter = require('./product');
function route(app){

    app.use('/account',accountRouter);
    app.use('/product',productRouter);
    app.use('/',homeRouter);
}

module.exports = route;