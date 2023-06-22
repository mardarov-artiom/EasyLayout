import styled from 'styled-components';

export const PageInputWrapper = styled.div`
  width: 100%;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PageInputHeader = styled.div`
  width: 100%;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #1d1d1d;
  padding: 40px 15px 25px 15px;
  color: #fff;
  border-bottom: 2px solid #ccc;
  
  h1 {
    margin: 0;
  }
`;

export const Settings = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
`;

export const ButtonContainerAddition = styled.div`
  width: 100%;
  text-align: center;
  border-top: 2px solid #cccccc;
  padding: 20px;
  
  span {
    background-color: #fff;
    padding: 5px 40px;
    border-radius: 3px;
    cursor: pointer;
  }
`;
