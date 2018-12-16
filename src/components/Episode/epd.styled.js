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
	position:relative;
	overflow: hidden;
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

export const Left = styled.div`
	position:absolute;
	top:50%;
	bottom:50%;
`;

export const Right =styled(Left)`
	right:0;	
`;
