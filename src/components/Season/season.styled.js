import styled from "styled-components/macro";
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

export const Overview = styled.div`
	>div{
		background-color:#FECC01;
		color:#000000;
		text-align:center;
		width:15%;
		padding:0;
		h1{
			font-size:1.5em;
			font-family: "GameofThrones";
		}
		${media.phone`
			width:25%;
		`}
		>p{
			font-size:10px;
			padding:0;
			letter-spacing:.8em;
			text-align:center;
			${media.phone`
			letter-spacing:.2em;
			`}
		}
	}
	color: #ffffff;
	background-color: #000000;
	padding:2%;
`;

export const Episode = styled.div`
	position: relative;
	color: #ffffff;
  width:45%;
	margin:2.5% 0 2.5% 0;
	h1{
		background-color:#FECC01;
		color:#000000;
		width:25%;
		text-align:center;
		font-weight:bold;
		padding:1%;
		font-family: "GameofThrones";
	}
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
  overflow: hidden;
	height: 100%;
  width: 100%;
  text-align: center;
	border-top: #FECC01 solid;
	:hover img{
		transform: scale(1.2);
	}

  img{
    width:100%;
    height:100%;
		transition: transform 0.3s ease-in-out;
		}
	}
	${media.phone`
    width:100%;
  `}
	> h2 {
		font-family: 'Cinzel', serif;
		text-align: center;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);

		${media.phone`
			font-size:2em;
		`}
	}
	div {
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: center;
		width: 100%;
		a {
			width:25%;
			background-color: #228cac;
			padding: 8px;
			letter-spacing:.3em;
			text-align: center;
			text-decoration:none;
			color:#FFFFFF;
      cursor:pointer;
			:hover{
				border-bottom:#FFFFFF 2px solid;
				padding: 6px;
			}
			${media.phone`
			width:30%;
			font-size:1.5em;
			`}
		}

	}
`;
