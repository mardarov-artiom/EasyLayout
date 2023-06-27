import React, { Fragment, useContext } from 'react';
import { componentWithItemsInterface, LayoutItemsList } from '../../../interfaces/default';
import { GlobalContext } from 'globalContext';
import { hasNodes } from 'helpers/nodes';
import { voidTags } from '../../../helpers/voidTags';

const PreviewLayout: React.FC<componentWithItemsInterface> = ({items}) => {
  const {editMode} = useContext(GlobalContext);

  const createTag = (item: LayoutItemsList) => {
    if (!voidTags.includes(item.tagName)) {
      return React.createElement(
        item.tagName,
        {
          className: item.classList,
          key: item.id,
          is: 'x3d'
        },
        !hasNodes(item) && !editMode && item.textContent,
        hasNodes(item) && <PreviewLayout items={item.nodes}/>
      );
    } else {
      return React.createElement(
        item.tagName,
        {
          className: item.classList,
          key: item.id,
          is: 'x3d'
        }
      );
    }
  };

  return (
    <Fragment>
      {items.map((item: LayoutItemsList): JSX.Element => createTag(item))}
    </Fragment>
  );
};

export default PreviewLayout;