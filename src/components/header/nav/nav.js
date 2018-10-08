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
       <Link to="/about">Artists</Link>
      </li>
      <li>
       <Link to="/directory">Exhibitions</Link>
      </li>
    
       <li>
       <Link to="/contact">Contact</Link>
      </li>

        <li>
       <Link to="/press">Press</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
