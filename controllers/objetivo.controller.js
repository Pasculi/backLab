const Objetivo = require("../models/objetivos.model");

module.exports.getObjetivo = async (req, res) => {
  await Objetivo.find()
    .then((objetivo) => res.json({ objetivo }))
    .catch((err) => res.status(400).json("Error al buscar herramienta:" + err));
};

module.exports.createObjetivo = (req, res) => {
  Objetivo.create(req.body)
    .then((newObjetivo) => res.json({ objetivo: newObjetivo }))
    .catch((err) =>
      res.status(400).json({ message: "Algo ocurrio!!", error: err })
    );
};
