const express = require('express');
const { validationResult } = require('express-validator');
const { addGoalValidation } = require('../../../validators/goal');  // Импорт валидации для целей

const router = express.Router();
const goal_controller = require('../../../controllers/api/goal');  // Импорт контроллера для целей

// Define API routes

router.get('/', (req, res) => {
  goal_controller.getAll(req, res);
});

router.post('/', addGoalValidation(), (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  goal_controller.create(req, res);
});

module.exports = router;