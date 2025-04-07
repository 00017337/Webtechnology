const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');

// Главная страница
router.get('/', home_controller.index);

// Страница добавления цели
router.get('/goals/add', home_controller.addGoalPage);

// Страница обновления цели по ID
router.get('/goals/update/:id', home_controller.updateGoalPage);

module.exports = router;