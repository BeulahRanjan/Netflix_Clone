import redisClient from "../config/redis.js";

export const getCache = async (key) => {
    const data = await redisClient.get(key);

    if(!data){
        return null;
    }
   return JSON.parse(data);
};

export const setCache= async (key, data, ttl=3600) =>{
    await redisClient.set(key,
        JSON.stringify(data),
        {
            EX:ttl
        }
    );

};