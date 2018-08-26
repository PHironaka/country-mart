import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

export default ({ data }) => (
  <Layout>

    <Head pageTitle={data.contactJson.title} />

    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contactJson.content.childMarkdownRemark.html,
        }}
      />
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
    }
  }
`;
