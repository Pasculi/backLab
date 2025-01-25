const express = require('express');
const app = express();
const Ruta = require("./routes/attendance.routes");
const Curso = require('./routes/curso.routes');
const Docente = require("./routes/docente.routes");
const Objetivo = require("./routes/objetivo.routes");
const Herramienta = require('./routes/herramienta.routes');
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

app.use(cors());




/* app.use((req, res, next) => {
  const { origin } = req.headers; // Obtener el origen de la solicitud
  const { method } = req; // Obtener el método HTTP de la solicitud
  const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  if (method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", DEFAULT_ALLOWED_METHODS);
    const requestHeaders = req.headers["access-control-request-headers"];
    res.header("Access-Control-Allow-Headers", requestHeaders);
    return res.end();
  }
  next();
}); */

app.use("/api/v1", Ruta, Curso, Docente, Objetivo, Herramienta);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
