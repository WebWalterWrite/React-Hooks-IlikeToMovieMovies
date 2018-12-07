import styled from "styled-components";
import media from "../../utils/responsive";

export const Container = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  margin:2% 0 2% 0;
  div {
    width: 33%;
    height:100%;
    ${media.phone`
        width:100%;
    `}
  }
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

  img {
    ${media.phone`
            width:100%;
        `}
  }
  ${media.desktop`
        div{display:flex;}
    `}
  ${media.phone`
        div{display:block;}
    `}
`;
