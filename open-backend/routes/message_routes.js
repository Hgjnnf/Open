const express = require('express');
const router = express.Router();
const {message_write_post, message_reply_post, message_read, message_list} = require('../controllers/message_controller');
const {protect} = require('../middleware/auth');

// POST request for writing a message
router.route('/write').post(protect, message_write_post);

//POST request for replying to a message
router.route('/:id/reply').post(protect, message_reply_post);

// GET request for reading a message
router.route('/:id').get(protect, message_read);

// GET request for list of all messages
router.route('/').get(protect, message_list);

module.exports = router;
