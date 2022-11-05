const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/random', getRandomNumber);

module.exports = router;

function getRandomNumber(req, res, next) {
    res.json({
        number: Math.floor(Math.random() * 10)
    })        
}