import React, { ReactElement, useContext } from "react";

import { generateRandomId, GlobalContext } from "globalContext";
import Scrollable from "components/scrollableContainer";
import ModalInputRow from "components/modalInputRow";

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
} from "./styles";
import { LayoutInputRow } from "../../interfaces";

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
        <ModalContentHeader bg={modalContent.bgColor}>
          <div className="flex-wrapper">
            <div className="main-tag-names">{modalContent.tagName}</div>
            <div className="main-class-list">
              {modalContent.classList && modalContent.classList.length > 0 && "class:"} {<Scrollable
              offset={5}>{modalContent.classList}</Scrollable>}
            </div>
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
              modalContent.styles.map((style: LayoutInputRow) => {
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
