const express = require('express');
const router = express.Router();
const counterController = require('../../../controllers/api/v1/counter');

/* /api/v1/counter */
/* get request counter, verwijst naar getCounter fucntie in controller */
router.post("/", counterController.getCounter);




module.exports = router;
