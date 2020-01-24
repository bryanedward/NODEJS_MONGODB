
const express = require('express');
const path = require('path');
var controllerHome = {
    homePage: function (req, res){
      return res.sendFile(path.resolve('./src/views/index.html'));
    }
}


module.exports = controllerHome;
