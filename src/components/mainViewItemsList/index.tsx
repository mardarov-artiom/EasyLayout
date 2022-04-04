import React, { Fragment, ReactElement, useContext } from "react";
import { GlobalContext } from "globalContext";
import { LayoutItemsList } from "interfaces";
import Scrollable from "components/scrollableContainer";


import { MainViewItemContainer, MainViewItemHeaderContainer, MainViewItemMainContainer } from "./styles";

import SettingsIcon from "assets/icons/settings.svg";

const MainViewItemsList: React.FC<{ items: LayoutItemsList[] }> = ({items}): ReactElement => {
  const {handleModalOpen} = useContext(GlobalContext);
  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {
        return (
          <MainViewItemContainer key={item.id}>
            <MainViewItemHeaderContainer bg={item.bgColor}>
              <div className="flex-wrapper">
                <div className="main-tag-names">{item.tagName}</div>
                <div className="main-class-list">
                  {item.classList.length > 0 && "class: "} {<Scrollable offset={5}>{item.classList}</Scrollable>}
                </div>
              </div>
              {item.classList &&
                <div className="settings-icon" onClick={() => handleModalOpen(item)}>
                  <img src={SettingsIcon} alt="Settings"/>
                </div>
              }
            </MainViewItemHeaderContainer>
            <MainViewItemMainContainer childrens={item.childrens}>
              {item.childrens && item.childrens.length > 0 && <MainViewItemsList items={item.childrens}/>}
            </MainViewItemMainContainer>
          </MainViewItemContainer>
        );
      })}
    </Fragment>
  );
};

export default MainViewItemsList;
