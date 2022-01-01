
const express = require('express');
const router = express.Router();
const musicController = require(__path_controllers+'MusicController');

router.post('/createmp3', musicController.convertToMp3);
router.use('/', musicController.index);
module.exports = router;