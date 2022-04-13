/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import copy from "clipboard-copy";

import {
  value,
  defaultObjInterface,
  defaultStyleObjectInterface,
  LayoutItemsList,
  uniqueClassListInterface
} from "interfaces";
import { assignColor } from "helpers/colors";
import { clipboardCSSItem, clipboardHTMLItem, joinReformattedArray, reformatString } from "helpers/clipboard";
import { classNamesMap, transformResult } from "helpers/classNamesMap";
import { defaultLayoutObject, defaultModalContent, defaultStyleObject } from "helpers/globalConstants";





const defaultState = {
  isLoading: false,
  modalContent: defaultModalContent,
  isModalOpen: false,
  copyTextState: {
    html: "Copy",
    css: "Copy",
  },
  layoutItemsList: [defaultLayoutObject],
  uniqueClassList: [
    {
      className: "container",
      styles: [
        {property: "width", value: 100 + "%"},
        {property: "border", value: "2px solid red"}
      ]
    }
  ],
  handleContainerAddition: () => {
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
  }
};

export const generateRandomId = (): string => {
  const randomString = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randomString() + Date.now() + randomString();
};

const GlobalContext = React.createContext<value>(defaultState);

const reactiveStateProxy = (component: any) =>
  new Proxy(defaultState, {
    set(obj: any, prop: any, value) {
      obj[prop] = value;
      component.setState({context: reactiveStateProxy(component)});
      return true;
    },
  });

class GlobalProvider extends React.Component {
  state = {
    context: reactiveStateProxy(this),
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
        tagName: "div",
        classList: "container",
        bgColor: assignColor(0),
        nestedLevel: 0,
        childrens: [],
      },
    ];
  };

  private classListCssMap = () => {
    let result: string = "";
    this.state.context.layoutItemsList.map((item: LayoutItemsList) => {
      if (item.childrens && item.childrens.length > 0) {
        return result += ` ${classNamesMap(item, item.childrens)}`;
      }
      return result += ` ${classNamesMap(item)}`;
    });
    this.state.context.uniqueClassList = transformResult(result, this.state.context.uniqueClassList);
  };

  public handleContainerAddition = (): void => {
    const newLayoutItem = {...defaultLayoutObject, id: generateRandomId()};
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
      elem?.childrens.push(newItem);
    });
    this.classListCssMap();
  };

  private copyWithForceUpdate = (array: string[], property: string): void => {
    copy(joinReformattedArray(array)).then(() => {
      this.state.context.copyTextState[property] = "Copied!";
      this.forceUpdate();
      window.setTimeout(() => {
        this.state.context.copyTextState[property] = "Copy!";
      }, 2000);
    });
  };

  public copyHtmlToClipboard = (): void => {
    const resultArray: defaultObjInterface[] = [];
    this.state.context.layoutItemsList.map((item: LayoutItemsList) => {
      if (item.childrens && item.childrens.length > 0) {
        return resultArray.push(clipboardHTMLItem(item, item.childrens));
      }
      return resultArray.push(clipboardHTMLItem(item));
    });

    const resultString = resultArray.map((item: defaultObjInterface): string => {
      if (item.middle.length > 0) {
        return reformatString(item, item.middle);
      }
      return reformatString(item);
    });

    this.copyWithForceUpdate(resultString, "html");
  };

  public copyCssToClipboard = (): void => {
    const resultArray: string[] = [];
    this.state.context.uniqueClassList.map((item: LayoutItemsList) => {
      return resultArray.push(clipboardCSSItem(item));
    });
    const slicedArray = resultArray.map((el: any, index: number) => {
      if(index === resultArray.length - 1) {
        return el.slice(0, -2);
      }
      return el
    });
    this.copyWithForceUpdate(slicedArray, "css");
  };


  public checkIfStylesHaveEmptyField = (): boolean => {
    if (this.state.context.modalContent.styles) {
      return this.state.context.modalContent.styles.filter((style: defaultStyleObjectInterface) => {
        return style.property.length === 0 && (typeof style.value !== "number" ? style.value.length === 0 : style.value > 0);
      }).length > 0;
    }
    return false;
  };

  public handleInputChange = (item: LayoutItemsList, field: string, value: string): void => {
    this.modifyLayoutItemsState(item, (elem: any) => {
      elem[field] = value;
    });

    if (field === "classList") {
      this.classListCssMap();
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
      if (item["childrens"]) {
        return this.getCurrentItem(item["childrens"], itemId);
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

  public render() {
    const {isLoading, layoutItemsList, isModalOpen, modalContent, copyTextState, uniqueClassList} = this.state.context;
    const value: value = {
      isLoading,
      isModalOpen,
      layoutItemsList,
      modalContent,
      copyTextState,
      uniqueClassList,
      handleModalOpen: this.handleModalOpen,
      handleModalClose: this.handleModalClose,
      handleItemAddition: this.handleItemAddition,
      handleInputChange: this.handleInputChange,
      handleContainerAddition: this.handleContainerAddition,
      handleStylePropertyChange: this.handleStylePropertyChange,
      handleItemStyleAddition: this.handleItemStyleAddition,
      checkIfStylesHaveEmptyField: this.checkIfStylesHaveEmptyField,
      copyHtmlToClipboard: this.copyHtmlToClipboard,
      copyCssToClipboard: this.copyCssToClipboard,
    };
    return <GlobalContext.Provider value={value}>{this.props.children}</GlobalContext.Provider>;
  }
}

export { GlobalContext, GlobalProvider };
