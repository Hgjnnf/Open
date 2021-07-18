var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    title: {type: String, required: [true, 'Please provide a title']},
    content: {type: String, required: [true, 'Message cannot be empty']},
    available_at: {type: Date},
    sender_id: {type: Schema.Types.ObjectId, ref: 'User'},
    recipients: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

// Virtual for message URL
MessageSchema
.virtual('url')
.get(function () {
  return '/' + this._id;
});

module.exports = mongoose.model('Message', MessageSchema);
