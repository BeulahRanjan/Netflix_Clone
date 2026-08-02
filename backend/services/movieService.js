import movieRepository from "../repositaries/movieRepositary.js";

export async function getTrendingMovies() {
    return await movieRepository.getTrendingMovies();
}

export async function getMovieTrailers(req){
     const { id } = req.params;
    return await movieRepository.getMovieTrailers(id);
}

export async function getMovieDetails(req){
    const { id } = req.params;
    return await movieRepository.getMovieDetails(id);
}

export async function getSimilarMovies(req){
    const { id } = req.params;
    return await movieRepository.getSimilarMovies(id);
}

export async function getMoviesByCategory(req){
    const { category } = req.params;
    return await movieRepository.getMoviesByCategory(category);
} 