import styled from 'styled-components';

export const PageOutputInternalContainer = styled.div`
  background-color: #151515;
  max-height: 100%;
  width: 100%;
  color: #e0e0e0;
  margin-bottom: 15px;
  min-width: 300px;
  
  .poic-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 10px 10px 0 10px;
  }

  .poic-copy {
    cursor: pointer;
  }

  .poic-body {
    width: 100%;
  }
`;

export const ScrollContainer = styled.div`
  max-height: 100%;
  width: 100%;
  min-width: 300px;
  overflow-x: auto;
`;

export const ScrollInner = styled.div`
  max-height: 100%;
  width: 100%;
  height: 100%;
  padding: 10px;
`;
