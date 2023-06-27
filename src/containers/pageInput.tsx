import React, { ReactElement, useContext } from 'react';
import OverflowHiddenWrapper from 'components/pageLayouts/overflowHiddenContainer';
import ItemsList from 'components/views/input/itemsList';
import { GlobalContext } from 'globalContext';
import OverflowWrapper from 'components/pageLayouts/overflowContainer';

import {
  ButtonContainerAddition,
  HeaderWrapper,
  PageInputHeader,
  PageInputWrapper,
  Settings
} from './styles/pageInput';

import SettingsIcon from 'assets/icons/settings.svg';
import ViewMode from 'components/common/viewMode';

const PageInputContainer: React.FC = (): ReactElement => {
  const {layoutItemsList, handleSectionAddition} = useContext(GlobalContext);
  return (
    <PageInputWrapper>
      <PageInputHeader>
        <HeaderWrapper><h1>Easy Layout</h1></HeaderWrapper>
        <Settings><img src={SettingsIcon} alt="SettingsIcon"/></Settings>
        <ViewMode/>
      </PageInputHeader>
      <OverflowHiddenWrapper>
        <OverflowWrapper background="#1e1e1e">
          <ItemsList items={layoutItemsList}/>
        </OverflowWrapper>
      </OverflowHiddenWrapper>
      <ButtonContainerAddition onClick={handleSectionAddition}><span>Add Section</span></ButtonContainerAddition>
    </PageInputWrapper>
  );
};

export default PageInputContainer;
