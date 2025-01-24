<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Objetivo = require("../controllers/objetivo.controller");


router.get('/objetivo', Objetivo.getObjetivos);

router.get('/objetivo/:id', Objetivo.getIdObjetivo);

router.post('/objetivo', Objetivo.createObjetivo);

router.patch('/objetivo/:id', Objetivo.updateObjetivo);

router.delete('/objetivo/:id', Objetivo.deleteObjetivo);




module.exports = router;
=======
const express = require("express");
const Objetivo = require("../controllers/objetivo.controller");
const router = express.Router();

router.get("/objetivo", Objetivo.getObjetivo);
router.post("/objetivo", Objetivo.createObjetivo);

module.exports = router;
>>>>>>> bc9ce59a6e9a1c84ab0055e9371916e1ed814af3
