import React, { useContext } from 'react';
import { GlobalContext } from 'globalContext';
import PageFlexContainer from 'components/pageFlexContainer';
import OverflowHiddenWrapper from 'components/overflowHiddenContainer';
import OverflowWrapper from 'components/overflowContainer';
import MainViewItemsList from 'components/mainViewItemsList';

import { MainViewScrollWrapper } from './styles';

const MainViewContainer: React.FC = () => {
  const { layoutItemsList } = useContext(GlobalContext);
  return (
    <PageFlexContainer>
      <OverflowHiddenWrapper>
        <OverflowWrapper>
          <MainViewScrollWrapper>
            <MainViewItemsList items={layoutItemsList} />
          </MainViewScrollWrapper>
        </OverflowWrapper>
      </OverflowHiddenWrapper>
    </PageFlexContainer>
  );
};

export default MainViewContainer;
