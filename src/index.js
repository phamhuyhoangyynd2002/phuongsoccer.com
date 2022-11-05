const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const path = require('path');
const route = require('./routes');
const db = require('./connection_database/connector.js');
var session = require('express-session');
db.connect();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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
