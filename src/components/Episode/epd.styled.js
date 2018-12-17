import styled from 'styled-components';
import media from '../../utils/responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Container = styled.section`
    background-color:#000000;
    color: #ffffff;
	>p {
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
	border-bottom:#FECC01 solid 2px;
	${media.desktop`
        width:500px;
    `}
	${media.phone`
        width:100%;
    `}

	img{
		position:relative;
		left:${props => props.slide+'px'};
		transition: all .5s cubic-bezier(0.4, 0, 0.2, 1)
	}
`;

export const Icon = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	${media.phone`
		margin-top:3%;
	`}
	span{
		margin:3%;
		width:70px;
		letter-spacing:3px;
		padding:5px;
		font-weight:bold;
		text-align:center;
		border-width:0px 0 2px 0;
		border-color: #FECC01;
		border-style: solid;
		color:#FFFFFF;
	}
`;

export const Svg = styled(FontAwesomeIcon)`
	visibility:${props => props.visible};
	cursor:pointer;
`;

