const express = require('express');
const router = express.Router();
const sessionController = require('../controller/sessionController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, sessionController.createSession);
router.get('/', auth, sessionController.getMySessions);
router.get('/:id', auth, sessionController.getSessionById);
router.put('/:id/status', auth, sessionController.updateSessionStatus);
router.post('/:id/review', auth, sessionController.leaveReview);

module.exports = router; 