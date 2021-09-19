import styled from 'styled-components';
import { LayoutItemsList } from 'interfaces';

interface MainViewItemMainContainerInterface {
  childrens: LayoutItemsList[];
}

export const MainViewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const MainViewItemHeaderContainer = styled.div<{ bg: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20px;
  padding: 0 10px;
  background-color: #1e88e5;
  background-color: ${props => props.bg};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  font-size: 13px;

  .main-class-list {
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1px solid #fff;
  }
`;

export const MainViewItemMainContainer = styled.div<MainViewItemMainContainerInterface>`
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  flex-grow: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 15px;
  overflow: hidden;
  ${props =>
    props.childrens.length > 0 &&
    `
    display: flex;
  
  `}

  div:not(:last-child, .main-tag-names) {
    margin-right: 10px;
  }
`;
