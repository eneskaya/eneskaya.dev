import * as React from "react";
import { RenderBodyArgs } from "gatsby";

export const onRenderBody = ({
  setHeadComponents,
  setBodyAttributes,
}: RenderBodyArgs) => {
  setBodyAttributes({
    className: "bg-zinc-900",
  });
  setHeadComponents([
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
    />,
  ]);
};
