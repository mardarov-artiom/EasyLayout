import styled from 'styled-components';
import { LayoutImtesContainerInterface, LayoutItemsInterface } from 'interfaces/styledComponents';

export const EditLayoutContainerLabel = styled.div`
  margin-bottom: 10px;
  font-size: 1.4rem;
  color: #000;
`;

export const EditLayoutContainer = styled.div<LayoutImtesContainerInterface>`
  border-width: 2px;
  border-style: solid;
  border-color: #ccc;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${props => {
  if (props.multiple) {
    return `
        border-color: ${props.bg};
      `;
  }
}}

  ${props => {
  if (props.nodes) {
    return `
        border-color: ${props.bg};
      `;
  }
}}
`;

export const EditLayoutHeader = styled.div<LayoutItemsInterface>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  font-size: 13px;
  color: #000;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #ccc;

  label {
    white-space: nowrap;
  }

  ${props => {
  if (props.nodes) {
    return `
        background-color: ${props.bg};
        border-color: ${props.bg};
      `;
  }
}}
  .main-input {
    border-right: 2px solid #ccc;
    height: 100%;
    color: #000;
    padding: 4px;

    &.no-border {
      border: none;
    }
  }
`;

export const EditLayoutHeaderTag = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 4px;
`;

export const EditLayoutContent = styled.div<{ nodes: boolean }>`

  ${props => {
  if (props.nodes) {
    return `
          padding: 10px;
          gap: 0 10px;
          
          > div:not(:last-child) {
            margin-bottom: 10px;
          }
        `;
  }
}}
  .tag-content {
    resize: none;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 0.8125rem;
    padding: 4px 4px 4px 10px;
    caret-color: #000;
  }
`;