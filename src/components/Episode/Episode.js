import React, {useState, useEffect} from 'react';

// Import style
import { Modal } from './episode.styled'; 
// Import fetch api
import { getImgEpisode } from '../../utils/api';

const DetailsEpisode = ({data}) => {

    const [epsd, setEpsd] = useState([]);

    const {saison, episode, desc, name} = data;
  
    useEffect( ()=>{
        (async ()=> {
            const result = await getImgEpisode(saison,episode);
            setEpsd(result)      
        })();
    },[]);

    return(
        <Modal>
            <h1>{name}</h1>
            <p>{desc}</p>
        </Modal>
    )
};

export default DetailsEpisode;