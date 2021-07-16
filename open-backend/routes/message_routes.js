const express = require('express');
var router = express.Router();
const message_controller = require('../controllers/message_controller');

// GET request for writing a message
router.get('/write', message_controller.message_write_get);

// POST request for writing a message
router.post('/write', message_controller.message_write_post);

// GET request for replying to a message
router.get('/:id/reply', message_controller.message_reply_get);

//POST request for replying to a message
router.post('/:id/reply', message_controller.message_reply_post);

// GET request for reading a message
router.get('/:id', message_controller.message_read);

// GET request for list of all messages
router.get('/messages', message_controller.message_list);
