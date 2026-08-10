import { fetchFromTMDB } from "../services/tmdbService.js";
import {
    getTrendingTV as ServiceTrendingTV,
    getTVTrailers as ServiceTVTrailers,
    getTVDetails as ServiceTVDetails,
    getSimilarTV as ServiceSimilarTV,
    getTVByCategory as ServiceTVByCategory
} from "../services/tvService.js"

export async function getTrendingTV(req, res) {
    try{
        // const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
        // const randomTVShow = data.results[Math.floor(Math.random() * data.results?.length)];

        const data= await tvService.getTrendingTV();
        res.json({ success:true, content: data });
    }
    catch(error){
        console.log("Error in getTrendingTV controller:", error.message);
        res.status(500).json({ success:false, message: "Internal Server Error" });
    }
}

export async function getTVTrailers(req, res) {
    // const { id } = req.params;
   try{
    // const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
    const data= await tvService.getTVTrailers(req);
    res.json({ success:true, content:data.results});
   }
   catch(error){
    if(error.message.includes(404)){
        return res.status(404).send(null);
    }
    res.json({success:false, message:"Internal Server Error"});
   }
}

export async function getTVDetails(req, res) {
    // const { id } =req.params;
    try{
        // const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
        const data= await tvService.getTVDetails(req);
        res.json({ success:true, content:data.results});
    } 
    catch(error){
        if(error.message.includes(404)){
            return res.status(404).send(null);
        }
        res.json({ success:false, messsage:"intenal server Error"});
    }
}

export async function getSimilarTV(req,res){
    // const { id } = req. params;
    try{
        //  const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
        const data= await tvService.getSimilarTV(req);
        res.json({success:true, content:data.results});
    }
    catch(error){
        
        res.json({ success:false, message:"Internal Server Error"});
    }
}


export async function getTVByCategory(req,res){
    // const { category } = req.params;
    try{
        // const data =  await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
        const data= await tvService.getTVByCategory(req);
        res.json({ success:true, content:data.results});
    }
    catch(error){
        if(error.message.includes(404)){
            return res.status(404).send(null);
        }
        res.json({ success:false, message:"Internal Server Error"});
    }
}