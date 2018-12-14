import axios from 'axios';

const key = process.env.REACT_APP_DBMOVIES_KEY;

/**
 * @func getAllSeasons - Récupérer la liste des saisons
 * @param {string} key - clé api
 */

export const getAllSeasons = async () =>{ 
    const result = await axios.get(`https://api.themoviedb.org/3/tv/1399?api_key=${key}&language=fr-FR`);
    const { data = {} } = result;
    return data;
};


/**
 * @func getSeason - Récupérer le détail d'une saison
 * @param {integer} id - numero de la saison
 * @param {string} key - clé api
 */

export const getSeason = async (id) =>{
    const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/season/${id}?api_key=${key}&language=fr-FR`);
    const { data:{episodes=[], overview={}} } = result;
    return {episodes, overview};
};


/**
 * @func getImgEpisode - Récupérer les images d'un épisode
 * @param {integer} season - numero de la saison
 * @param {integer} episod - numero épisode
 * @param {string} key - clé api
 */
export const getImgEpisode = async (season, episod) => {
    const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/season/${season}/episode/${episod}/images?api_key=${key}`);
    const {data:{stills=[]}} = result;
    return stills;
};


/**
 * @func getEpisode - Récupérer un épisode
 * @param {integer} season - numero de la saison
 * @param {integer} episod - numero épisode
 * @param {string} key - clé api
 */
export const getEpisode = async (season, episod) => {
    const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/season/${season}/episode/${episod}?api_key=${key}&language=fr-FR`);
    const {data={}} = result;
    return data
};

/**
 * @func getAllCharacters - Récupérer les images d'un épisode
 * @param {string} key - clé api
 */

 export const getAllCharacters = async () => {
     const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/credits?api_key=${key}&language=fr-FR`);
     const {data:{cast = {}}} = result;
     return cast;
 };