import express from "express";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import tvRoutes from "./routes/tvRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import { ENV_VARS } from "./config/envVars.js";
 import { connectDB } from "./config/db.js";
 import cookieParser from 'cookie-parser';
 import { protectRoute } from "./middleware/protectRoute.js";
 import path, { dirname } from 'path';

 const app= express();
const PORT = ENV_VARS.PORT || 5000;
const _dirname=path.resolve();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Backend is running on port " + PORT);
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);


if(ENV_VARS.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname,"/frontend/dist")));

    app.get("*" , (req,res) =>{
        res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
    })
}


app.listen(PORT, ()=>{
    console.log('Server is running at http://localhost:'+ PORT);
    connectDB();
})