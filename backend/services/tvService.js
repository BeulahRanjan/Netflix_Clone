import {
    getTrendingTV as RepositaryTrendingTV,
    getTVTrailers as RepositaryTVTrailers,
    getTVDetails as RepositaryTVDetails,
    getSimilarTV as RepositarySimilarTV,
    getTVByCategory as RepositaryTVByCategory
} from "../repositaries/tvRepositary.js";

export async function getTrendingTV(){
    return await RepositaryTrendingTV();
}

export async function getTVTrailers(req){
     const { id } = req.params;
     return await RepositaryTVTrailers(id);
}

export async function getTVDetails(req){
    const { id } =req.params;
    return await RepositaryTVDetails(id);
}

export async function getSimilarTV(req){
    const { id } = req. params;
    return await RepositarySimilarTV(id);
}

export async function getTVByCategory(){
    const { category } = req.params;
    return await RepositaryTVByCategory(category);
}