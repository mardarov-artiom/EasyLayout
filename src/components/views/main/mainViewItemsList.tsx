import React, { Fragment, ReactElement, useContext } from "react";
import { LayoutItemsList } from "interfaces/default";
import Scrollable from "components/pageLayouts/scrollableContainer";

import { MainViewItemContainer, MainViewItemHeaderContainer, MainViewItemMainContainer } from "./styles/mainViewItemsList";
import { GlobalContext } from "globalContext";

const MainViewItemsList: React.FC<{ items: LayoutItemsList[] }> = ({items}): ReactElement => {
  const { globalApplicationSettings } = useContext(GlobalContext);
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
            </MainViewItemHeaderContainer>
            <MainViewItemMainContainer nodes={item.nodes} settings={globalApplicationSettings}>
              {item.nodes && item.nodes.length > 0 && <MainViewItemsList items={item.nodes}/>}
            </MainViewItemMainContainer>
          </MainViewItemContainer>
        );
      })}
    </Fragment>
  );
};

export default MainViewItemsList;
