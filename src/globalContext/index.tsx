/* eslint-disable react/no-direct-mutation-state */
import React from 'react';

import { LayoutItemsList } from 'interfaces';
import { assignColor } from 'helpers/colors';

const defaultState = {
  isLoading: false,
  layoutItemsList: [
    {
      id: '',
      tagName: '',
      classList: '',
      bgColor: '',
      styles: [],
      nestedLevel: 0,
      childrens: [],
    },
  ],
  handleContainerAddition: () => {},
  handleItemAddition: () => {},
  hangleInputChange: () => {},
};

export const generateRandomId = () => {
  const randomString = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randomString() + Date.now() + randomString();
};

export const defaultLayoutObject = {
  id: '',
  tagName: 'div',
  classList: '',
  nestedLevel: 0,
  bgColor: '',
  styles: [],
  childrens: [],
};

interface value {
  isLoading: boolean;
  layoutItemsList: LayoutItemsList[];
  handleContainerAddition: () => void;
  handleItemAddition: (item: LayoutItemsList, newItem: LayoutItemsList) => void;
  hangleInputChange: (item: LayoutItemsList, field: string, value: string) => void;
}

const GlobalContext = React.createContext<value>(defaultState);

const reactiveStateProxy = (component: any) =>
  new Proxy(defaultState, {
    set(obj: any, prop: any, value) {
      obj[prop] = value;
      component.setState({ context: reactiveStateProxy(component) });
      return true;
    },
  });

class GlobalProvider extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  state = {
    context: reactiveStateProxy(this),
  };

  componentDidMount() {
    this.state.context.isLoading = false;
    this.state.context.layoutItemsList = [
      {
        id: generateRandomId(),
        tagName: 'div',
        classList: 'container',
        bgColor: assignColor(0),
        styles: [
          { property: 'width', value: 100 + '%' },
          { property: 'border', value: '2px solid red' },
        ],
        nestedLevel: 0,
        childrens: [],
      },
    ];
  }

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

  public handleContainerAddition = () => {
    const newLayoutItem = { ...defaultLayoutObject, id: generateRandomId() };
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

  public hangleInputChange = (item: LayoutItemsList, field: string, value: string) => {
    this.modifyLayoutItemsState(item, (elem: any) => {
      elem[field] = value;
    });
  };

  public render() {
    const { isLoading, layoutItemsList } = this.state.context;
    const value = {
      isLoading,
      layoutItemsList,
      handleItemAddition: this.handleItemAddition,
      hangleInputChange: this.hangleInputChange,
      handleContainerAddition: this.handleContainerAddition,
    };
    return <GlobalContext.Provider value={value}>{this.props.children}</GlobalContext.Provider>;
  }
}
export { GlobalContext, GlobalProvider };
