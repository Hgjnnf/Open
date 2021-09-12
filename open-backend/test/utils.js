var Message = require('../models/message_model');
var User = require('../models/User');

exports.createMessage = (properties) => {
    const message = new Message(properties);
    message.save();
    return message._id;
};

exports.createUser = (properties) => {
    const user = new User(properties);
    user.save();
    return user._id;
}

exports.clearDB = () => {
    Message.deleteMany({});
    User.deleteMany({});
}

exports.makeMessage = function(title, content, to) {
    const message = {
        title,
        content, 
        recipients: [to],
        available_at: new Date()
    };
    this.createMessage(message);
};

exports.makeFutureMessage = function(title, content, to) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const message = {
        title,
        content, 
        recipients: [to],
        available_at: date
    };
    this.createMessage(message);
};

exports.makeSilentMessage = function(title, content) {
    const message = {
        title,
        content, 
        recipients: [],
        available_at: new Date()
    };
    this.createMessage(message);
}