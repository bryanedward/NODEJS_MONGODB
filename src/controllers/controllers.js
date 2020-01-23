'use strict'

var Project = require('../models/projects');
var fs = require('fs');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'soy home'
        });
    },



    saveProject: function (req, res) {
      // TODO: funcion para guardar datos en la db
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;


        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: 'errror al guardar' });

            if (!projectStored) return res.status(404).send({ message: 'no se ha podido guardar el proyecto' });

            return res.status(200).send({ message: 'archivo almacenado' });
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

            return res.status(200).send( projects );
        });
    },



    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdate) => {
            if (err) return res.status(500).send({ message: 'error al actualizar' });

            if (!projectUpdate) return res.status(404).send({ message: 'no existe el projecto para actualizar' });

            return res.status(200).send({
                project: projectUpdate
            });
        });
    },


    deleteProject: function (req, res) {
        var projectId = req.params.id;
        Project.findByIdAndDelete(projectId, (err, projectDeleted) => {
            if (err) return res.send({ message: "error" });

            if (!projectDeleted) return res.send({ message: "no se puede eliminar" });

            return res.status(200).send({
                project: projectDeleted
            });
        });
    },


    uploadImage: function (req, res) {
        var projectId = req.params.id;
        var fileName = 'Error upload';

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split("\\");
            var fileName = fileSplit[2];

            var extSplit = fileName.split("\.");
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectUpdate) => {
                    if (err) return res.status(200).send({ message: "la imagen no se subio" });

                    if (!projectUpdate) return res.status(404).send({ message: "el projecto no exite" });
                    return res.status(200).send({ project: projectUpdate });
                });

            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:"la extension no es valida"});
                })
            }



        } else {
            console.log("error3")
            return res.status(200).send({ message: fileName })
        }
    },



};



//exportar fuera del projecto
module.exports = controller;
