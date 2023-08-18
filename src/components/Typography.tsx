import React from "react";
import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export const Typography = () => {
  throw new Error(
    "<Typography> is not a component, use child components instead"
  );
};

const Paragraph: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
}) => <p className={cn("text-md mb-4 text-gray-200", className)}>{children}</p>;

Typography.Paragraph = Paragraph;

const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
}) => (
  <h1 className={cn("text-3xl mb-6 font-bold text-white", className)}>
    {children}
  </h1>
);
Typography.H1 = H1;

const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
}) => <h2 className={cn("text-xl text-white", className)}>{children}</h2>;
Typography.H2 = H2;

const H3: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
}) => (
  <h3 className={cn("text-lg font-medium text-white", className)}>
    {children}
  </h3>
);
Typography.H3 = H3;

const H4: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
}) => (
  <h4 className={cn("text-md font-medium text-white", className)}>
    {children}
  </h4>
);
Typography.H4 = H4;

const H5: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
}) => (
  <h5 className={cn("text-sm font-medium text-white", className)}>
    {children}
  </h5>
);
Typography.H5 = H5;

const List: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
}) => (
  <ul className={cn("text-sm font-medium text-white", className)}>
    {children}
  </ul>
);
Typography.List = List;
