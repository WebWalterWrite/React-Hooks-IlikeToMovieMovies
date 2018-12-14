import React from 'react';
import styled from 'styled-components';
import media from '../../utils/responsive';

// import image
import DefaultProfile from '../../assets/img/got.png'

const Characters = styled.div`
  background-color: #000000;
  ${media.desktop`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    `}
`;

const CharProfile = styled.div`
  padding: 20px;
  text-align: center;
  p {
    width: 100%;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.5);
    color:#FFFFFF;
    text-align: center;
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
                <p>Role: {character}</p>
            </CharProfile>
        ))}
    </Characters>
);

export default People;