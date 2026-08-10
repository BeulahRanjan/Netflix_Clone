export async function getTrendingTV(){
 const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
const randomTVShow = data.results[Math.floor(Math.random() * data.results?.length)];
return randomTVShow;

}

export async function getTVTrailers(id){
    const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
    return data;
} 

export async function getTVDetails(id){
    const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
    return data;
}

export async function getSimilarTV(id){
    const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
    return data;
}

export async function getTVByCategory(category){
    const data =  await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
    return data;
} 