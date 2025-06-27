const express = require('express');
const router = express.Router();
const chatController = require('../controller/chatController');
const auth = require('../middlewares/authMiddleware');

router.get('/:sessionId', auth, chatController.getChatBySession);
router.post('/:sessionId/message', auth, chatController.sendMessage);
router.get('/:sessionId/messages', auth, chatController.getMessages);

module.exports = router; 