const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill', required: true },
    timeSlot: { type: String, required: true }, // e.g. ISO date string
    status: { type: String, enum: ['pending', 'accepted', 'rejected', 'completed'], default: 'pending' },
    review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' },
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema); 