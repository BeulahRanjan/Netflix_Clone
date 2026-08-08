import {body} from 'express-validator';
import { NOW_PLAYING, TOP_RATED, POPULAR, UPCOMING } from '../utils/constants.js';
 
export const trailerValidator=[
    check('id')
    .notEmpty().withMessage('Movie ID is required') 
    .isInt().withMessage('Movie ID must be an integer')
]

export const detailsValidator=[
    check('id')
    .notEmpty().withMessage('Movie ID is required') 
    .isInt().withMessage('Movie ID must be an integer')
]

export const similarValidator=[
    check('id')
    .notEmpty().withMessage('Movie ID is required') 
    .isInt().withMessage('Movie ID must be an integer')
]

export const categoryValidator=[
    check('category')
    .notEmpty().withMessage('Category is required') 
    .isString().withMessage('Category must be a string')
    .custom((value) =>{
        if(value == NOW_PLAYING || value == TOP_RATED || value == POPULAR || value == UPCOMING){
            return true;
        }
        throw new Error('Invalid category');
    })
]