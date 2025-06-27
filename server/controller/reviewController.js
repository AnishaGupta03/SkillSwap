const Review = require('../models/reviewModel');

// Get all reviews for a user
exports.getReviewsForUser = async (req, res) => {
    try {
        const reviews = await Review.find({ reviewee: req.params.userId }).populate('reviewer', 'name');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get review by ID
exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('reviewer', 'name');
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete review (only by reviewer or admin)
exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        if (review.reviewer.toString() !== req.user.id /* && !req.user.isAdmin */) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        await review.remove();
        res.json({ message: 'Review deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 