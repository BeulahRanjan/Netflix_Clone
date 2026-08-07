import {body} from 'express-validator';

export const signupValidator = [
    body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .isLength({min:6}).withMessage('Email must be at least 6 characters long')
    .isEmail().normalizeEmail(),
]