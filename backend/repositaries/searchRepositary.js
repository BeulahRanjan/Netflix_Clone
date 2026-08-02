export async function searchPerson(req){
    const { query } = req.params;
    const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
    
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

    return response;
}

export async function searchMovie(req){

}

export async function searchTv(req){

}

export async function getSearchHistory(req){

}

export async function removeItemFromSearchHistory(req){
    
}