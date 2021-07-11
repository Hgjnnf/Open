var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    title: {type: String, required: [true, 'Please provide a title']},
    content: {type: String, required: [true, 'Message cannot be empty']}
});

module.exports = mongoose.model('Message', MessageSchema);