<<<<<<< HEAD
const Objetivo = require('../models/objetivos.model');

module.exports.getObjetivos = async (req, res, next) => {
    await Objetivo.find()
        .then((objetivos) => res.json({ objetivos }))
        .catch((err) => res.status(404).json("Error: ", err));
};

module.exports.createObjetivo = (req, res, next) => {
    Objetivo.create(req.body)
        .then((objetivo) => res.json(objetivo))
        .catch((err) =>
            res.status(400).json({ message: "Algo ocurrio!!", error: err })
        );
};

module.exports.updateObjetivo = async (req, res, next) => {
    await Objetivo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((objetivo) => res.json(objetivo))
        .catch((err) =>
            res.status(400).json({ message: "Algo ocurrio!!", error: err })
        );
};

module.exports.deleteObjetivo = async (req, res, next) => {
    await Objetivo.deleteOne(req.params._id)
        .then(() => res.json({ message: "Objetivo eliminado" }))
        .catch((err) =>
            res.status(404).json({ message: "Objetivo no encontrado", error: err })
        );
};

module.exports.getIdObjetivo = async (req, res, next) => {
    await Objetivo.findById(req.params.id)
        .then((objetivo) => {
            if (!objetivo) return res.status(404).json({ message: "Objetivo no encontrado" });
            res.json(objetivo);
        })
        .catch((err) => res.status(404).json("Error: ", err));
};
=======
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
>>>>>>> bc9ce59a6e9a1c84ab0055e9371916e1ed814af3
