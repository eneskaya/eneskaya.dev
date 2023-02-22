import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";

import { MainLayout } from "../layout/main";
import { styled } from "../layout/theme";
import { AllMarkdownData } from "../common/types";

const Section = styled("section", {
  margin: "0 auto",
  maxWidth: "$sm",
  marginTop: "$lg",
  padding: "$sm",
});

const H1 = styled("h1", {
  paddingBottom: "$md",
  fontSize: "$lg",
});

const H2 = styled("h1", {
  paddingBottom: "$md",
  fontSize: "$md",
});

const Paragraph = styled("p", {
  fontSize: "$sm",
  paddingBottom: "$md",
});

const List = styled("ul", {
  marginLeft: "$md",
});

const Small = styled("small", {
  fontSize: "$xs",
  color: "$gray11",
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

  console.log(edges);

  return (
    <MainLayout>
      <Section>
        <H1>Hello 👋</H1>
        <Paragraph>
          I am Enes Kaya, a product-oriented web engineer, working across the
          full stack. I live in{" "}
          <a href="https://goo.gl/maps/p9zjE4FFJggobeW68">📍 Germany</a> with my
          beautiful wife and son.
        </Paragraph>
        <Paragraph>
          I founded two companies, where I've learnt to love working on all
          facettes of a product, from conception to fund-raising, to marketing.
          I have also worked at larger organizations, like Spotify. Lately, I
          focus on frontend engineering with React and experiment with building
          my own software business.
        </Paragraph>
        Find me on the socials:
        <SocialContainer>
          <a href="https://twitter.com/eneskaya">Twitter</a>
          <a href="https://www.linkedin.com/in/ekaya90/">LinkedIn</a>
          <a href="https://github.com/eneskaya">GitHub</a>
        </SocialContainer>
      </Section>

      <Section>
        <H2>Writing</H2>
        <List>
          {edges.map(({ node }) => {
            return (
              <li>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                , <Small>{node.frontmatter.date}</Small>
              </li>
            );
          })}
        </List>
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
