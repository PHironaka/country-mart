import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Company } from './header.css';
import { Container } from './header.css';
import Logo from './fireplace.svg';
import Nav from 'components/header/nav';
import { slide as Menu } from 'react-burger-menu'

// Example of a component-specific page transition


const Header = ({ title }) => (
    <Container>
      <Link to="/">
    <Company src={Logo} alt="logo" />
      </Link>

      <Nav />
       <Menu right isOpen={ false } >
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about">About</Link>
      <Link className="menu-item" to="/about">Contact</Link>
      
      </Menu>
    </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
