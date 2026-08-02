import searchRepositary from '../repositories/searchRepositary.js';

export async function searchPerson(req){
    return await searchRepositary.searchPerson(req);
}

export async function searchMovie(req){

}

export async function searchTv(req){

}

export async function getSearchHistory(req){

}

export async function removeItemFromSearchHistory(req){

}