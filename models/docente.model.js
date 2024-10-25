const mongoose = require('mongoose')


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
    email: {
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
module.exports = Docente;