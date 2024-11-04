const express = require('express');
const app = express();
const Ruta = require("./routes/attendance.routes");
const Curso = require('./routes/curso.routes');
const Docente = require("./routes/docente.routes");
const Tool = require("./routes/herramienta.routes");
const Objetivo = require("./routes/objetivo.routes");
require('dotenv').config()
const path = require("path");
const morgan = require('morgan')
const { mongoose } = require('./config/config.mongoose')
const cors = require("cors");

const PORT = process.env.PORT || 5001

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(path.join(__dirname, 'public'))

app.use(cors({origin: '*'}));


app.use("/api/v1", Ruta, Curso, Docente, Tool, Objetivo);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});