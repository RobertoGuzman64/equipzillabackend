const express = require('express');
const router = express.Router();
const TwitterController = require('../controllers/TwitterController');


router.get('/guardaTweets', TwitterController.guardaTweets);

router.post('/guarda1Tweet', TwitterController.guarda1Tweet);

module.exports = router;