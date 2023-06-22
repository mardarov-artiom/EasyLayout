import React, { ReactElement } from 'react';

import { OverflowContainerInterface } from 'interfaces/styledComponents';
import { OverflowWrapperContainer } from './styles/overflowContainer';

const OverflowContainer: React.FC<OverflowContainerInterface> = ({ padding, background, children }): ReactElement => {
  return (
    <OverflowWrapperContainer padding={padding} background={background}>
      {children}
    </OverflowWrapperContainer>
  );
};

export default OverflowContainer;
