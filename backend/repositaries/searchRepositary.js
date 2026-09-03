import { fetchFromTMDB } from "../services/tmdbService.js";
import  { User } from "../models/userModel.js";
import redisClient from "../config/redis.js";


export async function searchPerson(req,query){
    try{
        const cacheKey="search:person";

        const cachedPerson= await redisClient.hGet(cacheKey, String(query.toLowerCase().trim()));

        if(cachedPerson){
            console.log("CACHE HIT");
            return JSON.parse(cachedPerson);
        }

        console.log("CACHE MISS");
        
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);

        if(response.results.length === 0) {
            return null;          
        }

        await redisClient.hSet(cacheKey,String(query.toLowerCase().trim()), JSON.stringify(response), {
            EX: 3600,
        });

        await User.findByIdAndUpdate(req.user._id, {
        $push:{
            searchHistory: {
                id:response.results[0].id,
                image:response.results[0].profile_path,
                title:response.results[0].name,
                searchType:"person",
                createdAt: new Date(),
            },
        },
    });

    }


    
   
    


    return response;
}

export async function searchMovie(req, query){

const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
    if(response.results.length === 0) {
        return null;          
    }

    await User.findByIdAndUpdate(req.user._id, {
        $push:{
            searchHistory:{
                id: response.results[0].id,
                image: response.results[0].poster_path,
                title: response.results[0].title,
                searchType:"movie",
                createdAt: new Date(),
            },
        },
    });
    return response;
}

export async function searchTv(req, query){
 
  const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);

    await User.findByIdAndUpdate(req.user._id,{
        $push:{
            searchHistory:{
                id: response.results[0].id,
                image: response.results[0].poster_path,
                title: response.results[0].name,
                searchType:"tv",
                createdAt: new Date(),  
            },
        },
    });
    return response;

}

export async function getSearchHistory(req){
    return req.user.searchHistory;
}

export async function removeItemFromSearchHistory(userId, id){
    return await User.findByIdAndUpdate(userId, {
        $pull:{
            searchHistory: { id:id },
        },
    });
    
}




