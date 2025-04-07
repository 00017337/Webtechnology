const { body } = require('express-validator');

const addGoalValidation = () => {
  return [
// validation
    body('goalName')
      .notEmpty().withMessage('Goal name must not be empty')
      .isLength({ min: 3, max: 255 }).withMessage('Goal name must be between 3 and 255 characters long'),

    body('startDateTime')
      .notEmpty().withMessage('Start date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
      .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),

    body('target')
      .notEmpty().withMessage('Target must not be empty'),

    body('age')
      .isInt({ min: 1 }).withMessage('Age must be a positive integer'),

    body('currentWeight')
      .isFloat({ min: 1 }).withMessage('Current weight must be a valid number'),

    body('height')
      .isInt({ min: 50 }).withMessage('Height must be a valid number greater than or equal to 50 cm'),

    body('goalImage')
      .optional()
      .isURL().withMessage('Goal image must be a valid URL if provided'),
  ];
};

module.exports = {
  addGoalValidation
};