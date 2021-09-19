import React from 'react';

import { OverflowHiddenWrapper } from './styles';

const OverflowHiddenContainer: React.FC = props => {
  return <OverflowHiddenWrapper>{props.children}</OverflowHiddenWrapper>;
};

export default OverflowHiddenContainer;
