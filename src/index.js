'use strict'

var mongoose = require('mongoose');
//la configuracion donde fue hecha 
var app = require('./app');
var port = 3700;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(()=>{
        //crear el servidor
        app.listen(port,()=>{
            console.log("servidor corriendo perfectamente.");
        });
    })
    .catch(err => console.log('hay errores', err));

