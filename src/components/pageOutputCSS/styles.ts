import styled from 'styled-components';
import { LayoutItemsList } from 'interfaces';

export interface PageOutputCSSInterface {
  items: LayoutItemsList[];
}

export const PageOutputCSSWrapper = styled.div`
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 13px;
  color: #ddd;
`;

export const ClassNameRow = styled.div`
  color: #d7ba7d;
  white-space: nowrap;

  .style-rows-container {
    padding: 3px 0;
  }
  
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const StylePropertyRow = styled.div`
  width: 100%;
  padding-left: 10px;
  color: #ddd;

  .property {
    color: #9cdcfe;
  }

  .value {
    color: #ce9178;
  }
`;
