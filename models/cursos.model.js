const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const CursoSchema = new mongoose.Schema({
  nombreCurso: {
    type: String,
    required: [true, ' Ingrese un nombre de curso'],
    unique: true
  },
  matricula: {
    type: Number,
    required: [true, 'Ingrese la matricula del alumno']
  },

}, { timestamps: true })


const Curso = mongoose.model('Curso', CursoSchema);
CursoSchema.plugin(uniqueValidator, "El curso ya existe!");
module.exports = Curso;