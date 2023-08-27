const express = require('express');
const router = express.Router();

/* GET csrf listing. */
const { isProduction } = require('../../config/keys');

if (!isProduction) {
    router.get('/restore', (req, res) => {
        const csrfToken = req.csrfToken();
        res.status(200).json({
            'CSRF-Token': csrfToken
        })
    });
}


module.exports = router;
