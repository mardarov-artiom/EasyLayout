import React from 'react';

import { OverflowWrapperContainer, OverflowHiddenContainerInterface } from './styles';

const OverflowContainer: React.FC<OverflowHiddenContainerInterface> = ({ padding, background, children }) => {
  return (
    <OverflowWrapperContainer padding={padding} background={background}>
      {children}
    </OverflowWrapperContainer>
  );
};

export default OverflowContainer;
