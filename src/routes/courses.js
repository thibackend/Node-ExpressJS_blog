const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/:courseSlug', courseController.show);

module.exports = router;
