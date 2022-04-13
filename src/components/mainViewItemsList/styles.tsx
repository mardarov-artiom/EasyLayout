import styled from 'styled-components';
import { MainViewItemMainContainerInterface } from 'interfaces';

export const MainViewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const MainViewItemHeaderContainer = styled.div<{ bg: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20px;
  padding: 0 10px;
  background-color: ${props => props.bg ? props.bg : '#1e88e5'};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  font-size: 13px;
  
  .settings-icon {
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
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
  ${props => props.childrens.length > 0 && `display: flex;`}

  div:not(:last-child, .main-tag-names) {
    margin-right: 10px;
  }
`;
