import React, { ReactElement, useContext } from "react";

import { PageOutputInternalContainer, PageOutputInternalWrapperInterface } from "./styles";
import { GlobalContext } from "globalContext";

const PageOutputInternalWrapper: React.FC<PageOutputInternalWrapperInterface> = ({name, text, children}): ReactElement => {
  const {copyHtmlToClipboard} = useContext(GlobalContext);
  return (
    <PageOutputInternalContainer>
      <div className="poic-header">
        <span className="poic-name">{name}</span>
        <span className="poic-copy" onClick={copyHtmlToClipboard}>{text}</span>
      </div>
      <div className="poic-body">{children}</div>
    </PageOutputInternalContainer>
  );
};

export default PageOutputInternalWrapper;
