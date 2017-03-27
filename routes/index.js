var express = require('express');
var router = express.Router();

var imageUpload = require('./imageUpload.js');
router.post('/uploadImages', imageUpload.uploadImages);

module.exports = router;