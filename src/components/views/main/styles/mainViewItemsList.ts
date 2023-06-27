import styled from 'styled-components';
import { MainViewItemMainContainerInterface } from 'interfaces/styledComponents';

export const MainViewItemContainer = styled.div<{previewMode: boolean}>`
  ${props => {
    if (props.previewMode) {
      return `
        display: flex;
        flex-direction: column;
        width: 100%;
        
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      `
    }
  }}
`;

export const MainViewItemHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  font-size: 13px;
  border: 1px solid #ccc;
  color: #000;
  
  .main-input {
    border-right: 1px solid #ccc;
    height: 100%;
    color: #000;
    padding: 4px;
    
    &.no-border {
      border: none;
    }
  }
`;

export const MainViewItemMainContainer = styled.div<MainViewItemMainContainerInterface>`
  ${ props => {
    if (props.previewMode) {
      if (props.nodes.length > 0) {
        return `
        padding: 5px;
        display: ${props.settings.defaultDisplayValue.value};
        gap: 0 10px;
      `
      }
      return `
        width: 100%;
        border: 1px solid #ccc;
        border-top: none;
        flex-wrap: wrap;
        overflow: hidden;
      `
    }
  
  }}
  
  > div {
    flex-grow: 1;
    min-width: ${props => `calc((100% * 1/${props.settings.defaultElementInFlexRow.value}) - ((10px * (${props.settings.defaultElementInFlexRow.value} - 1)) / ${props.settings.defaultElementInFlexRow.value}))`};
    width: auto;
  }
  
  .tag-content {
    resize: none;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 0.8125rem;
    padding: 4px 4px 4px 10px;
  }
`;
