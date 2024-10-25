const Curso = require('../models/cursos.model');



module.exports.getCurso = (req, res) => {
  Curso.find()
    .then((curso) =>  res.json({curso}))
    .catch((err) => res.status(400).json("Error: ", err));
};

module.exports.createCurso = (req, res) => {
  Curso.create(req.body)
    .then((curso) => res.json(curso))
    .catch((err) => res.status(400).json("Error: ", err));
};