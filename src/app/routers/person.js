
const express = require('express');
const router = express.Router();
const personController = require(__path_controllers+'PersonController');

router.use('/list', personController.getList);
router.post('/save', personController.create);
router.use('/', personController.index);


module.exports = router;