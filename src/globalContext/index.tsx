/* eslint-disable react/no-direct-mutation-state */
import React from 'react';

import { LayoutItemsList } from 'interfaces';
import { assignColor } from 'helpers/colors';

export const defaultLayoutObject = {
  id: '',
  tagName: 'div',
  classList: '',
  nestedLevel: 0,
  bgColor: '',
  styles: [],
  childrens: [],
};

const defaultState = {
  isLoading: false,
  modalContent: defaultLayoutObject,
  isModalOpen: false,
  layoutItemsList: [defaultLayoutObject],
  handleContainerAddition: () => {
  },
  handleItemAddition: () => {
  },
  handleInputChange: () => {
  },
  handleModalOpen: () => {
  },
  handleModalClose: () => {
  },
};

export const generateRandomId = () => {
  const randomString = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randomString() + Date.now() + randomString();
};


interface value {
  isLoading: boolean;
  isModalOpen: boolean;
  modalContent: LayoutItemsList;
  layoutItemsList: LayoutItemsList[];
  handleContainerAddition: () => void;
  handleModalOpen: (item: LayoutItemsList) => void;
  handleModalClose: () => void;
  handleItemAddition: (item: LayoutItemsList, newItem: LayoutItemsList) => void;
  handleInputChange: (item: LayoutItemsList, field: string, value: string) => void;
}

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
        tagName: 'div',
        classList: 'container',
        bgColor: assignColor(0),
        styles: [
          {property: 'width', value: 100 + '%'},
          {property: 'border', value: '2px solid red'},
        ],
        nestedLevel: 0,
        childrens: [],
      },
    ];
  }

  public handleContainerAddition = () => {
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

  public handleItemAddition = (item: LayoutItemsList, newItem: LayoutItemsList) => {
    this.modifyLayoutItemsState(item, (elem: any) => {
      elem?.childrens.push(newItem);
    });
  };

  public handleInputChange = (item: LayoutItemsList, field: string, value: string) => {
    this.modifyLayoutItemsState(item, (elem: any) => {
      elem[field] = value;
    });
  };

  public handleModalOpen = (item: LayoutItemsList) => {
    this.state.context.isModalOpen = true;
    this.state.context.modalContent = item;
  }

  public handleModalClose = () => {
    this.state.context.isModalOpen = false;
    this.state.context.modalContent = defaultLayoutObject;
  };

  public render() {
    const {isLoading, layoutItemsList, isModalOpen, modalContent} = this.state.context;
    const value = {
      isLoading,
      isModalOpen,
      layoutItemsList,
      modalContent,
      handleModalOpen: this.handleModalOpen,
      handleModalClose: this.handleModalClose,
      handleItemAddition: this.handleItemAddition,
      handleInputChange: this.handleInputChange,
      handleContainerAddition: this.handleContainerAddition,
    };
    return <GlobalContext.Provider value={value}>{this.props.children}</GlobalContext.Provider>;
  }

  private resetStateToDefault = () => {
    this.state.context.isLoading = false;
    this.state.context.isModalOpen = false;
    this.state.context.modalContent = {};
  };

  private getCurrentItem = (arr: LayoutItemsList[], itemId: string) => {
    return arr.reduce((secondArray: LayoutItemsList | null, item: LayoutItemsList): any => {
      if (secondArray) {
        return secondArray;
      }
      if (item.id === itemId) {
        return item;
      }
      if (item['childrens']) {
        return this.getCurrentItem(item['childrens'], itemId);
      }
      return null;
    }, null);
  };

  private modifyLayoutItemsState = (item: LayoutItemsList, callback: Function, callbackWithStateCopy = false) => {
    const stateCopy = JSON.parse(JSON.stringify(this.state.context.layoutItemsList));
    const elem = this.getCurrentItem(stateCopy, item.id);
    if (callbackWithStateCopy) {
      callback(stateCopy);
    } else {
      callback(elem);
    }
    this.state.context.layoutItemsList = stateCopy;
  };
}

export { GlobalContext, GlobalProvider };
