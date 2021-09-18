import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
`;

const StyledContainer: React.FC = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default StyledContainer;
