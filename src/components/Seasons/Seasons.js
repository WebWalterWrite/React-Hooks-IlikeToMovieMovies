import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// Import api
import { getAllSeasons } from "../../utils/api";

// Import styles
import { Container } from './seasons.styled';

const Seasons = () => {

    const [seasons, setSeasons] = useState([]);

	// Warning: useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => ...) are not supported, but you can call an async function inside an effect.
	
    useEffect( ()=>{
        ( 
            async () => {
                const {seasons} = await getAllSeasons();
                setSeasons(seasons);
            })();
        },[]
        )

    const saisons = seasons.filter(elem => elem.name !== 'Specials')
    return(
        <Fragment>
        <h1>Saisons</h1>
        <Container>
        {saisons.map(({poster_path, name, season_number},k) =>(
            <div key={k}>
            <h2>{name}</h2>
            <Link to={`/got/saison/${season_number}`}><img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="pochette saison"/>
            </Link>
            </div>
            )
       )}   
       </Container>
       </Fragment>
    )
}

export default Seasons;