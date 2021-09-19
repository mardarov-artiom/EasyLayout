import React, { Fragment } from 'react';
import { LayoutItemsList } from 'interfaces';

import { MainViewItemContainer, MainViewItemHeaderContainer, MainViewItemMainContainer } from './styles';

import SettingsIcon from 'assets/icons/settings.svg';

const MainViewItemsList: React.FC<{ items: LayoutItemsList[] }> = ({ items }) => {
  return (
    <Fragment>
      {items.map((item: LayoutItemsList) => {
        return (
          <MainViewItemContainer key={item.id}>
            <MainViewItemHeaderContainer bg={item.bgColor}>
              <div className="flex-wrapper">
                <div className="main-tag-names">{item.tagName}</div>
                <div className="main-class-list">
                  {item.classList.length > 0 && 'class:'} {<input type="text" readOnly value={item.classList} />}
                </div>
              </div>
              <div className="settings-icon">
                <img src={SettingsIcon} alt="" />
              </div>
            </MainViewItemHeaderContainer>
            <MainViewItemMainContainer childrens={item.childrens}>
              {item.childrens && item.childrens.length > 0 && <MainViewItemsList items={item.childrens} />}
            </MainViewItemMainContainer>
          </MainViewItemContainer>
        );
      })}
    </Fragment>
  );
};

export default MainViewItemsList;
