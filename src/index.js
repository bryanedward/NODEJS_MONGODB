'use strict'

var mongoose = require('mongoose');
//la configuracion donde fue hecha
var app = require('./app');
var port = 3700;
var MONGODB_URI = 'mongodb://heroku_d552rbjp:nrq7heatih0gh5qc5s6k5cbs2s@ds213079.mlab.com:13079/heroku_d552rbjp';


mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, {useNewUrlParser : true})
    .then(()=>{
        //crear el servidor
        app.listen(port,()=>{
            console.log("servidor corriendo perfectamente");
        });
    })
    .catch(err => console.log('hay errores', err));
