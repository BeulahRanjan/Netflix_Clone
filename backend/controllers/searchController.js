import { User } from '../models/User.js';
import { fetchFromTMDB } from '../services/tmdbService.js';

export async function searchPerson(req, res) {
    const { query } = req.params;
    try{
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1`);

        if(response.results.length === 0) {
            return res.status(404).send(null);          
    }

    await User.findByIdAndUpdate(req.user._id, {
        $push:{
            searchHistory: {
                id:response.results[0].id,
                image:response.results[0].profile_path,
                title:response.results[0].name,
                searchType:"person",
                createdAt: new Date(),
            },
        },
    });
    res.status(200).json({success:true, content:response.results});
} catch(error){
    console.log("Error in searchPerson controller:", error.message);
    res.status(500).json({ success:false, message:"Internal Server Error"});
   }
}

