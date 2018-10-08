import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
    justify-self:right;

  ul {
    display: grid;
grid-template-columns: 84px 80px 109px 85px 60px;
    list-style: none;
    padding: 0;
    text-align: right;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

     
    }
  }

   ${MEDIA.TABLET`
display:none;   
  `};
`;
