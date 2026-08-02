export async function getTrendingMovies() {
    const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
    const randomMovies = data.results[Math.floor(Math.random() * data.results?.length)];
    return randomMovies;
}

export async function getMovieTrailers(req){
    const { id } = req.params;
    const data= await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
    return data;
}

export async function getMovieDetails(req){
    const { id } = req.params;
    const data= await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
    return data;
}

export async function getSimilarMovies(req){
    const { id } = req.params;
    const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`); 
    return data;
}