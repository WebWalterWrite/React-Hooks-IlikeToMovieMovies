import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = styled.div`
    text-decoration:none;
    color:#FFFFFF;
    padding:20px 0px 20px 0px;
    a{
        background-color:#228cac;
        text-decoration:none;
        color:#FFFFFF;
        padding:6px;
        font-family: 'Cormorant Garamond', serif;
    svg{
        margin-right:.3em;
    }	
}`;

const Back = ({ data: { link, content } }) => {

    return (
        <BackButton>
            <Link to={link}>
                <FontAwesomeIcon icon={faArrowLeft} size="1x" />
                <span>{content}</span>
            </Link>
        </BackButton>
    )
};

export default Back;