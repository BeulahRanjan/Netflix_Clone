  import express from 'express';
  import { getTrendingMovies,getMovieTrailers,getMovieDetails,getMoviesByCategory,getSimilarMovies} from '../controllers/movieController.js';
  import { trailerValidator,detailsValidator,similarValidator,categoryValidator } from '../helpers/movieValidator.js';
  import { validate } from '../middleware/validate.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

  const router= express.Router();

  router.get('/trending',rateLimiter, getTrendingMovies);
  router.get('/:id/trailers', trailerValidator, validate, getMovieTrailers);
  router.get('/:id/details', detailsValidator, validate, getMovieDetails);
  router.get('/:id/similar', similarValidator, validate, getSimilarMovies);
  router.get('/:category', categoryValidator, validate, getMoviesByCategory); 

  export default router;
 
