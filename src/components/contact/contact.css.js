import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
	display:grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2em;

	${MEDIA.TABLET`
  grid-template-columns: 1fr;
	grid-gap: 0;
   
  `};  

`;
