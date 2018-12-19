import React from 'react';
import styled, { css, keyframes } from 'styled-components';
 
// const animate = () => {
//     let styles=""
//     for(let i =1;  i<13; i+=1) {  
//         styles +=`
//                 :nth-child(${i}){
//                 filter: blur(0px);
//                 animation: ${bluring} 1s ${i/5}+s   infinite linear alternate;
//                 }`
//     }
//         return css`${styles}`
// }

const bluring = keyframes` 
	0% {filter: blur(0px);}
	100% {filter: blur(4px);}
`;

const animate = css`
    filter: blur(0px);
    animation-name:${bluring};
    animation-duration:1s;
    animation-iteration-count:infinite;
    animation-timing-function:linear; 
    animation-direction:alternate;
`;

const Loading = styled.div`
    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
	z-index: 9999;
`;

const LoadingText = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	text-align: center;
	width: 100%;
	height: 100px;
    div{
        margin: 0 5px;
		    color: #fff;
            font-family: 'Quattrocento Sans', sans-serif;
    }
    	div:nth-child(1){
            font-size:2.5em;
            span:nth-child(1){
                ${animate};
                animation-delay:${1/3}s;  
            }
            span:nth-child(2){
                ${animate};
                animation-delay:${2/3}s;
            }
            span:nth-child(3){
                ${animate};
                animation-delay:${3/3}s;
            }
            span:nth-child(4){
                ${animate};
                animation-delay:${4/3}s;
            }
        }
            div:nth-child(2){
                font-size:1em;
                span:nth-child(1){
                    ${animate};
                    animation-delay:${5/5}s;
                }
                span:nth-child(2){
                    ${animate};
                    animation-delay:${6/5}s;
                }
            }
            div:nth-child(3){
                font-size:2em;
                letter-spacing:0.6em;
                span:nth-child(1){
                    ${animate};
                    animation-delay:${7/6}s;
                }
                span:nth-child(2){
                    ${animate};
                    animation-delay:${8/6}s;
                }
                span:nth-child(3){
                    ${animate};
                    animation-delay:${9/6}s;
                }
                span:nth-child(4){
                    ${animate};
                    animation-delay:${10/6}s;
                }
                span:nth-child(5){
                    ${animate};
                    animation-delay:${11/6}s;
                }span:nth-child(6){
                    ${animate};
                    animation-delay:${12/6}s;
                }
            }    
`;



const Loader = () => (

<Loading>
	<LoadingText>
        <div>
		    <span>D</span>
		    <span>A</span>
		    <span>T</span>
		    <span>A</span>
        </div>
        <div>
            <span>I</span>
		    <span>S</span>
        </div>
        <div>
		    <span>C</span>
		    <span>O</span>
		    <span>M</span>
		    <span>I</span>
		    <span>N</span>
		    <span>G</span>
        </div>
	</LoadingText>
</Loading>

)

export default Loader;