import styled from 'styled-components';

export const PageOutputCSSWrapper = styled.div`
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 13px;
  color: #ddd;
  
  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ClassNameRow = styled.div`
  color: #d7ba7d;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: -2.5px;
    left: -2.5px;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    transition: background-color .4s linear;
    border-radius: 5px;
    opacity: 0;
  }

  .style-rows-container {
    padding: 3px 0;
  }
  
  &:hover::before {
    opacity: 0.4;
    background-color: rgb(189, 189, 189);
    cursor: pointer;
    pointer-events: none;
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
