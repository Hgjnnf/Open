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

exports.makeMessage = function(title, content, to, from) {
    const message = {
        title,
        content, 
        recipients: [to],
        sender_id: from,
        available_at: new Date()
    };
    const id = this.createMessage(message);
    return id;
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
    const id = this.createMessage(message);
    return id;
};

exports.makeSilentMessage = function(title, content) {
    const message = {
        title,
        content, 
        recipients: [],
        available_at: new Date()
    };
    const id = this.createMessage(message);
    return id;
};
