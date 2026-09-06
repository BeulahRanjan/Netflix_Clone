import redisClient from "../config/redis.js";

    const CAPACITY =3;
    const REFILL_RATE =0;
export async function rateLimiter(req, res, next) {

    console.log("RATE LIMITER HIT");

    const ip = req.ip === "::1" || req.ip === "::ffff:127.0.0.1"
        ? "127.0.0.1"
        : req.ip;

    const key = `rate_limit:${ip}`;

    console.log("REDIS KEY:", key);

    const exists = await redisClient.exists(key);

    console.log("EXISTS:", exists);

    if (exists) {

        const cachedBucket = await redisClient.get(key);

        console.log("RAW REDIS VALUE:", cachedBucket);

        const bucket = JSON.parse(cachedBucket);

        console.log("BUCKET BEFORE REFILL:", bucket);
    //const bucket= JSON.parse(await redisClient.get(key));
    const now= Date.now();
    //const REFILL_RATE =5;
    const elapsedTime= now - bucket.lastRefillTime;
    const elapsedSeconds=elapsedTime/1000;
    const tokensToAdd= elapsedSeconds * REFILL_RATE;
    
    console.log("NOW:", now);
    //console.log("LAST REFILL:", bucket.lastRefillTime);
    console.log("ELAPSED MS:", elapsedTime);
    console.log("ELAPSED SEC:", elapsedSeconds);
    console.log("TOKENS TO ADD:", tokensToAdd);
    console.log("TOKENS BEFORE:", bucket.tokens);
    bucket.tokens= Math.min(bucket.tokens + tokensToAdd, CAPACITY);
    console.log("TOKENS AFTER REFILL:", bucket.tokens);
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

        await redisClient.set(key, JSON.stringify(bucket),{
            EX:60
        });

        return next();
    }
}