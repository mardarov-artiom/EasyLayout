import React, { ReactElement } from 'react';

import { OverflowHiddenWrapper } from './styles';

const OverflowHiddenContainer: React.FC = (props): ReactElement => {
  return <OverflowHiddenWrapper>{props.children}</OverflowHiddenWrapper>;
};

export default OverflowHiddenContainer;
