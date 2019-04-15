import styled from 'styled-components/macro';
import media from '../../utils/responsive';

export const Section = styled.section`
      height:100vh;
    >div{
        display:flex;
        align-items:center;
        justify-content:space-around;
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
    ${media.phone`
        >div{
            display: block;
            text-align: center;
            position: absolute;
            width: 100%;
            top: 50%;
            line-height: 2.5;
            transform: translateY(-50%);
        }
    `}
    a{
        padding:10px;
        font-size:1.5em;
        text-decoration:none;
        color:white;
        letter-spacing:.2em;
        text-shadow:-5px -2px 9px rgba(244,244,244,0.8);
    }
`;