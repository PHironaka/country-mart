import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './contact.css';

const Contact = ({ children }) => <Container>{children}</Container>;

Contact.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contact;
