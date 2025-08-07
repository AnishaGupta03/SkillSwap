const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';

// Register a new user
exports.register = async (req, res) => {
    try {
        const { name, email, password, city, bio, avatar } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, city, bio, avatar });
        await user.save();
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ token, user, message: "User registered successfully"  });
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, user, message: "User login successfully"  });
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get current user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update profile
exports.updateProfile = async (req, res) => {
    try {
        const updates = req.body;
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }
        const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 