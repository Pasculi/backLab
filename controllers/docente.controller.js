const Docente = require('../models/docente.model');


module.exports.getDocente = async (req, res) => {
  await Docente.find()
    .populate("curso")
    .then((allDocente) => res.json({ allDocente }))
    .catch((err) =>
      res.status(400).json({ message: "Error busqueda docente", err })
    );
};

module.exports.createDocente = (req, res) => {
  Docente.create(req.body)
    .then((newDocente) => res.json({ docente: newDocente }))
    .catch((err) =>
      res.status(400).json({ message: "Algo ocurrio!!", error: err })
    );
};