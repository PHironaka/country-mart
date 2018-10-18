import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';
import FooterLogo from './brentwoodb.svg';
import Nav from 'components/header/nav';



const Footer = ({ title }) => (
    <Container>
      <h2>Logo</h2>
    
      <Nav />
    </Container>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
