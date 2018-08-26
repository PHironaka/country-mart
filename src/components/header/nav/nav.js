import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
       <Link to="/about">Directory</Link>
      </li>
      <li>
       <Link to="/charity">Charity</Link>
      </li>
    
       <li>
       <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;