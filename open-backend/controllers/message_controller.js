var Message = require('../models/message_model');
var User = require('../models/User');

// Display all available messages
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

// Handle message reply on GET
// Also needs extra parameter, see above function
exports.message_reply_post = function(req, res) {
    res.send('Message reply post not yet implemented');
};

function getAvailableDate() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
};

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