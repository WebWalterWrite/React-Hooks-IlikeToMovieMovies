import React from 'react';
import { Link } from 'react-router-dom';

import {H1} from './layout.styled';
const Header = () => (
  <header>
    <H1>
      <Link to="/">Oh my GOT</Link>
    </H1>
  </header>
);

export default Header;