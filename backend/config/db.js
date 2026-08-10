import mongoose from "mongoose";


export const connectDB = async() =>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connections[0].host}`);
        
    }
    catch(error){
        
         console.error(`Error connecting to MongoDB:${error.message}`);
          console.error("MongoDB connection failed");
        console.error("Name:", error.name);
        console.error("Message:", error.message);
        console.error("Code:", error.code);
        console.error("Reason:", error.reason);
         process.exit(1);
    }
}