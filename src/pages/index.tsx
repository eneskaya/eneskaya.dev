import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";

import { MainLayout } from "../layout/main";
import { AllMarkdownData } from "../common/types";
import { Typography } from "../components/Typography";

const IndexPage: React.FC<PageProps<AllMarkdownData>> = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;

  return (
    <MainLayout>
      <section className="mt-8">
        <Typography.H1>Hello</Typography.H1>
        <Typography.Paragraph>
          I am Enes Kaya, a product-oriented web engineer, working across the
          full stack. I live in Germany with my beautiful wife and two kids.
        </Typography.Paragraph>
        <Typography.Paragraph>
          I founded two companies, where I've learnt to love working on all
          facettes of a product, from conception to fund-raising, to marketing.
          I currently work as a Software Engineer at{" "}
          <a target="_blank" href="https://open.spotify.com">
            Spotify
          </a>
          . Lately, I focus on frontend engineering with React and experiment
          with building my own software business.
        </Typography.Paragraph>

        <div className="space-x-4">
          <a target="_blank" href="https://twitter.com/eneskaya">
            Twitter
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ekaya90/">
            LinkedIn
          </a>
          <a target="_blank" href="https://github.com/eneskaya">
            GitHub
          </a>
        </div>
      </section>

      <section className="mt-10">
        <Typography.H2 className="font-bold mt-8">Writing</Typography.H2>
        <Typography.List className="mt-4">
          {edges.map(({ node }) => {
            return (
              <li>
                <Link className="text-lg" to={node.frontmatter.slug}>
                  {node.frontmatter.title}
                </Link>
                ,{" "}
                <small className="text-zinc-500">{node.frontmatter.date}</small>
              </li>
            );
          })}
        </Typography.List>
      </section>
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
