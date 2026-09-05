import redisClient from "../config/redis.js";

    const CAPACITY =20;
    const REFILL_RATE =5;
export async function rateLimiter(req,res,next){

    const ip= req.ip;
    const key=`rate_limit:${ip}`;
    const exists= await redisClient.exists(key);

    if(exists){
    const bucket= JSON.parse(await redisClient.get(key));
    const now= Date.now();
    //const REFILL_RATE =5;
    const elapsedTime= now - bucket.lastRefillTime;
    const elapsedSeconds=elapsedTime/1000;
    const tokensToAdd= elapsedSeconds * REFILL_RATE;
    bucket.tokens= Math.min(bucket.tokens + tokensToAdd, CAPACITY);
    bucket.lastRefillTime= now;

    if(bucket.tokens>=1){
        bucket.tokens--;
        await redisClient.set(key, JSON.stringify(bucket));
        return next();
    }

    return res.status(429).json({
        success:false,
        message:"Too many requests"
    })

    }else{

        const bucket ={
            tokens:CAPACITY,
            lastRefillTime: Date.now()
        };

        bucket.tokens--;

        await redisClient.set(key, JSON.stringify(bucket));

        return next();
    }
}