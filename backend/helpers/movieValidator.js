import {body} from 'express-validator';

export const trailerValidator=[
    body('id')
    .notEmpty().withMessage('Movie ID is required') 
    .isInt().withMessage('Movie ID must be an integer')
]

export const detailsValidator=[
    body('id')
    .notEmpty().withMessage('Movie ID is required') 
    .isInt().withMessage('Movie ID must be an integer')
]

export const similarValidator=[
    body('id')
    .notEmpty().withMessage('Movie ID is required') 
    .isInt().withMessage('Movie ID must be an integer')
]

