import styled from 'styled-components';

export interface PageOutputInternalWrapperInterface {
  name?: string;
  text: string;
  clickAction: () => void;
}

export const PageOutputInternalContainer = styled.div`
  background-color: #151515;
  max-height: 100%;
  width: 100%;
  padding: 10px;
  color: #e0e0e0;
  margin-bottom: 15px;
  min-width: 300px;
  overflow-x: auto;

  .poic-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .poic-copy {
    cursor: pointer;
  }

  .poic-body {
    width: 100%;
  }
`;
