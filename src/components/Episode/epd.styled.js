import styled from 'styled-components';
import media from '../../utils/responsive';


export const Container = styled.section`
    background-color:#000000;
    color: #ffffff;
	p {
		text-align: justify;
		padding: 10px;
		background-color: #000000;
	}
`;


export const Img = styled.div`
	overflow: scroll;
	display: flex;
	margin: 0 auto;
	box-shadow: 0px 0px 50px gray;
	${media.desktop`
        width:1000px;
    `}
	${media.phone`
        width:100%;
    `}
`;

export const Characters = styled.div`
	background-color: #000000;
	${media.desktop`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    `}
`;

export const CharProfile = styled.div`
	position: relative;
	p {
		position: absolute;
		bottom: 0;
        width:100%;
		font-size: 14px;
		background-color: rgba(0,0,0,0.5);
		text-align: center;
	}
`;
