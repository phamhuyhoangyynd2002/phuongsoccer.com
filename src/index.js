const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes');
const session = require('express-session');
const fileUpload = require('express-fileupload');
require('dotenv').config();

process.env.PORT = 3000;
process.env.KEY_TOKEN = 123456;

const port = process.env.PORT || 3000;

//session middleware
app.use(session({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  resave: false
}));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.session=req.session;
  next();
});

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  res.header("Access-Control-Allow-Credentials", true);
  next();
};

app.use(allowCrossDomain);
//static file
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/font', express.static(path.join(__dirname, 'public/font')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources','views'));
app.use(fileUpload());
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
