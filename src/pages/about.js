import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Gallery from 'components/hero';

export default ({ data }) => (
  <Layout>

    <Head pageTitle={data.aboutJson.title} />
    <Gallery items={data.aboutJson.gallery} />

    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>

  </Layout>
);

export const query = graphql`
  query AboutQuery {
     aboutJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
