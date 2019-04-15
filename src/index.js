import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

import backgroundgot from './assets/img/backgroundgot.jpg';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'GameofThrones';
    src:
        local('GameofThrones'),
        url('../assets/fonts/GameofThrones') format('ttf'),
    }

    *{  
        padding:0;
        margin:0;
        box-sizing: border-box;
    }

    header{
        padding:2vh;
        font-family: "GameofThrones";
    }
    body{
        height: 100vh;
        width:100%;
    }
    body:after{
        content:"";
        position:fixed; 
        top:0;
        height:100vh;
        left:0;
        right:0;
        z-index:-1; 
        background: url(${backgroundgot}) center center;
        background-size: cover;
    }

    p{
        font-size:1.5em;
        line-height:1.5;
        padding:10px;
    }
`;
ReactDOM.render(
<Fragment>
<GlobalStyle/>
<App  />
</Fragment>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
