import React, { ReactElement, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { PageOutputInternalWrapperInterface } from "interfaces/styledComponents";
import { PageOutputInternalContainer, ScrollContainer, ScrollInner } from "./styles/pageOutputInternalContainer";
import { GlobalContext } from '../../../globalContext';

const PageOutputInternalWrapper: React.FC<PageOutputInternalWrapperInterface> = ({name, text, clickAction, children}): ReactElement => {
  return (
    <PageOutputInternalContainer>
      <div className="poic-header">
        <span className="poic-name">{name}</span>
        <span className="poic-copy" onClick={clickAction}>{text}</span>
      </div>
      <ScrollContainer>
        <ScrollInner>
          <div className="poic-body">{children}</div>
        </ScrollInner>
      </ScrollContainer>
    </PageOutputInternalContainer>
  );
};

export default PageOutputInternalWrapper;
