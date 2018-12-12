import styled from "styled-components";
import media from "../../utils/responsive";

export const Container = styled.section`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	flex-shrink: 0;
	margin: 0 auto;
	${media.phone`
        width:100%;
        font-size:0.7em;
    `}
	>h2 {
		color: white;
		margin: 2% 0;
	}
`;

export const Overview = styled.p`
	color: #ffffff;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const Episode = styled.div`
	position: relative;
	color: #ffffff;
	margin: 2% 0 2% 0;
  width:45%;
	${media.desktop`
        div{display:flex;}
    `}
  ${media.phone`
    width:100%;
    margin: 5% 0 5% 0;
        div{display:block;}
    `}
`;

export const Img = styled.div`
	height: 100%;
  width: 100%;
  text-align: center;
  img{
    width:100%;
    height:100%;
  }
	${media.phone`
    width:100%;
  `}
	> h2 {
		text-align: center;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
	div {
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: center;
		width: 100%;
		p {
			width: 25%;
			background-color: #228cac;
			padding: 2px;
			text-align: center;
      cursor:pointer;
		}

	}
`;
