/**
 * File: src/routes/index.js
 * Description:  Incident reporting.
 * Data: 18/01/2022
 * Author: Kwabena Ampah
 */


const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Enyata Incident reporting API Node.js + PostgreSQL !',
        version: '1.0.0',
    });
});

module.exports = router;