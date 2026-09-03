import redisClient from "../config/redis.js";

    const CAPACITY =20;
    const REFILL_RATE =5;
export async function rateLimiter(req,res,next){

    const ip= req.ip;
    const key=`rate_limit:${ip}`;
    const exists= await redisClient.exists(key);

    if(exists){
    const bucket= await redisClient.get(key);

    }else{

    }
}