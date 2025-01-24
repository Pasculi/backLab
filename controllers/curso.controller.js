<<<<<<< HEAD
const Curso = require('../models/cursos.model');


module.exports.getCurso = (req, res, netx) => {
  Curso.find()
    .then((curso) =>  res.json({curso}))
    .catch((err) => res.status(404).json("Error: ", err));
};

module.exports.getIdCurso = async(req, res, next) => {
  try {
    const curso = await Curso.findById(req.params.id);
    if(!curso) return res.status(404).json({message: "Curso no encontrado"});
    res.json(curso);
  } catch (error) {
    next(error);
  }
};

module.exports.createCurso = (req, res, next) => {
  Curso.create(req.body)
    .then((curso) => res.json(curso))
    .catch((err) => res.status(404).json("Error: ", err));
};

module.exports.updateCurso = async(req, res, next) => {
  try {
    const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!curso) return res.status(404).json({message: "Curso no encontrado"});
    res.json(curso);
  } catch (error) {
    next(error);
  }
};
=======
const Curso = require("../models/cursos.model");

module.exports.getCurso = (req, res) => {
  Curso.find()
    .then((curso) => res.json(curso))
    .catch((err) => res.status(400).json("Error: ", err));
};



// Ejemplo de función de controlador
module.exports.createCurso = (req, res) => {
  console.log(req.body);
  Curso.create(req.body)
    .then((newCurso) => {
      res.status(201).json({
        message: "Curso creado exitosamente",
        newCurso,
      });
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        error
      });
    });
};
>>>>>>> bc9ce59a6e9a1c84ab0055e9371916e1ed814af3
