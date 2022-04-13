import styled from 'styled-components';

import { OverflowHiddenContainerInterface } from 'interfaces';

export const OverflowWrapperContainer = styled.div<OverflowHiddenContainerInterface>`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  flex-grow: 1;
  padding: ${props => props.padding}px;
  background-color: ${props => props.background};
`;
