import searchRepositary from '../repositories/searchRepositary.js';

export async function searchPerson(req){
    const {query} = req.params;
    return await searchRepositary.searchPerson(req, query);
}

export async function searchMovie(req){
    const {query} = req.params;
return await searchRepositary.searchMovie(req, query);
}

export async function searchTv(req){
    const {query} = req.params;
return await searchRepositary.searchTv(req,query);
}

export async function getSearchHistory(req){
return await searchRepositary.getSearchHistory(req);
}

export async function removeItemFromSearchHistory(req){
    let { id } = req.params;

    id = parseInt(id);
return await searchRepositary.removeItemFromSearchHistory(req.user._id, id);
}