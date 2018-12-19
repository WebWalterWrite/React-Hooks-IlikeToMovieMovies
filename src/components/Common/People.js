import React from 'react';
import styled from 'styled-components';
import media from '../../utils/responsive';

// import image
import DefaultProfile from '../../assets/img/got.png'

const Characters = styled.div`
  background-color: #000000;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
`;

const CharProfile = styled.div`
  padding: 10px !important;
  text-align: center;
  p {
    width: 100%;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.5);
    color:#FFFFFF;
    text-align: center !important;
  }
  img{
    width:100%;
	border-bottom:2px #FECC01 solid;
  }
  ${media.phone`
    width:50%;
  `}
`;

const Role =styled.div`
    display:block;
    p{  
        margin:0 auto;
        width:30%;
        padding:2%;
        background-color:#FECC01 !important;
        font-weight:bold;
    }
`;

const People = ({data}) => (
    <Characters>
        {data && data.map(({ character, profile_path, name }, k) => (
            <CharProfile key={k}>
                <img src={
                    profile_path
                        ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                        : DefaultProfile
                } alt="" width="185" height="278" />
                <p>{name}</p>
                <Role><p>Role</p><span>{character}</span></Role>
            </CharProfile>
        ))}
    </Characters>
);

export default People;