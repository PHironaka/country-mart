import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './articleContent.css';

const articleContent = ({ children }) => <Container>{children}</Container>;

articleContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default articleContent;