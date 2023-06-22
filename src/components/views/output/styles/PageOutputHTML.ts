import styled from 'styled-components';
import { LayoutItemsList } from 'interfaces/default';

export const PageOutputHTMLWrapper = styled.div<{ nodes: LayoutItemsList[]; classList?: string | string[] }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 13px;
  color: #ddd;
  flex-wrap: ${props => props.nodes.length > 0 && 'wrap'};
  min-width: ${props => 200 + props!.classList!.length * 3}px;

  .inner-with-child {
    padding-left: ${props => props.nodes.length > 0 && '15px'};
  }

  .por-tag {
    color: #4680b3;
  }
  .por-attr {
    color: #9cdcfe;
  }
  .por-class-names {
    color: #d7ba7d;
    white-space: nowrap;
  }
`;
