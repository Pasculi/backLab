const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nombreCurso: {
    type: String,
    required: [true, ' Ingrese un nombre de curso']
  },
  matricula: {
    type: Number,
    required: [true, 'Ingrese la matricula del alumno']
  },

}, { timestamps: true })


const Curso = mongoose.model('Curso', CursoSchema);
module.exports = Curso;