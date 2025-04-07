const express = require('express');
const { validationResult } = require('express-validator');
const { 
  addGoalValidation, 
  updateGoalValidation, 
  deleteGoalValidation 
} = require('../../../validators/goal');

const router = express.Router();
const goal_controller = require('../../../controllers/api/goal');

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

router.put('/:id', updateGoalValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  goal_controller.update(req, res);
});

router.delete('/:id', deleteGoalValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  goal_controller.delete(req, res);
});




module.exports = router;