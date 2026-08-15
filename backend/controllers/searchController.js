import { User } from '../models/userModel.js';
import { fetchFromTMDB } from '../services/tmdbService.js';
import {
    searchPerson as ServicesearchPerson,
    searchMovie as ServicesearchMovie,
    searchTv as ServicesearchTv,
    getSearchHistory as ServicesearchHistory,
    removeItemFromSearchHistory as ServiceremoveItemFromSearchHistory
} from "../services/searchService.js";

export async function searchPerson(req, res) {
    // const { query } = req.params;
    try{
    //     const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);

    //     if(response.results.length === 0) {
    //         return res.status(404).send(null);          
    // }

    // await User.findByIdAndUpdate(req.user._id, {
    //     $push:{
    //         searchHistory: {
    //             id:response.results[0].id,
    //             image:response.results[0].profile_path,
    //             title:response.results[0].name,
    //             searchType:"person",
    //             createdAt: new Date(),
    //         },
    //     },
    // });
    const response = await ServicesearchPerson(req);
    res.status(200).json({success:true, content:response.results});
} catch(error){
    console.log("Error in searchPerson controller:", error.message);
    res.status(500).json({ success:false, message:"Internal Server Error"});
   }
}

export async function searchMovie(req,res){
    // const {query} = req.params;

    try{
    //     const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
    //     if(response.results.length === 0) {
    //         return res.status(404).send(null);          
    // }

    // await User.findByIdAndUpdate(req.user._id, {
    //     $push:{
    //         searchHistory:{
    //             id: response.results[0].id,
    //             image: response.results[0].poster_path,
    //             title: response.results[0].title,
    //             searchType:"movie",
    //             createdAt: new Date(),
    //         },
    //     },
    // });
    console.log("searchMovie reached");
    console.log("params:", req.params);
    const response= await ServicesearchMovie(req);
    res.status(200).json({ success:true, content:response.results});
}
catch(error){
    console.log("Error in searchMovie controller:", error.message);
    res.status(500).json({ success:false, message: "Internal Server Error"});
 }
}

export async function searchTv (req, res){
    // const {query} = req.params;
try{
    // const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);

    // await User.findByIdAndUpdate(req.user._id,{
    //     $push:{
    //         searchHistory:{
    //             id: response.results[0].id,
    //             image: response.results[0].poster_path,
    //             title: response.results[0].name,
    //             searchType:"tv",
    //             createdAt: new Date(),  
    //         },
    //     },
    // });
    const response = await ServicesearchTv(req);
    res.json({success:true, content:response.results});
}
catch(error){
    console.log("Error in searchTv Controller:", error.message);
    res.status(500).json({success:false, message:"Internal Server Error"});
}
}


export async function getSearchHistory(req,res){
    try{
        const response = await ServicesearchHistory(req);
        // res.status(200).json({success:true, content:req.user.searchHistory});
        res.status(200).json({success:true, content:response});

    } 
    catch(error){
        console.log("Error in getSearchHistory controller:", error.message);
        res.status(500).json({ success:false, message:"Internal Server Error"});
    }
}

export async function removeItemFromSearchHistory(req,res){
    // let { id } = req.params;

    // id = parseInt(id);
    try{
        const response = await ServiceremoveItemFromSearchHistory(req);
        // await User.findByIdAndUpdate(req.user._id, {
        //     $pull:{
        //         searchHistory: { id:id },
        //     },
        // });
        res.status(200).json({ success:true, message:"Item removed from search history"});
    }   
    catch(error){
        console.log("Error in removeItemFromSearchHistory controller:", error.message);
        res.status(500).json({ success:false, message:"Internal Server Error"});
    }
}