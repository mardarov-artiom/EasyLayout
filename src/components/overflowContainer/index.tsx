import React, { ReactElement } from 'react';

import { OverflowHiddenContainerInterface } from 'interfaces';
import { OverflowWrapperContainer } from './styles';

const OverflowContainer: React.FC<OverflowHiddenContainerInterface> = ({ padding, background, children }): ReactElement => {
  return (
    <OverflowWrapperContainer padding={padding} background={background}>
      {children}
    </OverflowWrapperContainer>
  );
};

export default OverflowContainer;
