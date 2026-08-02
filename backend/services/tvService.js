import tvRepositary from "../repositaries/tvRepositary.js";

export async function getTrendingTV(){
    return await tvRepositary.getTrendingTV();
}

export async function getTVTrailers(req){
     const { id } = req.params;
     return await tvRepositary.getTVTrailers(id);
}

export async function getTVDetails(req){
    const { id } =req.params;
    return await tvRepositary.getTVDetails(id);
}

export async function getSimilarTV(req){
    const { id } = req. params;
    return await tvRepositary.getSimilarTV(id);
}

export async function getTVByCategory(){
    const { category } = req.params;
    return await tvRepositary.getTVByCategory(category);
}