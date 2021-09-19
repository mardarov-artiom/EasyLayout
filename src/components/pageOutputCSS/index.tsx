import React, { Fragment } from 'react';
import { LayoutItemsList } from 'interfaces';

import { PageOutputHTMLWrapper, ClassNameRow, StylePropertyRow, PageOutputHTMLInterface } from './styles';

const PageOutputHTML: React.FC<PageOutputHTMLInterface> = ({ items }) => {
  return (
    <PageOutputHTMLWrapper>
      <Fragment>
        {items.map((item: LayoutItemsList) => {
          const classNames = item.classList.split(' ').map((className: string) => {
            return className !== '' && <span key={item.id + className}>.{className}</span>;
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
                      {item.styles.map((style: { [key: string]: string | number }) => {
                        return (
                          <StylePropertyRow key={`${style.property}${style.value}`}>
                            <span className="property">{style.property}</span>
                            {`: `}
                            <span className="value">{style.value}</span>
                            {`;`}
                          </StylePropertyRow>
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
        {items.map((item: LayoutItemsList) => {
          return (
            <Fragment key={item.id}>
              {item.childrens && item.childrens.length > 0 && <PageOutputHTML items={item.childrens} />}
            </Fragment>
          );
        })}
      </Fragment>
    </PageOutputHTMLWrapper>
  );
};

export default PageOutputHTML;
