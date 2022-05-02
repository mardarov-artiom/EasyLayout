// Global Context Interface

export interface value {
  isLoading: boolean;
  isModalOpen: boolean;
  copyTextState: {
    html: string;
    css: string;
  };
  modalContent: uniqueClassListInterface;
  uniqueClassList: uniqueClassListInterface[];
  layoutItemsList: LayoutItemsList[];
  globalApplicationSettings: {
    [key: string]: {
      label: string;
      value: string | number
    }
  };
  handleContainerAddition: () => void;
  handleModalOpen: (item: uniqueClassListInterface) => void;
  handleModalClose: () => void;
  handleItemAddition: (item: LayoutItemsList, newItem: LayoutItemsList) => void;
  handleInputChange: (item: LayoutItemsList, field: string, value: string) => void;
  handleStylePropertyChange: (item: uniqueClassListInterface, elementIndex: number, removeElement: boolean, style: defaultStyleObjectInterface) => void;
  handleItemStyleAddition: (item: uniqueClassListInterface) => void;
  checkIfStylesHaveEmptyField: () => boolean;
  copyHtmlToClipboard: () => void;
  copyCssToClipboard: () => void;
}


// Default Interfaces

interface defaultInterface {
  id: string
}

export interface LayoutItemsList extends defaultInterface {
  tagName: string;
  classList: string;
  bgColor: string;
  nestedLevel: number;
  childrens: LayoutItemsList[];
}

export interface defaultObjInterface extends defaultInterface  {
  open: string;
  middle: LayoutItemsList[] | defaultObjInterface[],
  close: string;
  nestedLevel: number
}

export interface defaultCSSObjInterface extends defaultInterface  {
  open: string;
  middle: LayoutItemsList[] | defaultCSSObjInterface[],
  nestedLevel: number;
}

export interface defaultStyleObjectInterface {
  property: string,
  value: string
}

export interface uniqueClassListInterface {
  className: string;
  styles: defaultStyleObjectInterface[];
}


// Styled Components Interfaces

export interface ModalState {
  modalState: boolean;
}

export interface PageOutputHTMLInterface {
  items: LayoutItemsList[];
}

export interface ItemListContainerInterface {
  nested: number;
}

export interface OverflowHiddenContainerInterface {
  padding?: number;
  background?: string;
}

export interface withBgProps {
  bg: string;
}

export interface PageOutputInternalWrapperInterface {
  name?: string;
  text: string;
  clickAction: () => void;
}

export interface ScrollableWrapperInterface extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string;
  display?: string;
  offset?: number;
}

export interface MainViewItemMainContainerInterface {
  childrens: LayoutItemsList[];
  settings: {
    [key: string]: {
      label: string;
      value: string | number
    }
  }
}


