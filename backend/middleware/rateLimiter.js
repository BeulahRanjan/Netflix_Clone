import redisClient from "../config/redis.js";

    const CAPACITY =3;
    const REFILL_RATE =1;
export async function rateLimiter(req,res,next){

    console.log("RATE LIMITER HIT");
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
    console.log("IP:", ip);
    console.log("Tokens:",bucket.tokens);

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