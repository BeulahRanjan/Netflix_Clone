import axios from 'axios';
// import  { ENV_VARS } from '../config/envVars.js';

// export const fetchFromTMDB =async (url) =>{
//      const options={
//         headers:{
//             accept:'application/json',
//             Authorization:'Bearer ' + ENV_VARS.TMDB_API_KEY
//         }
//      };
 
//      const response = await axios.get(url,options);
//      if(response.status!==200){
//         throw new Error('Failed to fetch data from TMDB');
//      }

export const fetchFromTMDB = async (url, retries = 3) => {
      console.log("TMDB KEY EXISTS:", !!process.env.TMDB_API_KEY);
    console.log("URL:", url);
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            //  console.log(ENV_VARS.TMDB_API_KEY);
            const response = await fetch(url, {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
                },
            });

            if (!response.ok) {
                throw new Error(`TMDB Error ${response.status}`);
            }

            return await response.json();
        } catch (err) {
            if (attempt === retries) throw err;

            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
};

    