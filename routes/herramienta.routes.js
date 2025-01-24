<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const herramienta = require('../controllers/herramienta.controller')


router.get('/herramienta', herramienta.getTools);

 router.get('/herramienta/:id', herramienta.getToolById);
 
router.post('/herramienta', herramienta.createTool);

router.patch('/herramienta/:id', herramienta.updateTool);

router.delete('/herramienta/:id', herramienta.deleteTool);


=======
const express = require("express");
const router = express.Router();
const Tool = require('../controllers/herramienta.controller')

router.get('/herramienta', Tool.getTools)
router.get("/herramienta/:id", Tool.getTool);
router.post('/herramienta', Tool.createTool);
>>>>>>> bc9ce59a6e9a1c84ab0055e9371916e1ed814af3

module.exports = router;