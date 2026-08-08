import {check} from 'express-validator';

export const searchPersonValidator=[
    check('query')
    .trim()
    .notEmpty().withMessage('Query is required')
    .isString().withMessage('Query must be a string')
    .isLength({min:3}).withMessage('Query must be at least 3 characters long')
]

export const searchMovieValidator=[
    check('query')
    .trim()
    .notEmpty().withMessage('Query is required')
    .isString().withMessage('Query must be a string')
    .isLength({min:3}).withMessage('Query must be at least 3 characters long')
]

export const searchTvValidator=[
    check('query')
    .trim()
    .notEmpty().withMessage('Query is required')
    .isString().withMessage('Query must be a string')
    .isLength({min:3}).withMessage('Query must be at least 3 characters long')
]
