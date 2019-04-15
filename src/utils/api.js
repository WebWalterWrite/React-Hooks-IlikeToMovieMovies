import axios from 'axios';

const key = process.env.REACT_APP_DBMOVIES_KEY;

/**
 * @func getAllSeasons - Récupérer la liste des saisons
 */

export const getAllSeasons = async () => {
    try {   
        const result = await axios.get(`https://api.themoviedb.org/3/tv/1399?api_key=${key}&language=fr-FR`);
        const { data = {} } = result;
        return data;
    } catch ({response: {status, statusText}}) {
        
        return {error: status, statusText}; // status request ex: 404 Not Found
    }
};


/**
 * @func getSeason - Récupérer le détail d'une saison
 * @param {integer} id - numero de la saison
 */

export const getSeason = async id => {
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/season/${id}?api_key=${key}&language=fr-FR`);
        const { data: { episodes = [], overview = {} } } = result;
        return { episodes, overview };

    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};


/**
 * @func getImgEpisode - Récupérer les images d'un épisode
 * @param {integer} season - numero de la saison
 * @param {integer} episod - numero épisode
 */
export const getImgEpisode = async (season, episod) => {
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/season/${season}/episode/${episod}/images?api_key=${key}`);
        const { data: { stills = [] } } = result;
        return stills;
    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};


/**
 * @func getEpisode - Récupérer un épisode
 * @param {integer} season - numero de la saison
 * @param {integer} episod - numero épisode
 */
export const getEpisode = async (season, episod) => {
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/season/${season}/episode/${episod}?api_key=${key}&language=fr-FR`);
        const { data = {} } = result;
        return data
    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};

/**
 * @func getAllCharacters - Récupérer les images d'un épisode
 */

export const getAllCharacters = async () => {
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/tv/1399/credits?api_key=${key}&language=fr-FR`);
        const { data: { cast = {} } } = result;
        return cast;
    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};