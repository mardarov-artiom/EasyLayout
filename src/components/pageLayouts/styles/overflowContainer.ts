import styled from 'styled-components';

import { OverflowContainerInterface } from 'interfaces/styledComponents';

export const OverflowWrapperContainer = styled.div<OverflowContainerInterface>`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  flex-grow: 1;
  padding: ${props => props.padding}px;
  background-color: ${props => props.background};
`;
