const express = require('express');
const router = express.Router();
const exerciseCtrl = require('../../controllers/api/exerciseEntry');

router.post('/:id', exerciseCtrl.createEntry);

module.exports = router;