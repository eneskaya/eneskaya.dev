import React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import { MarkdownData } from "../common/types";
import { MainLayout } from "../layout/main";
import { Typography } from "./Typography";

const BlogPostTemplate: React.FC<PageProps<MarkdownData>> = (props) => {
  const post = props.data.markdownRemark;

  return (
    <MainLayout>
      <section className="my-8">
        <Link
          className="lg:absolute lg:-ml-[150px] flex w-[150px] text-zinc-300 items-center gap-3 text-md pb-2"
          to="/"
        >
          <ArrowLeftIcon width={14} /> Home
        </Link>

        <Typography.H1 className="font-bold">
          {post.frontmatter.title}
        </Typography.H1>
        <small className="text-zinc-500">{post.frontmatter.date}</small>
        <br />
        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></article>
      </section>
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
