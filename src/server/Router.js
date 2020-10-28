const express = require('express');
const Ctrl = require('./Ctrl');

const router = express.Router();

router.get('/', Ctrl.helloWorld);
router.get('/scan', Ctrl.runScan);
module.exports = router;
