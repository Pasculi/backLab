const mongoose = require('mongoose')
var uniqueValidator = require("mongoose-unique-validator");

const DocenteSchema = new mongoose.Schema(
  {
    nombreDocente: {
      type: String,
      required: [true, 'Ingrese el nombre del Docente']
    },
    apellidoDocente: {
      type: String,
      required: [true, 'Ingrese el apellido del Docente']
    },
    emailDocente: {
      type: String,
      required: [true, 'Ingrese el email del Docente'],
      unique: [true,  'El email ya existe']
    },
    curso: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso'
      }
    ]

  },{timestamps:true}
)
const Docente = mongoose.model("Docente", DocenteSchema);
DocenteSchema.plugin(uniqueValidator);
module.exports = Docente;