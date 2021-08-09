var Message = require('../models/message_model');
var User = require('../models/User');

// Display all messages for the user
exports.message_list = function(req, res, next) {
    Message.find({
        available_at: {$lte: new Date()},
        recipients: req.user._id
    },  function(err, list_messages) {
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

// Handle message write on POST
// Validation skipped for now
exports.message_write_post = async function(req, res, next) {
    var message = new Message({
        title: req.body.title,
        content: req.body.content,
        available_at: getAvailableDate(),
        sender_id: req.user._id,
        recipients: await getRecipients(req.user.id)
    });
    message.save(function(err) {
        if (err) {return next(err);}
        res.redirect(message.url);
    });
};

// Handle message reply on POST
exports.message_reply_post = async function(req, res, next) {
    const base_message = await Message.findById(req.params.id);
    var message = new Message({
        title: 'Re: ' + base_message.title,
        content: req.body.content,
        available_at: getAvailableDate(),
        sender_id: req.user._id,
        recipients: [base_message.sender_id]
    });
    message.save(function(err) {
        if (err) {return next(err);}
        res.redirect(message.url);
    });
};

// Get a date object set 1 day after the current date
function getAvailableDate() {
    const date = new Date();
    date.setDate(date.getDate() + 0);
    return date;
};

// Generate up to 3 random user ID's from the database, excluding the current user
async function getRecipients(ownId) {
    const recipients = await User.aggregate([{$sample: {size: 3}}]);
    ids = [];
    recipients.forEach(function(user) {
        if (user._id != ownId) {
            ids.push(user._id);
        }
    });
    return ids;
};