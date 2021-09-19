import React from 'react';

import { PageMainWrapper } from './styles';

const PageMainContainer: React.FC = props => {
  return <PageMainWrapper>{props.children}</PageMainWrapper>;
};

export default PageMainContainer;
