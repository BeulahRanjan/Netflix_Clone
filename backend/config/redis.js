import { createClient } from "redis";

const redisClient = createClient({
    url: "redis://localhost:6379"
});

redisClient.on("error", (err) => {
    console.error("Redis Error:", err);
});

const connectRedis = async () => {
    try{
        await redisClient.connect();
        console.log("Connected to Redis");
    }
    catch(err){
        console.error("Redis Connection Error:", err);
    }
}



    
export default { redisClient ,connectRedis };