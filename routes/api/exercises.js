const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workoutsCtrl');

// GET /api/items
router.get('/', workoutsCtrl.index);
// GET /api/items/:id
router.get('/:id', workoutsCtrl.show);

module.exports = router;