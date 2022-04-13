import React, { Fragment, ReactElement } from "react";
import { LayoutItemsList, PageOutputHTMLInterface } from "interfaces";

import { PageOutputHTMLWrapper } from "./styles";
import { generateRandomId } from "globalContext";
import { classNames } from "helpers/classNamesMap";

const PageOutputHTML: React.FC<PageOutputHTMLInterface> = ({items}): ReactElement => {
  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {
        const itemRow = (
          <Fragment key={generateRandomId () + item.id}>
            <span>
              <span>&nbsp;</span>
              <span className="por-attr">class</span>
              <span>{`="`}</span>
              <span className="por-class-names">{classNames(item,' ')}</span>
              <span>"</span>
            </span>
          </Fragment>
        );
        return (
          <PageOutputHTMLWrapper
            key={generateRandomId() + item.id}
            childrens={item.childrens}
            className={item.childrens && "inner-with-child"}
            classList={classNames(item,' ')}
          >
            <span>{"<"}</span>
            <span className="por-tag">{item.tagName}</span>
            {item.classList && itemRow}
            <span>{">"}</span>
            {item.childrens && item.childrens.length > 0 && <PageOutputHTML items={item.childrens}/>}
            <span>{"</"}</span>
            <span className="por-tag">{item.tagName}</span>
            <span>{">"}</span>
          </PageOutputHTMLWrapper>
        );
      })}
    </Fragment>
  );
};

export default PageOutputHTML;
