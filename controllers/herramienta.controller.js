const Tool = require('../models/herramientas.model')

module.exports.getTools = async (req, res) => {
  await Tool.find()
  .populate('objetivo')
    .then((tools) => res.json({ tools }))
    .catch((err) => res.status(400).json("Error al buscar herramienta:" + err));
}

module.exports.createTool = (req, res) => {
  Tool.create(req.body)
    .then((newTool) => res.json({ Tool: newTool }))
    .catch((err) =>
      res.status(400).json({ message: "Algo ocurrio!!", error: err })
    );
};