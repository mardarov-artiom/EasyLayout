import styled from 'styled-components';
import React from 'react';

const PageMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

const PageMainContainer: React.FC = props => {
  return <PageMainWrapper>{props.children}</PageMainWrapper>;
};

export default PageMainContainer;
