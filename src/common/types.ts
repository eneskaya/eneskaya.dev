type Frontmatter = {
  title: string;
  slug: string;
  date: string;
};

export type MarkdownData = {
  markdownRemark: {
    id: string;
    frontmatter: Frontmatter;
    html: string;
  };
};

export type AllMarkdownData = {
  allMarkdownRemark: {
    nodes: {
      id: string;
      frontmatter: Frontmatter;
    }[];
    edges: {
      node: {
        excerpt: string;
        frontmatter: Frontmatter;
      };
    }[];
  };
};
