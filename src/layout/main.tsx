import * as React from "react";
import { useThemeChecker } from "../hooks/useThemeChecker";

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...rest
}) => {
  return (
    <main className="mx-auto p-4 max-w-screen-md antialiased" {...rest}>
      {children}
    </main>
  );
};
