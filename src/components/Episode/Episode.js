import React, {useState, useEffect} from 'react';

// Import style
import { Modal, Img } from './episode.styled'; 
// Import fetch api
import { getImgEpisode } from '../../utils/api';

const DetailsEpisode = ({data}) => {

    const [epsd, setEpsd] = useState([]);
   
    const {saison, episode, desc, name, setVisible, position} = data;
  
    useEffect( ()=>{
        (async ()=> {
            const result = await getImgEpisode(saison,episode);
            setEpsd(result.stills)      
        })();
    },[]);

    
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
                {epsd.map(({file_path}, k)=>(
                    <img key={k} src={`https://image.tmdb.org/t/p/w500/${file_path}`} alt=""/>
                ))}
            </Img>
            <p>{desc}</p>
        </Modal>
    )
};

export default DetailsEpisode;