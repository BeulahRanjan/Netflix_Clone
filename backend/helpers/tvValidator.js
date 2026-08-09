import {check} from 'express-validator';

import { ON_THE_AIR, TOP_RATED, POPULAR, AIRING_TODAY } from '../utils/constants.js';
 
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
        if(value == AIRING_TODAY || value == TOP_RATED || value == POPULAR || value == ON_THE_AIR){
            return true;
        }
        throw new Error('Invalid category');
    })
]