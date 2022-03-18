const express = require('express');
const router = express.Router();

/* /api/v1/counter */
/* get request counter */

router.get("/", (req, res) => {
    res.json({
        "status": "succes",
        "data": {
            "counter": "counter"
        }
    })
});
