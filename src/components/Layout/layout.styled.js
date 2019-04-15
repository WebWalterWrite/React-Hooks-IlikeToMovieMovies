import styled, {keyframes} from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const H1 = styled.h1`
    color:white;
    font-size: 2em;
    letter-spacing:5px;
    a{
        text-decoration:none;
        color:#FFFFFF;
    }
`;

const Btn = keyframes`
    from{right:-10%};
    to{right:2%};
`

export const Back = styled(FontAwesomeIcon)`
    position:fixed;
    bottom:3%;
    z-index:100000;
    right:1%;
    color:rgba(254, 204, 1, 0.7);
    transition: all 1s ease-in-out;
    animation: ${Btn} .5s linear;
    transition:all .2s ease-in-out;
    cursor:pointer;
    :hover{
        color:rgb(254, 204, 1);
    }
`;