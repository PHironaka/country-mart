import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import CharityPhotos from 'components/charity-photos';

export default ({ data }) => (
  <Layout>

    <Head pageTitle={data.charityJson.title} />

    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.charityJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    <CharityPhotos items={data.charityJson.charityPhotos} />

  </Layout>
);

export const query = graphql`
  query CharityQuery {
     charityJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      charityPhotos {
        copy
        
      }
    }
  }
`;
