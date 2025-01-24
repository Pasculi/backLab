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
<<<<<<< HEAD
      res.status(400).json({ message: "Error busqueda docente", err })
=======
      res.status(400).json({ message: "Error al buscar docentes", err })
>>>>>>> bc9ce59a6e9a1c84ab0055e9371916e1ed814af3
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
        .json({error })
    });
};

module.exports.updateDocente = async (req, res) => {
  try {
    const { id } = req.params;
    const { curso } = req.body;

    const updatedDocente = await Docente.findByIdAndUpdate(
      id,
      { $push: { curso: curso } },
      { new: true }
    ).populate("curso");

    if (!updatedDocente) {
      return res.status(404).json({ message: "Docente no encontrado" });
    }

    res.json({ updatedDocente });
  } catch (err) {
    res.status(400).json({ message: "Error al actualizar docente", err });
  }
};
