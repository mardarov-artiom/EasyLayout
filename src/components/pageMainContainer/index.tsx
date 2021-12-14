import React from 'react';

import { PageMainWrapper } from './styles';

const PageMainContainer: React.FC = ({ children }) => {
  return <PageMainWrapper>{children}</PageMainWrapper>;
};

export default PageMainContainer;
