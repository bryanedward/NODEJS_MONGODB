'use strict'


var express = require('express');
var projectController = require('../../src/controllers/controllers');
var router = express.Router();



//middlewares


var multipart = require('connect-multiparty');
var multipartyMiddleware = multipart({uploadDir: 'src/upload'});

//las rutas
router.get('/home',projectController.home);

router.post('/save',projectController.saveProject);

router.get('/project/:id?', projectController.getProject);

router.get('/projects', projectController.getProjects);

router.put('/projects/:id',projectController.updateProject);

router.delete('/projects/delete/:id',projectController.deleteProject);

router.post('/upload-image/:id',multipartyMiddleware,projectController.uploadImage);


module.exports = router;
