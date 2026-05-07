import dotenv from 'dotenv';
dotenv.config();

export const ENV_VARS={
    MONGO_URI:"mongodb://beulahranjan_db_user:Beuheph*77@ac-2icuifb-shard-00-00.sobg7v9.mongodb.net:27017,ac-2icuifb-shard-00-01.sobg7v9.mongodb.net:27017,ac-2icuifb-shard-00-02.sobg7v9.mongodb.net:27017/?ssl=true&replicaSet=atlas-ylftpu-shard-0&authSource=admin&appName=Cluster0",
    PORT:5000,
    JWT_SECRET: "your_JWT_SECRET_here",
    NODE_ENV:"development",
    TMDB_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjM0NmNhOTI3NTFkN2Y2ODg4NWQwNjc4NWZmNTY2OSIsIm5iZiI6MTc3ODEzMzkyNC4xNzEsInN1YiI6IjY5ZmMyYmE0ZDUyMjU0NjFiY2VkMmMyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGL7C6quZ0c77wWO9rSH6cLTx3Zb8_5QlSssy6116uY"
} 
