import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 2rem 4rem;


  .index-artists {
    margin-top:6em;
  }

  .artist {
  	margin:1em 0;
    display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  ${MEDIA.TABLET`
  grid-template-columns: 1fr;
   
  `};

  }

  h2 {
  	font-size: 1.5em;


  	a {
  	color:black;
  	text-decoration:none;
  	}
  }

`;
