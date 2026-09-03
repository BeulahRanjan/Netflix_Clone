import redisClient from "../config/redis.js";
export async function rateLimiter(req,res,next){
    const ip= req.ip;
    const key=`rate_limit:${ip}`;
    const bucket= await redisClient.get(key);

}