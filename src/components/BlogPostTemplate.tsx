import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import { MarkdownData } from "../common/types";
import { MainLayout } from "../layout/main";
import { styled } from "../layout/theme";

const Section = styled("section", {
  margin: "0 auto",
  maxWidth: "$sm",
  marginTop: "$lg",
  padding: "$md",
});

const H1 = styled("h1", {
  paddingBottom: "$md",
  fontSize: "$lg",
});

const Article = styled("article", {
  lineHeight: 1.4,
  fontSize: "$md",
  ["p"]: {
    marginBottom: "$sm",
  },
});

const BlogPostTemplate: React.FC<PageProps<MarkdownData>> = (props) => {
  const post = props.data.markdownRemark;

  return (
    <MainLayout>
      <Section>
        <H1>{post.frontmatter.title}</H1>
        <p>Published on {post.frontmatter.date}</p>
        <br />
        <Article dangerouslySetInnerHTML={{ __html: post.html }}></Article>
      </Section>
    </MainLayout>
  );
};

export default BlogPostTemplate;

export const Head: HeadFC<MarkdownData> = ({ data }) => (
  <>
    <title>{data.markdownRemark.frontmatter.title} | Enes Kaya</title>
  </>
);

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "DD.MM.yyyy")
      }
    }
  }
`;
