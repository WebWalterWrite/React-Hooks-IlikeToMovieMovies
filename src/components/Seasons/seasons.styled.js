import styled from 'styled-components/macro';
import media from '../../utils/responsive';

export const Container = styled.section`
     margin-top:10%;
     h2{
         color:#FECC01;
         letter-spacing:.3em;
         font-size:2.5em;
     }
    ${media.desktop`
        display:flex;
        flex-wrap:wrap;
        div{
            width:25%;
        }
    `}  
    ${media.phone`
        display:block;
        
        div{
            margin:0 auto;
            width:80%;
        }
    `}
    div{
       
        padding:20px;
        color:white;
        h2{
            text-align:center;
        }
        img{
            width:100%;
        }
    }
`;