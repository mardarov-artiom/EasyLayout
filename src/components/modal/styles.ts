import styled from 'styled-components';

export interface ModalState {
  modalState: boolean;
}

export interface ModalContentHeaderInterface {
  bg: string;
}

export const ModalWrapper = styled.div<ModalState>`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: ${props => props.modalState ? 'block' : 'none'};
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1001;
`;

export const ModalContent = styled.div`
  z-index: 1002;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContentHeader = styled.div<ModalContentHeaderInterface>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${props => props.bg || '#1d1d1d'};
  color: #fff;
`;

export const ModalContentBody = styled.div`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #fff;
  padding: 15px;
`;

export const ModalContentBodyTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5px 10px 5px;
  color: #d7ba7d;
  font-size: 16px;

  & > div:not(:last-child) {
    margin-right: 10px;
  }
  
  div {
    width: 240px;
    text-align: center;
    
    
  }
`;

export const CloseButton = styled.div`
  margin-left: 10px;
  font-size: 30px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  position: relative;
  
  &::before {
    content: '';
    width: 18px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: #fff;
    border-radius: 30px;
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    width: 18px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: #fff;
    border-radius: 30px;
    transform: rotate(-45deg);
  }
`;

export const ModalContentStylesList = styled.div`
  max-height: 75vh;
  overflow-y: auto;
  padding-right: 15px;
`;

export const ModalContentBodyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  input {
    color: #000;
    border: 1px solid #ccc;
    margin: 5px;
    padding: 5px;
    width: 240px;
  }
`;

export const ModalContentBodyStyleAddition = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

`;

