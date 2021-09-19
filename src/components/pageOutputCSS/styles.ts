import styled from 'styled-components';
import { LayoutItemsList } from 'interfaces';

export interface PageOutputHTMLInterface {
  items: LayoutItemsList[];
}

export const PageOutputHTMLWrapper = styled.div`
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 13px;
  color: #ddd;
`;

export const ClassNameRow = styled.div`
  color: #d7ba7d;

  .style-rows-container {
    padding: 3px 0;
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
