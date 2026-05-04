import dotenv from 'dotenv';
dotenv.config();

export const ENV_VARS={
    MONGO_URI:"mongodb://beulahranjan_db_user:Beuheph*77@ac-2icuifb-shard-00-00.sobg7v9.mongodb.net:27017,ac-2icuifb-shard-00-01.sobg7v9.mongodb.net:27017,ac-2icuifb-shard-00-02.sobg7v9.mongodb.net:27017/?ssl=true&replicaSet=atlas-ylftpu-shard-0&authSource=admin&appName=Cluster0",
    PORT:5000,
    JWT_SECRET: "your_JWT_SECRET_here",
    NODE_ENV:"development",
    TMDB_API_KEY: "94f0f5f5bbcb6e336c019c90a7460e59"
} 
