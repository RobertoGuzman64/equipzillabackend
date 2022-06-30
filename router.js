const router = require('express').Router();

const TwitterRouter = require('./views/TwitterRouter');

router.use('/twitter', TwitterRouter);

module.exports = router;