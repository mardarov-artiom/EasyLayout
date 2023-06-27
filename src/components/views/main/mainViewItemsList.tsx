import React, { ReactElement, useContext } from 'react';
import { LayoutItemsList } from 'interfaces/default';
import { GlobalContext } from 'globalContext';
import EditLayout from './editLayout';
import PreviewLayout from './previewLayout';

const MainViewItemsList: React.FC<{ items: LayoutItemsList[] }> = ({items}): ReactElement => {
  const {editMode} = useContext(GlobalContext);

  return editMode ? <EditLayout items={items}/> : <PreviewLayout items={items}/>;
};

export default MainViewItemsList;
