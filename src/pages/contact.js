import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Contact from 'components/contact';
import Head from 'components/head';
import Gallery from 'components/hero';

export default ({ data }) => (
  <Layout>

    <Head pageTitle={data.contactJson.title} />

    <Box>
    <Contact>
    <Gallery items={data.contactJson.gallery} />

      <div
        dangerouslySetInnerHTML={{
          __html: data.contactJson.content.childMarkdownRemark.html,
        }}
      />
    </Contact>
    </Box>

  </Layout>
);

export const query = graphql`
  query ContactQuery {
     contactJson {
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
