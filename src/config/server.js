/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

// depends
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


//importing routes
const customerRoutes = require('../app/routes/route'); // customer routes


// instancia express
const app = express();


// settings server

app.set('port', process.env.Port || 3000); //settings port
app.set('views', path.join(__dirname, '../app/views')); // route views
app.set('view engine', 'ejs'); //settings engine templates


// midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); //metodo de express que permite entender los datos.


//Conexión con base de datos
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'mysql2020',
  port: 3306,
  database: 'tramites'
}, 'single')
);


// routes

app.use('/', customerRoutes);


// static files

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;