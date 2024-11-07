const mongoose = require('mongoose')

const AttendanceSchema = new mongoose.Schema(
  {
    docenteAula: {
      type: String,
      required: true,
    },
    cursoNivel: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      default: new Date(),
    },
    asistencia: {
      type: Number,
      required: true,
    },
    matricula: {
      type: Number,
      required: true,
    },
    herramienta: {
      type: String,
      required: true,
    },
    objetivo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Attendance = mongoose.model('Attendance', AttendanceSchema)

module.exports = Attendance;