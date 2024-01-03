import * as React from "react";

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...rest
}) => {
  return (
    <main className="mx-auto p-4 sm:p-10 max-w-screen-md antialiased" {...rest}>
      {children}
    </main>
  );
};
