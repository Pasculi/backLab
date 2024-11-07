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
