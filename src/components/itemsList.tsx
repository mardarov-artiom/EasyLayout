import React, { Fragment, useContext } from 'react';
import { LayoutItemsList } from 'interfaces';
import styled from 'styled-components';
import { generateRandomId, GlobalContext } from 'globalContext';

interface ItemListContainerInterface {
  nested: number;
}

const ItemListContainer = styled.div<ItemListContainerInterface>`
  padding-left: ${props => (props.nested === 0 ? 0 : 15)}px;
  padding: ${props => props.nested === 0 && 15}px;
  width: 100%;
  min-width: 350px;
`;

const ItemInfo = styled.div`
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  .tag-name {
    width: 100px;
    margin-right: 5px;
  }
  .input-classes {
    flex-grow: 1;
    margin-right: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 28px;
  max-height: 28px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px 10px;
  font-size: 15px;
`;

const Button = styled.button`
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  color: #fff;
  height: 28px;
  max-height: 28px;
  width: 28px;
  max-width: 28px;
`;

const ItemsList: React.FC<{ items: LayoutItemsList[] }> = ({ items }) => {
  const { handleItemAddition, hangleInputChange } = useContext(GlobalContext);
  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {
        const itemToAdd = {
          id: generateRandomId(),
          tagName: 'div',
          classList: '',
          nestedLevel: item.nestedLevel + 1,
          styles: [],
          childrens: [],
        };

        return (
          <ItemListContainer key={item.id} nested={item.nestedLevel}>
            <ItemInfo className="item-info">
              <div className="tag-name">
                <Input
                  type="text"
                  value={item.tagName}
                  onChange={e => hangleInputChange(item, 'tagName', e.target.value)}
                />
              </div>
              <div className="input-classes">
                <Input
                  type="text"
                  value={item.classList}
                  onChange={e => hangleInputChange(item, 'classList', e.target.value)}
                />
              </div>
              <div className="button">
                <Button type="button" onClick={() => handleItemAddition(item, itemToAdd)}>
                  +
                </Button>
              </div>
            </ItemInfo>
            {item.childrens && item.childrens.length > 0 && <ItemsList items={item.childrens} />}
          </ItemListContainer>
        );
      })}
    </Fragment>
  );
};

export default ItemsList;
