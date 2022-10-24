const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const path = require('path');
const route = require('./routes');
const db = require('./connection_database/connector.js');
db.connect();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources','views'));
route(app);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
