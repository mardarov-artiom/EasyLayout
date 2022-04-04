import React, { ReactElement } from "react";

import { PageOutputInternalContainer, PageOutputInternalWrapperInterface } from "./styles";

const PageOutputInternalWrapper: React.FC<PageOutputInternalWrapperInterface> = ({name, text, clickAction, children}): ReactElement => {
  return (
    <PageOutputInternalContainer>
      <div className="poic-header">
        <span className="poic-name">{name}</span>
        <span className="poic-copy" onClick={clickAction}>{text}</span>
      </div>
      <div className="poic-body">{children}</div>
    </PageOutputInternalContainer>
  );
};

export default PageOutputInternalWrapper;
