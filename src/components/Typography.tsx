import { styled } from "@stitches/react";

export const Typography = () => {};

Typography.H1 = styled("h1", {
  paddingBottom: "$md",
  fontSize: "$lg",
});

Typography.H2 = styled("h2", {
  paddingBottom: "$md",
  fontSize: "$md",
});

Typography.Paragraph = styled("p", {
  fontSize: "$sm",
  paddingBottom: "$md",
});

Typography.Article = styled("article", {
  lineHeight: 1.6,
  fontSize: "$sm",
  ["p"]: {
    marginBottom: "$sm",
  },
});

Typography.Small = styled("small", {
  fontSize: "$xs",
  color: "$gray11",
  marginBottom: "$sm",
});

Typography.List = styled("ul", {
  marginLeft: "$md",
});
