const { SchemaTypes } = require('mongoose');
const mongoose = require('mongoose')

const AttendanceSchema = new mongoose.Schema(
  {
    nombreDocente: {
      type: String,
      required: [true, "El nombre del docente es requerido"],
      minlength: [3, "El nombre del docente debe tener al menos 3 caracteres"],
      maxlength: [
        50,
        "El nombre del docente no puede superar los 50 caracteres",
      ],
    },
    curso: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Curso'
      }
    ]
  },
  { timestamps: true }
);

const Attendance = mongoose.model('Attendance', AttendanceSchema)

module.exports = Attendance;