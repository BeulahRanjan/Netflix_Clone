import {
    searchPerson as RepositarysearchPerson,
    searchMovie as RepositarysearchMovie,
    searchTv as RepositarysearchTv,
    getSearchHistory as RepositarygetSearchHistory,
    removeItemFromSearchHistory as RepositaryremoveItemFromSearchHistory
} from '../repositaries/searchRepositary.js';

export async function searchPerson(req){
    const {query} = req.params;
    return await RepositarysearchPerson(req, query);
}

export async function searchMovie(req){
    const {query} = req.params;
return await RepositarysearchMovie(req, query);
}

export async function searchTv(req){
    const {query} = req.params;
return await RepositarysearchTv(req,query);
}

export async function getSearchHistory(req){
return await RepositarygetSearchHistory(req);
}

export async function removeItemFromSearchHistory(req){
    let { id } = req.params;

    id = parseInt(id);
return await RepositaryremoveItemFromSearchHistory(req.user._id, id);
}