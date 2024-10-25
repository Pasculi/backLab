const express = require('express')
const Curso = require('../controllers/curso.controller')
const router = express.Router();


router.get("/curso", Curso.getCurso);
router.post('/curso', Curso.createCurso)


module.exports = router;