const Attendance = require('../models/asistencia.model')


/*Try and Catch async-await */
module.exports.findAttendance = async (req, res) => {
  try {
    const allAttendance = await Attendance.find()
     res.json({allAttendance})
    
  } catch (err) {
    res.status(400).json("Error: " + console.log(err));
  }
}

/**Con promesas */
module.exports.createAttendance = async (req, res) => {
  Attendance.create(req.body)
    .then((newAttendance) => res.json({ asistencia: newAttendance }))
    .catch((err) => res.status(400).json("Error: " + console.log(err)));
}
  