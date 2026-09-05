import { fetchFromTMDB } from "../services/tmdbService.js";
import { getCache, setCache } from "../utils/cache.js";
import redisClient from "../config/redis.js";

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

        await setCache(cacheKey, randomTVShow, 86400);
        return randomTVShow;
    }
    catch(error){
        console.error("Error fetching trending TV:", error);
        
    }


}

export async function getTVTrailers(id){

    try{
        // console.log("GET TV TRAILERS CALLED");
        // console.log("TV ID:", id);

        const cacheKey= "tv:trailer";
        const cachedTV= await redisClient.hGet(cacheKey, String(id));

        if(cachedTV){
            // console.log("CACHE HIT");
            return JSON.parse(cachedTV);
        }

        // console.log("CACHE MISS");
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);

        await redisClient.hSet(cacheKey, String(id), JSON.stringify(data));
        await redisClient.expire(cacheKey, 86400);
        return data;    
    }
    catch(error){
        console.error("Error fetching TV trailers:", error);
    }
    
} 

export async function getTVDetails(id){
    try{
        // console.log("GET TV DETAILS CALLED");
        // console.log("TV ID:", id);

        const cacheKey= "tv:detail";

        const cachedTV= await redisClient.hGet(cacheKey, String(id));

        if(cachedTV){
            //console.log("CACHE HIT");
            return JSON.parse(cachedTV);
        }

        //console.log("CACHE MISS");

        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);

        await redisClient.hSet(cacheKey, String(id), JSON.stringify(data));
        await redisClient.expire(cacheKey, 86400);

        return data;

    }
    catch(error){
        console.error("Error fetching TV details:", error);
    }

}

export async function getSimilarTV(id){
    try{
        console.log("GET SIMILAR TV CALLED");
        console.log("TV ID:", id);

        const  cacheKey= "tv:similar";
        const cachedTV= await redisClient.hGet(cacheKey, String(id));;

        if(cachedTV){
            console.log("CACHE HIT");
            return JSON.parse(cachedTV);
        } 

        console.log("CACHE MISS");
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);

        await redisClient.hSet(cacheKey, String(id), JSON.stringify(data));
        await redisClient.expire(cacheKey, 86400);
        return data;
    }
    catch(error){
        console.error("Error fetching similar TV:", error);
    }
}

export async function getTVByCategory(category){
    try{
        console.log("GET TV BY CATEGORY CALLED");

        const cacheKey= `tv:${category}`;

        const cachedTV= await getCache(cacheKey);

        if(cachedTV){
            console.log("CACHE HIT");
            return cachedTV;
        }

        console.log("CACHE MISS");
        const data =  await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);

        await setCache(cacheKey, data,86400);

        return data;
    }
    catch(error){
        console.error("Error fetching TV by category:", error);
    }
} 