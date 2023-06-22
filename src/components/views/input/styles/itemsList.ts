import styled from 'styled-components';

import { ItemListContainerInterface, withBgProps } from 'interfaces/styledComponents';

export const LayoutItemsContainer = styled.div<withBgProps>`
  width: 100%;
  color: #fff;
  padding: 15px;
  min-width: 350px;
  border-bottom: 1px dashed ${props => props.bg};
  font-size: 20px;

  .header-info {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
    padding-left: 15px;

    input {
      border: none;
      background: none;
      color: #fff;
    }
    .tag-name {
      color: ${props => props.bg};
      margin-right: 15px;
      max-width: 90px;
    }

    .class-lists {
      color: #d7ba7d;
      flex-grow: 1;
    }
  }
`;

export const ItemListContainer = styled.div<ItemListContainerInterface>`
  padding-left: ${props => (props.nested === 0 ? 0 : 15)}px;
  width: 100%;
  min-width: 350px;
  position: relative;
`;

export const ItemInfo = styled.div`
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;

  .tag-name {
    width: 100px;
    margin-right: 5px;
  }
  .input-classes {
    flex-grow: 1;
    margin-right: 5px;
  }
`;

export const InputWrapper = styled.div<withBgProps>`
  position: relative;
  ::before,
  ::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 0;
    height: 0;
    background-color: ${props => props.bg};
    transition: all 0.4s;
  }

  ::before {
    width: 2px;
  }

  ::after {
    height: 2px;
  }

  :hover,
  :focus-within {
    ::before {
      height: 100%;
    }
    ::after {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  max-height: 28px;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 3px 10px;
  font-size: 15px;
  color: #000;
`;

export const Button = styled.button<withBgProps>`
  background-color: ${props => props.bg};
  border: none;
  border-radius: 5px;
  color: #fff;
  height: 28px;
  max-height: 28px;
  width: 28px;
  max-width: 28px;
  cursor: pointer;
`;
