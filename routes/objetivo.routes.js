const express = require("express");
const Objetivo = require("../controllers/objetivo.controller");
const router = express.Router();

router.get("/objetivo", Objetivo.getObjetivo);
router.post("/objetivo", Objetivo.createObjetivo);

module.exports = router;
