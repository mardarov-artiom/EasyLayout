import React, { ReactElement } from 'react';

import { PageMainWrapper } from './styles';

const PageMainContainer: React.FC = ({ children }): ReactElement => {
  return <PageMainWrapper>{children}</PageMainWrapper>;
};

export default PageMainContainer;
