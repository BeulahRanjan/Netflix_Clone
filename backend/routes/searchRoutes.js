import express from 'express';
import { getSearchHistory,removeItemFromSearchHistory,
    searchMovie,searchPerson,searchTv
 } from '../controllers/searchController.js';
 import { searchPersonValidator, searchMovieValidator,searchTvValidator,removeItemFromSearchHistoryValidator } from '../helpers/searchValidator.js';

import { validate } from '../middleware/validate.js';
 const router = express.Router();

 router.get("/person/:query",searchPersonValidator, validate, searchPerson);
 router.get("/movie/:query",searchMovieValidator,validate, searchMovie);
 router.get("/tv/:query", searchTvValidator,validate, searchTv);
 router.get("/history", getSearchHistory);
 router.delete("/history/:id", removeItemFromSearchHistoryValidator,validate, removeItemFromSearchHistory);

 export default router; 