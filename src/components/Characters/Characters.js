import React, { useState, useEffect } from 'react';

// import fetch api
import { getAllCharacters } from '../../utils/api';

//import component
import People from '../Common/People';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect( ()=>{
        (async()=>{
            const result = await getAllCharacters();

            setCharacters(result)
        })();
    },[])
    return(
       <People data={characters}/>
    )
};

export default Characters;