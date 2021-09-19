import React, { Fragment, useContext } from 'react';
import { LayoutItemsList } from 'interfaces';
import { generateRandomId, GlobalContext } from 'globalContext';

import { LayoutItemsContainer, ItemListContainer, ItemInfo, InputWrapper, Input, Button } from './styles';

const ItemsList: React.FC<{ items: LayoutItemsList[] }> = ({ items }) => {
  const { handleItemAddition, hangleInputChange } = useContext(GlobalContext);
  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {
        const itemToAdd = {
          id: generateRandomId(),
          tagName: 'div',
          classList: '',
          bgColor: item.bgColor,
          nestedLevel: item.nestedLevel + 1,
          styles: [],
          childrens: [],
        };

        const renderItemsList = (
          <ItemListContainer key={item.id} nested={item.nestedLevel}>
            <ItemInfo className="item-info">
              <InputWrapper className="tag-name" bg={item.bgColor}>
                <Input
                  type="text"
                  placeholder="Tag name"
                  value={item.tagName}
                  onChange={e => hangleInputChange(item, 'tagName', e.target.value)}
                />
              </InputWrapper>
              <InputWrapper className="input-classes" bg={item.bgColor}>
                <Input
                  type="text"
                  placeholder="Class names"
                  value={item.classList}
                  onChange={e => hangleInputChange(item, 'classList', e.target.value)}
                />
              </InputWrapper>
              <div className="button">
                <Button type="button" onClick={() => handleItemAddition(item, itemToAdd)} bg={item.bgColor}>
                  +
                </Button>
              </div>
            </ItemInfo>
            {item.childrens && item.childrens.length > 0 && <ItemsList items={item.childrens} />}
          </ItemListContainer>
        );

        if (item.nestedLevel === 0) {
          return (
            <LayoutItemsContainer key={item.id} bg={item.bgColor}>
              <div className="header-info">
                <input type="text" className="tag-name" readOnly value={item.tagName} />
                {item.classList && <input type="text" readOnly value={item.classList} className="class-lists" />}
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
