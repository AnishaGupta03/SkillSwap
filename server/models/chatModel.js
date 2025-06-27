const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const chatSchema = new mongoose.Schema({
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true },
    messages: [messageSchema]
}, { timestamps: true });

module.exports = mongoose.model('Chat', chatSchema); 