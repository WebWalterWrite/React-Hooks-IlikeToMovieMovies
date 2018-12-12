import styled from 'styled-components';
import media from '../../utils/responsive';

export const Modal = styled.div`
 position:absolute;
 top:0;
 left:0;
 height:100vh;
 width:100%;
 background-color:#000000;
 color:#FFFFFF;
 z-index:9999;
 padding-top:20px;
 span{
     background-color:#228cac;
     padding:.5%;
 }
 p{
     text-align:justify;
 }
`;

export const Img = styled.div`
    overflow:scroll;
    display:flex;
    margin:0 auto;
    box-shadow:0px 0px 50px gray;
    ${media.desktop`
        width:1000px;
    `}
    ${media.phone`
        width:100%;
    `}
`;