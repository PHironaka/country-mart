import React from 'react';
import PropTypes from 'prop-types';
import { Container, BrentB } from './footer.css';
import FooterLogo from './brentwoodb.svg';
import Nav from 'components/header/nav';



const Footer = ({ title }) => (
    <Container>
      
    <BrentB src={FooterLogo } />
      <Nav />
    </Container>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
