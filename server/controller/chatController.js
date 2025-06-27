const Chat = require('../models/chatModel');
const Session = require('../models/sessionModel');

// Get chat by session
exports.getChatBySession = async (req, res) => {
    try {
        const chat = await Chat.findOne({ session: req.params.sessionId }).populate('messages.sender', 'name');
        if (!chat) return res.status(404).json({ message: 'Chat not found' });
        // Only session participants can access
        const session = await Session.findById(req.params.sessionId);
        if (!session) return res.status(404).json({ message: 'Session not found' });
        if (session.learner.toString() !== req.user.id && session.teacher.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        res.json(chat);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Send a message (add to chat)
exports.sendMessage = async (req, res) => {
    try {
        const { text } = req.body;
        let chat = await Chat.findOne({ session: req.params.sessionId });
        const session = await Session.findById(req.params.sessionId);
        if (!session) return res.status(404).json({ message: 'Session not found' });
        if (session.learner.toString() !== req.user.id && session.teacher.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        if (!chat) {
            chat = new Chat({ session: req.params.sessionId, messages: [] });
        }
        chat.messages.push({ sender: req.user.id, text });
        await chat.save();
        res.status(201).json(chat);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all messages for a session
exports.getMessages = async (req, res) => {
    try {
        const chat = await Chat.findOne({ session: req.params.sessionId }).populate('messages.sender', 'name');
        if (!chat) return res.status(404).json({ message: 'Chat not found' });
        const session = await Session.findById(req.params.sessionId);
        if (!session) return res.status(404).json({ message: 'Session not found' });
        if (session.learner.toString() !== req.user.id && session.teacher.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        res.json(chat.messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 