import React, { ReactElement } from "react";

import { ScrollableWrapperInterface } from "interfaces";

import { ScrollableWrapper } from "./styles";

const Scrollable: React.FC<ScrollableWrapperInterface> = ({maxWidth, offset, children, ...props}): ReactElement => {
  return (
    <ScrollableWrapper maxWidth={maxWidth} offset={offset} {...props}>
      {children}
    </ScrollableWrapper>
  );
};

export default Scrollable;
