import React, { ReactElement, useContext } from "react";

import { generateRandomId, GlobalContext } from "globalContext";
import ModalInputRow from "components/common/modalInputRow";
import { defaultStyleObjectInterface } from "interfaces/default";

import {
  CloseButton,
  ModalBackground,
  ModalContent,
  ModalContentBody,
  ModalContentBodyRow,
  ModalContentBodyStyleAddition,
  ModalContentBodyTitle,
  ModalContentHeader,
  ModalContentStylesList,
  ModalWrapper
} from "./styles/modal";

const Modal: React.FC = (): ReactElement => {
  const {
    isModalOpen,
    modalContent,
    handleItemStyleAddition,
    handleModalClose,
    checkIfStylesHaveEmptyField
  } = useContext(GlobalContext);

  const addStyleProperty: () => void = (): void => {
    return handleItemStyleAddition(modalContent);
  };

  return (
    <ModalWrapper modalState={isModalOpen}>
      <ModalBackground onClick={() => handleModalClose()}/>
      <ModalContent>
        <ModalContentHeader>
          <div className="flex-wrapper">
            <div className="main-tag-names">class: {modalContent.className}</div>
          </div>
          <CloseButton onClick={() => handleModalClose()}/>
        </ModalContentHeader>
        <ModalContentBody>
          {modalContent.styles && modalContent.styles.length > 0 &&
            <ModalContentBodyTitle>
              <div>Property name</div>
              <div>Value</div>
            </ModalContentBodyTitle>
          }
          <ModalContentStylesList>
            {modalContent.styles && modalContent.styles.length > 0 && (
              modalContent.styles.map((style: defaultStyleObjectInterface) => {
                return (
                  <ModalContentBodyRow key={`${generateRandomId()}${style.property}${style.value}`}>
                    {modalContent.styles && modalContent.styles.length > 0 && (
                      <ModalInputRow styleProps={style}/>
                    )}
                  </ModalContentBodyRow>
                );
              })
            )}
          </ModalContentStylesList>
          <ModalContentBodyStyleAddition>
            <button
              type="button"
              className={`${checkIfStylesHaveEmptyField() && "disabled"} button success double-padding no-offset`}
              onClick={addStyleProperty}
              disabled={checkIfStylesHaveEmptyField()}>Add property
            </button>
          </ModalContentBodyStyleAddition>
        </ModalContentBody>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
