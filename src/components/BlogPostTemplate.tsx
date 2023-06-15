import React from "react";
import { graphql, HeadFC, Link as GatsbyLink, PageProps } from "gatsby";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import { MarkdownData } from "../common/types";
import { MainLayout } from "../layout/main";
import { styled } from "../layout/theme";
import { Typography } from "./Typography";

const Section = styled("section", {
  margin: "0 auto",
  maxWidth: "$sm",
  marginTop: "$md",
  padding: "$md",
  position: "relative",
});

const PublishedOn = styled("small", {
  display: "block",
  fontSize: "14px",
  color: "$gray11",
  marginBottom: "$sm",
});

const Title = styled("h2", {
  marginBottom: "$sm",
  fontSize: "$md",
  fontWeight: "bold",
});

const Link = styled(GatsbyLink, {
  display: "flex",
  width: "150px",
  color: "$gray10",
  alignItems: "center",
  gap: "$xs",
  textDecoration: "none",
  fontSize: "$sm",
  paddingBottom: "$sm",

  "@lg": {
    position: "absolute",
    left: "-100px",
  },
});

const BlogPostTemplate: React.FC<PageProps<MarkdownData>> = (props) => {
  const post = props.data.markdownRemark;

  return (
    <MainLayout>
      <Section>
        <Link to="/">
          <ArrowLeftIcon width={14} /> Home
        </Link>

        <Title>{post.frontmatter.title}</Title>
        <PublishedOn>{post.frontmatter.date}</PublishedOn>
        <br />
        <Typography.Article
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></Typography.Article>
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
