const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    avatar: { type: String }, // URL or path
    city: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    skillsToTeach: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
    skillsToLearn: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
