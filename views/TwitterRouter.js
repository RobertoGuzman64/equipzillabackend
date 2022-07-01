const express = require('express');
const router = express.Router();
const TwitterController = require('../controllers/TwitterController');


router.get('/buscaTweets', TwitterController.buscaTweets);

router.post('/guardaTweets', TwitterController.guardaTweets);

router.post('/guarda1Tweet', TwitterController.guarda1Tweet);

module.exports = router;