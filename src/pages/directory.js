import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "components/layout"
import Box from 'components/box'

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
  	<Layout>
        <Box>
		  
    <div>
      {posts.map (({node: post}) => {
        const {frontmatter} = post;
        return (
          <div  class="artist">

            <h2>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2>
          </div>
        );
      })}
    </div>
        </Box>

    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;