import {
    getTrendingMovies as RepositaryTrendingMovies,
    getMovieTrailers as RepositaryMovieTrailers,
    getMovieDetails as RepositaryMovieDetails,
    getSimilarMovies as RepositarySimilarMovies,
    getMoviesByCategory as RepositaryMoviesByCategory
} from ". ./repositaries/movieRepositary.js";

export async function getTrendingMovies() {
    return await RepositaryTrendingMovies(); 
}

export async function getMovieTrailers(req){
     const { id } = req.params;
    return await RepositaryMovieTrailers(id);
}

export async function getMovieDetails(req){
    const { id } = req.params;
    return await RepositaryMovieDetails(id);
}

export async function getSimilarMovies(req){
    const { id } = req.params;
    return await RepositarySimilarMovies(id);
}

export async function getMoviesByCategory(req){
    const { category } = req.params;
    return await RepositaryMoviesByCategory(category);
} 