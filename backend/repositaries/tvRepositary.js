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

        const cacheTV= "tv:trailer";
        const cachedTV= await redisClient.hGet(cacheTV, String(id));

        if(cachedTV){
            console.log("CACHE HIT");
            return JSON.parse(cachedTV);
        }

        console.log("CACHE MISS");
    }
    catch(error){
        console.error("Error fetching TV trailers:", error);
    }
    //return data;
} 

export async function getTVDetails(id){
    console.log("TV DETAILS ID:", id);
    const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
    

    console.log("TV DETAILS DATA:", data);
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