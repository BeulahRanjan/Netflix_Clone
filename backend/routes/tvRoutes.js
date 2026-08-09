import express from 'express';
import { getSimilarTV,getTVByCategory,getTVDetails,getTVTrailers,getTrendingTV } from '../controllers/tvController.js';
import { trailerValidator,detailsValidator,similarValidator,categoryValidator } from '../helpers/tvValidator.js';

const router = express.Router();

router.get('/trending', getTrendingTV);
router.get('/:id/trailers',trailerValidator,validate, getTVTrailers);
router.get('/:id/details',detailsValidator,validate, getTVDetails);
router.get('/:id/similar',similarValidator,validate, getSimilarTV);
router.get('/:category', getTVByCategory );

export default router; 