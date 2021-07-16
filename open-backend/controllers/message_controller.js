var Message = require('../models/message_model');

// Display all available messages
exports.message_list = function(req, res) {
    res.send('Message list not yet implemented');
};

// Display a particular message
exports.message_read = function(req, res) {
    res.send('Message reading not yet implemented');
};

// Display message write form on GET
exports.message_write_get = function(req, res) {
    res.send('Mesage writing get not yet implemented');
};

// Handle message write on POST
exports.message_write_post = function(req, res) {
    res.send('Message writing post not yet implemented');
};

// Display message reply form on GET
// May need a parameter of message_id or sender_id, maybe store in req
exports.message_reply_get = function(req, res) {
    res.send('Message reply get not yet implemented');
};

// Handle message reply on GET
// Also needs extra parameter, see above function
exports.message_reply_post = function(req, res) {
    res.send('Message reply post not yet implemented');
};
