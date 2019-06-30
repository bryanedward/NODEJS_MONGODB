'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// el molde 
var projectSchema = Schema({
    name: String,
    description: String,
    category: String,
    langs: String,
    year: Number,
    image : String
});

//exporta el modelo para usarlo en otros ficheros 
module.exports = mongoose.model('Project', projectSchema); 