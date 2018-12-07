import axios from 'axios';

const key = process.env.REACT_APP_DBMOVIES_KEY;

/**
 * @func getAllSeasons - Récupérer la liste des saisons
 * @param {string} key - clé api
 */

export const getAllSeasons = async () =>{ 
    const result = await axios.get(`https://api.themoviedb.org/3/tv/1399?api_key=${key}&language=fr-FR`);
    return result.data;
};


/**
 * @func getSeason - Récupérer le détail d'une saison
 * @param {integer} id - numero de la saison
 * @param {string} key - clé api
 */

export const getSeason = async (id) =>{
    const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/season/${id}?api_key=${key}&language=fr-FR`);
    console.log(result)
    return result.data;
};


export const getImgEpisode = async (season, episod) => {
    const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/season/${season}/episode/${episod}/images?api_key=${key}`);
    console.log(result);
    return result;
}