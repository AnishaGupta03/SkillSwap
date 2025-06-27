const express = require('express');
const router = express.Router();
const skillController = require('../controller/skillController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, skillController.createSkill);
router.get('/', skillController.getSkills);
router.get('/:id', skillController.getSkillById);
router.put('/:id', auth, skillController.updateSkill);
router.delete('/:id', auth, skillController.deleteSkill);

module.exports = router; 