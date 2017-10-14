const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// MODELS
const user = require('./router/user.router.js')(); //una linea por cada coleccion que se realice

let app = express(); //configura las rutas

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTERS

app.use("/v1/user", user); //enlaza con la ruta de usuarios

module.exports = app;