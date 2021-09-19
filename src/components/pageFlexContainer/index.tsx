import React from 'react';

import { PageFlexContainerWrapper } from './styles';

const PageFlexContainer: React.FC = props => {
  return <PageFlexContainerWrapper>{props.children}</PageFlexContainerWrapper>;
};

export default PageFlexContainer;
