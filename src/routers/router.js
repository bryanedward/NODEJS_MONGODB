'use strict'

var express = require('express');
var projectController = require('../../src/controllers/controllers');
var router = express.Router();

//las rutas
router.get('/home',projectController.home);
router.post('/test',projectController.test);
router.post('/save',projectController.saveProject);
router.get('/proyect/:id?', projectController.getProject);
router.get('/projects', projectController.getProjects);

module.exports = router;