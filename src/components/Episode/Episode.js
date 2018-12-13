import React, {useState, useEffect} from 'react';

// Import style
import { Modal, Img } from './episode.styled'; 
// Import fetch api
import { getImgEpisode, getEpisode } from '../../utils/api';

const DetailsEpisode = ({data}) => {

    // Données
    const [epsd, setEpsd] = useState([]);

    // Desctruring des données 
    const {saison, episode, setVisible, position} = data;

    // Récupérer les données au chargement de la page
    useEffect( ()=>{
        (async ()=> {
            const result = {
                images: await getImgEpisode(saison,episode),
                epis: await getEpisode(saison, episode),
            }
            setEpsd(result)      
        })();
    },[]);

    // Desctruring des données 
    const {
        epis:{name, overview} = {},
        images=[],
    } = epsd;


    // Masquer le composant et retour à la position initiale
    const closeModal = (s) => {
        setVisible(false)
        window.scrollBy({ 
			top:position, 
			behavior:"smooth"
		})
    }

    return(
        <Modal>
            <span onClick={closeModal}>fermer</span>
            <h1>{name}</h1>
            <Img>
                {images.map(({file_path}, k)=>(
                    <img 
                        key={k} src={`https://image.tmdb.org/t/p/w500/${file_path}`} 
                        alt={`illustration de l'épisode "${name}"`}
                    />
                ))}
            </Img>
            <p>{overview}</p>
        </Modal>
    )
};

export default DetailsEpisode;