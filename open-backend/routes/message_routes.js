const express = require('express');
var router = express.Router();
const message_controller = require('../controllers/message_controller');

// POST request for writing a message
router.post('/write', message_controller.message_write_post);

//POST request for replying to a message
router.post('/:id/reply', message_controller.message_reply_post);

// GET request for reading a message
router.get('/:id', message_controller.message_read);

// GET request for list of all messages
router.get('/', message_controller.message_list);

module.exports = router;
