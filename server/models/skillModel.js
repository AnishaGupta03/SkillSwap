const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    category: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    availableTimeSlots: [{ type: String }], // e.g. ISO date strings or custom format
    location: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema); 