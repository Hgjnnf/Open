var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    title: {type: String, required: [true, 'Please provide a title']},
    content: {type: String, required: [true, 'Message cannot be empty']}
    // Below parameters to be added when user model is done and connected to DB
    //sender_id: user object id
    //recipients: list of user object id's
});

module.exports = mongoose.model('Message', MessageSchema);
