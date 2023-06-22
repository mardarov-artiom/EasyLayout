import React, { ReactElement, useContext } from "react";
import { GlobalContext } from "globalContext";
import PageFlexContainer from "components/pageLayouts/pageFlexContainer";
import OverflowHiddenWrapper from "components/pageLayouts/overflowHiddenContainer";
import OverflowWrapper from "components/pageLayouts/overflowContainer";
import MainViewItemsList from "components/views/main/mainViewItemsList";

import { MainViewScrollWrapper } from "./styles/mainView";

const MainViewContainer: React.FC = (): ReactElement => {
  const {layoutItemsList} = useContext(GlobalContext);
  return (
    <PageFlexContainer>
      <OverflowHiddenWrapper>
        <OverflowWrapper>
          <MainViewScrollWrapper>
            <MainViewItemsList items={layoutItemsList}/>
          </MainViewScrollWrapper>
        </OverflowWrapper>
      </OverflowHiddenWrapper>
    </PageFlexContainer>
  );
};

export default MainViewContainer;
