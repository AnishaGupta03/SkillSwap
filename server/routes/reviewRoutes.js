const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController');
const auth = require('../middlewares/authMiddleware');

router.get('/user/:userId', reviewController.getReviewsForUser);
router.get('/:id', reviewController.getReviewById);
router.delete('/:id', auth, reviewController.deleteReview);

module.exports = router; 