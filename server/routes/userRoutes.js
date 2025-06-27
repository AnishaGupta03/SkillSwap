const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const auth = require('../middlewares/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, userController.updateProfile);
router.get('/:id', auth, userController.getUserById);

module.exports = router; 