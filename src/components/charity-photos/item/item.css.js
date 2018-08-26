import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';


export const Fig = styled.figure`
  display: grid;
  grid-template-columns: 140px 1fr;
   grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
  ${MEDIA.TABLET`
    display: block;
  `};
`;


export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
