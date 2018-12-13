import React, { useEffect, useState , Suspense} from 'react'

// Import fecth API
import { getEpisode, getImgEpisode} from '../../utils/api';

// Import style
import { Container, Img, Characters, CharProfile } from './epd.styled'; 

// import image
import DefaultProfile from '../../assets/img/got.png'

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

            console.log(result.data)
            setEpisod(result)
        })();
    },[])
    
    // Desctruring des données 
    const {
        data:{name, overview} = {},
        data:{guest_stars} = [],
        images=[],
    } = episod;
    
    return(
        <Suspense fallback={<div>Loading...</div>}>
        <Container>
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
        </Container>
        </Suspense>
    )
}

export default Epd;