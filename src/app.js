'use strict'
//cargar los modulos
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar los archivo rutas
var project_router = require('./routers/router');
var home_router = require('./routers/routerHome');


//middlewares
app.use(bodyParser.urlencoded({extended:false}));
//que todo tipo de peticion por body se convierte en un json
app.use(bodyParser.json());


//cors

//rutas
app.use('/api',project_router);
app.use("/",home_router);


//exportar
module.exports = app;
