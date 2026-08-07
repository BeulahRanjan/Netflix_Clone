  import express from 'express';
  import { getTrendingMovies,getMovieTrailers,getMovieDetails,getMoviesByCategory,getSimilarMovies} from '../controllers/movieController.js';
  import { trailerValidator,detailsValidator,similarValidator,categoryValidator } from '../helpers/movieValidator.js';
  import { validate } from '../middlewares/validate.js';

  const router= express.Router();

  router.get('/trending', getTrendingMovies);
  router.get('/:id/trailers', validate(trailerValidator), validate, getMovieTrailers);
  router.get('/:id/details', validate(detailsValidator), validate, getMovieDetails);
  router.get('/:id/similar', validate(similarValidator), validate, getSimilarMovies);
  router.get('/:category', validate(categoryValidator), validate, getMoviesByCategory); 

  export default router;
 
