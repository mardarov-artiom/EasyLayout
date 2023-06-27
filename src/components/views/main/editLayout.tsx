import React, { Fragment, useContext } from 'react';
import Scrollable from 'components/pageLayouts/scrollableContainer';
import { componentWithItemsInterface, LayoutItemsList } from 'interfaces/default';
import { GlobalContext } from 'globalContext';
import {
  EditLayoutContainer,
  EditLayoutContainerLabel,
  EditLayoutContent,
  EditLayoutHeader,
  EditLayoutHeaderTag
} from './styles/editLayout';
import { hasNodes } from 'helpers/nodes';

const EditLayout: React.FC<componentWithItemsInterface> = ({items}) => {
  const {handleInputChange, layoutItemsList} = useContext(GlobalContext);

  const multipleLayoutContainer = layoutItemsList.length > 1;

  return (
    <Fragment>
      {items.map((item: LayoutItemsList, index: number): JSX.Element => {

        return (
          <Fragment key={item.id}>
            {item.nestedLevel === 0 && <EditLayoutContainerLabel>Section - {index + 1}</EditLayoutContainerLabel>}
            <EditLayoutContainer bg={item.bgColor} nodes={hasNodes(item)} multiple={multipleLayoutContainer}>
              <EditLayoutHeader bg={item.bgColor} nodes={hasNodes(item)}>
                <div className="flex-wrapper hidden">
                  <EditLayoutHeaderTag>
                    <label htmlFor="tag-name">Tag name: </label>
                    <Scrollable offset={5}>
                      <input
                        type="text"
                        name="tag-name"
                        id="tag-name"
                        className="main-input"
                        value={item.tagName}
                        onChange={e => handleInputChange(item, 'tagName', e.target.value)}
                      />
                    </Scrollable>
                  </EditLayoutHeaderTag>
                  <div className="main-class-list">
                    <label htmlFor="class-names">Class: </label>
                    <Scrollable offset={5}>
                      <input
                        type="text"
                        name="class-names"
                        id="class-names"
                        className="main-input no-border"
                        value={item.classList}
                        onChange={e => handleInputChange(item, 'classList', e.target.value)}
                      />
                    </Scrollable>
                  </div>
                </div>
              </EditLayoutHeader>
              <EditLayoutContent nodes={hasNodes(item)}>
                {!hasNodes(item) ? (
                  <textarea
                    className="tag-content"
                    placeholder="Tag content..."
                    value={item.textContent}
                    onChange={e => handleInputChange(item, 'textContent', e.target.value)}
                  />
                ) : <EditLayout items={item.nodes}/>
                }
              </EditLayoutContent>
            </EditLayoutContainer>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default EditLayout;