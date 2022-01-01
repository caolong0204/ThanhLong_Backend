
const express = require('express');
const router = express.Router();
const courseController = require(__path_controllers+'CourseController');

router.use('/list', courseController.getList);
router.get('/listPerson', courseController.getListPerson);
router.post('/save', courseController.create);
router.use('/', courseController.index);


module.exports = router;