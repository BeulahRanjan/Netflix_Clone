import redisClient from "../config/redis.js";

export const getCache = async (key) => {
    const data = await redisClient.get(key);

    if(!data){
        return null;
    }
   return JSON.parse(data);
}