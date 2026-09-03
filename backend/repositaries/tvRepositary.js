import { fetchFromTMDB } from "../services/tmdbService.js";


export async function getTrendingTV(){
    try{
        console.log("GET TRENDING TV CALLED");

        const cacheKey="tv:trending";

        const cachedTV= await getCache(cacheKey);

        if(cachedTV){
            console.log("CACHE HIT");
            return cachedTV;
        }

        console.log("CACHE MISS");
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
        const randomTVShow = data.results[Math.floor(Math.random() * data.results?.length)];

        return randomTVShow;
    }
    catch(error){
        console.error("Error fetching trending TV:", error);
        
    }


}

export async function getTVTrailers(id){

    try{
        console.log("GET TV TRAILERS CALLED");
        console.log("TV ID:", id);

        const cacheKey= "tv:trailer";
        const cachedTV= await redisClient.hGet(cacheKey, String(id));

        if(cachedTV){
            console.log("CACHE HIT");
            return JSON.parse(cachedTV);
        }

        console.log("CACHE MISS");
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);

        await redisClient.hSet(cacheKey, String(id), JSON.stringify(data));
        return data;    
    }
    catch(error){
        console.error("Error fetching TV trailers:", error);
    }
    
} 

export async function getTVDetails(id){
    try{
        console.log("GET TV DETAILS CALLED");
        console.log("TV ID:", id);

        const cacheKey= "tv:detail";

        const cachedTV= await redisClient.hGet(cacheKey, String(id));

        
    }

    
    const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
    

    
    return data;
}

export async function getSimilarTV(id){
    const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
    return data;
}

export async function getTVByCategory(category){
    const data =  await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
    return data;
} 