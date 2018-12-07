import styled from 'styled-components';
import media from '../../utils/responsive';

export const Container = styled.section`
     margin-top:10%;
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
            width:100%;
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