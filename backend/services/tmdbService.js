import axios from 'axios';
import  { ENV_VARS } from '../config/envVars.js';

// export const fetchFromTMDB =async (url) =>{
//      const options={
//         headers:{
//             accept:'application/json',
//             Authorization:'Bearer ' + ENV_VARS.TMDB_API_KEY
//         }
//      };
 
   //   const response = await axios.get(url,options);
   //   if(response.status!==200){
   //      throw new Error('Failed to fetch data from TMDB');
   //   }

export const fetchFromTMDB = async (url, retries = 3) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url, {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
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

    