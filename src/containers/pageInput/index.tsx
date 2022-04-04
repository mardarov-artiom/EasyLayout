import React, { ReactElement, useContext } from "react";
import OverflowHiddenWrapper from "components/overflowHiddenContainer";
import ItemsList from "components/itemsList";
import { GlobalContext } from "globalContext";
import OverflowWrapper from "components/overflowContainer";
import PageFlexContainer from "components/pageFlexContainer";

import { ButtonContainerAddition, HeaderWrapper } from "./styles";

const PageInputContainer: React.FC = (): ReactElement => {
  const {layoutItemsList, handleContainerAddition} = useContext(GlobalContext);
  return (
    <PageFlexContainer>
      <HeaderWrapper>
        <h1>Easy Layout</h1>
      </HeaderWrapper>

      <OverflowHiddenWrapper>
        <OverflowWrapper background="#1e1e1e">
          <ItemsList items={layoutItemsList}/>
          <ButtonContainerAddition onClick={handleContainerAddition}>Add Container</ButtonContainerAddition>
        </OverflowWrapper>
      </OverflowHiddenWrapper>
    </PageFlexContainer>
  );
};

export default PageInputContainer;
