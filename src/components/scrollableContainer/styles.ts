import React from 'react';
import styled from 'styled-components';

export interface ScrollableWrapperInterface extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string;
  display?: string;
  offset?: number;
}

export const ScrollableWrapper = styled.div<ScrollableWrapperInterface>`
  width: ${props => props.maxWidth || '100%'};
  max-width: ${props => props.maxWidth || '250px'};
  display: ${props => props.display || 'inline-block'};
  margin-left: ${props => props.offset || 0}px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;
