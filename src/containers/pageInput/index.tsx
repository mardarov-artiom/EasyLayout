import React, { ReactElement, useContext } from "react";
import OverflowHiddenWrapper from "components/overflowHiddenContainer";
import ItemsList from "components/itemsList";
import { GlobalContext } from "globalContext";
import OverflowWrapper from "components/overflowContainer";

import { PageInputWrapper, ButtonContainerAddition, HeaderWrapper, Settings, PageInputHeader } from "./styles";

import SettingsIcon from "assets/icons/settings.svg";

const PageInputContainer: React.FC = (): ReactElement => {
  const {layoutItemsList, handleContainerAddition} = useContext(GlobalContext);
  return (
    <PageInputWrapper>
      <PageInputHeader>
        <HeaderWrapper><h1>Easy Layout</h1></HeaderWrapper>
        <Settings><img src={SettingsIcon} alt="SettingsIcon"/></Settings>
      </PageInputHeader>
      <OverflowHiddenWrapper>
        <OverflowWrapper background="#1e1e1e">
          <ItemsList items={layoutItemsList}/>
        </OverflowWrapper>
      </OverflowHiddenWrapper>
      <ButtonContainerAddition onClick={handleContainerAddition}><span>Add Container</span></ButtonContainerAddition>
    </PageInputWrapper>
  );
};

export default PageInputContainer;
