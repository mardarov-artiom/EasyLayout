import React from 'react';

import { PageOutputInternalContainer, PageOutputInternalWrapperInterface } from './styles';

const PageOutputInternalWrapper: React.FC<PageOutputInternalWrapperInterface> = ({ name, children }) => {
  return (
    <PageOutputInternalContainer>
      <div className="poic-header">
        <span className="poic-name">{name}</span>
        <span className="poic-copy">Copy</span>
      </div>
      <div className="poic-body">{children}</div>
    </PageOutputInternalContainer>
  );
};

export default PageOutputInternalWrapper;
