import React, {Fragment, useState} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

// import icon
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

// import styles
import {H1, Back} from './layout.styled';
const Header = () => {
  // State
  const [pos, setPos ] = useState({top: 0, isHidden:true});

  // Afficher icon haut de page
  const BackToTop = () => {
    window.scrollY > 1600
    ? setPos({isHidden:false}) 
    : setPos({isHidden:true})
  }
  // Retour Haut de page
  const ClickToBack =()=> {
    scroll.scrollToTop({
      smooth: "easeOutQuad",
    });
  }

  // Ecoutér le scroll
  window.onscroll = () => BackToTop();

  return (
    <Fragment>
        {!pos.isHidden && <Back onClick={ClickToBack} icon={faArrowCircleUp} size="3x"/>}
      <header>
      <H1>
        <Link to="/">OH My GOT</Link>
      </H1>
      </header>
    </Fragment>
)};

export default Header;