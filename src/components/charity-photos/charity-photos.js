import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/charity-photos/item';
import { Hero } from './charity-photos.css';

const CharityPhotos = ({ items }) => (
  <Hero>{items.map((item, i) => <Item {...item} key={i} />)}</Hero>
);

CharityPhotos.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharityPhotos;
