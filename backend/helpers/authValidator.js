import {body, check} from 'express-validator';

export const signupValidator = [
    check('username') 
    .trim()
    .notEmpty().withMessage('Username is required')
    .isLength({min:2, max:100}).withMessage('Username must be between 2 and 100 characters long'),

    check('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .isLength({min:6}).withMessage('Email must be at least 6 characters long')
    .isEmail().normalizeEmail(),


    check('password')
    .trim()
    .notEmpty().withMessage('Password is required')
    .isLength({min:6}).withMessage('Password must be at least 6 characters long')
    .matches(/[A-Z]/).withMessage("Password must contain atleast one uppercase character")
    .matches(/[a-z]/).withMessage("Password must contain atleast one lowercase character")
    .matches(/[0-9]/).withMessage("Password must contain atleast one digit")
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("Password must contain atleast one special character")
]

export const loginValidator = [

    check('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .isEmail().normalizeEmail(),


    check('password')
    .trim()
    .notEmpty().withMessage('Password is required')
]
