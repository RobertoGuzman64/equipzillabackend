const express = require('express');
const router = express.Router();
const TwitterController = require('../controllers/TwitterController');


router.get('/muestraTweets', TwitterController.muestraTweets);

router.post('/guardaTweets', TwitterController.guardaTweets);

module.exports = router;