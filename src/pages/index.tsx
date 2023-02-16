import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { MainLayout } from "../layout/main";
import { darkTheme, styled } from "../layout/theme";

const Section = styled("section", {
  margin: "0 auto",
  maxWidth: "$md",
  marginTop: "$lg",
  padding: "$sm",
});

const H1 = styled("h1", {
  paddingBottom: "$md",
  fontSize: "$md",
});

const Paragraph = styled("p", {
  fontSize: "$sm",
  paddingBottom: "$md",
});

const SocialContainer = styled("div", {
  display: "flex",
  marginTop: "$md",
  gap: "$sm",
});

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout className={darkTheme}>
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
          focus on frontend engineering with React and experiment with building{" "}
          <a href="https://localfirstweb.dev/">local-first web applications</a>{" "}
          which I want to explore further here in 2023.
        </Paragraph>
        Find me on the socials:
        <SocialContainer>
          <a href="https://twitter.com/eneskaya">Twitter</a>
          <a href="https://www.linkedin.com/in/ekaya90/">LinkedIn</a>
          <a href="https://github.com/eneskaya">GitHub</a>
        </SocialContainer>
      </Section>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <body className={darkTheme} />
    <title>Enes Kaya | Software Engineering</title>
  </>
);