import React, {  ReactElement, useContext } from "react";
import { defaultStyleObjectInterface, uniqueClassListInterface } from "interfaces";

import { ClassNameRow, PageOutputCSSWrapper, StylePropertyRow } from "./styles";
import { generateRandomId, GlobalContext } from "globalContext";

const PageOutputCSS: React.FC = (): ReactElement => {
  const { uniqueClassList, handleModalOpen } = useContext(GlobalContext);
  return (
    <PageOutputCSSWrapper>
      {uniqueClassList.map((cls: uniqueClassListInterface) => {
        return (
          <ClassNameRow key={cls.className} onClick={() => handleModalOpen(cls)}>
          {`.${cls.className} {`}
          <br />
          {cls.styles && cls.styles.length > 0 && (
            <div className="style-rows-container">
              {cls.styles.map((style: defaultStyleObjectInterface) => {
                return (
                  style.property.length > 0 && (
                    <StylePropertyRow
                      key={`${generateRandomId()}${style.property}${style.value}`}>
                      <span className="property">{style.property}</span>
                      {`: `}
                      <span className="value">{style.value}</span>
                      {`;`}
                    </StylePropertyRow>)
                );
              })}
            </div>
          )}
          {'}'}
        </ClassNameRow>
        )
      })}
    </PageOutputCSSWrapper>
  );
};

export default PageOutputCSS;
