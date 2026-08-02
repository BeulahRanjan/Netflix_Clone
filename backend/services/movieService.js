import movieRepository from "../repositaries/movieRepositary.js";

export async function getTrendingMovies() {
    return await movieRepository.getTrendingMovies();
}

export async function getMovieTrailers(req){
    return await movieRepository.getMovieTrailers(req);
}

export async function getMovieDetails(req){
    return await movieRepository.getMovieDetails(req);
}

export async function getSimilarMovies(req){
    return await movieRepository.getSimilarMovies(req);
}

export async function getMoviesByCategory(req){
    return await movieRepository.getMoviesByCategory(req);
}