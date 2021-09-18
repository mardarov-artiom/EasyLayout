import styled from 'styled-components';
import React from 'react';

const InnerWrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-grow: 1;
  margin-right: 15px;
`;

const InnerWrapper: React.FC = props => {
  return <InnerWrapperContainer>{props.children}</InnerWrapperContainer>;
};

export default InnerWrapper;
