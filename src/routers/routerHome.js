var express = require('express');
var router = express.Router();
var controllersHome = require('../controllers/controllersHome');


router.get('/',controllersHome.homePage);





module.exports = router;
