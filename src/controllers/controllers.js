'use strict'

var Project = require('../models/projects');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'soy home'
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: 'soy el metodo test'
        });
    },

    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: 'errror al guardar' });

            if (!projectStored) return res.status(404).send({ message: 'no se ha podido guardar el proyecto' });

            return res.status(200).send({ project: projectStored });
        });

    },


    getProject: function (req, res) {
        console.log(res);
        var projectId = req.params.id;

        if (projectId == null) return res.status(500).send({ message: 'erroen delvolver el mensaje' });

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({ message: 'erroen delvolver el mensaje' });

            if (!project) return res.status(404).send({ message: 'el proyecto no existe' });

            return res.status(200).send({
                project
            });
        });
    },

    getProjects: function (req, res) {

        Project.find({}).sort('-year').exec((err, projects) => {
            if (err) return res.status(500).send({ message: 'Error al delvover los datos' });

            if (!projects) return (404).send({ message: 'No hay proyectos que mostrar' });

            return res.status(200).send({ projects });
        });
    },


    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, (err, projectUdapte) => {
            if (err) return res.status();
        });

    }
};

//exportar fuera del projecto
module.exports = controller;