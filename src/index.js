const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes');
const { auth } = require('express-openid-connect');
const mysql = require('mysql');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:3000',
  clientID: 'qF2PiheLUk8eNKiDtLi76KU9SxSrrEMg',
  issuerBaseURL: 'https://dev-ydqmozu1.us.auth0.com',
  secret: 'LONG_RANDOM_STRING'
};

const port = 3000;

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  next();
});
//static file
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources','views'));
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
