/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import copy from "clipboard-copy";

import { defaultObjInterface, LayoutInputRow, LayoutItemsList } from "interfaces";
import { assignColor } from "helpers/colors";
import { clipboardItem, joinReformattedArray, reformatString } from "helpers/clipboard";

export const defaultLayoutObject: LayoutItemsList = {
  id: "",
  tagName: "div",
  classList: "",
  nestedLevel: 0,
  bgColor: "",
  styles: [],
  childrens: [],
};

interface value {
  isLoading: boolean;
  isModalOpen: boolean;
  copyTextState: {
    html: string;
    css: string;
  };
  modalContent: LayoutItemsList;
  layoutItemsList: LayoutItemsList[];
  handleContainerAddition: () => void;
  handleModalOpen: (item: LayoutItemsList) => void;
  handleModalClose: () => void;
  handleItemAddition: (item: LayoutItemsList, newItem: LayoutItemsList) => void;
  handleInputChange: (item: LayoutItemsList, field: string, value: string) => void;
  handleStylePropertyChange: (item: LayoutItemsList, elementIndex: number, removeElement: boolean, style: LayoutInputRow) => void;
  handleItemStyleAddition: (item: LayoutItemsList) => void;
  checkIfStylesHaveEmptyField: () => boolean;
  copyHtmlToClipboard: () => void;
  copyCssToClipboard: () => void;
}

const defaultState = {
  isLoading: false,
  modalContent: defaultLayoutObject,
  isModalOpen: false,
  copyTextState: {
    html: 'Copy',
    css: 'Copy',
  },
  layoutItemsList: [defaultLayoutObject],
  handleContainerAddition: () => {},
  handleItemAddition: () => {},
  handleItemStyleAddition: () => {},
  handleInputChange: () => {},
  handleModalOpen: () => {},
  handleModalClose: () => {},
  handleStylePropertyChange: () => {},
  checkIfStylesHaveEmptyField: () => true,
  copyHtmlToClipboard: () => {},
  copyCssToClipboard: () => {}
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
        styles: [
          {property: "width", value: 100 + "%"},
          {property: "border", value: "2px solid red"},
        ],
        nestedLevel: 0,
        childrens: [],
      },
    ];
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
  };

  public handleItemAddition = (item: LayoutItemsList, newItem: LayoutItemsList): void => {
    this.modifyLayoutItemsState(item, (elem: LayoutItemsList) => {
      elem?.childrens.push(newItem);
    });
  };

  private copyWithForceUpdate = (array: string[], property: string): void => {
    copy(joinReformattedArray(array)).then(() => {
      this.state.context.copyTextState[property] = 'Copied!';
      this.forceUpdate();
      window.setTimeout(() => {
        this.state.context.copyTextState[property] = 'Copy!';
      }, 2000);
    });
  }

  public copyHtmlToClipboard = (): void => {
    const resultArray: defaultObjInterface[] = [];
    this.state.context.layoutItemsList.map((item: LayoutItemsList) => {
      if (item.childrens.length > 0) {
        return resultArray.push(clipboardItem(item, item.childrens));
      }
      return resultArray.push(clipboardItem(item));
    });

    const resultString = resultArray.map((item: defaultObjInterface): string => {
      if (item.middle.length > 0) {
        return reformatString(item, item.middle);
      }
      return reformatString(item);
    });

    this.copyWithForceUpdate(resultString, 'html');
  };

  public copyCssToClipboard = (): void => {

    this.copyWithForceUpdate(['WIP'], 'css');
  };

  public handleItemStyleAddition = (item: LayoutItemsList): void => {
    const emptyStyleObject = {
      property: "",
      value: ""
    };

    this.modifyLayoutItemsState(item, (elem: LayoutItemsList): void => {
      this.state.context.modalContent.styles.push(emptyStyleObject);
      elem.styles.push(emptyStyleObject);
    });
  };

  public checkIfStylesHaveEmptyField = (): boolean => {
    if (this.state.context.modalContent.styles) {
      return this.state.context.modalContent.styles.filter((style: LayoutInputRow) => {
        return style.property.length === 0 && (typeof style.value !== "number" ? style.value.length === 0 : style.value > 0);
      }).length > 0;
    }
    return false;
  };

  public handleInputChange = (item: LayoutItemsList, field: string, value: string): void => {
    this.modifyLayoutItemsState(item, (elem: any) => {
      elem[field] = value;
    });
  };

  public handleModalOpen = (item: LayoutItemsList): void => {
    if (!this.state.context.isModalOpen) {
      this.state.context.isModalOpen = true;
    }
    this.state.context.modalContent = this.getCurrentItem(this.state.context.layoutItemsList, item.id);
  };

  public handleModalClose = (): void => {
    this.state.context.isModalOpen = false;
    this.state.context.modalContent = defaultLayoutObject;
  };

  public handleStylePropertyChange = (item: LayoutItemsList, elementIndex: number, removeElement: boolean = false, style?: LayoutInputRow) => {
    this.modifyLayoutItemsState(item, (elem: any): void => {
      if (!removeElement) {
        this.state.context.modalContent.styles[elementIndex] = {...style};
        elem.styles[elementIndex] = {...style};
      } else {
        this.state.context.modalContent.styles.splice(elementIndex, 1);
        elem.styles.splice(elementIndex, 1);
      }
    });
  };

  public render() {
    const {isLoading, layoutItemsList, isModalOpen, modalContent, copyTextState} = this.state.context;
    const value: value = {
      isLoading,
      isModalOpen,
      layoutItemsList,
      modalContent,
      copyTextState,
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

  private resetStateToDefault = () => {
    this.state.context.isLoading = false;
    this.state.context.isModalOpen = false;
    this.state.context.modalContent = {};
  };

  private getCurrentItem = (arr: LayoutItemsList[], itemId: string): LayoutItemsList | null => {
    return arr.reduce((secondArray: LayoutItemsList | null, item: LayoutItemsList): LayoutItemsList | null => {
      if (secondArray) {
        return secondArray;
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
}

export { GlobalContext, GlobalProvider };
