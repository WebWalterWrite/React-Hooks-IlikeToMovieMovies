import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

import backgroundgot from './assets/img/backgroundgot.jpg';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Game of Thrones';
        src: url('gameofthones.woff') format('woff');
    }

    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    header{
        padding:2vh;
        background-color:rgba(0,0,0,0.5);
    }
    html, body{
        height:100%;
        width:100%;
        background:url(${backgroundgot}) no-repeat;
        background-size:cover;
        background-attachment:fixed;
        background-position:center;
    }
    h1{
        font-family:'game of thrones';
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
<App />
</Fragment>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
