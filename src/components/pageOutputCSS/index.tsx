import React, { Fragment, ReactElement } from "react";
import { LayoutItemsList } from "interfaces";

import { ClassNameRow, PageOutputCSSInterface, PageOutputCSSWrapper, StylePropertyRow } from "./styles";
import { generateRandomId } from "globalContext";

const PageOutputHTML: React.FC<PageOutputCSSInterface> = ({items}): ReactElement => {
  return (
    <PageOutputCSSWrapper>
      <Fragment>
        {items.map((item: LayoutItemsList) => {
          const classNames: (false | JSX.Element)[] = item.classList.split(" ").map((className: string) => {
            return className !== "" && <span key={item.id + className}>.{className}</span>;
          });
          return (
            <Fragment key={item.id}>
              {item.classList.length > 0 && (
                <ClassNameRow>
                  <div>
                    {classNames} {` {`}
                  </div>

                  {item.styles && item.styles.length > 0 && (
                    <div className="style-rows-container">
                      {item.styles.map((style: { property: string, value: string | number }) => {
                        return (
                          style.property.length > 0 && (
                            <StylePropertyRow key={`${generateRandomId()}${style.property}${style.value}`}>
                              <span className="property">{style.property}</span>
                              {`: `}
                              <span className="value">{style.value}</span>
                              {`;`}
                            </StylePropertyRow>)
                        );
                      })}
                    </div>
                  )}
                  {item.classList.length > 0 && `}`}
                </ClassNameRow>
              )}
            </Fragment>
          );
        })}
        {items.map((item: LayoutItemsList): JSX.Element => {
          return (
            <Fragment key={item.id}>
              {item.childrens && item.childrens.length > 0 && <PageOutputHTML items={item.childrens}/>}
            </Fragment>
          );
        })}
      </Fragment>
    </PageOutputCSSWrapper>
  );
};

export default PageOutputHTML;
