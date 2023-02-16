import * as React from "react";
import { globalStyles, styled } from "./theme";

const Main = styled("main", {
  margin: "0 auto",
  padding: 0,
  color: "$primaryText",
});

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...rest
}) => {
  globalStyles();

  return <Main {...rest}>{children}</Main>;
};
