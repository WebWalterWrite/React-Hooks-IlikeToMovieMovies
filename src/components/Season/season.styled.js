import styled from "styled-components";
import media from "../../utils/responsive";

export const Container = styled.section`
    width:90%;
    margin:0 auto;
    ${media.phone`
        width:100%;
    `}
    >h2{ 
        color:white; 
        margin:2% 0;
    }
`;

export const Overview = styled.p`
	color: #ffffff;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const Episode = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	color: #ffffff;
    >h2{
        text-align:center;
    }
	p {
		text-align: justify;
        
		img {
			float: left;
            padding:10px;
        ${media.phone`
            width:100%;
        `}
		}
	}
	${media.desktop`
        div{display:flex;}
    `}
	${media.phone`
        div{display:block;}
    `}
`;
