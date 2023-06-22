import React, { ReactElement } from 'react';

import { ComponentWithChildren } from 'interfaces/default';
import { PageFlexContainerWrapper } from './styles/pageFlexContainer';

const PageFlexContainer: React.FC<ComponentWithChildren> = ({ children }): ReactElement => {
  return <PageFlexContainerWrapper>{children}</PageFlexContainerWrapper>;
};

export default PageFlexContainer;
