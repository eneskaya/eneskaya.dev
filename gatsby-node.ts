import type { GatsbyNode } from "gatsby";

import * as path from "path";
import { AllMarkdownData } from "./src/common/types";

const BlogPostTemplate = path.resolve("./src/components/BlogPostTemplate.tsx");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const result = await graphql<AllMarkdownData>(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          frontmatter {
            slug
            title
            date
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  if (!result.data) {
    reporter.warn("No blog posts found");
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

    createPage({
      path: post.frontmatter.slug,
      component: BlogPostTemplate,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    });
  });
};
