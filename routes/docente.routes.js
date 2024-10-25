const express = require('express');
const Docente = require('../controllers/docente.controller')
const router = express.Router();

router.get('/docente', Docente.getDocente)
router.post("/docente", Docente.createDocente);

module.exports = router;