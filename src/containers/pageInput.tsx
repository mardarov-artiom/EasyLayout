import React, { useContext } from 'react';
import StyledContainer from 'components/styledContainer';
import ItemsList from 'components/itemsList';
import { GlobalContext } from 'globalContext';
import styled from 'styled-components';
import InnerWrapper from 'components/InnerWrapper';

const PageInputContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #303f9f;
  padding: 40px 15px;
  color: #fff;
  h1 {
    margin: 0;
  }
`;

const PageInputContainer: React.FC = () => {
  const { layoutItemsList } = useContext(GlobalContext);
  return (
    <PageInputContainerWrapper>
      <HeaderWrapper>
        <h1>Easy Layout</h1>
      </HeaderWrapper>
      <StyledContainer>
        <InnerWrapper>
          <ItemsList items={layoutItemsList} />
        </InnerWrapper>
      </StyledContainer>
    </PageInputContainerWrapper>
  );
};

export default PageInputContainer;
