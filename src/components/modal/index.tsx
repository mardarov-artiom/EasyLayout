import React, { useContext } from 'react';

import { ModalBackground, ModalContent, ModalWrapper, ModalContentHeader, ModalContentBody, CloseButton } from './styles';
import { GlobalContext } from "globalContext";

const Modal: React.FC = () => {
  const {isModalOpen, modalContent, handleModalClose} = useContext(GlobalContext);
  return (
    <ModalWrapper modalState={isModalOpen}>
      <ModalBackground onClick={() => handleModalClose()} />
      <ModalContent>
        <ModalContentHeader bg={modalContent.bgColor}>
          <div className="flex-wrapper">
            <div className="main-tag-names">{modalContent.tagName}</div>
            <div className="main-class-list">
              {modalContent.classList && modalContent.classList.length > 0 && 'class:'} {<input type="text" readOnly value={modalContent.classList} />}
            </div>
          </div>
          <CloseButton onClick={() => handleModalClose()}/>
        </ModalContentHeader>
        <ModalContentBody>
          <div>test</div>
        </ModalContentBody>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
