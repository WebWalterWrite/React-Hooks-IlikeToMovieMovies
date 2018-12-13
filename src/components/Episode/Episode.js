import React, {useState, useEffect} from 'react';

// Import style
import { Modal, Img, Characters, CharProfile } from './episode.styled'; 
// Import fetch api
import { getImgEpisode, getEpisode } from '../../utils/api';

// import image
import DefaultProfile from '../../assets/img/got.png'

const DetailsEpisode = ({data}) => {

    // Données
    const [epsd, setEpsd] = useState([]);

    // Desctruring des données 
    const {saison, episode, setVisible, setScroll, position} = data;

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
        epis:{guest_stars} = [],
        images=[],
    } = epsd;
    

    // Masquer le composant et retour à la position initiale
    const closeModal = () => {
        setVisible(false)
        window.scrollBy({ 
			top:position, 
			behavior:"smooth"
        })
        document.body.style.overflow="scroll"
    }

    return(
        
        <Modal>
            <div>
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
            </div>
            <p>Casting Episode</p>
            <Characters>
                    {guest_stars && guest_stars.map(({character, profile_path},k) => (
                    <CharProfile key={k}>
                    <img src={
                        profile_path 
                        ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                        : DefaultProfile
                        } alt="" width="185" height="278"/>
                    <p>{character}</p>
                    </CharProfile>
                ))}
            </Characters>
            <p onClick={closeModal}>fermer</p>
        </Modal>
    )
};

export default DetailsEpisode;