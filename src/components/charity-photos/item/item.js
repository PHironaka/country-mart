import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Copy , Fig } from './item.css';

const Item = ({ title, copy, image }) => (
  <Fig>
      <Copy>{copy}</Copy>
  </Fig>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
