'use strict'

var mongoose = require('mongoose');
//la configuracion donde fue hecha
var app = require('./app');
const config = require('./config');

mongoose.Promise = global.Promise;

mongoose.connect(config.db, {useNewUrlParser : true})
    .then(()=>{
        //crear el servidor
        app.listen(config.port,()=>{
            console.log("servidor corriendo perfectamente");
        });
    })
    .catch(err => console.log('hay errores', err));
