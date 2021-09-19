import React, { Fragment } from 'react';
import { LayoutItemsList } from 'interfaces';

import { PageOutputHTMLWrapper, PageOutputHTMLInterface } from './styles';

const PageOutputHTML: React.FC<PageOutputHTMLInterface> = ({ items }) => {
  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {
        console.log('OUTPUT => item.classList', item.classList.length);
        const itemRow = (
          <Fragment>
            <span>
              <span>&nbsp;</span>
              <span className="por-attr">class</span>
              <span>{`="`}</span>
              <span className="por-class-names">{item.classList}</span>
              <span>"</span>
            </span>
          </Fragment>
        );
        return (
          <PageOutputHTMLWrapper
            key={item.id}
            childrens={item.childrens}
            className={item.childrens && 'inner-with-child'}
            classList={item.classList}
          >
            <span>{'<'}</span>
            <span className="por-tag">{item.tagName}</span>
            {item.classList && itemRow}
            <span>{'>'}</span>
            {item.childrens && item.childrens.length > 0 && <PageOutputHTML items={item.childrens}></PageOutputHTML>}
            <span>{'</'}</span>
            <span className="por-tag">{item.tagName}</span>
            <span>{'>'}</span>
          </PageOutputHTMLWrapper>
        );
      })}
    </Fragment>
  );
};

export default PageOutputHTML;
