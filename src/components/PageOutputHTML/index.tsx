import React, { Fragment, ReactElement } from "react";
import { LayoutItemsList } from "interfaces";

import { PageOutputHTMLInterface, PageOutputHTMLWrapper } from "./styles";

const PageOutputHTML: React.FC<PageOutputHTMLInterface> = ({items}): ReactElement => {
  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {
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
            className={item.childrens && "inner-with-child"}
            classList={item.classList}
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
