import React, { ReactElement } from 'react';

import { PageFlexContainerWrapper } from './styles';

const PageFlexContainer: React.FC = (props): ReactElement => {
  return <PageFlexContainerWrapper>{props.children}</PageFlexContainerWrapper>;
};

export default PageFlexContainer;
