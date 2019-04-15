import React from 'react'
import styled from 'styled-components/macro';

const Message = styled.section`
    text-align: center;
    h1{
        color: #FFFFFF;
    }
    p{
        font-size:18px;
        background-color: #FECC01;
        width: 500px;
        margin: 0 auto;
    }

`;
const NotFound = () => (

        <Message>
            <h1>OUPS....</h1>
            <p>La page demandée n'a pas été trouvée</p>
            <img src="https://media.giphy.com/media/iU7QUbHXVsS2s/giphy.gif" alt="game of thrones sam" width="500px"/>
        </Message>
);

export default NotFound;