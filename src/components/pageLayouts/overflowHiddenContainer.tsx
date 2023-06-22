import React, { ReactElement } from 'react';

import { ComponentWithChildren } from 'interfaces/default';
import { OverflowHiddenWrapper } from './styles/overflowHiddenContainer';

const OverflowHiddenContainer: React.FC<ComponentWithChildren> = ({ children }): ReactElement => {
  return <OverflowHiddenWrapper>{children}</OverflowHiddenWrapper>;
};

export default OverflowHiddenContainer;
