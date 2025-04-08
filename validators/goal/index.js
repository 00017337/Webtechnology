const { body, param } = require('express-validator');
const goal_service = require('../../services/goal');

const addGoalValidation = () => {
  return [
    body('goalName')
      .notEmpty().withMessage('Goal name must not be empty')
      .isLength({ min: 5, max: 255 }).withMessage('Goal name must be between 5 and 255 characters long'),
    
    body('startDateTime')
      .notEmpty().withMessage('Start date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
      .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    
    body('target')
      .notEmpty().withMessage('Target must not be empty')
      .isLength({ max: 500 }).withMessage('Target is too long (max 500 characters)'),
    
    body('age')
      .notEmpty().withMessage('Age must not be empty')
      .isInt({ min: 1, max: 120 }).withMessage('Age must be between 1 and 120'),
    
    body('currentWeight')
      .notEmpty().withMessage('Current weight must not be empty')
      .isFloat({ min: 20, max: 300 }).withMessage('Weight must be between 20 and 300 kg'),
    
    body('height')
      .notEmpty().withMessage('Height must not be empty')
      .isInt({ min: 50, max: 250 }).withMessage('Height must be between 50 and 250 cm')
  ];
};

const deleteGoalValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await goal_service.getById(id);
      if (!exists) {
        throw new Error('Goal not found');
      }
    })
  ];
};

const updateGoalValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await goal_service.getById(id);
      if (!exists) {
        throw new Error('Goal not found');
      }
    }),
    ...addGoalValidation()
  ];
};

module.exports = {
  addGoalValidation,
  updateGoalValidation,
  deleteGoalValidation
};