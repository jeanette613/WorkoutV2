const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/exerciseCtrl');

router.post('/:id/log', workoutsCtrl.index);

router.post('/:id/show', workoutsCtrl.show);


module.exports = router;