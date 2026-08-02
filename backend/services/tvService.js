import tvRepositary from "../repositaries/tvRepositary.js";

export async function getTrendingTV(){
    return await tvRepositary.getTrendingTV();
}

export async function getTVTrailers(req){
     const { id } = req.params;
     return await tvRepositary.getTVTrailers(id);
}

export async function getTVDetails(){
    const { id } =req.params;
    return await tvRepositary.getTVDetails(id);
}

export async function getSimilarTV(){

}

export async function getTVByCategory(){

}