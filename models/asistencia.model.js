const mongoose = require('mongoose')

const AttendanceSchema = new mongoose.Schema(
  {
    
  },
  { timestamps: true }
);

const Attendance = mongoose.model('Attendance', AttendanceSchema)

module.exports = Attendance;