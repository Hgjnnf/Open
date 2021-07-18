var Message = require('../models/message_model');

// Display all available messages
// Currently set up to just display all messages in the DB - need to use current user information to complete
exports.message_list = function(req, res, next) {
    Message.find({}, 'title', function(err, list_messages) {
        if (err) {return next(err);}
        res.render('message_list', {title: 'Your Messages', message_list: list_messages});
    });
};

// Display a particular message
exports.message_read = function(req, res, next) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {return next(err);}
        res.render('message_read', {title: message.title, content: message.content});
    });
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
// Replying can only be done when sender id's are added to the message model
exports.message_reply_get = function(req, res) {
    res.send('Message reply get not yet implemented');
};

// Handle message reply on GET
// Also needs extra parameter, see above function
exports.message_reply_post = function(req, res) {
    res.send('Message reply post not yet implemented');
};
