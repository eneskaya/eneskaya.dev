import * as React from "react";
import { darkTheme, globalStyles, styled } from "./theme";
import { useThemeChecker } from "../hooks/useThemeChecker";

const Main = styled("main", {
  margin: "0 auto",
  padding: 0,
});

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...rest
}) => {
  globalStyles();

  useThemeChecker(darkTheme);

  return <Main {...rest}>{children}</Main>;
};
