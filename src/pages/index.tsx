import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";

import { MainLayout } from "../layout/main";
import { styled } from "../layout/theme";
import { AllMarkdownData } from "../common/types";
import { Typography } from "../components/Typography";

const Section = styled("section", {
  margin: "0 auto",
  maxWidth: "$sm",
  marginTop: "$lg",
  padding: "$sm",
});

const SocialContainer = styled("div", {
  display: "flex",
  marginTop: "$md",
  gap: "$sm",
});

const IndexPage: React.FC<PageProps<AllMarkdownData>> = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;

  return (
    <MainLayout>
      <Section>
        <Typography.H1>Hello 👋</Typography.H1>
        <Typography.Paragraph>
          I am Enes Kaya, a product-oriented web engineer, working across the
          full stack. I live in{" "}
          <a href="https://goo.gl/maps/p9zjE4FFJggobeW68">📍 Germany</a> with my
          beautiful wife and son.
        </Typography.Paragraph>
        <Typography.Paragraph>
          I founded two companies, where I've learnt to love working on all
          facettes of a product, from conception to fund-raising, to marketing.
          I have also worked at larger organizations, like Spotify. Lately, I
          focus on frontend engineering with React and experiment with building
          my own software business.
        </Typography.Paragraph>
        Find me on the socials:
        <SocialContainer>
          <a href="https://twitter.com/eneskaya">Twitter</a>
          <a href="https://www.linkedin.com/in/ekaya90/">LinkedIn</a>
          <a href="https://github.com/eneskaya">GitHub</a>
        </SocialContainer>
      </Section>

      <Section>
        <Typography.H2>Writing</Typography.H2>
        <Typography.List>
          {edges.map(({ node }) => {
            return (
              <li>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                , <Typography.Small>{node.frontmatter.date}</Typography.Small>
              </li>
            );
          })}
        </Typography.List>
      </Section>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Enes Kaya</title>
  </>
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD.MM.yyyy")
            slug
          }
          excerpt
        }
      }
    }
  }
`;
