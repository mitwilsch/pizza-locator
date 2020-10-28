const express = require('express');
const Ctrl = require('./Ctrl');

const router = express.Router();

router.get('/', Ctrl.helloWorld);

module.exports = router;
