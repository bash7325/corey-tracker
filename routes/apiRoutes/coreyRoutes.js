const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

//route to home
router.get('/', (req, res) => {
    res.render('index');
})

router.get('*', (req, res) => {
    res.render('index');
});

module.exports = router;