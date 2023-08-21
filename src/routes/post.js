const express = require('express');
const router = express.Router();
const postController = require('../app/controllers/PostController');

router.post('/', postController.postContent);
router.get('/', postController.index);

module.exports = router;
