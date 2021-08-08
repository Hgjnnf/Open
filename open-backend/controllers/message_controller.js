var Message = require('../models/message_model');

// Display all available messages
// Currently set up to just display all messages in the DB - need to use current user information to complete
exports.message_list = function(req, res, next) {
    Message.find({},  function(err, list_messages) {
        if (err) {return next(err);}
        res.json({message_list: list_messages});
    });
};

// Display a particular message
exports.message_read = function(req, res, next) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {return next(err);}
        res.json({title: message.title, content: message.content});
    });
};

// Display message write form on GET
// Likely not going into the final product, just need an interface for now
exports.message_write_get = function(req, res, next) {
    res.render('message_write', { page: 'Write Message'});
};

// Handle message write on POST
// Validation skipped for now
exports.message_write_post = function(req, res, next) {
    var message = new Message({
        title: req.body.title,
        content: req.body.content,
        available_at: getAvailableDate(),
        sender_id: req.user._id
    });
    message.save(function(err) {
        if (err) {return next(err);}
        res.redirect(message.url);
    });
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

function getAvailableDate() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
}