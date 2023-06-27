import React, { Fragment, ReactElement } from 'react';

import { LayoutItemsList } from 'interfaces/default';
import { PageOutputHTMLInterface } from 'interfaces/styledComponents';
import { PageOutputHTMLWrapper } from './styles/PageOutputHTML';
import { generateRandomId } from 'globalContext';
import { classNames } from 'helpers/classNamesMap';
import { hasNodes } from '../../../helpers/nodes';

const PageOutputHTML: React.FC<PageOutputHTMLInterface> = ({items}): ReactElement => {
  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {
        const itemRow = (
          <Fragment key={generateRandomId() + item.id}>
            <span>
              <span>&nbsp;</span>
              <span className="por-attr">class</span>
              <span>{`="`}</span>
              <span className="por-class-names">{classNames(item, ' ')}</span>
              <span>"</span>
            </span>
          </Fragment>
        );
        return (
          <PageOutputHTMLWrapper
            key={generateRandomId() + item.id}
            nodes={item.nodes}
            className={item.nodes && 'inner-with-child'}
            classList={classNames(item, ' ')}
          >
            <span>{'<'}</span>
            <span className="por-tag">{item.tagName}</span>
            {item.classList && itemRow}
            <span>{'>'}</span>
            {hasNodes(item) && <PageOutputHTML items={item.nodes}/>}
            {!hasNodes(item) && item.textContent}
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
