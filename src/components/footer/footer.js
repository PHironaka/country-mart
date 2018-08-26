import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { Container, BrentB } from './footer.css';
import FooterLogo from './brentwoodb.svg';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Footer = ({ title }) => (
  <AnimatedContainer>
    <Container>
      
    <BrentB src={FooterLogo } />
      <Nav />
    </Container>
  </AnimatedContainer>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
