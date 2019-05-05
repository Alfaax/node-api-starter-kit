var express = require('express');
var router = express();

let UserController = require('./user/UserController');
router.use('/user', UserController);

module.exports = router;
