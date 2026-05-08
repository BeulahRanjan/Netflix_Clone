import { fetchFromTMDB } from "../services/tmdbService.js";

export async function getTrendingTV(req, res) {
    try{
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
        const randomTVShow = data.results[Math.floor(Math.random() * data.results?.length)];

        res.json({ success:true, content: randomTVShow });
    }
    catch(error){
        res.status(500).json({ success:false, message: "Internal Server Error" });
    }
}

export 