import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
 display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 4rem;
.bm-burger-button {
display:none; 
 
  ${MEDIA.TABLET`
    display:block;
  position: absolute;
  width: 30px;
  height: 20px;
  right: 36px;
  top: 36px;  
  `};

}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
  height:1px !important;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/* General sidebar styles */
.bm-menu {
  background: #000;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

.bm-menu-wrap {
  top: 0;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #fff;
  padding: 0;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: transparent !important;
  left:0;
  top:0;
}


  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;


export const Company = styled.img`
  max-width: 261px;
`;
