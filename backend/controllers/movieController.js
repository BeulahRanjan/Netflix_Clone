
import {
    getTrendingMovies as ServiceTrendingMovies,
    getMovieTrailers as ServiceMovieTrailers,
    getMovieDetails as ServiceMovieDetails,
    getSimilarMovies as ServiceSimilarMovies,
    getMoviesByCategory as ServiceMoviesByCategory
} from "../services/movieService.js";

export async function getTrendingMovies(req, res) {
    try{
        // const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
        // const randomMovies = data.results[Math.floor(Math.random() * data.results?.length)];

        const data = await ServiceTrendingMovies();
        res.json({ success:true, content: data });
    }
    catch(error){
       // console.log("Error in getTrendingMovies controller:", error.message);
       console.error(error);
        res.status(500).json({ success:false, message: "Internal Server Error" });
    }
}

export async function getMovieTrailers(req, res) {
    // const { id } = req.params;
    try{
        // const data= await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        const data= await ServiceMovieTrailers(req);
        res.json({ success:true, content: data.results });
    }
    catch(error){
        if(error.message.includes("404")) {
            return res.status(404).send(null);
        }
         console.error(error);
        res.status(500).json({ success:false, message:"Internal Server Error" });
    }
}

export async function getMovieDetails(req, res) {
    // const { id } = req.params;
    try{
        // const data= await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        const data= await ServiceMovieDetails(req);
        res.status(200).json({ success:true, content:data});
    }
    catch(error){
        if(error.message.includes("404")) {
            return res.status(404).send(null);
        }
         console.error(error);
        res.status(500).json({ success:false, message: "Internal Server Error" });
    }
}

export async function getSimilarMovies(req,res){
    // const { id } = req.params;
    try{
        //  const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`); 
        const data = await ServiceSimilarMovies(req);
        res.status(200).json({ success:true, content:data.results });
    }
    catch(error){
        if(error.message.includes("404")) {
            return res.status(404).send(null); 
        }   
         console.error(error);
        res.status(500).json({success:false, message:"Intenal Server Error"});
    }
}

export async function getMoviesByCategory(req,res){
    // const { category } = req.params;
    try{
        // const data =await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US`);
        const data = await ServiceMoviesByCategory(req);
        res.status(200).json({success:true, content:data.results});
    }
    catch(error){
        if(error.message.includes("404")) {
            return res.status(404).send(null);
        }
        //console.log("Error in getMoviesByCategory controller:", error.message);
        console.error(error);
        res.status(500).json({ success:false, message:"Internal Server Error" });
    }
}