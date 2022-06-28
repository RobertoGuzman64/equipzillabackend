const router = require('express').Router();

const TwitterRouter = require('./views/TwitterRouter');

router.use('/twiter', TwitterRouter);

module.exports = router;