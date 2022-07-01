const express = require('express');
const router = express.Router();
const TwitterController = require('../controllers/TwitterController');


router.get('/buscaTweets', TwitterController.buscaTweets);
// http://localhost:5000/twitter/buscaTweets
// https://equipzillabackend.herokuapp.com/twitter/buscaTweets

router.post('/guardaTweets', TwitterController.guardaTweets);
// http://localhost:5000/twitter/guardaTweets
// https://equipzillabackend.herokuapp.com/twitter/guardaTweets

router.post('/guarda1Tweet', TwitterController.guarda1Tweet);
// http://localhost:5000/twitter/guarda1Tweet
// https://equipzillabackend.herokuapp.com/twitter/guarda1Tweet

module.exports = router;