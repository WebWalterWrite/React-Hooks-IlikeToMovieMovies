import React, { useEffect, useState , Suspense} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Import component
import People from '../Common/People';

// Import fecth API
import { getEpisode, getImgEpisode} from '../../utils/api';

// Import style
import { Container, Img, Left, Right} from './epd.styled'; 



const Epd = ({match}) => {

    // Récuprer paramètres URl
    const season = match.params.saison;
    const episode = match.params.episode;

    // Données
    const  [episod, setEpisod] = useState([]);

    useEffect( ()=>{
        (async ()=>{
            const result = {
                images: await getImgEpisode(season, episode),
                data: await getEpisode(season, episode)
            }

            setEpisod(result)
        })();
    },[])
    
    // Desctruring des données 
    const {
        data:{name, overview} = {},
        data:{guest_stars} = [],
        images=[],
    } = episod;
    
    // animation

    const LeftPos = ()=>{
        console.log('defile')
    };
    return(
        <Suspense fallback={<div>Loading...</div>}>
        <Container>
            <div>
            <h1>{name}</h1>
            <Img>
                <Left>
                <FontAwesomeIcon onClick={LeftPos} icon={faChevronLeft} size="3x" />
                </Left>
                {images.map(({file_path}, k)=>(
                    <img 
                        
                        key={k} src={`https://image.tmdb.org/t/p/w500/${file_path}`} 
                        alt={`illustration de l'épisode "${name}"`}
                    />
                ))}
                <Right>
                <FontAwesomeIcon icon={faChevronRight} size="3x" />
                </Right>
            </Img>
            <p>{overview}</p>
            </div>
            <p>Casting Episode</p>
            <People data={guest_stars}/>    
        </Container>
        </Suspense>
    )
}

export default Epd;