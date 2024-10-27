const express = require("express");
const router = express.Router();
const Tool = require('../controllers/herramienta.controller')

router.get('/herramienta', Tool.getTools)
router.post('/herramienta', Tool.createTool);

module.exports = router;