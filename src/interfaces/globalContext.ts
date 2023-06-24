import { defaultStyleObjectInterface, LayoutItemsList, uniqueClassListInterface } from './default';

export interface GlobalContextStateInterface {
  context: () => void;
}

export interface value {
  isLoading: boolean;
  isModalOpen: boolean;
  copyTextState: {
    html: string;
    css: string;
  };
  editMode: boolean;
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
  handleEditModeChange: () => void;
}