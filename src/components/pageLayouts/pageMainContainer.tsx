import React, { ReactElement } from 'react';

import { ComponentWithChildren } from 'interfaces/default';
import { PageMainWrapper } from './styles/pageMainContainer';

const PageMainContainer: React.FC<ComponentWithChildren> = ({ children }): ReactElement => {
  return <PageMainWrapper>{children}</PageMainWrapper>;
};

export default PageMainContainer;
