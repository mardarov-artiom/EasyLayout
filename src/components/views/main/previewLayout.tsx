import React, { Fragment, useContext } from 'react';
import { componentWithItemsInterface, LayoutItemsList } from '../../../interfaces/default';
import { GlobalContext } from 'globalContext';
import { hasNodes } from 'helpers/nodes';

const PreviewLayout: React.FC<componentWithItemsInterface> = ({items}) => {
  const {editMode} = useContext(GlobalContext);

  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => {

        return (
          <div key={item.id} className={item.classList}>
            {!hasNodes(item) && !editMode && item.textContent}
            {hasNodes(item) && <PreviewLayout items={item.nodes}/>}
          </div>
        );
      })}
    </Fragment>
  );
};

export default PreviewLayout;