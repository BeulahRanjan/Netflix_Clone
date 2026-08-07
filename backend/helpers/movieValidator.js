import {body} from 'express-validator';

export const trailerValidator=[
    body('id')
    .notEmpty().withMessage('Movie ID is required') 
    .isInt().withMessage('Movie ID must be an integer')
]