const Skill = require('../models/skillModel');

// Create a new skill
exports.createSkill = async (req, res) => {
    try {
        const { title, description, level, category, availableTimeSlots, location } = req.body;
        const skill = new Skill({
            title,
            description,
            level,
            category,
            availableTimeSlots,
            location,
            owner: req.user.id
        });
        await skill.save();
        res.status(201).json(skill);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all skills (with optional filters)
exports.getSkills = async (req, res) => {
    try {
        const { category, location, keyword } = req.query;
        let filter = {};
        if (category) filter.category = category;
        if (location) filter.location = location;
        if (keyword) filter.title = { $regex: keyword, $options: 'i' };
        const skills = await Skill.find(filter).populate('owner', 'name city');
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get skill by ID
exports.getSkillById = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id).populate('owner', 'name city');
        if (!skill) return res.status(404).json({ message: 'Skill not found' });
        res.json(skill);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update skill
exports.updateSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (!skill) return res.status(404).json({ message: 'Skill not found' });
        if (skill.owner.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });
        Object.assign(skill, req.body);
        await skill.save();
        res.json(skill);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete skill
exports.deleteSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (!skill) return res.status(404).json({ message: 'Skill not found' });
        if (skill.owner.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });
        await skill.remove();
        res.json({ message: 'Skill deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 