/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import copy from 'clipboard-copy';

import {
  defaultObjInterface,
  defaultStyleObjectInterface,
  LayoutItemsList,
  uniqueClassListInterface
} from 'interfaces/default';
import { GlobalContextStateInterface, value } from 'interfaces/globalContext';

import { assignColor } from 'helpers/colors';
import { clipboardCSSItem, clipboardHTMLItem, joinReformattedArray, reformatString } from 'helpers/clipboard';
import { classNamesMap, transformResult } from 'helpers/classNamesMap';
import { defaultLayoutObject, defaultModalContent, defaultStyleObject } from 'helpers/globalConstants';
import { hasNodes } from '../helpers/nodes';

const defaultState: value = {
  isLoading: false,
  modalContent: defaultModalContent,
  isModalOpen: false,
  copyTextState: {
    html: 'Copy',
    css: 'Copy'
  },
  editMode: true,
  layoutItemsList: [defaultLayoutObject],
  uniqueClassList: [
    {
      className: 'container',
      styles: [
        {property: 'width', value: 100 + '%'}
        // {property: 'border', value: '2px solid red'},
      ]
    }
  ],
  globalApplicationSettings: {
    defaultDisplayValue: {
      label: 'Default display value',
      value: 'flex'
    },
    defaultElementInFlexRow: {
      label: 'Number of default elements in a flex row',
      value: 3
    }
  },
  applicationClasses: '',
  handleSectionAddition: () => {
  },
  handleItemAddition: () => {
  },
  handleItemStyleAddition: () => {
  },
  handleInputChange: () => {
  },
  handleModalOpen: () => {
  },
  handleModalClose: () => {
  },
  handleStylePropertyChange: () => {
  },
  checkIfStylesHaveEmptyField: () => true,
  copyHtmlToClipboard: () => {
  },
  copyCssToClipboard: () => {
  },
  handleEditModeChange: () => {
  }
};

export const generateRandomId = (): string => {
  const randomString = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randomString() + Date.now() + randomString();
};

const GlobalContext = React.createContext<value>(defaultState);

const reactiveStateProxy = (component: any) => {
  return new Proxy(defaultState, {
    set(obj: any, prop: any, value) {
      obj[prop] = value;
      component.setState({context: reactiveStateProxy(component)});
      return true;
    }
  });
};


class GlobalProvider extends React.Component<React.PropsWithChildren, GlobalContextStateInterface> {
  state = {
    context: reactiveStateProxy(this)
  };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.resetStateToDefault();
    this.state.context.layoutItemsList = [
      {
        id: generateRandomId(),
        tagName: 'section',
        classList: 'container',
        textContent: '',
        bgColor: assignColor(0),
        nestedLevel: 0,
        nodes: []
      }
    ];
    this.setApplicationClasses();
  };

  public handleSectionAddition = (): void => {
    const newLayoutItem = {...defaultLayoutObject, id: generateRandomId(), tagName: 'section'};
    newLayoutItem.bgColor = assignColor(this.state.context.layoutItemsList.length);
    this.modifyLayoutItemsState(
      newLayoutItem,
      (stateCopy: LayoutItemsList[]) => {
        stateCopy.push(newLayoutItem);
      },
      true
    );
    this.classListCssMap();
  };

  public handleItemAddition = (item: LayoutItemsList, newItem: LayoutItemsList): void => {
    this.modifyLayoutItemsState(item, (elem: LayoutItemsList) => {
      elem?.nodes.push(newItem);
    });
    this.classListCssMap();
  };

  public copyHtmlToClipboard = (): void => {
    const resultArray: defaultObjInterface[] = [];
    this.state.context.layoutItemsList.map((item: LayoutItemsList) => {
      if (hasNodes(item)) {
        return resultArray.push(clipboardHTMLItem(item, item.nodes));
      }
      return resultArray.push(clipboardHTMLItem(item));
    });

    const resultString = resultArray.map((item: defaultObjInterface): string => {
      return reformatString(item);
    });

    this.copyWithForceUpdate(resultString, 'html');
  };

  public copyCssToClipboard = (): void => {
    const resultArray: string[] = [];
    this.state.context.uniqueClassList.map((item: LayoutItemsList) => {
      return resultArray.push(clipboardCSSItem(item));
    });
    const slicedArray = resultArray.map((el: any, index: number) => {
      if (index === resultArray.length - 1) {
        return el.slice(0, -2);
      }
      return el;
    });
    this.copyWithForceUpdate(slicedArray, 'css');
  };

  public checkIfStylesHaveEmptyField = (): boolean => {
    if (this.state.context.modalContent.styles) {
      return this.state.context.modalContent.styles.filter((style: defaultStyleObjectInterface) => {
        return style.property.length === 0;
      }).length > 0;
    }
    return false;
  };

  public handleInputChange = (item: LayoutItemsList, field: string, value: string): void => {
    this.modifyLayoutItemsState(item, (elem: any) => {
      elem[field] = value;
    });

    if (field === 'classList') {
      this.classListCssMap();
      this.setApplicationClasses();
    }
  };

  public handleModalOpen = (item: uniqueClassListInterface): void => {
    if (!this.state.context.isModalOpen) {
      this.state.context.isModalOpen = true;
    }
    this.state.context.modalContent = this.getCurrentUniqueClass(this.state.context.uniqueClassList, item.className);
  };

  public handleModalClose = (): void => {
    this.state.context.isModalOpen = false;
    this.state.context.modalContent = defaultModalContent;
  };

  public handleItemStyleAddition = (item: uniqueClassListInterface): void => {
    this.modifyUniqueClassState(item, (elem: any) => {
      this.state.context.modalContent.styles.push(defaultStyleObject);
      elem.styles.push(defaultStyleObject);
    });
  };

  public handleStylePropertyChange = (item: uniqueClassListInterface, elementIndex: number, removeElement: boolean = false, style?: defaultStyleObjectInterface) => {
    this.modifyUniqueClassState(item, (elem: any) => {
      if (!removeElement) {
        this.state.context.modalContent.styles[elementIndex] = {...style};
        elem.styles[elementIndex] = {...style};
      } else {
        this.state.context.modalContent.styles.splice(elementIndex, 1);
        elem.styles.splice(elementIndex, 1);
      }
    });
    this.setApplicationClasses();
  };

  public handleEditModeChange = () => {
    this.state.context.editMode = !this.state.context.editMode;
  };

  public render() {
    const {
      isLoading,
      layoutItemsList,
      isModalOpen,
      modalContent,
      copyTextState,
      editMode,
      uniqueClassList,
      globalApplicationSettings,
      applicationClasses
    } = this.state.context;
    const value: value = {
      isLoading,
      isModalOpen,
      layoutItemsList,
      modalContent,
      copyTextState,
      editMode,
      uniqueClassList,
      globalApplicationSettings,
      applicationClasses,
      handleModalOpen: this.handleModalOpen,
      handleModalClose: this.handleModalClose,
      handleItemAddition: this.handleItemAddition,
      handleInputChange: this.handleInputChange,
      handleSectionAddition: this.handleSectionAddition,
      handleStylePropertyChange: this.handleStylePropertyChange,
      handleItemStyleAddition: this.handleItemStyleAddition,
      checkIfStylesHaveEmptyField: this.checkIfStylesHaveEmptyField,
      copyHtmlToClipboard: this.copyHtmlToClipboard,
      copyCssToClipboard: this.copyCssToClipboard,
      handleEditModeChange: this.handleEditModeChange
    };
    return <GlobalContext.Provider value={value}>{this.props.children}</GlobalContext.Provider>;
  }

  private classListCssMap = () => {
    let result: string = '';
    this.state.context.layoutItemsList.map((item: LayoutItemsList) => {
      if (item.nodes && item.nodes.length > 0) {
        return result += ` ${classNamesMap(item, item.nodes)}`;
      }
      return result += ` ${classNamesMap(item)}`;
    });
    this.state.context.uniqueClassList = transformResult(result, this.state.context.uniqueClassList);
  };

  private copyWithForceUpdate = (array: string[], property: string): void => {
    copy(joinReformattedArray(array)).then(() => {
      this.state.context.copyTextState[property] = 'Copied!';
      this.forceUpdate();
      window.setTimeout(() => {
        this.state.context.copyTextState[property] = 'Copy!';
        this.forceUpdate();
      }, 2000);
    });
  };

  private resetStateToDefault = () => {
    this.state.context.isLoading = false;
    this.state.context.isModalOpen = false;
    this.state.context.modalContent = {};
  };

  private getCurrentUniqueClass = (arr: uniqueClassListInterface[], className: string) => {
    return arr.reduce((previousArray: uniqueClassListInterface | null, item: uniqueClassListInterface): uniqueClassListInterface | null => {
      if (previousArray) {
        return previousArray;
      }
      if (item.className === className) {
        return item;
      }
      return null;
    }, null);
  };

  private modifyUniqueClassState = (item: uniqueClassListInterface, callback: Function): void => {
    const stateCopy = JSON.parse(JSON.stringify(this.state.context.uniqueClassList));
    const elem: uniqueClassListInterface | null = this.getCurrentUniqueClass(stateCopy, item.className);
    callback(elem);
    this.state.context.uniqueClassList = stateCopy;
  };

  private getCurrentItem = (arr: LayoutItemsList[], itemId: string): LayoutItemsList | null => {
    return arr.reduce((previousArray: LayoutItemsList | null, item: LayoutItemsList): LayoutItemsList | null => {
      if (previousArray) {
        return previousArray;
      }
      if (item.id === itemId) {
        return item;
      }
      if (item['nodes']) {
        return this.getCurrentItem(item['nodes'], itemId);
      }
      return null;
    }, null);
  };

  private modifyLayoutItemsState = (item: LayoutItemsList, callback: Function, callbackWithStateCopy = false): void => {
    const stateCopy = JSON.parse(JSON.stringify(this.state.context.layoutItemsList));
    const elem: LayoutItemsList | null = this.getCurrentItem(stateCopy, item.id);
    if (callbackWithStateCopy) {
      callback(stateCopy);
    } else {
      callback(elem);
    }
    this.state.context.layoutItemsList = stateCopy;
  };

  private setApplicationClasses = (): void => {
    let formattedApplicationClasses: string = '';
    this.state.context.uniqueClassList.map((item: defaultStyleObjectInterface) => {
      return formattedApplicationClasses += clipboardCSSItem(item);
    });
    this.state.context.applicationClasses = formattedApplicationClasses;
  };
}

export { GlobalContext, GlobalProvider };
