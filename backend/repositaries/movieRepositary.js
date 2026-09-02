import { fetchFromTMDB } from "../services/tmdbService.js";
import { getCache, setCache } from "../utils/cache.js";

export async function getTrendingMovies() {
    try{
        console.log("GET TRENDING MOVIES CALLED");
        const cacheKey ="movies:trending";
        const cachedMovies= await getCache(cacheKey);
        console.log("REDIS RESULT:", cachedMovies);
        if(cachedMovies){
            console.log("CACHE HIT");
            return cachedMovies;
        }
        console.log("CACHE MISS");

        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");

        const randomMovies = data.results[Math.floor(Math.random() * data.results?.length)];

        await setCache(cacheKey, randomMovies, 3600);

        return randomMovies;
    }
    catch(error){
        console.error("Error fetching trending movies:", error);
       
    }
}

export async function getMovieTrailers(id){

    try{
        console.log("GET MOVIE TRAILERS CALLED");
        const cacheKey= "movies:trailer";
        const cachedMovies= await getCache(cacheKey);

        console.log("REDIS RESULT", cachedMovies);

        if(cachedMovies){
            console.log("CACHE HIT");
            return cachedMovies;
        }
        console.log("CACHE MISS");
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);

        await setCache(cacheKey,data,3600);
        return data;
    }
    catch(error){
        console.error("Error fetching movie trailers:", error);
    }
   
}

export async function getMovieDetails(id){
    try{
        console.log("GET MOVIE DETAILS CALLED");

        const cacheKey= "movies:detail";

        const cacheMovies= await getCache(cacheKey);

        console.log("REDIS RESULT: ", cachedMovies);

        if(cacheMovies){
            console.log("CACHE HIT");
            return cacheMovies;
        }

        console.log("CACHE MISS");

        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);

        await setCache(cacheKey, data, 3600);
        return data;

    }
    catch(error){
        console.error("Error fetching movie details", error);
    }
}

export async function getSimilarMovies(id){
    const data = await fetchFromTMDB(` https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`); 
    return data;
}


export async function getMoviesByCategory(category) {
   

    const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US`;

   

    const data = await fetchFromTMDB(url);

    // console.log(
    //     "FIRST 3 MOVIES:",
    //     data.results?.slice(0, 3).map(movie => ({
    //         id: movie.id,
    //         title: movie.title
    //     }))
    // );

    // console.log("================================");

    return data;
}