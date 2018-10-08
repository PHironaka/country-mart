import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { Link, graphql } from 'gatsby';
import Exhibits from 'components/articleContent';

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
        <Box>
      <Title tag="span" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    <div class="index-artists">

      {posts
        .filter(post => post.node.frontmatter.templateKey === 'exhibition')
        .map (({node: post}) => {
        const {frontmatter} = post;
        return (

          <div  class="artist">
          <div  class="artist-copy">
          <Exhibits >
            <h2>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2>

           <p> {frontmatter.showing}</p>
</Exhibits>

</div>

<img src={post.frontmatter.image} alt={post.frontmatter.title} />
          </div>
        );
      })}
    </div>
        </Box>

    </Layout>
  );
};

export const query = graphql`
  query HomeQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
  
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            showing
            image 
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;