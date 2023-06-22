import React, { Fragment, ReactElement, useContext } from "react";
import { LayoutItemsList } from "interfaces/default";
import { generateRandomId, GlobalContext } from "globalContext";

import { Button, Input, InputWrapper, ItemInfo, ItemListContainer, LayoutItemsContainer } from "./styles/itemsList";
import Scrollable from "components/pageLayouts/scrollableContainer";
import { assignColor } from "helpers/colors";

const ItemsList: React.FC<{ items: LayoutItemsList[] }> = ({items}): ReactElement => {
  const {handleItemAddition, handleInputChange} = useContext(GlobalContext);
  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {
        const itemToAdd: LayoutItemsList = {
          id: generateRandomId(),
          tagName: "div",
          classList: "",
          bgColor: assignColor(item.nestedLevel + 1),
          nestedLevel: item.nestedLevel + 1,
          nodes: [],
        };

        const renderItemsList: JSX.Element = (
          <ItemListContainer key={item.id} nested={item.nestedLevel}>
            <ItemInfo className="item-info">
              <InputWrapper className="tag-name" bg={item.bgColor}>
                <Input
                  type="text"
                  placeholder="Tag name"
                  value={item.tagName}
                  onChange={e => handleInputChange(item, "tagName", e.target.value)}
                />
              </InputWrapper>
              <InputWrapper className="input-classes" bg={item.bgColor}>
                <Input
                  type="text"
                  placeholder="Class names"
                  value={item.classList}
                  onChange={e => handleInputChange(item, "classList", e.target.value)}
                />
              </InputWrapper>
              <Button type="button" onClick={() => handleItemAddition(item, itemToAdd)} bg={item.bgColor}>
                +
              </Button>
            </ItemInfo>
            {item.nodes && item.nodes.length > 0 && <ItemsList items={item.nodes}/>}
          </ItemListContainer>
        );

        if (item.nestedLevel === 0) {
          return (
            <LayoutItemsContainer key={item.id} bg={item.bgColor}>
              <div className="header-info">
                <Scrollable className="tag-name">{item.tagName}</Scrollable>
                {item.classList &&
                  <Scrollable className="class-lists" maxWidth={"initial"}>{item.classList}</Scrollable>}
              </div>
              {renderItemsList}
            </LayoutItemsContainer>
          );
        }

        return renderItemsList;
      })}
    </Fragment>
  );
};

export default ItemsList;
