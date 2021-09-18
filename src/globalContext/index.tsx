/* eslint-disable react/no-direct-mutation-state */
import React from 'react';

import { LayoutItemsList } from 'interfaces';

const defaultState = {
  isLoading: false,
  layoutItemsList: [
    {
      id: '',
      tagName: '',
      classList: '',
      styles: [],
      nestedLevel: 0,
      childrens: [],
    },
  ],
  handleItemAddition: () => {},
  hangleInputChange: () => {},
};

interface value {
  isLoading: boolean;
  layoutItemsList: LayoutItemsList[];
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

export const generateRandomId = () => {
  const randomString = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randomString() + Date.now() + randomString();
};

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
        classList: '',
        styles: [{ width: 100 + '%' }, { border: '2px solid red' }],
        nestedLevel: 0,
        childrens: [],
      },
    ];
  }

  private findItemNested = (arr: LayoutItemsList[], itemId: string) => {
    return arr.reduce((secondArray: LayoutItemsList | null, item: LayoutItemsList): any => {
      if (secondArray) {
        return secondArray;
      }
      if (item.id === itemId) {
        return item;
      }
      if (item['childrens']) {
        return this.findItemNested(item['childrens'], itemId);
      }
      return null;
    }, null);
  };

  private createStateCopy = (item: LayoutItemsList, callback: Function) => {
    const stateCopy = [...this.state.context.layoutItemsList];
    const elem = this.findItemNested(stateCopy, item.id);
    callback(elem);
    this.state.context.layoutItemsList = stateCopy;
  };

  public handleItemAddition = (item: LayoutItemsList, newItem: LayoutItemsList) => {
    this.createStateCopy(item, (elem: any) => {
      elem?.childrens.push(newItem);
    });
    console.log(this.state.context.layoutItemsList);
  };

  public hangleInputChange = (item: LayoutItemsList, field: string, value: string) => {
    this.createStateCopy(item, (elem: any) => {
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
    };
    return <GlobalContext.Provider value={value}>{this.props.children}</GlobalContext.Provider>;
  }
}
export { GlobalContext, GlobalProvider };
