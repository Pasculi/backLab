const Docente = require('../models/docente.model');





module.exports.getDocente = async (req, res) => {
  await Docente.findById(req.params.id)
    .populate("curso")
    .then((docente) => res.json({ docente }))
    .catch((err) =>
      res.status(400).json({ message: "Error al buscar docente", err })
    );
}


  
module.exports.getDocentes = async (req, res) => {
  await Docente.find()
    .populate("curso")
    .then((allDocente) => res.json({ allDocente }))
    .catch((err) =>
      res.status(400).json({ message: "Error al buscar docentes", err })
    );
};

module.exports.createDocente = (req, res) => {
  console.log(req.body)
  Docente.create(req.body)
    .then((newDocente) =>{
      res.status(201).json({
        message: "Docente creado con exitos",
        newDocente,
      })
    })
    .catch((error) => {
      res
        .status(400)
        .json({ message: "Error al crear el docente", error: error })
    });
};