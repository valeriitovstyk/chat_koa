const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MessagesSchema = new Schema(
    {
        message_text: {
            type: String,
            required: true
        },
        author_name: {
            type: String,
            required: true
        },
        author_email: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
    }
);

const MessageModel = mongoose.model('Messages', MessagesSchema);

module.exports = MessageModel;