import {body} from 'express-validator';

export const signupValidator = [
    body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .isLength({min:6}).withMessage('Email must be at least 6 characters long')
    .isEmail().normalizeEmail(),


    body('password')
    .trim()
    .notEmpty().withMessage('Password is required')
    .isLength({min:6}).withMessage('Password must be at least 6 characters long')
    .matches(/[A-Z]/).withMessage("Password must contain atleast one uppercase character")
    .matches(/[a-z]/).withMessage("Password must contain atleast one lowercase character")
    .matches(/[0-9]/).withMessage("Password must contain atleast one digit")
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("Password must contain atleast one special character")
]
