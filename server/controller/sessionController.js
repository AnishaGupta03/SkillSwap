const Session = require('../models/sessionModel');
const Review = require('../models/reviewModel');

// Book a session
exports.createSession = async (req, res) => {
    try {
        const { teacher, skill, timeSlot } = req.body;
        const session = new Session({
            learner: req.user.id,
            teacher,
            skill,
            timeSlot
        });
        await session.save();
        res.status(201).json(session);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all sessions for current user (as learner or teacher)
exports.getMySessions = async (req, res) => {
    try {
        const sessions = await Session.find({
            $or: [
                { learner: req.user.id },
                { teacher: req.user.id }
            ]
        }).populate('learner teacher skill review');
        res.json(sessions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get session by ID
exports.getSessionById = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id).populate('learner teacher skill review');
        if (!session) return res.status(404).json({ message: 'Session not found' });
        if (session.learner.toString() !== req.user.id && session.teacher.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        res.json(session);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update session status (accept/reject/complete)
exports.updateSessionStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const session = await Session.findById(req.params.id);
        if (!session) return res.status(404).json({ message: 'Session not found' });
        if (session.teacher.toString() !== req.user.id) return res.status(403).json({ message: 'Only teacher can update status' });
        session.status = status;
        await session.save();
        res.json(session);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Leave a review for a session
exports.leaveReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const session = await Session.findById(req.params.id);
        if (!session) return res.status(404).json({ message: 'Session not found' });
        if (session.status !== 'completed') return res.status(400).json({ message: 'Session not completed yet' });
        // Only learner or teacher can leave a review
        if (session.learner.toString() !== req.user.id && session.teacher.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        // Prevent duplicate reviews
        if (session.review) return res.status(400).json({ message: 'Review already exists' });
        const review = new Review({
            reviewer: req.user.id,
            reviewee: session.learner.toString() === req.user.id ? session.teacher : session.learner,
            session: session._id,
            rating,
            comment
        });
        await review.save();
        session.review = review._id;
        await session.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 